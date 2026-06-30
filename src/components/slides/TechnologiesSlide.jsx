import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Star, Globe, RefreshCw, Cpu, Layers } from 'lucide-react';

const supportedTech = [
  { name: "React", type: "SPA / Library", version: "v18+", status: "Active" },
  { name: "Next.js", type: "Framework (SSR/SSG)", version: "v14+", status: "Active" },
  { name: "Vue.js", type: "Progressive Framework", version: "v3+", status: "Active" },
  { name: "Angular", type: "Enterprise SPA", version: "v17+", status: "Active" },
  { name: "Vite", type: "Modern Build Tool", version: "v5+", status: "Active" },
  { name: "Static Sites", type: "Vanilla HTML/CSS/JS", version: "Standard", status: "Active" }
];

const futureTech = [
  { name: "Python / Django", type: "Backend & Web Framework", timeline: "Q3 2026" },
  { name: "PHP / Laravel", type: "Backend & MVC Framework", timeline: "Q4 2026" },
  { name: "Flutter Web", type: "Multi-platform UI", timeline: "Q1 2027" }
];

const TechnologiesSlide = () => {
  return (
    <div className="slide-container" style={{ width: '100%', maxWidth: '1200px' }}>
      <span className="slide-tag">Compatibility</span>
      <h2 className="slide-title">Supported Frameworks & Stacks</h2>
      <p className="slide-subtitle" style={{ marginBottom: '2.5rem' }}>
        Highly optimized compilation engines tailormade for modern frontend frameworks and web projects.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '2.5rem',
          width: '100%',
          position: 'relative',
          zIndex: 5,
        }}
      >
        {/* Phase 1 Supported Tech Grid */}
        <div>
          <h3 
            style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '1.4rem', 
              fontWeight: 700, 
              color: '#fff', 
              marginBottom: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
            }}
          >
            <Star size={18} style={{ color: 'var(--accent-cyan)' }} />
            Phase 1: Production Ready (Static & Frontend)
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
            }}
          >
            {supportedTech.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.08 + 0.3, duration: 0.4 }}
                className="glass-card"
                style={{
                  padding: '1.4rem 1.2rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 102, 255, 0.15)',
                  background: 'rgba(10, 18, 36, 0.65)',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'left',
                  alignItems: 'flex-start',
                }}
                whileHover={{
                  borderColor: 'var(--accent-cyan)',
                  boxShadow: '0 8px 25px rgba(0, 229, 255, 0.15)',
                  y: -4
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', marginBottom: '0.8rem' }}>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>
                    {tech.name}
                  </h4>
                  <span 
                    style={{ 
                      fontSize: '0.7rem', 
                      fontFamily: 'var(--font-mono)', 
                      background: 'rgba(34, 197, 94, 0.12)', 
                      color: '#22c55e', 
                      padding: '3px 8px', 
                      borderRadius: '4px',
                      fontWeight: 600,
                    }}
                  >
                    {tech.status}
                  </span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.8rem', lineHeight: 1.3, flexGrow: 1 }}>
                  {tech.type}
                </p>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Support: {tech.version}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Phase 2 Future Tech Grid */}
        <div>
          <h3 
            style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '1.4rem', 
              fontWeight: 700, 
              color: '#fff', 
              marginBottom: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
            }}
          >
            <RefreshCw size={16} style={{ color: 'var(--accent-purple)' }} />
            Phase 2: Planned Roadmap (Backend & App)
          </h3>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {futureTech.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.12 + 0.5, duration: 0.5 }}
                className="glass-card"
                style={{
                  padding: '1.2rem 1.4rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(168, 85, 247, 0.15)',
                  background: 'rgba(10, 18, 36, 0.65)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textAlign: 'left',
                }}
                whileHover={{
                  borderColor: 'var(--accent-purple)',
                  boxShadow: '0 8px 25px rgba(168, 85, 247, 0.1)',
                  x: -4
                }}
              >
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '0.3rem' }}>
                    {tech.name}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {tech.type}
                  </p>
                </div>
                <span 
                  style={{ 
                    fontSize: '0.78rem', 
                    fontFamily: 'var(--font-mono)', 
                    color: 'var(--accent-purple)', 
                    background: 'rgba(168, 85, 247, 0.1)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontWeight: 600,
                  }}
                >
                  {tech.timeline}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSlide;
