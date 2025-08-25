'use client'
import { useEffect, useRef, useState } from "react";

export default function Highlights() {
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

  return (
    <section
      ref={featuresRef}
      className="relative overflow-hidden"
      aria-label="Why Plate — made for diners & restaurants"
    >
      {/* Top gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-20" />
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />

      {/* Appetizing background wash using your colors */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-[hsl(var(--background))]" />
        <div
          className="absolute -top-24 -right-28 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-25 animate-blob-slow"
          style={{ background: "radial-gradient(45% 45% at 50% 50%, hsl(var(--primary)/.35), transparent 70%)" }}
        />
        <div
          className="absolute -bottom-24 -left-28 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-25 animate-blob"
          style={{ background: "radial-gradient(45% 45% at 50% 50%, hsl(var(--accent)/.35), transparent 70%)" }}
        />
        {/* subtle checker for a linen/placemat feel */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(0,0,0,.9) 1px, transparent 1px),linear-gradient(90deg, rgba(0,0,0,.9) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <header className="max-w-2xl">
          <h2 
            className={`text-3xl lg:text-4xl font-bold tracking-tight transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Why Plate?
          </h2>
          <p 
            className={`mt-3 text-muted-foreground transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Faster bookings for guests. Smarter operations for restaurants.
          </p>
        </header>

        {/* Feature grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {[
            {
              title: "Instant Reservations",
              diner: "Find & book in seconds.",
              resto: "Reduce no-shows with card guarantee or smart rating.",
              icon: <ForkAndPlate />,
              delay: 400
            },
            {
              title: "AI SmartAssign™",
              diner: "Always the right table.",
              resto: "Optimized seating & turnover automatically.",
              icon: <StarsIcon />,
              delay: 600
            },
            {
              title: "Universal Loyalty",
              diner: "Earn & redeem points anywhere on Plate.",
              resto: "Fill off-peak with point boosts.",
              icon: <HeartPoints />,
              delay: 800
            },
            {
              title: "Insights that Matter",
              diner: "More personalized suggestions over time.",
              resto: "Booking & marketing analytics at a glance.",
              icon: <ChartIcon />,
              delay: 1000
            }
          ].map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              diner={feature.diner}
              resto={feature.resto}
              icon={feature.icon}
              isVisible={isVisible}
              delay={feature.delay}
            />
          ))}
        </div>

        {/* Soft CTA / credibility row */}
        <div 
          className={`mt-12 flex flex-col lg:flex-row items-center gap-6 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm uppercase tracking-wide text-muted-foreground">
              Built for Lebanon's F&B scene
            </p>
            <p className="text-lg">
              Local support • Affordable pricing • Restaurant-first features
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-accent/10 transition-all duration-300 transform hover:scale-105"
            >
              For Restaurants
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-5 py-2.5 text-sm font-medium shadow-sm hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Download App
            </a>
          </div>
        </div>
      </div>

      {/* local styles */}
      <style jsx>{`
        .card {
          background: linear-gradient(
              180deg,
              rgba(255,255,255,0.06),
              rgba(255,255,255,0)
            ),
            radial-gradient(60% 60% at 50% 0%, rgba(255,255,255,0.06), transparent 70%);
          border: 1px solid hsl(var(--foreground)/.08);
        }
      `}</style>
    </section>
  );
}

function FeatureCard({
  title,
  diner,
  resto,
  icon,
  isVisible,
  delay
}: {
  title: string;
  diner: string;
  resto: string;
  icon: React.ReactNode;
  isVisible: boolean;
  delay: number;
}) {
  return (
    <article 
      className={`card rounded-2xl p-5 lg:p-6 backdrop-blur supports-[backdrop-filter]:bg-[hsl(var(--card)/.55)] transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-3">
        <div className="shrink-0 inline-flex h-10 w-10 rounded-xl bg-[hsl(var(--accent)/.15)] items-center justify-center transform hover:scale-110 transition-all duration-300">
          {icon}
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold">{title}</h3>
          <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
            <li><span className="font-medium text-foreground">For diners:</span> {diner}</li>
            <li><span className="font-medium text-foreground">For restaurants:</span> {resto}</li>
          </ul>
        </div>
      </div>
    </article>
  );
}

/** Tiny inline icons */
function ForkAndPlate() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M7 3v7M10 3v7M7 7h3M8.5 10V21" />
      <circle cx="17" cy="12" r="4" />
      <path d="M15 19h4" />
    </svg>
  );
}
function StarsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l2 4 4 .6-3 3 .7 4.3-3.7-2-3.7 2 .7-4.3-3-3L10 7l2-4z" />
      <path d="M19.5 17.5l.5 1 .9.1-.7.7.2 1-1-.5-1 .5.2-1-.7-.7 1-.1.6-1z" />
    </svg>
  );
}
function HeartPoints() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 21s-7-4.2-7-10.2C5 8 6.8 6 9 6c1.3 0 2.4.7 3 1.7C12.6 6.7 13.7 6 15 6c2.2 0 4 2 4 4.8 0 6-7 10.2-7 10.2z" />
      <circle cx="12" cy="4" r="1.5" />
    </svg>
  );
}
function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 20V6M10 20V10M16 20v-7M4 20h16" />
    </svg>
  );
}
