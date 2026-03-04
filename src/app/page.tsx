import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import projects from '@/data/projects.json';

export default function Home() {
  const featuredProject = projects[0];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <HeroSection />
      </section>

      {/* Featured Project */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Featured Project</h2>
        <p className="mt-2 text-gray-600">
          {featuredProject.subtitle}
        </p>
        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-8">
          <h3 className="text-2xl font-bold text-gray-900">
            {featuredProject.title}
          </h3>
          <p className="mt-3 text-gray-700">{featuredProject.description}</p>
          <div className="mt-6 flex gap-3">
            <Link
              href={featuredProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View Project →
            </Link>
            <Link
              href="/projects"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              See all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Ready to build something?</h2>
        <p className="mt-3 text-lg text-gray-600">
          Let's talk about your next project.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          Start a conversation
        </Link>
      </section>
    </div>
  );
}
