'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h1 className="text-5xl font-bold text-white sm:text-6xl">
        Full-stack Engineer
      </h1>
      <p className="mt-4 text-xl text-neutral-400">
        Building web, mobile, AI systems, and game mods.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link
          href="/projects"
          className="rounded-lg bg-emerald-500 px-6 py-3 font-medium text-black hover:bg-emerald-400 transition-colors"
        >
          View My Work
        </Link>
        <Link
          href="/contact"
          className="rounded-lg border border-white/20 px-6 py-3 font-medium text-neutral-300 hover:border-emerald-500/50 hover:text-white transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </motion.div>
  );
}
