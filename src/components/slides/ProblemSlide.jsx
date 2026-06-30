import React from 'react';
import { motion } from 'framer-motion';
import { Download, Cpu, Key, Play, XOctagon, Clock, Trash } from 'lucide-react';

const problems = [
  {
    icon: <Download size={22} />,
    title: "1. Git Clone",
    desc: "Cloning heavy repositories, waiting for network downloads, consuming disk space.",
    time: "2 mins",
    status: "Slow"
  },
  {
    icon: <Cpu size={22} />,
    title: "2. Dependency Hell",
    desc: "Running npm install, resolving node version conflicts, downloading gigabytes of node_modules.",
    time: "5 mins",
    status: "Fragile"
  },
  {
    icon: <Key size={22} />,
    title: "3. Config & Environment",
    desc: "Finding correct Node versions, guessing required .env configurations and API secrets.",
    time: "3 mins",
    status: "Confusing"
  },
  {
    icon: <Play size={22} />,
    title: "4. Build & Exec",
    desc: "Running build commands, waiting for compilation, dealing with dependency crashes.",
    time: "4 mins",
    status: "Fails Often"
  },
  {
    icon: <XOctagon size={22} />,
    title: "5. Frustration",
    desc: "Discovering that the project is broken, incomplete, or doesn't meet requirements.",
    time: "Total: 14 mins",
    status: "Wasted Time",
    isFinal: true
  }
];

const ProblemSlide = () => {
  return (
    <div className="slide-container" style={{ width: '100%', maxWidth: '1200px' }}>
      <span className="slide-tag">The Pain Point</span>
      <h2 className="slide-title">Developers Waste Too Much Time</h2>
      <p className="slide-subtitle" style={{ marginBottom: '3.5rem' }}>
        The tedious, manual process required to preview a simple repository.
      </p>

      {/* Interactive Workflow Diagram */}
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
        {/* SVG connection lines in the background */}
        <div
          style={{
            position: 'absolute',
            top: '35px',
            left: '10%',
            right: '10%',
            height: '2px',
            background: 'linear-gradient(90deg, rgba(239, 68, 68, 0.4) 0%, rgba(239, 68, 68, 0.05) 100%)',
            zIndex: -1,
          }}
        />

        {problems.map((prob, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 + 0.3, duration: 0.6 }}
            className="glass-card"
            style={{
              padding: '1.5rem',
              borderRadius: '16px',
              border: prob.isFinal ? '1px solid rgba(239, 68, 68, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
              background: prob.isFinal ? 'rgba(30, 10, 15, 0.8)' : 'rgba(10, 18, 36, 0.6)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: prob.isFinal ? '0 0 30px rgba(239, 68, 68, 0.15)' : 'none',
            }}
          >
            {/* Icon Bubble */}
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: prob.isFinal ? 'rgba(239, 68, 68, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                border: prob.isFinal ? '1.5px solid rgba(239, 68, 68, 0.6)' : '1.5px solid rgba(255, 255, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.2rem',
                color: prob.isFinal ? '#ef4444' : 'var(--text-primary)',
                boxShadow: prob.isFinal ? '0 0 15px rgba(239, 68, 68, 0.3)' : 'none',
              }}
            >
              {prob.icon}
            </div>

            {/* Step Title */}
            <h3 
              style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: '1.2rem', 
                fontWeight: 600, 
                marginBottom: '0.6rem',
                color: prob.isFinal ? '#ef4444' : 'var(--text-primary)'
              }}
            >
              {prob.title}
            </h3>

            {/* Timing Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '3px 8px',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-secondary)',
                marginBottom: '1rem',
              }}
            >
              <Clock size={12} />
              <span>{prob.time}</span>
            </div>

            {/* Step Description */}
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.4, flexGrow: 1 }}>
              {prob.desc}
            </p>

            {/* Status tag */}
            <div
              style={{
                marginTop: '1.2rem',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                textTransform: 'uppercase',
                color: prob.isFinal ? '#ef4444' : '#f59e0b',
                background: prob.isFinal ? 'rgba(239, 68, 68, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                padding: '4px 10px',
                borderRadius: '4px',
                border: prob.isFinal ? '1px solid rgba(239, 68, 68, 0.2)' : '1px solid rgba(245, 158, 11, 0.2)',
              }}
            >
              {prob.status}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          marginTop: '3.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          background: 'rgba(239, 68, 68, 0.05)',
          border: '1px solid rgba(239, 68, 68, 0.2)',
          borderRadius: '12px',
          padding: '1rem 2rem',
          maxWidth: '750px',
        }}
      >
        <Trash size={28} style={{ color: '#ef4444', flexShrink: 0 }} />
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', textAlign: 'left', lineHeight: 1.5 }}>
          <strong style={{ color: '#ef4444' }}>Result:</strong> Developers end up downloading gigabytes of dependency files and configuring local variables, only to realize the project fails to build.
        </p>
      </motion.div>
    </div>
  );
};

export default ProblemSlide;
