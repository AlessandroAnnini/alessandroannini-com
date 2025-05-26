import { useState } from 'react';
import { Keyboard } from 'lucide-react';
import data from './data.json';

// Import hooks
import { useGlitchText } from './hooks/useGlitchText';

// Import components
import { Home } from './components/pages/Home';
import { Skills } from './components/pages/Skills';
import { Career } from './components/pages/Career';
import { Projects } from './components/pages/Projects';
import { Articles } from './components/pages/Articles';
import { NavButton } from './components/NavButton';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const { articles, skills, projects, career } = data;

  // Use the custom glitch text hook
  const glitchText = useGlitchText('ALESSANDRO ANNINI');

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
        return <Home glitchText={glitchText} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-black border-b-8 border-red-500 p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4">
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
      <main className="flex-grow max-w-6xl mx-auto p-8">{renderContent()}</main>

      {/* Footer */}
      <footer className="bg-black text-white p-8 border-t-8 border-yellow-400 mt-auto">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-2xl font-black">
            CRAFTED WITH <Keyboard className="inline w-6 h-6 text-blue-400" />{' '}
            AND LOTS OF POPCORN 🍿
          </p>
          <p className="text-lg mt-2">
            © 2025 ALESSANDRO ANNINI - BUILT WITH REACT, SHADCN & BRUTALISM
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
