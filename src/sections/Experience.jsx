import { useEffect, useState, useRef } from 'react'
import './Experience.css'

const experiences = [
    {
        company: 'NoBrokerage.com',
        role: 'UI/UX & Graphic Design Intern',
        period: 'May 2025 – July 2025',
        type: 'intern',
        description: [
            'Worked on website UI elements and social media creatives while maintaining consistency with the brand\'s design system',
            'Collaborated with the team to translate requirements into clean, functional visual layouts',
            'Assisted in improving user experience through thoughtful layout, typography, and visual hierarchy',
        ],
        icon: '🏠',
    },
    {
        company: 'D Birds Girls Hostel',
        role: 'Freelance Visual Designer',
        period: 'Jan 2024 – Mar 2025',
        type: 'freelance',
        description: [
            'Managed end-to-end visual design for social media, brochures, and promotional materials',
            'Developed a consistent visual identity to strengthen brand presence and engagement',
            'Worked closely with stakeholders to deliver brand-aligned creatives',
        ],
        icon: '🏨',
    },
    {
        company: 'Shubham Fashion',
        role: 'Freelance Visual Designer',
        period: 'Jan 2025 – June 2025',
        type: 'freelance',
        description: [
            'Designed store signage, invitations, and promotional creatives aligned with the brand\'s aesthetic',
            'Focused on creating visually appealing and cohesive designs',
            'Ensured clarity, readability, and brand consistency',
        ],
        icon: '👗',
    },
    {
        company: 'IRIS Media Solutions',
        role: 'Design Intern',
        period: 'May 2022 – Nov 2022',
        type: 'intern',
        description: [
            'Created digital assets and marketing creatives for multiple clients using Adobe Creative Suite',
            'Supported the design team in executing brand strategies',
            'Gained hands-on experience in working within brand guidelines',
        ],
        icon: '📱',
    },
    {
        company: 'SANGAM India',
        role: 'Ideation & Graphic Intern',
        period: 'Nov 2022 – Jan 2023',
        type: 'intern',
        description: [
            'Contributed to campaign ideation and visual execution',
            'Collaborated with marketing team on strategy and execution',
            'Developed understanding of concept-driven design',
        ],
        icon: '🎨',
    },
    {
        company: 'Avotech Systems Pvt. Ltd.',
        role: 'Social Media Manager & Graphic Intern',
        period: 'July 2025 – Sept 2025',
        type: 'intern',
        description: [
            'Planned, designed, and executed social media content including posts and reels',
            'Focused on enhancing brand visibility and audience engagement',
            'Managed content creation alongside basic planning',
        ],
        icon: '💻',
    },
    {
        company: 'Ingrain Corporation',
        role: 'Freelance Visual Designer',
        period: 'Dec 2025 – Jan 2026',
        type: 'freelance',
        description: [
            'Created company catalogue book and corporate profile design',
            'Designed structured, brand-aligned layouts',
            'Ensured visual consistency and professional tone',
        ],
        icon: '📋',
    },
]

function Experience() {
    const [progress, setProgress] = useState(0)
    const timelineRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) return

            const rect = timelineRef.current.getBoundingClientRect()
            const windowHeight = window.innerHeight
            const elementTop = rect.top
            const elementHeight = rect.height

            if (elementTop < windowHeight && elementTop > -elementHeight) {
                const scrolledPast = windowHeight - elementTop
                const totalScrollable = windowHeight + elementHeight
                const progressPercent = Math.min(Math.max((scrolledPast / totalScrollable) * 100, 0), 100)
                setProgress(progressPercent)
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section id="experience" className="experience">
            <div className="container">
                <div className="section-header fade-in-up">
                    <h2>Work Experience</h2>
                    <p className="section-subtitle">
                        My journey in the design world so far
                    </p>
                </div>

                <div className="timeline" ref={timelineRef}>
                    <div
                        className="timeline-progress"
                        style={{ height: `${progress}%` }}
                    />

                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="timeline-item fade-in-up"
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className="timeline-dot" />

                            <div className="experience-card hoverable">
                                <div className="card-header">
                                    <span className="card-icon">{exp.icon}</span>
                                    <div className="card-title">
                                        <h3>{exp.company}</h3>
                                        <p className="role">{exp.role}</p>
                                    </div>
                                    <span className={`badge badge-${exp.type}`}>
                                        {exp.type === 'intern' ? '🎓 Intern' : '💼 Freelance'}
                                    </span>
                                </div>

                                <p className="period">
                                    <span>📅</span> {exp.period}
                                </p>

                                <ul className="description">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
