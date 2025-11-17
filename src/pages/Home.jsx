import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import AnimatedText from '../components/AnimatedText'
import GlassCard from '../components/GlassCard'
import ParallaxSection from '../components/ParallaxSection'

export default function Home() {
  return (
    <div className="page-transition relative z-10">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-accent animate-pulse-slow" />
          </motion.div>
          
          <AnimatedText
            text="Humanist Modernism"
            className="text-6xl md:text-8xl font-bold mb-6"
            gradient
          />
          
          <AnimatedText
            text="Design History Reimagined for 2025"
            className="text-2xl md:text-4xl text-secondary mb-12"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Link
              to="/timeline"
              className="glass px-8 py-4 rounded-full flex items-center gap-2 hover:shadow-xl transition-all group"
            >
              Explore Timeline
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/designers"
              className="neumorphic px-8 py-4 rounded-full hover:shadow-2xl transition-all"
            >
              Meet Designers
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Principles Section */}
      <ParallaxSection speed={0.3}>
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16 gradient-text">
              Core Principles
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {principles.map((principle, i) => (
                <GlassCard key={i} delay={i * 0.1} neumorphic>
                  <div className="text-4xl mb-4">{principle.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 gradient-text">
                    {principle.title}
                  </h3>
                  <p className="text-lg opacity-90 leading-relaxed">
                    {principle.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>
      
      {/* Features Showcase */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-primary/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 gradient-text">
            Experience the Future
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="glass p-3 rounded-lg">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="opacity-80">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const principles = [
  {
    icon: '📖',
    title: 'Human-Centered',
    description: 'Design that prioritizes readability and comfort, putting the reader first in every decision.'
  },
  {
    icon: '✨',
    title: 'Elegant Simplicity',
    description: 'Clean layouts with generous whitespace that guide the eye naturally through content.'
  },
  {
    icon: '🎨',
    title: 'Timeless Beauty',
    description: 'Classic typography and proportions that remain beautiful across decades.'
  },
  {
    icon: '🔍',
    title: 'Clarity First',
    description: 'Every element serves a purpose, nothing decorative that distracts from content.'
  },
  {
    icon: '🌈',
    title: 'Warm Palette',
    description: 'Muted, sophisticated colors that create a comfortable reading environment.'
  },
  {
    icon: '⚡',
    title: 'Functional Flow',
    description: 'Smooth navigation and intuitive interactions that feel natural and effortless.'
  }
]

const features = [
  {
    icon: Sparkles,
    title: 'Dynamic Themes',
    description: 'Switch between Light, Dark, Neon, and Pastel modes instantly'
  },
  {
    icon: Sparkles,
    title: 'Ambient Mode',
    description: 'Gentle gradient animations that create a living background'
  },
  {
    icon: Sparkles,
    title: 'Cursor Effects',
    description: 'Beautiful particle trails that follow your mouse movement'
  },
  {
    icon: Sparkles,
    title: 'Glassmorphism',
    description: 'Modern frosted glass effect cards with depth and transparency'
  },
  {
    icon: Sparkles,
    title: 'Smooth Animations',
    description: 'Buttery 60fps transitions powered by Framer Motion'
  },
  {
    icon: Sparkles,
    title: 'Easter Eggs',
    description: 'Hidden surprises like the Konami Code for secret themes'
  }
]