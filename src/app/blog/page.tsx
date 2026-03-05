import { Metadata } from 'next';
import BlogPostCard from '@/components/BlogPostCard';
import StaggerContainer from '@/components/StaggerContainer';
import { getAllPosts } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Blog — w1r3d.dev',
  description: 'Technical articles and insights.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-white">Blog</h1>
      <p className="mt-4 text-lg text-neutral-400">
        Technical articles, architecture decisions, and project retrospectives.
      </p>

      {posts.length > 0 ? (
        <StaggerContainer className="mt-12 space-y-6">
          {posts.map((post, index) => (
            <BlogPostCard key={post.slug} post={post} index={index} />
          ))}
        </StaggerContainer>
      ) : (
        <p className="mt-12 text-neutral-500">No posts yet. Check back soon!</p>
      )}
    </div>
  );
}
