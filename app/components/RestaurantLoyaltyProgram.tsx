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
            Introducing Plate Points: The Smartest Way to Build Loyalty.
          </h2>
          <p
            className={`mt-4 text-lg text-muted-foreground transition-all duration-1000 ${
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
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(var(--accent))] to-[hsl(var(--primary))] via-[hsl(var(--accent))] transform -translate-x-1/2 lg:left-1/2" />

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
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Incredibly Affordable & Effective
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              This is an incredibly affordable and effective way to drive repeat
              business, costing you only{" "}
              <span className="font-bold text-primary">
                $0.015 per point funded
              </span>
              .
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">$0.015</div>
                <div className="text-sm text-muted-foreground">
                  Cost per point
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">3-5x</div>
                <div className="text-sm text-muted-foreground">
                  Return on investment
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">85%</div>
                <div className="text-sm text-muted-foreground">
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
          <p className="text-muted-foreground mb-6">
            Ready to build a loyal customer base that keeps coming back?
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Start Your Loyalty Program
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
    <li className="relative mb-8 last:mb-0 flex justify-end lg:grid lg:grid-cols-2">
      <div className="absolute left-6 top-6 w-12 h-12 rounded-full bg-[hsl(var(--accent))] border-4 border-white shadow-lg flex items-center justify-center transform -translate-x-1/2 z-10 lg:left-1/2">
        <span className="text-white font-bold text-sm">{step}</span>
      </div>
      <div
        className={`glass p-6 pl-0 lg:pl-6 reveal w-[calc(100%-4rem)] lg:w-auto ${
          isLeft
            ? "lg:col-start-1 lg:mr-8 lg:justify-self-end lg:text-right"
            : "lg:col-start-2 lg:ml-8 lg:justify-self-start"
        }`}
        style={{ animationDelay: `${delay}ms` }}
      >
        <div
          className={`flex items-center gap-3 ${
            isLeft ? "lg:justify-end" : ""
          }`}
        >
          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[hsl(var(--accent)/.15)] border border-white/50">
            {icon}
          </span>
          <h3 className="text-base font-semibold">{title}</h3>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
    </li>
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
function DollarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
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
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
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
      className="h-4 w-4"
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
