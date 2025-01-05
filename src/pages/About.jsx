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

const stats = [
  { name: 'Years Experience', value: '10+' },
  { name: 'Mobile Apps Delivered', value: '20+' },
  { name: 'Satisfied Clients', value: '50+' },
  { name: 'Team Members', value: '5' },
]

const projects = [
  {
    name: 'Tanda Circles',
    description: 'A revolutionary social finance application that helps communities manage their financial circles and group savings efficiently.',
    status: 'In Development',
    tech: ['Flutter', 'Firebase', 'Cloud Functions']
  },
  {
    name: 'KatApp',
    description: 'A social media platform for cat owners with AI-powered health tracking. Features include video feeds, digital pet passports, feeding schedules, marketplace, adoption services, and fundraising capabilities.',
    status: 'In Development',
    tech: ['Flutter', 'Firebase', 'Cloud Firestore']
  }
]

const values = [
  {
    name: 'Innovation First',
    description: 'We create practical, innovative solutions that solve real-world problems using cutting-edge technologies like Flutter and Firebase.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Mobile Excellence',
    description: 'We specialize in creating exceptional cross-platform mobile experiences using Flutter and Firebase that scale seamlessly.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Community Focus',
    description: 'We build applications that strengthen communities and facilitate meaningful connections with real-time capabilities.',
    icon: UserGroupIcon,
  },
  {
    name: 'Technical Expertise',
    description: 'Our team brings deep technical knowledge in Flutter, Firebase, and cloud architecture.',
    icon: CpuChipIcon,
  },
  {
    name: 'Quality Assurance',
    description: 'We maintain high coding standards and rigorous testing practices for reliable Flutter and Firebase applications.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Security Priority',
    description: 'We implement robust security measures using Firebase Authentication and Security Rules to protect user data.',
    icon: ShieldCheckIcon,
  },
]

const milestones = [
  {
    date: '2023 Q3',
    title: 'Company Founded',
    description: 'Established with a focus on Flutter and Firebase mobile development.',
  },
  {
    date: '2023 Q4',
    title: 'Tanda Circles Development',
    description: 'Initiated development of our flagship social finance application using Flutter and Firebase.',
  },
  {
    date: '2024 Q1',
    title: 'KAT App Initiative',
    description: 'Expanded our portfolio with a Flutter-based business process management solution.',
  },
  {
    date: '2024 Q2',
    title: 'Firebase Integration',
    description: 'Enhanced our applications with advanced Firebase features and real-time capabilities.',
  }
]

const team = [
  {
    name: 'Diego Fuentes',
    role: 'Founder & Lead Developer',
    imageUrl: '/images/team/diego.jpg',
    bio: 'Full-stack developer with expertise in Flutter and Firebase development, AI integration, and cloud architecture. Passionate about creating scalable cross-platform applications that solve real-world problems.',
    social: {
      linkedin: 'https://linkedin.com/in/diegofuentes',
      github: 'https://github.com/diegofuentes',
      twitter: 'https://twitter.com/diegofuentes'
    }
  }
]

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-r from-[#0B84F3] to-[#FF3D90]">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/5 to-transparent"></div>
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-white">About Us</h2>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Mobile Innovation for Community Growth
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-100">
                  We're a specialized mobile development company focused on creating innovative Flutter applications 
                  powered by Firebase. Our expertise spans cross-platform development, real-time databases, 
                  and cloud solutions.
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
              Our track record of delivering successful mobile solutions and serving our clients.
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
              We're guided by principles that ensure we deliver exceptional mobile solutions while maintaining 
              the highest standards of quality and security.
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
              From our founding to our current projects, we're continuously evolving and expanding our capabilities.
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
            Let's Build Something Amazing
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
            Whether you need a mobile app, AI integration, or technology consulting,
            we're here to help bring your vision to life.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
            >
              Start a Project
            </Link>
            <Link to="/services" className="text-sm font-semibold leading-6 text-white hover:text-gray-100 transition-colors">
              View Our Services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 