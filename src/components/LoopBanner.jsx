import { motion } from 'framer-motion'
import './LoopBanner.css'

const LoopBanner = () => {
    return (
        <div className="loop-banner">
            <motion.div
                className="loop-track"
                animate={{ x: ["-50%", "0%"] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
                {/* Repetitive content for seamless loop */}
                <span className="loop-item">VISUAL DESIGNER &nbsp;•&nbsp; VISUAL DESIGNER &nbsp;•&nbsp; VISUAL DESIGNER &nbsp;•&nbsp; VISUAL DESIGNER &nbsp;•&nbsp; </span>
                <span className="loop-item">VISUAL DESIGNER &nbsp;•&nbsp; VISUAL DESIGNER &nbsp;•&nbsp; VISUAL DESIGNER &nbsp;•&nbsp; VISUAL DESIGNER &nbsp;•&nbsp; </span>
                <span className="loop-item">VISUAL DESIGNER &nbsp;•&nbsp; VISUAL DESIGNER &nbsp;•&nbsp; VISUAL DESIGNER &nbsp;•&nbsp; VISUAL DESIGNER &nbsp;•&nbsp; </span>
                <span className="loop-item">VISUAL DESIGNER &nbsp;•&nbsp; VISUAL DESIGNER &nbsp;•&nbsp; VISUAL DESIGNER &nbsp;•&nbsp; VISUAL DESIGNER &nbsp;•&nbsp; </span>
            </motion.div>
        </div>
    )
}

export default LoopBanner
