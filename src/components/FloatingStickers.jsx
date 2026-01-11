import { useEffect, useState } from 'react'
import './FloatingStickers.css'

const stickers = [
    { id: 1, src: '/assets/62bf5469ac4fb03d5a5073e93cb521a6.png', alt: 'Pink bow', size: 80 },
    { id: 2, src: '/assets/637c17a9a0f2b6bbc45fe8ff594a07d6.png', alt: 'Disco ball', size: 100 },
    { id: 3, src: '/assets/bcd4e95a7d536d3358f8b78d4ad7a52d.png', alt: 'Cherries', size: 90 },
    { id: 4, src: '/assets/65b141dcce142b657249c4c6c0c1e995.png', alt: 'Cat with flower', size: 70 },
    { id: 5, src: '/assets/df767f7b266c96cd189aca767d8182ec.png', alt: 'Wax seal', size: 60 },
]

function FloatingStickers() {
    const [positions, setPositions] = useState([])

    useEffect(() => {
        // Generate random initial positions
        const newPositions = stickers.map((sticker, index) => ({
            ...sticker,
            x: Math.random() * 80 + 10, // 10-90% from left
            y: Math.random() * 80 + 10, // 10-90% from top
            delay: index * 0.5,
            duration: 15 + Math.random() * 10, // 15-25s
            rotation: Math.random() * 20 - 10, // -10 to 10 degrees
        }))
        setPositions(newPositions)
    }, [])

    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="floating-stickers">
            {positions.map((sticker) => (
                <div
                    key={sticker.id}
                    className="floating-sticker"
                    style={{
                        left: `${sticker.x}%`,
                        top: `${sticker.y}%`,
                        width: sticker.size,
                        height: sticker.size,
                        animationDelay: `${sticker.delay}s`,
                        animationDuration: `${sticker.duration}s`,
                        transform: `translateY(${scrollY * (0.1 + sticker.id * 0.02)}px) rotate(${sticker.rotation}deg)`,
                    }}
                >
                    <img src={sticker.src} alt={sticker.alt} />
                </div>
            ))}

            {/* Static sparkles */}
            {[...Array(15)].map((_, i) => (
                <div
                    key={`sparkle-${i}`}
                    className="floating-sparkle"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        fontSize: `${0.8 + Math.random() * 1}rem`,
                    }}
                >
                    ✦
                </div>
            ))}
        </div>
    )
}

export default FloatingStickers
