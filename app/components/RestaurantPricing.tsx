"use client";
import { useEffect, useRef, useState } from "react";

export default function RestaurantPricing() {
  const [isVisible, setIsVisible] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (pricingRef.current) {
      observer.observe(pricingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: "Plate Lite",
      bestFor: "Essential booking management",
      monthlyCost: "$50",
      bookingFees: "$1 per cover / $0.5 per widget booking",
      features: {
        managerApp: false,
        realTimeFloorplan: false,
        guestCrm: false,
        marketingTools: false,
        analytics: false,
        loyaltyProgram: false,
      },
      delay: 200,
    },
    {
      name: "Plate Pro",
      bestFor: "The complete command center",
      monthlyCost: "$130",
      bookingFees: "Unlimited Free Bookings",
      features: {
        managerApp: true,
        realTimeFloorplan: true,
        guestCrm: true,
        marketingTools: true,
        analytics: true,
        loyaltyProgram: true,
      },
      delay: 400,
    },
  ];

  return (
    <section
      ref={pricingRef}
      className="relative overflow-hidden py-20 lg:py-24 bg-[hsl(var(--background))]"
      aria-label="Pricing Plans"
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
            Pricing That Fits Your Needs and Scales with Your Success.
          </h2>
          <p
            className={`mt-4 text-lg text-muted-foreground transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Start with what you need today, upgrade when you&apos;re ready for more
            power.
          </p>
        </header>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} isVisible={isVisible} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="text-muted-foreground mb-6">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-border text-foreground px-8 py-3 rounded-xl font-semibold hover:bg-secondary/20 hover:border-secondary/50 transition-all duration-300 transform hover:scale-105">
              Schedule Demo
            </button>
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

function PricingCard({
  name,
  bestFor,
  monthlyCost,
  bookingFees,
  features,
  isVisible,
  delay,
}: {
  name: string;
  bestFor: string;
  monthlyCost: string;
  bookingFees: string;
  features: {
    managerApp: boolean;
    realTimeFloorplan: boolean;
    guestCrm: boolean;
    marketingTools: boolean;
    analytics: boolean;
    loyaltyProgram: boolean;
  };
  isVisible: boolean;
  delay: number;
}) {
  const isPro = name === "Plate Pro";

  return (
    <article
      className={`relative transition-all duration-1000 transform ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-8 opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {isPro && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="inline-flex items-center rounded-full bg-yellow-400 px-3 py-1 text-xs font-medium text-gray-900">
            Most Popular
          </span>
        </div>
      )}

      <div
        className={`relative h-full rounded-2xl p-8 transition-all duration-300 ${
          isPro
            ? "bg-white text-gray-900 shadow-2xl scale-105 border-2 border-primary/20"
            : "bg-white/80 backdrop-blur border border-border/60 text-foreground hover:bg-white/90"
        }`}
      >
        <div className="text-center">
          <h3
            className={`text-xl font-semibold ${
              isPro ? "text-gray-900" : "text-foreground"
            }`}
          >
            {name}
          </h3>
          <p
            className={`mt-2 text-sm ${
              isPro ? "text-gray-600" : "text-muted-foreground"
            }`}
          >
            {bestFor}
          </p>

          <div className="mt-6">
            <div className="flex items-baseline justify-center">
              <span
                className={`text-4xl font-bold ${
                  isPro ? "text-gray-900" : "text-foreground"
                }`}
              >
                {monthlyCost}
              </span>
              <span
                className={`ml-1 text-sm ${
                  isPro ? "text-gray-600" : "text-muted-foreground"
                }`}
              >
                /month
              </span>
            </div>
            <p
              className={`mt-2 text-sm ${
                isPro ? "text-gray-600" : "text-muted-foreground"
              }`}
            >
              {bookingFees}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 space-y-4">
          <FeatureRow
            label="Manager App"
            included={features.managerApp}
            isPro={isPro}
          />
          <FeatureRow
            label="Real-time Floor Plan"
            included={features.realTimeFloorplan}
            isPro={isPro}
          />
          <FeatureRow
            label="Guest CRM"
            included={features.guestCrm}
            isPro={isPro}
          />
          <FeatureRow
            label="Marketing Tools"
            included={features.marketingTools}
            isPro={isPro}
          />
          <FeatureRow
            label="Advanced Analytics"
            included={features.analytics}
            isPro={isPro}
          />
          <FeatureRow
            label="Loyalty Program"
            included={features.loyaltyProgram}
            isPro={isPro}
          />
        </div>

        <div className="mt-8">
          <button
            className={`w-full rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
              isPro
                ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl"
                : "border-2 border-border text-foreground hover:bg-secondary/20 hover:border-secondary/50"
            }`}
          >
            {isPro ? "Start Free Trial" : "Get Started"}
          </button>
        </div>
      </div>
    </article>
  );
}

function FeatureRow({
  label,
  included,
  isPro,
}: {
  label: string;
  included: boolean;
  isPro: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span
        className={`text-sm ${
          isPro ? "text-gray-600" : "text-muted-foreground"
        }`}
      >
        {label}
      </span>
      {included ? (
        <CheckIcon className="h-5 w-5 text-green-500" />
      ) : (
        <XIcon className="h-5 w-5 text-gray-400" />
      )}
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

function XIcon({ className }: { className?: string }) {
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
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
