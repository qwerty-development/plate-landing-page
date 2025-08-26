"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type NavItem = { href: string; label: string };

const NAV_ITEMS: NavItem[] = [
  { href: "#how-points", label: "How Points" },
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
          "border-b transition-all",
          scrolled
            ? "bg-white/70 backdrop-blur border-border/60 shadow-sm"
            : "bg-transparent border-transparent",
        ].join(" ")}
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-2">
              {/* If you have a logo image, drop it here */}
              {/* <img src="/logo.svg" alt="Plate" className="h-6 w-6" /> */}
              <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-[hsl(var(--foreground))] via-[hsl(var(--primary))] to-[hsl(var(--accent))]">
                Plate
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={pathname === "/" ? item.href : `/${item.href}`}
                  onClick={handleAnchor(item.href)}
                  className={[
                    "px-3 py-2 text-sm rounded-full transition",
                    active === item.href
                      ? "text-foreground bg-[hsl(var(--accent)/.12)]"
                      : "text-muted-foreground hover:text-foreground hover:bg-[hsl(var(--accent)/.08)]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-2">
              <Link
                href="/restaurant"
                className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium hover:bg-accent/10 transition"
              >
                For Restaurants
              </Link>
              <a
                href="https://calendly.com/callryanforhelp/plate-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90 transition"
              >
                Book Demo
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/70 bg-white/60 backdrop-blur hover:bg-white/80 transition"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          id="mobile-menu"
          className={[
            "md:hidden overflow-hidden transition-[max-height,opacity] duration-300",
            menuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-4">
            <div className="rounded-2xl border border-border/70 bg-white/70 backdrop-blur p-4 shadow-sm">
              <nav className="flex flex-col">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={pathname === "/" ? item.href : `/${item.href}`}
                    onClick={handleAnchor(item.href)}
                    className={[
                      "px-3 py-2 rounded-lg text-base transition",
                      active === item.href
                        ? "text-foreground bg-[hsl(var(--accent)/.12)]"
                        : "text-muted-foreground hover:text-foreground hover:bg-[hsl(var(--accent)/.08)]",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-3 flex flex-col gap-2">
                <Link
                  href="/restaurant"
                  className="inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-medium hover:bg-accent/10 transition"
                >
                  For Restaurants
                </Link>
                <a
                  href="https://calendly.com/callryanforhelp/plate-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90 transition"
                >
                  Book Demo
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
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
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
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6l-12 12" />
    </svg>
  );
}
