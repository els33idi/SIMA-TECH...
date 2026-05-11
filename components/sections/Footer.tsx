'use client';

export default function Footer() {
  return (
    <footer className="relative z-50 h-10 border-t border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-between px-8 text-[9px] tracking-widest text-gray-500 uppercase">
      <div className="flex gap-8">
        <span className="hidden md:inline">Location: Global Ops</span>
        <span className="hidden md:inline">Protocol: 0x98A1</span>
        <span>SIMA_CORE_VER: 4.2.0</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-purple-400 hidden sm:inline">Connected:</span>
        <span className="text-white font-mono hidden sm:inline">ZAMBIA_NETWORK_TRANS_ENABLED</span>
      </div>
      <div className="text-right">
        © 2024 SIMA TECH.<br className="sm:hidden" /> ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
