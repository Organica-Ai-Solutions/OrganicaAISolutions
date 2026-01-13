import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowTopRightOnSquareIcon,
  CpuChipIcon,
  BeakerIcon,
  BoltIcon,
  ShieldCheckIcon,
  CircleStackIcon,
  RocketLaunchIcon,
  ServerIcon,
  LightBulbIcon,
  CogIcon,
  GlobeAltIcon,
  ChartBarIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';

// Import new modular components
import NISQuickOverview from '../components/nis/NISQuickOverview';
import NISPhilosophySection from '../components/nis/NISPhilosophySection';
import NISImplementations from '../components/nis/NISImplementations';
import NISComparison from '../components/nis/NISComparison';
import NISQuickstart from '../components/nis/NISQuickstart';
import NISNavigation from '../components/nis/NISNavigation';

const NISProtocol = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const consciousnessPipeline = [
    { name: 'Genesis', icon: LightBulbIcon, description: 'Idea generation' },
    { name: 'Plan', icon: CogIcon, description: 'Strategic planning' },
    { name: 'Collective', icon: GlobeAltIcon, description: 'Multi-agent consensus' },
    { name: 'Multipath', icon: ChartBarIcon, description: 'Parallel reasoning' },
    { name: 'Ethics', icon: ShieldCheckIcon, description: 'Ethical evaluation' },
    { name: 'Embodiment', icon: RocketLaunchIcon, description: 'Physical integration' },
    { name: 'Evolution', icon: BoltIcon, description: 'Parameter optimization' },
    { name: 'Reflection', icon: BeakerIcon, description: 'Self-assessment' },
    { name: 'Marketplace', icon: ServerIcon, description: 'Agent discovery' },
    { name: 'Debug', icon: CodeBracketIcon, description: 'Diagnostic introspection' }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 min-h-screen text-white">
      {/* Navigation Sidebar */}
      <NISNavigation />

      {/* Hero Section */}
      <div className="relative overflow-hidden" id="overview">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <motion.div {...fadeIn} className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="px-4 py-2 bg-blue-600/30 backdrop-blur-sm rounded-full text-sm font-semibold">
                v4.0.5 • January 2026
              </span>
              <span className="px-4 py-2 bg-green-600/30 backdrop-blur-sm rounded-full text-sm font-semibold">
                Production Ready
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              NIS Protocol v4.0.5
            </h1>

            <p className="text-2xl md:text-3xl text-blue-200 mb-4 font-light italic">
              "Estar consciente de ser consciente"
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Being aware of being aware
            </p>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
              Enterprise AI Framework & Operating System Template
            </p>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              A neuro-inspired, production-ready framework for building specialized AI applications
              across automotive, aerospace, smart cities, space exploration, and enterprise systems.
            </p>

            <div className="flex justify-center mb-10">
              <img
                src="/images/nis-protocol/nis-protocol-logo.png"
                alt="NIS Protocol Logo"
                className="max-w-sm h-auto rounded-lg shadow-2xl"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/Organica-AI-Solutions/NIS_Protocol"
                className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>GitHub Repository</span>
                <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
              </a>
              <a
                href="https://nisprotocol.organicaai.com/"
                className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Official Documentation</span>
                <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* R&D Notice */}
      <div className="bg-yellow-500/10 border-l-4 border-yellow-500 py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm text-yellow-200">
            <strong>⚠️ R&D Notice:</strong> NIS Protocol v4.0.5 is experimental technology from an early-stage startup.
            While production-tested with 393 verified endpoints and 99.9% uptime target, features may evolve as research advances.
          </p>
        </div>
      </div>

      {/* Quick Overview */}
      <NISQuickOverview fadeIn={fadeIn} />

      {/* NIS Philosophy Section */}
      <NISPhilosophySection fadeIn={fadeIn} />

      {/* Framework Template Section */}
      <motion.div {...fadeIn} className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 py-16" id="framework">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🎯 NIS as a Framework Template</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              NIS Protocol is not a single product - it's a comprehensive framework template
              for building specialized AI systems across multiple domains.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold mb-3">Shared Core</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• 10-phase consciousness pipeline</li>
                <li>• Emotional weighting system (5 dimensions)</li>
                <li>• Physics validation (Laplace→KAN→PINN)</li>
                <li>• Multi-LLM orchestration (6 providers)</li>
                <li>• Protocol bridges (MCP, A2A, ACP, S2A)</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-3">Customizable Components</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Domain-specific agents</li>
                <li>• Hardware integrations</li>
                <li>• Specialized sensors</li>
                <li>• Custom protocols (CAN, OBD-II)</li>
                <li>• Industry-specific workflows</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-pink-500/30">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold mb-3">9+ Implementations</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• NIS-AUTO (Automotive)</li>
                <li>• NIS-DRONE (Aerospace)</li>
                <li>• NIS-CITY (Smart Cities)</li>
                <li>• NeuroLinux (Edge AI OS)</li>
                <li>• NIS-HUB (Coordination)</li>
                <li>• + 4 more active implementations</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 10-Phase Consciousness Pipeline */}
      <motion.div {...fadeIn} className="container mx-auto px-4 py-16" id="pipeline">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🔄 10-Phase Consciousness Pipeline</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A complete cognitive architecture from idea generation to physical embodiment
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {consciousnessPipeline.map((phase, index) => (
            <motion.div
              key={phase.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <phase.icon className="h-8 w-8 text-blue-400 mb-3 mx-auto" />
              <h3 className="font-bold text-center mb-2">{phase.name}</h3>
              <p className="text-xs text-gray-400 text-center">{phase.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Core Capabilities */}
      <motion.div {...fadeIn} className="bg-gradient-to-r from-slate-900/50 to-blue-900/50 py-16" id="capabilities">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">⚡ Core Capabilities</h2>
            <p className="text-xl text-gray-300">Enterprise AI features across all layers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
              <ServerIcon className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Scale & Architecture</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• <strong>393 API Endpoints</strong> (100% verified)</li>
                <li>• <strong>24 Modular Route Modules</strong></li>
                <li>• <strong>6 LLM Providers</strong></li>
                <li>• <strong>14+ Specialized Agents</strong></li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <CpuChipIcon className="h-10 w-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Consciousness System</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• <strong>10-Phase Pipeline</strong></li>
                <li>• <strong>Meta-Cognitive Processing</strong></li>
                <li>• <strong>5 Emotional Dimensions</strong></li>
                <li>• <strong>Recursive Self-Observation</strong></li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
              <BeakerIcon className="h-10 w-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Physics Pipeline</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• <strong>Laplace Transform</strong> (FFT)</li>
                <li>• <strong>KAN Networks</strong> (Symbolic)</li>
                <li>• <strong>PINN Validation</strong> (5 PDEs)</li>
                <li>• <strong>60-95% Accuracy</strong></li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30">
              <RocketLaunchIcon className="h-10 w-10 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Robotics & Control</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• <strong>FK/IK</strong> (Denavit-Hartenberg)</li>
                <li>• <strong>Trajectory Planning</strong></li>
                <li>• <strong>NASA-Grade TMR</strong></li>
                <li>• <strong>MAVLink/ROS Support</strong></li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-pink-500/30">
              <CircleStackIcon className="h-10 w-10 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Protocols & Integration</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• <strong>MCP</strong> (Anthropic)</li>
                <li>• <strong>A2A</strong> (Google)</li>
                <li>• <strong>ACP</strong> (IBM)</li>
                <li>• <strong>CAN/OBD-II</strong> (Automotive)</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
              <BoltIcon className="h-10 w-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Multimodal AI</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• <strong>Vision</strong> (YOLO, WALDO)</li>
                <li>• <strong>Voice</strong> (TTS, STT)</li>
                <li>• <strong>Research</strong> (ArXiv, web)</li>
                <li>• <strong>Document Processing</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Technical Specifications */}
      <motion.div {...fadeIn} className="container mx-auto px-4 py-16" id="specs">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">📊 Technical Specifications</h2>
          <p className="text-xl text-gray-300">Production-grade metrics</p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">393</div>
              <div className="text-sm text-gray-400">API Endpoints</div>
              <div className="text-xs text-green-400 mt-1">100% Verified</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">24</div>
              <div className="text-sm text-gray-400">Route Modules</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">6</div>
              <div className="text-sm text-gray-400">LLM Providers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">14+</div>
              <div className="text-sm text-gray-400">Specialized Agents</div>
            </div>
          </div>

          <div className="border-t border-gray-700 my-6"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">&lt;50ms</div>
              <div className="text-sm text-gray-400">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-400">Uptime Target</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400 mb-2">5</div>
              <div className="text-sm text-gray-400">Emotional Dimensions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">10</div>
              <div className="text-sm text-gray-400">Consciousness Phases</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Real-World Implementations */}
      <NISImplementations fadeIn={fadeIn} />

      {/* Comparison Table */}
      <NISComparison fadeIn={fadeIn} />

      {/* Quickstart */}
      <NISQuickstart fadeIn={fadeIn} />

      {/* Enhanced CTA Section */}
      <motion.div {...fadeIn} className="container mx-auto px-4 py-16" id="cta">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
          <h3 className="text-4xl font-bold mb-4">Ready to Build with NIS Protocol?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose your next step: Start building, collaborate on research, or explore implementations.
          </p>

          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="font-bold text-lg mb-2">🚀 For Developers</h4>
              <p className="text-sm text-blue-100 mb-4">Clone the repo and start building in 5 minutes</p>
              <a
                href="https://github.com/Organica-AI-Solutions/NIS_Protocol"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 font-bold py-2 px-6 rounded-lg transition duration-300 hover:bg-gray-100"
              >
                Start Building
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="font-bold text-lg mb-2">🔬 For Researchers</h4>
              <p className="text-sm text-blue-100 mb-4">Collaborate on neuro-inspired AI systems</p>
              <a
                href="/contact"
                className="inline-block bg-white text-purple-600 font-bold py-2 px-6 rounded-lg transition duration-300 hover:bg-gray-100"
              >
                Collaborate
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="font-bold text-lg mb-2">📚 For Learners</h4>
              <p className="text-sm text-blue-100 mb-4">Explore 9 real-world implementations</p>
              <a
                href="https://nisprotocol.organicaai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-green-600 font-bold py-2 px-6 rounded-lg transition duration-300 hover:bg-gray-100"
              >
                Read Docs
              </a>
            </div>
          </div>

          <p className="text-sm text-blue-200">
            Questions? Email <a href="mailto:contact@organicaai.com" className="underline hover:text-white">contact@organicaai.com</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default NISProtocol;
