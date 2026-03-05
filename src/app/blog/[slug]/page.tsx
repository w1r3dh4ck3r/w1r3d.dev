import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Not found' };
  }

  return {
    title: `${post.title} — w1r3d.dev`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:px-8">
      <Link href="/blog" className="text-blue-600 hover:text-blue-700">
        ← Back to blog
      </Link>

      <header className="mt-8">
        <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>
        <p className="mt-2 text-gray-600">{post.date}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags?.map((tag: string) => (
            <span
              key={tag}
              className="bg-blue-50 text-blue-700 px-3 py-1 rounded text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="prose prose-sm max-w-none mt-8">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
