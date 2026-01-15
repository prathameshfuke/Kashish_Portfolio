import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Palette3DScene from '../components/Palette3DScene'
import LoopBanner from '../components/LoopBanner'
import './Home.css'

function Home() {
    const navigate = useNavigate()

    return (
        <div className="page home-page">
            <LoopBanner />

            {/* Badge - Moved to home-page level */}
            <motion.div
                className="hero-badge"
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: -5 }}
                whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    boxShadow: "0 0 30px rgba(255, 182, 217, 0.6)"
                }}
                transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
            >
                <span className="badge-text">design<br />portfolio</span>
            </motion.div>

            <div className="home-container">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-grid">

                        {/* ============================================
                            LEFT COLUMN (Column 1)
                            Row 1: I'M
                            Row 2: Left Deco
                            ============================================ */}

                        {/* I'M - Row 2, Col 1 */}
                        <motion.span
                            className="hero-text-im"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            whileHover={{
                                scale: 1.05,
                                textShadow: "0 0 40px rgba(255, 182, 217, 0.8)"
                            }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            I'M
                        </motion.span>

                        {/* ============================================
                            CENTER COLUMN (Column 2)
                            Spans all rows: Image
                            ============================================ */}

                        {/* Central Image - Spans Row 1-3, Col 2 */}
                        <motion.div
                            className="hero-image-container"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: "0 30px 70px rgba(255, 182, 217, 0.4), 0 0 40px rgba(255, 182, 217, 0.2)"
                            }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <img src="/assets/photo/homepage.JPG" alt="Kashish Oswal" className="hero-image" />
                        </motion.div>

                        {/* ============================================
                            RIGHT COLUMN (Column 3)
                            Row 1: KASHISH
                            Row 2: Intro
                            ============================================ */}

                        {/* KASHISH - Row 2, Col 3 */}
                        <motion.span
                            className="hero-text-name"
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            whileHover={{
                                scale: 1.05,
                                textShadow: "0 0 40px rgba(255, 182, 217, 0.8)"
                            }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            KASHISH
                        </motion.span>

                        {/* Intro Paragraph - Row 3, Col 3 */}
                        <motion.div
                            className="hero-intro"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <p>
                                I'm a Visual Communication Design student passionate about creating clear, engaging visual systems.
                                My work spans graphic and digital design, with a focus on typography, layout, and interface visuals.
                            </p>

                            <div className="hero-decoration">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16L20 0Z" fill="#FFB6D9" />
                                </svg>
                            </div>
                        </motion.div>

                        {/* HELLO - Moved to index 3 (after hero-intro) */}
                        <motion.h1
                            className="hero-text-hello"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            whileHover={{
                                scale: 1.05,
                                textShadow: "0 0 40px rgba(255, 182, 217, 0.8)"
                            }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            HELLO
                        </motion.h1>

                    </div>
                </section>

                {/* 3D Palette Section - Preserved */}
                <motion.section
                    className="palette-section"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <Palette3DScene visible={true} onNavigate={navigate} />
                    </motion.div>
                </motion.section>
            </div>
        </div>
    )
}

export default Home