import { useState, lazy, Suspense, useEffect } from 'react';
import { Keyboard } from 'lucide-react';
import data from './data.json';

// Import hooks
import { useGlitchText } from './hooks/useGlitchText';

// Import components
import { Home } from './components/pages/Home';
import { NavButton } from './components/NavButton';

// Lazy load non-critical pages for better performance
const Skills = lazy(() => import('./components/pages/Skills').then(m => ({ default: m.Skills })));
const Career = lazy(() => import('./components/pages/Career').then(m => ({ default: m.Career })));
const Projects = lazy(() => import('./components/pages/Projects').then(m => ({ default: m.Projects })));
const Articles = lazy(() => import('./components/pages/Articles').then(m => ({ default: m.Articles })));

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const { articles, skills, projects, career } = data;

  // Use the custom glitch text hook for each word independently
  const glitchFirstName = useGlitchText('ALESSANDRO');
  const glitchLastName = useGlitchText('ANNINI', 3200); // Slightly offset timing for cooler effect

  // Update page title based on current section
  useEffect(() => {
    const titles: Record<string, string> = {
      home: 'Alessandro Annini - Enterprise Product Owner & Full-Stack Developer',
      skills: 'Tech Arsenal - Alessandro Annini',
      career: 'Career Evolution - Alessandro Annini',
      projects: 'Projects - Alessandro Annini',
      articles: 'Articles & Insights - Alessandro Annini',
    };
    document.title = titles[currentSection] || titles.home;
  }, [currentSection]);

  const renderContent = () => {
    switch (currentSection) {
      case 'skills':
        return <Skills skills={skills} />;
      case 'career':
        return <Career career={career} />;
      case 'projects':
        return <Projects projects={projects} />;
      case 'articles':
        return <Articles articles={articles} />;
      default:
        return <Home glitchFirstName={glitchFirstName} glitchLastName={glitchLastName} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] bg-yellow-400 text-black font-black px-6 py-3 border-4 border-black">
        SKIP TO CONTENT
      </a>
      
      {/* Navigation */}
      <nav className="bg-black border-b-8 border-red-500 p-4 sticky top-0 z-50" aria-label="Main navigation">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4" role="tablist">
          <NavButton
            section="home"
            active={currentSection === 'home'}
            onClick={setCurrentSection}>
            HOME
          </NavButton>
          <NavButton
            section="skills"
            active={currentSection === 'skills'}
            onClick={setCurrentSection}>
            SKILLS
          </NavButton>
          <NavButton
            section="career"
            active={currentSection === 'career'}
            onClick={setCurrentSection}>
            CAREER
          </NavButton>
          <NavButton
            section="projects"
            active={currentSection === 'projects'}
            onClick={setCurrentSection}>
            PROJECTS
          </NavButton>
          <NavButton
            section="articles"
            active={currentSection === 'articles'}
            onClick={setCurrentSection}>
            ARTICLES
          </NavButton>
        </div>
      </nav>

      {/* Main Content */}
      <main 
        id="main-content"
        className="flex-grow max-w-6xl mx-auto p-8" 
        role="tabpanel" 
        aria-labelledby={currentSection}>
        <Suspense fallback={
          <div className="text-center text-2xl font-black" role="status" aria-live="polite">
            LOADING...
          </div>
        }>
          {renderContent()}
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white p-8 border-t-8 border-yellow-400 mt-auto">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-2xl font-black">
            CRAFTED WITH <Keyboard className="inline w-6 h-6 text-blue-400" />{' '}
            AND LOTS OF POPCORN 🍿
          </p>
          <p className="text-lg mt-2">
            © 2026 ALESSANDRO ANNINI - BUILT WITH REACT, SHADCN & BRUTALISM
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
