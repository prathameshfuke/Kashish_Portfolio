import { useState } from 'react'
import './Portfolio.css'

const projects = [
    {
        id: 1,
        title: 'Brand Identity Design',
        category: 'branding',
        description: 'Complete visual identity system for a modern startup',
        image: null,
        color: '#FFB6D9',
    },
    {
        id: 2,
        title: 'Social Media Campaign',
        category: 'social',
        description: 'Engaging social media content series',
        image: null,
        color: '#FFC8DD',
    },
    {
        id: 3,
        title: 'UI/UX Design Project',
        category: 'uiux',
        description: 'User-centered mobile app interface',
        image: null,
        color: '#A8D5BA',
    },
    {
        id: 4,
        title: 'Print Collateral',
        category: 'print',
        description: 'Brochures and marketing materials',
        image: null,
        color: '#FF8FAB',
    },
    {
        id: 5,
        title: 'Packaging Design',
        category: 'branding',
        description: 'Product packaging for retail brand',
        image: null,
        color: '#B8E0D2',
    },
    {
        id: 6,
        title: 'Digital Marketing Assets',
        category: 'social',
        description: 'Complete digital marketing kit',
        image: null,
        color: '#FFE5EC',
    },
]

const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'branding', label: 'Branding' },
    { id: 'uiux', label: 'UI/UX' },
    { id: 'social', label: 'Social Media' },
    { id: 'print', label: 'Print' },
]

function Portfolio() {
    const [activeFilter, setActiveFilter] = useState('all')

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter)

    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="section-header fade-in-up">
                    <h2>My Work</h2>
                    <p className="section-subtitle">
                        A showcase of my creative projects and design solutions
                    </p>
                </div>

                {/* Filter buttons */}
                <div className="portfolio-filters fade-in-up">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            className={`filter-btn hoverable ${activeFilter === filter.id ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter.id)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Project counter */}
                <div className="project-counter fade-in-up">
                    <span className="counter-number">{filteredProjects.length}</span>
                    <span className="counter-label">
                        {filteredProjects.length === 1 ? 'Project' : 'Projects'}
                    </span>
                </div>

                {/* Bento grid */}
                <div className="bento-grid fade-in-up">
                    {filteredProjects.map((project, index) => (
                        <a
                            key={project.id}
                            href="https://behance.net/kashishoswal1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bento-item hoverable"
                            style={{
                                background: project.color,
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            <div className="bento-content">
                                <span className="project-emoji">✨</span>
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                            </div>
                            <div className="bento-overlay">
                                <span className="view-text">View on Behance →</span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="portfolio-cta fade-in-up">
                    <p>Want to see more of my work?</p>
                    <a
                        href="https://behance.net/kashishoswal1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary hoverable"
                    >
                        Visit My Behance
                        <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
