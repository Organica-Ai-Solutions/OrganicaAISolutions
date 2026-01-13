import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const NISNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { id: 'overview', label: '⚡ Overview', icon: '⚡' },
    { id: 'philosophy', label: '🧠 Philosophy', icon: '🧠' },
    { id: 'framework', label: '🎯 Framework', icon: '🎯' },
    { id: 'pipeline', label: '🔄 Pipeline', icon: '🔄' },
    { id: 'capabilities', label: '⚡ Capabilities', icon: '⚡' },
    { id: 'specs', label: '📊 Specifications', icon: '📊' },
    { id: 'implementations', label: '🚀 Implementations', icon: '🚀' },
    { id: 'comparison', label: '📊 Comparison', icon: '📊' },
    { id: 'quickstart', label: '🚀 Quick Start', icon: '🚀' },
    { id: 'cta', label: '💬 Contact', icon: '💬' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop - 80;
      window.scrollTo({ top, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-24 right-4 z-50 lg:hidden bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
        aria-label="Toggle navigation"
      >
        {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {(isOpen || window.innerWidth >= 1024) && (
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed top-24 right-4 z-40 w-64 bg-slate-900/95 backdrop-blur-sm rounded-xl border border-blue-500/30 shadow-2xl overflow-hidden hidden lg:block"
          >
            <div className="p-4">
              <h3 className="text-sm font-bold text-gray-400 uppercase mb-4">Navigation</h3>
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                      activeSection === item.id
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span className="text-sm">{item.label.replace(item.icon + ' ', '')}</span>
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: 'spring', damping: 20 }}
              className="absolute top-24 right-4 w-64 bg-slate-900/95 backdrop-blur-sm rounded-xl border border-blue-500/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4">
                <h3 className="text-sm font-bold text-gray-400 uppercase mb-4">Navigation</h3>
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                        activeSection === item.id
                          ? 'bg-blue-600 text-white font-semibold'
                          : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span className="text-sm">{item.label.replace(item.icon + ' ', '')}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NISNavigation;
