import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, CodeBracketIcon, RocketLaunchIcon, BeakerIcon } from '@heroicons/react/24/outline';

const NISQuickOverview = ({ fadeIn }) => {
  return (
    <motion.div {...fadeIn} className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-br from-blue-900/80 to-purple-900/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">⚡ Quick Overview</h2>
          <span className="px-4 py-2 bg-green-600/30 backdrop-blur-sm rounded-full text-sm font-semibold">
            TL;DR
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-xl font-bold mb-3 text-blue-300">What is NIS Protocol?</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A production-ready <strong>framework template</strong> for building enterprise AI systems with neuro-inspired architecture.
              Not a single product—it's the foundation for 9+ specialized implementations across automotive, aerospace, smart cities, and more.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-purple-300">Why Choose NIS?</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-300">
                <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                <span><strong>393 API endpoints</strong> (100% verified)</span>
              </div>
              <div className="flex items-center text-gray-300">
                <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                <span><strong>Physics-validated</strong> with real PDE solving</span>
              </div>
              <div className="flex items-center text-gray-300">
                <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                <span><strong>Multi-protocol</strong> (MCP, A2A, ACP, S2A, CAN, OBD-II)</span>
              </div>
              <div className="flex items-center text-gray-300">
                <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                <span><strong>99.9% uptime</strong> target, &lt;50ms response time</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <h3 className="text-lg font-bold mb-4 text-center">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="#quickstart"
              className="flex flex-col items-center justify-center bg-blue-600/30 hover:bg-blue-600/50 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 group"
            >
              <CodeBracketIcon className="h-8 w-8 text-blue-300 mb-2 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-sm">Try It Now</span>
              <span className="text-xs text-gray-400">5-minute setup</span>
            </a>

            <a
              href="#implementations"
              className="flex flex-col items-center justify-center bg-purple-600/30 hover:bg-purple-600/50 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 group"
            >
              <RocketLaunchIcon className="h-8 w-8 text-purple-300 mb-2 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-sm">View Use Cases</span>
              <span className="text-xs text-gray-400">9 implementations</span>
            </a>

            <a
              href="https://nisprotocol.organicaai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center bg-green-600/30 hover:bg-green-600/50 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 group"
            >
              <BeakerIcon className="h-8 w-8 text-green-300 mb-2 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-sm">Read Docs</span>
              <span className="text-xs text-gray-400">Full documentation</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NISQuickOverview;
