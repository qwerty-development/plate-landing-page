"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type NavItem = { href: string; label: string };

const NAV_ITEMS: NavItem[] = [
  { href: "#how-points", label: "How" },
  { href: "#screens", label: "Screens" },
  { href: "#restaurants", label: "Restaurants" },
  { href: "#features", label: "Features" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(""); // '#how-points', etc.
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Add background + shadow when scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: highlight the link for the section in view
  useEffect(() => {
    const ids = NAV_ITEMS.map((i) => i.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // pick the most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0.25, 0.5, 0.75] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Close menu on route/hash change via click
  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  // Close menu with Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // smooth scroll with offset for sticky nav
  const handleAnchor = (href: string) => (e: React.MouseEvent) => {
    const id = href.replace("#", "");

    // If we're not on the homepage, redirect to homepage with hash
    if (pathname !== "/") {
      e.preventDefault();
      window.location.href = `/${href}`;
      return;
    }

    // If we're on the homepage, handle smooth scrolling
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const navH = navRef.current?.offsetHeight ?? 72;
    const top = el.getBoundingClientRect().top + window.scrollY - (navH + 12);
    window.history.pushState(null, "", href);
    window.scrollTo({ top, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Skip link for a11y */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:top-3 focus:left-3 bg-black text-white px-3 py-2 rounded"
      >
        Skip to content
      </a>

      <div
        ref={navRef}
        className={[
          "sticky top-0 z-50",
          "border-b transition-all duration-500 ease-out",
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-border/40 shadow-xl shadow-primary/5"
            : "bg-transparent border-transparent",
        ].join(" ")}
        aria-label="Main navigation"
      >
        {/* Enhanced glassmorphism overlay */}
        {scrolled && (
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 pointer-events-none" />
        )}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Brand - Clean and elegant */}
            <Link href="/" className="flex items-center gap-2">
              {/* If you have a logo image, drop it here */}
              {/* <img src="/logo.svg" alt="Plate" className="h-6 w-6" /> */}
              <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-[hsl(var(--foreground))] via-[hsl(var(--primary))] to-[hsl(var(--accent))]">
                Plate
              </span>
            </Link>

            {/* Desktop nav - Subtle and elegant hover effects */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={pathname === "/" ? item.href : `/${item.href}`}
                  onClick={handleAnchor(item.href)}
                  className={[
                    "relative px-5 py-3 text-sm font-semibold rounded-2xl transition-all duration-300 group nav-link",
                    active === item.href
                      ? "text-foreground bg-gradient-to-br from-[hsl(var(--accent)/.15)] via-[hsl(var(--primary)/.10)] to-[hsl(var(--accent)/.05)] shadow-sm border border-primary/15"
                      : "text-muted-foreground hover:text-foreground hover:bg-[hsl(var(--accent)/.09)]",
                  ].join(" ")}
                >
                  {/* Active state indicator */}
                  {active === item.href && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-br from-primary to-accent rounded-full" />
                  )}

                  {/* Subtle hover background */}
                  <div className="absolute inset-0 bg-[hsl(var(--accent)/.03)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                  <span className="relative z-10 tracking-wide">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs - Premium styling with advanced effects */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/restaurant"
                className="relative inline-flex items-center rounded-2xl border border-border/30 bg-white/50 backdrop-blur-md px-6 py-3 text-sm font-semibold transition-all duration-300 hover:bg-white/70 hover:border-border/50 hover:shadow-xl hover:shadow-primary/10 hover:scale-105 group overflow-hidden"
              >
                {/* Glassmorphism enhancement */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-secondary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-400" />

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 -z-10" />

                <span className="relative z-10 tracking-wide">
                  For Restaurants
                </span>
              </Link>
              <a
                href="https://calendly.com/callryanforhelp/plate-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--primary)/.95)] to-[hsl(var(--primary)/.9)] text-[hsl(var(--primary-foreground))] px-6 py-3 text-sm font-bold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/35 hover:from-[hsl(var(--primary)/.98)] hover:to-[hsl(var(--primary)/.88)] hover:scale-105 transition-all duration-300 group overflow-hidden"
              >
                {/* Premium gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-accent/15 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-400" />

                {/* Animated shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-2xl transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-800 -z-10" />

                {/* Pulsing glow */}
                <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500 animate-pulse" />

                <span className="relative z-10 tracking-wide">Book Demo</span>
                <ArrowRightIcon className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
              </a>
            </div>

            {/* Mobile menu button - Enhanced with better touch targets and micro-interactions */}
            <button
              className="md:hidden inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border/40 bg-white/80 backdrop-blur-md hover:bg-white/90 hover:border-border/60 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl group menu-button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <div className="relative">
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-hover:scale-110 transition-transform duration-300 -z-10" />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile drawer - Enhanced with better animations and modern glassmorphism */}
        <div
          id="mobile-menu"
          className={[
            "md:hidden overflow-hidden transition-all duration-500 ease-out navbar-animate",
            menuOpen
              ? "max-h-[85vh] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4",
          ].join(" ")}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-6 pt-2">
            <div className="relative rounded-3xl border border-border/30 bg-white/85 backdrop-blur-xl p-6 shadow-2xl shadow-primary/5">
              {/* Subtle gradient overlay for premium feel */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

              {/* Enhanced search bar */}
              <div className="relative hidden mb-6">
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search restaurants..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-border/30 bg-white/60 backdrop-blur text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                  />
                </div>
              </div>

              <nav className="relative flex flex-col space-y-1">
                {NAV_ITEMS.map((item, index) => (
                  <Link
                    key={item.href}
                    href={pathname === "/" ? item.href : `/${item.href}`}
                    onClick={handleAnchor(item.href)}
                    className={[
                      "relative px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 group overflow-hidden nav-link",
                      active === item.href
                        ? "text-foreground bg-gradient-to-r from-[hsl(var(--accent)/.15)] to-[hsl(var(--primary)/.10)] shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-gradient-to-r hover:from-[hsl(var(--accent)/.08)] hover:to-[hsl(var(--primary)/.05)] active:scale-[0.98]",
                    ].join(" ")}
                    style={{
                      animationDelay: menuOpen ? `${index * 50}ms` : "0ms",
                      animation: menuOpen
                        ? "slideInFromLeft 0.4s ease-out forwards"
                        : "none",
                    }}
                  >
                    {/* Active indicator */}
                    {active === item.href && (
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-r-full" />
                    )}

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                    <span className="relative z-10">{item.label}</span>
                  </Link>
                ))}
              </nav>

              {/* Enhanced CTA section with better spacing and effects */}
              <div className="mt-6 pt-6 border-t border-border/20 flex flex-col gap-3">
                <Link
                  href="/restaurant"
                  className="relative inline-flex items-center justify-center rounded-2xl border border-border/40 bg-white/40 px-6 py-3.5 text-sm font-semibold transition-all duration-200 hover:bg-white/60 hover:border-border/60 hover:shadow-lg active:scale-[0.98] group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">For Restaurants</span>
                </Link>
                <a
                  href="https://calendly.com/callryanforhelp/plate-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary)/.9)] text-[hsl(var(--primary-foreground))] px-6 py-3.5 text-sm font-semibold shadow-lg hover:shadow-xl hover:from-[hsl(var(--primary)/.95)] hover:to-[hsl(var(--primary)/.85)] active:scale-[0.98] transition-all duration-200 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-2">
                    Book Demo
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* Icons (inline, no extra deps) */
function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 transition-transform duration-200"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 transition-transform duration-200"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6l-12 12" />
    </svg>
  );
}

function SearchIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function ArrowRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
