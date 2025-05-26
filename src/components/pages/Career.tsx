import React from 'react';
import { BrutalistCard } from '@/components/BrutalistCard';
import { Cpu, Rocket, Terminal, Cloud, Smartphone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface CareerItemRaw {
  year: string;
  role: string;
  company: string;
  icon: string;
  description: string;
  tags: string[];
}

interface CareerProps {
  career: Array<CareerItemRaw>;
}

export const Career: React.FC<CareerProps> = ({ career }) => {
  // Map icon strings from data.json to actual Lucide icon components
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6" />;
      default:
        return <Terminal className="w-6 h-6" />;
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-6xl font-black text-center mb-8 transform rotate-1">
        CAREER EVOLUTION
      </h2>

      <div className="space-y-6">
        {career.map((job, index) => (
          <BrutalistCard
            key={index}
            bgColor={index % 2 === 0 ? 'bg-cyan-400' : 'bg-pink-400'}
            className="transform hover:-rotate-1">
            <div className="flex items-center gap-4">
              <div className="bg-black text-white p-3 border-2 border-white">
                {getIconComponent(job.icon)}
              </div>
              <div>
                <div className="text-3xl font-black">{job.year}</div>
                <div className="text-xl font-bold">
                  {job.role} @ {job.company}
                </div>
                <div className="text-lg">{job.description}</div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag) => (
                    <Badge key={tag} className="bg-black text-white">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </BrutalistCard>
        ))}
      </div>
    </div>
  );
};
