import { useRef, useState, useEffect, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import beautyMagazine from '../assets/beauty-magazine.png'
import myCloset from '../assets/my-closet.png'
import moodChocolates from '../assets/mood-chocolates.png'
import saarBrochure from '../assets/saar-brochure.png'
import websiteDesign from '../assets/website-design.png'
import typeZine from '../assets/type-zine.png'
import jainismBook from '../assets/jainism-book.png'
import imagicaa from '../assets/imagicaa.png'
import behanceLogo from '../assets/behance.webp'

import './Home.css'

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const featuredProjects = [
    { title: 'BEAUTY MAGAZINE', image: beautyMagazine, link: 'https://www.behance.net/gallery/241958693/Beauty-Magazine' },
    { title: 'THE LITTLE BOOK OF PEACE', image: jainismBook, link: '#' },
    { title: 'MY CLOSET APP', image: myCloset, link: 'https://www.behance.net/gallery/223568317/My-Closet-App-Design' },
    { title: 'IMAGICCA WAYFINDING', image: imagicaa, link: '#' },
]

const marqueeText =
    'Visual Designer ✦ Brand Identity ✦ UI/UX ✦ Packaging ✦ Social Media ✦ Publication ✦ Print Media ✦ Communication Design ✦ '

/* ─────────────────────────────────────────────
   LinkedIn SVG Icon
───────────────────────────────────────────── */
function LinkedInIcon({ size = 36 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="LinkedIn">
            <rect width="36" height="36" rx="6" fill="#0A66C2" />
            <path d="M13 14H10V26H13V14Z" fill="white" />
            <circle cx="11.5" cy="11" r="1.8" fill="white" />
            <path d="M18 18.5C18 17.1 18.9 16.5 20 16.5C21.1 16.5 22 17 22 18.7V26H25V18C25 15 23.2 14 21 14C19.5 14 18.5 14.7 18 15.5V14H15V26H18V18.5Z" fill="white" />
        </svg>
    )
}

/* ─────────────────────────────────────────────
   Featured Work Carousel
───────────────────────────────────────────── */
function FeaturedCarousel({ projects }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const outerRef = useRef(null)
    const [slideWidth, setSlideWidth] = useState(600) // safe initial estimate

    // useLayoutEffect fires synchronously after DOM mutations, before browser paint
    useLayoutEffect(() => {
        const updateWidth = () => {
            if (outerRef.current) {
                const w = outerRef.current.offsetWidth * 0.65
                if (w > 0) setSlideWidth(w)
            }
        }
        updateWidth()
        const observer = new ResizeObserver(updateWidth)
        if (outerRef.current) observer.observe(outerRef.current)
        return () => observer.disconnect()
    }, [])

    const GAP = 24
    const maxIndex = projects.length - 1

    const prev = () => setCurrentIndex((i) => (i === 0 ? maxIndex : i - 1))
    const next = () => setCurrentIndex((i) => (i === maxIndex ? 0 : i + 1))

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((i) => (i === maxIndex ? 0 : i + 1))
        }, 3000)
        return () => clearInterval(timer)
    }, [maxIndex])

    return (
        <div className="featured-carousel-wrapper">
            {/* Left arrow */}
            <button
                className="featured-arrow prev"
                onClick={prev}
                aria-label="Previous project"
            >
                ‹
            </button>

            {/* Track container */}
            <div className="featured-carousel-outer" ref={outerRef}>
                <motion.div
                    className="featured-carousel-track"
                    animate={{ x: -(currentIndex * (slideWidth + GAP)) }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    {projects.map((p, i) => {
                        const isPlaceholder = p.link === '#'
                        const imageElement = <img src={p.image} alt={p.title} className="featured-slide-img" />
                        
                        const content = (
                            <div className="featured-slide-inner">
                                {isPlaceholder ? (
                                    <div className="featured-slide-img-wrapper">
                                        {imageElement}
                                    </div>
                                ) : (
                                    <a
                                        href={p.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="featured-slide-img-wrapper"
                                        aria-label={`View ${p.title} on Behance`}
                                    >
                                        {imageElement}
                                    </a>
                                )}
                                <div className="featured-slide-info">
                                    <p className="featured-slide-title">{p.title}</p>
                                </div>
                            </div>
                        )
                        return (
                            <div
                                key={i}
                                className="featured-slide"
                                style={{ width: slideWidth, minWidth: slideWidth }}
                            >
                                {content}
                            </div>
                        )
                    })}
                </motion.div>
            </div>

            {/* Right arrow */}
            <button
                className="featured-arrow next"
                onClick={next}
                aria-label="Next project"
            >
                ›
            </button>
        </div>
    )
}

/* ─────────────────────────────────────────────
   Home Page
───────────────────────────────────────────── */
function Home() {
    return (
        <div className="home-page">
            {/* ══════════════════════════════════
                SECTION 1 — HERO / ABOUT PREVIEW
                ══════════════════════════════════ */}
            <section className="hero-section">
                <div className="hero-grid">
                    {/* Left column — polaroid */}
                    <motion.div
                        className="hero-left"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <img
                            src="/assets/photo/kashish-photo.png"
                            alt="Kashish Oswal"
                            className="hero-main-img"
                        />
                    </motion.div>

                    {/* Right column — text */}
                    <motion.div
                        className="hero-right"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h1 className="hero-heading">
                            <span style={{ whiteSpace: 'nowrap' }}>
                                <span className="hero-line-red">Designing </span>
                                <span className="hero-line-blue">Ideas</span>
                            </span>
                            <br />
                            <span style={{ whiteSpace: 'nowrap' }} className="hero-line-red">into meaningful</span>
                            <br />
                            <span style={{ whiteSpace: 'nowrap' }} className="hero-line-red">visual stories.</span>
                        </h1>

                        <p className="hero-body">
                            I'm Kashish, a Visual Communication Design student at MIT-WPU with
                            a passion for creating thoughtful visual experiences.
                        </p>
                        <p className="hero-body">
                            My work explores branding, editorial design, packaging, and digital
                            interfaces. I enjoy translating ideas into clear and expressive visual
                            systems that communicate effectively and creatively.
                        </p>

                        <Link to="/about" className="read-more-link">
                            <span>Read More</span>
                            <motion.span
                                className="read-more-arrow"
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.2 }}
                            >
                                →
                            </motion.span>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 2 — RED MARQUEE STRIP
                ══════════════════════════════════ */}
            <div className="marquee-strip" aria-hidden="true">
                <div className="marquee-track">
                    <span className="marquee-text">{marqueeText}</span>
                    <span className="marquee-text">{marqueeText}</span>
                    <span className="marquee-text">{marqueeText}</span>
                </div>
            </div>

            {/* ══════════════════════════════════
                SECTION 3 — FEATURED WORK
                ══════════════════════════════════ */}
            <section className="featured-section">
                <h2 className="featured-heading">FEATURED WORK</h2>

                <FeaturedCarousel projects={featuredProjects} />
            </section>

            {/* ══════════════════════════════════
                SECTION 4 — CONTACT / FOOTER
                ══════════════════════════════════ */}
            <section className="home-contact">
                <div className="home-contact-grid">
                    {/* Left */}
                    <div className="home-contact-left">
                        <h3 className="home-contact-heading">
                            Let's create something meaningful together!
                        </h3>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="home-contact-input"
                            aria-label="Your name"
                        />
                        <motion.button
                            className="home-contact-submit"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                            aria-label="Submit contact form"
                        >
                            Submit →
                        </motion.button>
                    </div>

                    {/* Divider */}
                    <div className="home-contact-divider" />

                    {/* Right */}
                    <div className="home-contact-right">
                        <p className="contact-label">SOCIAL MEDIA</p>
                        <div className="contact-social-row">
                            <a
                                href="https://www.linkedin.com/in/kashish-oswal"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn profile"
                                className="contact-social-icon"
                            >
                                <LinkedInIcon size={36} />
                            </a>
                            <a
                                href="https://www.behance.net/kashishoswal1"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Behance profile"
                                className="contact-social-icon"
                            >
                                <img src={behanceLogo} alt="Behance" width="36" height="36" className="contact-behance-icon" />
                            </a>
                        </div>

                        <p className="contact-label" style={{ marginTop: 24 }}>CONTACT</p>
                        <p className="contact-value">+91 917 511 3457</p>

                        <p className="contact-label" style={{ marginTop: 16 }}>EMAIL</p>
                        <a
                            href="mailto:kashishoswal.work@gmail.com"
                            className="contact-email"
                        >
                            kashishoswal.work@gmail.com
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
