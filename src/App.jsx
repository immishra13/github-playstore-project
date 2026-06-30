import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';

// Components
import PresentationBackground from './components/PresentationBackground';
import PresentationControls from './components/PresentationControls';
import SlideWrapper from './components/SlideWrapper';

// Slides
import HeroSlide from './components/slides/HeroSlide';
import ProblemSlide from './components/slides/ProblemSlide';
import SolutionSlide from './components/slides/SolutionSlide';
import ArchitectureSlide from './components/slides/ArchitectureSlide';
import AnalyzerSlide from './components/slides/AnalyzerSlide';
import SecuritySlide from './components/slides/SecuritySlide';
import WorkflowSlide from './components/slides/WorkflowSlide';
import TechnologiesSlide from './components/slides/TechnologiesSlide';
import FutureScopeSlide from './components/slides/FutureScopeSlide';
import ImpactSlide from './components/slides/ImpactSlide';
import TechStackSlide from './components/slides/TechStackSlide';
import ConclusionSlide from './components/slides/ConclusionSlide';

const TOTAL_SLIDES = 12;

function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [direction, setDirection] = useState(1); // 1 = Forward, -1 = Backward
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Sync state if user exits native fullscreen with Escape key
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handleNext = () => {
    if (currentSlide < TOTAL_SLIDES) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 1) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  const handleJump = (slideNumber) => {
    if (slideNumber >= 1 && slideNumber <= TOTAL_SLIDES) {
      setDirection(slideNumber > currentSlide ? 1 : -1);
      setCurrentSlide(slideNumber);
    }
  };

  const toggleFullscreen = () => {
    const container = document.querySelector('.app-container') || document.documentElement;
    if (!document.fullscreenElement) {
      const requestMethod = container.requestFullscreen || container.mozRequestFullScreen || container.webkitRequestFullScreen || container.msRequestFullscreen;
      if (requestMethod) {
        requestMethod.call(container)
          .then(() => setIsFullscreen(true))
          .catch(err => {
            console.warn("Native fullscreen request failed/blocked (likely due to iframe sandboxing). Falling back to virtual fullscreen.", err);
            setIsFullscreen(true);
          });
      } else {
        setIsFullscreen(true);
      }
    } else {
      const exitMethod = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.msExitFullscreen;
      if (exitMethod) {
        exitMethod.call(document)
          .then(() => setIsFullscreen(false))
          .catch(err => {
            console.error("Error exiting native fullscreen:", err);
            setIsFullscreen(false);
          });
      } else {
        setIsFullscreen(false);
      }
    }
  };

  const renderSlide = () => {
    switch (currentSlide) {
      case 1: return <HeroSlide />;
      case 2: return <ProblemSlide />;
      case 3: return <SolutionSlide />;
      case 4: return <ArchitectureSlide />;
      case 5: return <AnalyzerSlide />;
      case 6: return <SecuritySlide />;
      case 7: return <WorkflowSlide />;
      case 8: return <TechnologiesSlide />;
      case 9: return <FutureScopeSlide />;
      case 10: return <ImpactSlide />;
      case 11: return <TechStackSlide />;
      case 12: return <ConclusionSlide />;
      default: return <HeroSlide />;
    }
  };

  return (
    <div className={`app-container ${isFullscreen ? 'virtual-fullscreen' : ''}`}>
      {/* Network and Grid Canvas Background */}
      <PresentationBackground />

      {/* Main presentation canvas area */}
      <div 
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
        }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <SlideWrapper key={currentSlide} direction={direction}>
            {renderSlide()}
          </SlideWrapper>
        </AnimatePresence>
      </div>

      {/* Interactive Floating Presentation Controls Capsule */}
      <PresentationControls
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        onNext={handleNext}
        onPrev={handlePrev}
        onJump={handleJump}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />
    </div>
  );
}

export default App;
