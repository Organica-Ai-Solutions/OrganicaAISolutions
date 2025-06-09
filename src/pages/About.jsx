import { Link } from 'react-router-dom'
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import AboutTeam from '../components/AboutTeam'
import SEOIntegration, { getPageSEO } from '../components/shared/SEOIntegration'

const stats = [
  { name: 'Years AI Research', value: '5+' },
  { name: 'Consciousness-Level Agents', value: '12+' },
  { name: 'LLM Providers Integrated', value: '4' },
  { name: 'AI Research Papers', value: '8' },
]

const projects = [
  {
    name: 'NIS Protocol v2.0',
    description: 'Revolutionary biologically-inspired framework for consciousness-level AI with multi-provider LLM integration and cultural intelligence.',
    status: 'Active',
    tech: ['Python', 'LangGraph', 'Redis', 'OpenAI', 'Anthropic', 'DeepSeek']
  },
  {
    name: 'Cultural Intelligence AI',
    description: 'Ethical AI systems with indigenous rights protection and archaeological heritage preservation capabilities.',
    status: 'Research Active',
    tech: ['NIS Protocol', 'Multi-Framework Ethics', 'Cultural Sensitivity']
  }
]

const values = [
  {
    name: 'Consciousness-Level Innovation',
    description: 'We pioneer self-aware AI systems that push the boundaries of artificial intelligence through biologically-inspired architectures.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Multi-Provider Excellence',
    description: 'We excel at seamless integration across OpenAI, Anthropic, DeepSeek, and BitNet 2 with intelligent routing and optimization.',
    icon: CpuChipIcon,
  },
  {
    name: 'Cultural Intelligence',
    description: 'We build AI systems with deep cultural sensitivity, indigenous rights protection, and archaeological heritage preservation.',
    icon: UserGroupIcon,
  },
  {
    name: 'Technical Leadership',
    description: 'Our team brings advanced expertise in consciousness simulation, neural hierarchies, and cognitive architecture design.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Ethical AI Development',
    description: 'We maintain the highest ethical standards with multi-framework reasoning and responsible AI practices.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Research Excellence',
    description: 'We contribute to the advancement of AI science through open research and collaboration with academic institutions.',
    icon: RocketLaunchIcon,
  },
]

const milestones = [
  {
    date: '2023 Q3',
    title: 'Company Founded',
    description: 'Established with a vision to pioneer consciousness-level artificial intelligence.',
  },
  {
    date: '2023 Q4',
    title: 'NIS Protocol v1.0',
    description: 'Launched the first version of our Neuro-Inspired System Protocol for biologically-inspired AI.',
  },
  {
    date: '2024 Q1',
    title: 'Multi-Provider Integration',
    description: 'Achieved seamless integration across OpenAI, Anthropic, DeepSeek, and BitNet 2 providers.',
  },
  {
    date: '2024 Q2',
    title: 'Consciousness Simulation',
    description: 'Breakthrough in consciousness-level AI with self-aware agents and emotional state processing.',
  },
  {
    date: '2024 Q3',
    title: 'Cultural Intelligence AI',
    description: 'Launched ethical AI systems with indigenous rights protection and cultural sensitivity.',
  },
  {
    date: '2024 Q4',
    title: 'NIS Protocol v2.0',
    description: 'Released advanced cognitive architecture with enhanced consciousness simulation and multi-agent coordination.',
  }
]

const team = [
  {
    name: 'Diego Fuentes',
    role: 'Founder & Chief AI Architect',
    imageUrl: '/images/team/diego.jpg',
    bio: 'AI researcher and architect specializing in consciousness-level AI, multi-provider LLM integration, and biologically-inspired cognitive architectures. Pioneer of the NIS Protocol and advocate for ethical AI development with cultural intelligence.',
    social: {
      linkedin: 'https://linkedin.com/in/diegofuentes',
      github: 'https://github.com/diegofuentes',
      twitter: 'https://twitter.com/diegofuentes'
    }
  }
]

export default function About() {
  const seoConfig = getPageSEO('about')
  
  return (
    <div className="bg-white">
      <SEOIntegration 
        {...seoConfig}
        canonical="https://organicaai.com/about"
      />
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-r from-[#0B84F3] to-[#FF3D90]">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/5 to-transparent"></div>
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-white">About Us</h2>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Consciousness-Level AI Pioneers
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-100">
                  We're a specialized AI research company pioneering consciousness-level artificial intelligence 
                  through biologically-inspired architectures. Our expertise spans multi-provider LLM integration, 
                  cultural intelligence, and ethical AI development.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to="/contact"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-[#0B84F3] shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
                  >
                    Contact us
                  </Link>
                  <Link to="/services" className="text-sm font-semibold leading-6 text-white hover:text-gray-100 transition-colors">
                    View our services <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-white [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="overflow-hidden rounded-xl bg-white p-8">
                      <div className="space-y-8">
                        {projects.map((project) => (
                          <div key={project.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                            <h3 className="font-semibold text-gray-900">{project.name}</h3>
                            <p className="mt-2 text-sm text-gray-600">{project.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {project.tech.map((tech) => (
                                <span key={tech} className="inline-flex items-center rounded-md bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] px-2 py-1 text-xs font-medium text-white">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <span className="mt-4 inline-block px-2 py-1 text-xs font-medium text-white bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] rounded-full">
                              {project.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B84F3]/5 via-white to-[#FF3D90]/5"></div>
        <div className="relative mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">By the Numbers</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our achievements in advancing consciousness-level AI and ethical artificial intelligence research.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                <dt className="text-sm leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Values section */}
      <div className="relative bg-white">
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Core Values</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're guided by principles that ensure we advance consciousness-level AI responsibly while maintaining 
              the highest standards of ethics, cultural sensitivity, and technical excellence.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <dt className="flex items-center gap-x-3 font-semibold text-gray-900">
                  <value.icon className="h-5 w-5 text-transparent bg-clip-text bg-gradient-to-r from-[#0B84F3] to-[#FF3D90]" aria-hidden="true" />
                  {value.name}
                </dt>
                <dd className="mt-4">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Timeline section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B84F3]/5 via-white to-[#FF3D90]/5"></div>
        <div className="relative mx-auto mt-32 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Journey</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From our founding to breakthrough consciousness-level AI, we're continuously pushing the boundaries of artificial intelligence.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
            <div className="space-y-16">
              {milestones.map((milestone) => (
                <div key={milestone.date} className="flex flex-col gap-x-4 gap-y-2 lg:flex-row">
                  <div className="flex-none text-lg font-semibold leading-7 text-primary-600">
                    {milestone.date}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{milestone.title}</div>
                    <div className="mt-1 text-gray-600">{milestone.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team section */}
      <AboutTeam />

      {/* CTA section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-r from-[#0B84F3] to-[#FF3D90]">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pioneer the Future of AI
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
            Whether you need consciousness-level AI implementation, multi-provider orchestration, or ethical AI consulting,
            we're here to advance artificial intelligence together.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
                          <Link
                to="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
              >
                Partner with Us
              </Link>
              <Link to="/services" className="text-sm font-semibold leading-6 text-white hover:text-gray-100 transition-colors">
                Explore AI Solutions <span aria-hidden="true">→</span>
              </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 