"use client";
import Countdown from "./countdown";
import { ZelijSection, OrnamentalStar } from "../zelijpattern";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
      style={{
        background:
          "linear-gradient(160deg, #1A0F07 0%, #3D2210 40%, #5C3A1E 70%, #2E1A0A 100%)",
      }}
    >
      <ZelijSection />

      {/* Glowing orb */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(196,130,74,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Decorative stars */}
      <OrnamentalStar
        size={100}
        opacity={0.08}
        className="absolute top-20 left-8 animate-spin-slow hidden sm:block"
      />
      <OrnamentalStar
        size={70}
        opacity={0.1}
        className="absolute bottom-32 right-8 animate-spin-slow hidden sm:block animate-spin-reverse"
      />
      <OrnamentalStar
        size={50}
        opacity={0.12}
        className="absolute top-1/3 right-16 hidden lg:block"
      />
      <OrnamentalStar
        size={40}
        opacity={0.1}
        className="absolute bottom-1/3 left-16 hidden lg:block"
      />

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center gap-6 max-w-4xl">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-display tracking-widest uppercase animate-fade-in"
          style={{
            border: "1px solid rgba(196,130,74,0.4)",
            background: "rgba(196,130,74,0.1)",
            color: "#E0B86A",
            animationDelay: "0.2s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8973C] animate-pulse" />
          23 Avril 2025 · Hackathon Hybride
        </div>

        {/* Main title */}
        <div
          className="animate-fade-in-up"
          style={{
            animationDelay: "0.4s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <h1 className="font-display text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight leading-none shimmer-text">
            EL7EL
          </h1>
        </div>

        {/* Arabic slogan */}
        <div
          className="animate-fade-in-up"
          style={{
            animationDelay: "0.6s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <p
            className="font-arabic text-2xl sm:text-3xl md:text-4xl"
            style={{ color: "#E8D5B0", lineHeight: 1.8 }}
          >
            يد وحدة ما تسفق
          </p>
          <p className="text-[#C4824A]/70 text-xs tracking-widest uppercase font-display mt-1">
            Une seule main ne peut pas applaudir
          </p>
        </div>

        {/* Description */}
        <div
          className="animate-fade-in-up max-w-2xl"
          style={{
            animationDelay: "0.8s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <p
            className="text-[#E8D5B0]/70 text-sm sm:text-base leading-relaxed"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Un hackathon{" "}
            <strong className="text-[#C8973C]">BUILD &amp; GO-TO MARKET</strong>{" "}
            unique en son genre. De la conception technique jusqu&apos;à la
            valorisation marché — innove, construis, conquiers.
          </p>
        </div>

        {/* Countdown */}
        <div
          className="animate-fade-in-up mt-4"
          style={{
            animationDelay: "1s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <p className="font-display text-[10px] tracking-widest uppercase text-[#C4824A]/60 mb-4">
            Compte à rebours
          </p>
          <Countdown />
        </div>

        {/* CTA */}
        <div
          className="animate-fade-in-up flex flex-col sm:flex-row gap-4 mt-4"
          style={{
            animationDelay: "1.2s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <a
            href="#register"
            className="font-display text-xs tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #C4824A, #A0612E)",
              color: "#FAF3E0",
              border: "1px solid rgba(200,151,60,0.3)",
              boxShadow: "0 4px 20px rgba(196,130,74,0.3)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 6px 30px rgba(196,130,74,0.5)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 4px 20px rgba(196,130,74,0.3)")
            }
          >
            S&apos;inscrire Maintenant
          </a>
          <a
            href="#about"
            className="font-display text-xs tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-300"
            style={{
              background: "transparent",
              color: "#E8D5B0",
              border: "1px solid rgba(232,213,176,0.25)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "rgba(196,130,74,0.5)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "rgba(232,213,176,0.25)")
            }
          >
            En savoir plus
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="font-display text-[9px] tracking-widest uppercase text-[#C4824A]/50">
          Défiler
        </span>
        <div className="w-px h-10 bg-linear-to-b from-[#C4824A]/40 to-transparent" />
      </div>
    </section>
  );
}
