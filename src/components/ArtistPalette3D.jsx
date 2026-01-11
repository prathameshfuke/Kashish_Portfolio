import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './ArtistPalette3D.css'

// Color blob configurations
const colorBlobs = [
    { id: 'red', color: '#E53935', highlight: '#FF6659', shadow: '#AB000D', path: '/about', label: 'About', cx: 28, cy: 32 },
    { id: 'yellow', color: '#FFEB3B', highlight: '#FFFF72', shadow: '#C8B900', path: '/projects', label: 'Projects', cx: 45, cy: 22 },
    { id: 'green', color: '#43A047', highlight: '#76D275', shadow: '#00701A', path: '/work', label: 'Work', cx: 72, cy: 28 },
    { id: 'blue', color: '#1E88E5', highlight: '#6AB7FF', shadow: '#005CB2', path: '/contact', label: 'Contact', cx: 30, cy: 55 },
    { id: 'white', color: '#F5F5F5', highlight: '#FFFFFF', shadow: '#C2C2C2', path: '/', label: 'Home', cx: 48, cy: 68 },
]

// Individual Paint Blob Component
function PaintBlob({ blob, onNavigate }) {
    return (
        <motion.g
            className="paint-blob"
            onClick={() => onNavigate(blob.path)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            style={{ cursor: 'pointer' }}
        >
            {/* Blob shadow */}
            <ellipse
                cx={blob.cx + 1}
                cy={blob.cy + 2}
                rx="8"
                ry="6"
                fill="rgba(0,0,0,0.2)"
            />

            {/* Main blob shape */}
            <ellipse
                cx={blob.cx}
                cy={blob.cy}
                rx="8"
                ry="6"
                fill={`url(#gradient-${blob.id})`}
                className="blob-shape"
            />

            {/* Highlight reflection */}
            <ellipse
                cx={blob.cx - 2}
                cy={blob.cy - 2}
                rx="3"
                ry="2"
                fill={blob.highlight}
                opacity="0.8"
            />

            {/* Gradient definition */}
            <defs>
                <radialGradient id={`gradient-${blob.id}`} cx="30%" cy="30%" r="70%">
                    <stop offset="0%" stopColor={blob.highlight} />
                    <stop offset="50%" stopColor={blob.color} />
                    <stop offset="100%" stopColor={blob.shadow} />
                </radialGradient>
            </defs>

            {/* Tooltip */}
            <title>{blob.label}</title>
        </motion.g>
    )
}

function ArtistPalette3D() {
    const containerRef = useRef(null)
    const navigate = useNavigate()

    // Motion values for 3D rotation
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Spring physics for smooth animation
    const springConfig = { stiffness: 300, damping: 30 }
    const xSpring = useSpring(x, springConfig)
    const ySpring = useSpring(y, springConfig)

    // Transform mouse position to rotation
    const rotateX = useTransform(ySpring, [-0.5, 0.5], [15, -15])
    const rotateY = useTransform(xSpring, [-0.5, 0.5], [-15, 15])

    const handleMouseMove = (e) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const xPct = mouseX / rect.width - 0.5
        const yPct = mouseY / rect.height - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    const handleNavigate = (path) => {
        navigate(path)
    }

    return (
        <div className="palette-card">
            <div className="palette-card-header">
                <span className="palette-title">Navigate</span>
                <span className="palette-subtitle">Click a color to explore</span>
            </div>
            <motion.div
                ref={containerRef}
                className="palette-container"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
            >
                <svg
                    viewBox="0 0 100 100"
                    className="palette-svg"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Definitions */}
                    <defs>
                        {/* Palette base gradient */}
                        <radialGradient id="palette-gradient" cx="40%" cy="40%" r="60%">
                            <stop offset="0%" stopColor="#F4C794" />
                            <stop offset="50%" stopColor="#E8B171" />
                            <stop offset="100%" stopColor="#D4955A" />
                        </radialGradient>

                        {/* Edge highlight */}
                        <linearGradient id="edge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#D4955A" />
                            <stop offset="100%" stopColor="#C08050" />
                        </linearGradient>

                        {/* Drop shadow filter */}
                        <filter id="palette-shadow" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3" />
                        </filter>
                    </defs>

                    {/* Palette shadow */}
                    <ellipse
                        cx="52"
                        cy="58"
                        rx="42"
                        ry="38"
                        fill="rgba(0,0,0,0.15)"
                    />

                    {/* Main palette body - organic shape */}
                    <path
                        d="M 15 50 
                           C 10 35, 20 15, 45 12 
                           C 60 10, 80 15, 88 30 
                           C 95 45, 92 65, 80 78 
                           C 65 92, 35 90, 20 75 
                           C 12 65, 12 55, 15 50 Z"
                        fill="url(#palette-gradient)"
                        filter="url(#palette-shadow)"
                        className="palette-body"
                    />

                    {/* Edge/rim highlight */}
                    <path
                        d="M 15 50 
                           C 10 35, 20 15, 45 12 
                           C 60 10, 80 15, 88 30 
                           C 95 45, 92 65, 80 78 
                           C 65 92, 35 90, 20 75 
                           C 12 65, 12 55, 15 50 Z"
                        fill="none"
                        stroke="url(#edge-gradient)"
                        strokeWidth="3"
                        className="palette-edge"
                    />

                    {/* Thumb hole */}
                    <ellipse
                        cx="68"
                        cy="55"
                        rx="8"
                        ry="12"
                        fill="#1a1a2e"
                        className="thumb-hole"
                    />

                    {/* Thumb hole inner shadow */}
                    <ellipse
                        cx="68"
                        cy="53"
                        rx="6"
                        ry="9"
                        fill="#0d0d1a"
                    />

                    {/* Wood grain lines */}
                    <path
                        d="M 25 40 Q 40 38, 55 42"
                        stroke="#D4955A"
                        strokeWidth="0.5"
                        fill="none"
                        opacity="0.5"
                    />
                    <path
                        d="M 30 60 Q 45 58, 58 62"
                        stroke="#D4955A"
                        strokeWidth="0.5"
                        fill="none"
                        opacity="0.5"
                    />

                    {/* Paint blobs */}
                    {colorBlobs.map((blob) => (
                        <PaintBlob
                            key={blob.id}
                            blob={blob}
                            onNavigate={handleNavigate}
                        />
                    ))}
                </svg>
            </motion.div>

            <div className="palette-legend">
                {colorBlobs.map((blob) => (
                    <motion.div
                        key={blob.id}
                        className="legend-item"
                        onClick={() => handleNavigate(blob.path)}
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span
                            className="legend-dot"
                            style={{ backgroundColor: blob.color }}
                        />
                        <span className="legend-label">{blob.label}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default ArtistPalette3D
