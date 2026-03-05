import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'w1r3d.dev — Full-stack Engineer',
  description:
    'Portfolio showcasing full-stack web, mobile, AI systems, and game mods.',
  openGraph: {
    title: 'w1r3d.dev',
    description: 'Full-stack engineer portfolio',
    url: 'https://w1r3d.dev',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
