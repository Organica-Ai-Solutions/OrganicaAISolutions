import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ClipboardDocumentIcon, CheckIcon } from '@heroicons/react/24/outline';

const CodeBlock = ({ code, language = 'bash' }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-slate-900/50 rounded-lg overflow-hidden border border-slate-700">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800/50 border-b border-slate-700">
        <span className="text-xs text-gray-400 font-mono">{language}</span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 text-xs text-gray-400 hover:text-gray-200 transition-colors"
        >
          {copied ? (
            <>
              <CheckIcon className="h-4 w-4 text-green-400" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <ClipboardDocumentIcon className="h-4 w-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-gray-300 font-mono">{code}</code>
      </pre>
    </div>
  );
};

const NISQuickstart = ({ fadeIn }) => {
  const dockerCode = `# Clone the repository
git clone https://github.com/Organica-Ai-Solutions/NIS_Protocol.git
cd NIS_Protocol

# Configure environment
cp .env.example .env
# Edit .env with your API keys

# Start with Docker
./start.sh

# Access the system
# API:     http://localhost:8000
# Docs:    http://localhost:8000/docs
# Console: http://localhost:8000/console`;

  const pythonCode = `import requests

# Initialize NIS Protocol client
BASE_URL = "http://localhost:8000"

# Example: Generate ideas with consciousness
response = requests.post(
    f"{BASE_URL}/v4/consciousness/genesis",
    json={
        "prompt": "Design a sustainable energy system",
        "emotional_state": {
            "interest": 0.9,
            "systematicity": 0.8
        }
    }
)

ideas = response.json()
print(f"Generated {len(ideas['ideas'])} ideas")`;

  const curlCode = `# Quick API test
curl -X POST "http://localhost:8000/v4/consciousness/genesis" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Design a sustainable energy system",
    "emotional_state": {"interest": 0.9}
  }'`;

  return (
    <motion.div {...fadeIn} className="container mx-auto px-4 py-16" id="quickstart">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">🚀 Quick Start Guide</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Get NIS Protocol running in 5 minutes
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <span className="text-3xl mr-3">1️⃣</span>
            Install with Docker (Recommended)
          </h3>
          <p className="text-gray-300 mb-4">
            The fastest way to get started. Requires Docker 20.10+ and 8GB RAM.
          </p>
          <CodeBlock code={dockerCode} language="bash" />
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <span className="text-3xl mr-3">2️⃣</span>
            Test with Python
          </h3>
          <p className="text-gray-300 mb-4">
            Use the 10-phase consciousness pipeline with emotional weighting.
          </p>
          <CodeBlock code={pythonCode} language="python" />
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <span className="text-3xl mr-3">3️⃣</span>
            Or Test with cURL
          </h3>
          <p className="text-gray-300 mb-4">
            Quick API test without any dependencies.
          </p>
          <CodeBlock code={curlCode} language="bash" />
        </div>

        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-500/30">
          <h3 className="text-xl font-bold mb-3">Next Steps</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">📚 Learn More</h4>
              <ul className="space-y-1 text-gray-300">
                <li>• Read the <a href="https://nisprotocol.organicaai.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">full documentation</a></li>
                <li>• Explore <a href="#implementations" className="text-blue-400 hover:underline">9 real-world implementations</a></li>
                <li>• Check out the <a href="#philosophy" className="text-blue-400 hover:underline">NIS Philosophy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-300 mb-2">🛠️ Build with NIS</h4>
              <ul className="space-y-1 text-gray-300">
                <li>• Use <a href="https://github.com/Organica-Ai-Solutions/NIS-TOOLKIT-SUIT" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">NIS-TOOLKIT-SUIT</a> for dev tools</li>
                <li>• Deploy with <a href="https://github.com/Organica-Ai-Solutions/NIS-HUB" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">NIS-HUB</a> coordination</li>
                <li>• Edge devices with <a href="https://github.com/Organica-Ai-Solutions/NeuroLinux" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">NeuroLinux</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NISQuickstart;
