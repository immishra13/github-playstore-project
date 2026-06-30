import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, CheckSquare, Search, List, Box, Play, ExternalLink, ArrowRight, PlayCircle, RefreshCw } from 'lucide-react';

const pipelineSteps = [
  {
    icon: <Link size={18} />,
    title: "Paste URL",
    label: "Input",
    log: "Received URL: github.com/user/demo-project"
  },
  {
    icon: <CheckSquare size={18} />,
    title: "Validation",
    label: "Verify",
    log: "Validating Git URL, checking public read access..."
  },
  {
    icon: <Search size={18} />,
    title: "Analysis",
    label: "Inspect",
    log: "Detected: React (Vite). Extracting package.json scripts..."
  },
  {
    icon: <List size={18} />,
    title: "Queue",
    label: "Schedule",
    log: "Job #4982 pushed to Redis. Queue position: 1"
  },
  {
    icon: <Box size={18} />,
    title: "Docker Build",
    label: "Compile",
    log: "npm install completed in 4.2s. Compiling assets..."
  },
  {
    icon: <Play size={18} />,
    title: "Run",
    label: "Launch",
    log: "Container active on port 3000. Launching reverse proxy..."
  },
  {
    icon: <ExternalLink size={18} />,
    title: "Preview URL",
    label: "Deploy",
    log: "Route bound: user-demo-project.preview.githubplaystore.dev"
  },
  {
    icon: <CheckSquare size={18} />,
    title: "Live App",
    label: "View",
    log: "Session established. Preview ready in browser iframe!"
  }
];

const WorkflowSlide = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // Auto-progress simulation
  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % pipelineSteps.length);
    }, 2200);

    return () => clearInterval(interval);
  }, [isRunning]);

  const restartSimulation = () => {
    setActiveStep(0);
    setIsRunning(true);
  };

  return (
    <div className="slide-container" style={{ width: '100%', maxWidth: '1200px' }}>
      <span className="slide-tag">Execution Workflow</span>
      <h2 className="slide-title">Visual Build Pipeline</h2>
      <p className="slide-subtitle" style={{ marginBottom: '2.5rem' }}>
        Step-by-step compilation and deployment cycle, running asynchronously.
      </p>

      {/* Control simulation button */}
      <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button
          onClick={() => setIsRunning(!isRunning)}
          style={{
            background: isRunning ? 'rgba(239, 68, 68, 0.15)' : 'rgba(0, 102, 255, 0.15)',
            border: isRunning ? '1px solid rgba(239, 68, 68, 0.3)' : '1px solid rgba(0, 102, 255, 0.3)',
            color: isRunning ? '#ef4444' : 'var(--accent-cyan)',
            padding: '6px 16px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          {isRunning ? "Pause Simulation" : "Resume Simulation"}
        </button>
        <button
          onClick={restartSimulation}
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: 'var(--text-primary)',
            padding: '6px 16px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <RefreshCw size={12} />
          Reset
        </button>
      </div>

      {/* Horizontally aligned pipeline track */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          position: 'relative',
          padding: '2rem 1rem',
          background: 'rgba(10, 18, 36, 0.4)',
          border: '1px solid rgba(0, 102, 255, 0.15)',
          borderRadius: '16px',
          zIndex: 5,
          marginBottom: '2.5rem',
          overflowX: 'auto',
        }}
      >
        {/* Horizontal glowing line in background */}
        <div
          style={{
            position: 'absolute',
            left: '50px',
            right: '50px',
            height: '3px',
            background: 'rgba(255,255,255,0.05)',
            zIndex: 1,
          }}
        />

        {/* Progress line overlay */}
        <div
          style={{
            position: 'absolute',
            left: '50px',
            width: `calc(${(activeStep / (pipelineSteps.length - 1)) * 100}% - 100px)`,
            height: '3px',
            background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-cyan))',
            boxShadow: '0 0 10px var(--accent-cyan)',
            zIndex: 2,
            transition: 'width 0.5s ease',
          }}
        />

        {pipelineSteps.map((step, idx) => {
          const isActive = idx === activeStep;
          const isCompleted = idx < activeStep;

          return (
            <div
              key={idx}
              onClick={() => {
                setActiveStep(idx);
                setIsRunning(false);
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                zIndex: 3,
                cursor: 'pointer',
                flex: '1 0 110px',
              }}
            >
              {/* Bubble */}
              <motion.div
                animate={{
                  scale: isActive ? 1.25 : 1,
                  borderColor: isActive
                    ? 'var(--accent-cyan)'
                    : isCompleted
                      ? 'var(--accent-blue)'
                      : 'rgba(255,255,255,0.1)',
                  boxShadow: isActive ? '0 0 20px rgba(0, 229, 255, 0.3)' : 'none',
                }}
                transition={{ duration: 0.3 }}
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: isActive
                    ? 'var(--bg-deep)'
                    : isCompleted
                      ? 'rgba(0, 102, 255, 0.15)'
                      : 'rgba(10, 18, 36, 0.95)',
                  border: '2px solid',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isActive
                    ? 'var(--accent-cyan)'
                    : isCompleted
                      ? 'var(--accent-blue)'
                      : 'var(--text-muted)',
                  marginBottom: '0.8rem',
                }}
              >
                {step.icon}
              </motion.div>

              {/* Title */}
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#fff' : 'var(--text-secondary)',
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                }}
              >
                {step.title}
              </span>
            </div>
          );
        })}
      </div>

      {/* Terminal log window matching active pipeline stage */}
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '850px',
          background: 'rgba(6, 11, 22, 0.9)',
          border: '1.5px solid var(--border-glow)',
          fontFamily: 'var(--font-mono)',
          padding: '1.5rem',
          borderRadius: '12px',
          textAlign: 'left',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        }}
      >
        {/* Terminal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.6rem' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#fbbf24' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>SANDBOX SYSTEM LOGS</span>
        </div>

        {/* Terminal Content */}
        <div style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
          <span style={{ color: 'var(--text-muted)' }}>$ </span>
          <span style={{ color: 'var(--accent-cyan)' }}>github-playstore-agent --simulate</span>
          
          <div style={{ marginTop: '0.6rem', color: 'var(--text-secondary)' }}>
            [SYSTEM INFO] Initializing Sandbox orchestration pipeline...
          </div>
          
          <div style={{ marginTop: '0.4rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--accent-purple)' }}>[STAGE {activeStep + 1}/{pipelineSteps.length}]</span>
            <strong>{pipelineSteps[activeStep].title}:</strong>
            <span>{pipelineSteps[activeStep].log}</span>
          </div>

          <div style={{ marginTop: '0.4rem', color: 'var(--text-muted)' }}>
            Status: <span style={{ color: '#22c55e' }}>COMPILING_OK</span> | Latency: 450ms
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowSlide;
