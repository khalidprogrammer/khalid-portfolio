
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import SkillsSection from './components/SkillsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsSection from './components/ProjectsSection';
import CertificationsGrid from './components/CertificationsGrid';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetailView from './components/ProjectDetailView';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const selectedProject = selectedProjectId 
    ? PROJECTS.find(p => p.id === selectedProjectId) 
    : null;

  const handleSelectProject = (id: string) => {
    setSelectedProjectId(id);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToHome = () => {
    setSelectedProjectId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExternalNavigate = (targetId: string) => {
    setSelectedProjectId(null);
    // Allow a small delay for the home page to mount before scrolling
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen">
      <Navigation 
        onHomeClick={handleBackToHome} 
        onExternalNavigate={handleExternalNavigate}
        isDetailView={!!selectedProjectId}
      />
      
      <main>
        {selectedProject ? (
          <ProjectDetailView 
            project={selectedProject} 
            onBack={handleBackToHome} 
            onSelectProject={handleSelectProject} 
          />
        ) : (
          <>
            <Hero />
            <About />
            <SkillsSection />
            <ExperienceTimeline />
            <ProjectsSection onSelectProject={handleSelectProject} />
            <CertificationsGrid />
            <Contact />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
