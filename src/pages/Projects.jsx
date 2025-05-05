import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-green-800 mb-10 text-center">
          Our Research Projects
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* NIS Protocol Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img 
              src="/images/nis-protocol/diagram.png" 
              alt="NIS Protocol Diagram" 
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-green-800 mb-3">
                Neuro-Inspired System Protocol
              </h2>
              <p className="text-gray-700 mb-4">
                A biologically inspired framework for intelligent multi-agent systems that mimics 
                the structure and function of the human brain.
              </p>
              <Link 
                to="/projects/nis-protocol" 
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Placeholder for future projects */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden opacity-70">
            <div className="bg-gray-100 w-full h-64 flex items-center justify-center">
              <span className="text-2xl text-gray-400">Coming Soon</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-600 mb-3">
                Future Project
              </h2>
              <p className="text-gray-500 mb-4">
                We're constantly developing new innovations in AI. Stay tuned for our next 
                breakthrough project.
              </p>
              <button 
                className="inline-block bg-gray-300 text-gray-600 font-semibold px-5 py-2 rounded-lg cursor-not-allowed"
                disabled
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
