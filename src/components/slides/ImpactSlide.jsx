import React from 'react';
import { motion } from 'framer-motion';
import { Award, UserCheck, ShieldAlert, BookOpen, Heart, TrendingUp } from 'lucide-react';

const metrics = [
  { value: "95%", label: "Time Saved", desc: "Reduces setup and code installation overhead from 15 minutes to under 45 seconds." },
  { value: "10x", label: "Productivity Boost", desc: "Developers explore and evaluate 10 times more open source projects daily." },
  { value: "1-Click", label: "Instant Preview", desc: "No terminals, no git clones, no env setups — completely automated deployment." },
  { value: "100%", label: "SaaS Collaboration", desc: "Share live preview sandboxes immediately with recruiters, team leads, or classmates." }
];

const segments = [
  { icon: <UserCheck size={16} />, title: "Developers", desc: "Audit and verify package repos before importing them." },
  { icon: <BookOpen size={16} />, title: "Students & Teachers", desc: "Instantly run homework templates and grading assignments." },
  { icon: <Award size={16} />, title: "Recruiters", desc: "View candidate project portfolios working live without setting up local builders." },
  { icon: <Heart size={16} />, title: "Open Source Comm.", desc: "Increase repository engagement by giving visitors a test drive sandbox." }
];

const ImpactSlide = () => {
  return (
    <div className="slide-container" style={{ width: '100%', maxWidth: '1200px' }}>
      <span className="slide-tag">Value Proposition</span>
      <h2 className="slide-title">Unleashing Developer Speed</h2>
      <p className="slide-subtitle" style={{ marginBottom: '2.5rem' }}>
        GitHub Play Store eliminates setup bottlenecks and builds instant bridges across development stakeholders.
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
        {/* Statistics Metric Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.2rem',
          }}
        >
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
              className="glass-card"
              style={{
                padding: '2rem 1.5rem',
                borderRadius: '16px',
                border: '1px solid rgba(0, 102, 255, 0.15)',
                background: 'rgba(10, 18, 36, 0.75)',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
              }}
              whileHover={{
                borderColor: 'var(--accent-cyan)',
                boxShadow: '0 8px 30px rgba(0, 229, 255, 0.15)',
                y: -5
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '3rem',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, var(--accent-white), var(--accent-cyan))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.4rem',
                  lineHeight: 1,
                }}
              >
                {m.value}
              </h3>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                {m.label}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stakeholder Benefits List */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            borderRadius: '16px',
            border: '1px solid rgba(168, 85, 247, 0.25)',
            background: 'rgba(10, 18, 36, 0.75)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
          }}
        >
          <h3 
            style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '1.4rem', 
              fontWeight: 700, 
              color: '#fff', 
              marginBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <TrendingUp size={18} style={{ color: 'var(--accent-purple)' }} />
            Target Audience Benefits
          </h3>

          {segments.map((seg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.12 + 0.5, duration: 0.5 }}
              style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
                borderBottom: idx < segments.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                paddingBottom: idx < segments.length - 1 ? '1rem' : '0',
              }}
            >
              <div 
                style={{ 
                  color: 'var(--accent-purple)', 
                  background: 'rgba(168, 85, 247, 0.1)', 
                  padding: '8px', 
                  borderRadius: '8px', 
                  border: '1px solid rgba(168, 85, 247, 0.2)',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {seg.icon}
              </div>
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.2rem' }}>
                  {seg.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  {seg.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactSlide;
