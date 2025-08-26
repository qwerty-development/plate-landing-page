"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function RestaurantsCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ctaRef}
      className="relative overflow-hidden py-20 lg:py-24"
      aria-label="Get Started with Plate"
    >
      {/* Inner white background */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <div className="space-y-6">
              <p
                className={`text-xs tracking-widest uppercase text-muted-foreground transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                For Restaurants
              </p>
              <h2
                className={`text-3xl lg:text-4xl font-bold leading-tight transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                More bookings. Fewer gaps. Happier guests.
              </h2>
              <p
                className={`text-muted-foreground max-w-xl transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                Plate helps you fill off-peak hours with points boosts, reduce
                no-shows, and run a smoother floor with smart table assignments
                and real-time insights.
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Reduce no-shows with confirmations",
                  "Boost off-peak with 1.5×–3× points",
                  "SmartAssign™ seating optimization",
                  "Fast setup + local support",
                ].map((feature, index) => (
                  <li
                    key={index}
                    className={`inline-flex items-center gap-2 text-sm text-muted-foreground transition-all duration-1000 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[hsl(var(--accent)/.15)] border border-border">
                      <CheckIcon />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div
                className={`flex flex-wrap gap-3 pt-2 transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "1000ms" }}
              >
                <a
                  href="#"
                  className="inline-flex items-center rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-5 py-2.5 text-sm font-medium shadow-sm hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  Get Plate for Restaurants
                </a>
                <a
                  href="#"
                  className="inline-flex items-center rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-accent/10 transition-all duration-300 transform hover:scale-105"
                >
                  Talk to us
                </a>
              </div>
              <span className="text-sm font-medium text-foreground">
                Local Support
              </span>
              <span className="text-xs text-muted-foreground text-center">
                Arabic & English support
              </span>
            </div>

            {/* Right — iPad photo (slides in + pans from edge to center) */}
            <div
              className={`flex justify-center lg:justify-end transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-95"
              }`}
              style={{ transitionDelay: "1200ms" }}
            >
              <figure
                className="relative w-[22rem] sm:w-[26rem] lg:w-[30rem] animate-slideIn"
                aria-hidden="true"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src="/restaurant.png" // put your image here
                    alt="Host using Plate on iPad"
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain animate-panIn"
                    priority
                  />
                </div>
              </figure>
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

        /* Frame slides in from the bottom */
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(6rem) rotate(1.5deg);
          }
          60% {
            opacity: 1;
            transform: translateY(0.5rem) rotate(0.3deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotate(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 900ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
        }

        /* Image pans from bottom to centered inside the frame */
        @keyframes panIn {
          0% {
            object-position: 50% 90%;
            transform: scale(1.04);
          }
          100% {
            object-position: 50% 50%;
            transform: scale(1);
          }
        }
        .animate-panIn {
          animation: panIn 1600ms cubic-bezier(0.2, 0.8, 0.2, 1) 200ms both;
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-slideIn,
          .animate-panIn,
          .animate-blob,
          .animate-blob-slow {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
