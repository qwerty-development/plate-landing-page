"use client";
import { useEffect, useRef, useState } from "react";

export default function RestaurantManagerApp() {
  const [isVisible, setIsVisible] = useState(false);
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (appRef.current) {
      observer.observe(appRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const appFeatures = [
    {
      name: "Real-time Dashboard",
      description:
        "Manage everything with a live table view, upcoming guest lists, walk-in management, and a digital waitlist.",
      icon: <MonitorIcon />,
      delay: 200,
    },
    {
      name: "Comprehensive Guest CRM",
      description:
        "Build detailed customer profiles to track dining history and offer truly personalized service.",
      icon: <UsersIcon />,
      delay: 400,
    },
    {
      name: "Integrated Analytics",
      description:
        "Access vital data on bookings, guest behavior, and loyalty program performance at a glance.",
      icon: <BarChartIcon />,
      delay: 600,
    },
    {
      name: "Marketing & Review Management",
      description:
        "Track ad performance and manage customer reviews directly from the app.",
      icon: <MegaphoneIcon />,
      delay: 800,
    },
  ];

  return (
    <section
      ref={appRef}
      className="relative overflow-hidden py-20 lg:py-24 bg-[hsl(var(--background))]"
      aria-label="Plate Restaurant Manager App"
    >
      {/* Background with subtle patterns */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-[hsl(var(--background))]" />
        <div
          className="absolute -top-24 -right-28 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-20 animate-blob-slow"
          style={{
            background:
              "radial-gradient(45% 45% at 50% 50%, hsl(var(--accent)/.25), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-24 -left-28 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-20 animate-blob"
          style={{
            background:
              "radial-gradient(45% 45% at 50% 50%, hsl(var(--secondary)/.25), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Content */}
          <div className="space-y-8">
            <h2
              className={`text-3xl lg:text-4xl font-bold tracking-tight transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              The Plate Restaurant Manager App: Your Entire Operation, in Your
              Hand.
            </h2>
            <p
              className={`text-lg text-muted-foreground transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Everything you need to run your restaurant efficiently, all in one
              powerful mobile app. No more juggling between different systems or
              missing important updates.
            </p>

            {/* App Features */}
            <div className="space-y-6">
              {appFeatures.map((feature, index) => (
                <AppFeatureCard
                  key={index}
                  {...feature}
                  isVisible={isVisible}
                />
              ))}
            </div>

            {/* CTA */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                See the App in Action
              </button>
            </div>
          </div>

          {/* Right — App Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div
              className={`relative mx-auto mt-6 sm:mt-10 w-[22rem] sm:w-[26rem] md:w-[28rem] lg:w-[30rem] transition-all duration-1000 transform ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-95"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="relative w-full h-[600px] bg-gradient-to-br from-[hsl(var(--primary)/.1)] to-[hsl(var(--accent)/.1)] rounded-3xl border border-border/30 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">📱</div>
                  <div className="text-2xl font-bold text-foreground">
                    Plate Manager App
                  </div>
                  <div className="text-muted-foreground">
                    Real-time dashboard • Guest CRM • Analytics
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Available on iOS & Android
                  </div>
                </div>
              </div>
            </div>
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

function AppFeatureCard({
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
    <div
      className={`flex items-start gap-4 transition-all duration-1000 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="shrink-0 inline-flex h-12 w-12 rounded-xl bg-[hsl(var(--primary)/.15)] items-center justify-center transform hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-semibold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

// Icons
function MonitorIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-primary"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-primary"
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

function BarChartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-primary"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 20V10M18 20V4M6 20v-6" />
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-primary"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 11l19-7-7 19-2-8-8-2z" />
      <path d="M21 12l-3 3-3-3 3-3z" />
    </svg>
  );
}
