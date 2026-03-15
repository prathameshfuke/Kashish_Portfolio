import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    // Animation variants for Section 2
    const section2ImageVariant = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.55, ease: "easeOut" }
        }
    }

    const section2TextVariant = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.55, delay: 0.15, ease: "easeOut" }
        }
    }

    return (
        <div className="home-page">
            {/* ==================== SECTION 1: HERO ==================== */}
            <section className="hero">
                <img
                    src="/assets/photo/herosection.png"
                    alt="Kashish Oswal"
                    className="hero-bg-image"
                />
                <div className="hero-text">
                    <span className="hero-label">Visual Communication Designer</span>
                    <h1 className="hero-name">KASHISH<br/>OSWAL</h1>
                    <p className="hero-quote">Designing ideas into meaningful visual stories.</p>
                </div>
            </section>

            {/* ==================== MARQUEE SCROLLING STRIP ==================== */}
            <div className="marquee-strip">
                <div className="marquee-content">
                    <span>VISUAL DESIGNER • VISUAL DESIGNER • VISUAL DESIGNER • VISUAL DESIGNER • VISUAL DESIGNER • VISUAL DESIGNER • </span>
                    <span>VISUAL DESIGNER • VISUAL DESIGNER • VISUAL DESIGNER • VISUAL DESIGNER • VISUAL DESIGNER • VISUAL DESIGNER • </span>
                </div>
            </div>

            {/* ==================== SECTION 2: DESIGN PHILOSOPHY ==================== */}
            <motion.section
                className="philosophy-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="philosophy-grid">
                    {/* Left Column - Badge + Image */}
                    <motion.div
                        className="philosophy-image"
                        variants={section2ImageVariant}
                    >
                        <div className="portfolio-badge">
                            <span>design</span>
                            <br />
                            <span>portfolio</span>
                        </div>
                        <img 
                            src="/assets/photo/kashish-photo.png" 
                            alt="Kashish Oswal Design Work"
                            className="philosophy-img"
                        />
                    </motion.div>

                    {/* Right Column - Text */}
                    <motion.div
                        className="philosophy-text"
                        variants={section2TextVariant}
                    >
                        <span className="philosophy-label">About</span>

                        <h2 className="philosophy-heading">
                            Designing ideas into meaningful visual experiences
                        </h2>

                        <p className="philosophy-body">
                            I'm Kashish, a Visual Communication Design student at MIT-WPU with a passion for creating thoughtful visual experiences.
                        </p>

                        <p className="philosophy-body">
                            My work explores branding, editorial design, packaging, and digital interfaces. I enjoy translating ideas into clear and expressive visual systems that communicate effectively and creatively.
                        </p>

                        <Link to="/about" className="read-more-link">
                            <span>Read more</span>
                            <motion.span
                                className="arrow"
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.2 }}
                            >
                                →
                            </motion.span>
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    )
}

export default Home
