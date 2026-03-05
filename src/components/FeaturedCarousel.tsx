'use client'

import projects from '@/data/projects.json'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import BorderBeam from './BorderBeam'

export default function FeaturedCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projects.length)
  }, [])

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }, [])

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      goNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused, goNext])

  const project = projects[activeIndex]

  return (
    <div
      className="relative rounded-lg border border-white/10 bg-neutral-900/50 p-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <BorderBeam />
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <p className="text-sm text-emerald-400 mt-1">{project.subtitle}</p>
          <p className="mt-3 text-neutral-400">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          <Link
            href={project.liveUrl}
            target="_blank"
            className="mt-6 inline-block text-emerald-400 hover:text-emerald-300 font-medium text-sm"
          >
            View Project →
          </Link>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={goPrev}
          className="text-neutral-500 hover:text-emerald-400 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2 items-center">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeIndex
                  ? 'bg-emerald-500'
                  : 'bg-neutral-600 hover:bg-neutral-500'
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="text-neutral-500 hover:text-emerald-400 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
