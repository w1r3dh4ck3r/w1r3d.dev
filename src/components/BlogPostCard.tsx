'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogPost } from '@/types';

const cardVariant = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1] as const } },
};

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogPostCard({ post, index }: BlogPostCardProps) {
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ x: 6, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
      className="rounded-lg border border-white/10 bg-neutral-900/50 p-6 shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all"
    >
      <p className="text-sm text-neutral-500">{post.date}</p>
      <Link href={`/blog/${post.slug}`}>
        <h3 className="mt-1 text-lg font-bold text-white hover:text-emerald-400">
          {post.title}
        </h3>
      </Link>
      <p className="mt-2 text-neutral-400">{post.excerpt}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-4 inline-block text-emerald-400 hover:text-emerald-300 font-medium text-sm"
      >
        Read more →
      </Link>
    </motion.div>
  );
}
