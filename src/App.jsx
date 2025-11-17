import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Components
import ThemeSwitcher from './components/ThemeSwitcher'
import CircleMenu from './components/CircleMenu'
import FloatingShapes from './components/FloatingShapes'
import CursorTrail from './components/CursorTrail'
import ScrollProgress from './components/ScrollProgress'

// Pages
import Home from './pages/Home'
import Timeline from './pages/Timeline'
import Designers from './pages/Designers'
import Resources from './pages/Resources'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [theme, setTheme] = useState('light')
  const [ambientMode, setAmbientMode] = useState(false)
  const [cursorTrailEnabled, setCursorTrailEnabled] = useState(true)
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    const savedAmbient = localStorage.getItem('ambientMode') === 'true'
    const savedCursor = localStorage.getItem('cursorTrail') !== 'false'
    
    setTheme(savedTheme)
    setAmbientMode(savedAmbient)
    setCursorTrailEnabled(savedCursor)
    
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
    
    const root = document.documentElement
    
    const themeColors = {
      light: {
        '--bg-color': '#FAFAF8',
        '--text-color': '#2C2C2C',
        '--card-bg': '#FFFFFF'
      },
      dark: {
        '--bg-color': '#1A1A1A',
        '--text-color': '#E8E4DF',
        '--card-bg': '#2A2A2A'
      },
      neon: {
        '--bg-color': '#0A0A0A',
        '--text-color': '#00F0FF',
        '--card-bg': '#1A1A2E'
      },
      pastel: {
        '--bg-color': '#FFF5F5',
        '--text-color': '#4A4A4A',
        '--card-bg': '#FFE5E5'
      }
    }
    
    const colors = themeColors[theme] || themeColors.light
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })
  }, [theme])
  
  useEffect(() => {
    localStorage.setItem('ambientMode', ambientMode)
    document.body.classList.toggle('ambient-bg', ambientMode)
  }, [ambientMode])
  
  useEffect(() => {
    localStorage.setItem('cursorTrail', cursorTrailEnabled)
  }, [cursorTrailEnabled])
  
  useEffect(() => {
    let konamiCode = []
    const konamiSequence = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'KeyB', 'KeyA'
    ]
    
    const handleKeyDown = (e) => {
      konamiCode.push(e.code)
      konamiCode = konamiCode.slice(-10)
      
      if (konamiCode.join(',') === konamiSequence.join(',')) {
        setTheme('neon')
        setAmbientMode(true)
        document.body.classList.add('shake')
        setTimeout(() => document.body.classList.remove('shake'), 500)
        
        const msg = document.createElement('div')
        msg.textContent = '🎮 KONAMI CODE ACTIVATED! 🎮'
        msg.className = 'fixed top-10 left-1/2 -translate-x-1/2 bg-neon-blue text-black px-8 py-4 rounded-lg text-2xl font-bold z-50 neon-glow'
        document.body.appendChild(msg)
        setTimeout(() => msg.remove(), 3000)
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="relative min-h-screen">
      {cursorTrailEnabled && <CursorTrail />}
      <ScrollProgress />
      <FloatingShapes />
      <CircleMenu />
      <ThemeSwitcher 
        theme={theme} 
        setTheme={setTheme}
        ambientMode={ambientMode}
        setAmbientMode={setAmbientMode}
        cursorTrailEnabled={cursorTrailEnabled}
        setCursorTrailEnabled={setCursorTrailEnabled}
      />
      
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/designers" element={<Designers />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App