import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CursorTrail() {
  const [trails, setTrails] = useState([])
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const newTrail = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      }
      
      setTrails(prev => [...prev.slice(-10), newTrail])
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  return (
    <>
      {trails.map((trail) => (
        <motion.div
          key={trail.id}
          className="fixed w-3 h-3 bg-primary rounded-full pointer-events-none"
          style={{
            left: trail.x,
            top: trail.y,
            zIndex: 9998,
          }}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </>
  )
}