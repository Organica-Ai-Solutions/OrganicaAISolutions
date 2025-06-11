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
} from '@heroicons/react/24/outline'
import SEOIntegration, { getPageSEO } from '../components/shared/SEOIntegration'
import GitHubIntegration from '../components/GitHubIntegration'

const services = [
  {
    name: 'AI-Assisted Design Systems',
    description: 'Interactive design experiences and comprehensive educational content with professional polish and modern UX/UI.',
    features: [
      'Interactive design history books',
      'Professional UI/UX development',
      'Educational content platforms',
      'PWA & mobile-optimized experiences'
    ],
    icon: BeakerIcon,
    gradient: 'from-indigo-500 to-purple-500',
    projects: ['The Visual Evolution', 'Design Systems', 'Educational Platforms']
  },
  {
    name: 'FinTech AI Solutions',
    description: 'Advanced AI trading systems and financial intelligence platforms with real-time decision making and risk management.',
    features: [
      'AI trading algorithm development',
      'LLM-powered market analysis',
      'Automated portfolio management',
      'Risk assessment & optimization'
    ],
    icon: CurrencyDollarIcon,
    gradient: 'from-emerald-500 to-teal-500',
    projects: ['AlphaCortex', 'Smart Portfolio', 'Crypto Trading Bot']
  },
  {
    name: 'Consciousness-Level AI',
    description: 'Pioneering self-aware AI frameworks with meta-cognitive processing and biological inspiration.',
    features: [
      'NIS Protocol v2.0 implementation',
      'Multi-provider LLM integration',
      'Consciousness simulation',
      'Meta-cognitive architectures'
    ],
    icon: CpuChipIcon,
    gradient: 'from-blue-500 to-cyan-500',
    projects: ['NIS Protocol', 'Cultural AI', 'Multi-Agent Systems']
  },
  {
    name: 'Developer AI Tools',
    description: 'Intelligent coding assistants and development automation platforms for enhanced productivity.',
    features: [
      'AI-powered code generation',
      'MCP server integration',
      'Automated testing & debugging',
      'Development workflow optimization'
    ],
    icon: CommandLineIcon,
    gradient: 'from-purple-500 to-pink-500',
    projects: ['Orion', 'Codex Reader', 'Development Tools']
  },
  {
    name: 'Business Intelligence',
    description: 'Comprehensive data analytics and business intelligence solutions for data-driven decision making.',
    features: [
      'Advanced data analytics platforms',
      'Retail sales analysis',
      'Predictive modeling',
      'Custom BI dashboards'
    ],
    icon: ChartBarIcon,
    gradient: 'from-orange-500 to-red-500',
    projects: ['Business Analytics', 'Data Science Tools', 'Analytics Platform']
  },
  {
    name: 'Mobile AI Applications',
    description: 'Community-focused mobile applications with integrated AI capabilities and smart features.',
    features: [
      'Flutter/React Native development',
      'AI-powered user experiences',
      'Community engagement platforms',
      'Cross-platform solutions'
    ],
    icon: DevicePhoneMobileIcon,
    gradient: 'from-pink-500 to-rose-500',
    projects: ['Tanda Circles', 'Mobile Apps', 'Community Platforms']
  },
  {
    name: 'Research & Innovation',
    description: 'Cutting-edge AI research and development in multi-agent systems and emerging technologies.',
    features: [
      'Multi-agent system research',
      'AI architecture consulting',
      'Prototype development',
      'Academic collaboration'
    ],
    icon: BeakerIcon,
    gradient: 'from-indigo-500 to-purple-500',
    projects: ['SparkNova', 'Research Projects', 'Innovation Labs']
  }
]

