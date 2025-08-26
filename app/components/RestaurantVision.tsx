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
      style={{
        backgroundColor: "hsl(var(--primary))",
      }}
      aria-label="Plate Vision & Roadmap"
    >
      {/* Background with floating elements */}
      <div aria-hidden="true" className="absolute inset-0">
        <div
          className="absolute -top-28 -left-24 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-30 animate-blob-slow"
          style={{
            background:
              "radial-gradient(40% 40% at 50% 50%, rgba(255,255,255,0.25), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-24 -right-28 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-30 animate-blob"
          style={{
            background:
              "radial-gradient(45% 45% at 50% 50%, rgba(255,255,255,0.25), transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 h-[20rem] w-[20rem] rounded-full blur-3xl opacity-20 animate-blob-slow"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.2), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold tracking-tight text-white transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Join Us Today and Secure Your Spot in the Future of Dining.
          </h2>
          <p
            className={`mt-6 text-xl text-white/90 transition-all duration-1000 ${
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
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-white via-[hsl(var(--accent))] to-white opacity-60 transform -translate-x-1/2 lg:left-1/2" />

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
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              The Future is Bright for Early Adopters
            </h3>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              By joining Plate now, you're not just solving today's problems.
              You're positioning yourself at the forefront of the digital
              transformation of Lebanon's restaurant industry.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="text-4xl font-bold text-[hsl(var(--accent))]">
                  500+
                </div>
                <div className="text-sm text-white/70 font-medium">
                  Restaurants already onboard
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-4xl font-bold text-[hsl(var(--accent))]">
                  3
                </div>
                <div className="text-sm text-white/70 font-medium">
                  Major phases planned
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-4xl font-bold text-[hsl(var(--accent))]">
                  100%
                </div>
                <div className="text-sm text-white/70 font-medium">
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
          <p className="text-white/90 mb-8 text-lg">
            Don't wait for the future. Build it with us.
          </p>
          <button className="bg-white text-[hsl(var(--primary))] px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all duration-300 shadow-2xl hover:shadow-white/20 transform hover:scale-105 border-0">
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
    <li className="relative mb-12 last:mb-0 flex justify-end lg:grid lg:grid-cols-2">
      <div className="absolute left-6 top-6 w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(var(--accent))] to-white border-4 border-white shadow-2xl flex items-center justify-center transform -translate-x-1/2 z-10 lg:left-1/2">
        <span className="text-[hsl(var(--primary))] font-bold text-lg">
          {step}
        </span>
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
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/30">
            {icon}
          </span>
          <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
        <p className="mt-3 text-base text-white/80 leading-relaxed">
          {description}
        </p>
      </div>
    </li>
  );
}

// Icons
function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
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
      className="h-5 w-5 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
