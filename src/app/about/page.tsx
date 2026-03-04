import { Metadata } from 'next';
import TestimonialCard from '@/components/TestimonialCard';
import testimonials from '@/data/testimonials.json';

export const metadata: Metadata = {
  title: 'About — w1r3d.dev',
  description: 'About me and my work.',
};

export default function AboutPage() {
  const skills = {
    Languages: ['TypeScript', 'Python', 'C#', 'JavaScript'],
    Frontend: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    Backend: ['Node.js', 'FastAPI', 'SQLAlchemy', 'Docker'],
    Databases: ['PostgreSQL', 'Supabase', 'SQLite'],
    Tools: ['Git', 'Docker', 'Vercel', 'Claude API'],
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 space-y-16">
      {/* Bio Section */}
      <section>
        <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
        <div className="mt-6 space-y-4 text-gray-700">
          <p>
            I'm a full-stack engineer with a passion for building scalable systems, from
            web and mobile applications to AI-powered backends. I thrive on solving
            complex problems and writing clean, maintainable code.
          </p>
          <p>
            My work spans multiple domains: finance platforms, product management tools,
            autonomous AI agents, and more. I believe in shipping quality software and
            collaborating closely with teams to deliver real value.
          </p>
          <p>
            When I'm not coding, I'm exploring new technologies, contributing to open
            source, or working on creative side projects that push my skills.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900">Skills & Tools</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-900">{category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900">What Others Say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.author}-${index}`}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
