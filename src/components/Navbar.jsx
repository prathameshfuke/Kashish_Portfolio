import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
    { path: '/', label: 'HOME', end: true },
    { path: '/about', label: 'ABOUT', end: false },
    { path: '/portfolio', label: 'PORTFOLIO', end: false },
    { path: '/contact', label: 'CONTACT', end: false },
]

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <nav className="navbar">
                <NavLink to="/" className="navbar-logo" end>
                    Kashish Oswal
                </NavLink>

                <div className="navbar-links">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            end={link.end}
                            className={({ isActive }) =>
                                `nav-pill${isActive ? ' active' : ''}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                <button
                    className={`hamburger${menuOpen ? ' open' : ''}`}
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-label="Toggle navigation menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </nav>

            {/* Mobile menu overlay */}
            {menuOpen && (
                <div
                    className="mobile-overlay"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            {/* Mobile menu drawer */}
            <div className={`mobile-drawer${menuOpen ? ' open' : ''}`}>
                <div className="mobile-drawer-logo">Kashish Oswal</div>
                <div className="mobile-drawer-links">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            end={link.end}
                            className={({ isActive }) =>
                                `mobile-nav-link${isActive ? ' active' : ''}`
                            }
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Navbar
