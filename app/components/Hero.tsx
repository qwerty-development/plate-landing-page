"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
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
      className="relative overflow-hidden min-h-[90vh] flex items-center pt-0 bg-gradient-to-b from-[#154c76]/10 via-[#add8e6]/20 to-transparent"
      aria-label="Plate — Book restaurants easily"
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
            "radial-gradient(1200px 600px at 10% 0%, #add8e6 0, transparent 50%), radial-gradient(900px 500px at 100% 10%, #f4afa8 0, transparent 50%), radial-gradient(800px 500px at 50% 100%, #ea694b1a 0, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 backdrop-blur px-3 py-1 w-max">
              <span className="h-2 w-2 rounded-full bg-[#f1c20d]" />
              <span className="text-xs font-medium text-muted-foreground">
                Reserve in seconds • No calls
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
                Plate
              </h1>
              <p
                className={`text-2xl lg:text-3xl text-muted-foreground font-light transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                Quick Bookings, Big Flavors
              </p>
              <p
                className={`text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                Discover and book the best restaurants around you—from cozy
                brunch spots to chef-driven kitchens. Plate makes dining plans
                effortless and delicious.
              </p>
            </div>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              {/* <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Learn More
              </button> */}
              <a
                href="https://calendly.com/callryanforhelp/plate-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-border text-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-secondary/20 hover:border-secondary/50 transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Book a Demo
              </a>
            </div>
          </div>

          {/* Right — mockup with NO background/halo/card */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative mx-auto mt-6 sm:mt-10 w-[22rem] sm:w-[26rem] md:w-[28rem] lg:w-[30rem] motion-safe:animate-fadeUp"
              style={{ animationDelay: "200ms" }}
            >
              <Image
                src="/homepage-mockup.png"
                alt="Plate app — home"
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
