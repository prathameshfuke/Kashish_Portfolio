import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Palette3DScene from '../components/Palette3DScene'
import './Home.css'

// Title letter animation
const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.5 + i * 0.08,
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    })
}

function Home() {
    const navigate = useNavigate()
    const firstName = "Kashish"
    const lastName = "Oswal"

    return (
        <>
            <motion.div
                className="page home-page"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Center Title with Letter Animation */}
                <motion.div
                    className="home-content"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h1 className="home-title cursive-title glow-title">
                        <span className="title-line">
                            {firstName.split('').map((letter, i) => (
                                <motion.span
                                    key={i}
                                    custom={i}
                                    variants={titleVariants}
                                    initial="hidden"
                                    animate="visible"
                                    style={{ display: 'inline-block' }}
                                    whileHover={{
                                        scale: 1.2,
                                        color: '#FFB6D9',
                                        textShadow: '0 0 30px rgba(255, 182, 217, 0.8)'
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </span>
                        <span className="title-line">
                            {lastName.split('').map((letter, i) => (
                                <motion.span
                                    key={i}
                                    custom={i + firstName.length}
                                    variants={titleVariants}
                                    initial="hidden"
                                    animate="visible"
                                    style={{ display: 'inline-block' }}
                                    whileHover={{
                                        scale: 1.2,
                                        color: '#FFB6D9',
                                        textShadow: '0 0 30px rgba(255, 182, 217, 0.8)'
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </span>
                    </h1>

                    <motion.p
                        className="home-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.6 }}
                    >
                        Visual Communication Designer
                    </motion.p>

                    <motion.p
                        className="home-tagline"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.7, duration: 0.6 }}
                    >
                        UI/UX • Branding • Social Media
                    </motion.p>

                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="scroll-hint"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 0.6 }}
                >
                    <span>Scroll down to explore</span>
                    <motion.div
                        className="scroll-arrow"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        ↓
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* 3D Palette Section - Appears on Scroll */}
            <motion.section
                className="palette-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <Palette3DScene visible={true} onNavigate={navigate} />
                </motion.div>
            </motion.section>
        </>
    )
}

export default Home
