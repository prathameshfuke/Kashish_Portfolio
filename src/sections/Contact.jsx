import { motion } from 'framer-motion'
import './Contact.css'

const contactLinks = [
    {
        id: 'email',
        label: 'Email',
        value: 'kashishoswal.work@gmail.com',
        href: 'mailto:kashishoswal.work@gmail.com',
    },
    {
        id: 'linkedin',
        label: 'LinkedIn',
        value: '@kashish-oswal',
        href: 'https://linkedin.com/in/kashish-oswal-68b2262a7',
    },
    {
        id: 'behance',
        label: 'Behance',
        value: '@kashishoswal1',
        href: 'https://behance.net/kashishoswal1',
    },
]

// Animation variants
const polaroidVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.55, ease: "easeOut" }
    }
}

const textVariant = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.55, delay: 0.15, ease: "easeOut" }
    }
}

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-grid">
                    {/* Left Column - Polaroid */}
                    <motion.div
                        className="contact-polaroid-wrapper"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={polaroidVariant}
                    >
                        <div className="polaroid">
                            <img 
                                src="/assets/photo/kashish-photo.png" 
                                alt="Kashish Oswal"
                                className="polaroid-image"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Info */}
                    <motion.div
                        className="contact-text-wrapper"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={textVariant}
                    >
                        <span className="contact-label">Contact</span>

                        <h2 className="contact-heading">
                            Let's work together
                        </h2>

                        <p className="contact-body">
                            I'm currently available for freelance work and open to new opportunities. 
                            Whether you have a project in mind or just want to chat, feel free to reach out!
                        </p>

                        <div className="contact-links">
                            {contactLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    target={link.id !== 'email' ? '_blank' : undefined}
                                    rel={link.id !== 'email' ? 'noopener noreferrer' : undefined}
                                    className={`contact-link ${link.id === 'email' ? 'email-link' : ''}`}
                                >
                                    <span className="link-label">{link.label}</span>
                                    <span className="link-value">{link.value}</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
