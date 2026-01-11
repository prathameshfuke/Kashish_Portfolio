import { useState } from 'react'
import './FunSection.css'

const stickers = [
    { id: 1, src: '/assets/11921df8190814ccb84613acb2df7bf1.png', alt: 'Working late', caption: 'My anthem 🎵' },
    { id: 2, src: '/assets/29f6526a674d1cfc094550f0a6ed60de.png', alt: 'Hopes & Dreams', caption: 'Daily mood board' },
    { id: 3, src: '/assets/a099045b8fbe7834719828724c7fd7c5.png', alt: 'Ctrl+Z', caption: 'Best friends forever' },
    { id: 4, src: '/assets/b23d9b0be44d395aef3b157984acf864.png', alt: 'Everything under Ctrl', caption: 'Designer life' },
    { id: 5, src: '/assets/be39c59bfa2398e8ab6feebd5b51cd46.png', alt: 'Main Character', caption: 'Energy ✨' },
    { id: 6, src: '/assets/92dbb15dee072c25abfb0c38d3472be1.png', alt: 'Help Me', caption: 'Deadlines be like' },
    { id: 7, src: '/assets/fafbfd569545e18b40fc5b6b88b2ea77.png', alt: 'Cried but did the thing', caption: 'Every project' },
    { id: 8, src: '/assets/f9264f379bb48fb7d18a1248168c5774.png', alt: 'Cool cat', caption: 'After delivery' },
]

function FunSection() {
    const [activeSticker, setActiveSticker] = useState(null)

    const handleStickerClick = (id) => {
        setActiveSticker(activeSticker === id ? null : id)
    }

    return (
        <section id="fun" className="fun-section">
            <div className="container">
                <div className="section-header fade-in-up">
                    <h2>The Fun Side 💫</h2>
                    <p className="section-subtitle">
                        A peek into my designer personality
                    </p>
                </div>

                {/* Sticker carousel */}
                <div className="sticker-carousel fade-in-up">
                    <div className="carousel-track">
                        {[...stickers, ...stickers].map((sticker, index) => (
                            <div
                                key={`${sticker.id}-${index}`}
                                className={`sticker-item hoverable ${activeSticker === sticker.id ? 'active' : ''}`}
                                onClick={() => handleStickerClick(sticker.id)}
                            >
                                <img src={sticker.src} alt={sticker.alt} />
                                <span className="sticker-caption">{sticker.caption}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Featured content */}
                <div className="fun-grid fade-in-up">
                    <div className="fun-card expressions-card hoverable">
                        <h4>My Many Moods</h4>
                        <img src="/assets/WhatsApp Image 2026-01-11 at 10.59.17 AM.png" alt="Character expressions" />
                        <p>Same designer, different vibes 😄</p>
                    </div>

                    <div className="fun-card quote-card hoverable">
                        <div className="quote-content">
                            <img src="/assets/025f02827decc6d1599f53d539621d14.png" alt="AI Icon" className="quote-icon" />
                            <h4>finalfinal04_FINAL_v3.ai</h4>
                            <p>Every designer's naming convention 📁</p>
                        </div>
                    </div>

                    <div className="fun-card personality-card hoverable">
                        <h4>Designer Personality</h4>
                        <div className="personality-traits">
                            <span className="trait">☕ Coffee powered</span>
                            <span className="trait">🎨 Obsessed with details</span>
                            <span className="trait">✨ Sparkle enthusiast</span>
                            <span className="trait">🌙 Night owl creative</span>
                            <span className="trait">💗 Aesthetic everything</span>
                        </div>
                    </div>
                </div>

                {/* Interactive quote */}
                <div className="interactive-quote fade-in-up">
                    <blockquote>
                        "I'm working late, 'cause I'm a <span className="highlight-word">designer</span>"
                    </blockquote>
                    <p className="quote-credit">— Every night, probably 🌙</p>
                </div>
            </div>
        </section>
    )
}

export default FunSection
