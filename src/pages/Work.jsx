import { motion } from 'framer-motion'
import './Work.css'

const workCategories = [
    {
        category: 'Visual Systems & Identity',
        projects: [
            { title: 'Saar Brand Identity Poster', image: '/assets/work/Saar Brand Identity Poster.png', link: 'https://www.behance.net/gallery/241961423/Saar-Brand-Identity-Poster' },
            { title: 'Saar Brand Guideline Book', image: '/assets/work/Saar Brand Guideline Book.png', link: 'https://www.behance.net/gallery/241960569/Saar-(Jain-Community)-Brand-Guideline-Book' },
        ]
    },
    {
        category: 'Editorial / Publication',
        projects: [
            { title: 'Saar Brochure Design', image: '/assets/work/Saar Brochure Design.png', link: 'https://www.behance.net/gallery/241963101/Saar-Brochure-Design' },
            { title: 'Beauty Magazine', image: '/assets/work/Beauty Magazine.png', link: 'https://www.behance.net/gallery/241958693/Beauty-Magazine' },
        ]
    },
    {
        category: 'Packaging',
        projects: [
            { title: 'Mood Boosting Chocolates', image: '/assets/work/Mood Boosting Chocolates.png', link: 'https://www.behance.net/gallery/223512699/Mood-Boosting-Chocolates-Packaging-Design' },
            { title: 'HYPHEN X NIKE', image: '/assets/work/HYPHEN X NIKE.png', link: 'https://www.behance.net/gallery/217366201/HYPHEN-X-NIKE' },
        ]
    },
    {
        category: 'Posters & Print',
        projects: [
            { title: 'Typography Event Poster', image: '/assets/work/Typography Event Poster.png', link: 'https://www.behance.net/gallery/218228011/Typography-Event-Poster-Design' },
            { title: 'Typographic Poster: Collagraph', image: '/assets/work/Typographic Poster Collagraph.png', link: 'https://www.behance.net/gallery/241976109/Typographic-Poster-Collagraph' },
        ]
    },
    {
        category: 'Information Design',
        projects: [
            { title: 'Bandhani Saree Analysis', image: '/assets/work/Bandhani Saree Analysis.png', link: 'https://www.behance.net/gallery/223514137/Bandhani-Saree-Semiotic-Analysis' },
            { title: 'Tata Tea Semiotic Analysis', image: '/assets/work/Tata Tea Semiotic Analysis.png', link: 'https://www.behance.net/gallery/223513147/Tata-Tea-Semiotic-Analysis' },
        ]
    },
    {
        category: 'Digital Interfaces',
        projects: [
            { title: 'Darshan Raval Website', image: '/assets/work/Darshan Raval Website.png', link: 'https://www.behance.net/gallery/218092245/Webpages-Design' },
            { title: 'My Closet App', image: '/assets/work/My Closet App.png', link: 'https://www.behance.net/gallery/223568317/My-Closet-App-Design' },
        ]
    },
]

// Animation variants
const categoryVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
}

const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut", delay: custom * 0.15 }
    })
}

function Work() {
    return (
        <motion.div
            className="work-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="work-container">
                <motion.h1
                    className="work-title"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Work
                </motion.h1>

                <motion.div
                    className="work-categories"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {workCategories.map((cat, catIndex) => (
                        <motion.div
                            key={catIndex}
                            className="category-section"
                            variants={categoryVariant}
                        >
                            <h2 className="category-heading">{cat.category}</h2>
                            
                            <motion.div
                                className="cards-grid"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.15 }}
                            >
                                {cat.projects.map((project, projIndex) => (
                                    <motion.a
                                        key={projIndex}
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="portfolio-card"
                                        custom={projIndex}
                                        variants={cardVariant}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="card-image-wrapper">
                                            <img 
                                                src={project.image} 
                                                alt={project.title}
                                                className="card-image"
                                            />
                                        </div>
                                        <div className="card-overlay">
                                            <h3 className="card-title">{project.title}</h3>
                                        </div>
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="behance-section"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.a
                        href="https://behance.net/kashishoswal1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="behance-link"
                        whileHover="hover"
                        initial="initial"
                    >
                        <span>View more of my work on Behance</span>
                        <motion.span
                            className="behance-arrow"
                            variants={{
                                initial: { x: 0 },
                                hover: { x: 4 }
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            →
                        </motion.span>
                    </motion.a>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Work
