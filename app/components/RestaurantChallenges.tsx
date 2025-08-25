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
      {/* Background with subtle patterns */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-[hsl(var(--background))]" />
        <div
          className="absolute -top-24 -right-28 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-20 animate-blob-slow"
          style={{
            background:
              "radial-gradient(45% 45% at 50% 50%, hsl(var(--primary)/.25), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-24 -left-28 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-20 animate-blob"
          style={{
            background:
              "radial-gradient(45% 45% at 50% 50%, hsl(var(--accent)/.25), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`text-3xl lg:text-4xl font-bold tracking-tight transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Running a Restaurant in Lebanon is Tough. We Get It.
          </h2>
          <p
            className={`mt-4 text-lg text-muted-foreground transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Every day brings new challenges. But what if there was a way to turn
            these problems into opportunities?
          </p>
        </header>

        {/* Pain Points Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <PainPointCard key={index} {...point} isVisible={isVisible} />
          ))}
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
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            See How Plate Solves These
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

function PainPointCard({
  title,
  description,
  icon,
  isVisible,
  delay,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  isVisible: boolean;
  delay: number;
}) {
  return (
    <article
      className={`glass p-6 reveal transition-all duration-1000 transform ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-8 opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 inline-flex h-12 w-12 rounded-xl bg-red-100 items-center justify-center transform hover:scale-110 transition-all duration-300">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

// Glass morphism styles
const glassStyles = `
  .glass {
    position: relative;
    border-radius: 1.25rem;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.22)
    );
    -webkit-backdrop-filter: saturate(180%) blur(22px);
    backdrop-filter: saturate(180%) blur(22px);
    border: 1px solid rgba(255, 255, 255, 0.55);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
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
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
    border-color: rgba(255, 255, 255, 0.7);
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
