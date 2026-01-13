import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

const NISComparison = ({ fadeIn }) => {
  const comparisonData = [
    {
      feature: 'Emotional Weighting System',
      nis: true,
      traditional: false,
      description: 'Salience tagging influences decisions and memory'
    },
    {
      feature: 'Physics Validation (PINN)',
      nis: true,
      traditional: false,
      description: 'Real PDE solving for constraint checking'
    },
    {
      feature: 'Meta-Cognitive Self-Observation',
      nis: true,
      traditional: false,
      description: 'Recursive monitoring of own operations'
    },
    {
      feature: '10-Phase Consciousness Pipeline',
      nis: true,
      traditional: false,
      description: 'Complete cognitive architecture'
    },
    {
      feature: 'Multi-Framework Ethics',
      nis: true,
      traditional: 'Partial',
      description: '5 ethical frameworks vs single approach'
    },
    {
      feature: 'Multi-Protocol Support',
      nis: '6 protocols',
      traditional: '1-2 protocols',
      description: 'MCP, A2A, ACP, S2A, CAN, OBD-II'
    },
    {
      feature: 'LLM Provider Flexibility',
      nis: '6 providers',
      traditional: '1-2 providers',
      description: 'OpenAI, Anthropic, Google, DeepSeek, NVIDIA, BitNet'
    },
    {
      feature: 'Robotics Integration',
      nis: 'NASA-grade TMR',
      traditional: 'Basic',
      description: 'Triple Modular Redundancy'
    },
    {
      feature: 'Production Verification',
      nis: '100%',
      traditional: 'Varies',
      description: '393 endpoints fully verified'
    }
  ];

  return (
    <motion.div {...fadeIn} className="container mx-auto px-4 py-16" id="comparison">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">📊 NIS vs Traditional AI Frameworks</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          See how NIS Protocol compares to traditional AI orchestration frameworks
        </p>
      </div>

      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/30">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-900 to-purple-900">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-white">Feature</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-white">NIS Protocol</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-white">Traditional AI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {comparisonData.map((row, index) => (
                <tr key={index} className="hover:bg-slate-700/30 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-semibold text-white mb-1">{row.feature}</div>
                      <div className="text-xs text-gray-400">{row.description}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {typeof row.nis === 'boolean' ? (
                      row.nis ? (
                        <CheckIcon className="h-6 w-6 text-green-400 mx-auto" />
                      ) : (
                        <XMarkIcon className="h-6 w-6 text-red-400 mx-auto" />
                      )
                    ) : (
                      <span className="text-green-400 font-semibold">{row.nis}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {typeof row.traditional === 'boolean' ? (
                      row.traditional ? (
                        <CheckIcon className="h-6 w-6 text-green-400 mx-auto" />
                      ) : (
                        <XMarkIcon className="h-6 w-6 text-red-400 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-400 font-semibold">{row.traditional}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-blue-900/30 border-t border-blue-500/30 p-6">
          <p className="text-sm text-gray-300 text-center">
            <strong>Note:</strong> Comparison based on typical traditional AI frameworks. Individual frameworks may vary.
            NIS Protocol is designed for enterprise production deployments with safety-critical requirements.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default NISComparison;
