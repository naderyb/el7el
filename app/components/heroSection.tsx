"use client";
import Image from "next/image";
import Countdown from "./countdown";

export default function Hero() {
  return (
    <section
      style={{
        background: "#3a6ea5",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 16px 40px",
        fontFamily: "Tahoma, MS Sans Serif, Arial, sans-serif",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%233a6ea5'/%3E%3Crect width='2' height='2' fill='%234070b0'/%3E%3Crect x='2' y='2' width='2' height='2' fill='%234070b0'/%3E%3C/svg%3E\")",
      }}
    >
      {/* Main Dialog Window */}
      <div
        style={{
          background: "#d4d0c8",
          borderTop: "2px solid #ffffff",
          borderLeft: "2px solid #ffffff",
          borderRight: "2px solid #404040",
          borderBottom: "2px solid #404040",
          boxShadow: "4px 4px 12px rgba(0,0,0,0.5)",
          width: "100%",
          maxWidth: 640,
        }}
      >
        {/* Title Bar */}
        <div
          style={{
            background:
              "linear-gradient(90deg, #0a246a 0%, #a6caf0 100%)",
            color: "white",
            padding: "3px 4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            userSelect: "none",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Image
              src="/el7el.svg"
              alt="EL7EL"
              width={14}
              height={14}
              style={{ imageRendering: "pixelated" }}
            />
            <span style={{ fontSize: 11, fontWeight: "bold" }}>
              EL7EL Hackathon - يد وحدة ما تسفق
            </span>
          </div>
          <div style={{ display: "flex", gap: 2 }}>
            {["_", "□", "✕"].map((icon, i) => (
              <button
                key={i}
                style={{
                  width: 16,
                  height: 14,
                  fontSize: i === 2 ? 9 : 10,
                  fontWeight: "bold",
                  background: i === 2 ? "#c0392b" : "#d4d0c8",
                  color: i === 2 ? "white" : "black",
                  borderTop: "1px solid #ffffff",
                  borderLeft: "1px solid #ffffff",
                  borderRight: "1px solid #404040",
                  borderBottom: "1px solid #404040",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight: 1,
                  padding: 0,
                }}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Window content */}
        <div style={{ padding: "16px" }}>
          {/* Logo area */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              marginBottom: 16,
              padding: "12px",
              background: "white",
              borderTop: "2px solid #404040",
              borderLeft: "2px solid #404040",
              borderRight: "2px solid #ffffff",
              borderBottom: "2px solid #ffffff",
            }}
          >
            <Image
              src="/el7el.svg"
              alt="EL7EL Logo"
              width={80}
              height={80}
              priority
              style={{ height: "auto", imageRendering: "auto" }}
            />
            <div>
              <p
                style={{
                  fontFamily: "Amiri, serif",
                  fontSize: 22,
                  color: "#0a246a",
                  direction: "rtl",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                يد وحدة ما تسفق
              </p>
              <p
                style={{
                  fontSize: 10,
                  color: "#444",
                  margin: "4px 0 0",
                  fontStyle: "italic",
                }}
              >
                Hackathon BUILD &amp; GO-TO MARKET
              </p>
            </div>
          </div>

          {/* Info text */}
          <div
            style={{
              background: "white",
              borderTop: "2px solid #404040",
              borderLeft: "2px solid #404040",
              borderRight: "2px solid #ffffff",
              borderBottom: "2px solid #ffffff",
              padding: "8px",
              marginBottom: 12,
              fontSize: 11,
              lineHeight: 1.6,
              color: "#000",
            }}
          >
            <p style={{ margin: 0 }}>
              Un hackathon{" "}
              <strong>BUILD &amp; GO-TO MARKET</strong> unique en son genre.
              De la conception technique jusqu&apos;à la valorisation marché.
              Co-organisé par <strong>Nexus Club</strong> et{" "}
              <strong>ESTIN Cloud Hub</strong>.
            </p>
          </div>

          {/* Countdown label */}
          <p
            style={{
              fontSize: 10,
              color: "#444",
              marginBottom: 6,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Compte à rebours — 23 Avril 2026:
          </p>

          {/* Countdown widget */}
          <div
            style={{
              background: "white",
              borderTop: "2px solid #404040",
              borderLeft: "2px solid #404040",
              borderRight: "2px solid #ffffff",
              borderBottom: "2px solid #ffffff",
              padding: "10px",
              marginBottom: 16,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Countdown />
          </div>

          {/* Separator */}
          <div
            style={{
              borderTop: "1px solid #808080",
              borderBottom: "1px solid #ffffff",
              margin: "8px 0 12px",
            }}
          />

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 8,
              flexWrap: "wrap",
            }}
          >
            <a
              href="#register"
              style={{
                background: "#d4d0c8",
                color: "black",
                fontSize: 11,
                fontFamily: "Tahoma, sans-serif",
                padding: "4px 20px",
                borderTop: "2px solid #ffffff",
                borderLeft: "2px solid #ffffff",
                borderRight: "2px solid #404040",
                borderBottom: "2px solid #404040",
                textDecoration: "none",
                outline: "1px solid black",
                outlineOffset: "-1px",
                fontWeight: "bold",
                minWidth: 120,
                textAlign: "center",
              }}
            >
              S&apos;inscrire Maintenant
            </a>
            <a
              href="#about"
              style={{
                background: "#d4d0c8",
                color: "black",
                fontSize: 11,
                fontFamily: "Tahoma, sans-serif",
                padding: "4px 20px",
                borderTop: "2px solid #ffffff",
                borderLeft: "2px solid #ffffff",
                borderRight: "2px solid #404040",
                borderBottom: "2px solid #404040",
                textDecoration: "none",
                minWidth: 120,
                textAlign: "center",
              }}
            >
              En savoir plus
            </a>
          </div>
        </div>

        {/* Status bar */}
        <div
          style={{
            background: "#d4d0c8",
            borderTop: "2px solid #808080",
            display: "flex",
            fontSize: 10,
            fontFamily: "Tahoma, sans-serif",
            padding: "1px 4px",
          }}
        >
          <span
            style={{
              borderRight: "1px solid #808080",
              paddingRight: 8,
              marginRight: 8,
              color: "#444",
            }}
          >
            Prêt
          </span>
          <span style={{ color: "#444" }}>23-25 Avr 2026 · Alger, Algérie</span>
        </div>
      </div>

      {/* Second floating window - announcement */}
      <div
        style={{
          background: "#d4d0c8",
          borderTop: "2px solid #ffffff",
          borderLeft: "2px solid #ffffff",
          borderRight: "2px solid #404040",
          borderBottom: "2px solid #404040",
          boxShadow: "4px 4px 12px rgba(0,0,0,0.4)",
          width: "100%",
          maxWidth: 400,
          marginTop: 24,
        }}
      >
        {/* Title bar inactive */}
        <div
          style={{
            background: "linear-gradient(90deg, #7a96df 0%, #adc3e0 100%)",
            color: "white",
            padding: "3px 4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            userSelect: "none",
          }}
        >
          <span style={{ fontSize: 11, fontWeight: "bold" }}>
            Nouveau message (1)
          </span>
          <div style={{ display: "flex", gap: 2 }}>
            {["_", "✕"].map((icon, i) => (
              <button
                key={i}
                style={{
                  width: 16,
                  height: 14,
                  fontSize: 9,
                  fontWeight: "bold",
                  background: "#d4d0c8",
                  color: "black",
                  borderTop: "1px solid #ffffff",
                  borderLeft: "1px solid #ffffff",
                  borderRight: "1px solid #404040",
                  borderBottom: "1px solid #404040",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0,
                }}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
        <div style={{ padding: "10px 12px", fontSize: 11, color: "#000" }}>
          <p style={{ margin: "0 0 6px 0", fontWeight: "bold", color: "#0000aa" }}>
            [Annonce] Inscriptions ouvertes !
          </p>
          <p style={{ margin: 0, lineHeight: 1.6 }}>
            Les inscriptions pour EL7EL 2026 sont maintenant ouvertes.
            Rejoignez-nous pour 48h d&apos;innovation intensive.
          </p>
          <div style={{ marginTop: 10, display: "flex", justifyContent: "flex-end", gap: 6 }}>
            <a
              href="#register"
              style={{
                background: "#d4d0c8",
                color: "black",
                fontSize: 11,
                fontFamily: "Tahoma, sans-serif",
                padding: "3px 14px",
                borderTop: "2px solid #ffffff",
                borderLeft: "2px solid #ffffff",
                borderRight: "2px solid #404040",
                borderBottom: "2px solid #404040",
                textDecoration: "none",
              }}
            >
              OK
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
