'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function RestaurantsHero() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden min-h-[90vh] flex items-center pt-20 bg-gradient-to-b from-[hsl(var(--primary)/.08)] via-[hsl(var(--accent)/.12)] to-transparent"
      aria-label="Plate for Restaurants — Grow Your Business"
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
                For Restaurants • No Setup Fees
              </span>
            </div>

            <div className="space-y-5">
              <h1 
                className={`text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-foreground transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                Grow Your
                <span className="block bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent">
                  Restaurant
                </span>
              </h1>
              <p 
                className={`text-2xl lg:text-3xl text-muted-foreground font-light transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                Fill tables, boost revenue, delight guests
              </p>
              <p 
                className={`text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                Plate helps you fill off-peak hours with smart points boosts, reduce no-shows, 
                and run a smoother floor with AI-powered table management. 
                Built specifically for Lebanon's vibrant restaurant scene.
              </p>
            </div>

            {/* CTAs */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-border text-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-secondary/20 hover:border-secondary/50 transition-all duration-300 transform hover:scale-105">
                Schedule Demo
              </button>
            </div>

            {/* Trust indicators */}
            <div 
              className={`flex items-center gap-6 pt-4 transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              <div className="flex items-center gap-2">
                <CheckIcon />
                <span className="text-sm text-muted-foreground">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon />
                <span className="text-sm text-muted-foreground">Setup in 15 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon />
                <span className="text-sm text-muted-foreground">Local support</span>
              </div>
            </div>
          </div>

          {/* Right — Restaurant dashboard mockup */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative mx-auto mt-6 sm:mt-10 w-[22rem] sm:w-[26rem] md:w-[28rem] lg:w-[30rem] motion-safe:animate-fadeUp"
              style={{ animationDelay: "200ms" }}
            >
              <Image
                src="/restaurant.png"
                alt="Plate Restaurant Dashboard"
                width={1400}
                height={2800}
                className="w-full h-auto select-none drop-shadow-2xl"
                priority
              />
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
