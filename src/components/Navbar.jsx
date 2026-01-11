import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            // Update active section based on scroll position
            const sections = ['home', 'about', 'experience', 'skills', 'portfolio', 'fun', 'contact']
            for (const section of sections.reverse()) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 150) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMobileMenuOpen(false)
    }

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'portfolio', label: 'Work' },
        { id: 'contact', label: 'Contact' },
    ]

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    <a
                        href="#home"
                        className="navbar-logo"
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToSection('home')
                        }}
                    >
                        <span className="logo-text">Kashish</span>
                        <span className="logo-sparkle">✨</span>
                    </a>

                    <div className="navbar-links">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection(link.id)
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <button
                        className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu-header">
                    <span className="logo-text">Kashish</span>
                    <span className="logo-sparkle">✨</span>
                </div>
                <div className="mobile-menu-links">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={activeSection === link.id ? 'active' : ''}
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection(link.id)
                            }}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
                <div className="mobile-menu-footer">
                    <p>Let's create magic! 💫</p>
                </div>
            </div>
        </>
    )
}

export default Navbar
