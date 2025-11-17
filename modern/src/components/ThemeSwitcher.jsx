import { motion } from 'framer-motion'
import { Sun, Moon, Zap, Palette, Mouse, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function ThemeSwitcher({ 
  theme, 
  setTheme, 
  ambientMode, 
  setAmbientMode,
  cursorTrailEnabled,
  setCursorTrailEnabled 
}) {
  const [isOpen, setIsOpen] = useState(false)
  
  const themes = [
    { id: 'light', icon: Sun, label: 'Light', color: '#FAFAF8' },
    { id: 'dark', icon: Moon, label: 'Dark', color: '#1A1A1A' },
    { id: 'neon', icon: Zap, label: 'Neon', color: '#0A0A0A' },
    { id: 'pastel', icon: Palette, label: 'Pastel', color: '#FFF5F5' },
  ]
  
  return (
    <div className="fixed top-6 right-6 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="glass p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Palette className="w-6 h-6" />
      </motion.button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 right-0 glass p-6 rounded-2xl shadow-2xl min-w-[280px]"
        >
          <h3 className="text-lg font-bold mb-4 gradient-text">Theme Settings</h3>
          
          {/* Theme Options */}
          <div className="space-y-2 mb-6">
            {themes.map(({ id, icon: Icon, label, color }) => (
              <button
                key={id}
                onClick={() => setTheme(id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                  theme === id 
                    ? 'bg-primary text-white' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="flex-1 text-left">{label}</span>
                <div 
                  className="w-6 h-6 rounded-full border-2 border-white"
                  style={{ backgroundColor: color }}
                />
              </button>
            ))}
          </div>
          
          {/* Toggle Options */}
          <div className="space-y-3 border-t border-gray-200 dark:border-gray-700 pt-4">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Ambient Mode
              </span>
              <input
                type="checkbox"
                checked={ambientMode}
                onChange={(e) => setAmbientMode(e.target.checked)}
                className="w-5 h-5 accent-primary"
              />
            </label>
            
            <label className="flex items-center justify-between cursor-pointer">
              <span className="flex items-center gap-2">
                <Mouse className="w-5 h-5" />
                Cursor Trail
              </span>
              <input
                type="checkbox"
                checked={cursorTrailEnabled}
                onChange={(e) => setCursorTrailEnabled(e.target.checked)}
                className="w-5 h-5 accent-primary"
              />
            </label>
          </div>
        </motion.div>
      )}
    </div>
  )
}