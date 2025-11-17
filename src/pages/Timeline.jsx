import AnimatedText from '../components/AnimatedText'
import InteractiveTimeline from '../components/InteractiveTimeline'

export default function Timeline() {
  return (
    <div className="page-transition relative z-10 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedText
          text="Design Evolution Timeline"
          className="text-5xl md:text-6xl font-bold text-center mb-8"
          gradient
        />
        
        <p className="text-xl text-center text-secondary mb-20 max-w-3xl mx-auto">
          Trace the journey of Humanist Modernism from its roots to modern implementation
        </p>
        
        <InteractiveTimeline events={timelineEvents} />
      </div>
    </div>
  )
}

const timelineEvents = [
  {
    year: '1920s',
    title: 'Bauhaus Foundation',
    description: 'Form follows function - the birth of modernist design principles',
    fullDescription: 'The Bauhaus school in Germany revolutionized design education by emphasizing the marriage of art and industry. This movement laid the groundwork for modernist principles that prioritize functionality and simplicity.'
  },
  {
    year: '1950s',
    title: 'Swiss Typography',
    description: 'International style emerges with grid systems and sans-serif fonts',
    fullDescription: 'Swiss designers perfected the use of grid systems, creating clean, objective layouts. The International Typographic Style influenced graphic design worldwide with its emphasis on readability and geometric structure.'
  },
  {
    year: '1957',
    title: 'Helvetica Born',
    description: 'Max Miedinger creates the iconic neutral typeface',
    fullDescription: 'Helvetica became one of the most widely used typefaces in the world, embodying clarity and neutrality. Its clean lines and balanced letterforms made it perfect for both corporate and artistic applications.'
  },
  {
    year: '1970s',
    title: 'Humanist Revival',
    description: 'Adrian Frutiger develops legible typefaces for signage',
    fullDescription: 'Frutiger typeface was designed for Charles de Gaulle Airport, prioritizing maximum readability at distance and speed. This marked a shift toward more human-centered design considerations.'
  },
  {
    year: '1980s',
    title: 'Digital Revolution',
    description: 'Desktop publishing brings design to the masses',
    fullDescription: 'The introduction of the Macintosh and PostScript democratized typography and graphic design. Suddenly, anyone could create professional-looking documents, forever changing the design landscape.'
  },
  {
    year: '1990s',
    title: 'Web Typography',
    description: 'Design adapts to screen-based reading',
    fullDescription: 'The web introduced new challenges for typography - screen resolution, browser compatibility, and responsive design. Designers had to reconsider principles established for print media.'
  },
  {
    year: '2000s',
    title: 'Web Fonts Emerge',
    description: '@font-face and web font services revolutionize online design',
    fullDescription: 'Technologies like @font-face and services like Google Fonts freed web designers from the limitations of system fonts, allowing for richer typographic expression online.'
  },
  {
    year: '2010s',
    title: 'Responsive Design',
    description: 'Mobile-first thinking reshapes web typography',
    fullDescription: 'The mobile revolution forced designers to create flexible layouts that work across all screen sizes. Typography had to be equally readable on 4-inch phones and 27-inch monitors.'
  },
  {
    year: '2015',
    title: 'Variable Fonts',
    description: 'Single font files with infinite variations',
    fullDescription: 'Variable fonts introduced parametric design to typography, allowing weight, width, and other attributes to be adjusted smoothly along axes, all in a single file.'
  },
  {
    year: '2020s',
    title: 'AI-Enhanced Design',
    description: 'Machine learning assists in typography and layout',
    fullDescription: 'AI tools began helping designers with tasks like font pairing, layout suggestions, and accessibility checking, augmenting human creativity with computational power.'
  },
  {
    year: '2024',
    title: 'Humanist Modernism Codified',
    description: 'Design philosophy formalized for digital age',
    fullDescription: 'The principles of Humanist Modernism are systematically applied to modern web design, balancing timeless typography with cutting-edge interactive technology.'
  },
  {
    year: '2025',
    title: 'This Project',
    description: 'Traditional principles meet React and modern web capabilities',
    fullDescription: 'This website demonstrates how classic humanist design principles can be enhanced with modern frameworks, animations, and interactive features while maintaining their core philosophy of human-centered design.'
  }
]