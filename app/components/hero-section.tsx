"use client";

import { CtaButtons } from "./cta-buttons";
import { motion } from "motion/react";

export function HeroSection () {
  return (
    <motion.div
      className="relative z-10 flex items-center justify-center min-h-screen pointer-events-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="text-center pointer-events-auto flex flex-col items-center">
        <p className="font-mono text-[10px] md:text-xs text-[#E5BFA1]/70 tracking-[0.4em] uppercase mb-6">
          Organizze
        </p>

        <h1 className="font-sans font-bold text-[120px] md:text-[180px] lg:text-[240px] tracking-tighter leading-none relative select-none">

          <span
            className="absolute inset-0"
            style={{
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              transform: 'translate(4px, 4px)',
            }}
            aria-hidden="true"
          >
            SOON
          </span>

          <span
            className="relative bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0))',
            }}
          >
            SOON
          </span>
        </h1>

        <p className="font-mono text-[8px] sm:text-[9px] md:text-xs text-white/40 tracking-[0.15em] uppercase whitespace-nowrap mt-8 mb-12">
          Organizze o seu tempo, Multiplique os seus resultados.
        </p>

        <CtaButtons />
      </div>
    </motion.div>
  );
}
