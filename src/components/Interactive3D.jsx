import { useEffect, useRef } from 'react'

// Hook for 3D tilt effect on cards
export function useTilt3D(intensity = 15) {
    const ref = useRef(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const handleMouseMove = (e) => {
            const rect = element.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            const centerX = rect.width / 2
            const centerY = rect.height / 2

            const rotateX = ((y - centerY) / centerY) * -intensity
            const rotateY = ((x - centerX) / centerX) * intensity

            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
        }

        const handleMouseLeave = () => {
            element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
        }

        element.addEventListener('mousemove', handleMouseMove)
        element.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            element.removeEventListener('mousemove', handleMouseMove)
            element.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [intensity])

    return ref
}

// Component wrapper for 3D tilt
export function Tilt3D({ children, className = '', intensity = 15 }) {
    const ref = useTilt3D(intensity)

    return (
        <div ref={ref} className={`tilt-3d ${className}`} style={{ transition: 'transform 0.1s ease-out' }}>
            {children}
        </div>
    )
}

// Mouse follower sparkles component
export function MouseSparkles() {
    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const sparkles = []
        const colors = ['#FFB6D9', '#FFD700', '#FF69B4', '#FFF']

        const createSparkle = (x, y) => {
            const sparkle = document.createElement('div')
            sparkle.className = 'sparkle'
            sparkle.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${x}px;
        top: ${y}px;
        animation: sparkle-fade 0.6s ease-out forwards;
      `
            container.appendChild(sparkle)

            setTimeout(() => sparkle.remove(), 600)
        }

        let lastTime = 0
        const handleMouseMove = (e) => {
            const now = Date.now()
            if (now - lastTime > 50) { // Throttle
                createSparkle(e.clientX, e.clientY)
                lastTime = now
            }
        }

        document.addEventListener('mousemove', handleMouseMove)
        return () => document.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return <div ref={containerRef} className="sparkles-container" />
}

export default { useTilt3D, Tilt3D, MouseSparkles }
