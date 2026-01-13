import React from 'react';
import { motion } from 'framer-motion';

const EmotionalDimensionGauge = ({ dimension }) => {
  const percentage = 50; // Visual representation at mid-range

  return (
    <div className="bg-slate-800/50 p-4 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-bold text-blue-300 flex items-center">
          <span className="mr-2">{dimension.icon}</span>
          {dimension.name}
        </h4>
        <span className="text-xs bg-purple-600/30 px-2 py-1 rounded">{dimension.value}</span>
      </div>
      <p className="text-gray-300 text-sm mb-3">{dimension.description}</p>

      {/* Visual Gauge */}
      <div className="relative w-full h-2 bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        />
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>0.0</span>
        <span>1.0</span>
      </div>
    </div>
  );
};

const NISPhilosophySection = ({ fadeIn }) => {
  const emotionalDimensions = [
    { name: 'Suspicion', value: '0.0-1.0', description: 'Validation threshold and risk assessment', icon: '🔍' },
    { name: 'Urgency', value: '0.0-1.0', description: 'Processing priority and time sensitivity', icon: '⚡' },
    { name: 'Confidence', value: '0.0-1.0', description: 'Decision boldness and certainty', icon: '💪' },
    { name: 'Interest', value: '0.0-1.0', description: 'Attention focus and exploration drive', icon: '👁️' },
    { name: 'Systematicity', value: '0.0-1.0', description: 'Learning rate and methodical approach', icon: '📊' }
  ];

  return (
    <motion.div {...fadeIn} className="container mx-auto px-4 py-16" id="philosophy">
      <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-500/30">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🧠 NIS Philosophy</h2>
          <p className="text-xl text-gray-300 italic">"Estar consciente de ser consciente"</p>
          <p className="text-lg text-gray-400">Being aware of being aware</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-3">💭</span>
              Core Principles
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-300 mb-2">Emotional Weighting</h4>
                <p className="text-gray-300 text-sm">Limbic-inspired salience tagging influences memory consolidation and decision-making thresholds</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <h4 className="font-bold text-purple-300 mb-2">Recursive Self-Observation</h4>
                <p className="text-gray-300 text-sm">Systems actively monitor their own operations, creating meta-awareness and introspection capabilities</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <h4 className="font-bold text-pink-300 mb-2">Multi-Framework Ethics</h4>
                <p className="text-gray-300 text-sm">Balanced ethical reasoning across utilitarian, deontological, virtue, care-based, and rights-based frameworks</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-3">🎚️</span>
              5 Emotional Dimensions
            </h3>
            <div className="space-y-3">
              {emotionalDimensions.map((dimension) => (
                <EmotionalDimensionGauge key={dimension.name} dimension={dimension} />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6">
          <h4 className="font-bold text-blue-300 mb-3 text-lg">🔬 Honest Assessment</h4>
          <p className="text-gray-300 mb-4">
            NIS Protocol implements <strong>computational analogs</strong> to brain structures - not actual consciousness or sentience:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
            <li><strong>Emotional states</strong> are computational proxies that influence decision thresholds</li>
            <li><strong>Self-observation</strong> is operation logging with introspective analysis</li>
            <li><strong>Meta-awareness</strong> is recursive monitoring, not subjective experience</li>
            <li><strong>Memory weighting</strong> uses salience tags, not genuine emotional significance</li>
          </ul>
          <p className="text-gray-400 text-sm mt-4 italic">
            This is good engineering inspired by neuroscience, not breakthrough AGI or consciousness.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default NISPhilosophySection;
