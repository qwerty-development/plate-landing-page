'use client'
import Link from "next/link";

export default function RestaurantsFooter() {
  return (
    <footer className="relative mt-20">
      {/* CTA band */}
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
          <div className="rounded-2xl border border-border/70 bg-white/60 backdrop-blur p-6 lg:p-8 shadow-sm">
            <div className="grid lg:grid-cols-[1fr_auto] items-center gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Ready to grow your restaurant?</p>
                <h3 className="mt-2 text-2xl lg:text-3xl font-semibold">Join 500+ successful restaurants</h3>
                <p className="mt-2 text-muted-foreground max-w-2xl">
                  Start your free trial today and see the difference Plate can make for your business.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#"
                  className="inline-flex items-center rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-5 py-2.5 text-sm font-medium shadow-sm hover:opacity-90 transition"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-accent/10 transition"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom footer */}
      <div className="border-t border-border bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-[hsl(var(--foreground))] via-[hsl(var(--primary))] to-[hsl(var(--accent))]">
                  Plate
                </span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-md">
                The smart restaurant management platform built for Lebanon's vibrant food scene. 
                Fill tables, boost revenue, and delight guests with AI-powered tools.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">For Restaurants</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">Features</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">Pricing</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">Success Stories</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">Support</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">About</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">Blog</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">Careers</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-8 pt-6 border-t border-border/50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* brand + builder credit */}
              <p className="text-sm text-muted-foreground text-center sm:text-left">
                © {new Date().getFullYear()} <span className="font-medium">Plate</span>. Built by{" "}
                <a href="https://www.notqwerty.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:no-underline">
                  www.notqwerty.com
                </a>
                .
              </p>

              {/* links */}
              <div className="flex items-center gap-5 text-sm">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition">Privacy</Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition">Terms</Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition">Support</Link>
                <a
                  href="https://instagram.com/notqwerty.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition"
                  aria-label="Plate on Instagram"
                >
                  @notqwerty.co
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
