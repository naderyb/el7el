"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
          ? "bg-(--primary)/85 backdrop-blur-md shadow-lg border-b-2 border-(--accent-terra)/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/el7el.svg"
            alt="EL7EL Logo"
            width={52}
            height={52}
            className="hover:opacity-80 transition-opacity drop-shadow-sm"
            style={{ height: "auto" }}
          />
          <span className="font-display text-(--accent-terra) text-lg tracking-wider hidden sm:block hover:text-(--accent-warm-gold) transition-colors">
            EL7EL
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-xs tracking-widest text-(--accent-warm-gold)/90 hover:text-(--accent-terra) transition-colors uppercase hover:drop-shadow-sm"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/register"
            className="font-display text-xs tracking-widest bg-(--accent-terra) hover:bg-(--accent-rust) text-white px-5 py-2 transition-all border border-(--accent-warm-gold)/30 uppercase font-semibold"
            style={{
              boxShadow: "0 4px 8px rgba(184, 92, 56, 0.3)",
            }}
          >
            Participer
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-(--accent-terra) p-1 hover:text-(--accent-warm-gold) transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-(--primary)/95 backdrop-blur-md border-t-2 border-(--accent-terra)/40">
          <div className="px-4 py-6 flex flex-col gap-5">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-xs tracking-widest text-(--accent-warm-gold)/90 hover:text-(--accent-terra) transition-colors uppercase"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="font-display text-xs tracking-widest bg-(--accent-terra) hover:bg-(--accent-rust) text-white px-4 py-3 uppercase text-center mt-2 font-semibold transition-colors"
            >
              Participer
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
