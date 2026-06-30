import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

const Github = ({ size = 24, style, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    style={{ display: 'inline-block', ...style }}
    {...props}
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const HeroSlide = () => {
  const [repoUrl, setRepoUrl] = useState('github.com/ankurmishra/react-dashboard');
  const [isSimulating, setIsSimulating] = useState(false);

  const handleSimulate = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
    }, 3000);
  };

  const titleWords = "GitHub Play Store".split(" ");

  return (
    <div className="slide-container" style={{ textAlign: 'center', height: '100%' }}>
      {/* Background decoration */}
      <div 
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0, 102, 255, 0.12) 0%, rgba(168, 85, 247, 0.08) 40%, transparent 70%)',
          filter: 'blur(50px)',
          zIndex: -1,
        }}
      />

      {/* Animated GitHub Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '2.5rem', display: 'inline-block' }}
      >
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(10, 18, 36, 0.8), rgba(20, 35, 68, 0.9))',
            border: '2px solid rgba(0, 102, 255, 0.35)',
            boxShadow: '0 0 35px rgba(0, 102, 255, 0.25), inset 0 0 15px rgba(255,255,255,0.05)',
            borderRadius: '50%',
            padding: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="anim-float"
        >
          <Github size={90} className="text-white" style={{ filter: 'drop-shadow(0 0 15px rgba(0,229,255,0.4))' }} />
        </div>
      </motion.div>

      {/* Title */}
      <h1 className="slide-title" style={{ fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', margin: '0 0 1.5rem 0' }}>
        {titleWords.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.8 }}
            style={{ display: 'inline-block', marginRight: '0.3em' }}
          >
            {word}
          </motion.span>
        ))}
      </h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="slide-subtitle"
        style={{ fontSize: '1.6rem', marginBottom: '3.5rem' }}
      >
        Preview Any GitHub Repository Instantly Without Cloning
      </motion.p>

      {/* Interactive Mock Input */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        style={{
          maxWidth: '650px',
          width: '100%',
          margin: '0 auto 3.5rem',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div
          className="glass-card"
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0.5rem 0.5rem 0.5rem 1.2rem',
            borderRadius: '999px',
            border: '1px solid rgba(0, 102, 255, 0.3)',
            background: 'rgba(6, 11, 22, 0.8)',
            boxShadow: '0 0 30px rgba(0, 102, 255, 0.1)',
          }}
        >
          <Github size={20} style={{ color: 'var(--text-secondary)', marginRight: '0.8rem' }} />
          <input
            type="text"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            disabled={isSimulating}
            style={{
              background: 'none',
              border: 'none',
              outline: 'none',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '1.1rem',
              flexGrow: 1,
              width: '100%',
            }}
          />
          <button
            onClick={handleSimulate}
            style={{
              background: isSimulating 
                ? 'linear-gradient(135deg, #a855f7, #0066ff)' 
                : 'linear-gradient(135deg, #0066ff, #00e5ff)',
              border: 'none',
              borderRadius: '999px',
              color: '#fff',
              fontWeight: 600,
              fontSize: '1.1rem',
              padding: '0.8rem 1.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: isSimulating ? 'not-allowed' : 'pointer',
              boxShadow: '0 4px 15px rgba(0, 102, 255, 0.4)',
              transition: 'all 0.3s ease',
            }}
          >
            {isSimulating ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                  style={{
                    width: '18px',
                    height: '18px',
                    border: '2px solid #fff',
                    borderTopColor: 'transparent',
                    borderRadius: '50%',
                  }}
                />
                Building Sandbox...
              </>
            ) : (
              <>
                <span>Preview</span>
                <Play size={16} fill="currentColor" />
              </>
            )}
          </button>
        </div>

        {/* Live Simulation Alert */}
        {isSimulating && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute',
              top: '110%',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(168, 85, 247, 0.15)',
              border: '1px solid rgba(168, 85, 247, 0.4)',
              borderRadius: '8px',
              padding: '6px 16px',
              color: 'var(--accent-cyan)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span>Analyzing repository &rarr; Validating bundle &rarr; Launching Docker...</span>
          </motion.div>
        )}
      </motion.div>

      {/* Presented By */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          marginTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
        }}
      >
        <span style={{ fontSize: '1rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
          Presented by
        </span>
        <span style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '0.5px' }}>
          Ankur Mishra
        </span>
      </motion.div>
    </div>
  );
};

export default HeroSlide;
