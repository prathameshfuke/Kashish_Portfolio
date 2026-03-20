import { useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

import beautyMagazine from '../assets/beauty-magazine.png'
import myCloset from '../assets/my-closet.png'
import moodChocolates from '../assets/mood-chocolates.png'
import saarBrochure from '../assets/saar-brochure.png'
import websiteDesign from '../assets/website-design.png'
import typeZine from '../assets/type-zine.png'
import jainismBook from '../assets/jainism-book.png'
import imagicaa from '../assets/imagicaa.png'
import behanceLogo from '../assets/behancelogo.jpg'

import './Portfolio.css'

/* ─────────────────────────────────────────────
   Image arrays for detailed project carousels
───────────────────────────────────────────── */
const glossEditImages = [
    '/assets/projects/gloss-edit/Mockup_1.png',
    '/assets/projects/gloss-edit/Mockup_2.png',
    '/assets/projects/gloss-edit/Mockup_3.png',
    '/assets/projects/gloss-edit/Mockup_4.png',
    '/assets/projects/gloss-edit/Magazine_Mockup_1.png',
    '/assets/projects/gloss-edit/Magazine_Mockup_2.png',
    '/assets/projects/gloss-edit/Magazine_Mockup_3.png',
    '/assets/projects/gloss-edit/Magazine_Mockup_4.png',
    '/assets/projects/gloss-edit/Magazine_Mockup_5.png',
]

const signageImages = [
    '/assets/projects/signage/MAP IMAGICAA FINAL.png',
    '/assets/projects/signage/ChatGPT Image Dec 3, 2025 at 08_33_06 PM (1).png',
    '/assets/projects/signage/ChatGPT Image Dec 3, 2025 at 08_36_54 PM.png',
    '/assets/projects/signage/ChatGPT Image Dec 9, 2025 at 10_54_39 AM.png',
    '/assets/projects/signage/ChatGPT Image Dec 9, 2025 at 10_57_27 AM.png',
    '/assets/projects/signage/ChatGPT Image Dec 9, 2025 at 11_15_01 AM.png',
]

const myClosetImages = [
    '/assets/projects/my-closet/Screenshot 2026-01-11 203246.png',
    '/assets/projects/my-closet/Screenshot 2026-01-11 203307.png',
    '/assets/projects/my-closet/Screenshot 2026-01-11 203319.png',
    '/assets/projects/my-closet/Screenshot 2026-01-11 203333.png',
]

const littleBookImages = [
    '/assets/projects/little-book-peace/book-mockup-v6-front-view.png',
    '/assets/projects/little-book-peace/Hardcover Book Mockup Close Up Poster.png',
    '/assets/projects/little-book-peace/Open Hardcover Book Mockup.png',
    '/assets/projects/little-book-peace/Hardcover Books Mockup Front And Back View.png',
    '/assets/projects/little-book-peace/Flower Page Border A3 Landscape Poster.png',
]

/* ─────────────────────────────────────────────
   Animation variants — all with once: true
───────────────────────────────────────────── */
const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
}

const titleVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
    },
}

const descVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5, delay: 0.25, ease: 'easeOut' },
    },
}

const VP = { once: true, amount: 0.2 }

/* ─────────────────────────────────────────────
   3D Tilt Image
───────────────────────────────────────────── */
function TiltImage({ children }) {
    const ref = useRef(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const mouseXSpring = useSpring(x, { stiffness: 400, damping: 40 })
    const mouseYSpring = useSpring(y, { stiffness: 400, damping: 40 })
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg'])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg'])

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect()
        x.set((e.clientX - rect.left) / rect.width - 0.5)
        y.set((e.clientY - rect.top) / rect.height - 0.5)
    }
    const handleMouseLeave = () => { x.set(0); y.set(0) }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
            className="tilt-image-container"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.div>
    )
}

