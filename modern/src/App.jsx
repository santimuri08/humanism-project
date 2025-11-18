import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ThemeSwitcher from './components/ThemeSwitcher'
import FloatingShapes from './components/FloatingShapes'
import CursorTrail from './components/CursorTrail'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import CircleMenu from './components/CircleMenu'
import MobileMenu from './components/MobileMenu'
import Home from './pages/Home'
import Timeline from './pages/Timeline'
import Designers from './pages/Designers'
import Puzzle from './pages/Puzzle'
import Resources from './pages/Resources'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [theme, setTheme] = useState('light')
  const [ambientMode, setAmbientMode] = useState(false)
  const [cursorTrailEnabled, setCursorTrailEnabled] = useState(false)

  // Load saved preferences from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const savedAmbient = localStorage.getItem('ambientMode')
    const savedCursor = localStorage.getItem('cursorTrail')
    
    if (savedTheme) setTheme(savedTheme)
    if (savedAmbient) setAmbientMode(savedAmbient === 'true')
    if (savedCursor) setCursorTrailEnabled(savedCursor === 'true')
  }, [])

  // Save theme to localStorage and apply CSS variables
  useEffect(() => {
    localStorage.setItem('theme', theme)
    
    const root = document.documentElement
    
    // Theme colors
    const themes = {
      light: {
        bg: '#ffffff',
        text: '#1a202c',
        primary: '#2C5F8D',
        secondary: '#6B7B8C',
        accent: '#D4A574',
      },
      dark: {
        bg: '#1a202c',
        text: '#ffffff',
        primary: '#4a90d9',
        secondary: '#8b9cb8',
        accent: '#e8c89c',
      },
      neon: {
        bg: '#000000',
        text: '#00f2fe',
        primary: '#00f2fe',
        secondary: '#f093fb',
        accent: '#4facfe',
      },
      pastel: {
        bg: '#fef6f3',
        text: '#5a4a42',
        primary: '#a8c7e0',
        secondary: '#e5b4c3',
        accent: '#f4d4a5',
      },
    }

    const colors = themes[theme]
    
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value)
    })

    // Apply theme class to body
    document.body.className = theme
  }, [theme])

  // Toggle ambient mode
  useEffect(() => {
    localStorage.setItem('ambientMode', ambientMode)
    
    if (ambientMode) {
      document.body.classList.add('ambient-mode')
    } else {
      document.body.classList.remove('ambient-mode')
    }
  }, [ambientMode])

  // Save cursor trail preference
  useEffect(() => {
    localStorage.setItem('cursorTrail', cursorTrailEnabled)
  }, [cursorTrailEnabled])

  // Konami Code Easter Egg
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
    let konamiIndex = 0

    const handleKeyDown = (e) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++
        
        if (konamiIndex === konamiCode.length) {
          setTheme('neon')
          setAmbientMode(true)
          setCursorTrailEnabled(true)
          
          // Show notification
          const notification = document.createElement('div')
          notification.textContent = '🎮 KONAMI CODE ACTIVATED!'
          notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #00f2fe, #f093fb);
            color: white;
            padding: 2rem 3rem;
            border-radius: 1rem;
            font-size: 1.5rem;
            font-weight: bold;
            z-index: 10000;
            animation: shake 0.5s ease-in-out;
            box-shadow: 0 0 50px rgba(0, 242, 254, 0.5);
          `
          document.body.appendChild(notification)
          document.body.classList.add('shake')
          
          setTimeout(() => {
            notification.remove()
            document.body.classList.remove('shake')
          }, 3000)
          
          konamiIndex = 0
        }
      } else {
        konamiIndex = 0
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-500 ${theme}`}>
        {/* ScrollToTop must be inside Router */}
        <ScrollToTop />
        
        {/* Global Components */}
        <ScrollProgress />
        <FloatingShapes />
        {cursorTrailEnabled && <CursorTrail />}
        
        {/* Theme Switcher */}
        <ThemeSwitcher 
          theme={theme}
          setTheme={setTheme}
          ambientMode={ambientMode}
          setAmbientMode={setAmbientMode}
          cursorTrailEnabled={cursorTrailEnabled}
          setCursorTrailEnabled={setCursorTrailEnabled}
        />

        {/* Mobile Menu (shows on small screens) */}
        <MobileMenu />

        {/* Circle Menu (shows on large screens) */}
        <CircleMenu />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/designers" element={<Designers />} />
          <Route path="/puzzle" element={<Puzzle />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
