"use client";
import { useEffect, useRef, useState } from "react";

export default function RestaurantsFeatures() {
  const [isVisible, setIsVisible] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Smart Points Boost",
      description:
        "Fill off-peak hours automatically with 1.5×–3× points multipliers",
      icon: <StarIcon />,
      benefits: [
        "Increase table utilization",
        "Attract quality diners",
        "Boost revenue during slow periods",
      ],
      delay: 200,
    },
    {
      title: "AI SmartAssign™",
      description: "Optimize table assignments and floor management with AI",
      icon: <BrainIcon />,
      benefits: [
        "Reduce wait times",
        "Maximize capacity",
        "Improve guest experience",
      ],
      delay: 400,
    },
    {
      title: "No-Show Protection",
      description: "Reduce cancellations with smart confirmations and deposits",
      icon: <ShieldIcon />,
      benefits: [
        "Card guarantee system",
        "Automated reminders",
        "Flexible deposit options",
      ],
      delay: 600,
    },
    {
      title: "Real-Time Analytics",
      description: "Track performance, guest preferences, and revenue insights",
      icon: <ChartIcon />,
      benefits: [
        "Live dashboard",
        "Guest behavior insights",
        "Revenue optimization",
      ],
      delay: 800,
    },
    {
      title: "Local Support",
      description:
        "Dedicated support team that understands Lebanon's restaurant scene",
      icon: <SupportIcon />,
      benefits: ["24/7 local support", "Arabic & English", "On-site training"],
      delay: 1000,
    },
    {
      title: "Quick Setup",
      description: "Get started in minutes with our streamlined onboarding",
      icon: <RocketIcon />,
      benefits: [
        "15-minute setup",
        "Menu import tools",
        "Staff training included",
      ],
      delay: 1200,
    },
  ];

  return (
    <section
      ref={featuresRef}
      className="relative overflow-hidden py-20 lg:py-24"
      aria-label="Restaurant Features"
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
            Everything You Need to Succeed
          </h2>
          <p
            className={`mt-4 text-lg text-muted-foreground transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Plate combines powerful technology with local expertise to help your
            restaurant thrive
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} isVisible={isVisible} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "1400ms" }}
        >
          <p className="text-muted-foreground mb-6">
            Ready to transform your restaurant operations?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Free Trial
            </button>
            <a
              href="https://calendly.com/callryanforhelp/plate-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-border text-foreground px-8 py-3 rounded-xl font-semibold hover:bg-secondary/20 hover:border-secondary/50 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Book a Demo
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
  title,
  description,
  icon,
  benefits,
  isVisible,
  delay,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
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
        <div className="shrink-0 inline-flex h-12 w-12 rounded-xl bg-[hsl(var(--accent)/.15)] items-center justify-center transform hover:scale-110 transition-all duration-300">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {description}
          </p>

          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))] flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

{
  /* Local animations */
}
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
    transition: transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1), box-shadow 0.35s,
      border-color 0.35s;
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
  }
`}</style>;

// Icons
function StarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 3l2 4 4 .6-3 3 .7 4.3-3.7-2-3.7 2 .7-4.3-3-3L10 7l2-4z" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.12 3 3 0 0 1-.34-5.58l2.5-1.5A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.12 3 3 0 0 0 .34-5.58l-2.5-1.5A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M4 20V6M10 20V10M16 20v-7M4 20h16" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M4.5 16.5c-1.5 1-3.5 1.5-4.5 1.5s-3-.5-4.5-1.5" />
      <path d="M19.5 16.5c1.5 1 3.5 1.5 4.5 1.5s3-.5 4.5-1.5" />
      <path d="M12 2l3 9h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z" />
    </svg>
  );
}
