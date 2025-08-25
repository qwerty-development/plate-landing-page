"use client";
import { useEffect, useRef, useState } from "react";

export default function RestaurantVision() {
  const [isVisible, setIsVisible] = useState(false);
  const visionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (visionRef.current) {
      observer.observe(visionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const roadmap = [
    {
      step: 1,
      title: "First, We Master Bookings",
      description:
        "We are establishing Plate as the #1 booking app for Lebanese diners, bringing you unprecedented visibility.",
      icon: <CalendarIcon />,
      delay: 200,
    },
    {
      step: 2,
      title: "Next, We Launch Delivery",
      description:
        "We will introduce an in-app delivery module, allowing you to escape the high commissions of third-party apps.",
      icon: <TruckIcon />,
      delay: 400,
    },
    {
      step: 3,
      title: "Finally, You Take Control",
      description:
        "We will provide the tools for you to manage your OWN delivery fleet, giving you full control over your profits and customer experience.",
      icon: <ControlIcon />,
      delay: 600,
    },
  ];

  return (
    <section
      ref={visionRef}
      className="relative overflow-hidden py-20 lg:py-24"
      style={{ backgroundColor: "hsl(var(--primary))" }}
      aria-label="Plate Vision & Roadmap"
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
            Join Us Today and Secure Your Spot in the Future of Dining.
          </h2>
          <p
            className={`mt-4 text-lg text-white/80 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            This isn't just about today's challenges. It's about building the
            future of the restaurant industry in Lebanon.
          </p>
        </header>

        {/* Roadmap Steps */}
        <div className="mb-16">
          <div className="relative">
            {/* Timeline connector line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(var(--accent))] to-[hsl(var(--primary))] via-[hsl(var(--accent))] transform -translate-x-1/2 lg:left-1/2" />

            {/* Timeline steps */}
            <ol className="relative">
              {roadmap.map((step, index) => (
                <RoadmapStep key={index} {...step} isVisible={isVisible} />
              ))}
            </ol>
          </div>
        </div>

        {/* Vision Statement */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="glass p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              The Future is Bright for Early Adopters
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              By joining Plate now, you're not just solving today's problems.
              You're positioning yourself at the forefront of the digital
              transformation of Lebanon's restaurant industry.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">
                  Restaurants already onboard
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">
                  Major phases planned
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  Local ownership
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
          <p className="text-white/80 mb-6">
            Don't wait for the future. Build it with us.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Become an Early Adopter
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

function RoadmapStep({
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
function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M1 3h15v13H1zM16 6h4l3 3v5h-7V6z" />
      <circle cx="7" cy="20" r="2" />
      <circle cx="20" cy="20" r="2" />
    </svg>
  );
}

function ControlIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
