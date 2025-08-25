"use client";
import { useEffect, useRef, useState } from "react";

export default function RestaurantsTestimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Sarah Al-Masri",
      role: "Owner, Beirut Bistro",
      content:
        "Plate transformed our restaurant. We're filling tables during off-peak hours and our guests love earning points. The AI table management is a game-changer.",
      avatar: "🍽️",
      rating: 5,
      delay: 200,
    },
    {
      name: "Ahmed Hassan",
      role: "Manager, Mediterranean Grill",
      content:
        "Since using Plate, our no-show rate dropped from 15% to 3%. The points boost system brings in quality diners during slow periods.",
      avatar: "🔥",
      rating: 5,
      delay: 400,
    },
    {
      name: "Layla Tannous",
      role: "Chef & Owner, Fusion Kitchen",
      content:
        "The local support team understands our market perfectly. Setup took 15 minutes and our staff was trained in one session. Highly recommend!",
      avatar: "👩‍🍳",
      rating: 5,
      delay: 600,
    },
    {
      name: "Omar Khalil",
      role: "Operations Director, Food Chain Lebanon",
      content:
        "Managing multiple locations has never been easier. The analytics help us optimize operations across all our restaurants.",
      avatar: "🏢",
      rating: 5,
      delay: 800,
    },
  ];

  return (
    <section
      ref={testimonialsRef}
      className="relative overflow-hidden py-20 lg:py-24 bg-[hsl(var(--background))]"
      aria-label="Customer Testimonials"
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
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`text-3xl lg:text-4xl font-bold tracking-tight transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Loved by Lebanese Restaurants
          </h2>
          <p
            className={`mt-4 text-lg text-muted-foreground transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            See how restaurants across Lebanon are growing their business with
            Plate
          </p>
        </header>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div
          className={`mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <StatCard
            number="500+"
            label="Restaurants"
            description="Using Plate across Lebanon"
          />
          <StatCard
            number="85%"
            label="Revenue Increase"
            description="Average boost during off-peak"
          />
          <StatCard
            number="95%"
            label="Satisfaction Rate"
            description="From our restaurant partners"
          />
          <StatCard
            number="15min"
            label="Setup Time"
            description="From signup to first booking"
          />
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          <p className="text-muted-foreground mb-6">
            Join hundreds of successful restaurants already using Plate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-border text-foreground px-8 py-3 rounded-xl font-semibold hover:bg-secondary/20 hover:border-secondary/50 transition-all duration-300 transform hover:scale-105">
              Read More Stories
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

function TestimonialCard({
  name,
  role,
  content,
  avatar,
  rating,
  isVisible,
  delay,
}: {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
  isVisible: boolean;
  delay: number;
}) {
  return (
    <article
      className={`glass p-6 reveal transition-all duration-1000 transform ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-8 opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 text-3xl">{avatar}</div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1 mb-3">
            {[...Array(rating)].map((_, i) => (
              <StarIcon
                key={i}
                className="h-4 w-4 text-yellow-400 fill-current"
              />
            ))}
          </div>
          <blockquote className="text-muted-foreground text-sm leading-relaxed mb-4">
            "{content}"
          </blockquote>
          <div>
            <div className="font-semibold text-foreground">{name}</div>
            <div className="text-sm text-muted-foreground">{role}</div>
          </div>
        </div>
      </div>
    </article>
  );
}

function StatCard({
  number,
  label,
  description,
}: {
  number: string;
  label: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
        {number}
      </div>
      <div className="font-semibold text-foreground mb-1">{label}</div>
      <div className="text-sm text-muted-foreground">{description}</div>
    </div>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 3l2 4 4 .6-3 3 .7 4.3-3.7-2-3.7 2 .7-4.3-3-3L10 7l2-4z" />
    </svg>
  );
}

{
  /* Local animations */
}
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
    transition: transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1), box-shadow 0.35s,
      border-color 0.35s;
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
    .animate-blob,
    .animate-blob-slow {
      animation: none !important;
    }
    .reveal {
      animation: none !important;
    }
    .glass {
      transition: none !important;
    }
  }
`}</style>;
