import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, List } from 'lucide-react';

const slideTitles = [
  "1. Hero Launch",
  "2. Problem Statement",
  "3. Our Solution",
  "4. Architecture",
  "5. Repo Analyzer",
  "6. Security & Sandbox",
  "7. Build Pipeline",
  "8. Supported Tech",
  "9. Future Scope",
  "10. Project Impact",
  "11. Technology Stack",
  "12. Conclusion"
];

const PresentationControls = ({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onJump,
  isFullscreen,
  onToggleFullscreen,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        onNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
        e.preventDefault();
        onPrev();
      } else if (e.key === 'Escape' && isFullscreen) {
        onToggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onNext, onPrev, isFullscreen, onToggleFullscreen]);

  // Mouse wheel navigation with strict throttling
  useEffect(() => {
    let lastScrollTime = 0;
    const scrollCooldown = 1000; // ms

    const handleWheel = (e) => {
      const currentTime = new Date().getTime();
      if (currentTime - lastScrollTime < scrollCooldown) return;

      if (e.deltaY > 30) {
        lastScrollTime = currentTime;
        onNext();
      } else if (e.deltaY < -30) {
        lastScrollTime = currentTime;
        onPrev();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [onNext, onPrev]);

  // Progress percentage
  const progressPercent = ((currentSlide - 1) / (totalSlides - 1)) * 100;

  return (
    <>
      {/* Top progress indicator bar */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '4px',
          width: '100%',
          background: 'rgba(0, 102, 255, 0.1)',
          zIndex: 100,
        }}
      >
        <div 
          style={{
            height: '100%',
            width: `${progressPercent}%`,
            background: 'linear-gradient(90deg, #0066ff, #00e5ff, #a855f7)',
            boxShadow: '0 0 10px rgba(0, 229, 255, 0.5)',
            transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </div>

      {/* Floating control capsule */}
      <div
        className="glass-card"
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 90,
          padding: '0.6rem 1.2rem',
          borderRadius: '999px',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          border: '1px solid rgba(0, 102, 255, 0.25)',
          background: 'rgba(6, 11, 22, 0.75)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 102, 255, 0.05)',
        }}
      >
        {/* Previous Button */}
        <button
          onClick={onPrev}
          disabled={currentSlide === 1}
          style={{
            background: 'none',
            border: 'none',
            color: currentSlide === 1 ? 'var(--text-muted)' : 'var(--text-primary)',
            cursor: currentSlide === 1 ? 'not-allowed' : 'pointer',
            padding: '0.4rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
          }}
          className="control-btn"
          title="Previous (Left Arrow / Backspace)"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Slide Counter */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '1px',
            color: 'var(--text-primary)',
            minWidth: '70px',
            textAlign: 'center',
          }}
        >
          <span style={{ color: 'var(--accent-cyan)' }}>
            {String(currentSlide).padStart(2, '0')}
          </span>
          <span style={{ color: 'var(--text-muted)', margin: '0 4px' }}>/</span>
          <span style={{ color: 'var(--text-secondary)' }}>
            {String(totalSlides).padStart(2, '0')}
          </span>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides}
          style={{
            background: 'none',
            border: 'none',
            color: currentSlide === totalSlides ? 'var(--text-muted)' : 'var(--text-primary)',
            cursor: currentSlide === totalSlides ? 'not-allowed' : 'pointer',
            padding: '0.4rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
          }}
          className="control-btn"
          title="Next (Right Arrow / Spacebar)"
        >
          <ChevronRight size={22} />
        </button>

        {/* Divider */}
        <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)' }} />

        {/* Jump Menu Trigger */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: dropdownOpen ? 'var(--accent-cyan)' : 'var(--text-primary)',
              cursor: 'pointer',
              padding: '0.4rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            className="control-btn"
            title="Jump to Slide"
          >
            <List size={20} />
          </button>

          {/* Jump Menu Dropdown */}
          {dropdownOpen && (
            <div
              className="glass-card"
              style={{
                position: 'absolute',
                bottom: '100%',
                left: '50%',
                transform: 'translateX(-50%) translateY(-10px)',
                width: '240px',
                maxHeight: '300px',
                overflowY: 'auto',
                padding: '0.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(0, 102, 255, 0.3)',
                background: 'rgba(6, 11, 22, 0.95)',
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
              }}
            >
              {slideTitles.map((title, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    onJump(idx + 1);
                    setDropdownOpen(false);
                  }}
                  style={{
                    background: currentSlide === idx + 1 ? 'rgba(0, 102, 255, 0.15)' : 'none',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '8px 12px',
                    textAlign: 'left',
                    color: currentSlide === idx + 1 ? 'var(--accent-cyan)' : 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    fontWeight: currentSlide === idx + 1 ? '600' : '400',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    if (currentSlide !== idx + 1) e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    if (currentSlide !== idx + 1) e.target.style.background = 'none';
                  }}
                >
                  {title}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Fullscreen Toggle */}
        <button
          onClick={onToggleFullscreen}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            padding: '0.4rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
          }}
          className="control-btn"
          title={isFullscreen ? "Exit Fullscreen (ESC)" : "Enter Fullscreen (F)"}
        >
          {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
        </button>
      </div>

      {/* Styled hover state for control buttons in CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .control-btn:hover {
          color: var(--accent-cyan) !important;
          background: rgba(255, 255, 255, 0.05);
        }
      `}} />
    </>
  );
};

export default PresentationControls;
export { slideTitles };
