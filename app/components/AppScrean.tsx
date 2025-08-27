"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Shot = {
  src: string;
  alt: string;
  label: string;
};

const SHOTS: Shot[] = [
  { src: "/screenshots/home.PNG", alt: "Home screen", label: "Home" },
  { src: "/screenshots/discover.PNG", alt: "Map view", label: "Map View" },
  { src: "/screenshots/book.PNG", alt: "Booking flow", label: "Booking" },
  { src: "/screenshots/loyalty.PNG", alt: "Points & boosts", label: "Points" },
  {
    src: "/screenshots/insights.PNG",
    alt: "Profile & history",
    label: "Profile",
  },
];

export default function AppScreens() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Shot | null>(null);
  const appScreensRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (appScreensRef.current) {
      observer.observe(appScreensRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Close lightbox on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
        setSelectedImage(null);
      }
    };

    if (isLightboxOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isLightboxOpen]);

  return (
    <section
      ref={appScreensRef}
      className="relative overflow-hidden text-white"
      style={{ backgroundColor: "hsl(345 55% 31%)" }}
      aria-label="Plate App Screenshots"
    >
      {/* Shared floating background (matches Hero / HowPoints) */}
      <div aria-hidden="true" className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "hsl(345 55% 31%)" }}
        />
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <header className="text-center max-w-2xl mx-auto">
          <h2
            className={`text-3xl lg:text-4xl font-bold tracking-tight text-white transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            See the App
          </h2>
          <p
            className={`mt-3 text-white/80 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            A quick look at the Plate experience—from discovery to booking to
            points.
          </p>
        </header>

        {/* Mobile: horizontal snap carousel */}
        <div className="mt-10 sm:hidden -mx-6 px-6">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 min-h-[20rem]">
            {SHOTS.map((s, i) => (
              <PhoneFrame
                key={i}
                className="snap-center shrink-0 w-[14rem] cursor-pointer"
                onClick={() => {
                  setSelectedImage(s);
                  setIsLightboxOpen(true);
                }}
              >
                <Screenshot {...s} />
              </PhoneFrame>
            ))}
          </div>
        </div>

        {/* Tablet/Desktop: responsive grid */}
        <div className="mt-12 hidden sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {SHOTS.map((s, i) => (
            <PhoneFrame
              key={i}
              isVisible={isVisible}
              delay={i * 200}
              className="cursor-pointer"
              onClick={() => {
                setSelectedImage(s);
                setIsLightboxOpen(true);
              }}
            >
              <Screenshot {...s} />
            </PhoneFrame>
          ))}
        </div>

        {/* Optional CTA row */}
        <div
          className={`mt-12 flex items-center justify-center gap-4 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <a
            href="/restaurant"
            className="inline-flex items-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          >
            For Restaurants
          </a>
          <a
            href="https://calendly.com/callryanforhelp/plate-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-white text-[hsl(345,55%,31%)] px-5 py-2.5 text-sm font-medium shadow-sm hover:opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            Book Demo
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => {
            setIsLightboxOpen(false);
            setSelectedImage(null);
          }}
        >
          <div className="relative max-w-7xl max-h-[90vh] mx-4">
            {/* Close button */}
            <button
              onClick={() => {
                setIsLightboxOpen(false);
                setSelectedImage(null);
              }}
              className="absolute -top-12 right-0 text-white hover:text-white/80 transition-colors duration-200 z-10"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image */}
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Instructions */}
            <p className="text-white/60 text-center mt-4 text-xs">
              Click outside or press ESC to close
            </p>
          </div>
        </div>
      )}

      {/* Local animations reused */}
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

function PhoneFrame({
  children,
  className = "",
  isVisible = undefined,
  delay = 0,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  isVisible?: boolean | undefined;
  delay?: number;
  onClick?: () => void;
}) {
  // For mobile carousel (no isVisible prop), always show the frame
  // For desktop grid (with isVisible prop), use the animation state
  const shouldShow = isVisible === undefined ? true : isVisible;

  return (
    <figure
      className={`relative rounded-[2.5rem] overflow-hidden shadow-lg md:shadow-2xl bg-gradient-to-br from-white/20 to-white/10 border border-white/30 p-3 transition-all duration-1000 transform ${
        shouldShow
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-8 opacity-0 scale-95"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      onClick={onClick}
    >
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-50 animate-pulse z-10"></div>

      {/* "phone" bezel */}
      <div className="relative rounded-[1.75rem] bg-black/10 border border-gray-400/60 overflow-hidden">
        {/* top notch */}
        <div className="absolute left-1/2 -translate-x-1/2 top-2 h-4 w-24 rounded-full bg-black/30" />
        {children}
        {/* subtle glass reflection */}
        <span
          className="pointer-events-none absolute inset-0 rounded-[1.75rem] opacity-40"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,255,255,.08) 0%, rgba(255,255,255,0) 25%, rgba(255,255,255,.06) 60%, rgba(255,255,255,0) 100%)",
          }}
        />
      </div>
    </figure>
  );
}

function Screenshot({ src, alt, label }: Shot) {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={1290}
        height={2796}
        className="w-full h-auto select-none"
        priority
        style={{ minHeight: "200px" }}
      />
      <figcaption className="mt-3 text-center text-sm text-white pb-2">
        {label}
      </figcaption>
    </div>
  );
}
