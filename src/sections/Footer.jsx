import { useState, useEffect } from 'react'
import './Footer.css'

function Footer() {
    const [showBackToTop, setShowBackToTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 500)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <span className="footer-logo">Kashish ✨</span>
                        <p className="footer-tagline">Designing with passion, creating with purpose.</p>
                    </div>

                    <div className="footer-links">
                        <a href="#home" className="footer-link hoverable">Home</a>
                        <a href="#about" className="footer-link hoverable">About</a>
                        <a href="#experience" className="footer-link hoverable">Experience</a>
                        <a href="#portfolio" className="footer-link hoverable">Work</a>
                        <a href="#contact" className="footer-link hoverable">Contact</a>
                    </div>

                    <div className="footer-social">
                        <a
                            href="https://linkedin.com/in/kashish-oswal-68b2262a7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link hoverable"
                            aria-label="LinkedIn"
                        >
                            💼
                        </a>
                        <a
                            href="https://behance.net/kashishoswal1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link hoverable"
                            aria-label="Behance"
                        >
                            🎨
                        </a>
                        <a
                            href="mailto:kashishoswal.work@gmail.com"
                            className="social-link hoverable"
                            aria-label="Email"
                        >
                            📧
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        © {currentYear} Kashish Oswal. Designed with ❤️ and ☕
                    </p>
                    <p className="made-with">
                        <span>Made with</span>
                        <span className="tech-stack">React • Vite • Lots of ✨</span>
                    </p>
                </div>
            </div>

            {/* Back to top button */}
            <button
                className={`back-to-top hoverable ${showBackToTop ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Back to top"
            >
                ↑
            </button>
        </footer>
    )
}

export default Footer
