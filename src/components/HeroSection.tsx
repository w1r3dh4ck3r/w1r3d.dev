'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const roles = [
  'Full-stack Engineer',
  'Game Mod Developer',
  'AI Systems Builder',
  'Mobile App Creator',
];

const scrambleChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

function useTextScramble(
  texts: string[],
  interval = 3000,
  totalFrames = 20,
) {
  const [displayText, setDisplayText] = useState(texts[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const frameRef = useRef<number | null>(null);

  const scrambleTo = useCallback(
    (target: string) => {
      let frame = 0;

      const animate = () => {
        frame++;
        const progress = frame / totalFrames;
        let result = '';

        for (let i = 0; i < target.length; i++) {
          if (progress * target.length > i) {
            result += target[i];
          } else {
            result +=
              scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          }
        }

        setDisplayText(result);

        if (frame < totalFrames) {
          frameRef.current = requestAnimationFrame(animate);
        } else {
          setDisplayText(target);
        }
      };

      frameRef.current = requestAnimationFrame(animate);
    },
    [totalFrames],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % texts.length;
        scrambleTo(texts[nextIndex]);
        return nextIndex;
      });
    }, interval);

    return () => {
      clearInterval(timer);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [texts, interval, scrambleTo]);

  return displayText;
}

export default function HeroSection() {
  const displayText = useTextScramble(roles, 3000);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h1 className="min-h-[1.2em] text-5xl font-bold text-white sm:text-6xl">
        <span className="font-mono">{displayText}</span>
      </h1>
      <p className="mt-4 text-xl text-neutral-400">
        Building web, mobile, AI systems, and game mods.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
          <Link
            href="/projects"
            className="inline-block rounded-lg bg-emerald-500 px-6 py-3 font-medium text-black hover:bg-emerald-400 transition-colors"
          >
            View My Work
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
          <Link
            href="/contact"
            className="inline-block rounded-lg border border-white/20 px-6 py-3 font-medium text-neutral-300 hover:border-emerald-500/50 hover:text-white transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
