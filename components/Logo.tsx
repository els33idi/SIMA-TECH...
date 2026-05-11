export default function Logo({ className = "w-32", glow = false }: { className?: string, glow?: boolean }) {
  return (
    <div className={`relative ${className} flex flex-col items-center justify-center select-none`}>
      {glow && (
        <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full" />
      )}
      <svg
        viewBox="0 0 400 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-lg"
      >
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <g fill="white" className="duration-300 transition-all hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
          <path d="M40 70 C 40 85, 60 85, 80 85 C 95 85, 100 78, 100 70 C 100 55, 60 55, 60 40 C 60 25, 80 25, 95 25 L 95 35 C 80 35, 75 38, 75 45 C 75 58, 115 55, 115 75 C 115 95, 80 95, 60 95 C 40 95, 25 85, 25 70 Z" />
          <rect x="130" y="25" width="15" height="70" />
          <path d="M 170 95 L 170 25 L 205 60 L 240 25 L 240 95 L 225 95 L 225 45 L 205 70 L 185 45 L 185 95 Z" />
          
          <path d="M 285 25 L 260 95 L 275 95 L 285 65 L 315 65 L 325 95 L 340 95 L 315 25 Z M 290 52 L 300 28 L 310 52 Z" />
          <path d="M 310 65 L 345 40" stroke="white" strokeWidth="6" className="origin-center hover:stroke-[#00FFFF] transition-colors" />
        </g>

        <g fill="white" className="font-mono" transform="translate(68, 115) scale(0.6)">
          <rect x="0" y="0" width="30" height="6" />
          <rect x="12" y="0" width="6" height="28" />
          
          <path d="M 70 0 L 100 0 L 100 6 L 76 6 L 76 11 L 95 11 L 95 17 L 76 17 L 76 22 L 100 22 L 100 28 L 70 28 Z" />
          
          <path d="M 160 28 C 145 28, 140 20, 140 14 C 140 8, 145 0, 160 0 C 170 0, 175 4, 180 8 L 175 12 C 170 8, 165 5, 160 5 C 150 5, 147 10, 147 14 C 147 18, 150 23, 160 23 C 165 23, 170 20, 175 16 L 180 20 C 175 25, 170 28, 160 28 Z" />
          
          <rect x="210" y="0" width="6" height="28" />
          <rect x="234" y="0" width="6" height="28" />
          <rect x="210" y="11" width="30" height="6" />
        </g>
      </svg>
    </div>
  );
}
