import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, Clock, Users, BookOpen, Info, Mail, Menu, X, Puzzle as PuzzleIcon } from 'lucide-react'

export default function CircleMenu() {
  const [isOpen, setIsOpen] = useState(false)
  
  const menuItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/timeline', icon: Clock, label: 'Timeline' },
    { path: '/designers', icon: Users, label: 'Designers' },
    { path: '/puzzle', icon: PuzzleIcon, label: 'Puzzle' },
    { path: '/resources', icon: BookOpen, label: 'Resources' },
    { path: '/about', icon: Info, label: 'About' },
    { path: '/contact', icon: Mail, label: 'Contact' },
  ]
  
  return (
    // Only show on desktop (1024px and up)
    <div className="circle-menu-container hidden lg:block fixed bottom-8 left-8 z-50">
      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="glass p-4 rounded-full shadow-2xl hover:shadow-3xl transition-shadow relative z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
      </motion.button>
      
      {/* Vertical Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 left-0 glass rounded-2xl p-3 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/20 transition-all group min-w-[180px]"
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}