import { motion } from 'framer-motion'
import { Book, Globe, Video, Wrench, ExternalLink } from 'lucide-react'
import AnimatedText from '../components/AnimatedText'
import GlassCard from '../components/GlassCard'

export default function Resources() {
  return (
    <div className="page-transition relative z-10 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedText
          text="Learning Resources"
          className="text-5xl md:text-6xl font-bold text-center mb-8"
          gradient
        />
        
        <p className="text-xl text-center text-secondary mb-20 max-w-3xl mx-auto">
          Curated collection of books, articles, tools, and courses to deepen your understanding
        </p>
        
        {Object.entries(resources).map(([category, items], catIndex) => (
          <section key={category} className="mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 gradient-text flex items-center gap-3"
            >
              {getCategoryIcon(category)}
              {category}
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {items.map((item, i) => (
                <GlassCard key={i} delay={i * 0.05} neumorphic>
                  <div className="flex items-start gap-4">
                    <div className="glass p-3 rounded-lg shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm opacity-80 mb-3">{item.description}</p>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-semibold"
                        >
                          Visit Resource
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

function getCategoryIcon(category) {
  const icons = {
    'Books': <Book className="w-8 h-8" />,
    'Online Resources': <Globe className="w-8 h-8" />,
    'Videos & Courses': <Video className="w-8 h-8" />,
    'Design Tools': <Wrench className="w-8 h-8" />  // ✅ Fixed!
  }
  return icons[category]
}

const resources = {
  'Books': [
    {
      title: 'The Elements of Typographic Style',
      description: 'Robert Bringhurst\'s masterpiece on typography principles and history',
      icon: <Book className="w-6 h-6" />,
      link: 'https://www.amazon.com/Elements-Typographic-Style-Robert-Bringhurst/dp/0881791326'
    },
    {
      title: 'The Visual Display of Quantitative Information',
      description: 'Edward Tufte\'s classic on data visualization and clarity',
      icon: <Book className="w-6 h-6" />,
      link: 'https://www.edwardtufte.com/tufte/books_vdqi'
    },
    {
      title: 'Thinking with Type',
      description: 'Ellen Lupton\'s essential guide to typography for designers',
      icon: <Book className="w-6 h-6" />,
      link: 'https://www.thinkingwithtype.com/'
    }
  ],
  'Online Resources': [
    {
      title: 'Butterick\'s Practical Typography',
      description: 'Free online book covering typography fundamentals',
      icon: <Globe className="w-6 h-6" />,
      link: 'https://practicaltypography.com/'
    },
    {
      title: 'Type Scale',
      description: 'Visual calculator for creating harmonious type scales',
      icon: <Globe className="w-6 h-6" />,
      link: 'https://typescale.com/'
    },
    {
      title: 'Google Fonts',
      description: 'Free, open-source font library with excellent humanist options',
      icon: <Globe className="w-6 h-6" />,
      link: 'https://fonts.google.com/'
    }
  ],
  'Videos & Courses': [
    {
      title: 'Typography Course (Skillshare)',
      description: 'Comprehensive video course on type fundamentals',
      icon: <Video className="w-6 h-6" />,
      link: 'https://www.skillshare.com/'
    },
    {
      title: 'Helvetica Documentary',
      description: 'Film exploring the history and impact of iconic typeface',
      icon: <Video className="w-6 h-6" />,
    }
  ],
'Design Tools': [
  {
    title: 'Figma',
    description: 'Collaborative design tool with excellent typography features',
    icon: <Wrench className="w-6 h-6" />,  // ✅ Fixed!
    link: 'https://www.figma.com/'
  },
  {
    title: 'FontPair',
    description: 'Curated font pairing recommendations',
    icon: <Wrench className="w-6 h-6" />,  // ✅ Fixed!
    link: 'https://fontpair.co/'
  }
]
}