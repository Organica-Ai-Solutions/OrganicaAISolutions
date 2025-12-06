import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

function Footer() {
  return (
    <footer className="relative bg-white border-t">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B84F3]/5 to-[#FF3D90]/5" />
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <motion.div {...fadeIn} className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] bg-clip-text text-transparent">
              Organica AI Solutions
            </h3>
            <p className="text-gray-600 text-sm">
              Empowering businesses with innovative technology solutions
            </p>
          </motion.div>
          
          <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[#0B84F3] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-[#0B84F3] transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-[#0B84F3] transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 hover:text-[#0B84F3] transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-[#0B84F3] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] bg-clip-text text-transparent">
              Projects
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/projects" className="text-gray-600 hover:text-[#0B84F3] transition-colors text-sm">
                  All Projects
                </Link>
              </li>
              <li>
                <Link to="/projects/nis-protocol" className="text-gray-600 hover:text-[#0B84F3] transition-colors text-sm">
                  NIS Protocol
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] bg-clip-text text-transparent">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-[#0B84F3] transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-[#0B84F3] transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-gray-600 hover:text-[#0B84F3] transition-colors text-sm">
                  Legal Information
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] bg-clip-text text-transparent">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-[#0B84F3] transition-colors">1438 N7th st.</li>
              <li className="hover:text-[#0B84F3] transition-colors">Philadelphia PA0, 19122</li>
              <li className="hover:text-[#0B84F3] transition-colors">USA</li>
              <li>
                <a 
                  href="tel:+1-215-888-8748" 
                  className="hover:text-[#0B84F3] transition-colors"
                >
                  +1-215-888-8748
                </a>
              </li>
              <li>
                <a 
                  href="mailto:diego.torres@organicaai.com" 
                  className="hover:text-[#0B84F3] transition-colors"
                >
                  diego.torres@organicaai.com
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div {...fadeIn} transition={{ delay: 0.5 }}>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] bg-clip-text text-transparent">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/organica-ai-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#0B84F3] transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/organicaai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#0B84F3] transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://twitter.com/organicaai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#0B84F3] transition-colors"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          {...fadeIn} 
          transition={{ delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Organica AI Solutions. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer; 