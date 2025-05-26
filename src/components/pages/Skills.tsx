import React from 'react';
import { Badge } from '@/components/ui/badge';
import { BrutalistCard } from '@/components/BrutalistCard';

interface SkillsProps {
  skills: Array<{
    name: string;
    color: string;
  }>;
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-6xl font-black text-center mb-8 transform -rotate-1">
        TECH ARSENAL
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {skills.map((skill) => (
          <BrutalistCard
            key={skill.name}
            bgColor={skill.color}
            className="text-center transform hover:rotate-3">
            <h3 className="text-white text-lg font-black">{skill.name}</h3>
          </BrutalistCard>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <BrutalistCard bgColor="bg-red-400">
          <h3 className="text-2xl font-black mb-3">AI & CLOUD</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-black text-white">OpenAI</Badge>
            <Badge className="bg-black text-white">LangChain</Badge>
            <Badge className="bg-black text-white">DSPy</Badge>
            <Badge className="bg-black text-white">AWS</Badge>
          </div>
        </BrutalistCard>

        <BrutalistCard bgColor="bg-blue-400">
          <h3 className="text-2xl font-black mb-3">FRONTEND</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-black text-white">React</Badge>
            <Badge className="bg-black text-white">Next.js</Badge>
            <Badge className="bg-black text-white">TypeScript</Badge>
          </div>
        </BrutalistCard>

        <BrutalistCard bgColor="bg-green-400">
          <h3 className="text-2xl font-black mb-3">BACKEND</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-black text-white">Node.js</Badge>
            <Badge className="bg-black text-white">Python</Badge>
            <Badge className="bg-black text-white">GraphQL</Badge>
          </div>
        </BrutalistCard>

        <BrutalistCard bgColor="bg-yellow-400">
          <h3 className="text-2xl font-black mb-3">DEVOPS</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-black text-white">Docker</Badge>
            <Badge className="bg-black text-white">Kubernetes</Badge>
            <Badge className="bg-black text-white">Terraform</Badge>
          </div>
        </BrutalistCard>
      </div>
    </div>
  );
};
