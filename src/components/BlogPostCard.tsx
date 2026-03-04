'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogPost } from '@/types';

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogPostCard({ post, index }: BlogPostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <p className="text-sm text-gray-500">{post.date}</p>
      <Link href={`/blog/${post.slug}`}>
        <h3 className="mt-1 text-lg font-bold text-gray-900 hover:text-blue-600">
          {post.title}
        </h3>
      </Link>
      <p className="mt-2 text-gray-600">{post.excerpt}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-4 inline-block text-blue-600 hover:text-blue-700 font-medium text-sm"
      >
        Read more →
      </Link>
    </motion.div>
  );
}
