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
  ServerIcon,
} from '@heroicons/react/24/outline'
import SEOIntegration, { getPageSEO } from '../components/shared/SEOIntegration'
import DesignBookShowcase from '../components/DesignBookShowcase'
import CloudPartnersSection from '../components/CloudPartnersSection'
import NISProtocolShowcase from '../components/NISProtocolShowcase'
import CompanyEvolution from '../components/CompanyEvolution'

const features = [
  {
    name: 'Neuro-Inspired Multi-Agent Framework',
    description: 'The NIS Protocol v4.0.2 provides a modular agent architecture with physics-informed validation, NVIDIA Isaac robotics integration, and 23+ API routes for autonomous systems.',
    icon: CpuChipIcon,
  },
  {
    name: 'Enterprise Cloud Infrastructure',
    description: 'AWS migration plan with ECS Fargate, MSK (Kafka), ElastiCache (Redis), and GPU-optimized EC2 for large-scale model training and real-time multi-agent orchestration.',
    icon: ServerIcon,
  },
  {
    name: 'NVIDIA GPU Acceleration',
    description: 'Access to DGX Cloud Lepton and NeMo/Agent Toolkit for GPU-accelerated model training and experimentation with Nemotron and BitNet models.',
    icon: CpuChipIcon,
  },
  {
    name: 'Physics-Informed Neural Networks',
    description: 'Ensure AI outputs comply with physical laws using PINNs for constraint validation, essential for safety-critical applications in automotive, aerospace, and smart cities.',
    icon: BeakerIcon,
  },
  {
    name: 'Real-World Deployments',
    description: 'Proven implementations across automotive (NIS-AUTO), smart cities (NIS-CITY), aerospace (NIS-DRONE), space exploration (NIS-X), and financial markets (AlphaCortex).',
    icon: ChartBarIcon,
  },
  {
    name: 'AI-Assisted Design & Education',
    description: 'Interactive design experiences like "The Visual Evolution" - comprehensive design history books with 20+ movements, 106+ years coverage, and professional polish.',
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
    title: 'NIS Protocol v4.0.2',
    description: 'AI Operating System + Isaac Robotics',
    category: 'AI Research',
    color: 'blue'
  },
  {
    title: 'Orion',
    description: 'Coding AI Agent',
    category: 'Developer Tools',
    color: 'purple'
  },
  {
    title: 'NeuroLinux',
    description: 'AI-Powered Linux Distribution',
    category: 'Operating Systems',
    color: 'green',
    isNew: true
  },
  {
    title: 'NIS Hub',
    description: 'Central AI Management Platform',
    category: 'Infrastructure',
    color: 'orange',
    isNew: true
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
                  AI Solutions from Mobile Apps to Enterprise AI
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Organica AI Solutions began as a mobile app development company and has evolved into the creator of NIS Protocol - 
                  a neuro-inspired multi-agent AI framework now being scaled with AWS and NVIDIA partnerships.
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

      {/* Company Evolution */}
      <CompanyEvolution />
      
      {/* Features section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B84F3]/5 via-white to-[#FF3D90]/5"></div>
        <div className="relative mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <motion.div 
            {...fadeIn}
            className="mx-auto max-w-2xl lg:text-center"
          >
            <h2 className="text-base font-semibold leading-7 text-transparent bg-clip-text bg-gradient-to-r from-[#0B84F3] to-[#FF3D90]">Our Value Proposition</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose NIS Protocol
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Organica AI Solutions builds the NIS Protocol, a foundational AI operating system for next-generation autonomous systems.
              Our platform enables scalable, interpretable intelligence for domains from archaeological discovery to exoplanet analysis and smart-city infrastructure.
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

      {/* Cloud Partners Section */}
      <CloudPartnersSection />
      
      {/* NIS Protocol Showcase */}
      <NISProtocolShowcase />
      
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
                Proven Results & Outcomes
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Our technology is validated through real-world deployments and measurable achievements
              </p>
            </div>
            
            {/* Key metrics */}
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">Working API Endpoints</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">32/32</dd>
              </div>
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">Security Vulnerabilities Fixed</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">45/45</dd>
              </div>
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">Real-World Deployments</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">5+</dd>
              </div>
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">Years Covered in Design Book</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">106+</dd>
              </div>
            </dl>
            
            {/* Achievements cards */}
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
              >
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-4">
                    <CpuChipIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">NeurIPS Competition Entry</h3>
                </div>
                <p className="text-gray-600 mb-4">Our NIS-X implementation was accepted as an official entry in the prestigious NeurIPS Ariel Data Challenge 2025 for exoplanet atmospheric analysis.</p>
                <div className="text-sm text-blue-600 font-medium">Research Recognition</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
              >
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-green-100 rounded-lg mr-4">
                    <ServerIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">NVIDIA Connect Partnership</h3>
                </div>
                <p className="text-gray-600 mb-4">Recognized as an NVIDIA Connect startup partner with early access to GPU resources, developer tooling, and technical collaboration.</p>
                <div className="text-sm text-green-600 font-medium">Enterprise Validation</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
              >
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg mr-4">
                    <BeakerIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Hardware-Validated Systems</h3>
                </div>
                <p className="text-gray-600 mb-4">NIS Protocol has been successfully deployed and tested on real automotive and drone hardware systems, proving its reliability in the field.</p>
                <div className="text-sm text-indigo-600 font-medium">Physical Deployment</div>
              </motion.div>
            </div>
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
            <div className="inline-flex items-center justify-center p-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="px-4 py-1 text-sm font-semibold text-white">Ready to get started?</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Transform Your Business with NIS Protocol v4.0.2
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
              From AWS cloud infrastructure to NVIDIA GPU acceleration, we're building the future of AI with our neuro-inspired multi-agent framework.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="w-full sm:w-auto rounded-lg bg-white px-6 py-3 text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-white"
              >
                Start Your Project
              </Link>
              <a
                href="https://github.com/Organica-Ai-Solutions/NIS_Protocol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto rounded-lg bg-transparent px-6 py-3 text-base font-semibold text-white border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </a>
            </div>
            <div className="mt-6 text-sm text-white/80">
              <Link to="/projects" className="underline hover:text-white transition-colors">
                Explore our projects
              </Link>
              {' '} or {' '}
              <Link to="/services" className="underline hover:text-white transition-colors">
                learn about our services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 