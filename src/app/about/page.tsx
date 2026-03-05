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
        <h1 className="text-4xl font-bold text-white">About Me</h1>
        <div className="mt-8 flex flex-col md:flex-row gap-8 items-start">
          {/* Profile Picture */}
          <div className="shrink-0 mx-auto md:mx-0">
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-white/10">
              <img
                src="/profile.svg"
                alt="Profile photo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
          </div>
          {/* Bio Text */}
          <div className="space-y-4 text-neutral-400">
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
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-bold text-white">Skills & Tools</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold text-neutral-300">{category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400"
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
        <h2 className="text-2xl font-bold text-white">What Others Say</h2>
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
