import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, FileJson, CheckCircle2, ShieldQuestion, Settings } from 'lucide-react';

const analysisModules = [
  {
    icon: <FileJson size={18} />,
    title: "Detect Framework",
    desc: "Parses package.json to identify React, Next.js, Vue, Angular, Vite, etc.",
    angle: 0,
  },
  {
    icon: <Settings size={18} />,
    title: "Detect Build Tool",
    desc: "Identifies whether the project uses Vite, Webpack, Turbopack, or standard scripts.",
    angle: 60,
  },
  {
    icon: <Cpu size={18} />,
    title: "Detect Node Version",
    desc: "Inspects .nvmrc, engines field, or lockfiles to match target Node container runtime.",
    angle: 120,
  },
  {
    icon: <CheckCircle2 size={18} />,
    title: "Validate Project",
    desc: "Ensures repository is not empty and has valid entrypoints (index.html, package.json).",
    angle: 180,
  },
  {
    icon: <ShieldQuestion size={18} />,
    title: "Check Env Variables",
    desc: "Scans for .env.example files to prompt user for required configuration variables.",
    angle: 240,
  },
  {
    icon: <Terminal size={18} />,
    title: "Build Strategy",
    desc: "Generates optimal compilation command (e.g. npm run build, yarn build) and sets ports.",
    angle: 300,
  }
];

const AnalyzerSlide = () => {
  const [activeModule, setActiveModule] = useState(0);

  return (
    <div className="slide-container" style={{ width: '100%', maxWidth: '1200px' }}>
      <span className="slide-tag">Repository Analyzer</span>
      <h2 className="slide-title">Intelligent Code Analysis</h2>
      <p className="slide-subtitle" style={{ marginBottom: '1.5rem' }}>
        How the system scans and parses any codebase within seconds to create the build blueprint.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '2.5rem',
          alignItems: 'center',
          width: '100%',
          position: 'relative',
          zIndex: 5,
        }}
      >
        {/* Animated AI Brain & Node Cluster */}
        <div
          style={{
            position: 'relative',
            height: '340px',
            background: 'rgba(10, 18, 36, 0.4)',
            border: '1px solid rgba(0, 102, 255, 0.15)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Connecting SVG Lines */}
          <svg
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
            }}
          >
            {analysisModules.map((mod, idx) => {
              // Calculate positioning around the center (x: 50%, y: 50%)
              const rad = (mod.angle * Math.PI) / 180;
              const x2 = 50 + Math.cos(rad) * 35; // % coordinates
              const y2 = 50 + Math.sin(rad) * 35; // % coordinates

              return (
                <g key={idx}>
                  {/* Line */}
                  <line
                    x1="50%"
                    y1="50%"
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke={activeModule === idx ? 'var(--accent-cyan)' : 'var(--border-glow)'}
                    strokeWidth={activeModule === idx ? '2' : '1'}
                    style={{ transition: 'all 0.3s' }}
                  />
                  {/* Moving pulse */}
                  {activeModule === idx && (
                    <circle r="4" fill="var(--accent-cyan)">
                      <animateMotion
                        path={`M ${window.innerWidth * 0.7 * 0.5 * 0.5} ${340 * 0.5} L ${window.innerWidth * 0.7 * 0.5 * (x2 / 100)} ${340 * (y2 / 100)}`} // approximation
                        dur="1.5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Central AI Brain Node */}
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgba(0, 102, 255, 0.2)',
                '0 0 35px rgba(0, 229, 255, 0.4)',
                '0 0 20px rgba(0, 102, 255, 0.2)',
              ]
            }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            style={{
              width: '110px',
              height: '110px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(10, 18, 36, 0.95), rgba(0, 102, 255, 0.2))',
              border: '2px solid var(--accent-cyan)',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            {/* Custom SVG Brain representation */}
            <svg viewBox="0 0 100 100" width="65" height="65" style={{ fill: 'none', stroke: 'var(--accent-cyan)', strokeWidth: '1.8' }}>
              <path d="M 50 20 C 40 20, 25 25, 25 45 C 25 65, 45 70, 50 80 C 50 80, 55 70, 75 45 C 75 25, 60 20, 50 20 Z" />
              {/* Inner details/neural connections */}
              <circle cx="50" cy="35" r="3" fill="var(--accent-cyan)" />
              <circle cx="38" cy="45" r="2.5" fill="var(--accent-cyan)" />
              <circle cx="62" cy="45" r="2.5" fill="var(--accent-cyan)" />
              <circle cx="50" cy="55" r="3" fill="var(--accent-cyan)" />
              <circle cx="44" cy="65" r="2" fill="var(--accent-cyan)" />
              <circle cx="56" cy="65" r="2" fill="var(--accent-cyan)" />
              <path d="M 50 35 L 38 45 M 50 35 L 62 45 M 38 45 L 50 55 M 62 45 L 50 55 M 50 55 L 44 65 M 50 55 L 56 65" />
            </svg>
          </motion.div>

          {/* Surrounding Nodes */}
          {analysisModules.map((mod, idx) => {
            const rad = (mod.angle * Math.PI) / 180;
            // Place nodes on a radius of 145px from center
            const x = Math.cos(rad) * 145;
            const y = Math.sin(rad) * 145;
            const isSelected = activeModule === idx;

            return (
              <div
                key={idx}
                onClick={() => setActiveModule(idx)}
                style={{
                  position: 'absolute',
                  transform: `translate(${x}px, ${y}px)`,
                  zIndex: 8,
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: isSelected ? 'var(--accent-cyan)' : 'rgba(10, 18, 36, 0.9)',
                    border: isSelected ? '2.5px solid #fff' : '1.5px solid var(--border-glow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isSelected ? '#060b16' : 'var(--text-primary)',
                    boxShadow: isSelected ? '0 0 20px rgba(0, 229, 255, 0.4)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  title={mod.title}
                >
                  {mod.icon}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Module Detail Panel */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            borderRadius: '16px',
            border: '1px solid rgba(0, 102, 255, 0.25)',
            background: 'rgba(10, 18, 36, 0.75)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
            minHeight: '280px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '1.2rem' }}>
            <div style={{ background: 'rgba(0, 229, 255, 0.1)', padding: '0.5rem', borderRadius: '8px', border: '1px solid rgba(0, 229, 255, 0.2)' }}>
              {analysisModules[activeModule].icon}
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.3px' }}>
              {analysisModules[activeModule].title}
            </h3>
          </div>
          <p style={{ fontSize: '1.15rem', color: '#fff', lineHeight: 1.5, marginBottom: '1rem', fontWeight: 500 }}>
            {analysisModules[activeModule].desc}
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            Automating this process removes Node version mismatches and package installation failures, ensuring that the Docker Sandbox spins up with a 100% accurate build blueprint.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalyzerSlide;
