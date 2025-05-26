import React from 'react';
import { Badge } from '@/components/ui/badge';
import { BrutalistCard } from '@/components/BrutalistCard';

interface ArticlesProps {
  articles: Array<{
    title: string;
    description: string;
    year: string;
    platform: string;
    tags: string[];
    link: string;
  }>;
}

export const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-6xl font-black text-center mb-8 transform rotate-1">
        ARTICLES & INSIGHTS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <BrutalistCard
            key={article.title}
            bgColor={
              [
                'bg-green-400',
                'bg-yellow-400',
                'bg-cyan-400',
                'bg-pink-400',
                'bg-red-400',
                'bg-blue-400',
                'bg-purple-400',
                'bg-indigo-400',
              ][index % 8]
            }
            className="transform hover:-rotate-1">
            <div className="flex justify-between items-start mb-3">
              <Badge className="bg-black text-white font-bold">
                {article.platform}
              </Badge>
              <Badge className="bg-white text-black border-2 border-black">
                {article.year}
              </Badge>
            </div>
            <h3 className="text-2xl font-black mb-3 leading-tight">
              {article.title}
            </h3>
            <p className="text-lg mb-4">{article.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag) => (
                <Badge key={tag} className="bg-black text-white text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-4 py-2 font-black uppercase hover:bg-gray-800 transition-colors inline-block transform hover:scale-105">
              READ ARTICLE
            </a>
          </BrutalistCard>
        ))}
      </div>
    </div>
  );
};
