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
    <div className="space-y-8 sm:space-y-12 px-4 sm:px-6 lg:px-0">
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black text-black mb-4 tracking-tighter transform -rotate-2 hover:rotate-2 transition-transform duration-300 leading-none">
          {glitchText}
        </h1>
        <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4">
          <div className="bg-red-500 text-white text-lg sm:text-2xl md:text-3xl font-black p-3 sm:p-4 border-4 border-black inline-block transform rotate-1 hover:-rotate-1 transition-transform max-w-full text-center">
            <span className="block sm:inline">SENIOR SOFTWARE</span>
            <span className="block sm:inline sm:ml-2">ARCHITECT</span>
          </div>
          <div className="bg-yellow-400 text-black text-sm sm:text-lg md:text-xl font-black p-2 sm:p-3 border-4 border-black inline-block transform -rotate-1 max-w-full text-center">
            <span className="block sm:inline">AI ENTHUSIAST •</span>
            <span className="block sm:inline"> CLOUD EXPERT •</span>
            <span className="block sm:inline"> FULL-STACK DEV</span>
          </div>
        </div>
      </div>

      <Alert className="bg-black text-green-400 border-4 border-green-400 font-mono text-sm sm:text-base lg:text-lg mx-2 sm:mx-0">
        <Terminal className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
        <AlertDescription className="text-white">
          <span className="block">$ whoami</span>
          <span className="block mt-1">
            &gt; Currently building the future at TeamSystem, exploring AI
            boundaries with Langgraph, DSPy, OpenAI, Anthropic, and more
          </span>
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <BrutalistCard bgColor="bg-blue-400">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <MapPin className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
            <h3 className="text-xl sm:text-2xl font-black">LOCATION</h3>
          </div>
          <p className="text-base sm:text-lg font-bold">
            Falconara Marittima, Italy 🇮🇹
          </p>
        </BrutalistCard>

        <BrutalistCard bgColor="bg-orange-400">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Terminal className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
            <h3 className="text-xl sm:text-2xl font-black">CONNECT</h3>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
            <a
              href="https://medium.com/@alessandro-annini"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-3 py-2 font-black uppercase hover:bg-purple-700 transition-colors border-2 border-black transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base min-h-[44px]">
              <FileText className="w-4 h-4 flex-shrink-0" /> MEDIUM
            </a>
            <a
              href="https://github.com/alessandroannini"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-3 py-2 font-black uppercase hover:bg-gray-800 transition-colors border-2 border-black transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base min-h-[44px]">
              <Github className="w-4 h-4 flex-shrink-0" /> GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/alessandroannini/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-3 py-2 font-black uppercase hover:bg-blue-700 transition-colors border-2 border-black transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base min-h-[44px]">
              <Linkedin className="w-4 h-4 flex-shrink-0" /> LINKEDIN
            </a>
          </div>
        </BrutalistCard>
      </div>

      <BrutalistCard bgColor="bg-purple-400">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <Coffee className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black">
            PHILOSOPHY & APPROACH
          </h3>
        </div>
        <p className="text-base sm:text-lg lg:text-xl font-bold italic mb-4 sm:mb-6 leading-relaxed">
          "I really care about my evolution as architect and developer - I
          regularly invest in detailed courses about new technologies, whether
          for work or pure curiosity. When I feel I'm missing something or I'm
          just curious about the latest trends, I go shopping for courses online
          and prepare popcorn for the night."
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div className="bg-black text-white p-3 sm:p-4 border-2 border-white rounded">
            <h4 className="text-lg sm:text-xl font-black mb-2 sm:mb-3">
              🤖 CONTINUOUS AI EVOLUTION
            </h4>
            <p className="text-sm sm:text-base lg:text-lg mb-2 sm:mb-3">
              Relentlessly staying ahead in the AI revolution through:
            </p>
            <div className="text-left space-y-1 text-sm sm:text-base">
              <p>• Advanced courses & certifications</p>
              <p>• Hands-on coding with OpenAI, Anthropic</p>
              <p>• Deep-diving into LangChain, LangGraph</p>
              <p>• Building autonomous agents & DSPy evaluators</p>
              <p>• From curiosity to production-ready AI solutions</p>
            </div>
          </div>

          <div className="bg-yellow-400 text-black p-3 sm:p-4 border-2 border-black rounded">
            <h4 className="text-lg sm:text-xl font-black mb-2 sm:mb-3">
              ⚡ MY CULT OF DONE PRINCIPLES
            </h4>
            <p className="text-sm sm:text-base lg:text-lg mb-2 sm:mb-3">
              Manifesto for getting things DONE:
            </p>
            <div className="text-left space-y-1 text-xs sm:text-sm">
              <p>1. Three states: Not knowing, action, completion</p>
              <p>2. Everything is a draft - just ship it</p>
              <p>3. Pretend you know what you're doing and do it</p>
              <p>4. Banish procrastination - 1 week max or abandon</p>
              <p>5. Laugh at perfection - it's boring</p>
              <p>6. People without dirty hands are wrong</p>
              <p>7. Failure counts as done. So do mistakes</p>
              <p>8. Done is the engine of more</p>
            </div>
            <div className="mt-3 sm:mt-4">
              <a
                href="https://cultofdone.alessandroannini.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-yellow-400 border-2 border-black px-3 py-2 font-black uppercase hover:bg-gray-800 transition-colors inline-block transform hover:scale-105 text-xs sm:text-sm min-h-[44px] flex items-center justify-center">
                ⚡ READ THE MANIFESTO
              </a>
            </div>
          </div>
        </div>
      </BrutalistCard>
    </div>
  );
};
