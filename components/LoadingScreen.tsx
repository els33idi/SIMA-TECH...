'use client';

import { motion } from 'motion/react';
import Logo from './Logo';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020204]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 1, ease: 'easeInOut' }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
        animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="relative"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-[#8A2BE2] blur-[80px] rounded-full"
        />
        <Logo className="w-64 md:w-96 relative z-10" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-12 w-64 h-[1px] bg-white/10 relative overflow-hidden"
      >
        <motion.div
          className="absolute top-0 left-0 bottom-0 bg-blue-400"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 1, duration: 1, ease: 'easeInOut' }}
        />
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="mt-4 font-mono text-[9px] tracking-[0.3em] uppercase text-gray-400"
      >
        Loading System Resources...
      </motion.p>
    </motion.div>
  );
}
