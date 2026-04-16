"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pest Library", href: "/pest-library" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#166534] text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <span className="font-semibold text-green-100">
            🎉 Limited Time: <span className="text-white font-bold">30% OFF Your First Service</span> — Call Now!
          </span>
          <a
            href={COMPANY.phoneHref}
            className="font-bold text-white hover:text-green-200 transition-colors flex items-center gap-1"
          >
            📞 {COMPANY.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg"
            : "bg-white/95 backdrop-blur-sm shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-[#16a34a] flex items-center justify-center text-white font-black text-lg group-hover:bg-[#166534] transition-colors">
                E
              </div>
              <div className="leading-tight">
                <div className="font-black text-[#0f172a] text-base leading-none">Elevate</div>
                <div className="text-[10px] text-[#16a34a] font-semibold uppercase tracking-widest leading-none">
                  Pest Control
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#16a34a] hover:bg-green-50 rounded-md transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href={COMPANY.phoneHref}
                className="hidden md:flex items-center gap-2 bg-[#16a34a] hover:bg-[#166534] text-white font-bold py-2 px-4 rounded-lg transition-all text-sm btn-pulse"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Free Quote
              </a>
              <button
                className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white shadow-lg">
            <nav className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-slate-700 hover:text-[#16a34a] hover:bg-green-50 rounded-lg transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={COMPANY.phoneHref}
                className="mt-2 flex items-center justify-center gap-2 bg-[#16a34a] text-white font-bold py-3 px-4 rounded-lg text-sm"
              >
                📞 Call {COMPANY.phone}
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
