import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowTopRightOnSquareIcon, 
  BookOpenIcon, 
  StarIcon,
  CalendarIcon,
  DocumentTextIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

const DesignBookShowcase = ({ compact = false }) => {
  const handleExternalLink = (url, title) => {
    // Track external link if analytics is available
    if (window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'external_link',
        event_label: title,
        value: url
      });
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const bookStats = [
    { label: 'Design Movements', value: '20', icon: BookOpenIcon },
    { label: 'Years Covered', value: '106+', icon: CalendarIcon },
    { label: 'Interactive Pages', value: '47', icon: DocumentTextIcon },
    { label: 'Live Demo', value: 'Available', icon: EyeIcon }
  ];

  const features = [
    'Interactive design movement exploration',
    'Authentic visual reproductions',
    'Professional UI/UX with dark/light modes',
    'PWA-ready architecture',
    'Mobile-optimized responsive design',
    'Next.js 15.2.4 with TypeScript'
  ];

  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <BookOpenIcon className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">The Visual Evolution</h3>
              <p className="text-sm text-gray-600">Interactive Design History Book</p>
            </div>
          </div>
          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
            NEW
          </span>
        </div>
        
        <p className="text-gray-700 text-sm mb-4">
          Comprehensive interactive design history covering 20 movements from 1919-2025+. 
          Professional UX/UI with authentic visual reproductions.
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex space-x-4 text-xs text-gray-600">
            <span>20 Movements</span>
            <span>47 Pages</span>
            <span>106+ Years</span>
          </div>
          
          <button
            onClick={() => handleExternalLink('https://organica-ai-solutions.github.io/DesignHistory/', 'The Visual Evolution')}
            className="inline-flex items-center px-3 py-1.5 bg-indigo-600 text-white text-xs font-semibold rounded-lg hover:bg-indigo-700 transition-colors group"
          >
            View Live
            <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full">
                  AI-Assisted Design
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full animate-pulse">
                  NEW RELEASE
                </span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                The Visual Evolution
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Interactive Design History Book
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Experience 106+ years of design history through 20 interactive movements from 1919 to 2025+. 
                Built with cutting-edge technology and AI-assisted design principles, this comprehensive 
                educational platform showcases professional UI/UX development and modern web architecture.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleExternalLink('https://organica-ai-solutions.github.io/DesignHistory/', 'The Visual Evolution - Live Demo')}
                className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-300 group"
              >
                <EyeIcon className="h-5 w-5 mr-2" />
                View Live Demo
                <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <button
                onClick={() => handleExternalLink('https://github.com/Organica-Ai-Solutions/DesignHistory', 'The Visual Evolution - GitHub')}
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:text-gray-800 transition-all duration-300"
              >
                <StarIcon className="h-5 w-5 mr-2" />
                View Source Code
                <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>

          {/* Stats Column */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Project Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                {bookStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="p-3 bg-indigo-100 rounded-xl">
                        <stat.icon className="h-6 w-6 text-indigo-600" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <h4 className="font-semibold text-gray-900 mb-3">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {['Next.js 15.2.4', 'TypeScript', 'Tailwind CSS', 'PWA', 'GitHub Pages'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-6 text-white">
              <h4 className="font-semibold mb-2">Ready for Product Hunt</h4>
              <p className="text-sm text-indigo-100">
                Fully deployed, professionally polished, and ready to launch on Product Hunt as part of our Amazon Kindle series.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default DesignBookShowcase; 