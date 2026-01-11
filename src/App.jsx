import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { MouseSparkles } from './components/Interactive3D'
import './App.css'

function App() {
    return (
        <Router>
            <div className="app">
                {/* Mouse trail sparkles for girly effect */}
                <MouseSparkles />
                <nav className="nav">
                    <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        Home
                    </NavLink>
                    <div className="nav-links">
                        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                            About
                        </NavLink>
                        <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                            Projects
                        </NavLink>
                        <NavLink to="/work" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                            Work
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                            Contact
                        </NavLink>
                    </div>
                </nav>

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
