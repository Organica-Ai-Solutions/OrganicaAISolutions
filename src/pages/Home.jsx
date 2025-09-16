import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  CpuChipIcon,
  CurrencyDollarIcon,
  CommandLineIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  BeakerIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline'
import SEOIntegration, { getPageSEO } from '../components/shared/SEOIntegration'
import DesignBookShowcase from '../components/DesignBookShowcase'

const features = [
  {
    name: 'AI-Assisted Design Systems',
    description: 'Interactive design experiences like "The Visual Evolution" - comprehensive design history books with 20+ movements, 106+ years coverage, and professional polish.',
    icon: BeakerIcon,
  },
  {
    name: 'FinTech AI Solutions',
    description: 'Advanced AI trading systems like AlphaCortex with LLM-powered decision making, real-time market analysis, and autonomous execution.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Consciousness-Level AI',
    description: 'Pioneering frameworks like NIS Protocol v2.0 for self-aware AI agents with meta-cognitive processing and biological inspiration.',
    icon: CpuChipIcon,
  },
  {
    name: 'Developer AI Tools',
    description: 'Intelligent coding assistants like Orion with MCP integration, automated code generation, and enhanced development workflows.',
    icon: CommandLineIcon,
  },
  {
    name: 'Business Intelligence',
    description: 'Comprehensive analytics platforms and data science solutions for retail, finance, and enterprise decision-making.',
    icon: ChartBarIcon,
  },
  {
    name: 'Mobile AI Applications',
    description: 'Community-focused mobile applications and smart portfolio management systems with integrated AI capabilities.',
    icon: DevicePhoneMobileIcon,
  },
]

const featuredProjects = [
  {
    title: 'The Visual Evolution',
    description: 'Interactive Design History Book',
    category: 'AI-Assisted Design',
    color: 'indigo',
    href: 'https://organica-ai-solutions.github.io/DesignHistory/',
    isExternal: true,
    isNew: true
  },
  {
    title: 'AlphaCortex',
    description: 'Autonomous AI Trading System',
    category: 'FinTech AI',
    color: 'emerald'
  },
  {
    title: 'NIS Protocol v2.0',
    description: 'Consciousness-Level Framework',
    category: 'AI Research',
    color: 'blue'
  },
  {
    title: 'Orion',
    description: 'Coding AI Agent',
    category: 'Developer Tools',
    color: 'purple'
  }
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Home() {
  const seoConfig = getPageSEO('home')
  
  return (
    <div className="bg-white">
      <SEOIntegration 
        {...seoConfig}
        canonical="https://organicaai.com"
      />
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-r from-[#0B84F3] to-[#FF3D90]">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/5 to-transparent"></div>
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <motion.div 
            {...fadeIn}
            className="px-6 lg:px-0 lg:pt-4"
          >
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  AI Solutions for Every Industry
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-100">
                  From AI trading systems and developer tools to consciousness-level frameworks, business intelligence, 
                  and interactive design experiences. Building intelligent software that transforms industries.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to="/projects"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
                  >
                    View Our Projects
                  </Link>
                  <Link to="/contact" className="text-sm font-semibold leading-6 text-white hover:text-gray-100">
                    Get in Touch <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen"
          >
            <div className="shadow-lg md:rounded-3xl bg-white/10 backdrop-blur-sm p-8">
              <div className="grid grid-cols-2 gap-6">
                {featuredProjects.map((project, index) => {
                  const ProjectCard = ({ children }) => {
                    if (project.isExternal) {
                      return (
                        <a 
                          href={project.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="relative bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 block group"
                        >
                          {children}
                        </a>
                      );
                    }
                    return (
                      <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300">
                        {children}
                      </div>
                    );
                  };

                  return (
                    <ProjectCard key={project.title}>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-${project.color}-100 text-${project.color}-800`}>
                            {project.category}
                          </div>
                          {project.isNew && (
                            <div className="inline-flex px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                              NEW
                            </div>
                          )}
                          {project.isExternal && (
                            <div className="inline-flex items-center text-white/60 group-hover:text-white/80 transition-colors">
                              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                            </div>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <p className="text-white/80 text-sm">{project.description}</p>
                      </div>
                    </ProjectCard>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B84F3]/5 via-white to-[#FF3D90]/5"></div>
        <div className="relative mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <motion.div 
            {...fadeIn}
            className="mx-auto max-w-2xl lg:text-center"
          >
            <h2 className="text-base font-semibold leading-7 text-transparent bg-clip-text bg-gradient-to-r from-[#0B84F3] to-[#FF3D90]">Our Expertise</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive AI Solutions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We deliver end-to-end AI solutions across financial technology, consciousness research, 
              developer tools, business intelligence, mobile applications, and cutting-edge research.
            </p>
          </motion.div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-16"
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#0B84F3] to-[#FF3D90]">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Design Book Showcase */}
      <DesignBookShowcase />

      {/* Stats section */}
      <div className="relative isolate py-24 sm:py-32">
        <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
          <div className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#0B84F3] to-[#FF3D90]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl lg:max-w-none"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Building the Future of AI
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Our diverse portfolio spans multiple industries and technologies
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">Active Projects</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">22+</dd>
              </div>
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">Technology Stacks</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">8+</dd>
              </div>
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">Industry Sectors</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">5</dd>
              </div>
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">AI Solutions</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">100%</dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-gradient-to-r from-[#0B84F3] to-[#FF3D90]">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
              From trading algorithms to consciousness frameworks, we build AI solutions 
              that drive real business value. Let's discuss your next project.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start Your Project
              </Link>
              <Link to="/projects" className="text-sm font-semibold leading-6 text-white">
                Explore Our Work <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 