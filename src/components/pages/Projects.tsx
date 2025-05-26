import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';
import { BrutalistCard } from '@/components/BrutalistCard';

interface ProjectsProps {
  projects: Array<{
    name: string;
    description: string;
    tech: string[];
    githubLink: string;
    liveLink: string | null;
  }>;
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-6xl font-black text-center mb-8 transform -rotate-2">
        PROJECTS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <BrutalistCard
            key={project.name}
            bgColor={
              [
                'bg-red-400',
                'bg-blue-400',
                'bg-green-400',
                'bg-yellow-400',
                'bg-purple-400',
                'bg-cyan-400',
              ][index % 6]
            }
            className="transform hover:rotate-2">
            <h3 className="text-2xl font-black mb-3">{project.name}</h3>
            <p className="text-lg mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <Badge key={tech} className="bg-black text-white">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 font-black uppercase hover:bg-gray-800 transition-colors inline-block transform hover:scale-105">
                <Github className="inline w-4 h-4 mr-2" />
                CODE
              </a>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black border-2 border-black px-4 py-2 font-black uppercase hover:bg-gray-200 transition-colors inline-block transform hover:scale-105">
                  LIVE DEMO
                </a>
              )}
            </div>
          </BrutalistCard>
        ))}
      </div>

      <BrutalistCard bgColor="bg-purple-400" className="text-center">
        <h3 className="text-3xl font-black mb-4">NOTABLE ACHIEVEMENTS</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="text-xl font-black">Scriby</h4>
            <p>Cloud-based electronic invoicing platform for Italian SMEs</p>
          </div>
          <div>
            <h4 className="text-xl font-black">Bell 525 Helicopter</h4>
            <p>Cross-platform in-flight entertainment system</p>
          </div>
          <div>
            <h4 className="text-xl font-black">MyCicero</h4>
            <p>Multi-modal transportation payment system</p>
          </div>
        </div>
      </BrutalistCard>
    </div>
  );
};
