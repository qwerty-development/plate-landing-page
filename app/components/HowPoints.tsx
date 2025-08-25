"use client";
import React from "react";

export default function HowPoints() {
  return (
    <section
      className="relative overflow-hidden "
      aria-label="How Plate Points Work"
    >
      {/* faint brand mists so the glass has something to blur */}
      <div aria-hidden className="absolute inset-0">
        <div
          className="absolute -top-24 -left-24 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-[0.10]"
          style={{
            background:
              "radial-gradient(45% 45% at 50% 50%, hsl(var(--primary)/.45), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-[0.10]"
          style={{
            background:
              "radial-gradient(45% 45% at 50% 50%, hsl(var(--accent)/.45), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <header className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
            How Points Work
          </h2>
          <p className="mt-3 text-muted-foreground">
            Earn at every Plate partner. Boost on off-peak. Redeem anywhere on
            Plate.
          </p>
        </header>

        {/* Steps (glassy) */}
        <div className="mt-12 relative">
          {/* Timeline container with centered line */}
          <div className="relative">
            {/* CORRECTED: Timeline connector line - full height background */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(var(--accent))] to-[hsl(var(--primary))] via-[hsl(var(--accent))] transform -translate-x-1/2 lg:left-1/2" />

            {/* Timeline steps */}
            <ol className="relative">
              <Step
                number={1}
                title="Book & Dine"
                text="Reserve in seconds, check in at the restaurant, and enjoy your meal."
                icon={<BookingIcon />}
                delay={0}
              />
              <Step
                number={2}
                title="Earn Points"
                text="Get points for every completed booking—earn faster on off-peak hours."
                icon={<PointsIcon />}
                delay={80}
              />
              <Step
                number={3}
                title="Redeem Anywhere"
                text="Use points at any Plate partner for discounts or special perks."
                icon={<RedeemIcon />}
                delay={160}
              />
            </ol>
          </div>
        </div>

        {/* Refactored Cards Section */}
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {/* Off-Peak Multipliers Card */}
          <article className="glass p-6 reveal">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Off-Peak Multipliers</h3>
              <Badge>Boost</Badge>
            </div>
            <p className="mt-1 text-muted-foreground">
              Dine during quieter hours and earn 1.5×–3× points. Restaurants set
              the boost; Plate makes it easy to find and book.
            </p>
            <div className="mt-4 grid sm:grid-cols-3 gap-3 text-center">
              <div className="rounded-lg bg-white/50 border border-black/10 p-3 flex flex-col items-center justify-center">
                <SunIcon />
                <span className="text-xs mt-1 text-muted-foreground">
                  Lunch (Mon–Thu)
                </span>
                <span className="font-bold text-lg text-foreground mt-0.5">
                  1.5×
                </span>
              </div>
              <div className="rounded-lg bg-white/50 border border-black/10 p-3 flex flex-col items-center justify-center">
                <SunsetIcon />
                <span className="text-xs mt-1 text-muted-foreground">
                  Early Dinner
                </span>
                <span className="font-bold text-lg text-foreground mt-0.5">
                  2×
                </span>
              </div>
              <div className="rounded-lg bg-white/50 border border-black/10 p-3 flex flex-col items-center justify-center">
                <MoonIcon />
                <span className="text-xs mt-1 text-muted-foreground">
                  Late Seating
                </span>
                <span className="font-bold text-lg text-foreground mt-0.5">
                  3×
                </span>
              </div>
            </div>
          </article>

          {/* Simple & Transparent Card */}
          <article
            className="glass p-6 reveal flex flex-col justify-between"
            style={{ animationDelay: "80ms" }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Simple & transparent</h3>
              <Badge>Good to know</Badge>
            </div>
            <div className="mt-3 space-y-3">
              <div className="flex items-start gap-3">
                <CheckmarkIcon />
                <p className="text-muted-foreground text-sm -mt-0.5">
                  Points appear after the restaurant confirms your visit.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckmarkIcon />
                <p className="text-muted-foreground text-sm -mt-0.5">
                  Boosts are applied automatically when you book boosted slots.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckmarkIcon />
                <p className="text-muted-foreground text-sm -mt-0.5">
                  Redeem right in checkout—no codes, no hassle.
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium hover:bg-accent/10 transition"
              >
                Find Boosted Times
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90 transition"
              >
                Download App
              </a>
            </div>
          </article>
        </div>
      </div>

      {/* iPhone glass + motion */}
      <style jsx>{`
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
          .reveal {
            animation: none !important;
          }
          .glass {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

function Step({
  number,
  title,
  text,
  icon,
  delay = 0,
}: {
  number: number;
  title: string;
  text: string;
  icon: React.ReactNode;
  delay?: number;
}) {
  const isLeft = number % 2 !== 0;

  return (
    <li className="relative mb-8 last:mb-0 flex justify-end lg:grid lg:grid-cols-2">
      <div className="absolute left-6 top-6 w-12 h-12 rounded-full bg-[hsl(var(--accent))] border-4 border-white shadow-lg flex items-center justify-center transform -translate-x-1/2 z-10 lg:left-1/2">
        <span className="text-white font-bold text-sm">{number}</span>
      </div>
      <div
        className={`
          glass p-6 pl-0 lg:pl-6 reveal 
          w-[calc(100%-4rem)] lg:w-auto
          ${
            isLeft
              ? "lg:col-start-1 lg:mr-8 lg:justify-self-end lg:text-right"
              : "lg:col-start-2 lg:ml-8 lg:justify-self-start"
          }
        `}
        style={{ animationDelay: `${delay}ms` }}
      >
        <div
          className={`flex items-center gap-3 ${
            isLeft ? "lg:justify-end" : ""
          }`}
        >
          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[hsl(var(--accent)/.15)] border border-white/50">
            {icon}
          </span>
          <h3 className="text-base font-semibold">{title}</h3>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{text}</p>
      </div>
    </li>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[hsl(var(--secondary)/.3)] border border-white/50 px-2.5 py-1 text-xs font-medium">
      {children}
    </span>
  );
}

/** Small inline icons (no extra deps) */
function BookingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M7 3v3M17 3v3M4 8h16M6 6h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
      <circle cx="8" cy="12" r="1" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="16" cy="12" r="1" />
    </svg>
  );
}
function PointsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
function RedeemIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M4 10h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8z" />
      <path d="M4 10l2-4h12l2 4M9 10V6m6 4V6" />
    </svg>
  );
}

/** Icons for Multiplier Cards */
function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}
function SunsetIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M12 10V2M5 18H3M21 18h-2M17 22H7M12 18a6 6 0 0 0-6-6h12a6 6 0 0 0-6 6Z" />
      <path d="M12 2v8" />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
function CheckmarkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-green-500 shrink-0"
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
