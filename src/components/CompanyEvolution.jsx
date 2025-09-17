import React from 'react';
import { motion } from 'framer-motion';
import { 
  DevicePhoneMobileIcon, 
  CpuChipIcon,
  ServerIcon,
  CodeBracketIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';

const CompanyEvolution = () => {
  const evolutionSteps = [
    {
      year: "2022-2023",
      title: "Mobile App Development",
      description: "Started as a solutions company focused on mobile applications",
      projects: ["Tanda Circles", "Smart Portfolio", "KATAPP", "CarFlipPlus"],
      icon: DevicePhoneMobileIcon,
      color: "blue"
    },
    {
      year: "2023-2024",
      title: "AI Integration & Tools",
      description: "Expanded into AI tools and business intelligence solutions",
      projects: ["Orion Coding Agent", "Business Analytics with Python", "AI Avatar System", "Crypto Trading Bot"],
      icon: CodeBracketIcon,
      color: "purple"
    },
    {
      year: "2024-2025",
      title: "NIS Protocol Development",
      description: "Created our flagship NIS Protocol - a neuro-inspired multi-agent AI framework",
      projects: ["NIS Protocol v3.2", "NIS-TOOLKIT-SUIT", "NIS-HUB", "Multi-agent AI Systems"],
      icon: CpuChipIcon,
      color: "indigo"
    },
    {
      year: "2025-Present",
      title: "Industry Applications & Scaling",
      description: "Implementing NIS Protocol across industries with enterprise partners",
      projects: ["NIS-AUTO", "NIS-CITY", "NIS-DRONE", "NIS-X", "AlphaCortex"],
      icon: RocketLaunchIcon,
      color: "green"
    }
  ];

  const portfolioCategories = [
    {
      name: "Mobile Applications",
      count: 5,
      examples: ["Tanda Circles", "Smart Portfolio", "KATAPP"],
      icon: DevicePhoneMobileIcon,
      color: "blue"
    },
    {
      name: "AI Development Tools",
      count: 4,
      examples: ["Orion", "NIS-TOOLKIT-SUIT", "Codex Reader"],
      icon: CodeBracketIcon,
      color: "purple"
    },
    {
      name: "Core AI Technology",
      count: 3,
      examples: ["NIS Protocol v3.2", "NIS-HUB", "Organica Agent Framework"],
      icon: CpuChipIcon,
      color: "indigo"
    },
    {
      name: "Industry Implementations",
      count: 5,
      examples: ["NIS-AUTO", "NIS-CITY", "NIS-DRONE", "NIS-X", "AlphaCortex"],
      icon: ServerIcon,
      color: "green"
    },
    {
      name: "Research Projects",
      count: 3,
      examples: ["NeurIPS Ariel Challenge", "The Visual Evolution", "Business Analytics"],
      icon: BeakerIcon,
      color: "pink"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-base font-semibold leading-7 text-transparent bg-clip-text bg-gradient-to-r from-[#0B84F3] to-[#FF3D90]">Our Journey</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From Mobile Apps to Enterprise AI
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Organica AI Solutions has evolved from a mobile app development company to the creator of NIS Protocol,
            a comprehensive AI framework now being implemented across multiple industries.
          </p>
        </motion.div>

        {/* Evolution Timeline */}
        <div className="relative mt-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
          
          {evolutionSteps.map((step, index) => (
            <motion.div
              key={step.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-16 ${index % 2 === 0 ? 'ml-auto pl-8 pr-0' : 'mr-auto pr-8 pl-0'} w-full md:w-1/2`}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
                <div className={`w-10 h-10 rounded-full bg-${step.color}-100 border-4 border-white flex items-center justify-center shadow-lg`}>
                  <step.icon className={`h-5 w-5 text-${step.color}-600`} />
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-${step.color}-100 text-${step.color}-800 mb-3`}>
                  {step.year}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {step.projects.map((project) => (
                    <span key={project} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-24"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Complete Portfolio</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {portfolioCategories.map((category) => (
              <div 
                key={category.name}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-full bg-${category.color}-100 flex items-center justify-center mb-4`}>
                  <category.icon className={`h-6 w-6 text-${category.color}-600`} />
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-1">{category.name}</h4>
                <div className="text-2xl font-bold text-gray-700 mb-3">{category.count}+</div>
                
                <div className="text-sm text-gray-600">
                  <p className="font-medium mb-2">Examples:</p>
                  <ul className="space-y-1">
                    {category.examples.map((example) => (
                      <li key={example} className="flex items-center">
                        <svg className="h-3 w-3 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Our Current Focus</h3>
            <p className="text-gray-600 mt-2">
              While we maintain our full portfolio, our primary focus is now on scaling the NIS Protocol
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">NIS Protocol v3.2</h4>
              <p className="text-gray-600 text-sm">
                Our flagship AI operating system with 32 working API endpoints, comprehensive security hardening,
                and production-ready deployment capabilities.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Enterprise Partnerships</h4>
              <p className="text-gray-600 text-sm">
                Scaling with AWS cloud infrastructure and NVIDIA GPU acceleration to deliver
                enterprise-grade AI solutions across industries.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Industry Applications</h4>
              <p className="text-gray-600 text-sm">
                Implementing NIS Protocol in automotive (NIS-AUTO), smart cities (NIS-CITY),
                aerospace (NIS-DRONE), space exploration (NIS-X), and financial markets (AlphaCortex).
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyEvolution;
