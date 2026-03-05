import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/lib/mdx';

export const alt = 'Blog post';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? 'Blog Post';
  const date = post?.date ?? '';

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          backgroundColor: '#0a0a0a',
          padding: '80px',
          fontFamily: 'monospace',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ fontSize: 24, color: '#34d399' }}>w1r3d.dev / blog</div>
          <div style={{ fontSize: 52, fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>
            {title}
          </div>
        </div>
        <div style={{ fontSize: 20, color: '#737373' }}>{date}</div>
      </div>
    ),
    { ...size },
  );
}
