"use client";

import { motion } from "motion/react";

export function Footer () {
  return (
    <motion.footer
      className="fixed bottom-0 left-0 w-full z-50 border-t border-white/5 bg-black/50 backdrop-blur-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
    >
      <div className="landing-footer-content w-full max-w-7xl mx-auto py-6 flex items-center justify-center px-6 md:px-8">
        <span className="font-mono text-[10px] text-zinc-600 tracking-wider">
          &copy; 2026 ORGANIZZE. TODOS OS DIREITOS RESERVADOS.
        </span>
      </div>
    </motion.footer>
  );
}
