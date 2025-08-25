'use client'
<<<<<<< Updated upstream
import Image from "next/image";
=======
>>>>>>> Stashed changes
import { useEffect, useRef, useState } from "react";

export default function RestaurantsCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ctaRef}
      className="relative overflow-hidden py-20 lg:py-24"
      aria-label="Get Started with Plate"
    >
<<<<<<< Updated upstream
      {/* Inner white background */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <div className="space-y-6">
              <p 
                className={`text-xs tracking-widest uppercase text-muted-foreground transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                For Restaurants
              </p>
              <h2 
                className={`text-3xl lg:text-4xl font-bold leading-tight transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                More bookings. Fewer gaps. Happier guests.
              </h2>
              <p 
                className={`text-muted-foreground max-w-xl transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                Plate helps you fill off-peak hours with points boosts, reduce no-shows, and run a smoother floor with smart table assignments and real-time insights.
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Reduce no-shows with confirmations",
                  "Boost off-peak with 1.5×–3× points",
                  "SmartAssign™ seating optimization",
                  "Fast setup + local support"
                ].map((feature, index) => (
                  <li 
                    key={index}
                    className={`inline-flex items-center gap-2 text-sm text-muted-foreground transition-all duration-1000 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[hsl(var(--accent)/.15)] border border-border">
                      <CheckIcon />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div 
                className={`flex flex-wrap gap-3 pt-2 transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '1000ms' }}
              >
                <a
                  href="#"
                  className="inline-flex items-center rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-5 py-2.5 text-sm font-medium shadow-sm hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  Get Plate for Restaurants
                </a>
                <a
                  href="#"
                  className="inline-flex items-center rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-accent/10 transition-all duration-300 transform hover:scale-105"
                >
                  Talk to us
                </a>
=======
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary)/.08)] via-[hsl(var(--accent)/.12)] to-[hsl(var(--secondary)/.08)]" />
      
      {/* Floating background elements */}
      <div aria-hidden="true" className="absolute inset-0">
        <div
          className="absolute -top-24 -left-24 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-20 animate-blob-slow"
          style={{
            background:
              "radial-gradient(45% 45% at 50% 50%, hsl(var(--primary)/.25), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-24 -right-28 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-20 animate-blob"
          style={{
            background:
              "radial-gradient(45% 45% at 50% 50%, hsl(var(--accent)/.25), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className={`glass p-8 lg:p-12 transition-all duration-1000 transform ${
            isVisible
              ? 'translate-y-0 opacity-100 scale-100'
              : 'translate-y-8 opacity-0 scale-95'
          }`}
        >
          <h2
            className={`text-3xl lg:text-4xl font-bold tracking-tight mb-6 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Ready to Transform Your Restaurant?
          </h2>
          
          <p
            className={`text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Join hundreds of successful restaurants already using Plate. Start your free trial today 
            and see the difference in just 14 days.
          </p>

          {/* Benefits list */}
          <div
            className={`grid sm:grid-cols-3 gap-6 mb-8 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--primary)/.15)]">
                <RocketIcon className="h-6 w-6 text-primary" />
>>>>>>> Stashed changes
              </div>
              <span className="text-sm font-medium text-foreground">Quick Setup</span>
              <span className="text-xs text-muted-foreground text-center">Get started in 15 minutes</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--accent)/.15)]">
                <SupportIcon className="h-6 w-6 text-accent-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground">Local Support</span>
              <span className="text-xs text-muted-foreground text-center">Arabic & English support</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--secondary)/.15)]">
                <ShieldIcon className="h-6 w-6 text-secondary-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground">Risk-Free</span>
              <span className="text-xs text-muted-foreground text-center">14-day free trial</span>
            </div>
          </div>

<<<<<<< Updated upstream
            {/* Right — iPad photo (slides in + pans from edge to center) */}
            <div 
              className={`flex justify-center lg:justify-end transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '1200ms' }}
            >
              <figure
                className="relative w-[22rem] sm:w-[26rem] lg:w-[30rem] animate-slideIn"
                aria-hidden="true"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src="/restaurant.png"   // put your image here
                    alt="Host using Plate on iPad"
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain animate-panIn"
                    priority
                  />
                </div>
              </figure>
=======
          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-border text-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-secondary/20 hover:border-secondary/50 transition-all duration-300 transform hover:scale-105">
              Schedule Demo
            </button>
          </div>

          {/* Trust indicators */}
          <div
            className={`mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <div className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              <span>Local support team</span>
>>>>>>> Stashed changes
            </div>
          </div>
        </div>
      </div>

      {/* Local animations */}
      <style jsx>{`
        .animate-blob { animation: blob 18s ease-in-out infinite; }
        .animate-blob-slow { animation: blob 26s ease-in-out infinite; }

        @keyframes blob {
<<<<<<< Updated upstream
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(28px, -18px) scale(1.06); }
          66% { transform: translate(-22px, 22px) scale(0.96); }
        }

        /* Frame slides in from the bottom */
        @keyframes slideIn {
          0%   { opacity: 0; transform: translateY(6rem) rotate(1.5deg); }
          60%  { opacity: 1; transform: translateY(0.5rem) rotate(0.3deg); }
          100% { opacity: 1; transform: translateY(0) rotate(0); }
        }
        .animate-slideIn {
          animation: slideIn 900ms cubic-bezier(.2,.7,.2,1) both;
        }

        /* Image pans from bottom to centered inside the frame */
        @keyframes panIn {
          0%   { object-position: 50% 90%; transform: scale(1.04); }
          100% { object-position: 50% 50%; transform: scale(1); }
        }
        .animate-panIn {
          animation: panIn 1600ms cubic-bezier(.2,.8,.2,1) 200ms both;
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-slideIn, .animate-panIn, .animate-blob, .animate-blob-slow { animation: none !important; }
=======
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(28px, -18px) scale(1.06);
          }
          66% {
            transform: translate(-22px, 22px) scale(0.96);
          }
        }

        .glass {
          position: relative;
          border-radius: 1.5rem;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0.22)
          );
          -webkit-backdrop-filter: saturate(180%) blur(22px);
          backdrop-filter: saturate(180%) blur(22px);
          border: 1px solid rgba(255, 255, 255, 0.55);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1),
            box-shadow 0.35s, border-color 0.35s;
        }
        .glass::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.55),
            rgba(255, 255, 255, 0) 35%
          );
          pointer-events: none;
          mix-blend-mode: screen;
        }
        .glass::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
        }
        .glass:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          border-color: rgba(255, 255, 255, 0.7);
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-blob,
          .animate-blob-slow {
            animation: none !important;
          }
>>>>>>> Stashed changes
        }
      `}</style>
    </section>
  );
}

<<<<<<< Updated upstream
function Feature({ children }: { children: React.ReactNode }) {
  return (
    <li className="inline-flex items-center gap-2 text-sm text-muted-foreground">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[hsl(var(--accent)/.15)] border border-border">
        <CheckIcon />
      </span>
      <span>{children}</span>
    </li>
  );
}

/** tiny inline icon (no extra deps) */
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6L9 17l-5-5" />
=======
// Icons
function RocketIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4.5 16.5c-1.5 1-3.5 1.5-4.5 1.5s-3-.5-4.5-1.5" />
      <path d="M19.5 16.5c1.5 1 3.5 1.5 4.5 1.5s3-.5 4.5-1.5" />
      <path d="M12 2l3 9h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z" />
    </svg>
  );
}

function SupportIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
>>>>>>> Stashed changes
    </svg>
  );
}
