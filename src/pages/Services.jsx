import { Link } from 'react-router-dom'
import {
  CpuChipIcon,
  CurrencyDollarIcon,
  CommandLineIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  BeakerIcon,
  CodeBracketIcon,
  CloudArrowUpIcon,
  UserGroupIcon,
  LightBulbIcon,
  CubeTransparentIcon,
  ShieldCheckIcon,
  ServerIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline'
import SEOIntegration, { getPageSEO } from '../components/shared/SEOIntegration'
import GitHubIntegration from '../components/GitHubIntegration'

const researchAreas = [
  {
    name: 'NIS Protocol Core Research',
    description: 'Our flagship neuro-inspired multi-agent AI framework for real-world automation, with production-ready security, reliability, and enterprise features.',
    features: [
      'Modular agent architecture with physics validation',
      'Biologically-inspired consciousness simulation',
      'Multi-provider LLM integration',
      'Advanced emotional cognition systems'
    ],
    icon: CpuChipIcon,
    gradient: 'from-blue-500 to-cyan-500',
    projects: ['NIS Protocol v3.2', 'NIS-X', 'NIS-AUTO', 'NIS-CITY']
  },
  {
    name: 'Multi-Agent Systems Research',
    description: 'Pioneering research in multi-agent orchestration, communication protocols, and emergent behaviors for complex problem-solving.',
    features: [
      'Agent-to-agent communication protocols',
      'Emergent intelligence patterns',
      'Distributed cognition frameworks',
      'Memory-enhanced collaborative agents'
    ],
    icon: UserGroupIcon,
    gradient: 'from-indigo-500 to-purple-500',
    projects: ['Multi-Agent AI Systems Guide', 'MCP Protocol', 'ACP Framework']
  },
  {
    name: 'Physics-Informed Neural Networks',
    description: 'Advanced research integrating physics principles into neural networks for more accurate real-world modeling and prediction.',
    features: [
      'Physics-constrained model training',
      'Differential equation embeddings',
      'Hardware-validated simulations',
      'Real-world deployment optimization'
    ],
    icon: LightBulbIcon,
    gradient: 'from-green-500 to-emerald-500',
    projects: ['NIS-DRONE', 'NIS-AUTO', 'Physics-ML Integration']
  },
  {
    name: 'Space Science Applications',
    description: 'Elite AI research for space exploration, including our NeurIPS Ariel Data Challenge 2025 entry for exoplanet atmospheric analysis.',
    features: [
      'Exoplanet atmospheric analysis',
      'NeurIPS competition participation',
      'Astronomical data processing',
      'Consciousness-engineered AGI for space'
    ],
    icon: BeakerIcon,
    gradient: 'from-indigo-500 to-purple-500',
    projects: ['NIS-X', 'SparkNova', 'Ariel Data Challenge']
  },
  {
    name: 'Financial Intelligence Systems',
    description: 'Research in advanced AI trading systems like AlphaCortex with LLM-powered decision making and autonomous execution.',
    features: [
      'LLM-powered market analysis',
      'Behavioral economics modeling',
      'Risk assessment algorithms',
      'Autonomous trading frameworks'
    ],
    icon: CurrencyDollarIcon,
    gradient: 'from-emerald-500 to-teal-500',
    projects: ['AlphaCortex', 'Smart Portfolio', 'Crypto Trading Bot']
  },
  {
    name: 'AI-Enhanced Developer Tools',
    description: 'Research in intelligent coding assistants like Orion with MCP integration and enhanced development workflows.',
    features: [
      'AI-powered code generation research',
      'MCP server integration frameworks',
      'Automated testing methodologies',
      'Development workflow optimization'
    ],
    icon: CommandLineIcon,
    gradient: 'from-purple-500 to-pink-500',
    projects: ['Orion', 'Codex Reader', 'Development Tools']
  },
  {
    name: 'Interactive Educational AI',
    description: 'Research in AI-assisted educational platforms with professional UX/UI and comprehensive content delivery systems.',
    features: [
      'Interactive learning frameworks',
      'Knowledge retention optimization',
      'Personalized educational pathways',
      'Multi-modal content delivery'
    ],
    icon: BookOpenIcon,
    gradient: 'from-indigo-500 to-purple-500',
    projects: ['The Visual Evolution', 'Design Systems', 'Educational Platforms']
  }
]

const researchMethodologies = [
  {
    name: 'Physics-Informed Validation',
    description: 'Integrating physical laws and constraints directly into neural networks to ensure scientifically accurate predictions and behaviors.',
    icon: CubeTransparentIcon,
  },
  {
    name: 'Multi-Modal Integration',
    description: 'Combining diverse data types (text, vision, audio) with multiple AI providers to create more comprehensive and robust AI systems.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Neuromorphic Architecture',
    description: 'Designing AI systems inspired by the structure and function of biological neural systems for more efficient and adaptive intelligence.',
    icon: CpuChipIcon,
  },
  {
    name: 'Ethical AI Research',
    description: 'Pioneering approaches to responsible AI with built-in bias mitigation, transparency, explainability, and cultural sensitivity.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Academic Collaboration',
    description: 'Partnering with leading research institutions and participating in competitions like NeurIPS to advance the state of AI science.',
    icon: LightBulbIcon,
  },
  {
    name: 'Open Source Contribution',
    description: 'Sharing research findings and tools with the broader AI community to accelerate collective progress in artificial intelligence.',
    icon: CodeBracketIcon,
  }
]

const industries = [
  {
    name: 'Automotive',
    description: 'NIS-AUTO: Production system for gas engine vehicles with real hardware deployment',
    icon: CurrencyDollarIcon,
    color: 'blue'
  },
  {
    name: 'Smart Cities',
    description: 'NIS-CITY: Complete smart city infrastructure with distributed agent coordination',
    icon: ChartBarIcon,
    color: 'green'
  },
  {
    name: 'Aerospace',
    description: 'NIS-DRONE: Hardware-validated autonomous flight systems for surveillance and delivery',
    icon: DevicePhoneMobileIcon,
    color: 'orange'
  },
  {
    name: 'Space Exploration',
    description: 'NIS-X: Elite AI research for exoplanet atmospheric analysis and discovery',
    icon: BeakerIcon,
    color: 'purple'
  },
  {
    name: 'Financial Markets',
    description: 'AlphaCortex: AI-powered financial automation with real-time strategy adaptation',
    icon: CurrencyDollarIcon,
    color: 'emerald'
  },
  {
    name: 'Design & Education',
    description: 'The Visual Evolution: Interactive design history book with 20+ movements and 106+ years coverage',
    icon: CommandLineIcon,
    color: 'indigo'
  }
]

export default function ResearchApplications() {
  const seoConfig = getPageSEO('services')
  
  return (
    <div className="bg-white py-24 sm:py-32">
      <SEOIntegration 
        {...seoConfig}
        canonical="https://organicaai.com/services"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-transparent bg-clip-text bg-gradient-to-r from-[#0B84F3] to-[#FF3D90]">Our Research</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Advancing AI Through Innovative Research
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Organica AI Solutions pioneers cutting-edge research in neuro-inspired AI, multi-agent systems, and physics-informed neural networks.
            Our research drives real-world applications across industries from automotive to space exploration.
          </p>
        </div>

        {/* Research Areas Grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {researchAreas.map((area) => (
              <div key={area.name} className="flex flex-col">
                <div className="h-full rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300 group">
                  <div className={`inline-flex rounded-lg p-3 bg-gradient-to-r ${area.gradient} group-hover:scale-110 transition-transform`}>
                    <area.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">{area.name}</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">{area.description}</p>
                  
                  {/* Research Focus */}
                  <ul role="list" className="mt-6 space-y-3 text-sm leading-6 text-gray-600">
                    {area.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Related Projects */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Related Projects</p>
                    <div className="flex flex-wrap gap-1">
                      {area.projects.map((project) => (
                        <span key={project} className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Applications */}
        <div className="mx-auto mt-32 max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-transparent bg-clip-text bg-gradient-to-r from-[#0B84F3] to-[#FF3D90]">Research Applications</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From Research to Real-World Impact
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our research directly translates into practical applications across diverse industries, demonstrating the real-world impact of our innovations.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-5">
            {industries.map((industry) => (
              <div key={industry.name} className="text-center group">
                <div className={`mx-auto w-16 h-16 rounded-full bg-${industry.color}-100 flex items-center justify-center group-hover:bg-${industry.color}-200 transition-colors`}>
                  <industry.icon className={`h-8 w-8 text-${industry.color}-600`} />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-gray-900">{industry.name}</h3>
                <p className="mt-2 text-xs text-gray-600 leading-5">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Methodologies */}
        <div className="mx-auto mt-32 max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-transparent bg-clip-text bg-gradient-to-r from-[#0B84F3] to-[#FF3D90]">Our Methodologies</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Research Excellence Framework
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our rigorous research methodologies combine academic rigor with practical implementation, ensuring both theoretical advancement and real-world impact.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {researchMethodologies.map((methodology) => (
              <div key={methodology.name} className="relative pl-16 group">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#0B84F3] to-[#FF3D90] group-hover:scale-110 transition-transform">
                  <methodology.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  {methodology.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {methodology.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Research Metrics */}
        <div className="mx-auto mt-32 max-w-4xl">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Research Impact</h3>
              <p className="mt-2 text-gray-600">Advancing AI science and real-world applications</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">7</div>
                <div className="text-sm text-gray-600">Research Areas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">5</div>
                <div className="text-sm text-gray-600">Industry Applications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">1</div>
                <div className="text-sm text-gray-600">NeurIPS Challenge</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">33+</div>
                <div className="text-sm text-gray-600">GitHub Repositories</div>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Integration Section */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Open Source Research
            </h2>
            <p className="text-gray-600">
              Explore our public repositories and contribute to advancing AI research and applications.
            </p>
          </div>
          <GitHubIntegration />
        </div>
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-48 sm:py-40 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B84F3]/5 via-white to-[#FF3D90]/5" />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Collaborate on Cutting-Edge AI Research
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Whether you're interested in consciousness-level AI, physics-informed neural networks, or multi-agent systems,
            we invite you to explore collaboration opportunities with our research team.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/contact"
              className="rounded-md bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              Discuss Research Collaboration
            </Link>
            <Link
              to="/projects"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700 transition-colors"
            >
              View Research Portfolio <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 