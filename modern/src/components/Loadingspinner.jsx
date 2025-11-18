import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

export default function LoadingSpinner({ fullScreen = true, message = "Loading..." }) {
  const spinner = (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <Loader2 className="w-12 h-12 text-primary" />
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-secondary"
      >
        {message}
      </motion.p>

      {/* Animated dots */}
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-primary rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </div>
    </div>
  )

  if (fullScreen) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center"
        role="status"
        aria-live="polite"
        aria-label="Loading content"
      >
        {spinner}
      </div>
    )
  }

  return (
    <div 
      className="flex items-center justify-center p-12"
      role="status"
      aria-live="polite"
      aria-label="Loading content"
    >
      {spinner}
    </div>
  )
}