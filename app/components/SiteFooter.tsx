"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteFooter() {
  const pathname = usePathname();
  const isRestaurantPage = pathname === "/restaurant";

  return (
    <footer className="relative mt-0">
      {/* CTA band */}
      <div className="relative">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 py-8 sm:py-12 lg:py-16">
          <div className="rounded-2xl border border-border/70 bg-white/60 backdrop-blur p-4 sm:p-6 lg:p-8 shadow-sm">
            <div className="grid lg:grid-cols-[1fr_auto] items-center gap-4 sm:gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Ready to try Plate?
                </p>
                <h3 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-semibold">
                  More bookings. Fewer gaps. Happier guests.
                </h3>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl">
                  Download the app or talk to us about Plate for Restaurants.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://calendly.com/callryanforhelp/plate-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-4 sm:px-5 py-2.5 text-sm font-medium shadow-sm hover:opacity-90 transition text-center"
                >
                  Book Demo
                </a>
                {!isRestaurantPage && (
                  <Link
                    href="/restaurant"
                    className="inline-flex items-center justify-center rounded-full border px-4 sm:px-5 py-2.5 text-sm font-medium hover:bg-accent/10 transition text-center"
                  >
                    Plate for Restaurants
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom footer */}
      <div className="border-t border-border bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-4">
            {/* brand + builder credit */}
            <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()}{" "}
              <span className="font-medium">QWERTY</span>. Built by{" "}
              <a
                href="https://www.notqwerty.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:no-underline"
              >
                www.notqwerty.com
              </a>
              .
            </p>

            {/* links */}
            <div className="flex flex-col sm:flex-row md:flex-row items-center gap-2 sm:gap-3 md:gap-5 text-xs sm:text-sm">
              <Link
                href={isRestaurantPage ? "#pricing" : "/restaurant#pricing"}
                className="text-muted-foreground hover:text-foreground transition py-1 md:py-0"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition py-1 md:py-0"
              >
                For Restaurants
              </Link>
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground transition py-1 md:py-0"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-foreground transition py-1 md:py-0"
              >
                Terms & Conditions
              </Link>
              <a
                href="https://instagram.com/notqwerty.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition py-1 md:py-0"
                aria-label="QWERTY on Instagram"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
