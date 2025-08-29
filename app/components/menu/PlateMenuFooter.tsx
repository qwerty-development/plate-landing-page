"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PlateMenuFooter() {
  return (
    <motion.footer
      className="bg-white/80 backdrop-blur-sm border-t border-slate-200/50 mt-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Plate Branding */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative">
              <Image
                src="/icon.png"
                alt="Plate"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#792339] via-[#a8324d] to-[#792339] bg-clip-text text-transparent">
                Plate
              </span>
              <span className="text-sm text-slate-600 font-medium">
                Modern digital menus for modern restaurants
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/restaurant"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#792339] hover:text-[#a8324d] hover:bg-[#792339]/5 rounded-lg transition-all duration-200 border border-[#792339]/20 hover:border-[#792339]/40"
            >
              <span>For Restaurants</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
            <Link
              href="https://calendly.com/callryanforhelp/plate-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-[#792339] text-white hover:bg-[#a8324d] rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <span>Get Started</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-6 border-t border-slate-200/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            {/* brand + builder credit */}
            <p className="text-sm text-muted-foreground text-center md:text-left">
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
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5 text-sm">
              <Link
                href="/restaurant#pricing"
                className="text-muted-foreground hover:text-foreground transition py-1 md:py-0"
              >
                Pricing
              </Link>
              <Link
                href="/restaurant"
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
                @notqwerty.co
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
