import { motion } from 'framer-motion'
import './Work.css'

const projects = [
    {
        title: 'Brand Identity Design',
        category: 'Branding',
        description: 'Complete visual identity system for modern startups',
    },
    {
        title: 'Social Media Campaigns',
        category: 'Social Media',
        description: 'Engaging content series for brand growth',
    },
    {
        title: 'UI/UX Projects',
        category: 'UI/UX',
        description: 'User-centered interface designs',
    },
    {
        title: 'Print & Packaging',
        category: 'Print',
        description: 'Brochures, catalogues, and packaging design',
    },
    {
        title: 'Corporate Profiles',
        category: 'Branding',
        description: 'Professional company profiles and catalogues',
    },
    {
        title: 'Event Creatives',
        category: 'Social Media',
        description: 'Invitations and promotional materials',
    },
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

const cardVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
}

function Work() {
    return (
        <motion.div
            className="page work-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Sticker */}
            <motion.div
                className="sticker work-sticker-1 float-1"
                initial={{ x: 100, opacity: 0, rotate: 30 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                <img src="/assets/Icons_With_Transparent_Background-removebg-preview.png" alt="Butterfly" />
            </motion.div>

            <div className="work-container">
                <motion.h1
                    className="page-title cursive-title"
                    initial={{ opacity: 0, y: -30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    My Work
                </motion.h1>

                <motion.p
                    className="work-intro"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    A collection of my design projects spanning branding, UI/UX, and social media.
                </motion.p>

                <motion.div
                    className="projects-grid mt-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                >
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href="https://behance.net/kashishoswal1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card"
                            variants={cardVariant}
                            whileHover={{
                                scale: 1.05,
                                y: -15,
                                transition: { duration: 0.3 }
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <motion.span
                                className="project-category"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {project.category}
                            </motion.span>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.description}</p>
                            <span className="project-link">View on Behance →</span>
                        </motion.a>
                    ))}
                </motion.div>

                <motion.div
                    className="work-cta mt-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <p className="text-muted">Want to see more?</p>
                    <motion.a
                        href="https://behance.net/kashishoswal1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button"
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Visit My Behance Portfolio ✨
                    </motion.a>
                </motion.div>
            </div>

            <div className="flowers-fixed">
                <img src="/assets/_-removebg-preview.png" alt="Flowers" />
            </div>
        </motion.div>
    )
}

export default Work
