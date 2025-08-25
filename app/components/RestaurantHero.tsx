"use client";
import { useEffect, useRef, useState } from "react";

export default function RestaurantHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Rotate through headline options
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const headlines = [
    "Stop Waiting for Calls. Start Filling Tables.",
    "The Future of Dining in Lebanon is Here. Don't Get Left Behind.",
    "Plate: Quick Bookings, Big Flavors, and a Full Restaurant.",
  ];

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden min-h-[90vh] flex items-center pt-20 bg-gradient-to-b from-[hsl(var(--primary)/.08)] via-[hsl(var(--accent)/.12)] to-transparent"
      aria-label="Plate — The Future of Dining in Lebanon"
    >
      {/* Decorative background sprinkles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          maskImage:
            "radial-gradient(60% 60% at 20% 10%, black 0 60%, transparent 70%), radial-gradient(50% 50% at 90% 30%, black 0 55%, transparent 65%), radial-gradient(70% 70% at 50% 100%, black 0 55%, transparent 65%)",
          WebkitMaskImage:
            "radial-gradient(60% 60% at 20% 10%, black 0 60%, transparent 70%), radial-gradient(50% 50% at 90% 30%, black 0 55%, transparent 65%), radial-gradient(70% 70% at 50% 100%, black 0 55%, transparent 65%)",
          background:
            "radial-gradient(1200px 600px at 10% 0%, hsl(var(--primary)/.15) 0, transparent 50%), radial-gradient(900px 500px at 100% 10%, hsl(var(--accent)/.12) 0, transparent 50%), radial-gradient(800px 500px at 50% 100%, hsl(var(--secondary)/.08) 0, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 backdrop-blur px-3 py-1 w-max">
              <span className="h-2 w-2 rounded-full bg-[#f1c20d]" />
              <span className="text-xs font-medium text-muted-foreground">
                For Lebanese Restaurants • Early Adopter Program
              </span>
            </div>

            <div className="space-y-5">
              <h1
                className={`text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-foreground transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <span className="block bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent">
                  {headlines[currentHeadline]}
                </span>
              </h1>
              <p
                className={`text-xl lg:text-2xl text-muted-foreground font-light transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                Join the platform designed to solve the biggest challenges for
                Lebanese restaurants. Let's fill every table, together.
              </p>
            </div>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Become an Early Adopter
              </button>
              <button className="border-2 border-border text-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-secondary/20 hover:border-secondary/50 transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Trust indicators */}
            <div
              className={`flex items-center gap-6 pt-4 transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <div className="flex items-center gap-2">
                <CheckIcon />
                <span className="text-sm text-muted-foreground">
                  Designed for Lebanon
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon />
                <span className="text-sm text-muted-foreground">
                  AI-powered features
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon />
                <span className="text-sm text-muted-foreground">
                  Local support team
                </span>
              </div>
            </div>
          </div>

          {/* Right — Restaurant dashboard mockup */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative mx-auto mt-6 sm:mt-10 w-[22rem] sm:w-[26rem] md:w-[28rem] lg:w-[30rem] motion-safe:animate-fadeUp"
              style={{ animationDelay: "200ms" }}
            >
              <div className="relative w-full h-[500px] bg-gradient-to-br from-[hsl(var(--primary)/.1)] to-[hsl(var(--accent)/.1)] rounded-3xl border border-border/30 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🍽️</div>
                  <div className="text-2xl font-bold text-foreground">
                    Plate Restaurant Dashboard
                  </div>
                  <div className="text-muted-foreground">Coming Soon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-green-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
