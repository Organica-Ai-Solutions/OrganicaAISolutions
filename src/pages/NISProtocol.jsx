import React from 'react';
import { ArrowTopRightOnSquareIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const NISProtocol = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">NIS Protocol v4.0.2</h1>
        <p className="text-lg text-gray-700 mb-4">
          AI Operating System for Edge Devices, Autonomous Systems, and Smart Infrastructure
        </p>
        <p className="text-sm text-gray-600 mb-8">
          Version: 4.0.2 | Updated: 2025-12-06 | Status: Production Ready with Isaac Robotics & Modular Architecture
        </p>
        
        <div className="flex justify-center mb-10">
          <img 
            src="/images/nis-protocol/nis-protocol-logo.png" 
            alt="NIS Protocol Logo"
            className="max-w-full h-auto rounded-lg shadow-lg" 
          />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-full bg-blue-100">
              <CheckCircleIcon className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold text-blue-800 ml-2">Foundational AI Operating System</h2>
          </div>
          <p className="text-gray-700 mb-4">
            NIS Protocol is a foundational AI operating system and development platform for building specialized AI 
            applications across industries. It provides a modular agent architecture with physics-informed validation, 
            enabling developers to create autonomous systems for automotive, aerospace, smart cities, space exploration, 
            and financial markets.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="text-sm text-blue-800">
              <strong>⚠️ R&D Notice:</strong> NIS Protocol v4.0.2 is experimental technology from an early-stage startup. Features may change. 
              Some components may continue to evolve as our understanding advances.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Core Capabilities</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><span className="font-medium">23+ Modular API Routes</span> - Production-tested architecture</li>
              <li><span className="font-medium">NVIDIA Isaac Integration</span> - Robotics perception, simulation & control</li>
              <li><span className="font-medium">Physics Validation</span> - PINNs for constraint checking</li>
              <li><span className="font-medium">CAN/OBD-II Protocols</span> - Automotive & robotics communication</li>
              <li><span className="font-medium">Full Observability</span> - Metrics, tracing, structured logging</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">New in v4.0.2</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><span className="font-medium">NVIDIA Isaac Robotics</span> - Bridge, Sim, Perception agents</li>
              <li><span className="font-medium">Kafka + Redis Infrastructure</span> - Enterprise messaging & caching</li>
              <li><span className="font-medium">Security (RBAC)</span> - Role-based access control & secrets management</li>
              <li><span className="font-medium">Modular Architecture</span> - Clean separation of concerns</li>
              <li><span className="font-medium">NeuroLinux Ready</span> - Optimized for AI-powered Linux distribution</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Real-World Implementations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-2">NIS-AUTO</h3>
              <p className="text-sm text-gray-700">Production system for gas engine vehicles with real hardware deployment</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-2">NIS-CITY</h3>
              <p className="text-sm text-gray-700">Smart city infrastructure with distributed agent coordination</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-2">NIS-DRONE</h3>
              <p className="text-sm text-gray-700">Hardware-validated autonomous flight systems</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-2">NIS-X</h3>
              <p className="text-sm text-gray-700">NeurIPS Ariel Data Challenge 2025 entry for exoplanet analysis</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-2">AlphaCortex</h3>
              <p className="text-sm text-gray-700">LLM-driven autonomous trading system for financial markets</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-800 mb-2">NeuroLinux</h3>
              <p className="text-sm text-gray-700">AI-powered Linux distribution with NIS Protocol integration</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-bold text-orange-800 mb-2">NIS Hub</h3>
              <p className="text-sm text-gray-700">Central management platform for distributed NIS deployments</p>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">Core Agent Architecture</h2>
          <div className="flex justify-center">
            <img 
              src="/images/nis-protocol/diagram.png" 
              alt="NIS Protocol Architecture" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-blue-700 mb-2">Processing Pipeline</h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-1">
              <li><span className="font-medium">Input Processing</span> - Text, images, sensor data</li>
              <li><span className="font-medium">Signal Processing</span> - Frequency domain analysis</li>
              <li><span className="font-medium">Symbolic Reasoning</span> - Function approximation with KAN networks</li>
              <li><span className="font-medium">Physics Validation</span> - Constraint validation using PINNs</li>
              <li><span className="font-medium">Agent Coordination</span> - Multi-agent decision making</li>
              <li><span className="font-medium">Protocol Integration</span> - MCP, ACP, A2A support</li>
              <li><span className="font-medium">Multimodal Output</span> - Text, images, control signals</li>
              <li><span className="font-medium">Validated Results</span> - Physics-compliant outputs</li>
            </ol>
          </div>
        </div>
        
        <div className="mb-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href="https://github.com/Organica-AI-Solutions/NIS_Protocol" 
              className="flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 px-6 rounded-lg transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub Repository</span>
              <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
            </a>
            <a 
              href="https://nisprotocol.organicaai.com/" 
              className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Official Documentation</span>
              <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
            </a>
          </div>
          
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Interested in Research Collaboration?</h3>
            <p className="text-gray-700 mb-4">
              We're actively seeking research partnerships in neuro-inspired AI systems, physics-informed neural networks, 
              and multi-agent coordination.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Contact Our Research Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NISProtocol;
