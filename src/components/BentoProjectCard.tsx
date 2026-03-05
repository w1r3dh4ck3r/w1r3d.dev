'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/types';
import BrowserMockup from './BrowserMockup';
import SpotlightCard from './SpotlightCard';

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1] as const } },
};

interface BentoProjectCardProps {
  project: Project;
  size: 'large' | 'medium';
}

export default function BentoProjectCard({ project, size }: BentoProjectCardProps) {
  return (
    <SpotlightCard className="rounded-lg">
      <motion.div
        variants={cardVariant}
        whileHover={{ y: -4, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
        className="h-full rounded-lg border border-white/10 bg-neutral-900/50 p-6 shadow-sm hover:shadow-lg hover:border-emerald-500/30 hover:shadow-emerald-500/5 transition-all"
      >
        <h3 className={`font-bold text-white ${size === 'large' ? 'text-2xl' : 'text-xl'}`}>
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-emerald-400">{project.subtitle}</p>
        <p className={`mt-3 text-neutral-400 ${size === 'large' ? '' : 'line-clamp-3'}`}>
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {size === 'large' && (
          <div className="mt-4">
            <BrowserMockup url={project.liveUrl}>
              <div className="h-32 bg-gradient-to-br from-emerald-500/10 via-neutral-900 to-neutral-950" />
            </BrowserMockup>
          </div>
        )}

        {size === 'large' && (
          <ul className="mt-4 space-y-1">
            {project.features.map((feature) => (
              <li key={feature} className="text-sm text-neutral-500">
                • {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex gap-3">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 font-medium text-sm"
          >
            View Project →
          </Link>
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white font-medium text-sm"
          >
            GitHub
          </Link>
        </div>
      </motion.div>
    </SpotlightCard>
  );
}
