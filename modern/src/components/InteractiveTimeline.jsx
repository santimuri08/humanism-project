import { motion } from 'framer-motion'
import { useState } from 'react'
import GlassCard from './GlassCard'

export default function InteractiveTimeline({ events }) {
  const [selectedEvent, setSelectedEvent] = useState(null)
  
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2" />
      
      {/* Events */}
      <div className="space-y-16">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
          >
            {/* Content */}
            <div className="w-5/12">
              <GlassCard 
                neumorphic 
                className="cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <h3 className="text-xl font-bold mb-2 gradient-text">{event.year}</h3>
                <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
                <p className="text-sm opacity-80">{event.description}</p>
              </GlassCard>
            </div>
            
            {/* Center Dot */}
            <div className="w-2/12 flex justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg"
                whileHover={{ scale: 1.5 }}
              />
            </div>
            
            {/* Empty Space */}
            <div className="w-5/12" />
          </motion.div>
        ))}
      </div>
      
      {/* Modal for selected event */}
      {selectedEvent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-8"
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="glass max-w-2xl p-8 rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text">{selectedEvent.year}</h2>
            <h3 className="text-2xl font-semibold mb-4">{selectedEvent.title}</h3>
            <p className="text-lg leading-relaxed">{selectedEvent.fullDescription || selectedEvent.description}</p>
            <button
              onClick={() => setSelectedEvent(null)}
              className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}