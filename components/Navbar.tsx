"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "SHOP",      href: "#shop" },
    { label: "COFFEE",    href: "#coffee" },
    { label: "PARTNERS",  href: "#partners" },
    { label: "COMMUNITY", href: "#signup" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-ps-bg/85 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-20">

        {/* Logo */}
        <Link href="/" className="font-headline font-black text-2xl tracking-tight text-white">
          PATRIOT STUFF
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-10">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="font-headline font-bold text-sm uppercase tracking-tight text-white/80 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="#signup"
            className="hidden md:block bg-ps-red hover:bg-ps-red/80 text-white font-headline font-extrabold text-sm uppercase tracking-tight px-5 py-2.5 transition-all active:scale-95"
          >
            JOIN THE LIST
          </Link>
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-ps-container border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="font-headline font-bold uppercase tracking-tight text-white/80 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
