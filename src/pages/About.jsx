import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import GlassCard from '../components/GlassCard'
import ParallaxSection from '../components/ParallaxSection'

export default function About() {
  return (
    <div className="page-transition relative z-10 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedText
          text="About This Project"
          className="text-5xl md:text-6xl font-bold text-center mb-8"
          gradient
        />
        
        <ParallaxSection>
          <GlassCard className="mb-12" neumorphic>
            <h2 className="text-3xl font-bold mb-4 gradient-text">The Vision</h2>
            <p className="text-lg leading-relaxed mb-4">
              This project reimagines the Humanist Modernism design movement for the modern web, 
              combining timeless design principles with cutting-edge React technology and 2025's 
              most innovative UI patterns.
            </p>
            <p className="text-lg leading-relaxed">
              Originally created for IS 373 at NJIT, this evolution demonstrates how classical 
              design philosophy can be enhanced—not replaced—by modern frameworks and interactions.
            </p>
          </GlassCard>
        </ParallaxSection>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <GlassCard neumorphic>
            <h3 className="text-2xl font-bold mb-4 gradient-text">🎨 Design Principles</h3>
            <ul className="space-y-2">
              <li>✓ Human-centered readability</li>
              <li>✓ Generous whitespace</li>
              <li>✓ Clear hierarchy</li>
              <li>✓ Warm color palette</li>
              <li>✓ Timeless typography</li>
            </ul>
          </GlassCard>
          
          <GlassCard neumorphic>
            <h3 className="text-2xl font-bold mb-4 gradient-text">⚡ Modern Features</h3>
            <ul className="space-y-2">
              <li>✓ React + Vite framework</li>
              <li>✓ Framer Motion animations</li>
              <li>✓ Dynamic theme system</li>
              <li>✓ Glassmorphism UI</li>
              <li>✓ Interactive components</li>
            </ul>
          </GlassCard>
        </div>
        
        <GlassCard className="mb-12" neumorphic>
          <h2 className="text-3xl font-bold mb-4 gradient-text">Technologies Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass p-4 rounded-lg text-center"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="font-semibold">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
        
        <GlassCard neumorphic>
          <h2 className="text-3xl font-bold mb-4 gradient-text">Course Information</h2>
          <p className="text-lg mb-2"><strong>Course:</strong> IS 373 - Content Management Systems</p>
          <p className="text-lg mb-2"><strong>Institution:</strong> New Jersey Institute of Technology</p>
          <p className="text-lg mb-4"><strong>Semester:</strong> Fall 2025</p>
          <p className="text-lg leading-relaxed opacity-90">
            This project demonstrates the evolution from static HTML/CSS to modern React-based 
            architecture, showcasing progressive enhancement and cutting-edge web development practices.
          </p>
        </GlassCard>
      </div>
    </div>
  )
}

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'Vite', icon: '⚡' },
  { name: 'Tailwind', icon: '🎨' },
  { name: 'Framer Motion', icon: '🎭' },
  { name: 'React Router', icon: '🛣️' },
  { name: 'Lucide Icons', icon: '🎯' },
  { name: 'ES6+', icon: '📜' },
  { name: 'CSS3', icon: '💅' }
]