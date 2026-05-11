'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Matrix', href: '#services' },
  { name: 'Solutions', href: '#portfolio' },
  { name: 'Interface', href: '#reviews' },
  { name: 'Nexus', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/40 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-4 group relative z-50">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-sm shadow-[0_0_15px_rgba(168,85,247,0.5)] flex items-center justify-center font-bold text-xs tracking-tighter text-white">ST</div>
            <span className="hidden md:block text-xl font-bold tracking-[0.2em] uppercase italic bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">SIMA TECH</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8 text-[10px] uppercase tracking-widest font-semibold text-gray-400">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors ${idx === 0 ? "text-purple-400 border-b border-purple-500 pb-1" : "hover:text-white"}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-6 ml-4">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] font-mono text-green-500">SYSTEM: OPERATIONAL</span>
              <a
                href="#contact"
                className="px-4 py-1.5 border border-purple-500/50 bg-purple-500/10 text-[10px] uppercase tracking-widest hover:bg-purple-500/20 text-white transition-colors"
              >
                Initialize Quote
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#020204]/95 backdrop-blur-2xl px-6 pt-32 flex flex-col"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display uppercase font-bold tracking-wider text-gray-300 hover:text-white py-4 border-b border-white/5"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 text-center px-4 py-3 border border-purple-500/50 bg-purple-500/10 text-xs uppercase tracking-widest hover:bg-purple-500/20 text-white"
            >
              Initialize Quote
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
