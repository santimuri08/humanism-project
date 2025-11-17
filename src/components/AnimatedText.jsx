import { motion } from 'framer-motion'

export default function AnimatedText({ text, className = '', gradient = false }) {
  const words = text.split(' ')
  
  return (
    <div className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={`inline-block mr-2 ${gradient ? 'gradient-text' : ''}`}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}