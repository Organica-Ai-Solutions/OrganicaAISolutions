import React from 'react';
import { motion } from 'framer-motion';
import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CheckCircleIcon,
  DocumentTextIcon,
  ServerIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';

const NISProtocolShowcase = () => {
  const features = [
    {
      name: "Security Hardening",
      description: "100% vulnerability resolution, eliminated all 45 GitHub security alerts",
      icon: ShieldCheckIcon,
      color: "blue"
    },
    {
      name: "API Reliability",
      description: "All 32 endpoints tested and working with comprehensive fallbacks",
      icon: CheckCircleIcon,
      color: "green"
    },
    {
      name: "NVIDIA NeMo Ready",
      description: "Enterprise integration framework prepared and documented",
      icon: ServerIcon,
      color: "indigo"
    },
    {
      name: "Complete Documentation",
      description: "Comprehensive API reference with working examples and visual diagrams",
      icon: DocumentTextIcon,
      color: "purple"
    },
    {
      name: "Production Deployment",
      description: "Docker containerization with enterprise-grade reliability",
      icon: CodeBracketIcon,
      color: "pink"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
            <CpuChipIcon className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            NIS Protocol v3.2.1 - Production Ready
          </h2>
          <p className="mt-2 text-lg text-gray-600 max-w-3xl mx-auto">
            Our foundational AI operating system for next-generation autonomous systems is now production-ready with enhanced security, reliability, and enterprise features.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center p-2 bg-${feature.color}-100 rounded-lg mb-4`}>
                <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-blue-100"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Ecosystem - Real-World Deployments</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">🚗 Automotive: NIS-AUTO</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Production system for gas engine vehicles</li>
                <li>• Real hardware deployment</li>
                <li>• Engine optimization & maintenance</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">🏙️ Smart Cities: NIS-CITY</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Complete smart city infrastructure</li>
                <li>• City-wide distributed agent coordination</li>
                <li>• Traffic optimization & resource management</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">🚀 Space Exploration: NIS-X</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Official NeurIPS Ariel Data Challenge entry</li>
                <li>• Exoplanet atmospheric analysis</li>
                <li>• Consciousness-engineered AGI for space</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Organica-Ai-Solutions/NIS_Protocol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-300"
          >
            View on GitHub
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default NISProtocolShowcase;
