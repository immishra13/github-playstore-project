import React from 'react';
import { motion } from 'framer-motion';
import { Link2, Sparkles, Shield, Cpu, ExternalLink, Terminal } from 'lucide-react';

const solutionSteps = [
  {
    icon: <Link2 size={24} />,
    title: "1. Paste URL",
    desc: "Paste any public GitHub repository link. No setup or API keys needed.",
    color: "#0066ff"
  },
  {
    icon: <Sparkles size={24} />,
    title: "2. Framework Auto-Detect",
    desc: "System analyzes package.json and config files to resolve Vite, Next, React, Vue, etc.",
    color: "#00e5ff"
  },
  {
    icon: <Shield size={24} />,
    title: "3. Docker Sandbox",
    desc: "Spins up an isolated, secure, lightweight environment. No local execution risk.",
    color: "#a855f7"
  },
  {
    icon: <Terminal size={24} />,
    title: "4. Fast Build & Launch",
    desc: "Executes optimized build commands and serves the compilation in seconds.",
    color: "#00e5ff"
  },
  {
    icon: <ExternalLink size={24} />,
    title: "5. Live Preview URL",
    desc: "Generates a secure HTTPS live link to share, test, and review immediately.",
    color: "#ffffff"
  }
];

const SolutionSlide = () => {
  return (
    <div className="slide-container" style={{ width: '100%', maxWidth: '1200px' }}>
      <span className="slide-tag">The Solution</span>
      <h2 className="slide-title">Instant Repository Previews</h2>
      <p className="slide-subtitle" style={{ marginBottom: '3.5rem' }}>
        Paste a GitHub URL, wait a few seconds, and interact with the live application.
      </p>

      {/* Grid containing solution cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '1.2rem',
          width: '100%',
          position: 'relative',
          zIndex: 5,
        }}
      >
        {/* Glowing connected visual path underneath */}
        <div
          style={{
            position: 'absolute',
            top: '32px',
            left: '10%',
            right: '10%',
            height: '2px',
            background: 'linear-gradient(90deg, var(--accent-blue) 0%, var(--accent-cyan) 50%, var(--accent-purple) 100%)',
            zIndex: -1,
            boxShadow: '0 0 12px rgba(0, 229, 255, 0.4)',
          }}
        />

        {solutionSteps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: idx * 0.15 + 0.3, duration: 0.6 }}
            className="glass-card"
            style={{
              padding: '1.8rem 1.5rem',
              borderRadius: '16px',
              border: `1.5px solid rgba(255, 255, 255, 0.08)`,
              background: 'rgba(10, 18, 36, 0.65)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: `0 8px 30px rgba(0, 0, 0, 0.4)`,
              height: '100%',
            }}
            whileHover={{ 
              y: -8, 
              borderColor: step.color,
              boxShadow: `0 12px 40px rgba(0, 0, 0, 0.5), 0 0 25px ${step.color}25`
            }}
          >
            {/* Round Icon Container */}
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: `radial-gradient(circle, ${step.color}15 0%, ${step.color}05 100%)`,
                border: `1.5px solid ${step.color}50`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.2rem',
                color: step.color === '#ffffff' ? '#00e5ff' : step.color,
                boxShadow: `inset 0 0 10px ${step.color}15`,
              }}
            >
              {step.icon}
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.15rem',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '0.8rem',
              }}
            >
              {step.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.88rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
                flexGrow: 1,
              }}
            >
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Subtext info pill */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          marginTop: '3.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.8rem',
          background: 'rgba(0, 102, 255, 0.08)',
          border: '1px solid rgba(0, 102, 255, 0.25)',
          borderRadius: '30px',
          padding: '0.6rem 1.6rem',
        }}
      >
        <Cpu size={18} style={{ color: 'var(--accent-cyan)' }} />
        <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
          AUTOMATION PIPELINE: 0 CONFIGURATION · 0 INSTALLATION · SECURE PREVIEW IN SECONDS
        </span>
      </motion.div>
    </div>
  );
};

export default SolutionSlide;
