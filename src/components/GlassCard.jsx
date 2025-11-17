import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', delay = 0, neumorphic = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`${neumorphic ? 'neumorphic dark:neumorphic-dark' : 'glass'} p-6 transition-all ${className}`}
    >
      {children}
    </motion.div>
  )
}