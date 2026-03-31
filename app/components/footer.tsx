"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-[#3d2416] text-white isolate">
      {/* HARD BACKGROUND LAYER (kills any pattern bleed) */}
      <div className="absolute inset-0 bg-[#3d2416] -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        {/* ===== SECTION 1 ===== */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* LEFT: Logo + Description */}
          <div className="flex flex-col gap-5 max-w-sm">
            <div className="flex items-center gap-3">
              <Image src="/el7el.svg" alt="EL7EL Logo" width={55} height={55} />
              <h3 className="text-2xl font-semibold tracking-wide text-(--accent-warm-gold)">
                EL7EL
              </h3>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              Un hackathon hybride innovant co-organisé par Nexus Club et ESTIN
              Cloud Hub. BUILD & GO-TO MARKET.
            </p>

            <p className="text-xs text-gray-400">
              23 Avril 2025 - Alger, Algérie
            </p>
          </div>

          {/* RIGHT: Navigation */}
          <div className="flex flex-col gap-5 md:items-end">
            <h4 className="text-lg tracking-wide text-(--accent-terra)">
              Navigation
            </h4>

            <ul className="space-y-3 text-sm text-gray-300 md:text-right">
              {[
                { href: "#", label: "À Propos" },
                { href: "#agenda", label: "Agenda" },
                { href: "#clubs", label: "Les Clubs" },
                { href: "#", label: "Contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-(--accent-warm-gold) transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ===== SEPARATOR ===== */}
        <div className="border-t border-(--accent-terra)/40 my-12" />

        {/* ===== CO-ORGANIZERS (BIGGER + ANIMATED) ===== */}
        <div className="flex flex-col items-center gap-8 mb-14">
          <h4 className="text-base tracking-[0.2em] text-gray-400 uppercase">
            Co-Organizers
          </h4>

          <div className="flex items-center justify-center gap-16 flex-wrap">
            {/* Nexus */}
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-lg font-semibold text-(--accent-warm-gold)"
            >
              Nexus Club
            </motion.span>

            {/* EL7EL LOGO (CENTER BIGGER) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <Image src="/el7el.svg" alt="EL7EL Logo" width={60} height={60} />
            </motion.div>

            {/* ECH */}
            <motion.span
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg font-semibold text-(--accent-warm-gold)"
            >
              ECH Club
            </motion.span>
          </div>
        </div>

        {/* ===== FINAL SEPARATOR ===== */}
        <div className="border-t border-(--accent-terra)/40 pt-6 text-center">
          <p className="text-xs text-gray-400">
            © EL7EL. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
