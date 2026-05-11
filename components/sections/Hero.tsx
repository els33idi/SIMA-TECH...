'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import dynamic from 'next/dynamic';

const InteractiveScene = dynamic(() => import('../InteractiveScene'), { ssr: false });

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      id="home"
    >
      <InteractiveScene />

      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center pt-24"
      >
        <div className="relative w-80 h-80 mb-12">
          <div className="absolute inset-0 rounded-full border border-purple-500/20 scale-150 animate-[pulse_4s_infinite]"></div>
          <div className="absolute inset-0 rounded-full border border-blue-500/30 scale-125"></div>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-2xl border border-white/10 flex items-center justify-center shadow-[0_0_100px_rgba(168,85,247,0.3)]">
                <div className="text-6xl font-black text-white italic tracking-tighter opacity-80 select-none">
                  SIMA
                </div>
             </div>
          </div>
          {/* Floating UI Panel */}
          <div className="absolute -top-10 -right-20 w-40 p-3 bg-black/60 border border-white/20 backdrop-blur-lg rounded text-[9px] uppercase tracking-tighter text-left">
            <div className="text-blue-400 mb-1 tracking-widest">Render Output</div>
            <div className="h-1 w-full bg-white/10 mb-2"><div className="h-full w-[88%] bg-blue-400"></div></div>
            <div className="grid grid-cols-2 gap-1 opacity-60 text-white">
              <span>LATENCY: 4MS</span>
              <span>GPU: 94%</span>
            </div>
          </div>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] uppercase leading-[0.85]"
        >
          Billion Dollar
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Intelligence</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-sm md:text-base text-gray-400 max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
        >
          Pioneering the next evolution of human-computer interaction through advanced neural frameworks and cinematic digital environments.
        </motion.p>
      </motion.div>

      {/* Floating UI Elements Parallax */}
      <motion.div style={{ y: y2 }} className="absolute z-20 inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-[10%] w-48 h-24 bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-xl flex items-center p-4 rotate-[8deg] [animation:float_8s_ease-in-out_infinite]">
          <div className="w-10 h-10 rounded-full border border-blue-400 border-t-transparent animate-spin" />
          <div className="ml-4">
            <div className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">AI Core</div>
            <div className="text-white font-bold tracking-widest uppercase text-xs mt-1">Optimized</div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020204] to-transparent z-10" />
    </section>
  );
}
