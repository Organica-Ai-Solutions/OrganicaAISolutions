import React from 'react';

const NISProtocol = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-green-800 mb-6">Neuro-Inspired System Protocol</h1>
        <p className="text-lg text-gray-700 mb-8">
          A biologically inspired framework for intelligent multi-agent systems
        </p>
        
        <div className="flex justify-center mb-10">
          <img 
            src="/images/nis-protocol/nis-protocol-logo.png" 
            alt="NIS Protocol Logo"
            className="max-w-full h-auto rounded-lg shadow-lg" 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">About the Protocol</h2>
            <p className="text-gray-700">
              The Neuro-Inspired System Protocol integrates perception, memory, emotional weighting, 
              reasoning, and action into a cohesive architecture, enabling more adaptive and naturally 
              intelligent systems.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Layered Cognitive Architecture</li>
              <li>Emotional State System</li>
              <li>Memory Integration</li>
              <li>Standardized Messaging</li>
              <li>Biologically Inspired Learning</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <a 
            href="https://organica-ai-solutions.github.io/NIS_Protocol/docs/NIS_Protocol_Whitepaper.html" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore the Full Documentation
          </a>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">Protocol Architecture</h2>
          <div className="flex justify-center">
            <img 
              src="/images/nis-protocol/diagram.png" 
              alt="NIS Protocol Architecture" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">Emotional State System</h2>
          <div className="flex justify-center">
            <img 
              src="/images/nis-protocol/heatmap.png" 
              alt="NIS Protocol Emotional State Heatmap" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">Application Examples</h2>
          <div className="flex justify-center">
            <img 
              src="/images/nis-protocol/usesExamples.png" 
              alt="NIS Protocol Use Examples" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        <div className="mb-12 text-center">
          <a 
            href="https://github.com/Organica-AI-Solutions/NIS_Protocol" 
            className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg transition duration-300 mr-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
          <a 
            href="/docs/nis-protocol/NIS_Protocol_Whitepaper.html" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Whitepaper
          </a>
        </div>
      </div>
    </div>
  );
};

export default NISProtocol;
