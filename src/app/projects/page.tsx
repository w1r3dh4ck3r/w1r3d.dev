import { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects.json';

export const metadata: Metadata = {
  title: 'Projects — w1r3d.dev',
  description: 'Showcase of my featured projects.',
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Projects</h1>
        <p className="mt-4 text-lg text-gray-600">
          A selection of my recent work across full-stack, mobile, and AI systems.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
