"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "À Propos" },
  { href: "#agenda", label: "Agenda" },
  { href: "#clubs", label: "Les Clubs" },
  { href: "#register", label: "S'inscrire" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#3D2210]/95 backdrop-blur-md shadow-lg border-b border-[#C4824A]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full border-2 border-[#C4824A] flex items-center justify-center bg-[#C4824A]/10">
            <span className="font-display text-[#C8973C] text-sm font-bold">
              E7
            </span>
          </div>
          <span className="font-display text-[#E8D5B0] text-lg tracking-wider hidden sm:block">
            EL7EL
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-xs tracking-widest text-[#E8D5B0]/80 hover:text-[#C8973C] transition-colors uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#register"
            className="font-display text-xs tracking-widest bg-[#C4824A] hover:bg-[#A0612E] text-[#FAF3E0] px-5 py-2 rounded-sm uppercase transition-colors border border-[#C8973C]/30"
          >
            Participer
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#E8D5B0] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#3D2210]/98 backdrop-blur-md border-t border-[#C4824A]/20">
          <div className="px-4 py-6 flex flex-col gap-5">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-xs tracking-widest text-[#E8D5B0]/80 hover:text-[#C8973C] uppercase"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="font-display text-xs tracking-widest bg-[#C4824A] text-[#FAF3E0] px-4 py-3 rounded-sm uppercase text-center mt-2"
            >
              Participer
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
