import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import chatgptIcon from '../assets/chatgpt.png'
import geminiIcon from '../assets/gemini.png'
import './About.css'

const skillsWithIcons = [
    { name: 'Photoshop', icon: '/assets/icons/Adobe_Photoshop_CC_icon.svg.png', type: 'img' },
    { name: 'Illustrator', icon: '/assets/icons/Adobe_Illustrator_CC_icon.svg.png', type: 'img' },
    { name: 'InDesign', icon: '/assets/icons/Adobe_InDesign_CC_icon.svg.png', type: 'img' },
    { name: 'Premiere Pro', icon: '/assets/icons/Adobe_Premiere_Pro_CC_icon.svg.png', type: 'img' },
    { name: 'Figma', icon: '/assets/icons/Figma-logo.svg.png', type: 'img' },
    { name: 'Canva', icon: '/assets/icons/image.jpg', type: 'img' },
    { name: 'ChatGPT', icon: chatgptIcon, type: 'img' },
    { name: 'Gemini', icon: geminiIcon, type: 'img' },
]

const designSkills = ['Branding & Visual Identity', 'Layout & Typography', 'UI/UX Design', 'Social Media Creatives', 'Packaging Design']
const otherSkills = ['Social Media Marketing', 'Content Strategy', 'Communication', 'Team Collaboration', 'Leadership']

const experiences = [
    {
        year: 'May 2025 – July 2025',
        role: 'UI/UX & Graphic Design Intern',
        company: 'NoBrokerage.com',
        description: 'Designed user interfaces and graphic assets to enhance the platform\'s visual communication and overall user experience.',
    },
    {
        year: 'July 2025 – Sept 2025',
        role: 'Social Media Manager & Graphic Intern',
        company: 'Avotech Systems Pvt. Ltd.',
        description: 'Managed social media presence and created branded graphic content to strengthen the company\'s digital identity.',
    },
    {
        year: 'Dec 2025 – Jan 2026',
        role: 'Freelance Visual Designer',
        company: 'Ingrain Corporation',
        description: 'Delivered freelance visual design solutions including brand materials and digital assets tailored to client requirements.',
    },
    {
        year: 'Jan 2025 – June 2025',
        role: 'Freelance Visual Designer',
        company: 'Shubham Fashion',
        description: 'Created visual identity and marketing collateral for a fashion brand to elevate its aesthetic and market presence.',
    },
    {
        year: 'Jan 2024 – Mar 2025',
        role: 'Freelance Visual Designer',
        company: 'D Birds Girls Hostel',
        description: 'Developed branding and promotional design materials to build a welcoming visual identity for the hostel.',
    },
    {
        year: 'Nov 2022 – Jan 2023',
        role: 'Ideation & Graphic Design Intern',
        company: 'SANGAM India',
        description: 'Contributed to ideation sessions and produced graphic design outputs to support the organisation\'s communication goals.',
    },
    {
        year: 'May 2022 – Nov 2022',
        role: 'Design Intern',
        company: 'IRIS Media Solutions',
        description: 'Assisted in creating visual content and design materials across print and digital media for various client campaigns.',
    },
]

/* ─────────────────────────────────────────────
   Animation variants
───────────────────────────────────────────── */
const VP = { once: true, amount: 0.15 }

const scrollSectionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const timelineEntryVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: 'easeOut', delay: custom * 0.12 },
    }),
}

const toolItemVariant = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const badgeVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}



function About() {
    const [openIndex, setOpenIndex] = useState(null)

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <motion.div
            className="page about-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="about-container">
                <motion.h1
                    className="page-title"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    About Me
                </motion.h1>

                <div className="about-content">
                    <motion.div
                        className="about-bio"
                        initial="hidden"
                        whileInView="visible"
                        viewport={VP}
                        variants={scrollSectionVariant}
                    >
                        <p>
                            Visual Communication Design student with hands-on experience in branding,
                            UI/UX, and social media design. Worked with startups and brands to create
                            visually consistent digital and print assets.
                        </p>
                        <p className="mt-md">
                            Skilled in Adobe Creative Suite and Figma, with a strong foundation in layout,
                            typography, and visual storytelling.
                        </p>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        className="about-section mt-xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={VP}
                        variants={scrollSectionVariant}
                    >
                        <h2 className="section-title">Education</h2>
                        <motion.div className="education-item" whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                            <span className="edu-degree">Bachelors of Design (Visual Communication)</span>
                            <span className="edu-school">MIT World Peace University • 2023 - Present</span>
                        </motion.div>
                        <motion.div className="education-item" whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                            <span className="edu-degree">Higher Secondary Education (Commerce)</span>
                            <span className="edu-school">MES Bal Shikshan Mandir</span>
                        </motion.div>
                    </motion.div>

                    {/* Design Tools */}
                    <motion.div
                        className="about-section mt-xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={VP}
                        variants={scrollSectionVariant}
                    >
                        <h2 className="section-title">Design Tools</h2>
                        <motion.div
                            className="tools-grid"
                            initial="hidden"
                            whileInView="visible"
                            viewport={VP}
                            variants={staggerContainer}
                        >
                            {skillsWithIcons.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    className="tool-item"
                                    variants={toolItemVariant}
                                    whileHover={{ scale: 1.1, y: -10 }}
                                >
                                    {skill.type === 'custom' ? (
                                        <GeminiIcon />
                                    ) : (
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="tool-icon"
                                        />
                                    )}
                                    <span className="tool-name">{skill.name}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Skills */}
                    <motion.div
                        className="about-section mt-xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={VP}
                        variants={scrollSectionVariant}
                    >
                        <h2 className="section-title">Skills</h2>
                        <motion.div className="skills-row" initial="hidden" whileInView="visible" viewport={VP} variants={staggerContainer}>
                            {designSkills.map((skill) => (
                                <motion.span
                                    key={skill}
                                    className="skill-badge"
                                    variants={badgeVariant}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                        <motion.div className="skills-row mt-md" initial="hidden" whileInView="visible" viewport={VP} variants={staggerContainer}>
                            {otherSkills.map((skill) => (
                                <motion.span
                                    key={skill}
                                    className="skill-badge"
                                    variants={badgeVariant}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Work Experience */}
                    <motion.div
                        className="about-section mt-xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={scrollSectionVariant}
                    >
                        <h2 className="section-title" style={{ color: 'var(--accent-blue)' }}>Work Experience</h2>
                        <div className="timeline-wrapper">
                            <div className="timeline-line" />
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    className={`timeline-entry ${index % 2 === 0 ? 'left' : 'right'}`}
                                    custom={index}
                                    variants={timelineEntryVariant}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    onClick={() => handleClick(index)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="timeline-content">
                                        <span className="timeline-year">{exp.year}</span>
                                        <h3 className="timeline-role">
                                            <span className="role-text">{exp.role}</span>
                                            <span className={`timeline-toggle${openIndex === index ? ' open' : ''}`}>
                                                +
                                            </span>
                                        </h3>
                                        <p className="timeline-company">{exp.company}</p>
                                        <AnimatePresence>
                                            {openIndex === index && (
                                                <motion.p
                                                    className="timeline-description"
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                                >
                                                    {exp.description}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    <div className="timeline-dot" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default About
