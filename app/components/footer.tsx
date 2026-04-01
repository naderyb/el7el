"use client";
import Image from "next/image";

const WIN_BG = "#d4d0c8";
const WIN_RAISED = {
  borderTop: "2px solid #ffffff",
  borderLeft: "2px solid #ffffff",
  borderRight: "2px solid #404040",
  borderBottom: "2px solid #404040",
  background: WIN_BG,
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "#ece9d8",
        padding: "40px 16px 0",
        fontFamily: "Tahoma, MS Sans Serif, Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        {/* Properties dialog style */}
        <div
          style={{
            ...WIN_RAISED,
            boxShadow: "3px 3px 8px rgba(0,0,0,0.35)",
          }}
        >
          {/* Title bar */}
          <div
            style={{
              background: "linear-gradient(90deg, #0a246a 0%, #a6caf0 100%)",
              color: "white",
              padding: "3px 4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              userSelect: "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <Image src="/el7el.svg" alt="EL7EL" width={12} height={12} />
              <span style={{ fontSize: 11, fontWeight: "bold" }}>
                Propriétés de EL7EL
              </span>
            </div>
            <div style={{ display: "flex", gap: 2 }}>
              {["_", "✕"].map((icon, i) => (
                <button
                  key={i}
                  style={{
                    width: 16,
                    height: 14,
                    fontSize: 9,
                    fontWeight: "bold",
                    background: i === 1 ? "#c0392b" : WIN_BG,
                    color: i === 1 ? "white" : "black",
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

          {/* Body */}
          <div style={{ padding: "12px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 16,
                marginBottom: 12,
              }}
            >
              {/* Logo + info */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <Image src="/el7el.svg" alt="EL7EL Logo" width={32} height={32} />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: "bold", color: "#0a246a" }}>
                      EL7EL
                    </div>
                    <div style={{ fontSize: 10, color: "#444" }}>Hackathon 2026</div>
                  </div>
                </div>

                {/* Property table */}
                <div
                  style={{
                    border: "1px solid #808080",
                    padding: "10px 8px 8px",
                    position: "relative",
                    fontSize: 11,
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: -7,
                      left: 6,
                      background: WIN_BG,
                      padding: "0 4px",
                      fontSize: 10,
                      fontWeight: "bold",
                      color: "#444",
                    }}
                  >
                    Informations
                  </span>
                  {[
                    ["Type:", "Hackathon hybride"],
                    ["Durée:", "48 heures"],
                    ["Date:", "23-25 Avr 2026"],
                    ["Lieu:", "Alger, Algérie"],
                    ["Format:", "BUILD & GO-TO MARKET"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "80px 1fr",
                        marginBottom: 3,
                      }}
                    >
                      <span style={{ color: "#444", fontWeight: "bold", fontSize: 10 }}>{k}</span>
                      <span style={{ color: "#000", fontSize: 10 }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div>
                <div
                  style={{
                    border: "1px solid #808080",
                    padding: "10px 8px 8px",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: -7,
                      left: 6,
                      background: WIN_BG,
                      padding: "0 4px",
                      fontSize: 10,
                      fontWeight: "bold",
                      color: "#444",
                    }}
                  >
                    Navigation
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    {[
                      { href: "#about", label: "À Propos" },
                      { href: "#agenda", label: "Agenda" },
                      { href: "#clubs", label: "Les Clubs" },
                      { href: "#", label: "Contact" },
                    ].map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        style={{
                          fontSize: 11,
                          color: "#0000ee",
                          textDecoration: "underline",
                          cursor: "pointer",
                          padding: "1px 2px",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#0a246a";
                          e.currentTarget.style.color = "white";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = "#0000ee";
                        }}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Co-organizers */}
              <div>
                <div
                  style={{
                    border: "1px solid #808080",
                    padding: "10px 8px 8px",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: -7,
                      left: 6,
                      background: WIN_BG,
                      padding: "0 4px",
                      fontSize: 10,
                      fontWeight: "bold",
                      color: "#444",
                    }}
                  >
                    Co-Organisateurs
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {["Nexus Club", "ESTIN Cloud Hub"].map((name) => (
                      <div
                        key={name}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          padding: "3px 4px",
                          borderTop: "2px solid #404040",
                          borderLeft: "2px solid #404040",
                          borderRight: "2px solid #ffffff",
                          borderBottom: "2px solid #ffffff",
                          background: "white",
                          fontSize: 11,
                          fontWeight: "bold",
                          color: "#0a246a",
                        }}
                      >
                        <span
                          style={{
                            width: 8,
                            height: 8,
                            background: "#008080",
                            display: "inline-block",
                          }}
                        />
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div
              style={{
                borderTop: "1px solid #808080",
                borderBottom: "1px solid #ffffff",
                margin: "8px 0",
              }}
            />

            {/* Bottom buttons row */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ fontSize: 10, color: "#444", marginRight: "auto" }}>
                © EL7EL 2026. Tous droits réservés.
              </span>
              {["OK", "Annuler", "Appliquer"].map((btn) => (
                <a
                  key={btn}
                  href={btn === "OK" ? "#" : undefined}
                  style={{
                    background: WIN_BG,
                    color: "black",
                    fontSize: 11,
                    fontFamily: "Tahoma, sans-serif",
                    padding: "3px 14px",
                    borderTop: "2px solid #ffffff",
                    borderLeft: "2px solid #ffffff",
                    borderRight: "2px solid #404040",
                    borderBottom: "2px solid #404040",
                    textDecoration: "none",
                    cursor: "pointer",
                    minWidth: 60,
                    textAlign: "center",
                    display: "inline-block",
                    ...(btn === "OK"
                      ? { outline: "1px solid black", outlineOffset: "-1px", fontWeight: "bold" }
                      : {}),
                  }}
                >
                  {btn}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Windows Taskbar at bottom */}
      <div
        style={{
          marginTop: 40,
          background: "linear-gradient(180deg, #245edb 0%, #1a4bbf 50%, #1040c0 100%)",
          height: 30,
          display: "flex",
          alignItems: "center",
          padding: "0 2px",
          gap: 4,
        }}
      >
        {/* Start button */}
        <button
          style={{
            background:
              "linear-gradient(180deg, #5aaa5a 0%, #3c7a3c 40%, #2d6a2d 60%, #3c7a3c 100%)",
            color: "white",
            fontFamily: "Tahoma, sans-serif",
            fontSize: 12,
            fontWeight: "bold",
            padding: "2px 8px 2px 6px",
            borderRadius: "0 8px 8px 0",
            border: "none",
            height: 24,
            display: "flex",
            alignItems: "center",
            gap: 4,
            cursor: "pointer",
            boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.4), 0 1px 3px rgba(0,0,0,0.5)",
          }}
        >
          <Image src="/el7el.svg" alt="" width={14} height={14} aria-hidden />
          <span>Démarrer</span>
        </button>

        {/* Separator */}
        <div
          style={{
            width: 1,
            height: 20,
            background: "rgba(0,0,0,0.4)",
            borderRight: "1px solid rgba(255,255,255,0.2)",
            marginLeft: 2,
          }}
        />

        {/* Open windows */}
        {["EL7EL - Hackathon 2026", "À Propos", "Agenda"].map((w) => (
          <div
            key={w}
            style={{
              background: "rgba(255,255,255,0.15)",
              borderTop: "1px solid rgba(0,0,0,0.4)",
              borderLeft: "1px solid rgba(0,0,0,0.4)",
              borderRight: "1px solid rgba(255,255,255,0.2)",
              borderBottom: "1px solid rgba(255,255,255,0.2)",
              color: "white",
              fontSize: 11,
              fontFamily: "Tahoma, sans-serif",
              padding: "2px 8px",
              height: 22,
              display: "flex",
              alignItems: "center",
              cursor: "default",
              whiteSpace: "nowrap",
              maxWidth: 140,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {w}
          </div>
        ))}

        {/* System clock */}
        <div
          style={{
            marginLeft: "auto",
            background: "rgba(0,0,40,0.3)",
            borderTop: "1px solid rgba(0,0,0,0.4)",
            borderLeft: "1px solid rgba(0,0,0,0.4)",
            borderRight: "1px solid rgba(255,255,255,0.2)",
            borderBottom: "1px solid rgba(255,255,255,0.2)",
            color: "white",
            fontSize: 10,
            fontFamily: "Tahoma, sans-serif",
            padding: "2px 8px",
            height: 22,
            display: "flex",
            alignItems: "center",
          }}
        >
          23/04/2026
        </div>
      </div>
    </footer>
  );
}
