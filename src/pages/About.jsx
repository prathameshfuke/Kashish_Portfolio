import { useState } from 'react'
import { motion } from 'framer-motion'
import './About.css'

const skillsWithIcons = [
    { name: 'Photoshop', icon: '/assets/icons/Adobe_Photoshop_CC_icon.svg.png' },
    { name: 'Illustrator', icon: '/assets/icons/Adobe_Illustrator_CC_icon.svg.png' },
    { name: 'InDesign', icon: '/assets/icons/Adobe_InDesign_CC_icon.svg.png' },
    { name: 'Premiere Pro', icon: '/assets/icons/Adobe_Premiere_Pro_CC_icon.svg.png' },
    { name: 'Figma', icon: '/assets/icons/Figma-logo.svg.png' },
    { name: 'Canva', icon: '/assets/icons/image.jpg' },
]

const designSkills = ['Branding & Visual Identity', 'Layout & Typography', 'UI/UX Design', 'Social Media Creatives', 'Packaging Design']
const otherSkills = ['Social Media Marketing', 'Content Strategy', 'Communication', 'Team Collaboration', 'Leadership']

const experiences = [
    {
        role: 'UI/UX & Graphic Design Intern',
        company: 'NoBrokerage.com',
        period: 'May 2025 – July 2025',
        description: 'Worked on website UI elements and social media creatives while maintaining consistency with the brand\'s design system.',
    },
    {
        role: 'Freelance Visual Designer',
        company: 'D Birds Girls Hostel',
        period: 'Jan 2024 – Mar 2025',
        description: 'Managed end-to-end visual design for social media, brochures, and promotional materials.',
    },
    {
        role: 'Freelance Visual Designer',
        company: 'Shubham Fashion',
        period: 'Jan 2025 – June 2025',
        description: 'Designed store signage, invitations, and promotional creatives aligned with the brand\'s aesthetic.',
    },
    {
        role: 'Design Intern',
        company: 'IRIS Media Solutions',
        period: 'May 2022 – Nov 2022',
        description: 'Created digital assets and marketing creatives for multiple clients using Adobe Creative Suite.',
    },
    {
        role: 'Ideation & Graphic Design Intern',
        company: 'SANGAM India',
        period: 'Nov 2022 – Jan 2023',
        description: 'Contributed to campaign ideation and visual execution for social media and marketing initiatives.',
    },
    {
        role: 'Social Media Manager & Graphic Intern',
        company: 'Avotech Systems Pvt. Ltd.',
        period: 'July 2025 – Sept 2025',
        description: 'Planned, designed, and executed social media content including posts and reels.',
    },
    {
        role: 'Freelance Visual Designer',
        company: 'Ingrain Corporation',
        period: 'Dec 2025 – Jan 2026',
        description: 'Created a company catalogue book and corporate profile design with structured, brand-aligned layouts.',
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

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const toolItemVariant = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
}

const badgeVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.3 }
    }
}

function About() {
    const [expandedIndex, setExpandedIndex] = useState(null)

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index)
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
                    transition={{ duration: 0.6 }}
                >
                    About Me
                </motion.h1>

                <div className="about-content">
                    <motion.div
                        className="about-bio"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
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

                    <motion.div
                        className="about-section mt-xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <h2 className="section-title">Education</h2>
                        <motion.div
                            className="education-item"
                            whileHover={{ x: 10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="edu-degree">Bachelors of Design (Visual Communication)</span>
                            <span className="edu-school">MIT World Peace University • 2023 - Present</span>
                        </motion.div>
                        <motion.div
                            className="education-item"
                            whileHover={{ x: 10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="edu-degree">Higher Secondary Education (Commerce)</span>
                            <span className="edu-school">MES Bal Shikshan Mandir</span>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="about-section mt-xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <motion.h2 className="section-title" variants={fadeInUp}>Design Tools</motion.h2>
                        <motion.div className="tools-grid" variants={staggerContainer}>
                            {skillsWithIcons.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className="tool-item"
                                    variants={toolItemVariant}
                                    whileHover={{ scale: 1.1, y: -10 }}
                                >
                                    <img src={skill.icon} alt={skill.name} className="tool-icon" />
                                    <span className="tool-name">{skill.name}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="about-section mt-xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <motion.h2 className="section-title" variants={fadeInUp}>Skills</motion.h2>
                        <motion.div className="skills-row" variants={staggerContainer}>
                            {designSkills.map(skill => (
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
                        <motion.div className="skills-row mt-md" variants={staggerContainer}>
                            {otherSkills.map(skill => (
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

                    <motion.div
                        className="about-section mt-xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <motion.h2 className="section-title" variants={fadeInUp}>Work Experience</motion.h2>
                        <div className="experiences-list">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    className={`experience-card ${expandedIndex === index ? 'expanded' : ''}`}
                                    onClick={() => toggleExpand(index)}
                                    variants={fadeInUp}
                                    whileHover={{ scale: 1.02, x: 10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="experience-header">
                                        <div className="experience-info">
                                            <span className="experience-role">{exp.role}</span>
                                            <span className="experience-company">{exp.company} | {exp.period}</span>
                                        </div>
                                        <motion.span
                                            className="experience-toggle"
                                            animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                                        >
                                            +
                                        </motion.span>
                                    </div>
                                    {expandedIndex === index && (
                                        <motion.div
                                            className="experience-description"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                        >
                                            <p>{exp.description}</p>
                                        </motion.div>
                                    )}
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
