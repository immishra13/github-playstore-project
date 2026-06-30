import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Terminal, Cpu, Database, Network, Share2, Layers, HelpCircle } from 'lucide-react';

const techItems = [
  {
    icon: <Atom className="tech-react-icon" size={32} />,
    name: "React",
    role: "Frontend Presentation Layer",
    desc: "Provides the interactive presenter, live logs viewer, and iframe view.",
    color: "#00d5ff"
  },
  {
    icon: <Cpu size={32} />,
    name: "Node.js & Express",
    role: "Core API Orchestrator",
    desc: "Manages project flow, validates requests, and spawns job queues.",
    color: "#83cd29"
  },
  {
    icon: <Layers size={32} />,
    name: "Docker Containers",
    role: "Isolated Execution Runtime",
    desc: "Executes builds and hosts the running web directories in sandboxes.",
    color: "#0db7ed"
  },
  {
    icon: <Database size={32} />,
    name: "Redis Server",
    role: "Job Queue & Task Broker",
    desc: "Maintains compilation jobs pipeline and balances multi-container tasks.",
    color: "#a80000"
  },
  {
    icon: <Network size={32} />,
    name: "Nginx Proxy",
    role: "Reverse Proxy & Domain Router",
    desc: "Maps randomized preview host domains to container internal ports.",
    color: "#009639"
  },
  {
    icon: <Database size={32} />,
    name: "PostgreSQL",
    role: "System Database",
    desc: "Caches build metadata, user histories, and repo statistics permanently.",
    color: "#336791"
  },
  {
    icon: <Share2 size={32} />,
    name: "GitHub REST API",
    role: "Source Code Inspector",
    desc: "Checks repo metadata, reads configurations, and crawls file trees.",
    color: "#ffffff"
  },
  {
    icon: <Atom size={32} />,
    name: "Framer Motion",
    role: "Cinematic Transitions Engine",
    desc: "Controls slide entries, SVG path animations, and UI interactions.",
    color: "#f50057"
  }
];

const TechStackSlide = () => {
  return (
    <div className="slide-container" style={{ width: '100%', maxWidth: '1200px' }}>
      <span className="slide-tag">Tech Stack</span>
      <h2 className="slide-title">Engineered with Modern Stacks</h2>
      <p className="slide-subtitle" style={{ marginBottom: '2.5rem' }}>
        A premium system calls for an equally premium, robust developer stack.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          width: '100%',
          position: 'relative',
          zIndex: 5,
        }}
      >
        {techItems.map((tech, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 + 0.3, duration: 0.5 }}
            className="glass-card"
            style={{
              padding: '1.5rem',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              background: 'rgba(10, 18, 36, 0.7)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              textAlign: 'left',
            }}
            whileHover={{
              borderColor: tech.color,
              boxShadow: `0 8px 30px ${tech.color}15`,
              y: -5
            }}
          >
            {/* Round Icon */}
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                background: `radial-gradient(circle, ${tech.color}15 0%, transparent 70%)`,
                border: `1.5px solid ${tech.color}35`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: tech.color,
                marginBottom: '1.2rem',
                boxShadow: `inset 0 0 10px ${tech.color}05`,
              }}
            >
              {tech.icon}
            </div>

            {/* Name */}
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 800, color: '#fff', marginBottom: '0.2rem' }}>
              {tech.name}
            </h4>

            {/* Role */}
            <span
              style={{
                fontSize: '0.72rem',
                fontFamily: 'var(--font-mono)',
                color: tech.color,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '0.8rem',
                display: 'inline-block'
              }}
            >
              {tech.role}
            </span>

            {/* Description */}
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
              {tech.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Spinning React Icon Orbit Helper in CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spinner {
          100% { transform: rotate(360deg); }
        }
        .tech-react-icon {
          animation: spinner 8s linear infinite;
        }
      `}} />
    </div>
  );
};

export default TechStackSlide;
