import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Clock, Users, BookOpen, Info, Mail } from 'lucide-react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/timeline', icon: Clock, label: 'Timeline' },
    { path: '/designers', icon: Users, label: 'Designers' },
    { path: '/resources', icon: BookOpen, label: 'Resources' },
    { path: '/about', icon: Info, label: 'About' },
    { path: '/contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <div className="lg:hidden">
      {/* Hamburger Button - UPDATED: Moved down slightly to avoid overlap */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-20 z-[100] p-3 glass rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary" />
        ) : (
          <Menu className="w-6 h-6 text-primary" />
        )}
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop - Click to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90]"
            />

            {/* Menu Panel - Slides in from right */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white dark:bg-gray-900 shadow-2xl z-[95] p-8 overflow-y-auto"
            >
              {/* Menu Items */}
              <div className="flex flex-col gap-4 mt-20">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-primary/20 transition-colors group"
                    >
                      <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-lg font-medium">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Footer Info in Menu */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-secondary text-center">
                  Humanist Modernism
                </p>
                <p className="text-xs text-secondary text-center mt-2">
                  Design History Gallery
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}