/* ─────────────────────────────────────────────
   Image Carousel (for detail projects)
───────────────────────────────────────────── */
function ImageCarousel({ images, projectName }) {
    const [currentImage, setCurrentImage] = useState(0)
    const [direction, setDirection] = useState(0)

    const nextImage = () => {
        setDirection(1)
        setCurrentImage((prev) => (prev + 1) % images.length)
    }
    const prevImage = () => {
        setDirection(-1)
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
    }
    const goToImage = (index) => {
        setDirection(index > currentImage ? 1 : -1)
        setCurrentImage(index)
    }

    const slideVariants = {
        enter: (dir) => ({ x: dir > 0 ? '20%' : '-20%', opacity: 0 }),
        center: { zIndex: 1, x: 0, opacity: 1 },
        exit: (dir) => ({ zIndex: 0, x: dir < 0 ? '20%' : '-20%', opacity: 0 }),
    }

    return (
        <>
            <motion.div
                className="carousel-container"
                initial="hidden"
                whileInView="visible"
                viewport={VP}
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4 } } }}
            >
                <motion.button
                    className="carousel-btn prev"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); prevImage() }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Previous image"
                >
                    ‹
                </motion.button>

                <div className="carousel-viewport">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.img
                            key={currentImage}
                            src={images[currentImage]}
                            alt={`${projectName} ${currentImage + 1}`}
                            className="carousel-image"
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: 'tween', duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                                opacity: { duration: 0.3 },
                            }}
                            style={{ position: 'absolute' }}
                        />
                    </AnimatePresence>
                </div>

                <motion.button
                    className="carousel-btn next"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); nextImage() }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Next image"
                >
                    ›
                </motion.button>
            </motion.div>

            <motion.div
                className="carousel-dots"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={VP}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {images.map((_, index) => (
                    <motion.button
                        key={index}
                        className={`dot ${currentImage === index ? 'active' : ''}`}
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); goToImage(index) }}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.8 }}
                        animate={{
                            scale: currentImage === index ? 1.2 : 1,
                            backgroundColor: currentImage === index ? '#E63946' : 'rgba(17,17,17,0.08)',
                        }}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </motion.div>
        </>
    )
}

