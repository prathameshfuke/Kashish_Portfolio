import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Palette3DScene from '../components/Palette3DScene'
import './Home.css'

// Sticker data with positions and animations
const stickers = [
    {
        id: 1,
        src: '/assets/190638cf-3145-4cc6-8dda-91046062e636.png',
        alt: 'Character',
        className: 'sticker-1',
        initial: { x: -200, y: -100, rotate: -30, opacity: 0 },
        animate: { x: 0, y: 0, rotate: 0, opacity: 1 },
        delay: 0.2,
        hover: { scale: 1.15, rotate: 10, y: -20 }
    },
    {
        id: 2,
        src: '/assets/62bf5469ac4fb03d5a5073e93cb521a6.png',
        alt: 'Pink bow',
        className: 'sticker-2',
        initial: { x: 100, y: -150, rotate: 45, opacity: 0, scale: 0 },
        animate: { x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 },
        delay: 0.4,
        hover: { scale: 1.3, rotate: -15 }
    },
    {
        id: 3,
        src: '/assets/11921df8190814ccb84613acb2df7bf1.png',
        alt: 'Working late',
        className: 'sticker-3',
        initial: { x: -150, y: 200, rotate: 20, opacity: 0 },
        animate: { x: 0, y: 0, rotate: -5, opacity: 1 },
        delay: 0.6,
        hover: { scale: 1.1, rotate: 5, x: 10 }
    },
    {
        id: 4,
        src: '/assets/327a01ccee37b6a76091cb20b2917f77.png',
        alt: 'Designer badge',
        className: 'sticker-4',
        initial: { x: 200, y: 150, rotate: -45, opacity: 0, scale: 0.5 },
        animate: { x: 0, y: 0, rotate: 8, opacity: 1, scale: 1 },
        delay: 0.8,
        hover: { scale: 1.2, rotate: -10 }
    },
    {
        id: 5,
        src: '/assets/cherry-removebg-preview.png',
        alt: 'Cherries',
        className: 'sticker-5',
        initial: { y: 100, opacity: 0, scale: 0 },
        animate: { y: 0, opacity: 1, scale: 1 },
        delay: 1.0,
        hover: { scale: 1.25, rotate: 15, y: -15 }
    },
    {
        id: 6,
        src: '/assets/65b141dcce142b657249c4c6c0c1e995.png',
        alt: 'Cat',
        className: 'sticker-6',
        initial: { x: 150, y: 100, rotate: 30, opacity: 0 },
        animate: { x: 0, y: 0, rotate: -3, opacity: 1 },
        delay: 1.1,
        hover: { scale: 1.15, y: -10 }
    },
    {
        id: 7,
        src: '/assets/df767f7b266c96cd189aca767d8182ec.png',
        alt: 'Wax seal',
        className: 'sticker-7',
        initial: { y: 150, rotate: -20, opacity: 0, scale: 0 },
        animate: { y: 0, rotate: 5, opacity: 1, scale: 1 },
        delay: 1.2,
        hover: { scale: 1.2, rotate: -10 }
    },
    {
        id: 8,
        src: '/assets/Icons_With_Transparent_Background-removebg-preview.png',
        alt: 'Butterfly',
        className: 'sticker-8',
        initial: { x: 100, y: -100, rotate: 45, opacity: 0 },
        animate: { x: 0, y: 0, rotate: 0, opacity: 1 },
        delay: 0.5,
        hover: { scale: 1.3, rotate: 20, y: -25 }
    },
]

// Floating animation variants
const floatingVariants = {
    animate: (custom) => ({
        y: [0, -15, 0, -10, 0],
        rotate: [custom.rotate || 0, custom.rotate + 3, custom.rotate - 2, custom.rotate + 1, custom.rotate || 0],
        transition: {
            duration: 6 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: custom.delay || 0
        }
    })
}

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
                {/* Animated Collage Stickers */}
                {stickers.map((sticker) => (
                    <motion.div
                        key={sticker.id}
                        className={`sticker ${sticker.className}`}
                        initial={sticker.initial}
                        animate={sticker.animate}
                        transition={{
                            duration: 0.8,
                            delay: sticker.delay,
                            ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                        whileHover={sticker.hover}
                        custom={{ rotate: sticker.animate.rotate || 0, delay: sticker.delay }}
                        variants={floatingVariants}
                    >
                        <motion.img
                            src={sticker.src}
                            alt={sticker.alt}
                            drag
                            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
                            dragElastic={0.1}
                            whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
                        />
                    </motion.div>
                ))}

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
