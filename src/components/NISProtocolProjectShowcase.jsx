import React from 'react';
import { motion } from 'framer-motion';
import { 
  CpuChipIcon, 
  ServerIcon, 
  CheckCircleIcon, 
  ArrowTopRightOnSquareIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const NISProtocolProjectShowcase = ({ handleExternalLink }) => {
  const achievements = [
    "32/32 working API endpoints with 100% reliability",
    "Complete security hardening (45/45 vulnerabilities fixed)",
    "Production-ready with PyPI publishing",
    "Physics-informed neural networks (PINNs)",
    "Multi-agent coordination system",
    "Docker containerization for enterprise deployment",
    "NVIDIA NeMo enterprise integration"
  ];

  const implementations = [
    { name: "NIS-AUTO", description: "Production system for gas engine vehicles" },
    { name: "NIS-CITY", description: "Smart city infrastructure with distributed agents" },
    { name: "NIS-DRONE", description: "Hardware-validated autonomous flight systems" },
    { name: "NIS-X", description: "NeurIPS Ariel Data Challenge 2025 entry" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full mb-16"
    >
      <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="p-3 bg-blue-800 rounded-xl mr-4">
                <CpuChipIcon className="h-8 w-8 text-blue-200" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">NIS Protocol v3.2.1</h1>
                <p className="text-blue-200">Foundational AI Operating System for Next-Generation Autonomous Systems</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <span className="px-3 py-1 bg-green-500 text-green-900 text-xs font-bold rounded-full">
                PRODUCTION READY
              </span>
              <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                v3.2.1
              </span>
            </div>
          </div>
          
          <p className="text-gray-100 text-lg mb-8">
            NIS Protocol is our flagship research project - a neuro-inspired multi-agent AI framework for real-world automation.
            With physics-informed validation and enterprise-grade reliability, it powers applications across automotive,
            aerospace, smart cities, and space exploration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleExternalLink('https://github.com/Organica-Ai-Solutions/NIS_Protocol', 'GitHub - NIS Protocol')}
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 group"
            >
              <CodeBracketIcon className="h-5 w-5 mr-2" />
              GitHub Repository
              <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button
              onClick={() => handleExternalLink('https://nisprotocol.organicaai.com/', 'NIS Protocol Site')}
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 group"
            >
              <DocumentTextIcon className="h-5 w-5 mr-2" />
              Documentation
              <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
        
        {/* Research Disclaimer */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Research Notice:</strong> NIS Protocol is an ongoing research project. While we have production-ready components, 
                we're continuously advancing the state of AI science. Academic and research use is encouraged.
              </p>
            </div>
          </div>
        </div>
        
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 p-8 md:p-12 bg-white">
          {/* Achievements */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <ServerIcon className="h-6 w-6 text-blue-600 mr-2" />
              Technical Achievements
            </h3>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Real-world Implementations */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <RocketLaunchIcon className="h-6 w-6 text-blue-600 mr-2" />
              Real-world Implementations
            </h3>
            <div className="space-y-4">
              {implementations.map((impl, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">{impl.name}</h4>
                  <p className="text-sm text-gray-600">{impl.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NISProtocolProjectShowcase;
