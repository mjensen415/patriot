"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-patriot-cream border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-heading text-patriot-red text-2xl font-bold tracking-wider">
              ★ PATRIOT STUFF
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="#" className="text-patriot-navy hover:text-patriot-red font-body font-semibold transition-colors">
              Home
            </Link>
            <Link href="#" className="text-patriot-navy hover:text-patriot-red font-body font-semibold transition-colors">
              Shop
            </Link>
            <Link href="#" className="text-patriot-navy hover:text-patriot-red font-body font-semibold transition-colors">
              Blog
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-patriot-navy hover:text-patriot-red focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-patriot-cream border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#" className="block px-3 py-2 text-patriot-navy hover:bg-gray-100 font-body font-semibold" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="#" className="block px-3 py-2 text-patriot-navy hover:bg-gray-100 font-body font-semibold" onClick={() => setIsOpen(false)}>
              Shop
            </Link>
            <Link href="#" className="block px-3 py-2 text-patriot-navy hover:bg-gray-100 font-body font-semibold" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
