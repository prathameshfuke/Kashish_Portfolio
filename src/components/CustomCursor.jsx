import { useState, useEffect, useCallback } from 'react'
import './CustomCursor.css'

function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)
    const [isClicking, setIsClicking] = useState(false)
    const [trail, setTrail] = useState([])

    const handleMouseMove = useCallback((e) => {
        setPosition({ x: e.clientX, y: e.clientY })

        // Add to trail
        setTrail(prev => {
            const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }]
            return newTrail.slice(-8) // Keep last 8 positions
        })
    }, [])

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('mouseup', handleMouseUp)

        // Check for hoverable elements
        const checkHover = (e) => {
            const target = e.target
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.closest('[role="button"]') ||
                target.classList.contains('hoverable')
            setIsHovering(isInteractive)
        }

        document.addEventListener('mouseover', checkHover)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('mouseup', handleMouseUp)
            document.removeEventListener('mouseover', checkHover)
        }
    }, [handleMouseMove])

    return (
        <>
            {/* Trail */}
            {trail.map((point, index) => (
                <div
                    key={point.id}
                    className="cursor-trail"
                    style={{
                        left: point.x,
                        top: point.y,
                        opacity: (index + 1) / trail.length * 0.5,
                        transform: `translate(-50%, -50%) scale(${(index + 1) / trail.length * 0.8})`,
                    }}
                />
            ))}

            {/* Main cursor */}
            <div
                className={`custom-cursor ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
                style={{
                    left: position.x,
                    top: position.y,
                }}
            >
                <div className="cursor-dot" />
            </div>

            {/* Outer ring */}
            <div
                className={`cursor-ring ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
                style={{
                    left: position.x,
                    top: position.y,
                }}
            />
        </>
    )
}

export default CustomCursor
