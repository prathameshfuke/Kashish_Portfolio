import { useEffect, useState } from 'react'
import './Hero.css'

function Hero() {
    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setShowContent(true), 100)
        return () => clearTimeout(timer)
    }, [])

    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <div className={`hero-content ${showContent ? 'visible' : ''}`}>
                    <div className="hero-text">
                        <div className="hero-greeting">
                            <span className="greeting-wave">👋</span>
                            <span className="greeting-text">Hello there!</span>
                        </div>

                        <h1 className="hero-title">
                            <span className="title-line">Hi, I'm</span>
                            <span className="title-name">
                                Kashish
                                <span className="title-sparkles">
                                    <span className="sparkle sparkle-1">✨</span>
                                    <span className="sparkle sparkle-2">✦</span>
                                    <span className="sparkle sparkle-3">✨</span>
                                </span>
                            </span>
                        </h1>

                        <p className="hero-subtitle">
                            <span className="subtitle-role">Visual Communication Designer</span>
                            <span className="subtitle-divider">•</span>
                            <span className="subtitle-skills">UI/UX | Branding & Social Media</span>
                        </p>

                        <p className="hero-description">
                            Crafting meaningful visual experiences that connect brands with their audiences.
                            Let's create something beautiful together!
                        </p>

                        <div className="hero-cta">
                            <a href="#portfolio" className="btn btn-primary hoverable">
                                View My Work
                                <span>→</span>
                            </a>
                            <a href="#contact" className="btn btn-outline hoverable">
                                Let's Talk
                            </a>
                        </div>

                        <div className="hero-badge">
                            <img src="/assets/327a01ccee37b6a76091cb20b2917f77.png" alt="Designer" className="animate-float" />
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="character-wrapper">
                            <div className="character-glow" />
                            <img
                                src="/assets/190638cf-3145-4cc6-8dda-91046062e636.png"
                                alt="Kashish - Visual Designer"
                                className="hero-character animate-breathe"
                            />
                        </div>

                        {/* Floating decorative elements */}
                        <div className="hero-decorations">
                            <span className="deco deco-heart">💗</span>
                            <span className="deco deco-star">⭐</span>
                            <span className="deco deco-flower">🌸</span>
                            <span className="deco deco-sparkle">✨</span>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <button className="scroll-indicator hoverable" onClick={scrollToAbout}>
                    <span className="scroll-text">Scroll to explore</span>
                    <span className="scroll-arrow animate-bounce">↓</span>
                </button>
            </div>

            {/* Background decoration */}
            <div className="hero-bg-pattern" />
        </section>
    )
}

export default Hero
