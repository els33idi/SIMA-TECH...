'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden border-t border-b border-white/5 bg-black/20">
      <div className="absolute inset-0 z-0 flex flex-col justify-center overflow-hidden opacity-5 pointer-events-none select-none">
        <motion.div style={{ x: x1 }} className="text-[12rem] font-black uppercase tracking-tighter whitespace-nowrap text-white">
          INNOVATE TRANSFORM ELEVATE
        </motion.div>
        <motion.div style={{ x: x2, WebkitTextStroke: '2px white', color: 'transparent' }} className="text-[12rem] font-black uppercase tracking-tighter whitespace-nowrap text-white">
          FUTURE SYSTEM PROTOCOL
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[10px] tracking-widest text-purple-400 uppercase mb-4 font-bold">System Identity</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">
              We Build
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Universes.</span>
            </h3>
            <p className="text-gray-400 font-light text-sm mb-6 leading-relaxed tracking-wide">
              We are not just a development agency. We are architects of the digital frontier. SIMA TECH builds ultra-premium, cinematic experiences that push the boundaries of what is possible on the web and mobile devices.
            </p>
            <p className="text-gray-400 font-light text-sm leading-relaxed tracking-wide">
              Our code acts as the DNA for next-generation platforms, merging high-end aesthetic design with mercilessly optimized performance.
            </p>
          </motion.div>
        </div>

        <div className="flex-1 w-full grid grid-cols-2 gap-4">
          <motion.div 
            className="bg-white/[0.03] border border-white/10 rounded-xl p-6 backdrop-blur-xl flex flex-col items-center justify-center text-center aspect-square"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-4xl font-mono text-white tracking-widest font-light mb-2">99.9<span className="text-sm text-blue-400">%</span></div>
            <div className="text-[9px] font-bold tracking-widest text-gray-500 uppercase">System Uptime</div>
          </motion.div>

          <motion.div 
            className="bg-white/[0.03] border border-white/10 rounded-xl p-6 backdrop-blur-xl flex flex-col items-center justify-center text-center aspect-square"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-4xl font-mono text-white tracking-widest font-light mb-2">2.4<span className="text-sm text-purple-400">pb</span></div>
            <div className="text-[9px] font-bold tracking-widest text-gray-500 uppercase">Data Throughput</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
