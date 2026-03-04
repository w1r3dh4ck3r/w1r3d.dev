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
      <body className="bg-white text-gray-900">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
