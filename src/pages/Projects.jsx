import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Projects.css'

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

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
}

const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

// Carousel Component with animations
function ImageCarousel({ images, projectName }) {
    const [currentImage, setCurrentImage] = useState(0)
    const [direction, setDirection] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1)
            setCurrentImage((prev) => (prev + 1) % images.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [images.length])

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
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9
        })
    }

    return (
        <>
            <div className="carousel-container">
                <motion.button
                    className="carousel-btn prev"
                    onClick={prevImage}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    ‹
                </motion.button>

                <div className="carousel-viewport">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
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
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.3 },
                                scale: { duration: 0.3 }
                            }}
                        />
                    </AnimatePresence>
                </div>

                <motion.button
                    className="carousel-btn next"
                    onClick={nextImage}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    ›
                </motion.button>
            </div>

            <div className="carousel-dots">
                {images.map((_, index) => (
                    <motion.button
                        key={index}
                        className={`dot ${currentImage === index ? 'active' : ''}`}
                        onClick={() => goToImage(index)}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.8 }}
                        animate={{
                            scale: currentImage === index ? 1.2 : 1,
                            backgroundColor: currentImage === index ? '#FFB6D9' : 'rgba(255,255,255,0.2)'
                        }}
                    />
                ))}
            </div>
        </>
    )
}

function Projects() {
    return (
        <motion.div
            className="page projects-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Stickers */}
            <motion.div
                className="sticker projects-sticker-1 float-1"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                <img src="/assets/cherry-removebg-preview.png" alt="Cherries" />
            </motion.div>
            <motion.div
                className="sticker projects-sticker-2 float-2"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                <img src="/assets/Icons_With_Transparent_Background-removebg-preview.png" alt="Butterfly" />
            </motion.div>

            <div className="projects-container">
                <motion.h1
                    className="page-title cursive-title"
                    initial={{ opacity: 0, y: -30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    Projects
                </motion.h1>

                {/* Project 1: The Gloss Edit */}
                <motion.section
                    className="project-showcase mt-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={scaleIn}
                >
                    <motion.div className="project-header" variants={fadeInUp}>
                        <span className="project-category-tag">Publication Design</span>
                        <h2 className="project-name">The Gloss Edit</h2>
                        <p className="project-tagline">Digital Layouts • Editorial Design</p>
                    </motion.div>

                    <ImageCarousel images={glossEditImages} projectName="The Gloss Edit" />

                    <motion.div
                        className="project-description"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <p>
                            <strong>The Gloss Edit</strong> is a conceptual high-fashion beauty magazine designed
                            as a packaging and editorial exploration of minimalism, self-expression, and timeless elegance.
                        </p>
                        <p className="mt-md">
                            Created in a stark black-and-white visual language, this project allowed me to experiment
                            with luxury aesthetics, typography, and editorial layout.
                        </p>
                    </motion.div>
                </motion.section>

                {/* Project 2: Signage */}
                <motion.section
                    className="project-showcase mt-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={scaleIn}
                >
                    <motion.div className="project-header" variants={fadeInUp}>
                        <span className="project-category-tag">Signage & Wayfinding</span>
                        <h2 className="project-name">Imagicaa Wayfinding</h2>
                        <p className="project-tagline">Theme Park Signage • Icon Design • User Experience</p>
                    </motion.div>

                    <ImageCarousel images={signageImages} projectName="Imagicaa Signage" />

                    <motion.div
                        className="project-description"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <p>
                            This <strong>signage and wayfinding project</strong> was collaboratively designed as part of
                            a college design studio, focusing on improving navigation in large-scale amusement parks.
                        </p>
                        <p className="mt-md">
                            We reimagined Imagicaa's wayfinding system using a cohesive 2D icon-based signage
                            language that balances functionality with brand storytelling.
                        </p>
                    </motion.div>
                </motion.section>

                <motion.div
                    className="more-projects mt-xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <p className="text-muted text-center">More projects coming soon...</p>
                </motion.div>
            </div>

            <div className="flowers-fixed">
                <img src="/assets/_-removebg-preview.png" alt="Flowers" />
            </div>
        </motion.div>
    )
}

export default Projects
