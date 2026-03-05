import { Metadata } from 'next';
import BentoProjectCard from '@/components/BentoProjectCard';
import StaggerContainer from '@/components/StaggerContainer';
import projects from '@/data/projects.json';

export const metadata: Metadata = {
  title: 'Projects — w1r3d.dev',
  description: 'Showcase of my featured projects.',
};

const bentoSizes: Array<'large' | 'medium'> = ['large', 'medium', 'medium', 'large'];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-4xl font-bold text-white">Projects</h1>
        <p className="mt-4 text-lg text-neutral-400">
          A selection of my recent work across full-stack, mobile, and AI systems.
        </p>
      </div>

      <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={bentoSizes[index % bentoSizes.length] === 'large' ? 'md:col-span-2' : 'md:col-span-1'}
          >
            <BentoProjectCard
              project={project}
              size={bentoSizes[index % bentoSizes.length]}
            />
          </div>
        ))}
      </StaggerContainer>
    </div>
  );
}
