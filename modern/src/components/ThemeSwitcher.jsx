import { useState } from 'react'
import { Sun, Moon, Sparkles, Palette, Settings, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeSwitcher({ 
  theme, 
  setTheme, 
  ambientMode, 
  setAmbientMode, 
  cursorTrailEnabled, 
  setCursorTrailEnabled 
}) {
  // State to control if the theme menu is open
  const [isOpen, setIsOpen] = useState(false)
  
  const themes = [
    { name: 'light', icon: Sun, label: 'Light', color: '#2C5F8D' },
    { name: 'dark', icon: Moon, label: 'Dark', color: '#4a90d9' },
    { name: 'neon', icon: Sparkles, label: 'Neon', color: '#00f2fe' },
    { name: 'pastel', icon: Palette, label: 'Pastel', color: '#a8c7e0' },
  ]
  
  // Handle theme click - toggle back to light if clicking current theme
  const handleThemeClick = (themeName) => {
    if (theme === themeName) {
      // If clicking current theme, go back to default (light)
      setTheme('light')
    } else {
      setTheme(themeName)
    }
  }
  
  return (
    // Position at top-right - away from bottom-left menu
    <div className="theme-switcher fixed top-4 right-4 z-[99]">
      {/* Main Settings Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-3 sm:p-4 rounded-full transition-all ${
          isOpen ? 'glass shadow-xl scale-110' : 'glass shadow-lg'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? 'Close theme settings' : 'Open theme settings'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <Settings className="w-5 h-5 sm:w-6 sm:h-6" />
        )}
      </motion.button>
      
      {/* Collapsible Theme Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 sm:top-20 right-0 glass rounded-2xl p-3 sm:p-4 shadow-2xl min-w-[200px] sm:min-w-[220px]"
          >
            {/* Theme Options */}
            <div className="mb-3 pb-3 border-b border-white/20">
              <p className="text-xs font-semibold mb-2 px-2 opacity-70">Themes</p>
              <div className="space-y-2">
                {themes.map((t) => (
                  <motion.button
                    key={t.name}
                    onClick={() => handleThemeClick(t.name)}
                    className={`w-full flex items-center gap-3 p-2 sm:p-3 rounded-lg transition-all ${
                      theme === t.name
                        ? 'bg-white/20 shadow-md'
                        : 'hover:bg-white/10'
                    }`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Switch to ${t.label} theme`}
                    aria-pressed={theme === t.name}
                  >
                    <t.icon 
                      className="w-5 h-5 flex-shrink-0" 
                      style={{ color: t.color }}
                    />
                    <span className="text-sm font-medium">{t.label}</span>
                    {theme === t.name && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto text-xs"
                      >
                        ✓
                      </motion.span>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
            
            {/* Feature Toggles */}
            <div className="space-y-2">
              <p className="text-xs font-semibold mb-2 px-2 opacity-70">Effects</p>
              
              {/* Ambient Mode Toggle */}
              <motion.button
                onClick={() => setAmbientMode(!ambientMode)}
                className={`w-full flex items-center gap-3 p-2 sm:p-3 rounded-lg transition-all ${
                  ambientMode ? 'bg-white/20 shadow-md' : 'hover:bg-white/10'
                }`}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={ambientMode ? 'Disable ambient mode' : 'Enable ambient mode'}
                aria-pressed={ambientMode}
              >
                <span className="text-lg">🌌</span>
                <span className="text-sm font-medium">Ambient</span>
                {ambientMode && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto text-xs"
                  >
                    ✓
                  </motion.span>
                )}
              </motion.button>
              
              {/* Cursor Trail Toggle */}
              <motion.button
                onClick={() => setCursorTrailEnabled(!cursorTrailEnabled)}
                className={`w-full flex items-center gap-3 p-2 sm:p-3 rounded-lg transition-all ${
                  cursorTrailEnabled ? 'bg-white/20 shadow-md' : 'hover:bg-white/10'
                }`}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={cursorTrailEnabled ? 'Disable cursor trail' : 'Enable cursor trail'}
                aria-pressed={cursorTrailEnabled}
              >
                <span className="text-lg">✨</span>
                <span className="text-sm font-medium">Cursor Trail</span>
                {cursorTrailEnabled && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto text-xs"
                  >
                    ✓
                  </motion.span>
                )}
              </motion.button>
            </div>
            
            {/* Reset Button */}
            <div className="mt-3 pt-3 border-t border-white/20">
              <motion.button
                onClick={() => {
                  setTheme('light')
                  setAmbientMode(false)
                  setCursorTrailEnabled(false)
                }}
                className="w-full flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-white/10 transition-all text-xs font-medium opacity-70 hover:opacity-100"
                whileTap={{ scale: 0.95 }}
                aria-label="Reset to default settings"
              >
                <span>🔄</span>
                <span>Reset to Default</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}