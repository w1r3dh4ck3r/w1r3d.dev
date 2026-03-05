'use client';

import { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const trigger = () => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    };

    // Random glitch every 4-8 seconds
    const schedule = () => {
      const delay = 4000 + Math.random() * 4000;
      return setTimeout(() => {
        trigger();
        timerId = schedule();
      }, delay);
    };

    let timerId = schedule();
    return () => clearTimeout(timerId);
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      {isGlitching && (
        <>
          <span
            className="absolute inset-0 z-20 text-emerald-400"
            style={{ clipPath: 'inset(20% 0 40% 0)', transform: 'translateX(-2px)' }}
            aria-hidden
          >
            {text}
          </span>
          <span
            className="absolute inset-0 z-20 text-red-400/60"
            style={{ clipPath: 'inset(60% 0 5% 0)', transform: 'translateX(2px)' }}
            aria-hidden
          >
            {text}
          </span>
        </>
      )}
    </span>
  );
}
