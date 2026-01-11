import './Contact.css'

const contactLinks = [
    {
        id: 'email',
        icon: '📧',
        label: 'Email',
        value: 'kashishoswal.work@gmail.com',
        href: 'mailto:kashishoswal.work@gmail.com',
    },
    {
        id: 'linkedin',
        icon: '💼',
        label: 'LinkedIn',
        value: 'Connect with me',
        href: 'https://linkedin.com/in/kashish-oswal-68b2262a7',
    },
    {
        id: 'behance',
        icon: '🎨',
        label: 'Behance',
        value: 'View my portfolio',
        href: 'https://behance.net/kashishoswal1',
    },
]

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-content fade-in-up">
                        <div className="contact-header">
                            <span className="contact-emoji">✨</span>
                            <h2>Let's Create Something Amazing Together!</h2>
                            <p className="contact-subtitle">
                                Got a project in mind? I'd love to hear about it.
                                Drop me a message and let's bring your vision to life!
                            </p>
                        </div>

                        <div className="contact-links">
                            {contactLinks.map((link, index) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    target={link.id !== 'email' ? '_blank' : undefined}
                                    rel={link.id !== 'email' ? 'noopener noreferrer' : undefined}
                                    className="contact-bubble hoverable fade-in-up"
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                >
                                    <span className="contact-bubble-icon">{link.icon}</span>
                                    <div className="contact-bubble-text">
                                        <span className="bubble-label">{link.label}</span>
                                        <span className="bubble-value">{link.value}</span>
                                    </div>
                                    <span className="bubble-arrow">→</span>
                                </a>
                            ))}
                        </div>

                        <div className="contact-cta fade-in-up">
                            <p>Or just say hi! I'm always happy to chat ☕</p>
                        </div>
                    </div>

                    <div className="contact-visual fade-in-up">
                        <div className="wax-seal animate-float">
                            <img src="/assets/df767f7b266c96cd189aca767d8182ec.png" alt="Wax seal" />
                        </div>
                        <div className="contact-decoration">
                            <span className="deco">💌</span>
                            <span className="deco">💗</span>
                            <span className="deco">✨</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
