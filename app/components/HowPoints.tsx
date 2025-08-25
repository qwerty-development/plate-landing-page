'use client'
import React from 'react'

export default function HowPoints() {
  return (
    <section
      className="relative overflow-hidden "
      aria-label="How Plate Points Work"
    >
      {/* faint brand mists so the glass has something to blur */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute -top-24 -left-24 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-[0.10]"
             style={{ background: "radial-gradient(45% 45% at 50% 50%, hsl(var(--primary)/.45), transparent 70%)" }} />
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-[0.10]"
             style={{ background: "radial-gradient(45% 45% at 50% 50%, hsl(var(--accent)/.45), transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <header className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">How Points Work</h2>
          <p className="mt-3 text-muted-foreground">
            Earn at every Plate partner. Boost on off-peak. Redeem anywhere on Plate.
          </p>
        </header>

        {/* Steps (glassy) */}
        <ol className="mt-12 grid gap-6 lg:gap-8 md:grid-cols-3">
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

        {/* Off-peak + FAQ (glassy) */}
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <article className="glass p-6 reveal">
            <div className="flex items-start gap-3">
              <Badge>Boost</Badge>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold">Off-Peak Multipliers</h3>
                <p className="mt-1 text-muted-foreground">
                  Dine during quieter hours and earn <span className="font-medium text-foreground">1.5×–3×</span> points.
                  Restaurants set the boost; Plate makes it easy to find and book.
                </p>
              </div>
            </div>
            <ul className="mt-4 text-sm text-muted-foreground grid sm:grid-cols-3 gap-2">
              <li className="rounded-lg border border-black/10 p-3">Lunch (Mon–Thu): <span className="font-medium text-foreground">1.5×</span></li>
              <li className="rounded-lg border border-black/10 p-3">Early Dinner: <span className="font-medium text-foreground">2×</span></li>
              <li className="rounded-lg border border-black/10 p-3">Late Seating: <span className="font-medium text-foreground">3×</span></li>
            </ul>
          </article>

          <article className="glass p-6 reveal" style={{ animationDelay: '80ms' }}>
            <div className="flex items-start gap-3">
              <Badge>Good to know</Badge>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold">Simple & transparent</h3>
                <ul className="mt-2 space-y-2 text-muted-foreground">
                  <li>• Points appear after the restaurant confirms your visit.</li>
                  <li>• Boosts are applied automatically when you book boosted slots.</li>
                  <li>• Redeem right in checkout—no codes, no hassle.</li>
                </ul>
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
          background: linear-gradient(180deg, rgba(255,255,255,0.40), rgba(255,255,255,0.22));
          -webkit-backdrop-filter: saturate(180%) blur(22px);
          backdrop-filter: saturate(180%) blur(22px);
          border: 1px solid rgba(255,255,255,0.55);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          overflow: hidden;
          transition: transform .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s, border-color .35s;
        }
        .glass::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.55), rgba(255,255,255,0.0) 35%);
          pointer-events: none;
          mix-blend-mode: screen;
        }
        .glass::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          box-shadow: inset 0 0 0 1px rgba(0,0,0,0.06);
        }
        .glass:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(0,0,0,0.12); border-color: rgba(255,255,255,0.7); }

        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(14px) scale(.98); }
          60% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .reveal { animation: fadeUp 700ms cubic-bezier(.2,.7,.2,1) both; }

        @media (prefers-reduced-motion: reduce) {
          .reveal { animation: none !important; }
          .glass { transition: none !important; }
        }
      `}</style>
    </section>
  )
}

function Step({
  number,
  title,
  text,
  icon,
  delay = 0,
}: {
  number: number
  title: string
  text: string
  icon: React.ReactNode
  delay?: number
}) {
  return (
    <li className="relative">
      <div className="glass p-6 reveal" style={{ animationDelay: `${delay}ms` }}>
        <div className="flex items-start gap-3">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--accent)/.15)] border border-white/50 font-semibold">
            {number}
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[hsl(var(--accent)/.15)] border border-white/50">
                {icon}
              </span>
              <h3 className="text-base font-semibold">{title}</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{text}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

/** Small inline icons (no extra deps) */
function BookingIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M7 3v3M17 3v3M4 8h16M6 6h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
      <circle cx="8" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="16" cy="12" r="1" />
    </svg>
  )
}
function PointsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}
function RedeemIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4 10h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8z" />
      <path d="M4 10l2-4h12l2 4M9 10V6m6 4V6" />
    </svg>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[hsl(var(--secondary)/.3)] border border-white/50 px-2.5 py-1 text-xs font-medium">
      {children}
    </span>
  )
}
