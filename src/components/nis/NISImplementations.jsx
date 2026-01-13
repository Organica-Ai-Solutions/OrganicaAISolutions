import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CheckCircleIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const ImplementationCard = ({ impl, isExpanded, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
    >
      <div className={`bg-gradient-to-r ${impl.color} p-6`}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-4xl">{impl.icon}</span>
          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
            {impl.status}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2">{impl.name}</h3>
        <p className="text-white/90 text-sm">{impl.subtitle}</p>
      </div>

      <div className="p-6">
        <p className="text-gray-300 text-sm mb-4">{impl.description}</p>

        <div className="space-y-2 mb-4">
          {impl.features.slice(0, isExpanded ? impl.features.length : 2).map((feature, idx) => (
            <div key={idx} className="flex items-start text-sm">
              <CheckCircleIcon className="h-4 w-4 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>

        {impl.features.length > 2 && (
          <button
            onClick={onToggle}
            className="flex items-center text-blue-400 hover:text-blue-300 text-sm mb-4 transition-colors"
          >
            {isExpanded ? (
              <>
                Show less <ChevronUpIcon className="h-4 w-4 ml-1" />
              </>
            ) : (
              <>
                Show {impl.features.length - 2} more features <ChevronDownIcon className="h-4 w-4 ml-1" />
              </>
            )}
          </button>
        )}

        <a
          href={impl.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
        >
          <span>View on GitHub</span>
          <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
        </a>
      </div>
    </motion.div>
  );
};

const NISImplementations = ({ fadeIn }) => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (name) => {
    setExpandedCards(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const implementations = [
    {
      name: 'NIS-AUTO',
      subtitle: 'Neural Intelligence for Automotive Systems',
      color: 'from-red-500 to-orange-600',
      description: 'Production deployment in gas engine vehicles',
      features: [
        'OBD-II diagnostics & CAN bus integration',
        'Real-time vehicle monitoring and optimization',
        'Physics-validated vehicle commands',
        'Engine performance optimization'
      ],
      icon: '🚗',
      status: 'Production',
      github: 'https://github.com/Organica-Ai-Solutions/NIS-AUTO'
    },
    {
      name: 'NIS-DRONE',
      subtitle: 'World\'s Most Advanced Autonomous Drone AI',
      color: 'from-blue-500 to-cyan-600',
      description: 'Hardware-validated autonomous flight systems (v3.0)',
      features: [
        'Multi-sensor fusion with ethical decision-making',
        'Physics-validated flight paths',
        'Real-time obstacle avoidance',
        'MAVLink/ROS integration'
      ],
      icon: '🚁',
      status: 'Production',
      github: 'https://github.com/Organica-Ai-Solutions/NIS-DRONE'
    },
    {
      name: 'NIS-CITY',
      subtitle: 'Smart City Infrastructure with Distributed AI',
      color: 'from-green-500 to-emerald-600',
      description: 'City-wide distributed agent coordination',
      features: [
        'Traffic optimization and management',
        'Energy grid optimization',
        'Public services coordination',
        'Edge AI deployment across city infrastructure'
      ],
      icon: '🏙️',
      status: 'Active Development',
      github: 'https://github.com/Organica-Ai-Solutions/NIS-CITY'
    },
    {
      name: 'NIS-X',
      subtitle: 'Space Exploration AI for Mars & Beyond',
      color: 'from-purple-500 to-pink-600',
      description: 'NeurIPS Ariel Data Challenge 2025 entry',
      features: [
        'Exoplanet atmospheric analysis',
        'Consciousness-engineered AGI for space',
        'Autonomous decision-making with safety override',
        'Deep space mission planning'
      ],
      icon: '🚀',
      status: 'Research',
      github: 'https://github.com/Organica-Ai-Solutions/NIS-X'
    },
    {
      name: 'NeuroLinux',
      subtitle: 'Agentic AI Operating Layer for Linux Edge Systems',
      color: 'from-slate-500 to-gray-700',
      description: 'Runs on Raspberry Pi 5 and edge devices (v0.5.3-alpha)',
      features: [
        '5 Specialized Agents: CAN Bus, Camera, Robotics, Vision, Data Collector',
        'NeuroHub dashboard on port 3000',
        'NeuroGrid mesh networking',
        'Natural language system control'
      ],
      icon: '🐧',
      status: 'Alpha',
      github: 'https://github.com/Organica-Ai-Solutions/NeuroLinux'
    },
    {
      name: 'NIS-HUB',
      subtitle: 'Central Intelligence Coordination System',
      color: 'from-indigo-500 to-blue-600',
      description: 'Nerve center for distributed NIS deployments',
      features: [
        'Dashboard API for system monitoring',
        'Dynamic agent genesis on-demand',
        'Consciousness evolution and parameter tuning',
        'NeuroLinux integration support'
      ],
      icon: '🎛️',
      status: 'Production',
      github: 'https://github.com/Organica-Ai-Solutions/NIS-HUB'
    },
    {
      name: 'NIS-TOOLKIT-SUIT',
      subtitle: 'Enterprise AI Development Platform',
      color: 'from-orange-500 to-amber-600',
      description: 'Production-ready framework for building AI apps (v4.0.0)',
      features: [
        'Universal CLI: ./nis create, test, deploy, monitor',
        'Complete Laplace→Consciousness→KAN→PINN→Safety pipeline',
        'Multi-stage Docker builds',
        'Comprehensive testing and security scanning'
      ],
      icon: '🛠️',
      status: 'Production',
      github: 'https://github.com/Organica-Ai-Solutions/NIS-TOOLKIT-SUIT'
    },
    {
      name: 'NIS-MoE',
      subtitle: 'Mixture of Experts AI Routing',
      color: 'from-teal-500 to-cyan-600',
      description: 'Dynamic model selection and intelligent routing',
      features: [
        'Intelligent provider routing based on task',
        'Cost optimization across LLM providers',
        'Performance-based model selection',
        'Real-time provider health monitoring'
      ],
      icon: '🎯',
      status: 'Active Development',
      github: 'https://github.com/Organica-Ai-Solutions/NIS-MoE'
    },
    {
      name: 'AlphaCortex',
      subtitle: 'Autonomous AI Trading System',
      color: 'from-yellow-500 to-orange-500',
      description: 'LLM-powered trading system for financial markets',
      features: [
        'MCP for memory and strategy adaptation',
        'Privacy-respecting financial automation',
        'Real-time market analysis',
        'Risk-aware decision making'
      ],
      icon: '💹',
      status: 'Active Development',
      github: 'https://github.com/Organica-Ai-Solutions/AlphaCortex'
    }
  ];

  return (
    <motion.div {...fadeIn} className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 py-16" id="implementations">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🚀 Real-World Implementations</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            9+ specialized implementations across automotive, aerospace, smart cities, space exploration, and enterprise systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {implementations.map((impl) => (
            <ImplementationCard
              key={impl.name}
              impl={impl}
              isExpanded={expandedCards[impl.name]}
              onToggle={() => toggleCard(impl.name)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default NISImplementations;
