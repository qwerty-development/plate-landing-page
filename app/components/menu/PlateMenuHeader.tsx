"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PlateMenuHeader() {
  return (
    <motion.header
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Plate Branding */}
          <Link
            href="/"
            className="flex items-center gap-2 group transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              {/* Plate Icon */}
              <div className="w-8 h-8 relative">
                <Image
                  src="/icon.png"
                  alt="Plate"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-[#792339] via-[#a8324d] to-[#792339] bg-clip-text text-transparent">
                Plate
              </span>
              <span className="text-xs text-slate-500 font-medium -mt-1">
                powered by
              </span>
            </div>
          </Link>

          {/* Subtle CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-xs text-slate-500 font-medium">
              Modern digital menus
            </span>
            <Link
              href="/restaurant"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-[#792339] hover:text-[#a8324d] hover:bg-[#792339]/5 rounded-full transition-all duration-200 group"
            >
              <span>Learn more</span>
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
