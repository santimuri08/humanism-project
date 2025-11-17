import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, Clock, Users, BookOpen, Info, Mail, Menu, X } from 'lucide-react'

export default function CircleMenu() {
  const [isOpen, setIsOpen] = useState(false)
  
  const menuItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/timeline', icon: Clock, label: 'Timeline' },
    { path: '/designers', icon: Users, label: 'Designers' },
    { path: '/resources', icon: BookOpen, label: 'Resources' },
    { path: '/about', icon: Info, label: 'About' },
    { path: '/contact', icon: Mail, label: 'Contact' },
  ]
  
  const radius = 120
  const angleStep = (Math.PI * 2) / menuItems.length
  
  return (
    <div className="fixed bottom-8 left-8 z-50">
      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="glass p-4 rounded-full shadow-2xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
      </motion.button>
      
      {/* Circle Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <>
            {menuItems.map((item, index) => {
              const angle = angleStep * index - Math.PI / 2
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius
              
              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{ opacity: 1, scale: 1, x, y }}
                  exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="absolute bottom-4 left-4"
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="glass p-4 rounded-full shadow-lg hover:shadow-xl transition-all block group"
                  >
                    <item.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              )
            })}
          </>
        )}
      </AnimatePresence>
    </div>
  )
}