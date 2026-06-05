import { Badge } from '@/components/ui/badge';
import { BrutalistCard } from '@/components/BrutalistCard';

interface Skill {
  name: string;
  color: string;
}

interface SkillCategory {
  name: string;
  color: string;
  items: string[];
}

interface SkillsProps {
  skills: Skill[];
  skillCategories: SkillCategory[];
}

export const Skills = ({ skills, skillCategories }: SkillsProps) => {
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
        {skillCategories.map((category) => (
          <BrutalistCard key={category.name} bgColor={category.color}>
            <h3 className="text-2xl font-black mb-3">{category.name}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {category.items.map((item) => (
                <Badge key={item} className="bg-black text-white">
                  {item}
                </Badge>
              ))}
            </div>
          </BrutalistCard>
        ))}
      </div>
    </div>
  );
};
