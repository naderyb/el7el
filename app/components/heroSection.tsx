"use client";
import Image from "next/image";
import Countdown from "./countdown";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
      style={{
        background: "#FAF4EA",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Fixed Zelij Pattern Background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/zelij-pattern.png')",
          backgroundSize: "120px 120px",
          backgroundPosition: "0 0",
          backgroundRepeat: "repeat",
          backgroundAttachment: "fixed",
          opacity: 0.12,
          filter: "grayscale(100%) brightness(0.8)",
        }}
      />

      {/* Glowing orb */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(1, 178, 166, 0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center gap-6 max-w-4xl">
        {/* Main Logo */}
        <div
          className="animate-fade-in-up"
          style={{
            animationDelay: "0.4s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <Image
            src="/el7el.svg"
            alt="EL7EL Logo"
            width={300}
            height={300}
            priority
            style={{ height: "auto" }}
            className="drop-shadow-lg"
          />
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
            style={{ color: "#584235", lineHeight: 1.8 }}
          >
            يد وحدة ما تسفق
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
            className="text-[#052F43]/75 text-sm sm:text-base leading-relaxed"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Un hackathon{" "}
            <strong className="text-[#584235]">BUILD &amp; GO-TO MARKET</strong>{" "}
            unique en son genre. De la conception technique jusqu&apos;à la
            valorisation marché.
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
          <p className="font-display text-[10px] tracking-widest uppercase text-[#052F43]/50 mb-4">
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
              background: "linear-gradient(135deg, #584235, #584235)",
              color: "white",
              border: "1px solid #584235",
              boxShadow: "0 4px 20px #584235",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 6px 30px #F3E8D2")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 4px 20px #F3E8D2")
            }
          >
            S&apos;inscrire Maintenant
          </a>
          <a
            href="#about"
            className="font-display text-xs tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-300"
            style={{
              background: "transparent",
              color: "#584235",
              border: "1px solid #584235",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "#584235")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "#584235")
            }
          >
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  );
}
