export function CtaButtons () {
  return (
    <div className="flex items-center justify-center">
      <a
        href="mailto:organizze.pt@gmail.com"
        className="group relative flex items-center gap-3 px-6 py-3 border border-white/10 hover:border-[#F0632C]/60 bg-white/5 hover:bg-white/10 transition-all duration-500 overflow-hidden rounded-full"
        style={{
          boxShadow: '0 0 40px -10px rgba(255, 255, 255, 0.1)',
        }}
      >

        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 4px)' }}></div>
        </div>

        <div className="relative w-4 h-4 shrink-0 flex items-center justify-center">
          <div className="absolute inset-0 border border-white/30 rotate-45 group-hover:rotate-90 group-hover:border-[#F0632C]/80 transition-all duration-500"></div>
          <div className="w-1.5 h-1.5 bg-white/80 rounded-full"></div>
        </div>

        <span className="font-sans text-xs font-bold uppercase tracking-wider text-white/90 group-hover:text-white transition-colors">
          Contactar
        </span>

        <svg
          className="w-3.5 h-3.5 text-white/40 group-hover:text-[#F0632C] group-hover:translate-x-1 transition-all duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
}
