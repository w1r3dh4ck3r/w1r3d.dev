import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const blogEntries = posts.map((post) => ({
    url: `https://w1r3d.dev/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    { url: 'https://w1r3d.dev', lastModified: new Date(), priority: 1 },
    { url: 'https://w1r3d.dev/projects', lastModified: new Date(), priority: 0.9 },
    { url: 'https://w1r3d.dev/about', lastModified: new Date(), priority: 0.8 },
    { url: 'https://w1r3d.dev/blog', lastModified: new Date(), priority: 0.8 },
    { url: 'https://w1r3d.dev/contact', lastModified: new Date(), priority: 0.7 },
    ...blogEntries,
  ];
}
