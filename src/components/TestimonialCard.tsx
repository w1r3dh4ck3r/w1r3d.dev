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
      className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
    >
      <p className="text-gray-700 italic">"{testimonial.quote}"</p>
      <div className="mt-4">
        <p className="font-semibold text-gray-900">{testimonial.author}</p>
        <p className="text-sm text-gray-500">{testimonial.role}</p>
      </div>
    </motion.div>
  );
}
