"use client";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#about", label: "À Propos" },
  { href: "#agenda", label: "Agenda" },
  { href: "#clubs", label: "Les Clubs" },
  { href: "#register", label: "S'inscrire" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <>
      {/* ===== WINDOW TITLE BAR (top nav) ===== */}
      <div
        className="fixed top-0 left-0 right-0 z-50"
        style={{ fontFamily: "Tahoma, MS Sans Serif, Arial, sans-serif" }}
      >
        {/* Menu bar */}
        <div
          style={{
            background: "#d4d0c8",
            borderBottom: "1px solid #808080",
            display: "flex",
            alignItems: "center",
            padding: "1px 4px",
            gap: 0,
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginRight: 12 }}>
            <Image
              src="/el7el.svg"
              alt="EL7EL"
              width={18}
              height={18}
              style={{ height: "auto", imageRendering: "pixelated" }}
            />
            <span style={{ fontWeight: "bold", fontSize: 11 }}>EL7EL</span>
          </div>

          {/* Menu items */}
          {[
            {
              label: "Fichier",
              items: [
                { label: "Accueil", href: "#" },
                { label: "separator" },
                { label: "S'inscrire", href: "#register" },
                { label: "separator" },
                { label: "Quitter", href: "#" },
              ],
            },
            {
              label: "Affichage",
              items: [
                { label: "À Propos", href: "#about" },
                { label: "Agenda", href: "#agenda" },
                { label: "Les Clubs", href: "#clubs" },
              ],
            },
            {
              label: "Aide",
              items: [
                { label: "À Propos d'EL7EL", href: "#about" },
                { label: "separator" },
                { label: "Contacter l'équipe", href: "#" },
              ],
            },
          ].map((menu) => (
            <div key={menu.label} style={{ position: "relative" }}>
              <button
                onClick={() =>
                  setActiveMenu(activeMenu === menu.label ? null : menu.label)
                }
                style={{
                  background:
                    activeMenu === menu.label ? "#0a246a" : "transparent",
                  color: activeMenu === menu.label ? "white" : "black",
                  border: "none",
                  padding: "2px 6px",
                  fontSize: 11,
                  fontFamily: "Tahoma, sans-serif",
                  cursor: "default",
                }}
              >
                {menu.label}
              </button>
              {activeMenu === menu.label && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    background: "#d4d0c8",
                    borderTop: "2px solid #ffffff",
                    borderLeft: "2px solid #ffffff",
                    borderRight: "2px solid #404040",
                    borderBottom: "2px solid #404040",
                    boxShadow: "2px 2px 4px rgba(0,0,0,0.4)",
                    minWidth: 160,
                    zIndex: 9999,
                  }}
                >
                  {menu.items.map((item, i) =>
                    item.label === "separator" ? (
                      <div
                        key={i}
                        style={{
                          borderTop: "1px solid #808080",
                          borderBottom: "1px solid #ffffff",
                          margin: "2px 4px",
                        }}
                      />
                    ) : (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setActiveMenu(null)}
                        style={{
                          display: "block",
                          padding: "3px 20px",
                          fontSize: 11,
                          fontFamily: "Tahoma, sans-serif",
                          color: "black",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#0a246a";
                          e.currentTarget.style.color = "white";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = "black";
                        }}
                      >
                        {item.label}
                      </a>
                    )
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Right side: clock area */}
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
            <a
              href="#register"
              style={{
                background: "#d4d0c8",
                color: "black",
                fontSize: 11,
                fontFamily: "Tahoma, sans-serif",
                padding: "2px 10px",
                borderTop: "2px solid #ffffff",
                borderLeft: "2px solid #ffffff",
                borderRight: "2px solid #404040",
                borderBottom: "2px solid #404040",
                textDecoration: "none",
                outline: "1px solid black",
                outlineOffset: "-1px",
                fontWeight: "bold",
              }}
            >
              Participer
            </a>
          </div>
        </div>

        {/* Toolbar row */}
        <div
          style={{
            background: "#d4d0c8",
            borderBottom: "1px solid #808080",
            display: "flex",
            alignItems: "center",
            padding: "2px 4px",
            gap: 2,
          }}
        >
          {["Précédent", "Suivant", "Arrêter"].map((btn) => (
            <button
              key={btn}
              style={{
                background: "#d4d0c8",
                border: "1px solid transparent",
                fontSize: 11,
                fontFamily: "Tahoma, sans-serif",
                padding: "2px 8px",
                cursor: "default",
                display: "flex",
                alignItems: "center",
                gap: 3,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderTop = "1px solid #ffffff";
                e.currentTarget.style.borderLeft = "1px solid #ffffff";
                e.currentTarget.style.borderRight = "1px solid #808080";
                e.currentTarget.style.borderBottom = "1px solid #808080";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "1px solid transparent";
              }}
            >
              {btn}
            </button>
          ))}
          <div
            style={{
              width: 1,
              height: 20,
              background: "#808080",
              margin: "0 4px",
            }}
          />
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                background: "#d4d0c8",
                border: "1px solid transparent",
                fontSize: 11,
                fontFamily: "Tahoma, sans-serif",
                padding: "2px 8px",
                cursor: "default",
                textDecoration: "none",
                color: "black",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderTop = "1px solid #ffffff";
                e.currentTarget.style.borderLeft = "1px solid #ffffff";
                e.currentTarget.style.borderRight = "1px solid #808080";
                e.currentTarget.style.borderBottom = "1px solid #808080";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "1px solid transparent";
              }}
            >
              {l.label}
            </a>
          ))}

          {/* Address bar */}
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              gap: 4,
              flex: 1,
              maxWidth: 300,
            }}
          >
            <span style={{ fontSize: 11, whiteSpace: "nowrap", color: "#444" }}>
              Adresse:
            </span>
            <div
              style={{
                flex: 1,
                background: "white",
                borderTop: "2px solid #404040",
                borderLeft: "2px solid #404040",
                borderRight: "2px solid #ffffff",
                borderBottom: "2px solid #ffffff",
                padding: "1px 4px",
                fontSize: 11,
                fontFamily: "Tahoma, sans-serif",
                color: "#0000ee",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              http://el7el.dz/hackathon2026/
            </div>
          </div>
        </div>

        {/* Overlay closer */}
        {activeMenu && (
          <div
            style={{ position: "fixed", inset: 0, zIndex: 9998 }}
            onClick={() => setActiveMenu(null)}
          />
        )}
      </div>
    </>
  );
}
