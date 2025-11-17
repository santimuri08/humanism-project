import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Github, Linkedin } from 'lucide-react'
import AnimatedText from '../components/AnimatedText'
import GlassCard from '../components/GlassCard'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus(''), 3000)
    }, 1500)
  }
  
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  
  return (
    <div className="page-transition relative z-10 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedText
          text="Get in Touch"
          className="text-5xl md:text-6xl font-bold text-center mb-8"
          gradient
        />
        
        <p className="text-xl text-center text-secondary mb-12">
          Have questions or feedback? I'd love to hear from you!
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, i) => (
            <GlassCard key={i} delay={i * 0.1} neumorphic>
              <a
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center hover:scale-105 transition-transform"
              >
                <method.icon className="w-12 h-12 mb-3 text-primary" />
                <h3 className="font-bold mb-1">{method.title}</h3>
                <p className="text-sm opacity-80">{method.description}</p>
              </a>
            </GlassCard>
          ))}
        </div>
        
        <GlassCard neumorphic>
          <h2 className="text-3xl font-bold mb-6 gradient-text">Send a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass border-2 border-transparent focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass border-2 border-transparent focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block font-semibold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg glass border-2 border-transparent focus:border-primary transition-colors"
                placeholder="What's this about?"
              />
            </div>
            
            <div>
              <label className="block font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg glass border-2 border-transparent focus:border-primary transition-colors resize-none"
                placeholder="Your message..."
              />
              <div className="text-right text-sm opacity-70 mt-1">
                {formData.message.length} / 1000 characters
              </div>
            </div>
            
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:shadow-xl transition-shadow disabled:opacity-50"
            >
              {status === 'sending' ? (
                <>
                  <div className="loading-spinner w-5 h-5" />
                  Sending...
                </>
              ) : status === 'success' ? (
                '✓ Message Sent!'
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </GlassCard>
        
        <GlassCard className="mt-12" neumorphic>
          <h3 className="text-2xl font-bold mb-4 gradient-text">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="glass p-4 rounded-lg cursor-pointer">
                <summary className="font-semibold">{faq.question}</summary>
                <p className="mt-2 opacity-80">{faq.answer}</p>
              </details>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  )
}

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Send me a message',
    link: 'mailto:your@email.com'
  },
  {
    icon: Github,
    title: 'GitHub',
    description: 'View the code',
    link: 'https://github.com'
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    description: 'Connect professionally',
    link: 'https://linkedin.com'
  }
]

const faqs = [
  {
    question: 'Can I use this code for my own project?',
    answer: 'Yes! This is an educational project. Feel free to learn from and reference the code.'
  },
  {
    question: 'What technologies are used?',
    answer: 'React, Vite, Tailwind CSS, Framer Motion, React Router, and various modern web APIs.'
  },
  {
    question: 'How long did this take to build?',
    answer: 'The original version took 14 hours. This modern React version added another 8 hours of development.'
  },
  {
    question: 'Is this mobile-friendly?',
    answer: 'Absolutely! The design is fully responsive and optimized for all screen sizes.'
  }
]