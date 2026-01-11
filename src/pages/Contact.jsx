import { motion } from 'framer-motion'
import './Contact.css'

const contacts = [
    {
        label: 'Email',
        value: 'kashishoswal.work@gmail.com',
        href: 'mailto:kashishoswal.work@gmail.com',
    },
    {
        label: 'LinkedIn',
        value: '@kashish-oswal',
        href: 'https://linkedin.com/in/kashish-oswal-68b2262a7',
    },
    {
        label: 'Behance',
        value: '@kashishoswal1',
        href: 'https://behance.net/kashishoswal1',
    },
]

// Animation variants
const fadeInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
    }
}

const fadeInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
    }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
}

const contactItemVariant = {
    hidden: { opacity: 0, y: 30, x: 20 },
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
}

function Contact() {
    return (
        <motion.div
            className="page contact-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Stickers */}
            <motion.div
                className="sticker contact-sticker-1 float-1"
                initial={{ y: -100, opacity: 0, rotate: -30 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
            >
                <img src="/assets/cherry-removebg-preview.png" alt="Cherries" />
            </motion.div>
            <motion.div
                className="sticker contact-sticker-2 float-2"
                initial={{ y: 100, opacity: 0, rotate: 30 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
            >
                <img src="/assets/62bf5469ac4fb03d5a5073e93cb521a6.png" alt="Pink bow" />
            </motion.div>

            <motion.div
                className="contact-layout"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                {/* Left - Photo */}
                <motion.div
                    className="contact-photo-side"
                    variants={fadeInLeft}
                >
                    <motion.div
                        className="polaroid-frame"
                        whileHover={{ rotate: 0, scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                    >
                        <img src="/assets/photo/kashish-photo.png" alt="Kashish Oswal" />
                    </motion.div>
                </motion.div>

                {/* Right - Contact Info */}
                <motion.div
                    className="contact-info-side"
                    variants={fadeInRight}
                >
                    <motion.h1
                        className="contact-title cursive-title"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        Get in touch!
                    </motion.h1>

                    <motion.div
                        className="contact-details"
                        variants={staggerContainer}
                    >
                        {contacts.map((contact, index) => (
                            <motion.a
                                key={index}
                                href={contact.href}
                                target={contact.label !== 'Email' ? '_blank' : undefined}
                                rel={contact.label !== 'Email' ? 'noopener noreferrer' : undefined}
                                className="contact-detail-item"
                                variants={contactItemVariant}
                                whileHover={{
                                    x: 15,
                                    scale: 1.02,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="contact-detail-label">{contact.label}</span>
                                <span className="contact-detail-value">{contact.value}</span>
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.div
                        className="contact-location"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                    >
                        <p>Pune, India</p>
                    </motion.div>
                </motion.div>
            </motion.div>

            <div className="flowers-fixed">
                <img src="/assets/_-removebg-preview.png" alt="Flowers" />
            </div>
        </motion.div>
    )
}

export default Contact
