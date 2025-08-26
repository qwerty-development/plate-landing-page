"use client";
import { useEffect, useRef, useState } from "react";

export default function RestaurantLoyaltyProgram() {
  const [isVisible, setIsVisible] = useState(false);
  const loyaltyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (loyaltyRef.current) {
      observer.observe(loyaltyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const howItWorks = [
    {
      step: 1,
      title: "You Fund the Basics",
      description:
        "You only contribute a small amount (100 points ≈ $1.50) when a guest successfully dines. No booking, no cost.",
      icon: <DollarIcon />,
      delay: 200,
    },
    {
      step: 2,
      title: "You Boost Off-Peak Hours",
      description:
        "Attract diners during quiet periods by offering bonus points to fill empty seats.",
      icon: <TrendingUpIcon />,
      delay: 400,
    },
    {
      step: 3,
      title: "Everyone Benefits",
      description:
        "Guests earn and redeem points across the entire Plate network, creating a massive ecosystem that brings more customers to your door.",
      icon: <NetworkIcon />,
      delay: 600,
    },
  ];

  return (
    <section
      ref={loyaltyRef}
      className="relative overflow-hidden py-20 lg:py-24 bg-[hsl(var(--background))]"
      aria-label="Plate Points Loyalty Program"
    >
      {/* Background with subtle patterns */}
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
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Introducing Plate Points: The Smartest Way to Build Loyalty.
          </h2>
          <p
            className={`mt-6 text-xl text-muted-foreground transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            A revolutionary loyalty program that costs you almost nothing but
            delivers incredible results.
          </p>
        </header>

        {/* How It Works Steps */}
        <div className="mb-16">
          <div className="relative">
            {/* Timeline connector line */}
            <div
              className={`absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[hsl(var(--accent))] to-[hsl(var(--primary))] transform -translate-x-1/2 lg:left-1/2 transition-all duration-1500 ${
                isVisible ? "opacity-60 scale-y-100" : "opacity-0 scale-y-0"
              }`}
              style={{
                transitionDelay: "300ms",
                transformOrigin: "top",
              }}
            />

            {/* Timeline steps */}
            <ol className="relative">
              {howItWorks.map((step, index) => (
                <LoyaltyStep key={index} {...step} isVisible={isVisible} />
              ))}
            </ol>
          </div>
        </div>

        {/* Key Selling Point */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="glass p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Incredibly Affordable & Effective
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              This is an incredibly affordable and effective way to drive repeat
              business, costing you only{" "}
              <span className="font-bold text-primary">
                $0.015 per point funded
              </span>
              .
            </p>
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div
                className={`space-y-3 transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "900ms" }}
              >
                <div className="text-4xl font-bold text-primary">$0.015</div>
                <div className="text-sm text-muted-foreground font-medium">
                  Cost per point
                </div>
              </div>
              <div
                className={`space-y-3 transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "1000ms" }}
              >
                <div className="text-4xl font-bold text-primary">3-5x</div>
                <div className="text-sm text-muted-foreground font-medium">
                  Return on investment
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
                <div className="text-4xl font-bold text-primary">85%</div>
                <div className="text-sm text-muted-foreground font-medium">
                  Customer retention
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
          <p className="text-muted-foreground mb-8 text-lg">
            Ready to build a loyal customer base that keeps coming back?
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
            <span className="relative z-10">Start Your Loyalty Program</span>

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
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15),
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
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 35px 70px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
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
          animation: fadeUp 800ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
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

function LoyaltyStep({
  step,
  title,
  description,
  icon,
  isVisible,
  delay,
}: {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isVisible: boolean;
  delay: number;
}) {
  const isLeft = step % 2 !== 0;

  return (
    <li className="relative mb-12 last:mb-0 flex justify-end lg:grid lg:grid-cols-2">
      <div
        className={`absolute left-6 top-6 w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--primary))] border-4 border-white shadow-2xl flex items-center justify-center transform -translate-x-1/2 z-10 lg:left-1/2 transition-all duration-700 ${
          isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
        style={{ transitionDelay: `${delay + 200}ms` }}
      >
        <span className="text-white font-bold text-lg">{step}</span>
      </div>
      <div
        className={`glass p-8 pl-0 lg:pl-8 reveal w-[calc(100%-4rem)] lg:w-auto ${
          isLeft
            ? "lg:col-start-1 lg:mr-12 lg:justify-self-end lg:text-right"
            : "lg:col-start-2 lg:ml-12 lg:justify-self-start"
        }`}
        style={{ animationDelay: `${delay}ms` }}
      >
        <div
          className={`flex items-center gap-4 ${
            isLeft ? "lg:justify-end" : ""
          }`}
        >
          <span
            className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent)/.15)] to-[hsl(var(--primary)/.15)] border border-[hsl(var(--accent)/.3)] transition-all duration-500 ${
              isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
            style={{ transitionDelay: `${delay + 400}ms` }}
          >
            {icon}
          </span>
          <h3
            className={`text-lg font-bold text-foreground transition-all duration-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            }`}
            style={{ transitionDelay: `${delay + 500}ms` }}
          >
            {title}
          </h3>
        </div>
        <p
          className={`mt-3 text-base text-muted-foreground leading-relaxed transition-all duration-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: `${delay + 600}ms` }}
        >
          {description}
        </p>
      </div>
    </li>
  );
}

// Glass morphism styles - commented out as not currently used
/*
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
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15),
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
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 35px 70px rgba(0, 0, 0, 0.2),
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
*/

// Icons
function DollarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-[hsl(var(--primary))]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function TrendingUpIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-[hsl(var(--primary))]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M22 17l-8.5-8.5-5 5L2 7" />
      <path d="M16 17h6v-6" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-[hsl(var(--primary))]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M9 14h6M9 18h6" />
    </svg>
  );
}
