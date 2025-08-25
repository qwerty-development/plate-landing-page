'use client'

export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Base */}
      <div className="absolute inset-0 bg-[hsl(var(--background))]" />

      {/* Slow drifting color fields */}
      <div className="ambient-layer ambient-1" />
      <div className="ambient-layer ambient-2" />

      {/* Subtle grain so glass & gradients feel tactile */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
           style={{
             backgroundImage:
               "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22 viewBox=%220 0 160 160%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.4%22/></svg>')",
           }}
      />

      <style jsx>{`
        .ambient-layer {
          position: absolute;
          inset: -20%;
          filter: blur(48px);
          opacity: 0.45;
          transform: translateZ(0); /* promote to its own layer */
        }
        .ambient-1 {
          background:
            radial-gradient(35% 40% at 15% 30%, hsl(var(--primary) / .35) 0%, transparent 70%),
            radial-gradient(35% 45% at 85% 70%, hsl(var(--accent) / .28) 0%, transparent 72%);
          animation: floatA 38s ease-in-out infinite;
        }
        .ambient-2 {
          background:
            radial-gradient(30% 36% at 70% 25%, hsl(var(--secondary) / .25) 0%, transparent 72%),
            radial-gradient(28% 32% at 30% 80%, hsl(var(--primary) / .18) 0%, transparent 75%);
          animation: floatB 52s ease-in-out infinite;
          mix-blend-mode: lighten;
        }

        @keyframes floatA {
          0%   { transform: translate(-2%, 0) scale(1); }
          50%  { transform: translate(2%, 1.5%) scale(1.03); }
          100% { transform: translate(-2%, 0) scale(1); }
        }
        @keyframes floatB {
          0%   { transform: translate(2%, -1%) scale(1.02) rotate(0deg); }
          50%  { transform: translate(-1%, 1.5%) scale(1.05) rotate(2deg); }
          100% { transform: translate(2%, -1%) scale(1.02) rotate(0deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .ambient-1, .ambient-2 { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
