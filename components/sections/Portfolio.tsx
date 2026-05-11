'use client';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Aura Sync',
    category: 'APP DEV',
    image: 'https://picsum.photos/seed/aura/800/600',
    color: '#34d399' // Emerald
  },
  {
    title: 'Neon Protocol',
    category: 'WEB GL',
    image: 'https://picsum.photos/seed/neon/800/600',
    color: '#a855f7' // Purple
  },
  {
    title: 'Vektor Core',
    category: 'BRANDING',
    image: 'https://picsum.photos/seed/vektor/800/600',
    color: '#60a5fa' // Blue
  },
  {
    title: 'Synth Wave',
    category: 'MOTION',
    image: 'https://picsum.photos/seed/synth/800/600',
    color: '#ec4899' // Pink
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[10px] font-bold tracking-widest text-blue-400 uppercase mb-4">Visual Database</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Recent<br/>Deployments</h3>
          </motion.div>
          
          <motion.a 
            href="#contact"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pb-2 border-b border-white/20 hover:border-purple-400 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors mt-8 md:mt-0 flex items-center gap-2"
          >
            Access Full Archive <ArrowUpRight size={14} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`group relative rounded-xl overflow-hidden bg-white/[0.03] border border-white/10 backdrop-blur-xl aspect-[16/9] ${i === 1 || i === 2 ? 'md:-translate-y-8' : ''}`}
            >
              <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-700 group-hover:opacity-20" />
              
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100"
              />
              
              <div className="absolute top-0 right-0 p-3 z-20">
                <div className="text-[8px] text-white/50 font-mono">SYS_FILE_{i + 1}</div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-20 p-6 flex flex-col pointer-events-none">
                 <div className="flex items-center gap-3 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.color }} />
                    <span className="text-[10px] font-bold tracking-widest uppercase text-white/70">
                      {project.category}
                    </span>
                 </div>
                 <h4 className="text-2xl font-black uppercase text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                   {project.title}
                 </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
