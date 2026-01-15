import { motion } from 'framer-motion'
import './Work.css'

const workCategories = [
    {
        category: 'Visual Systems & Identity',
        projects: [
            { title: 'Saar Brand Identity Poster', description: 'Visual identity poster design for Saar community branding', link: 'https://www.behance.net/gallery/241961423/Saar-Brand-Identity-Poster' },
            { title: 'Saar Brand Guideline Book', description: 'Comprehensive brand guidelines for Jain Community organization', link: 'https://www.behance.net/gallery/241960569/Saar-(Jain-Community)-Brand-Guideline-Book' },
            { title: 'Baskin Robbins Brand Study', description: 'In-depth brand analysis and visual identity study', link: 'https://www.behance.net/gallery/223514423/Baskin-Robbins-Brand-Study' },
        ]
    },
    {
        category: 'Editorial, Publication & Content Design',
        projects: [
            { title: 'Saar Brochure Design', description: 'Multi-page brochure design with cohesive visual storytelling', link: 'https://www.behance.net/gallery/241963101/Saar-Brochure-Design' },
            { title: 'Beauty Magazine', description: 'Editorial layout and typography for beauty publication', link: 'https://www.behance.net/gallery/241958693/Beauty-Magazine' },
            { title: 'Font Type Zine', description: 'Experimental typography zine exploring type as expression', link: 'https://www.behance.net/gallery/218226883/Font-Type-Zine' },
        ]
    },
    {
        category: 'Packaging & Product Communication',
        projects: [
            { title: 'Mood Boosting Chocolates', description: 'Playful packaging design for wellness chocolate brand', link: 'https://www.behance.net/gallery/223512699/Mood-Boosting-Chocolates-Packaging-Design' },
            { title: 'HYPHEN X NIKE', description: 'Collaborative packaging concept for Nike partnership', link: 'https://www.behance.net/gallery/217366201/HYPHEN-X-NIKE' },
        ]
    },
    {
        category: 'Posters, Print & Visual Campaigns',
        projects: [
            { title: 'Typography Event Poster', description: 'Bold typographic poster for design event promotion', link: 'https://www.behance.net/gallery/218228011/Typography-Event-Poster-Design' },
            { title: 'Typographic Poster: Collagraph', description: 'Experimental poster combining collagraph and type', link: 'https://www.behance.net/gallery/241976109/Typographic-Poster-Collagraph' },
            { title: 'Breaking Barriers', description: 'Concept poster exploring themes of youth and change', link: 'https://www.behance.net/gallery/241976799/Breaking-Barriers-A-Concept-Poster-on-Youth-Change' },
        ]
    },
    {
        category: 'Information Design & Visual Storytelling',
        projects: [
            { title: 'Bandhani Saree Analysis', description: 'Semiotic study of traditional Indian textile art', link: 'https://www.behance.net/gallery/223514137/Bandhani-Saree-Semiotic-Analysis' },
            { title: 'Tata Tea Semiotic Analysis', description: 'Visual decoding of iconic Indian tea brand', link: 'https://www.behance.net/gallery/223513147/Tata-Tea-Semiotic-Analysis' },
        ]
    },
    {
        category: 'Digital Interfaces & Interactive Concepts',
        projects: [
            { title: 'Darshan Raval Website', description: 'Fan website design for Indian music artist', link: 'https://www.behance.net/gallery/218092245/Webpages-Design' },
            { title: 'My Closet App', description: 'Mobile app UI for wardrobe management', link: 'https://www.behance.net/gallery/223568317/My-Closet-App-Design' },
            { title: 'Hot Air Balloon Parallax', description: 'Interactive parallax scrolling effect', link: 'https://www.behance.net/gallery/241962853/Hot-Air-Balloon-Parallax-Effect' },
            { title: 'Nvidia Text Animation', description: 'Dynamic text animation inspired by Nvidia branding', link: 'https://www.behance.net/gallery/241962177/Nvidia-Text-Animation' },
            { title: 'Car Animation', description: 'Motion graphics created in After Effects', link: 'https://www.behance.net/gallery/223514781/Car-Animation-Motion-Graphics-After-Effects' },
            { title: 'Key and Fill Light', description: 'Photography lighting experiments and visual studies', link: 'https://www.behance.net/gallery/218228267/Key-and-Fill-Light' },
        ]
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

const categoryVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
}

const cardVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.4, ease: "easeOut" }
    }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
}

const categoryStagger = {
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
            <div className="work-container">
                <motion.h1
                    className="page-title"
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
                    A collection of my design projects across branding, editorial, packaging, digital interfaces, and more.
                </motion.p>

                <motion.div
                    className="work-categories mt-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={categoryStagger}
                >
                    {workCategories.map((cat, catIndex) => (
                        <motion.div
                            key={catIndex}
                            className="work-category-section"
                            variants={categoryVariant}
                        >
                            <h2 className="category-title">{cat.category}</h2>
                            <motion.div
                                className="projects-grid"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {cat.projects.map((project, projIndex) => (
                                    <motion.a
                                        key={projIndex}
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-card"
                                        variants={cardVariant}
                                        whileHover={{
                                            y: -5,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-desc">{project.description}</p>
                                        <span className="project-link">View on Behance →</span>
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>
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
        </motion.div>
    )
}

export default Work
