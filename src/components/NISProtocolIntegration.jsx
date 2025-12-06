import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  CpuChipIcon, 
  EyeIcon, 
  ShieldCheckIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketSquareIcon
} from '@heroicons/react/24/outline'
import { useAnalytics } from './shared/Analytics'

const protocolFeatures = [
  {
    name: 'Multi-Provider Integration',
    description: 'OpenAI, Anthropic, DeepSeek, BitNet 2',
    status: 'active',
    icon: EyeIcon,
    color: 'green'
  },
  {
    name: 'Consciousness Simulation',
    description: 'Self-aware agents with meta-cognition',
    status: 'active',
    icon: CpuChipIcon,
    color: 'blue'
  },
  {
    name: 'Cultural Intelligence',
    description: 'Ethical AI with heritage preservation',
    status: 'active',
    icon: ShieldCheckIcon,
    color: 'purple'
  }
]

const integrationLinks = [
  {
    title: 'Live Documentation',
    description: 'NIS Protocol v4.0.2 technical docs (experimental)',
    href: '/docs/nis-protocol',
    external: true,
    icon: CodeBracketSquareIcon
  },
  {
    title: 'GitHub Repository',
    description: 'Open source - active R&D development',
    href: 'https://github.com/Organica-Ai-Solutions/NIS_Protocol',
    external: true,
    icon: ArrowTopRightOnSquareIcon
  }
]

export default function NISProtocolIntegration() {
  const { trackCrossSiteNavigation, trackExternalLink, trackNISProtocolInteraction } = useAnalytics()

  const handleLinkClick = (href, title, external = false) => {
    if (external) {
      trackExternalLink(href, title)
      if (href.includes('/docs/nis-protocol')) {
        trackCrossSiteNavigation('nis_protocol_docs', 'main_website')
      }
    }
    trackNISProtocolInteraction('link_click', { destination: href, title })
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B84F3]/5 to-[#FF3D90]/5" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            NIS Protocol v4.0.2 Integration
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experimental AI operating system with NVIDIA Isaac robotics, modular architecture, 
            and enterprise infrastructure. <span className="text-yellow-600 font-medium">R&D Startup - Ongoing Research</span>
          </p>
        </motion.div>

        {/* Live Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {protocolFeatures.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-${feature.color}-100`}>
                  <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center">
                    <span className={`w-3 h-3 bg-${feature.color}-500 rounded-full animate-pulse mr-2`}></span>
                    <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                      {feature.status}
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Integration Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/30"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {integrationLinks.map((link, index) => (
                             <a
                 key={link.title}
                 href={link.href}
                 target={link.external ? "_blank" : "_self"}
                 rel={link.external ? "noopener noreferrer" : ""}
                 onClick={() => handleLinkClick(link.href, link.title, link.external)}
                 className="group flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#0B84F3]/30"
               >
                <div className="flex-shrink-0">
                  <div className="p-3 bg-gradient-to-br from-[#0B84F3] to-[#FF3D90] rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <link.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-6 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#0B84F3] transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {link.description}
                  </p>
                </div>
                {link.external && (
                  <ArrowTopRightOnSquareIcon className="h-5 w-5 text-gray-400 group-hover:text-[#0B84F3] transition-colors ml-2" />
                )}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Cross-Site Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
            <span className="text-sm text-gray-600">Explore more:</span>
            <Link 
              to="/services"
              className="text-sm font-medium text-[#0B84F3] hover:text-[#FF3D90] transition-colors"
            >
              AI Services
            </Link>
            <span className="text-gray-300">•</span>
            <a 
              href="/docs/nis-protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#0B84F3] hover:text-[#FF3D90] transition-colors"
            >
              Technical Docs
            </a>
            <span className="text-gray-300">•</span>
            <Link 
              to="/about"
              className="text-sm font-medium text-[#0B84F3] hover:text-[#FF3D90] transition-colors"
            >
              Our Story
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 