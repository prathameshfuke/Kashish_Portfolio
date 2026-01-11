import { useState, useEffect } from 'react'
import './Loader.css'

function Loader() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval)
                    return 100
                }
                return prev + Math.random() * 15
            })
        }, 150)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="loader">
            <div className="loader-content">
                <div className="loader-sticker animate-float">
                    <img src="/assets/061d0394200b7de79c40727bd6bf48c0.png" alt="Loading..." />
                </div>
                <div className="loader-text">
                    <span className="loader-name">Kashish Oswal</span>
                    <span className="loader-subtitle">Visual Communication Designer</span>
                </div>
                <div className="loader-progress">
                    <div
                        className="loader-progress-bar"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                </div>
                <div className="loader-percentage">{Math.min(Math.round(progress), 100)}%</div>
            </div>

            {/* Decorative elements */}
            <div className="loader-sparkles">
                {[...Array(10)].map((_, i) => (
                    <span
                        key={i}
                        className="loader-sparkle"
                        style={{
                            left: `${10 + Math.random() * 80}%`,
                            top: `${10 + Math.random() * 80}%`,
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    >
                        ✦
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Loader
