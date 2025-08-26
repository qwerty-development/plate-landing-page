"use client";
import { useEffect, useRef, useState } from "react";

export default function RestaurantChallenges() {
  const [isVisible, setIsVisible] = useState(false);
  const challengesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (challengesRef.current) {
      observer.observe(challengesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const painPoints = [
    {
      title: "Empty Weekdays & Lost Revenue",
      description:
        "Struggling to fill tables during off-peak hours and quiet weekdays?",
      icon: <CalendarIcon />,
      delay: 200,
    },
    {
      title: "High No-Show Rates",
      description:
        "Are last-minute cancellations and no-shows hurting your daily revenue and planning?",
      icon: <XIcon />,
      delay: 400,
    },
    {
      title: "Lack of Customer Insights",
      description:
        "Finding it difficult to understand your guests and bring them back for more?",
      icon: <UsersIcon />,
      delay: 600,
    },
    {
      title: "Ineffective Marketing Spend",
      description:
        "Spending money on marketing without seeing a clear return on your investment?",
      icon: <TrendingDownIcon />,
      delay: 800,
    },
  ];

  return (
    <section
      ref={challengesRef}
      className="relative overflow-hidden py-20 lg:py-24 bg-[hsl(var(--background))]"
      aria-label="Restaurant Challenges in Lebanon"
    >
      {/* Background with dynamic patterns */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-[hsl(var(--background))]" />
        <div
          className="absolute -top-24 -right-28 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-25 animate-blob-slow"
          style={{
            background:
              "radial-gradient(45% 45% at 50% 50%, hsl(var(--primary)/.25), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-24 -left-28 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-25 animate-blob"
          style={{
            background:
              "radial-gradient(45% 45% at 50% 50%, hsl(var(--accent)/.25), transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 h-[20rem] w-[20rem] rounded-full blur-3xl opacity-20 animate-blob-slow"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, hsl(var(--primary)/.15), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <header className="text-center max-w-4xl mx-auto mb-20">
          <h2
            className={`text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Running a Restaurant in Lebanon is{" "}
            <span className="text-primary font-bold">Tough</span>. We Get It.
          </h2>
          <p
            className={`mt-6 text-xl text-muted-foreground transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Every day brings new challenges. But what if there was a way to turn
            these problems into{" "}
            <span className="font-semibold text-primary">opportunities</span>?
          </p>
        </header>

        {/* Pain Points Grid */}
        <div className="grid lg:grid-cols-2 gap- mb-0">
          {painPoints.map((point, index) => (
            <PainPointCard
              key={index}
              {...point}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>

        {/* Challenge Highlight */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <div className="glass  max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              These Challenges Cost Lebanese Restaurants{" "}
              <span className="text-primary">$2.3M+</span> Annually
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From lost revenue to wasted marketing spend, the numbers add up
              fast. But with Plate, you can turn these losses into gains.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div
                className={`space-y-3 transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "1000ms" }}
              >
                <div className="text-4xl font-bold text-primary">$850K</div>
                <div className="text-sm text-muted-foreground font-medium">
                  Lost from no-shows
                </div>
              </div>
              <div
                className={`space-y-3 transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "1100ms" }}
              >
                <div className="text-4xl font-bold text-primary">$1.2M</div>
                <div className="text-sm text-muted-foreground font-medium">
                  Wasted marketing
                </div>
              </div>
              <div
                className={`space-y-3 transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "1200ms" }}
              >
                <div className="text-4xl font-bold text-primary">$250K</div>
                <div className="text-sm text-muted-foreground font-medium">
                  Empty table revenue
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <p className="text-muted-foreground mb-6">
            Sound familiar? You're not alone. But there's a better way.
          </p>
          <button
            className={`bg-primary text-primary-foreground px-10 py-4 rounded-xl font-bold text-lg shadow-2xl border-0 relative overflow-hidden group ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-8 opacity-0 scale-95"
            }`}
            style={{
              transitionDelay: "1200ms",
              transition: "all 0.6s cubic-bezier(0.2, 0.7, 0.2, 1)",
            }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out" />

            {/* Button content */}
            <span className="relative z-10">See How Plate Solves These</span>

            {/* Hover animations */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

        /* Button hover effects */
        .group:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }

        .group:active {
          transform: translateY(0) scale(0.98);
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-blob,
          .animate-blob-slow {
            animation: none !important;
          }
          .reveal {
            animation: none !important;
          }
          .glass {
            transition: none !important;
          }
          .group:hover {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}

function PainPointCard({
  title,
  description,
  icon,
  isVisible,
  delay,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  isVisible: boolean;
  delay: number;
  index: number;
}) {
  return (
    <article
      className={`glass px-4 lg:p-8 reveal transition-all duration-1000 transform group ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-8 opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Desktop Layout - EXACTLY the same as before */}
      <div className="hidden lg:flex items-start gap-6">
        <div className="shrink-0 inline-flex h-16 w-16 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            {description}
          </p>
          {/* Hover indicator */}
          <div className="mt-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-0 -translate-x-2">
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{
                background:
                  "linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary)/0.8))",
              }}
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-sm text-white font-semibold">
                {index === 0 && "Plate solves this"}
                {index === 1 && "Plate solves this too"}
                {index === 2 && "Plate solves this as well"}
                {index === 3 && "Plate solves this perfectly"}
                {index === 4 && "Plate solves this completely"}
                {index === 5 && "Plate solves this entirely"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Only visible on mobile */}
      <div className="lg:hidden p-0">
        <div className="flex items-center justify-start gap-4 mb-4">
          <div className="shrink-0 inline-flex h-10 w-10 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-muted-foreground text-base leading-relaxed">
            {description}
          </p>
          {/* Hover indicator */}
          <div className="mt-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-0 -translate-x-2">
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{
                background:
                  "linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary)/0.8))",
              }}
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-sm text-white font-semibold">
                {index === 0 && "Plate solves this"}
                {index === 1 && "Plate solves this too"}
                {index === 2 && "Plate solves this as well"}
                {index === 3 && "Plate solves this perfectly"}
                {index === 4 && "Plate solves this completely"}
                {index === 5 && "Plate solves this entirely"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

// Glass morphism styles
const glassStyles = `
          .glass {
          position: relative;
          border-radius: 2rem;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.15),
            rgba(255, 255, 255, 0.05)
          );
          -webkit-backdrop-filter: saturate(180%) blur(25px);
          backdrop-filter: saturate(180%) blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.2, 0.7, 0.2, 1);
        }
        .glass::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0) 50%
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
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
        }
        .glass:hover {
          transform: translateY(-8px);
          box-shadow: 
            0 35px 70px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
        }

  @keyframes fadeUp {
    0% {
      opacity: 0;
      transform: translateY(14px) scale(0.98);
    }
    60% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  .reveal {
    animation: fadeUp 700ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
  }

  @media (prefers-reduced-motion: reduce) {
    .reveal {
      animation: none !important;
    }
    .glass {
      transition: none !important;
    }
  }
`;

// Icons
function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-red-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-red-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-red-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function TrendingDownIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-red-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M22 17l-8.5-8.5-5 5L2 7" />
      <path d="M16 17h6v-6" />
    </svg>
  );
}
