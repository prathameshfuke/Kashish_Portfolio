import './Skills.css'

const skillCategories = [
    {
        title: 'Design Tools',
        icon: '🎨',
        skills: [
            { name: 'Adobe Photoshop', level: 90 },
            { name: 'Adobe Illustrator', level: 85 },
            { name: 'Adobe InDesign', level: 80 },
            { name: 'Adobe Premiere Pro', level: 70 },
            { name: 'Figma', level: 85 },
            { name: 'Canva', level: 95 },
        ],
    },
    {
        title: 'Design Skills',
        icon: '✨',
        skills: [
            { name: 'Branding & Visual Identity', level: 85 },
            { name: 'Layout & Typography', level: 90 },
            { name: 'UI/UX Design', level: 80 },
            { name: 'Social Media Creatives', level: 95 },
            { name: 'Packaging Design', level: 75 },
        ],
    },
    {
        title: 'Marketing',
        icon: '📱',
        skills: [
            { name: 'Social Media Marketing', level: 85 },
            { name: 'Content Strategy', level: 75 },
        ],
    },
    {
        title: 'Soft Skills',
        icon: '💫',
        skills: [
            { name: 'Communication', level: 90 },
            { name: 'Team Collaboration', level: 95 },
            { name: 'Leadership', level: 80 },
            { name: 'Time Management', level: 85 },
        ],
    },
]

function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="section-header fade-in-up">
                    <h2>Skills & Expertise</h2>
                    <p className="section-subtitle">
                        Tools and abilities I've mastered along the way
                    </p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, catIndex) => (
                        <div
                            key={category.title}
                            className="skill-category fade-in-up"
                            style={{ transitionDelay: `${catIndex * 0.1}s` }}
                        >
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <h3>{category.title}</h3>
                            </div>

                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skill.name}
                                        className="skill-item hoverable"
                                        style={{ animationDelay: `${(catIndex * 0.1) + (skillIndex * 0.05)}s` }}
                                    >
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percent">{skill.level}%</span>
                                        </div>
                                        <div className="progress-bar">
                                            <div
                                                className="progress-fill"
                                                style={{
                                                    width: `${skill.level}%`,
                                                    transitionDelay: `${(catIndex * 0.2) + (skillIndex * 0.1)}s`
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
