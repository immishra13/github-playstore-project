import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Award, HelpCircle } from 'lucide-react';

const ConclusionSlide = () => {
  return (
    <div className="slide-container" style={{ textAlign: 'center', height: '100%', position: 'relative' }}>
      {/* Network reconnecting ambient visual behind */}
      <div 
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(0, 229, 255, 0.12) 0%, rgba(168, 85, 247, 0.08) 35%, transparent 65%)',
          filter: 'blur(40px)',
          zIndex: -1,
        }}
      />

      {/* Pulsing Central Target node */}
      <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'relative', width: '100px', height: '100px' }}>
          {/* Glowing Ripple rings */}
          <motion.div
            animate={{ scale: [1, 2], opacity: [0.5, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              inset: 0,
              border: '2px solid var(--accent-cyan)',
              borderRadius: '50%',
            }}
          />
          <motion.div
            animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, delay: 0.8, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              inset: 0,
              border: '2px solid var(--accent-purple)',
              borderRadius: '50%',
            }}
          />

          {/* Solid Central Node */}
          <div
            style={{
              position: 'absolute',
              inset: '10px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #0066ff, #a855f7)',
              border: '2px solid #fff',
              boxShadow: '0 0 25px rgba(0, 102, 255, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
            }}
          >
            <Sparkles size={28} />
          </div>
        </div>
      </div>

      {/* Subheading */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="slide-tag"
      >
        Conclusion
      </motion.span>

      {/* Main Conclusion headline */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="slide-title"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '900px', margin: '0.8rem auto 1.5rem auto' }}
      >
        The Future of Repository Preview Starts Here
      </motion.h2>

      {/* Closing details */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="slide-subtitle"
        style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '750px', marginBottom: '4rem' }}
      >
        By virtualizing environmental builds inside secure, instantaneous Docker sandboxes, GitHub Play Store empowers developers to preview repositories in one click.
      </motion.p>

      {/* Thank you and Q&A Section */}
      <div
        style={{
          display: 'flex',
          gap: '3rem',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 5,
        }}
      >
        {/* Thank You Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="glass-card"
          style={{
            padding: '1.5rem 3rem',
            borderRadius: '16px',
            border: '1.5px solid rgba(0, 102, 255, 0.25)',
            background: 'rgba(10, 18, 36, 0.8)',
            boxShadow: '0 8px 30px rgba(0, 102, 255, 0.1)',
            minWidth: '260px',
          }}
          whileHover={{ scale: 1.03, borderColor: 'var(--accent-cyan)' }}
        >
          <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '0.5rem' }}>
            Final pitch
          </span>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: '#fff' }}>
            Thank You
          </h3>
        </motion.div>

        {/* Questions Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="glass-card"
          style={{
            padding: '1.5rem 3rem',
            borderRadius: '16px',
            border: '1.5px solid rgba(168, 85, 247, 0.25)',
            background: 'rgba(10, 18, 36, 0.8)',
            boxShadow: '0 8px 30px rgba(168, 85, 247, 0.1)',
            minWidth: '260px',
          }}
          whileHover={{ scale: 1.03, borderColor: 'var(--accent-purple)' }}
        >
          <span style={{ fontSize: '0.85rem', color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '0.5rem' }}>
            Discussion
          </span>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: '#fff', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
            Questions?
            <HelpCircle size={28} style={{ color: 'var(--accent-purple)' }} />
          </h3>
        </motion.div>
      </div>
    </div>
  );
};

export default ConclusionSlide;
