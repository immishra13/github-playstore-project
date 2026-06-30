import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, ShieldCheck, Key, RefreshCw, Layers, Lock, Flame } from 'lucide-react';

const securityFeatures = [
  {
    icon: <Layers size={22} />,
    title: "Container Isolation",
    desc: "Every build runs in a completely isolated network namespace, preventing any cross-project snooping."
  },
  {
    icon: <Lock size={22} />,
    title: "Read Only Files",
    desc: "Built files are marked read-only inside the workspace, preventing runtime injections or files modification."
  },
  {
    icon: <Flame size={22} />,
    title: "Ephemeral Dockers",
    desc: "Sandbox containers are generated on-demand and deleted permanently when the user exits."
  },
  {
    icon: <Key size={22} />,
    title: "Secure Env Injection",
    desc: "Inject custom secrets safely at runtime directly into container memory, keeping configs private."
  },
  {
    icon: <RefreshCw size={22} />,
    title: "Automatic Cleanup",
    desc: "Background pruning workers sweep and erase inactive containers and unused caches every 10 minutes."
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Sandbox Execution",
    desc: "Containers run under micro-VM configurations, blocking direct kernel calls or system exploits."
  }
];

const SecuritySlide = () => {
  return (
    <div className="slide-container" style={{ width: '100%', maxWidth: '1200px' }}>
      <span className="slide-tag" style={{ background: 'rgba(168, 85, 247, 0.1)', borderColor: 'rgba(168, 85, 247, 0.2)', color: 'var(--accent-purple)' }}>
        Cyber Security
      </span>
      <h2 className="slide-title">Isolated Sandbox Environments</h2>
      <p className="slide-subtitle" style={{ marginBottom: '2.5rem' }}>
        No project executes directly on native hardware. Complete virtualization secures user code and our servers.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 2fr',
          gap: '2.5rem',
          alignItems: 'center',
          width: '100%',
          position: 'relative',
          zIndex: 5,
        }}
      >
        {/* Visual Shield Graphic */}
        <div
          style={{
            position: 'relative',
            height: '340px',
            background: 'rgba(10, 18, 36, 0.3)',
            border: '1px solid rgba(168, 85, 247, 0.25)',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Shield animation and radial grid lines */}
          <div
            style={{
              position: 'absolute',
              width: '260px',
              height: '260px',
              border: '2px dashed rgba(168, 85, 247, 0.2)',
              borderRadius: '50%',
              animation: 'spin 30s linear infinite',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '180px',
              height: '180px',
              border: '1.5px dashed rgba(0, 229, 255, 0.2)',
              borderRadius: '50%',
              animation: 'spin-reverse 20s linear infinite',
              pointerEvents: 'none',
            }}
          />

          <motion.div
            animate={{
              scale: [0.95, 1.05, 0.95],
              filter: [
                'drop-shadow(0 0 15px rgba(168, 85, 247, 0.2))',
                'drop-shadow(0 0 35px rgba(168, 85, 247, 0.45))',
                'drop-shadow(0 0 15px rgba(168, 85, 247, 0.2))',
              ]
            }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            style={{
              background: 'linear-gradient(135deg, rgba(10, 18, 36, 0.9), rgba(168, 85, 247, 0.1))',
              border: '2.5px solid var(--accent-purple)',
              borderRadius: '50%',
              padding: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 5,
            }}
          >
            <ShieldAlert size={80} style={{ color: 'var(--accent-purple)' }} />
          </motion.div>

          <span
            style={{
              marginTop: '1.8rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              letterSpacing: '3px',
              color: 'var(--accent-purple)',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            RESTRICTED SANDBOX ACTIVE
          </span>
        </div>

        {/* Security Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.2rem',
          }}
        >
          {securityFeatures.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
              className="glass-card"
              style={{
                padding: '1.4rem 1.2rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                background: 'rgba(10, 18, 36, 0.7)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                textAlign: 'left',
              }}
              whileHover={{
                borderColor: 'var(--accent-purple)',
                boxShadow: '0 8px 25px rgba(168, 85, 247, 0.1)',
                y: -3
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-purple)' }}>
                {feat.icon}
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>
                  {feat.title}
                </h4>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          100% { transform: rotate(-360deg); }
        }
      `}} />
    </div>
  );
};

export default SecuritySlide;
