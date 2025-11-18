import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function FloatingShapes() {
  const [shapes, setShapes] = useState([])
  
  useEffect(() => {
    const newShapes = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.1,
      color: ['#2C5F8D', '#6B7B8C', '#D4A574', '#00F0FF', '#FF00E5'][Math.floor(Math.random() * 5)]
    }))
    setShapes(newShapes)
  }, [])
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full blur-xl"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color,
            opacity: shape.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}