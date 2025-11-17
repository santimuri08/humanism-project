import { motion } from 'framer-motion'
import { useState } from 'react'
import AnimatedText from '../components/AnimatedText'
import GlassCard from '../components/GlassCard'

export default function Designers() {
  const [flipped, setFlipped] = useState({})
  
  const toggleFlip = (id) => {
    setFlipped(prev => ({ ...prev, [id]: !prev[id] }))
  }
  
  return (
    <div className="page-transition relative z-10 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedText
          text="Pioneering Designers"
          className="text-5xl md:text-6xl font-bold text-center mb-8"
          gradient
        />
        
        <p className="text-xl text-center text-secondary mb-20 max-w-3xl mx-auto">
          The visionaries who shaped humanist design principles
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designers.map((designer, i) => (
            <motion.div
              key={designer.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="perspective-1000"
            >
              <motion.div
                className="relative h-96 cursor-pointer"
                onClick={() => toggleFlip(designer.id)}
                animate={{ rotateY: flipped[designer.id] ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden">
                  <GlassCard className="h-full flex flex-col items-center justify-center text-center" neumorphic>
                    <div className="text-6xl mb-4">{designer.emoji}</div>
                    <h3 className="text-2xl font-bold mb-2 gradient-text">{designer.name}</h3>
                    <p className="text-secondary">{designer.years}</p>
                    <p className="text-sm mt-4 opacity-70">Click to flip</p>
                  </GlassCard>
                </div>
                
                {/* Back */}
                <div className="absolute inset-0 backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
                  <GlassCard className="h-full flex flex-col justify-between p-6" neumorphic>
                    <div>
                      <h3 className="text-xl font-bold mb-3 gradient-text">{designer.name}</h3>
                      <p className="text-sm leading-relaxed mb-4">{designer.bio}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Notable Works:</h4>
                        <ul className="text-sm space-y-1 opacity-80">
                          {designer.works.map((work, i) => (
                            <li key={i}>• {work}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <p className="text-xs opacity-70 mt-4">Click to flip back</p>
                  </GlassCard>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

const designers = [
  {
    id: 1,
    name: 'Adrian Frutiger',
    years: '1928-2015',
    emoji: '✍️',
    bio: 'Swiss typeface designer who created some of the most legible and widely-used fonts in history, with a focus on clarity and readability.',
    works: ['Frutiger typeface', 'Univers', 'Avenir', 'OCR-B']
  },
  {
    id: 2,
    name: 'Edward Tufte',
    years: '1942-Present',
    emoji: '📊',
    bio: 'Pioneer of data visualization, emphasizing clarity, precision, and efficiency in presenting quantitative information.',
    works: ['The Visual Display of Quantitative Information', 'Envisioning Information', 'Beautiful Evidence']
  },
  {
    id: 3,
    name: 'Jan Tschichold',
    years: '1902-1974',
    emoji: '📖',
    bio: 'German typographer who helped establish modernist principles, later advocating for classical typography and readability.',
    works: ['Die neue Typographie', 'Penguin Books redesign', 'Sabon typeface']
  },
  {
    id: 4,
    name: 'Erik Spiekermann',
    years: '1947-Present',
    emoji: '🔤',
    bio: 'German typographer and graphic designer known for creating highly legible typefaces for corporate and public use.',
    works: ['FF Meta', 'ITC Officina', 'Deutsche Bahn redesign']
  },
  {
    id: 5,
    name: 'Massimo Vignelli',
    years: '1931-2014',
    emoji: '🚇',
    bio: 'Italian designer who brought European modernism to America, famous for the NYC Subway map and timeless corporate identities.',
    works: ['NYC Subway Map', 'American Airlines identity', 'Helvetica advocate']
  },
  {
    id: 6,
    name: 'Robert Bringhurst',
    years: '1946-Present',
    emoji: '📚',
    bio: 'Canadian poet and typographer, author of the definitive guide to typographic principles and best practices.',
    works: ['The Elements of Typographic Style', 'Poetry collections', 'Typography theory']
  }
]