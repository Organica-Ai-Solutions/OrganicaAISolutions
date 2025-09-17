import React from 'react';
import { motion } from 'framer-motion';
import { 
  CloudArrowUpIcon, 
  CpuChipIcon,
} from '@heroicons/react/24/outline';

const CloudPartnersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-base font-semibold leading-7 text-transparent bg-clip-text bg-gradient-to-r from-[#0B84F3] to-[#FF3D90]">Cloud + Compute Partners</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Scaling NIS Protocol with Enterprise Infrastructure
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Organica AI is working with AWS and NVIDIA to scale the NIS Protocol with production-grade cloud infrastructure and next-generation GPU acceleration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* AWS Partnership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <CloudArrowUpIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="ml-4 text-2xl font-bold text-gray-900">AWS Migration</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-xl p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Current Status</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Statement of Work (SOW) submitted and under review with AWS partner Cloudelligent for migration of NIS Protocol v3.x</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Architecture includes ECS Fargate, MSK (Kafka), ElastiCache (Redis), and GPU-optimized EC2 instances</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>AWS MAP/Activate environment for elastic scaling of KAN + PINN workloads</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Current Achievements</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>AWS SOW accepted for review; funding credits in progress</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Architecture validated with AWS Solutions Architects</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* NVIDIA Partnership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-100 rounded-xl">
                <CpuChipIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="ml-4 text-2xl font-bold text-gray-900">NVIDIA Engagement</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h4 className="font-semibold text-green-800 mb-2">Current Status</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Approved in NVIDIA Inception / Connect program</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Access to DGX Cloud Lepton and NeMo/Agent Toolkit for GPU-accelerated model training</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Exploring integration of Nemotron and BitNet models within the NIS Protocol</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-xl p-4">
                <h4 className="font-semibold text-green-800 mb-2">Current Achievements</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Recognized as an NVIDIA Connect startup partner, unlocking early access to GPU resources</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Planning joint technical sessions to optimize multi-agent inference on NVIDIA hardware</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 italic">
            These collaborations give us elastic cloud capacity and cutting-edge GPU performance while maintaining full control of our IP.
          </p>
          <div className="mt-8">
            <a
              href="/projects"
              className="inline-flex items-center rounded-md bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              Explore Our Projects
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CloudPartnersSection;
