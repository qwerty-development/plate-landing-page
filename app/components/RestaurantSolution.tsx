"use client";
import { useEffect, useRef, useState } from "react";

export default function RestaurantSolution() {
  const [isVisible, setIsVisible] = useState(false);
  const solutionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (solutionRef.current) {
      observer.observe(solutionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const coreFeatures = [
    {
      name: "Instant Online Reservations",
      benefit:
        "Reduce no-shows with smart guarantees and make booking seamless for your guests.",
      icon: <CalendarCheckIcon />,
      delay: 200,
    },
    {
      name: "AI SmartAssign™ & Personalization",
      benefit:
        "Optimize your floor plan automatically and offer personalized suggestions to delight every diner.",
      icon: <BrainIcon />,
      delay: 400,
    },
    {
      name: "Integrated Marketing Tools",
      benefit:
        "Reach the right customers with targeted in-app banners, push notifications, and email/WhatsApp campaigns.",
      icon: <MegaphoneIcon />,
      delay: 600,
    },
    {
      name: "Advanced Booking Analytics",
      benefit:
        "Gain deep insights into booking trends and guest preferences to make smarter business decisions.",
      icon: <ChartIcon />,
      delay: 800,
    },
    {
      name: "Universal Loyalty Program",
      benefit:
        "Turn first-time visitors into loyal regulars with a program that benefits everyone.",
      icon: <StarIcon />,
      delay: 1000,
    },
  ];

  return (
    <section
      ref={solutionRef}
      className="relative overflow-hidden py-20 lg:py-24"
      style={{ backgroundColor: "hsl(var(--primary))" }}
      aria-label="Plate Solution"
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
            Plate is Your All-in-One Solution to Streamline Operations and Boost
            Profits.
          </h2>
          <p
            className={`mt-4 text-lg text-white/80 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            We&apos;ve built the complete platform that addresses every challenge you
            just read about.
          </p>
        </header>

        {/* Core Features Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {coreFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} isVisible={isVisible} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 hidden text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          <p className="text-white/80 mb-6">
            Ready to see how these features work together?
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Explore the Manager App
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

function FeatureCard({
  name,
  benefit,
  icon,
  isVisible,
  delay,
}: {
  name: string;
  benefit: string;
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
            <p className="text-white/90 text-sm leading-relaxed">{benefit}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

// Icons
function CalendarCheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <path d="M9 12l2 2 4-4" />
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

function MegaphoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 11l19-7-7 19-2-8-8-2z" />
      <path d="M21 12l-3 3-3-3 3-3z" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M4 20V6M10 20V10M16 20v-7M4 20h16" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 3l2 4 4 .6-3 3 .7 4.3-3.7-2-3.7 2 .7-4.3-3-3L10 7l2-4z" />
    </svg>
  );
}
