import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Clock, Users, BookOpen, Info, Mail, Puzzle as PuzzleIcon } from 'lucide-react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/timeline', icon: Clock, label: 'Timeline' },
    { path: '/designers', icon: Users, label: 'Designers' },
    { path: '/puzzle', icon: PuzzleIcon, label: 'Puzzle' },
    { path: '/resources', icon: BookOpen, label: 'Resources' },
    { path: '/about', icon: Info, label: 'About' },
    { path: '/contact', icon: Mail, label: 'Contact' },
  ];

  return (
    // Show on mobile and tablet (below 1024px)
    <div className="mobile-menu-container lg:hidden">
      {/* Menu Button - Bottom Left (SAME POSITION AS CIRCLEMENU) */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-[100] p-4 glass rounded-full shadow-2xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-8 h-8" />
        ) : (
          <Menu className="w-8 h-8" />
        )}
      </motion.button>

      {/* Vertical List Menu - MATCHES CIRCLEMENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Optional backdrop - click to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[90]"
            />

            {/* Vertical Menu Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-24 left-8 glass rounded-2xl p-3 shadow-2xl z-[95] max-h-[70vh] overflow-y-auto"
            >
              <nav className="flex flex-col gap-2" role="navigation">
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
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}