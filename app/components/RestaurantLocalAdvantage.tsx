"use client";
import { useEffect, useRef, useState } from "react";

export default function RestaurantLocalAdvantage() {
  const [isVisible, setIsVisible] = useState(false);
  const advantageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (advantageRef.current) {
      observer.observe(advantageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const differentiators = [
    {
      name: "Local Expertise & Support",
      description:
        "Get real-time, localized support from our in-house Lebanese team that understands your market.",
      icon: <SupportIcon />,
      delay: 200,
    },
    {
      name: "Pioneering AI Technology",
      description:
        "We are the ONLY platform in Lebanon with AI-driven features like SmartAssign™ to optimize your operations.",
      icon: <BrainIcon />,
      delay: 400,
    },
    {
      name: "Cost-Effective Direct Bookings",
      description:
        "Get free or heavily discounted bookings when customers reserve directly through your own website using our widget.",
      icon: <GlobeIcon />,
      delay: 600,
    },
    {
      name: "A Growing Network of Diners",
      description:
        "Benefit from our expanding network of users and unique in-app social features that boost engagement.",
      icon: <NetworkIcon />,
      delay: 800,
    },
  ];

  return (
    <section
      ref={advantageRef}
      className="relative overflow-hidden py-20 lg:py-24"
      style={{ backgroundColor: "hsl(var(--primary))" }}
      aria-label="Local Advantage"
    >
      {/* Background with floating elements */}
      <div aria-hidden="true" className="absolute inset-0">
        <div
          className="absolute -top-28 -left-24 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-25 animate-blob-slow"
          style={{
            background:
              "radial-gradient(40% 40% at 50% 50%, rgba(255,255,255,0.15), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-24 -right-28 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-25 animate-blob"
          style={{
            background:
              "radial-gradient(45% 45% at 50% 50%, rgba(255,255,255,0.15), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`text-3xl lg:text-4xl font-bold tracking-tight text-white transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Designed for Lebanon, by a Team in Lebanon.
          </h2>
          <p
            className={`mt-4 text-lg text-white/80 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            We&apos;re not just another international platform. We&apos;re built
            specifically for your market, your challenges, and your success.
          </p>
        </header>

        {/* Differentiators Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {differentiators.map((differentiator, index) => (
            <DifferentiatorCard
              key={index}
              {...differentiator}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <p className="text-white/80 mb-6">
            Experience the difference that local expertise makes.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Talk to Our Local Team
          </button>
        </div>
      </div>

      {/* Local animations */}
      <style jsx>{`
        .animate-blob {
          animation: blob 18s ease-in-out infinite;
        }
        .animate-blob-slow {
          animation: blob 26s ease-in-out infinite;
        }

        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(28px, -18px) scale(1.06);
          }
          66% {
            transform: translate(-22px, 22px) scale(0.96);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-blob,
          .animate-blob-slow {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

function DifferentiatorCard({
  name,
  description,
  icon,
  isVisible,
  delay,
}: {
  name: string;
  description: string;
  icon: React.ReactNode;
  isVisible: boolean;
  delay: number;
}) {
  return (
    <article
      className={`relative transition-all duration-1000 transform ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-8 opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative h-full rounded-2xl p-6 bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
        <div className="flex items-start gap-4">
          <div className="shrink-0 inline-flex h-12 w-12 rounded-xl bg-white/20 items-center justify-center transform hover:scale-110 transition-all duration-300">
            {icon}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
            <p className="text-white/90 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

// Icons
function SupportIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.12 3 3 0 0 1-.34-5.58l2.5-1.5A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.12 3 3 0 0 0 .34-5.58l-2.5-1.5A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M9 14h6M9 18h6" />
    </svg>
  );
}