const capabilities = [
  {
    name: 'End-to-End AI Development',
    description: 'Complete AI solution development from concept to deployment across all industries and use cases.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Multi-Provider Integration',
    description: 'Seamless integration across OpenAI, Anthropic, DeepSeek, and other leading AI providers.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Custom AI Architecture',
    description: 'Tailored AI architectures designed for specific business needs and performance requirements.',
    icon: CubeTransparentIcon,
  },
  {
    name: 'Ethical AI Implementation',
    description: 'Responsible AI development with bias mitigation, transparency, and cultural sensitivity.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Strategic AI Consulting',
    description: 'Expert guidance on AI strategy, technology selection, and implementation roadmaps.',
    icon: LightBulbIcon,
  },
  {
    name: 'Collaborative Development',
    description: 'Close partnership with your team throughout the development lifecycle and beyond.',
    icon: UserGroupIcon,
  }
]

const industries = [
  {
    name: 'Design & Education',
    description: 'Interactive design books, educational platforms, professional UX/UI',
    icon: BeakerIcon,
    color: 'indigo'
  },
  {
    name: 'Financial Services',
    description: 'Trading algorithms, risk management, portfolio optimization',
    icon: CurrencyDollarIcon,
    color: 'emerald'
  },
  {
    name: 'Technology',
    description: 'Developer tools, AI frameworks, automation platforms',
    icon: CommandLineIcon,
    color: 'purple'
  },
  {
    name: 'Retail & E-commerce',
    description: 'Business analytics, customer insights, predictive modeling',
    icon: ChartBarIcon,
    color: 'orange'
  },
  {
    name: 'Mobile & Apps',
    description: 'Community platforms, AI-powered experiences, cross-platform solutions',
    icon: DevicePhoneMobileIcon,
    color: 'pink'
  },
  {
    name: 'Research & Academia',
    description: 'AI research, consciousness studies, multi-agent systems',
    icon: BeakerIcon,
    color: 'indigo'
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
        {/* Header Section */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-transparent bg-clip-text bg-gradient-to-r from-[#0B84F3] to-[#FF3D90]">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive AI Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From AI trading systems and developer tools to consciousness-level frameworks and business intelligence. 
            We deliver intelligent software solutions across every industry.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <div className="h-full rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300 group">
                  <div className={`inline-flex rounded-lg p-3 bg-gradient-to-r ${service.gradient} group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">{service.name}</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">{service.description}</p>
                  
                  {/* Features */}
                  <ul role="list" className="mt-6 space-y-3 text-sm leading-6 text-gray-600">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Example Projects */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Featured Projects</p>
                    <div className="flex flex-wrap gap-1">
                      {service.projects.map((project) => (
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

        {/* Industries We Serve */}
        <div className="mx-auto mt-32 max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-transparent bg-clip-text bg-gradient-to-r from-[#0B84F3] to-[#FF3D90]">Industries We Serve</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Cross-Industry Expertise
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our diverse portfolio spans multiple industries, bringing AI innovation to every sector.
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

        {/* Additional Capabilities */}
        <div className="mx-auto mt-32 max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-transparent bg-clip-text bg-gradient-to-r from-[#0B84F3] to-[#FF3D90]">Our Approach</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How We Deliver Excellence
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our proven methodology ensures successful AI implementation across all projects and industries.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div key={capability.name} className="relative pl-16 group">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#0B84F3] to-[#FF3D90] group-hover:scale-110 transition-transform">
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

        {/* Portfolio Stats */}
        <div className="mx-auto mt-32 max-w-4xl">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Our Track Record</h3>
              <p className="mt-2 text-gray-600">Delivering AI solutions across industries</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">22+</div>
                <div className="text-sm text-gray-600">Active Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">5</div>
                <div className="text-sm text-gray-600">Industry Sectors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">8+</div>
                <div className="text-sm text-gray-600">Technologies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-sm text-gray-600">AI-Powered</div>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Integration Section */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Open Source Innovation
            </h2>
            <p className="text-gray-600">
              Explore our public repositories and contribute to the future of AI development.
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
            Ready to Transform Your Business with AI?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Whether you need financial AI, developer tools, consciousness frameworks, or business intelligence,
            we're here to build the future with you.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/contact"
              className="rounded-md bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link
              to="/projects"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700 transition-colors"
            >
              View Our Portfolio <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 