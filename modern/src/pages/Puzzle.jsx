import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import InteractivePuzzle from '../components/InteractivePuzzle'

export default function Puzzle() {
  return (
    <div className="page-transition relative z-10 py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedText
          text="🧩 Puzzle Gallery"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6"
          gradient
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg sm:text-xl text-center text-secondary mb-12 max-w-3xl mx-auto"
        >
          Experience design through interaction! Drag, resize, and unlock hidden content in this playful puzzle.
        </motion.p>
        
        {/* Interactive Puzzle Component */}
        <InteractivePuzzle />
        
        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 gradient-text">
            Why Interactive Design Matters
          </h3>
          <p className="text-secondary leading-relaxed mb-6">
            Humanist Modernism isn't just about static beauty—it's about creating meaningful 
            interactions that enhance user experience. This puzzle demonstrates how playful 
            design can make content exploration engaging and memorable.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="glass rounded-xl p-6">
              <div className="text-4xl mb-3">🎮</div>
              <h4 className="font-bold mb-2">Engagement</h4>
              <p className="text-sm text-secondary">
                Interactive elements keep users engaged and encourage exploration
              </p>
            </div>
            
            <div className="glass rounded-xl p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h4 className="font-bold mb-2">Memorability</h4>
              <p className="text-sm text-secondary">
                Hands-on interaction creates stronger memory associations
              </p>
            </div>
            
            <div className="glass rounded-xl p-6">
              <div className="text-4xl mb-3">✨</div>
              <h4 className="font-bold mb-2">Delight</h4>
              <p className="text-sm text-secondary">
                Playful experiences create emotional connections with content
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}