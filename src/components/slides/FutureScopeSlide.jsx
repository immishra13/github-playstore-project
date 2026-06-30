import React from 'react';
import { motion } from 'framer-motion';
import { Brain, FileText, Bug, Zap, ShieldCheck, Cloud, PlayCircle, GitFork } from 'lucide-react';

const roadmapPoints = [
  {
    icon: <Brain size={20} />,
    title: "AI Code Explanation",
    desc: "AI module dissecting the source code files and explaining directory functions directly inside the preview dashboard.",
    phase: "Next Release",
    color: "var(--accent-cyan)"
  },
  {
    icon: <FileText size={20} />,
    title: "Automated README",
    desc: "Generates custom developer guides, launch details, and setup instructions dynamically based on structural analysis.",
    phase: "Next Release",
    color: "var(--accent-cyan)"
  },
  {
    icon: <Bug size={20} />,
    title: "AI Bug Detection",
    desc: "Highlights syntax errors, dead code, logic gaps, or module importing issues prior to starting container compilations.",
    phase: "Q4 2026",
    color: "var(--accent-purple)"
  },
  {
    icon: <Zap size={20} />,
    title: "Performance Auditor",
    desc: "Runs Lighthouse metrics and bundle size diagnostics on compiled static assets, reporting potential bottlenecks.",
    phase: "Q4 2026",
    color: "var(--accent-purple)"
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Security Scanner",
    desc: "Audits dependency package trees for known CVE threats, reporting warnings directly inside the build terminal logs.",
    phase: "Q1 2027",
    color: "var(--accent-blue)"
  },
  {
    icon: <Cloud size={20} />,
    title: "One-Click Deploy",
    desc: "Instantly deploy the validated, working container directly to production hosting (Vercel, Netlify, or AWS).",
    phase: "Q1 2027",
    color: "var(--accent-blue)"
  },
  {
    icon: <PlayCircle size={20} />,
    title: "GitHub Actions Bot",
    desc: "Trigger sandbox compilations on pull requests directly from GitHub comments to test PR UI instantly.",
    phase: "Q2 2027",
    color: "#ffffff"
  }
];

const FutureScopeSlide = () => {
  return (
    <div className="slide-container" style={{ width: '100%', maxWidth: '1200px' }}>
      <span className="slide-tag">Project Vision</span>
      <h2 className="slide-title">Future Scope & Roadmap</h2>
      <p className="slide-subtitle" style={{ marginBottom: '2.5rem' }}>
        Evolving from a simple viewer into a complete developer operations and AI-assisted sandbox.
      </p>

      {/* Grid containing Roadmap Branches */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.2rem',
          width: '100%',
          position: 'relative',
          zIndex: 5,
        }}
      >
        {/* Branching SVG road behind */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '50px',
            right: '50px',
            height: '3px',
            background: 'linear-gradient(90deg, var(--accent-cyan) 0%, var(--accent-purple) 50%, var(--accent-blue) 100%)',
            zIndex: -1,
            opacity: 0.3,
          }}
        />

        {roadmapPoints.slice(0, 4).map((pt, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.12 + 0.3, duration: 0.6 }}
            className="glass-card"
            style={{
              padding: '1.5rem',
              borderRadius: '16px',
              border: `1.5px solid rgba(255, 255, 255, 0.08)`,
              background: 'rgba(10, 18, 36, 0.65)',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
            whileHover={{
              borderColor: pt.color,
              boxShadow: `0 8px 30px ${pt.color}15`,
              y: -5
            }}
          >
            {/* Header Icon + Label */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
              <div style={{ color: pt.color, display: 'flex', alignItems: 'center' }}>
                {pt.icon}
              </div>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: pt.color,
                  fontWeight: 600,
                  background: `${pt.color}15`,
                  padding: '3px 8px',
                  borderRadius: '4px',
                  border: `1px solid ${pt.color}25`
                }}
              >
                {pt.phase}
              </span>
            </div>

            {/* Title */}
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.12rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>
              {pt.title}
            </h4>

            {/* Description */}
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4, flexGrow: 1 }}>
              {pt.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.2rem',
          width: '100%',
          position: 'relative',
          zIndex: 5,
          marginTop: '1.2rem',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '50px',
            right: '50px',
            height: '3px',
            background: 'linear-gradient(90deg, var(--accent-purple) 0%, var(--accent-blue) 50%, var(--accent-white) 100%)',
            zIndex: -1,
            opacity: 0.3,
          }}
        />

        {roadmapPoints.slice(4, 7).map((pt, idx) => (
          <motion.div
            key={idx + 4}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (idx + 4) * 0.12 + 0.3, duration: 0.6 }}
            className="glass-card"
            style={{
              padding: '1.5rem',
              borderRadius: '16px',
              border: `1.5px solid rgba(255, 255, 255, 0.08)`,
              background: 'rgba(10, 18, 36, 0.65)',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
            whileHover={{
              borderColor: pt.color,
              boxShadow: `0 8px 30px ${pt.color}15`,
              y: -5
            }}
          >
            {/* Header Icon + Label */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
              <div style={{ color: pt.color, display: 'flex', alignItems: 'center' }}>
                {pt.icon}
              </div>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: pt.color,
                  fontWeight: 600,
                  background: `${pt.color}15`,
                  padding: '3px 8px',
                  borderRadius: '4px',
                  border: `1px solid ${pt.color}25`
                }}
              >
                {pt.phase}
              </span>
            </div>

            {/* Title */}
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.12rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>
              {pt.title}
            </h4>

            {/* Description */}
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4, flexGrow: 1 }}>
              {pt.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FutureScopeSlide;
