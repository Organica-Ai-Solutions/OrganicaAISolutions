import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CpuChipIcon,
  EyeIcon,
  ShieldCheckIcon,
  ArrowTopRightOnSquareIcon,
  ClockIcon,
  BeakerIcon,
  LightBulbIcon,
  CommandLineIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  BookOpenIcon,
  UserIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';
import { useAnalytics } from '../components/shared/Analytics';

const Projects = () => {
  const { trackExternalLink, trackNISProtocolInteraction } = useAnalytics();

  const handleExternalLink = (url, title) => {
    trackExternalLink(url, title);
    if (url.includes('nisprotocol.organicaai.com')) {
      trackNISProtocolInteraction('external_site_visit', { source: 'projects_page' });
    }
  };

  const featuredProjects = [
    {
      title: 'The Visual Evolution',
      subtitle: 'Interactive Design History Book',
      description: 'Comprehensive interactive design history covering 20 design movements from 1919-2025+. Features 47 interactive pages with authentic visual reproductions, professional UI/UX, dark/light modes, and PWA-ready architecture. Built with Next.js 15.2.4, TypeScript, and Tailwind CSS.',
      category: 'AI-Assisted Design',
      status: 'active',
      tech: ['Next.js 15.2.4', 'TypeScript', 'Tailwind CSS', 'PWA', 'GitHub Pages'],
      icon: BookOpenIcon,
      color: 'indigo',
      href: 'https://organica-ai-solutions.github.io/DesignHistory/',
      external: true,
      private: false,
      isNew: true
    },
    {
      title: 'AlphaCortex',
      subtitle: 'Autonomous AI Trading System',
      description: 'Advanced AI trading system powered by LLMs with custom MCP for memory, strategy adaptation, and real-time execution. Bridges traditional quant analysis with advanced reasoning.',
      category: 'FinTech AI',
      status: 'active',
      tech: ['Python', 'LLMs', 'MCP', 'Trading APIs'],
      icon: CurrencyDollarIcon,
      color: 'emerald',
      href: 'https://github.com/Organica-Ai-Solutions/AlphaCortex',
      external: true,
      private: true
    },
    {
      title: 'NIS Protocol v2.0',
      subtitle: 'Consciousness-Level AI Framework',
      description: 'Biologically-inspired framework for multi-agent systems with consciousness simulation, multi-provider LLM integration, and advanced emotional cognition.',
      category: 'AI Research',
      status: 'active',
      tech: ['Python', 'Multi-LLM', 'Consciousness AI'],
      icon: LightBulbIcon,
      color: 'blue',
      href: 'https://nisprotocol.organicaai.com/',
      external: true,
      private: false
    },
    {
      title: 'Orion',
      subtitle: 'Coding AI Agent',
      description: 'Intelligent coding assistant with MCP server integration for enhanced development workflows and automated code generation.',
      category: 'Developer Tools',
      status: 'active',
      tech: ['TypeScript', 'AI Agents', 'MCP'],
      icon: CommandLineIcon,
      color: 'purple',
      href: 'https://github.com/Organica-Ai-Solutions/Orion',
      external: true,
      private: true
    },
    {
      title: 'Business Analytics with Python',
      subtitle: 'Data Analytics Platform',
      description: 'Comprehensive business analytics solution for data analysts and professionals, featuring real retail sales projects and practical implementations.',
      category: 'Business Intelligence',
      status: 'active',
      tech: ['Python', 'Data Science', 'Analytics'],
      icon: ChartBarIcon,
      color: 'orange',
      href: 'https://github.com/Organica-Ai-Solutions/BusinessAnalyticswithPython',
      external: true,
      private: false
    }
  ];

  const additionalProjects = [
    {
      title: 'Multi-Agent AI Systems Guide',
      description: 'Comprehensive guide with practical implementations',
      tech: ['JavaScript', 'Multi-Agent Systems'],
      href: 'https://github.com/Organica-Ai-Solutions/ComprehensiveGuideToBuildingMulti-agentAISystems',
      icon: BookOpenIcon,
      status: 'active'
    },
    {
      title: 'Crypto Trading Bot',
      description: 'Advanced cryptocurrency trading automation',
      tech: ['JavaScript', 'Crypto APIs'],
      href: 'https://github.com/Organica-Ai-Solutions/BuildingACryptoTradingBot',
      icon: CurrencyDollarIcon,
      status: 'active'
    },
    {
      title: 'AI Avatar System',
      description: 'Intelligent avatar creation and management',
      tech: ['Python', 'Computer Vision'],
      href: '#',
      icon: UserIcon,
      status: 'private'
    },
    {
      title: 'Tanda Circles',
      description: 'Community-focused mobile application',
      tech: ['Dart', 'Flutter', 'Mobile'],
      href: '#',
      icon: DevicePhoneMobileIcon,
      status: 'private'
    },
    {
      title: 'SparkNova',
      description: 'Advanced AI project in development',
      tech: ['Python', 'AI/ML'],
      href: '#',
      icon: BeakerIcon,
      status: 'private'
    },
    {
      title: 'Smart Portfolio',
      description: 'Intelligent portfolio management system',
      tech: ['Dart', 'FinTech'],
      href: '#',
      icon: ChartBarIcon,
      status: 'private'
    }
  ];

  const projectCategories = [
    { name: 'AI-Assisted Design', count: 1, color: 'indigo' },
    { name: 'FinTech AI', count: 4, color: 'emerald' },
    { name: 'AI Research', count: 3, color: 'blue' },
    { name: 'Developer Tools', count: 2, color: 'purple' },
    { name: 'Business Intelligence', count: 2, color: 'orange' }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] bg-clip-text text-transparent mb-6">
            Our Project Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive AI solutions spanning financial technology, consciousness-level AI research, 
            developer tools, business intelligence, and mobile applications. Building the future of 
            intelligent software across industries.
          </p>
        </motion.div>

        {/* Project Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16"
        >
          {projectCategories.map((category, index) => (
            <div key={category.name} className="text-center">
              <div className={`w-16 h-16 mx-auto rounded-full bg-${category.color}-100 flex items-center justify-center mb-3`}>
                <span className={`text-2xl font-bold text-${category.color}-600`}>
                  {category.count}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">{category.name}</h3>
            </div>
          ))}
        </motion.div>
        
        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/20 hover:shadow-2xl transition-all duration-300"
              >
                {/* Project Header */}
                <div className={`bg-gradient-to-br from-${project.color}-500/10 to-${project.color}-600/10 p-6`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`p-3 bg-${project.color}-100 rounded-xl`}>
                        <project.icon className={`h-8 w-8 text-${project.color}-600`} />
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            project.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                          }`}>
                            {project.status === 'active' ? 'ACTIVE' : 'PRIVATE'}
                          </span>
                          <span className={`px-2 py-1 bg-${project.color}-100 text-${project.color}-700 text-xs font-semibold rounded-full`}>
                            {project.category}
                          </span>
                          {project.isNew && (
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full animate-pulse">
                              NEW
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                        <p className="text-sm text-gray-600">{project.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  {!project.private ? (
                    <a
                      href={project.href}
                      target={project.external ? "_blank" : "_self"}
                      rel={project.external ? "noopener noreferrer" : ""}
                      onClick={() => handleExternalLink(project.href, project.title)}
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-${project.color}-500 to-${project.color}-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 group`}
                    >
                      {project.external && project.href.includes('nisprotocol') ? 'View Protocol Site' : 'View Project'}
                      {project.external && (
                        <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      )}
                    </a>
                  ) : (
                    <div className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-600 font-semibold rounded-lg cursor-not-allowed">
                      <ShieldCheckIcon className="h-4 w-4 mr-2" />
                      Private Repository
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Additional Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.05 }}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <project.icon className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900 text-sm">{project.title}</h3>
                      <span className={`w-2 h-2 rounded-full ${
                        project.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                      }`}></span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{project.description}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.status === 'active' && project.href !== '#' ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleExternalLink(project.href, project.title)}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center"
                  >
                    View Project
                    <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
                  </a>
                ) : (
                  <span className="text-sm text-gray-400">Private Repository</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/30 mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">22+</div>
              <div className="text-sm text-gray-600">Active Repositories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">5</div>
              <div className="text-sm text-gray-600">Core Categories</div>
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
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              From AI trading systems to consciousness-level frameworks, we're building the next 
              generation of intelligent software. Join us in shaping the future of AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Start a Project
              </Link>
              <a
                href="https://github.com/Organica-Ai-Solutions"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleExternalLink('https://github.com/Organica-Ai-Solutions', 'GitHub Organization')}
                className="border border-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-lg hover:border-gray-400 hover:text-gray-800 transition-all duration-300"
              >
                View All Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
