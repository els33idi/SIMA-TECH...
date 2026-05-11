'use client';
import { motion } from 'motion/react';
import { Smartphone, Globe, PenTool, Video, Share2 } from 'lucide-react';

const services = [
  {
    title: 'App Development',
    category: 'SRV_MOD_01',
    description: 'Next-generation mobile experiences. Immersive 3D interfaces, seamless performance, and Apple-level polish.',
    features: ['Holographic UI', 'Native Performance', 'AAA Polished Animations']
  },
  {
    title: 'Web Architectures',
    category: 'SRV_MOD_02',
    description: 'Billion-dollar cyberpunk web platforms. Complete with WebGL 3D scenes, cinematic motion, and magnetic interactions.',
    features: ['React Three Fiber', 'GSAP Motion', 'Cinematic Reveals']
  },
  {
    title: 'Graphic Engineering',
    category: 'SRV_MOD_03',
    description: 'Ultra-premium brand identities. Floating color palettes, morphing typography, and futuristic aesthetics.',
    features: ['Neon Typography', 'Glassmorphism', 'Brand Identity']
  },
  {
    title: 'AI/ML Integration',
    category: 'SRV_MOD_04',
    description: 'Cinematic motion graphics and visual effects. Engaging trailers and promotional content with Sci-Fi VFX.',
    features: ['Neural Networks', 'Predictive Analysis', 'Workflow Sync']
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Left Rail: Services */}
        <div className="md:w-1/3 flex flex-col gap-4 sticky top-32 self-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/[0.03] border border-white/10 rounded-xl p-6 backdrop-blur-xl relative overflow-hidden group w-full"
          >
            <div className="absolute top-0 right-0 p-2 text-[8px] text-white/20 font-mono">SYS_STATUS: ACTIVE</div>
            <h3 className="text-[11px] font-bold text-purple-400 uppercase tracking-widest mb-6">Core Services</h3>
            <div className="space-y-6">
              {services.map((srv, idx) => (
                <div key={srv.title} className="group cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-light text-white group-hover:text-purple-300 transition-colors">{srv.title}</span>
                    <span className="text-[10px] text-white/30 tracking-widest">0{idx + 1}</span>
                  </div>
                  <div className="h-[1px] w-full bg-white/10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-700 ease-out"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <div className="p-4 border border-dashed border-white/10 rounded bg-white/5">
                <p className="text-[10px] text-gray-400 leading-relaxed italic">"Architecting the future through precision neural processing and ultra-premium interface design."</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Rail: Modules */}
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/[0.03] border border-white/10 rounded-xl p-6 backdrop-blur-xl relative overflow-hidden group flex flex-col hover:border-purple-500/30 transition-colors min-h-[300px]"
            >
              <div className="absolute top-0 right-0 p-2 text-[8px] text-white/20 font-mono">{service.category}</div>
              
              <div className="relative z-10 flex flex-col h-full flex-grow">
                <h4 className="text-xl font-bold uppercase text-white mb-4 tracking-wider mt-4">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-400 font-light mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto border-t border-white/5 pt-4">
                  {service.features.map(f => (
                    <span key={f} className="text-[9px] font-mono text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/10 uppercase tracking-widest">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
