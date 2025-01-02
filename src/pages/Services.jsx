import { Link } from 'react-router-dom'
import { 
  DevicePhoneMobileIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  CodeBracketIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  ChartBarIcon,
  LightBulbIcon,
  CubeTransparentIcon,
} from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Mobile App Development',
    description: 'End-to-end mobile application development for iOS and Android platforms using Flutter and native technologies.',
    features: [
      'Cross-platform development',
      'Native app development',
      'UI/UX design',
      'App maintenance and updates'
    ],
    icon: DevicePhoneMobileIcon,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Blockchain Development',
    description: 'Building secure and scalable blockchain solutions for decentralized applications and smart contracts.',
    features: [
      'Smart contract development',
      'DeFi applications',
      'Web3 integration',
      'Blockchain consulting'
    ],
    icon: CubeTransparentIcon,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'AI & Machine Learning',
    description: 'Integration of artificial intelligence and machine learning solutions to enhance application capabilities.',
    features: [
      'Predictive analytics',
      'Natural language processing',
      'Computer vision',
      'AI model training'
    ],
    icon: CpuChipIcon,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Data Analytics',
    description: 'Comprehensive data analysis and visualization solutions for better decision making.',
    features: [
      'Business intelligence',
      'Data visualization',
      'Performance metrics',
      'Custom reporting'
    ],
    icon: ChartBarIcon,
    gradient: 'from-primary-500 to-accent',
  }
]

const capabilities = [
  {
    name: 'Custom Development',
    description: 'Developing tailored software solutions to meet specific business and community needs.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Cloud Integration',
    description: 'Implementing secure and scalable cloud solutions for data management and accessibility.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Security First',
    description: 'Ensuring data protection and secure transactions in all our applications.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Technology Consulting',
    description: 'Strategic technology guidance and solution architecture for your business needs.',
    icon: LightBulbIcon,
  },
  {
    name: 'Community Solutions',
    description: 'Building applications that foster community engagement and facilitate group activities.',
    icon: UserGroupIcon,
  }
]

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Services Section */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What We Offer
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Comprehensive technology solutions tailored to your needs, from mobile development to AI integration.
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
            Complementary services and capabilities that ensure the success of your projects.
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
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-48 sm:py-40 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent/10" />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Whether you need a mobile app, AI integration, or technology consulting,
            we're here to help bring your vision to life.
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