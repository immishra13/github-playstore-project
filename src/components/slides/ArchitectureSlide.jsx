import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, AppWindow, Server, Search, ClipboardList, Box, Globe, ExternalLink, HelpCircle } from 'lucide-react';

const Github = ({ size = 24, style, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    style={{ display: 'inline-block', ...style }}
    {...props}
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const nodes = [
  {
    id: "user",
    title: "1. User (Browser)",
    icon: <User size={20} />,
    x: 100, y: 50,
    desc: "Pastes repository URL, views build logs, and interacts with the final application.",
    details: "Initiates the workflow via HTTPS. Receives real-time build updates via WebSockets and gets redirected to the secure sandboxed application once compiled successfully."
  },
  {
    id: "frontend",
    title: "2. Frontend Web App",
    icon: <AppWindow size={20} />,
    x: 350, y: 50,
    desc: "A responsive React dashboard providing terminal logs and direct browser preview.",
    details: "Built with Vite & React. Offers interactive terminal emulator to show npm logs and live framework status, housing the embedded iframe for previewing the repository."
  },
  {
    id: "backend",
    title: "3. Backend API",
    icon: <Server size={20} />,
    x: 600, y: 50,
    desc: "Node.js core service orchestrating the sandbox creation, status reporting, and caching.",
    details: "Express server handling request validation, auth checks, and communication with the DB and queue. Spawns tasks and returns preview session information."
  },
  {
    id: "github",
    title: "4. GitHub API",
    icon: <Github size={20} />,
    x: 850, y: 50,
    desc: "Retrieves metadata, file structure, and configuration without full git clones.",
    details: "Fetches package.json, vite.config.js, or next.config.js to check repository legitimacy, verify public access, and extract dependencies before dispatching build tasks."
  },
  {
    id: "analyzer",
    title: "5. Repo Analyzer",
    icon: <Search size={20} />,
    x: 850, y: 160,
    desc: "AI-assisted compiler parser detecting project types, node versions, and build steps.",
    details: "Locally inspects files to automatically determine the exact technology (React, Vue, Vite, etc.), package manager (npm, yarn, pnpm), and optimum shell commands."
  },
  {
    id: "queue",
    title: "6. Redis Job Queue",
    icon: <ClipboardList size={20} />,
    x: 600, y: 160,
    desc: "High-performance task queue managing compilation loads and scaling docker builders.",
    details: "Ensures server reliability under heavy concurrent loads. Manages job prioritization, retry schedules, and balances container instances."
  },
  {
    id: "docker",
    title: "7. Docker Builder",
    icon: <Box size={20} />,
    x: 350, y: 160,
    desc: "Ephemeral isolated containers compiling code and hosting the active runtime.",
    details: "Spins up a secure, clean container, downloads the repo, runs standard bundle compilation, and isolates environment variables to block arbitrary network execution vulnerabilities."
  },
  {
    id: "server",
    title: "8. Preview Server",
    icon: <Globe size={20} />,
    x: 100, y: 160,
    desc: "Nginx reverse proxy routing requests dynamically to live sandboxed ports.",
    details: "Listens for traffic on unique generated subdomains (e.g. *.preview.githubplaystore.dev) and routes it safely to the specific port of the Docker container."
  },
  {
    id: "url",
    title: "9. Live URL",
    icon: <ExternalLink size={20} />,
    x: 100, y: 270,
    desc: "Secure HTTPS endpoint displaying the fully operational user project.",
    details: "The final product: a shareable, secure sandbox link that displays the fully rendered project with hot-module reloading and responsive client interactions."
  }
];

// Lines linking coordinates
const connectionLines = [
  { from: "user", to: "frontend", path: "M 200 50 L 350 50" },
  { from: "frontend", to: "backend", path: "M 450 50 L 600 50" },
  { from: "backend", to: "github", path: "M 700 50 L 850 50" },
  { from: "github", to: "analyzer", path: "M 850 90 L 850 160" },
  { from: "analyzer", to: "queue", path: "M 850 160 L 700 160" },
  { from: "queue", to: "docker", path: "M 600 160 L 450 160" },
  { from: "docker", to: "server", path: "M 350 160 L 200 160" },
  { from: "server", to: "url", path: "M 100 160 L 100 270" },
  // Extra feedback path
  { from: "url", to: "user", path: "M 100 270 L 100 90", dashed: true }
];

const ArchitectureSlide = () => {
  const [hoveredNode, setHoveredNode] = useState(nodes[0]);

  return (
    <div className="slide-container" style={{ width: '100%', maxWidth: '1200px' }}>
      <span className="slide-tag">Architecture</span>
      <h2 className="slide-title">System Infrastructure</h2>
      <p className="slide-subtitle" style={{ marginBottom: '2rem' }}>
        Hover over any infrastructure card to understand the underlying mechanics.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '70% 30%',
          gap: '2rem',
          width: '100%',
          alignItems: 'center',
          position: 'relative',
          zIndex: 5,
        }}
      >
        {/* Interactive Architecture Graphic Panel */}
        <div
          style={{
            position: 'relative',
            height: '340px',
            background: 'rgba(10, 18, 36, 0.4)',
            border: '1px solid rgba(0, 102, 255, 0.15)',
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          {/* SVG Connector Lines */}
          <svg
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
            }}
          >
            <defs>
              <linearGradient id="glowing-line" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0066ff" />
                <stop offset="50%" stopColor="#00e5ff" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>

            {connectionLines.map((line, idx) => (
              <g key={idx}>
                {/* Background line shadow */}
                <path
                  d={line.path}
                  fill="none"
                  stroke="rgba(0, 102, 255, 0.08)"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                {/* Active line with dash animation */}
                <path
                  d={line.path}
                  fill="none"
                  stroke={line.dashed ? "rgba(168, 85, 247, 0.4)" : "url(#glowing-line)"}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray={line.dashed ? "6, 6" : "15, 10"}
                  className="svg-flow-path"
                />
              </g>
            ))}
          </svg>

          {/* Floating Nodes */}
          {nodes.map((node) => {
            const isHovered = hoveredNode.id === node.id;
            return (
              <div
                key={node.id}
                onMouseEnter={() => setHoveredNode(node)}
                style={{
                  position: 'absolute',
                  left: `${node.x}px`,
                  top: `${node.y}px`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: isHovered ? 10 : 2,
                  cursor: 'pointer',
                  width: '180px',
                }}
              >
                <div
                  className="glass-card"
                  style={{
                    padding: '0.8rem 1rem',
                    borderRadius: '12px',
                    background: isHovered ? 'var(--bg-card-hover)' : 'rgba(10, 18, 36, 0.8)',
                    borderColor: isHovered ? 'var(--accent-cyan)' : 'var(--border-glow)',
                    boxShadow: isHovered ? '0 0 20px rgba(0, 229, 255, 0.25)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    textAlign: 'left',
                  }}
                >
                  <div
                    style={{
                      color: isHovered ? 'var(--accent-cyan)' : 'var(--accent-blue)',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {node.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: isHovered ? '#fff' : 'var(--text-primary)',
                      lineHeight: 1.2,
                    }}
                  >
                    {node.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="glass-card"
          style={{
            height: '340px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid rgba(168, 85, 247, 0.25)',
            background: 'rgba(10, 18, 36, 0.8)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4), inset 0 0 15px rgba(168, 85, 247, 0.05)',
            padding: '2rem 1.5rem',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                color: 'var(--accent-cyan)',
                marginBottom: '1rem',
              }}
            >
              {hoveredNode.icon}
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 700 }}>
                {hoveredNode.title}
              </h3>
            </div>
            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.5,
                color: '#fff',
                marginBottom: '1.2rem',
                fontWeight: 500,
              }}
            >
              {hoveredNode.desc}
            </p>
            <p
              style={{
                fontSize: '0.88rem',
                lineHeight: 1.5,
                color: 'var(--text-secondary)',
              }}
            >
              {hoveredNode.details}
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              paddingTop: '1rem',
            }}
          >
            <HelpCircle size={14} style={{ color: 'var(--accent-purple)' }} />
            <span>Hover infrastructure nodes</span>
          </div>
        </div>
      </div>

      {/* Styled animation for flowing path dashes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dashflow {
          to {
            stroke-dashoffset: -40;
          }
        }
        .svg-flow-path {
          animation: dashflow 2s linear infinite;
        }
      `}} />
    </div>
  );
};

export default ArchitectureSlide;
