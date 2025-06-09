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
  CommandLineIcon
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

  const nisProtocolFeatures = [
    {
      icon: EyeIcon,
      title: 'Multi-Provider LLM System',
      description: 'OpenAI GPT-4o, Anthropic Claude-3.5, DeepSeek, BitNet 2',
      status: 'active'
    },
    {
      icon: LightBulbIcon,
      title: 'Consciousness Agents',
      description: 'Self-aware agents with meta-cognition',
      status: 'active'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Enhanced Emotional States',
      description: 'Contextual awareness & memory-influenced emotions',
      status: 'active'
    },
    {
      icon: CpuChipIcon,
      title: 'Goal-Oriented Processing',
      description: 'Intelligent goal formulation & adaptive strategies',
      status: 'enhanced'
    }
  ];

  const projectLinks = [
    {
      title: 'NIS Protocol v2.0 Site',
      description: 'Complete v2.0 documentation & features',
      href: 'https://nisprotocol.organicaai.com/',
      external: true,
      primary: true
    },
    {
      title: 'GitHub Repository',
      description: 'Open source development & contributions',
      href: 'https://github.com/Organica-Ai-Solutions/NIS_Protocol',
      external: true,
      primary: false
    },
    {
      title: 'Technical Whitepaper',
      description: 'In-depth protocol architecture & implementation',
      href: '/docs/nis-protocol/NIS_Protocol_Whitepaper.html',
      external: false,
      primary: false
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
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] bg-clip-text text-transparent mb-6">
            Research Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering consciousness-level AI research and developing next-generation 
            intelligent systems that bridge biological and artificial intelligence.
          </p>
        </motion.div>
        
        {/* Featured Project - NIS Protocol v2.0 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/20">
            {/* Hero Image */}
            <div className="relative h-80 bg-gradient-to-br from-[#0B84F3]/10 to-[#FF3D90]/10">
              <img 
                src="/images/nis-protocol/diagram.png" 
                alt="NIS Protocol v2.0 Architecture" 
                className="w-full h-full object-cover object-center mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-3 py-1 bg-green-500 text-xs font-semibold rounded-full">
                    v2.0 LATEST
                  </span>
                  <span className="px-3 py-1 bg-blue-500 text-xs font-semibold rounded-full">
                    CONSCIOUSNESS-LEVEL
                  </span>
                </div>
                <h2 className="text-3xl font-bold">NIS Protocol v2.0</h2>
                <p className="text-lg opacity-90">Neuro-Inspired System Protocol</p>
              </div>
            </div>

            <div className="p-8">
              {/* Description */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Advanced Neuro-Inspired Intelligence with Multi-Provider LLM Integration
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  NIS Protocol v2.0 represents a quantum leap in intelligent agent frameworks, introducing 
                  revolutionary <strong>consciousness-level processing</strong>, <strong>multi-provider LLM integration</strong>, 
                  and <strong>advanced emotional cognition</strong>. Built upon biologically-inspired architecture, 
                  v2.0 enables truly adaptive, self-aware, and naturally intelligent systems that rival human cognitive capabilities.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {nisProtocolFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="bg-gray-50 rounded-xl p-4 border border-gray-100"
                  >
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-gradient-to-br from-[#0B84F3] to-[#FF3D90] rounded-lg">
                        <feature.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="ml-3">
                        <span className={`w-2 h-2 rounded-full ${
                          feature.status === 'active' ? 'bg-green-500' : 
                          feature.status === 'enhanced' ? 'bg-blue-500' : 'bg-gray-400'
                        } animate-pulse`}></span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-xs">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Action Links */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {projectLinks.map((link, index) => (
                  <motion.a
                    key={link.title}
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : ""}
                    onClick={() => handleExternalLink(link.href, link.title)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className={`group flex items-center p-4 rounded-xl transition-all duration-300 ${
                      link.primary 
                        ? 'bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] text-white hover:shadow-lg hover:scale-105' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    <div className="flex-1">
                      <h4 className={`font-semibold ${link.primary ? 'text-white' : 'text-gray-900'}`}>
                        {link.title}
                      </h4>
                      <p className={`text-sm ${link.primary ? 'text-white/90' : 'text-gray-600'}`}>
                        {link.description}
                      </p>
                    </div>
                    {link.external && (
                      <ArrowTopRightOnSquareIcon className={`h-5 w-5 ml-2 ${
                        link.primary ? 'text-white' : 'text-gray-400'
                      } group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform`} />
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Future Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Cultural Intelligence AI */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/30">
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-full h-48 flex items-center justify-center">
              <BeakerIcon className="h-16 w-16 text-purple-600" />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded">
                  IN DEVELOPMENT
                </span>
                <ClockIcon className="h-4 w-4 text-gray-400 ml-2" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Cultural Intelligence AI
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Advanced AI systems with deep cultural sensitivity for indigenous rights 
                and archaeological heritage preservation, integrated with NIS Protocol v2.0.
              </p>
              <button 
                className="w-full bg-purple-100 text-purple-700 font-semibold py-2 px-4 rounded-lg cursor-not-allowed opacity-75"
                disabled
              >
                Q2 2025
              </button>
            </div>
          </div>

          {/* Biologically-Inspired Architectures */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/30">
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 w-full h-48 flex items-center justify-center">
              <CommandLineIcon className="h-16 w-16 text-emerald-600" />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded">
                  RESEARCH PHASE
                </span>
                <ClockIcon className="h-4 w-4 text-gray-400 ml-2" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Advanced Cognitive Architecture
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Next-generation biologically-inspired AI architectures with enhanced 
                memory systems and consciousness simulation capabilities.
              </p>
              <button 
                className="w-full bg-emerald-100 text-emerald-700 font-semibold py-2 px-4 rounded-lg cursor-not-allowed opacity-75"
                disabled
              >
                Q3 2025
              </button>
            </div>
          </div>

          {/* Multi-AI Orchestration Platform */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/30">
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-full h-48 flex items-center justify-center">
              <CpuChipIcon className="h-16 w-16 text-orange-600" />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded">
                  PLANNING
                </span>
                <ClockIcon className="h-4 w-4 text-gray-400 ml-2" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Multi-AI Orchestration
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Comprehensive platform for orchestrating complex AI ecosystems across 
                different providers with unified consciousness-level coordination.
              </p>
              <button 
                className="w-full bg-orange-100 text-orange-700 font-semibold py-2 px-4 rounded-lg cursor-not-allowed opacity-75"
                disabled
              >
                Q4 2025
              </button>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Join us in pioneering the future of consciousness-level AI. We're always looking 
              for researchers, developers, and organizations to collaborate on cutting-edge projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Get In Touch
              </Link>
              <a
                href="https://github.com/Organica-Ai-Solutions"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleExternalLink('https://github.com/Organica-Ai-Solutions', 'GitHub Organization')}
                className="border border-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-lg hover:border-gray-400 hover:text-gray-800 transition-all duration-300"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
