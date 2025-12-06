import { Link } from 'react-router-dom'
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline'
import { RocketLaunchIcon } from '@heroicons/react/24/solid'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import AboutTeam from '../components/AboutTeam'
import SEOIntegration, { getPageSEO } from '../components/shared/SEOIntegration'

const stats = [
  { name: 'Research Areas', value: '7' },
  { name: 'Industry Implementations', value: '6' },
  { name: 'Modular API Routes', value: '23+' },
  { name: 'GitHub Repositories', value: '33' },
]

const projects = [
  {
    name: 'NIS Protocol v4.0.2',
    description: 'Our flagship experimental AI operating system with NVIDIA Isaac robotics, modular architecture, and enterprise infrastructure. R&D in progress.',
    status: 'R&D Active',
    tech: ['Python', 'Docker', 'Redis', 'Kafka', 'Isaac', 'NVIDIA']
  },
  {
    name: 'The Visual Evolution',
    description: 'Interactive design history book covering 20 design movements from 1919-2025+ with professional UI/UX and authentic visual reproductions.',
    status: 'Live Demo',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PWA', 'GitHub Pages']
  }
]

const values = [
  {
    name: 'Research Excellence',
    description: 'We pioneer cutting-edge AI research in neuro-inspired systems, physics-informed neural networks, and multi-agent coordination.',
    icon: CpuChipIcon,
  },
  {
    name: 'Real-World Impact',
    description: 'Our research directly translates to practical applications across automotive, smart cities, aerospace, space exploration, and finance.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Academic Contribution',
    description: 'We actively participate in elite AI research competitions like the NeurIPS Ariel Data Challenge 2025 to advance AI science.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Enterprise Partnerships',
    description: 'We collaborate with major technology providers like AWS and NVIDIA to scale our research for enterprise applications.',
    icon: UserGroupIcon,
  },
  {
    name: 'Open Source Innovation',
    description: 'We contribute to the AI community through open source projects, research publications, and educational content.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Interdisciplinary Approach',
    description: 'We combine expertise in AI, physics, neuroscience, and engineering to create more robust and effective AI systems.',
    icon: DevicePhoneMobileIcon,
  },
]

const milestones = [
  {
    date: '2022-2023',
    title: 'Mobile App Development',
    description: 'Started as a solutions company focused on mobile applications like Tanda Circles, Smart Portfolio, and KATAPP.',
  },
  {
    date: '2023 Q1-Q2',
    title: 'AI Tools & Business Intelligence',
    description: 'Expanded into AI tools and business intelligence solutions including Orion Coding Agent and Business Analytics with Python.',
  },
  {
    date: '2023 Q3-Q4',
    title: 'NIS Protocol Development',
    description: 'Created our flagship NIS Protocol - a neuro-inspired multi-agent AI framework for real-world automation.',
  },
  {
    date: '2024 Q1-Q2',
    title: 'Industry Applications',
    description: 'Implemented NIS Protocol across industries with specialized versions: NIS-AUTO, NIS-CITY, NIS-DRONE, and NIS-X.',
  },
  {
    date: '2024 Q3',
    title: 'Enterprise Partnerships',
    description: 'Established partnerships with AWS for cloud infrastructure and NVIDIA for GPU acceleration.',
  },
  {
    date: '2024 Q4',
    title: 'NIS Protocol v4.0',
    description: 'Major release with NVIDIA Isaac robotics, modular architecture, and Kafka/Redis infrastructure.',
  },
  {
    date: '2025',
    title: 'NeuroLinux & NIS Hub',
    description: 'Launched AI-powered Linux distribution and central management platform for distributed NIS deployments.',
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
                  Our Research Journey
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Organica AI Solutions is an early-stage R&D startup that evolved from mobile app development into pioneering AI research. 
                  Our flagship creation, the NIS Protocol, is an experimental neuro-inspired multi-agent AI framework 
                  being developed for applications across automotive to space exploration. Our work is evolving and experimental — 
                  we're advancing AI science while building practical applications.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to="/contact"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-[#0B84F3] shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
                  >
                    Contact us
                  </Link>
                  <Link to="/services" className="text-sm font-semibold leading-6 text-white hover:text-gray-100 transition-colors">
                    View our research <span aria-hidden="true">→</span>
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
            Join Our Research Community
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
            Whether you're interested in collaborating on neuro-inspired AI systems, physics-informed neural networks, 
            or multi-agent coordination research, we invite you to join our mission to advance AI science.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
              >
                Discuss Research Collaboration
              </Link>
              <Link to="/services" className="text-sm font-semibold leading-6 text-white hover:text-gray-100 transition-colors">
                Explore Research & Applications <span aria-hidden="true">→</span>
              </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 