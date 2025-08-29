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
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 bg-[hsl(var(--background))]"
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

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <header className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Running a Restaurant in Lebanon is{" "}
            <span className="text-primary font-bold">Tough</span>. We Get It.
          </h2>
          <p
            className={`mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Every day brings new challenges—from managing staff to keeping
            guests happy. But the biggest pain points? They&apos;re usually the
            same across all restaurants.
          </p>
        </header>

        {/* Pain points grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className={`group relative overflow-hidden rounded-2xl border border-border/30 bg-card/50 backdrop-blur-sm p-4 sm:p-5 lg:p-6 transition-all duration-1000 hover:border-border/50 hover:bg-card/70 hover:shadow-lg hover:shadow-primary/5 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${point.delay}ms` }}
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="relative z-10 mb-3 sm:mb-4">
                <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 border border-primary/20">
                  <div className="text-primary">{point.icon}</div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-2 sm:space-y-3">
                <h3 className="text-base sm:text-lg font-semibold tracking-tight">
                  {point.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-12 sm:mt-16 text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
            Sound familiar? You&apos;re not alone.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="#solution"
              className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            >
              See How We Help
            </a>
            <a
              href="https://calendly.com/callryanforhelp/plate-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-border text-foreground px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold hover:bg-secondary/20 hover:border-secondary/50 transition-all duration-300 transform hover:scale-105"
            >
              Talk to Us
            </a>
          </div>
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

        /* Respect reduced motion */
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

/* Icons (inline, no extra deps) */
function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 sm:h-6 sm:w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 sm:h-6 sm:w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 sm:h-6 sm:w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="m22 21-2-2a4 4 0 0 0-4-4H12a4 4 0 0 0-4 4v2" />
      <circle cx="17" cy="7" r="4" />
    </svg>
  );
}

function TrendingDownIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 sm:h-6 sm:w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <polyline points="16 17 22 17 22 11" />
    </svg>
  );
}
