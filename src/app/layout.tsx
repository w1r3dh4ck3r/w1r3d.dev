import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://w1r3d.dev'),
  title: {
    default: 'w1r3d.dev — Full-stack Engineer',
    template: '%s — w1r3d.dev',
  },
  description:
    'Portfolio showcasing full-stack web, mobile, AI systems, and game mods.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'w1r3d.dev — Full-stack Engineer',
    description:
      'Portfolio showcasing full-stack web, mobile, AI systems, and game mods.',
    url: 'https://w1r3d.dev',
    siteName: 'w1r3d.dev',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'w1r3d.dev — Full-stack Engineer',
    description:
      'Portfolio showcasing full-stack web, mobile, AI systems, and game mods.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'w1r3d',
              url: 'https://w1r3d.dev',
              jobTitle: 'Full-stack Engineer',
              sameAs: [
                'https://github.com/w1r3dh4ck3r',
                'https://linkedin.com/in/w1r3dh4ck3r',
              ],
            }),
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/8 blur-[120px]" />
          <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-emerald-600/6 blur-[100px]" />
        </div>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
