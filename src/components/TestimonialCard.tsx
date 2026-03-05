'use client';

import { motion } from 'framer-motion';
import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({
  testimonial,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="rounded-lg border border-white/10 bg-neutral-900/50 p-6 shadow-sm"
    >
      <p className="text-neutral-300 italic">"{testimonial.quote}"</p>
      <div className="mt-4">
        <p className="font-semibold text-white">{testimonial.author}</p>
        <p className="text-sm text-neutral-500">{testimonial.role}</p>
      </div>
    </motion.div>
  );
}
