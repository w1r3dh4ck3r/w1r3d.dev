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
      <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl">
        Full-stack Engineer
      </h1>
      <p className="mt-4 text-xl text-gray-600">
        Building web, mobile, AI systems, and game mods.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link
          href="/projects"
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 transition-colors"
        >
          View My Work
        </Link>
        <Link
          href="/contact"
          className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-900 hover:bg-gray-50 transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </motion.div>
  );
}
