"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="relative py-16 px-4 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #1A0F07 0%, #3D2210 100%)",
      }}
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Top section */}
        <div className="flex flex-col items-center gap-6 mb-12">
          <Image src="/el7el.svg" alt="EL7EL Logo" width={128} height={128} />
          <p
            className="font-arabic text-xl sm:text-2xl"
            style={{ color: "#E8D5B0", lineHeight: 1.8 }}
          >
            يد وحدة ما تسفق
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-[#C4824A]/30 to-transparent mb-10" />

        {/* Info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-10">
          <div>
            <p className="font-display text-[9px] tracking-widest uppercase text-[#C4824A]/50 mb-2">
              Date
            </p>
            <p className="font-display text-sm text-[#E8D5B0]/80">
              23 Avril 2026
            </p>
          </div>
          <div>
            <p className="font-display text-[9px] tracking-widest uppercase text-[#C4824A]/50 mb-2">
              Format
            </p>
            <p className="font-display text-sm text-[#E8D5B0]/80">
              Hackathon Hybride · 48h
            </p>
          </div>
          <div>
            <p className="font-display text-[9px] tracking-widest uppercase text-[#C4824A]/50 mb-2">
              Organisateurs
            </p>
            <p className="font-display text-sm text-[#E8D5B0]/80">
              Nexus Club x ESTIN Cloud Hub
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-6 mb-10">
          {["À Propos", "Agenda", "Les Clubs", "S'inscrire"].map((l) => (
            <a
              key={l}
              href={`#${l === "À Propos" ? "about" : l === "Agenda" ? "agenda" : l === "Les Clubs" ? "clubs" : "/register"}`}
              className="font-display text-[9px] tracking-widest uppercase text-[#E8D5B0]/40 hover:text-[#C8973C] transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        <div className="h-px w-full bg-linear-to-r from-transparent via-[#C4824A]/20 to-transparent mb-6" />

        <div className="text-center">
          <p className="font-display text-[9px] tracking-widest uppercase text-[#E8D5B0]/25">
            © 2026 EL7EL Hackathon · Nexus Club x ESTIN Cloud Hub · Tous droits
            réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
