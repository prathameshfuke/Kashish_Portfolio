import './About.css'

// Tool icons (using simple colored squares as placeholders)
const tools = [
    { name: 'Photoshop', color: '#31A8FF', abbr: 'Ps' },
    { name: 'Illustrator', color: '#FF9A00', abbr: 'Ai' },
    { name: 'InDesign', color: '#FF3366', abbr: 'Id' },
    { name: 'Premiere Pro', color: '#9999FF', abbr: 'Pr' },
    { name: 'Figma', color: '#F24E1E', abbr: 'Fg' },
    { name: 'Canva', color: '#00C4CC', abbr: 'Cv' },
]

const education = [
    {
        institution: 'MIT World Peace University',
        period: '2023 - Present',
        degree: 'Bachelors of Design',
        field: 'Visual Communication',
        icon: '🎓',
    },
    {
        institution: 'MES Bal Shikshan Mandir',
        period: '11th & 12th Grade',
        degree: 'Higher Secondary Education',
        field: 'Commerce',
        icon: '📚',
    },
]

function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-header fade-in-up">
                    <h2>About Me</h2>
                    <p className="section-subtitle">
                        Get to know the person behind the designs
                    </p>
                </div>

                <div className="about-content">
                    <div className="about-text fade-in-up stagger-1">
                        <div className="about-intro">
                            <span className="intro-emoji">✨</span>
                            <h3>Hello! I'm Kashish Oswal</h3>
                        </div>

                        <p className="about-bio">
                            Visual Communication Design student with hands-on experience in
                            <span className="highlight"> branding</span>,
                            <span className="highlight"> UI/UX</span>, and
                            <span className="highlight"> social media design</span>.
                            Worked with startups and brands to create visually consistent digital and print assets.
                        </p>

                        <p className="about-bio">
                            Skilled in Adobe Creative Suite and Figma, with a strong foundation in layout,
                            typography, and visual storytelling. Passionate about designing meaningful,
                            brand-aligned solutions that make an impact.
                        </p>

                        <div className="about-stats">
                            <div className="stat">
                                <span className="stat-number">6+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">3+</span>
                                <span className="stat-label">Years Learning</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Happy Clients</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-visual fade-in-up stagger-2">
                        {/* Tools section */}
                        <div className="tools-section">
                            <h4 className="tools-title">
                                <span>🛠️</span> My Design Toolkit
                            </h4>
                            <div className="tools-grid">
                                {tools.map((tool, index) => (
                                    <div
                                        key={tool.name}
                                        className="tool-item hoverable"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div
                                            className="tool-icon"
                                            style={{ background: tool.color }}
                                        >
                                            <span>{tool.abbr}</span>
                                        </div>
                                        <span className="tool-name">{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education Section */}
                <div className="education-section fade-in-up stagger-3">
                    <h4 className="education-title">
                        <span>🎓</span> Education
                    </h4>
                    <div className="education-grid">
                        {education.map((edu, index) => (
                            <div key={index} className="flip-card hoverable">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <span className="edu-icon">{edu.icon}</span>
                                        <h5>{edu.institution}</h5>
                                        <p className="edu-period">{edu.period}</p>
                                    </div>
                                    <div className="flip-card-back">
                                        <h5>{edu.degree}</h5>
                                        <p>{edu.field}</p>
                                        <span className="edu-emoji">📖</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
