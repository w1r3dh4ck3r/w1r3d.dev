import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import FeaturedCarousel from '@/components/FeaturedCarousel';

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <HeroSection />
      </section>

      {/* Featured Projects Carousel */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
        <p className="mt-2 text-neutral-400">
          A selection of my recent work.
        </p>
        <div className="mt-6">
          <FeaturedCarousel />
        </div>
        <div className="mt-4 text-center">
          <Link
            href="/projects"
            className="text-neutral-500 hover:text-white font-medium"
          >
            See all projects →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white">Ready to build something?</h2>
        <p className="mt-3 text-lg text-neutral-400">
          Let's talk about your next project.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-lg bg-emerald-500 px-6 py-3 font-medium text-black hover:bg-emerald-400"
        >
          Start a conversation
        </Link>
      </section>
    </div>
  );
}
