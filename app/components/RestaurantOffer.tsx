"use client";
import { useEffect, useRef, useState } from "react";

export default function RestaurantOffer() {
  const [isVisible, setIsVisible] = useState(false);
  const offerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (offerRef.current) {
      observer.observe(offerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    "6 Months Free Subscription: Experience the full power of Plate Pro at zero cost.",
    "Free Hardware: Get the essential tools to get started, on us.",
    "1 Week 'New on Plate' Feature: Gain prime visibility on the app's homepage.",
    "1 Week Free In-App Banner: Showcase your restaurant with a complimentary banner ad.",
    "2,000 Loyalty Points Credit: A generous injection to kickstart your loyalty program and attract your first guests.",
  ];

  return (
    <section
      ref={offerRef}
      className="relative overflow-hidden py-20 lg:py-24 bg-[hsl(var(--background))]"
      aria-label="Early Adopter Offer"
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
        <div className="text-center max-w-4xl mx-auto">
          {/* Urgency Badge */}
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 mb-8 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm font-medium text-red-700">
              Limited Time Offer • Only for First 100 Restaurants
            </span>
          </div>

          {/* Main Headline */}
          <h2
            className={`text-3xl lg:text-5xl font-bold tracking-tight mb-6 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            An Exclusive Offer for Our First Partners.
            <span className="block text-red-600 mt-2">
              (This Won&apos;t Last Long!)
            </span>
          </h2>

          {/* Subheadline */}
          <p
            className={`text-xl text-muted-foreground mb-12 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            We&apos;re offering an unprecedented deal to our first 100 restaurant
            partners. This is your chance to get ahead of the competition and
            secure your spot in the future of dining.
          </p>

          {/* Benefits List */}
          <div
            className={`space-y-4 mb-12 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            {benefits.map((benefit, index) => (
              <BenefitItem
                key={index}
                benefit={benefit}
                isVisible={isVisible}
                delay={1000 + index * 100}
              />
            ))}
          </div>

          {/* Value Proposition */}
          <div
            className={`glass p-8 mb-12 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "1500ms" }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Total Value: Over $2,500
            </h3>
            <p className="text-muted-foreground">
              This exclusive offer gives you everything you need to succeed with
              Plate, at absolutely no cost to you. It&apos;s our way of saying thank
              you for being an early believer.
            </p>
          </div>

          {/* Final CTA */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "1700ms" }}
          >
            <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-2xl hover:shadow-red-500/25 transform hover:scale-105 animate-pulse">
              Claim Your Early Adopter Offer Now
            </button>
            <p className="text-sm text-muted-foreground mt-4">
              ⚡ Limited to first 100 restaurants • No credit card required •
              14-day free trial
            </p>
          </div>

          {/* Social Proof */}
          <div
            className={`mt-16 grid grid-cols-3 gap-8 text-center transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "1900ms" }}
          >
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">47</div>
              <div className="text-sm text-muted-foreground">
                Spots Already Taken
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">53</div>
              <div className="text-sm text-muted-foreground">Remaining</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">24h</div>
              <div className="text-sm text-muted-foreground">Left to Claim</div>
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

function BenefitItem({
  benefit,
  isVisible,
  delay,
}: {
  benefit: string;
  isVisible: boolean;
  delay: number;
}) {
  return (
    <div
      className={`flex items-start gap-3 transition-all duration-1000 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="shrink-0 inline-flex h-6 w-6 rounded-full bg-green-100 items-center justify-center">
        <CheckIcon className="h-4 w-4 text-green-600" />
      </div>
      <span className="text-lg text-foreground font-medium">{benefit}</span>
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
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
