'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all"
    >
      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
      <p className="mt-1 text-sm text-gray-500">{project.subtitle}</p>
      <p className="mt-3 text-gray-700">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className="mt-4 space-y-1">
        {project.features.map((feature) => (
          <li key={feature} className="text-sm text-gray-600">
            • {feature}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-3">
        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 font-medium text-sm"
        >
          View Project →
        </Link>
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-700 font-medium text-sm"
        >
          GitHub
        </Link>
      </div>
    </motion.div>
  );
}
