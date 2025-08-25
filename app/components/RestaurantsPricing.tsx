"use client";
import { useEffect, useRef, useState } from "react";

export default function RestaurantsPricing() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "yearly">(
    "monthly"
  );
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
      name: "Starter",
      description: "Perfect for small restaurants and cafes",
      monthlyPrice: 49,
      yearlyPrice: 39,
      features: [
        "Up to 50 bookings/month",
        "Basic points boost system",
        "Table management",
        "Email support",
        "Mobile app access",
        "Basic analytics",
      ],
      popular: false,
      delay: 200,
    },
    {
      name: "Professional",
      description: "Ideal for growing restaurants",
      monthlyPrice: 99,
      yearlyPrice: 79,
      features: [
        "Up to 200 bookings/month",
        "Advanced points boost (1.5×–3×)",
        "AI SmartAssign™",
        "No-show protection",
        "Priority support",
        "Advanced analytics",
        "Staff training",
        "Custom branding",
      ],
      popular: true,
      delay: 400,
    },
    {
      name: "Enterprise",
      description: "For restaurant groups and chains",
      monthlyPrice: 199,
      yearlyPrice: 159,
      features: [
        "Unlimited bookings",
        "Multi-location management",
        "Advanced AI features",
        "White-label solution",
        "Dedicated account manager",
        "Custom integrations",
        "On-site setup",
        "24/7 phone support",
      ],
      popular: false,
      delay: 600,
    },
  ];

  const savings = selectedPlan === "yearly" ? 20 : 0;

  return (
    <section
      ref={pricingRef}
      className="relative overflow-hidden py-20 lg:py-24"
      style={{ backgroundColor: "hsl(var(--primary))" }}
      aria-label="Pricing Plans"
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
            Simple, Transparent Pricing
          </h2>
          <p
            className={`mt-4 text-lg text-white/80 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Choose the plan that fits your restaurant&apos;s needs. All plans
            include a 14-day free trial.
          </p>

          {/* Billing toggle */}
          <div
            className={`mt-8 flex items-center justify-center gap-4 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <span
              className={`text-sm ${
                selectedPlan === "monthly" ? "text-white" : "text-white/60"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setSelectedPlan(
                  selectedPlan === "monthly" ? "yearly" : "monthly"
                )
              }
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-primary"
              style={{
                backgroundColor:
                  selectedPlan === "yearly"
                    ? "rgba(255,255,255,0.2)"
                    : "rgba(255,255,255,0.1)",
              }}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  selectedPlan === "yearly" ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-sm ${
                selectedPlan === "yearly" ? "text-white" : "text-white/60"
              }`}
            >
              Yearly
              {savings > 0 && (
                <span className="ml-2 inline-flex items-center rounded-full bg-green-500 px-2 py-0.5 text-xs font-medium text-white">
                  Save {savings}%
                </span>
              )}
            </span>
          </div>
        </header>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
              isVisible={isVisible}
              selectedPlan={selectedPlan}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <p className="text-white/80 mb-6">
            Need a custom plan? Let&apos;s talk about your specific
            requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Contact Sales
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
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
  description,
  monthlyPrice,
  yearlyPrice,
  features,
  popular,
  isVisible,
  delay,
  selectedPlan,
}: {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  popular: boolean;
  isVisible: boolean;
  delay: number;
  selectedPlan: "monthly" | "yearly";
}) {
  const price = selectedPlan === "monthly" ? monthlyPrice : yearlyPrice;

  return (
    <article
      className={`relative transition-all duration-1000 transform ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-8 opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="inline-flex items-center rounded-full bg-yellow-400 px-3 py-1 text-xs font-medium text-gray-900">
            Most Popular
          </span>
        </div>
      )}

      <div
        className={`relative h-full rounded-2xl p-8 transition-all duration-300 ${
          popular
            ? "bg-white text-gray-900 shadow-2xl scale-105"
            : "bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20"
        }`}
      >
        <div className="text-center">
          <h3
            className={`text-xl font-semibold ${
              popular ? "text-gray-900" : "text-white"
            }`}
          >
            {name}
          </h3>
          <p
            className={`mt-2 text-sm ${
              popular ? "text-gray-600" : "text-white/80"
            }`}
          >
            {description}
          </p>

          <div className="mt-6">
            <div className="flex items-baseline justify-center">
              <span
                className={`text-4xl font-bold ${
                  popular ? "text-gray-900" : "text-white"
                }`}
              >
                ${price}
              </span>
              <span
                className={`ml-1 text-sm ${
                  popular ? "text-gray-600" : "text-white/80"
                }`}
              >
                /month
              </span>
            </div>
            {selectedPlan === "yearly" && (
              <p className="mt-1 text-sm text-green-500 font-medium">
                Billed annually
              </p>
            )}
          </div>
        </div>

        <ul className="mt-8 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckIcon
                className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                  popular ? "text-green-500" : "text-white"
                }`}
              />
              <span
                className={`text-sm ${
                  popular ? "text-gray-600" : "text-white/90"
                }`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <button
            className={`w-full rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
              popular
                ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl"
                : "border-2 border-white/30 text-white hover:bg-white/10"
            }`}
          >
            {popular ? "Start Free Trial" : "Get Started"}
          </button>
        </div>
      </div>
    </article>
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