/* ─────────────────────────────────────────────
   Behance-linked project block (for grid items)
───────────────────────────────────────────── */
function NewProjectBlock({ title, image, link }) {
    const isPlaceholder = link === '#'

    return (
        <motion.div
            className="grid-item"
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            variants={sectionVariant}
        >
            <div className="grid-project-img-wrapper">
                {isPlaceholder ? (
                    <img src={image} alt={title} className="grid-project-img" />
                ) : (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <motion.img
                            src={image}
                            alt={title}
                            className="grid-project-img"
                            whileHover={{ scale: 1.04 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        />
                    </a>
                )}
            </div>
            <div className="grid-project-footer">
                <h2 className="grid-project-name">{title}</h2>
            </div>
        </motion.div>
    )
}

/* ─────────────────────────────────────────────
   Main Portfolio Page
───────────────────────────────────────────── */
function Portfolio() {
    return (
        <motion.div
            className="page projects-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="projects-container">
                <motion.h1
                    className="page-title"
                    initial={{ opacity: 0, y: -30, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    Portfolio
                </motion.h1>

                {/* ── Project 1: Beauty Magazine ── */}
                <motion.div
                    className="project-showcase mt-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={VP}
                    variants={sectionVariant}
                >
                    <motion.div className="project-header" initial="hidden" whileInView="visible" viewport={VP} variants={titleVariant}>
                        <span className="project-category-tag">Publication Design</span>
                        <h2 className="project-name">Beauty Magazine</h2>
                        <p className="project-tagline">Digital Layouts • Editorial Design</p>
                        <a
                            href="https://www.behance.net/gallery/241958693/Beauty-Magazine"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-behance-badge"
                        >
                            View on Behance →
                        </a>
                    </motion.div>
                    <ImageCarousel images={glossEditImages} projectName="Beauty Magazine" />
                    <motion.div className="project-description" initial="hidden" whileInView="visible" viewport={VP} variants={descVariant}>
                        <p>
                            <strong>Beauty Magazine</strong> is a conceptual high-fashion magazine designed
                            as a packaging and editorial exploration of minimalism, self-expression, and timeless elegance.
                        </p>
                    </motion.div>
                </motion.div>

                {/* ── Project 2: The Little Book of Peace (Jainism) ── */}
                <motion.div
                    className="project-showcase mt-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={VP}
                    variants={sectionVariant}
                >
                    <motion.div className="project-header" initial="hidden" whileInView="visible" viewport={VP} variants={titleVariant}>
                        <span className="project-category-tag">Publication Design</span>
                        <h2 className="project-name">The Little Book of Peace</h2>
                        <p className="project-tagline">Children's Book • Interactive Design • Jain Values</p>
                    </motion.div>
                    <ImageCarousel images={littleBookImages} projectName="The Little Book of Peace" />
                    <motion.div className="project-description" initial="hidden" whileInView="visible" viewport={VP} variants={descVariant}>
                        <p>
                            <strong>The Little Book of Peace</strong> is an interactive children's book designed to
                            gently introduce Jain values, Paryushan traditions, and everyday mindfulness in a way
                            that feels playful, calming, and age-appropriate.
                        </p>
                    </motion.div>
                </motion.div>

                {/* ── Project 3: My Closet App ── */}
                <motion.div
                    className="project-showcase mt-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={VP}
                    variants={sectionVariant}
                >
                    <motion.div className="project-header" initial="hidden" whileInView="visible" viewport={VP} variants={titleVariant}>
                        <span className="project-category-tag">UI/UX Design</span>
                        <h2 className="project-name">My Closet</h2>
                        <p className="project-tagline">Fashion App • 3D Virtual Styling • Mobile UI</p>
                        <a
                            href="https://www.behance.net/gallery/223568317/My-Closet-App-Design"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-behance-badge"
                        >
                            View on Behance →
                        </a>
                    </motion.div>
                    <ImageCarousel images={myClosetImages} projectName="My Closet" />
                    <motion.div className="project-description" initial="hidden" whileInView="visible" viewport={VP} variants={descVariant}>
                        <p>
                            <strong>My Closet</strong> is a conceptual fashion app designed to simplify everyday
                            outfit selection through a personalized virtual styling experience.
                        </p>
                    </motion.div>
                </motion.div>

                {/* ── Project 4: Imagicaa Wayfinding ── */}
                <motion.div
                    className="project-showcase mt-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={VP}
                    variants={sectionVariant}
                >
                    <motion.div className="project-header" initial="hidden" whileInView="visible" viewport={VP} variants={titleVariant}>
                        <span className="project-category-tag">Signage & Wayfinding</span>
                        <h2 className="project-name">Imagicaa Wayfinding</h2>
                        <p className="project-tagline">Theme Park Signage • Icon Design • User Experience</p>
                    </motion.div>
                    <ImageCarousel images={signageImages} projectName="Imagicaa Signage" />
                    <motion.div className="project-description" initial="hidden" whileInView="visible" viewport={VP} variants={descVariant}>
                        <p>
                            This <strong>signage and wayfinding project</strong> was collaboratively designed, focusing on improving navigation in large-scale amusement parks.
                        </p>
                    </motion.div>
                </motion.div>

                {/* ── Other Work Grid ── */}
                <div className="other-work-section mt-2xl">
                    <h3 className="other-work-title">Other Work</h3>
                    <div className="other-work-grid">
                        <NewProjectBlock
                            title="Mood Boosting Chocolates"
                            image={moodChocolates}
                            link="https://www.behance.net/gallery/223512699/Mood-Boosting-Chocolates-Packaging-Design"
                        />
                        <NewProjectBlock
                            title="Darshan Raval – Website Design"
                            image={websiteDesign}
                            link="https://www.behance.net/gallery/218092245/Webpages-Design"
                        />
                        <NewProjectBlock
                            title="SAAR Brochure Design"
                            image={saarBrochure}
                            link="https://www.behance.net/gallery/241963101/Saar-Brochure-Design"
                        />
                        <NewProjectBlock
                            title="Type Zine"
                            image={typeZine}
                            link="https://www.behance.net/gallery/218226883/Font-Type-Zine"
                        />
                    </div>
                </div>

                {/* ── Behance Call to Action ── */}
                <div className="portfolio-behance-cta">
                    <a href="https://www.behance.net/kashishoswal1" target="_blank" rel="noopener noreferrer" className="portfolio-behance-link">
                        <img src={behanceLogo} alt="Behance" className="portfolio-behance-logo" />
                        View more of my work on <span className="behance-accent">Behance</span>
                    </a>
                </div>

            </div>

            {/* ── Fixed Floating Behance Button ── */}
            <a href="https://www.behance.net/kashishoswal1" target="_blank" rel="noopener noreferrer" className="behance-fab" aria-label="Visit Behance Profile">
                <img src={behanceLogo} alt="Behance" />
            </a>
        </motion.div>
    )
}

export default Portfolio
