'use client';
import { motion } from 'motion/react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
              Initiate
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Protocol.</span>
            </h2>
            <p className="text-gray-400 font-light text-sm max-w-md mx-auto md:mx-0 tracking-wide leading-relaxed">
              Ready to build the future? Connect with our AI core for quotations and project initiations.
            </p>
          </motion.div>
        </div>

        <div className="flex-1 w-full relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/[0.03] border border-white/10 rounded-xl p-8 backdrop-blur-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-2 text-[8px] text-white/20 font-mono">COM_HUB_ONLINE</div>
            
            <h3 className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-6">Communication Hub</h3>
            
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <span className="text-[9px] text-gray-500 uppercase tracking-tighter">Secure Lines</span>
                <a href="https://wa.me/260573161333" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <Phone size={14} className="text-purple-400" />
                    <span className="text-xs font-mono text-white">+260 573161333</span>
                  </div>
                  <ExternalLink size={12} className="text-gray-600" />
                </a>
                <a href="https://wa.me/260770591785" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <Phone size={14} className="text-purple-400" />
                    <span className="text-xs font-mono text-white">+260 770591785</span>
                  </div>
                  <ExternalLink size={12} className="text-gray-600" />
                </a>
              </div>

              <div className="flex flex-col gap-2 pt-4 border-t border-white/5">
                <span className="text-[9px] text-gray-500 uppercase tracking-tighter">Network Channels</span>
                {[
                  { email: 'info@simatech.uk', tag: 'GENERAL' },
                  { email: 'marographix@simatech.uk', tag: 'DESIGN' },
                  { email: 'silentmatrix@simatech.uk', tag: 'DEV' }
                ].map((item) => (
                  <a key={item.email} href={`mailto:${item.email}`} className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <Mail size={14} className="text-blue-400" />
                      <span className="text-xs text-white">{item.email}</span>
                    </div>
                    <span className="text-[9px] font-mono text-gray-500 uppercase">{item.tag}</span>
                  </a>
                ))}
              </div>

              <div className="pt-4 mt-auto border-t border-white/5">
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[10px] cursor-pointer hover:bg-purple-500/20 text-white transition-colors">IG</div>
                  <div className="h-8 w-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[10px] cursor-pointer hover:bg-purple-500/20 text-white transition-colors">FB</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
