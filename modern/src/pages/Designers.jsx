import { useState } from 'react'
import { motion } from 'framer-motion'
import GlassCard from '../components/GlassCard'
import AnimatedText from '../components/AnimatedText'

export default function Designers() {
  const [flipped, setFlipped] = useState({})

  const toggleFlip = (id) => {
    setFlipped(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const designers = [
    {
      id: 1,
      name: 'Adrian Frutiger',
      emoji: '✍️',
      years: '1928-2015',
      bio: 'Swiss typeface designer who created some of the most legible and widely-used fonts in history, with a focus on clarity and readability.',
      works: ['Frutiger typeface', 'Univers', 'Avenir', 'OCR-B']
    },
    {
      id: 2,
      name: 'Edward Tufte',
      emoji: '📊',
      years: '1942-Present',
      bio: 'Pioneer of data visualization, emphasizing clarity, precision, and efficiency in presenting quantitative information.',
      works: ['The Visual Display of Quantitative Information', 'Envisioning Information', 'Beautiful Evidence']
    },
    {
      id: 3,
      name: 'Jan Tschichold',
      emoji: '📖',
      years: '1902-1974',
      bio: 'German typographer who pioneered modern typography and later championed classical book design principles.',
      works: ['Die Neue Typografie', 'Penguin Books redesign', 'Sabon typeface']
    },
    {
      id: 4,
      name: 'Erik Spiekermann',
      emoji: '🔤',
      years: '1947-Present',
      bio: 'German typographer and graphic designer, creator of the FF Meta font family, advocating for functional and accessible typography.',
      works: ['FF Meta', 'ITC Officina', 'Berlin Transit typeface', 'Stop Stealing Sheep']
    },
    {
      id: 5,
      name: 'Massimo Vignelli',
      emoji: '🚇',
      years: '1931-2014',
      bio: 'Italian designer who brought European modernism to America, famous for the NYC Subway Map and timeless corporate identities.',
      works: ['NYC Subway Map', 'American Airlines identity', 'Helvetica advocate']
    },
    {
      id: 6,
      name: 'Robert Bringhurst',
      emoji: '📚',
      years: '1946-Present',
      bio: 'Canadian poet and typographer, author of the definitive guide to typography principles and best practices.',
      works: ['The Elements of Typographic Style', 'Poetry collections', 'Typography theory']
    }
  ]

  return (
    <div className="page-transition relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <AnimatedText
            text="Pioneering Designers"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 gradient-text"
          />
          <p className="text-lg sm:text-xl text-secondary max-w-3xl mx-auto">
            The visionaries who shaped humanist design principles
          </p>
        </motion.div>

        {/* Designer Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {designers.map((designer, index) => (
            <motion.div
              key={designer.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="perspective-1000"
            >
              <div
                onClick={() => toggleFlip(designer.id)}
                className={`relative w-full h-96 cursor-pointer transition-transform duration-700 transform-style-3d ${
                  flipped[designer.id] ? 'rotate-y-180' : ''
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flipped[designer.id] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* Front of Card */}
                <div
                  className="absolute inset-0 backface-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <GlassCard className="h-full flex flex-col items-center justify-center p-8 hover:scale-105 transition-transform">
                    <div className="text-7xl mb-6">{designer.emoji}</div>
                    <h3 className="text-2xl font-bold mb-2 text-center">{designer.name}</h3>
                    <p className="text-secondary text-center">{designer.years}</p>
                    <p className="text-sm text-accent mt-4 text-center">Click to flip</p>
                  </GlassCard>
                </div>

                {/* Back of Card */}
                <div
                  className="absolute inset-0 backface-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <GlassCard className="h-full flex flex-col justify-between p-6 hover:scale-105 transition-transform">
                    <div>
                      <h3 className="text-xl font-bold mb-3">{designer.name}</h3>
                      <p className="text-sm text-secondary mb-4 leading-relaxed">
                        {designer.bio}
                      </p>
                      <div>
                        <p className="font-semibold text-primary mb-2">Notable Works:</p>
                        <ul className="text-sm space-y-1">
                          {designer.works.map((work, i) => (
                            <li key={i} className="text-secondary">• {work}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <p className="text-xs text-accent text-center mt-4">Click to flip back</p>
                  </GlassCard>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}