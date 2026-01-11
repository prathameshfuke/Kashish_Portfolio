import { useRef, useState, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import * as THREE from 'three'
import './Palette3DScene.css'

// Colors positioned directly ON the palette surface (Y=0)
const colorBlobs = [
    { id: 'red', color: '#E74C3C', emissive: '#C0392B', path: '/about', label: 'About', position: [-0.5, 0, 0.3] },
    { id: 'yellow', color: '#F1C40F', emissive: '#F39C12', path: '/projects', label: 'Projects', position: [-0.1, 0, 0.5] },
    { id: 'green', color: '#27AE60', emissive: '#1E8449', path: '/work', label: 'Work', position: [0.35, 0, 0.35] },
    { id: 'blue', color: '#3498DB', emissive: '#2980B9', path: '/contact', label: 'Contact', position: [-0.5, 0, -0.15] },
    { id: 'white', color: '#ECF0F1', emissive: '#BDC3C7', path: '/', label: 'Home', position: [-0.1, 0, -0.3] },
]

// Paint blob sitting ON the palette
function PaintBlob({ color, emissive, position, label, path, onNavigate }) {
    const meshRef = useRef()
    const [hovered, setHovered] = useState(false)

    useFrame(() => {
        if (meshRef.current) {
            const targetScale = hovered ? 1.12 : 1
            meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
        }
    })

    return (
        <group position={position}>
            <mesh
                ref={meshRef}
                onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer' }}
                onPointerOut={() => { setHovered(false); document.body.style.cursor = 'auto' }}
                onClick={(e) => { e.stopPropagation(); onNavigate(path) }}
                position={[0, -0.01, 0]}
            >
                <sphereGeometry args={[0.12, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
                <meshStandardMaterial
                    color={color}
                    emissive={hovered ? emissive : '#000000'}
                    emissiveIntensity={hovered ? 0.4 : 0}
                    roughness={0.12}
                    metalness={0.05}
                />
            </mesh>

            <mesh position={[-0.02, 0.06, 0.02]}>
                <sphereGeometry args={[0.03, 12, 8]} />
                <meshBasicMaterial color="white" transparent opacity={0.5} />
            </mesh>

            {hovered && (
                <Html position={[0, 0.2, 0]} center style={{ pointerEvents: 'none' }}>
                    <div className="blob-label">{label}</div>
                </Html>
            )}
        </group>
    )
}

// Palette with wood texture
function PaletteShape() {
    const paletteShape = useMemo(() => {
        const shape = new THREE.Shape()

        shape.moveTo(-0.7, 0)
        shape.bezierCurveTo(-0.9, 0.3, -0.8, 0.6, -0.3, 0.7)
        shape.bezierCurveTo(0.1, 0.78, 0.48, 0.65, 0.65, 0.42)
        shape.bezierCurveTo(0.8, 0.22, 0.8, -0.05, 0.65, -0.24)
        shape.bezierCurveTo(0.48, -0.48, 0.1, -0.6, -0.26, -0.5)
        shape.bezierCurveTo(-0.58, -0.42, -0.78, -0.22, -0.7, 0)

        const holePath = new THREE.Path()
        holePath.absellipse(0.38, -0.04, 0.09, 0.13, 0, Math.PI * 2, false, 0)
        shape.holes.push(holePath)

        return shape
    }, [])

    const woodMaterial = useMemo(() => {
        const canvas = document.createElement('canvas')
        canvas.width = 256
        canvas.height = 256
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = '#D4A574'
        ctx.fillRect(0, 0, 256, 256)

        for (let i = 0; i < 25; i++) {
            ctx.strokeStyle = `rgba(160, 100, 60, ${0.06 + Math.random() * 0.08})`
            ctx.lineWidth = 1 + Math.random() * 1.2
            ctx.beginPath()
            const y = Math.random() * 256
            ctx.moveTo(0, y)
            for (let x = 0; x < 256; x += 8) {
                ctx.lineTo(x, y + Math.sin(x * 0.015) * 2.5 + Math.random() * 1.5)
            }
            ctx.stroke()
        }

        const texture = new THREE.CanvasTexture(canvas)

        return new THREE.MeshStandardMaterial({
            map: texture,
            roughness: 0.45,
            side: THREE.DoubleSide
        })
    }, [])

    return (
        <mesh rotation={[Math.PI / 2, 0, 0]} material={woodMaterial}>
            <extrudeGeometry args={[paletteShape, { depth: 0.08, bevelEnabled: true, bevelThickness: 0.012, bevelSize: 0.012, bevelSegments: 2 }]} />
        </mesh>
    )
}

function PaletteScene({ onNavigate }) {
    const groupRef = useRef()

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.06) * 0.02
        }
    })

    return (
        <group ref={groupRef} scale={[2.4, 2.4, 2.4]}>
            <PaletteShape />
            {colorBlobs.map((blob) => (
                <PaintBlob key={blob.id} {...blob} onNavigate={onNavigate} />
            ))}
        </group>
    )
}

function LoadingFallback() {
    return (
        <div className="palette-loading">
            <div className="loading-spinner"></div>
            <span>Loading 3D...</span>
        </div>
    )
}

function Palette3DScene({ visible = true, onNavigate }) {
    const handleNavigate = (path) => {
        if (onNavigate) { onNavigate(path) } else { window.location.href = path }
    }

    if (!visible) return null

    return (
        <div className="palette-3d-container">
            <div className="palette-3d-card">
                <div className="palette-3d-header">
                    <h3 className="palette-3d-title">Navigate</h3>
                    <p className="palette-3d-subtitle">Click a color to explore • Drag to rotate</p>
                </div>

                <div className="palette-3d-canvas">
                    <Suspense fallback={<LoadingFallback />}>
                        <Canvas
                            camera={{ position: [0, 2.5, 5], fov: 45 }}
                            gl={{ alpha: true }}
                            style={{ background: 'transparent' }}
                        >
                            <OrbitControls
                                enableZoom={false}
                                enablePan={false}
                                minPolarAngle={Math.PI / 6}
                                maxPolarAngle={Math.PI / 2.2}
                                autoRotate
                                autoRotateSpeed={0.06}
                            />

                            <ambientLight intensity={0.85} />
                            <directionalLight position={[3, 5, 3]} intensity={0.65} />
                            <directionalLight position={[-2, 3, -2]} intensity={0.25} />

                            <PaletteScene onNavigate={handleNavigate} />
                        </Canvas>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default Palette3DScene
