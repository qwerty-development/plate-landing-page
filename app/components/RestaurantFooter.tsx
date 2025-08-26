"use client";
import { useEffect, useRef, useState } from "react";

export default function RestaurantFooter() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-[hsl(var(--primary))] text-white"
      aria-label="Site Footer"
    >
      {/* Background with subtle patterns */}
      <div aria-hidden="true" className="absolute inset-0">
        <div
          className="absolute -top-24 -right-28 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-20 animate-blob-slow"
          style={{
            background:
              "radial-gradient(40% 40% at 50% 50%, rgba(255,255,255,0.15), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-24 -left-28 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-20 animate-blob"
          style={{
            background:
              "radial-gradient(45% 45% at 50% 50%, rgba(255,255,255,0.15), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* CTA Band */}
        <div
          className={`py-16 text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Restaurant?
          </h3>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful restaurants already using Plate. Start
            your free trial today and see the difference in just 14 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              Schedule Demo
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div
          className={`py-16 border-t border-white/20 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h4 className="text-2xl font-bold mb-4">Plate</h4>
              <p className="text-white/80 mb-6 max-w-md">
                The future of dining in Lebanon. We&apos;re building the
                platform that connects restaurants with diners, creating a
                thriving ecosystem for everyone.
              </p>
              <div className="flex items-center gap-4">
                <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300">
                  <span>🍎</span>
                  <span className="text-sm">App Store</span>
                </button>
                <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300">
                  <span>🤖</span>
                  <span className="text-sm">Google Play</span>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-semibold mb-4">For Restaurants</h5>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Manager App
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Loyalty Program
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div
          className={`py-8 border-t border-white/20 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="text-white/60 text-sm">
              © 2024 Plate. All rights reserved. Made with ❤️ in Lebanon.
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  📘
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  📷
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  💼
                </a>
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
    </footer>
  );
}
