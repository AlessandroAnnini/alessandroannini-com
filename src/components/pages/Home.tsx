import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Terminal,
  MapPin,
  Coffee,
  Github,
  Linkedin,
  FileText,
} from 'lucide-react';
import { BrutalistCard } from '@/components/BrutalistCard';

interface HomeProps {
  glitchText: string;
}

export const Home: React.FC<HomeProps> = ({ glitchText }) => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-7xl md:text-9xl font-black text-black mb-4 tracking-tighter transform -rotate-2 hover:rotate-2 transition-transform duration-300">
          {glitchText}
        </h1>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-red-500 text-white text-3xl font-black p-4 border-4 border-black inline-block transform rotate-1 hover:-rotate-1 transition-transform">
            SENIOR SOFTWARE ARCHITECT
          </div>
          <div className="bg-yellow-400 text-black text-xl font-black p-3 border-4 border-black inline-block mt-4 transform -rotate-1">
            AI ENTHUSIAST • CLOUD EXPERT • FULL-STACK DEV
          </div>
        </div>
      </div>

      <Alert className="bg-black text-green-400 border-4 border-green-400 font-mono text-lg">
        <Terminal className="h-6 w-6" />
        <AlertDescription className="text-white">
          $ whoami
          <br />
          &gt; Currently building the future at TeamSystem, exploring AI
          boundaries with Langgraph, DSPy, OpenAI, Anthropic, and more
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BrutalistCard bgColor="bg-blue-400">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-8 h-8" />
            <h3 className="text-2xl font-black">LOCATION</h3>
          </div>
          <p className="text-lg font-bold">Falconara Marittima, Italy 🇮🇹</p>
        </BrutalistCard>

        <BrutalistCard bgColor="bg-orange-400">
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="w-8 h-8" />
            <h3 className="text-2xl font-black">CONNECT</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://medium.com/@alessandro-annini"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-3 py-2 font-black uppercase hover:bg-purple-700 transition-colors border-2 border-black transform hover:scale-105 flex items-center gap-2">
              <FileText className="w-4 h-4" /> MEDIUM
            </a>
            <a
              href="https://github.com/alessandroannini"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-3 py-2 font-black uppercase hover:bg-gray-800 transition-colors border-2 border-black transform hover:scale-105 flex items-center gap-2">
              <Github className="w-4 h-4" /> GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/alessandroannini/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-3 py-2 font-black uppercase hover:bg-blue-700 transition-colors border-2 border-black transform hover:scale-105 flex items-center gap-2">
              <Linkedin className="w-4 h-4" /> LINKEDIN
            </a>
          </div>
        </BrutalistCard>
      </div>

      <BrutalistCard bgColor="bg-purple-400">
        <div className="flex items-center gap-3 mb-4">
          <Coffee className="w-8 h-8" />
          <h3 className="text-3xl font-black">PHILOSOPHY & APPROACH</h3>
        </div>
        <p className="text-xl font-bold italic mb-6">
          "I really care about my evolution as architect and developer - I
          regularly invest in detailed courses about new technologies, whether
          for work or pure curiosity. When I feel I'm missing something or I'm
          just curious about the latest trends, I go shopping for courses online
          and prepare popcorn for the night."
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-black text-white p-4 border-2 border-white rounded">
            <h4 className="text-xl font-black mb-3">
              🤖 CONTINUOUS AI EVOLUTION
            </h4>
            <p className="text-lg mb-3">
              Relentlessly staying ahead in the AI revolution through:
            </p>
            <div className="text-left space-y-1">
              <p>• Advanced courses & certifications</p>
              <p>• Hands-on coding with OpenAI, Anthropic</p>
              <p>• Deep-diving into LangChain, LangGraph</p>
              <p>• Building autonomous agents & DSPy evaluators</p>
              <p>• From curiosity to production-ready AI solutions</p>
            </div>
          </div>

          <div className="bg-yellow-400 text-black p-4 border-2 border-black rounded">
            <h4 className="text-xl font-black mb-3">
              ⚡ MY CULT OF DONE PRINCIPLES
            </h4>
            <p className="text-lg mb-3">Manifesto for getting things DONE:</p>
            <div className="text-left space-y-1 text-sm">
              <p>1. Three states: Not knowing, action, completion</p>
              <p>2. Everything is a draft - just ship it</p>
              <p>3. Pretend you know what you're doing and do it</p>
              <p>4. Banish procrastination - 1 week max or abandon</p>
              <p>5. Laugh at perfection - it's boring</p>
              <p>6. People without dirty hands are wrong</p>
              <p>7. Failure counts as done. So do mistakes</p>
              <p>8. Done is the engine of more</p>
            </div>
            <div className="mt-4">
              <a
                href="https://cultofdone.alessandroannini.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-yellow-400 border-2 border-black px-3 py-2 font-black uppercase hover:bg-gray-800 transition-colors inline-block transform hover:scale-105 text-sm">
                ⚡ READ THE MANIFESTO
              </a>
            </div>
          </div>
        </div>{' '}
      </BrutalistCard>
    </div>
  );
};
