'use client';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah J.',
    role: 'CEO, Nexus Global',
    text: "SIMA TECH didn't just build us a website; they engineered an immersive digital experience. The cinematic motion put us lightyears ahead of our competitors.",
    rating: 5,
  },
  {
    name: 'David R.',
    role: 'Founder, SynthCorp',
    text: "The app development process was flawless. Apple-level polish is an understatement. Our users are obsessed with the holographic UI touches.",
    rating: 5,
  },
  {
    name: 'Elena M.',
    role: 'Marketing Director, Vektor',
    text: "Their viral marketing strategies and data visualization tools completely transformed our engagement metrics. True cyberpunk visionaries.",
    rating: 5,
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-900/10 to-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
        
        <div className="flex flex-col gap-4 sticky top-32 self-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-[10px] font-bold tracking-widest text-purple-400 uppercase mb-4">User Telemetry</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Client Logs</h3>
            <p className="text-xs text-gray-400 tracking-wide leading-relaxed font-light mt-6 border-l pl-4 border-white/10">
              Verified transmissions from organizational partners integrated into SIMA systems.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`bg-white/[0.03] border border-white/10 rounded-xl p-6 backdrop-blur-xl relative overflow-hidden group flex flex-col ${i === 2 ? 'md:col-span-2' : ''}`}
            >
              <div className="absolute top-0 right-0 p-2 text-[8px] text-white/20 font-mono">LOG_0{i + 1}</div>
              
              <div className="flex gap-1 mb-6 text-purple-400 opacity-60">
                {[...Array(review.rating)].map((_, idx) => (
                  <Star key={idx} size={12} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-sm text-gray-300 font-light leading-relaxed flex-grow italic mb-8">
                "{review.text}"
              </p>
              
              <div className="border-t border-white/5 pt-4 mt-auto flex justify-between items-end">
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-widest">{review.name}</div>
                  <div className="text-[9px] text-gray-500 font-mono uppercase tracking-widest">{review.role}</div>
                </div>
                <div className="text-[10px] font-mono text-blue-400">100% SYNC</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
