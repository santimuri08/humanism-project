import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Zap, Heart, Eye, Users, Target } from 'lucide-react'
import AnimatedText from '../components/AnimatedText'
import GlassCard from '../components/GlassCard'
import ParallaxSection from '../components/ParallaxSection'

export default function Home() {
  return (
    <div className="page-transition relative z-10">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto text-center w-full">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-accent animate-pulse-slow" />
          </motion.div>
          
          <AnimatedText
            text="Humanist Modernism"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 px-4"
            gradient
          />
          
          <AnimatedText
            text="Design History Reimagined for 2025"
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-secondary mb-8 sm:mb-12 px-4"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <Link
              to="/timeline"
              className="glass px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center gap-2 hover:shadow-xl transition-all group w-full sm:w-auto justify-center text-sm sm:text-base"
            >
              <span>Explore Timeline</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/designers"
              className="neumorphic px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-2xl transition-all w-full sm:w-auto text-center text-sm sm:text-base"
            >
              Meet Designers
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Principles Section */}
      <ParallaxSection speed={0.3}>
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 gradient-text">
              Core Principles
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="h-full hover:scale-105 transition-transform">
                    <div className="flex flex-col items-center text-center p-4 sm:p-6">
                      <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">
                        {principle.icon}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 gradient-text">
                        {principle.title}
                      </h3>
                      <p className="text-sm sm:text-base text-secondary leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>
      
      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 gradient-text">
            Modern Implementation
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <GlassCard className="h-full p-4 sm:p-6 md:p-8 neumorphic hover:shadow-2xl transition-all">
                  <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-3 sm:mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-secondary">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard className="p-6 sm:p-8 md:p-12 neumorphic">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
              Ready to Explore?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-secondary mb-6 sm:mb-8 max-w-2xl mx-auto">
              Dive deeper into the history, principles, and modern applications of Humanist Modernism in web design.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link
                to="/about"
                className="glass px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-xl transition-all w-full sm:w-auto text-center text-sm sm:text-base"
              >
                Learn More
              </Link>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-primary to-accent text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-xl transition-all w-full sm:w-auto text-center text-sm sm:text-base"
              >
                Get in Touch
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  )
}

const principles = [
  {
    icon: <Eye />,
    title: 'Legibility',
    description: 'Text that\'s easy to read across all devices and contexts, prioritizing human comfort.'
  },
  {
    icon: <Heart />,
    title: 'Human-Centered',
    description: 'Design decisions driven by user needs, not trends or technological constraints.'
  },
  {
    icon: <Zap />,
    title: 'Function First',
    description: 'Form serves function. Every element has a purpose beyond aesthetics.'
  },
  {
    icon: <Users />,
    title: 'Accessibility',
    description: 'Inclusive design that works for everyone, regardless of ability or device.'
  },
  {
    icon: <Target />,
    title: 'Clear Hierarchy',
    description: 'Visual structure guides users naturally through content without confusion.'
  },
  {
    icon: <Sparkles />,
    title: 'Timeless Quality',
    description: 'Principles that remain relevant as technology and trends evolve.'
  }
]

const features = [
  {
    icon: Zap,
    title: 'React & Vite',
    description: 'Lightning-fast development and runtime performance with modern tooling.'
  },
  {
    icon: Sparkles,
    title: 'Framer Motion',
    description: 'Smooth, physics-based animations that enhance user experience without distraction.'
  },
  {
    icon: Eye,
    title: 'Theme System',
    description: 'Multiple carefully crafted themes that maintain design principles across contexts.'
  },
  {
    icon: Target,
    title: 'Responsive Design',
    description: 'Seamless experience from mobile to desktop, adapting intelligently to all screen sizes.'
  }
]