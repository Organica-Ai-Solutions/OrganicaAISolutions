import { Link } from 'react-router-dom'
import { 
  CpuChipIcon,
  EyeIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  CloudArrowUpIcon,
  UserGroupIcon,
  ChartBarIcon,
  LightBulbIcon,
  CubeTransparentIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline'
import SEOIntegration, { getPageSEO } from '../components/shared/SEOIntegration'
import GitHubIntegration from '../components/GitHubIntegration'

const services = [
  {
    name: 'Consciousness-Level AI',
    description: 'Pioneering self-aware AI agents with meta-cognitive processing and autonomous goal formulation capabilities.',
    features: [
      'Self-aware agent architectures',
      'Meta-cognitive processing systems',
      'Autonomous goal formulation',
      'Consciousness simulation'
    ],
    icon: CpuChipIcon,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Multi-Provider AI Orchestration',
    description: 'Seamless integration and orchestration across multiple LLM providers with intelligent routing and optimization.',
    features: [
      'OpenAI, Anthropic, DeepSeek, BitNet 2',
      'Automatic failover and load balancing',
      'Cost optimization algorithms',
      'Provider-agnostic architecture'
    ],
    icon: EyeIcon,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Cultural Intelligence AI',
    description: 'Ethically-conscious AI systems with deep cultural sensitivity for indigenous rights and heritage preservation.',
    features: [
      'Indigenous rights protection',
      'Archaeological heritage preservation',
      'Multi-framework ethical reasoning',
      'Cultural sensitivity algorithms'
    ],
    icon: ShieldCheckIcon,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Advanced Cognitive Architecture',
    description: 'Biologically-inspired AI systems with neural hierarchy processing and emotional state management.',
    features: [
      'Neural hierarchy processing',
      'Emotional state processing',
      'Event-driven architecture',
      'Biologically-inspired design'
    ],
    icon: BeakerIcon,
    gradient: 'from-primary-500 to-accent',
  }
]

const capabilities = [
  {
    name: 'NIS Protocol Integration',
    description: 'Implementing our proprietary Neuro-Inspired System Protocol for advanced AI architectures.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Glassmorphism UI/UX',
    description: 'Modern design systems with floating particles, advanced animations, and accessibility-first principles.',
    icon: CubeTransparentIcon,
  },
  {
    name: 'Ethical AI Development',
    description: 'Ensuring responsible AI practices with cultural sensitivity and indigenous rights protection.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'AI Architecture Consulting',
    description: 'Strategic guidance on consciousness-level AI implementation and multi-provider orchestration.',
    icon: LightBulbIcon,
  },
  {
    name: 'Research Collaboration',
    description: 'Partnering on cutting-edge AI research in consciousness simulation and cultural intelligence.',
    icon: UserGroupIcon,
  }
]

export default function Services() {
  const seoConfig = getPageSEO('services')
  
  return (
    <div className="bg-white py-24 sm:py-32">
      <SEOIntegration 
        {...seoConfig}
        canonical="https://organicaai.com/services"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Services Section */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What We Offer
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Advanced consciousness-level AI solutions and biologically-inspired architectures for the future of artificial intelligence.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <div className="h-full rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow group">
                  <div className={`inline-flex rounded-lg p-3 bg-gradient-to-r ${service.gradient} group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">{service.name}</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">{service.description}</p>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Capabilities */}
        <div className="mx-auto mt-32 max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Additional Capabilities</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Supporting Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Comprehensive support services and expertise to ensure successful AI implementation and ethical development.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div key={capability.name} className="relative pl-16 group">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-accent group-hover:scale-110 transition-transform">
                  <capability.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  {capability.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {capability.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* GitHub Integration Section */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Open Source NIS Protocol
            </h2>
            <p className="text-gray-600">
              Explore our consciousness-level AI framework and contribute to the future of artificial intelligence.
            </p>
          </div>
          <GitHubIntegration />
        </div>
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-48 sm:py-40 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent/10" />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready for Consciousness-Level AI?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Whether you need consciousness-level AI implementation, multi-provider orchestration, or ethical AI consulting,
            we're here to pioneer the future with you.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/contact"
              className="btn-primary"
            >
              Contact us
            </Link>
            <Link to="/about" className="nav-link">
              Learn more about us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 