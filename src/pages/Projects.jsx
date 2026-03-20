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
  Cog6ToothIcon,
  ServerIcon
} from '@heroicons/react/24/outline';
import { useAnalytics } from '../components/shared/Analytics';
import NISProtocolProjectShowcase from '../components/NISProtocolProjectShowcase';

const Projects = () => {
  const { trackExternalLink, trackNISProtocolInteraction } = useAnalytics();

  const handleExternalLink = (url, title) => {
    trackExternalLink(url, title);
    if (url.includes('nisprotocol.organicaai.com')) {
      trackNISProtocolInteraction('external_site_visit', { source: 'projects_page' });
    }
  };

  // FLAGSHIP PROJECTS - Projects with live demos or public repos
  const flagshipProjects = [
    {
      title: 'NIS Protocol v4.0.5',
      subtitle: 'AI Operating System — 290+ API Routes',
      description: 'Our core R&D project: neuro-inspired multi-agent framework running on Raspberry Pi with NVIDIA Cosmos Reason2 vision, 290+ API routes, YOLO color classification, and a full pick-and-place robotics pipeline.',
      category: 'Core R&D',
      status: 'open-source',
      tech: ['Python', 'FastAPI', 'Cosmos R2', 'YOLO', 'Docker'],
      icon: CpuChipIcon,
      color: 'blue',
      href: 'https://github.com/Organica-Ai-Solutions/NIS_Protocol',
      githubHref: 'https://github.com/Organica-Ai-Solutions/NIS_Protocol',
      external: true,
      private: false,
      hasDemo: false,
      hasQuickstart: true
    },
    {
      title: 'NeuroLinux',
      subtitle: 'Raspberry Pi Robot + NVIDIA H100',
      description: 'A Raspberry Pi agent controlling a physical Hiwonder xArm robot via USB HID, powered by 7 NVIDIA H100 GPU services: Cosmos Reason2 (VLM), VLA xArm, Grounding DINO, Qwen3.5-LoRA, Speech2Action, and more.',
      category: 'Robotics AI',
      status: 'open-source',
      tech: ['Python', 'FastAPI', 'H100', 'xArm', 'Next.js'],
      icon: CpuChipIcon,
      color: 'green',
      href: 'https://github.com/Organica-Ai-Solutions/NeuroLinux',
      githubHref: 'https://github.com/Organica-Ai-Solutions/NeuroLinux',
      external: true,
      private: false,
      hasDemo: false,
      isNew: true
    },
    {
      title: 'The Visual Evolution',
      subtitle: 'Interactive Design History',
      description: '20 design movements from 1919-2025+ with 47 interactive pages. Professional UI/UX, dark/light modes, PWA-ready. Our most polished public demo.',
      category: 'Live Demo',
      status: 'deployed',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      icon: BookOpenIcon,
      color: 'indigo',
      href: 'https://organica-ai-solutions.github.io/DesignHistory/',
      githubHref: 'https://github.com/Organica-Ai-Solutions/DesignHistory',
      external: true,
      private: false,
      hasDemo: true,
      demoLabel: '🔴 Live Demo'
    },
    {
      title: 'NIS-TOOLKIT-SUIT',
      subtitle: 'Developer Ecosystem',
      description: 'Full-stack toolkit for building NIS-compatible AI systems. Includes NDT for orchestration and NAT for agents. Supports MCP, ACP, SEED protocols.',
      category: 'Open Source',
      status: 'open-source',
      tech: ['Python', 'MCP', 'ACP', 'SEED'],
      icon: CommandLineIcon,
      color: 'purple',
      href: 'https://github.com/Organica-Ai-Solutions/NIS-TOOLKIT-SUIT',
      githubHref: 'https://github.com/Organica-Ai-Solutions/NIS-TOOLKIT-SUIT',
      external: true,
      private: false
    }
  ];

  // IN DEVELOPMENT - Private repos, actively being built
  const inDevelopment = [
    {
      title: 'ArbitrageMachine',
      subtitle: 'Live Crypto Arbitrage AI',
      description: 'Cross-exchange crypto arbitrage across Binance US, Coinbase, and Kraken. LangGraph AI agent detects spread opportunities and executes trades with a React dashboard showing live wallet balances and P&L.',
      category: 'FinTech AI',
      tech: ['Python', 'FastAPI', 'LangGraph', 'CCXT', 'React'],
      icon: CurrencyDollarIcon,
      color: 'emerald',
      private: true,
      isNew: true
    },
    {
      title: 'AlphaCortex',
      subtitle: 'Autonomous US Equity Trading',
      description: 'Live AI-powered trading system connected to Alpaca Markets. Confidence-threshold trade execution (≥60%), 5-minute scan cycle across a curated US equity watchlist, and risk management with trailing stops.',
      category: 'FinTech AI',
      tech: ['Python', 'FastAPI', 'Claude AI', 'Alpaca', 'SQLite'],
      icon: ChartBarIcon,
      color: 'yellow',
      private: true
    },
    {
      title: 'SmartPortfolioWeb',
      subtitle: 'AI Portfolio Optimization',
      description: 'Claude-powered portfolio advisor with mean-variance optimization, Sharpe ratio analysis, market regime classification (XGBoost), and efficient frontier generation. Integrates with Alpaca for live account data.',
      category: 'FinTech AI',
      tech: ['Python', 'Claude AI', 'XGBoost', 'PyPortfolioOpt', 'React'],
      icon: CurrencyDollarIcon,
      color: 'teal',
      private: true,
      isNew: true
    },
    {
      title: 'Orion',
      subtitle: 'AI-Powered Developer Tools',
      description: 'Full-stack AI coding assistant with code analysis, test generation, formatting, web research, and browser automation. React dashboard + FastAPI backend powered by Claude. Cursor IDE extension included.',
      category: 'Developer Tools',
      tech: ['Python', 'FastAPI', 'React', 'Claude AI', 'TypeScript'],
      icon: CommandLineIcon,
      color: 'purple',
      href: 'https://github.com/Organica-Ai-Solutions/Orion',
      private: false,
      isNew: true
    },
    {
      title: 'NIS-X',
      subtitle: 'Space Exploration AI',
      description: 'NeurIPS Ariel Data Challenge 2025 entry. Physics-informed spectral analysis for exoplanet atmospheric discovery.',
      category: 'Research',
      tech: ['Python', 'KAN', 'PINNs'],
      icon: BeakerIcon,
      color: 'violet',
      href: 'https://github.com/Organica-Ai-Solutions/NIS-X',
      private: false
    }
  ];

  // LEGACY/LEARNING - Books, guides, older projects
  const resources = [
    {
      title: 'Multi-Agent AI Systems Guide',
      description: 'Comprehensive guide with practical implementations',
      tech: ['JavaScript'],
      href: 'https://github.com/Organica-Ai-Solutions/ComprehensiveGuideToBuildingMulti-agentAISystems',
      icon: BookOpenIcon
    },
    {
      title: 'Business Analytics with Python',
      description: 'Practical guide for data analysts with real retail projects',
      tech: ['Python'],
      href: 'https://github.com/Organica-Ai-Solutions/BusinessAnalyticswithPython',
      icon: ChartBarIcon
    },
    {
      title: 'Crypto Trading Bot Book',
      description: 'Educational book about building crypto trading bots',
      tech: ['JavaScript'],
      href: 'https://github.com/Organica-Ai-Solutions/BuildingACryptoTradingBot',
      icon: CurrencyDollarIcon,
      stars: 1
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
            ⚠️ R&D Startup — All projects are experimental
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] bg-clip-text text-transparent mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Open source AI research and tools. Try our demos, explore our code, or build with our toolkits.
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href="https://github.com/Organica-Ai-Solutions/NIS_Protocol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Try NIS Protocol
          </a>
          <a
            href="https://organica-ai-solutions.github.io/DesignHistory/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all"
          >
            🔴 Live Demo: Design Book
          </a>
          <a
            href="https://github.com/Organica-Ai-Solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-all"
          >
            View All 41 Repos →
          </a>
        </motion.div>
        
        {/* FLAGSHIP PROJECTS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">🚀 Flagship Projects</h2>
          <p className="text-gray-600 mb-8">Open source with live demos or active development</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {flagshipProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-r from-${project.color}-500 to-${project.color}-600 p-4`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <project.icon className="h-8 w-8 text-white" />
                      <div className="ml-3">
                        <h3 className="text-lg font-bold text-white">{project.title}</h3>
                        <p className="text-white/80 text-sm">{project.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {project.hasDemo && (
                        <span className="px-2 py-1 bg-white/20 text-white text-xs font-semibold rounded-full">
                          {project.demoLabel}
                        </span>
                      )}
                      {project.status === 'open-source' && (
                        <span className="px-2 py-1 bg-green-400/20 text-white text-xs font-semibold rounded-full">
                          Open Source
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    {project.hasDemo ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all text-sm"
                      >
                        View Demo
                        <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                      </a>
                    ) : (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all text-sm"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        GitHub
                      </a>
                    )}
                    {project.githubHref && project.hasDemo && (
                      <a
                        href={project.githubHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-all text-sm"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* IN DEVELOPMENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">🔬 In Development</h2>
          <p className="text-gray-600 mb-8">Active R&D projects — some private, some public</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {inDevelopment.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-2 bg-${project.color}-100 rounded-lg`}>
                    <project.icon className={`h-6 w-6 text-${project.color}-600`} />
                  </div>
                  <div className="ml-3">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-bold text-gray-900">{project.title}</h3>
                      {project.isNew && (
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">NEW</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{project.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.private ? (
                  <span className="inline-flex items-center text-sm text-gray-400">
                    <ShieldCheckIcon className="h-4 w-4 mr-1" />
                    Private Repository
                  </span>
                ) : (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center"
                  >
                    View on GitHub
                    <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RESOURCES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">📚 Books & Guides</h2>
          <p className="text-gray-600 mb-8">Educational resources and documentation</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {resources.map((resource, index) => (
              <a
                key={resource.title}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-200 hover:shadow-md transition-all flex items-center"
              >
                <resource.icon className="h-8 w-8 text-gray-400 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{resource.title}</h3>
                  <p className="text-xs text-gray-600">{resource.description}</p>
                </div>
                <ArrowTopRightOnSquareIcon className="h-4 w-4 text-gray-400 ml-auto" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-1">41</div>
              <div className="text-gray-400 text-sm">GitHub Repos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">3</div>
              <div className="text-gray-400 text-sm">Live Trading Systems</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">7</div>
              <div className="text-gray-400 text-sm">H100 GPU Services</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">290+</div>
              <div className="text-gray-400 text-sm">NIS API Routes</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to Collaborate?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              From neuro-inspired AI systems to physics-informed neural networks, we're advancing
              the frontiers of AI research. Join us in shaping the future of artificial intelligence.
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
