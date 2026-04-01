"use client";
import {
  Cpu,
  TrendingUp,
  DollarSign,
  Cloud,
  Users,
  Lightbulb,
} from "lucide-react";

const objectives = [
  {
    icon: Lightbulb,
    label: "Innovation Réelle",
    desc: "Analyser des problématiques réelles d'entreprise et proposer des solutions à fort potentiel.",
  },
  {
    icon: Users,
    label: "Collaboration Inter.",
    desc: "Favoriser la synergie entre informaticiens, marketeurs et financiers.",
  },
  {
    icon: TrendingUp,
    label: "Go-To Market",
    desc: "Concevoir une stratégie marketing percutante et un modèle financier viable.",
  },
  {
    icon: Cpu,
    label: "Tech de Pointe",
    desc: "Mettre en avant Cloud, DevOps et CI/CD à travers des défis concrets.",
  },
  {
    icon: Cloud,
    label: "Déploiement Cloud",
    desc: "Des prototypes fonctionnels jusqu'au déploiement en production.",
  },
  {
    icon: DollarSign,
    label: "Modèle Financier",
    desc: "Un produit commercialisable avec une vision business claire.",
  },
];

const specialties = [
  { label: "Computer Science", icon: "💻" },
  { label: "Marketing", icon: "📊" },
  { label: "Finance", icon: "💰" },
  { label: "Comptabilité", icon: "📋" },
];

const WIN_BG = "#d4d0c8";
const WIN_INSET = {
  borderTop: "2px solid #404040",
  borderLeft: "2px solid #404040",
  borderRight: "2px solid #ffffff",
  borderBottom: "2px solid #ffffff",
  background: "white",
};
const WIN_RAISED = {
  borderTop: "2px solid #ffffff",
  borderLeft: "2px solid #ffffff",
  borderRight: "2px solid #404040",
  borderBottom: "2px solid #404040",
  background: WIN_BG,
};

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "#ece9d8",
        padding: "40px 16px",
        fontFamily: "Tahoma, MS Sans Serif, Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        {/* ===== Main Explorer Window ===== */}
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
            <span style={{ fontSize: 11, fontWeight: "bold" }}>
              Poste de travail &gt; EL7EL &gt; À Propos
            </span>
            <div style={{ display: "flex", gap: 2 }}>
              {["_", "□", "✕"].map((icon, i) => (
                <button
                  key={i}
                  style={{
                    width: 16,
                    height: 14,
                    fontSize: i === 2 ? 9 : 10,
                    fontWeight: "bold",
                    background: i === 2 ? "#c0392b" : WIN_BG,
                    color: i === 2 ? "white" : "black",
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

          {/* Menu bar */}
          <div
            style={{
              background: WIN_BG,
              borderBottom: "1px solid #808080",
              display: "flex",
              gap: 0,
              padding: "1px 2px",
              fontSize: 11,
            }}
          >
            {["Fichier", "Édition", "Affichage", "Outils", "Aide"].map((m) => (
              <span
                key={m}
                style={{
                  padding: "2px 6px",
                  cursor: "default",
                  userSelect: "none",
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
                {m}
              </span>
            ))}
          </div>

          {/* Explorer body: left panel + right content */}
          <div style={{ display: "flex", minHeight: 400 }}>
            {/* Left panel */}
            <div
              style={{
                width: 180,
                flexShrink: 0,
                background: "#e8e4dc",
                borderRight: "1px solid #808080",
                padding: "8px 0",
                fontSize: 11,
              }}
            >
              <div
                style={{
                  padding: "4px 8px",
                  fontWeight: "bold",
                  fontSize: 10,
                  color: "#444",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: 4,
                }}
              >
                Tâches de fichier
              </div>
              {[
                "Créer un dossier",
                "Publier ce dossier",
                "Partager ce dossier",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "3px 12px",
                    fontSize: 11,
                    color: "#0000ee",
                    cursor: "default",
                    textDecoration: "underline",
                  }}
                >
                  {item}
                </div>
              ))}

              <div
                style={{
                  borderTop: "1px solid #808080",
                  borderBottom: "1px solid #ffffff",
                  margin: "8px 0",
                }}
              />

              <div
                style={{
                  padding: "4px 8px",
                  fontWeight: "bold",
                  fontSize: 10,
                  color: "#444",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: 4,
                }}
              >
                Autres emplacements
              </div>
              {["Poste de travail", "Mes documents", "Réseau"].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "3px 12px",
                    fontSize: 11,
                    color: "#0000ee",
                    cursor: "default",
                    textDecoration: "underline",
                  }}
                >
                  {item}
                </div>
              ))}

              <div
                style={{
                  borderTop: "1px solid #808080",
                  borderBottom: "1px solid #ffffff",
                  margin: "8px 0",
                }}
              />

              <div
                style={{
                  padding: "4px 8px",
                  fontWeight: "bold",
                  fontSize: 10,
                  color: "#444",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: 4,
                }}
              >
                Détails
              </div>
              <div style={{ padding: "2px 12px", fontSize: 10, color: "#444" }}>
                <strong>BUILD &amp; GO-TO MARKET</strong>
                <br />
                Hackathon hybride
                <br />
                48 heures · 23-25 Avr 2026
              </div>
            </div>

            {/* Right content */}
            <div style={{ flex: 1, padding: "12px", background: "white" }}>
              {/* Description group box */}
              <div
                style={{
                  border: "1px solid #808080",
                  padding: "16px 12px 12px",
                  position: "relative",
                  marginBottom: 16,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: -8,
                    left: 8,
                    background: "white",
                    padding: "0 4px",
                    fontSize: 11,
                    fontWeight: "bold",
                    color: "#0a246a",
                  }}
                >
                  L&apos;Événement — BUILD &amp; GO-TO MARKET
                </span>
                <p style={{ fontSize: 11, lineHeight: 1.7, margin: "0 0 8px", color: "#000" }}>
                  EL7EL est un hackathon hybride innovant co-organisé par{" "}
                  <strong>Nexus Club</strong> et <strong>ESTIN Cloud Hub</strong>,
                  visant à offrir une expérience complète autour du cycle de vie
                  d&apos;un produit numérique — de sa conception technique
                  jusqu&apos;à sa valorisation sur le marché.
                </p>
                <p style={{ fontSize: 11, lineHeight: 1.7, margin: 0, color: "#333" }}>
                  Contrairement aux hackathons classiques, ce format unique
                  combine <em>innovation technologique</em>, déploiement{" "}
                  <strong>Cloud &amp; DevOps</strong>, stratégie marketing et
                  modélisation financière.
                </p>
              </div>

              {/* Specialties row */}
              <div style={{ marginBottom: 16 }}>
                <p
                  style={{
                    fontSize: 10,
                    color: "#444",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 6,
                    fontWeight: "bold",
                  }}
                >
                  Spécialités Participantes:
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {specialties.map((s) => (
                    <div
                      key={s.label}
                      style={{
                        ...WIN_RAISED,
                        padding: "3px 10px",
                        fontSize: 11,
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        cursor: "default",
                      }}
                    >
                      <span style={{ fontSize: 12 }}>{s.icon}</span>
                      <span>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Objectives grid - Windows list view style */}
              <div
                style={{
                  border: "1px solid #808080",
                  padding: "12px 10px 10px",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: -8,
                    left: 8,
                    background: "white",
                    padding: "0 4px",
                    fontSize: 11,
                    fontWeight: "bold",
                    color: "#444",
                  }}
                >
                  Objectifs (6 éléments)
                </span>
                {/* Column header */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "140px 1fr",
                    borderBottom: "2px solid #808080",
                    marginBottom: 2,
                  }}
                >
                  {["Nom", "Description"].map((h) => (
                    <div
                      key={h}
                      style={{
                        ...WIN_RAISED,
                        padding: "2px 6px",
                        fontSize: 11,
                        fontWeight: "bold",
                        cursor: "default",
                      }}
                    >
                      {h}
                    </div>
                  ))}
                </div>
                {/* List rows */}
                {objectives.map((obj, i) => {
                  const Icon = obj.icon;
                  return (
                    <div
                      key={obj.label}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "140px 1fr",
                        background: i % 2 === 0 ? "white" : "#f0ede8",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.background =
                          "#0a246a";
                        Array.from((e.currentTarget as HTMLDivElement).querySelectorAll("span, p")).forEach(
                          (el) => ((el as HTMLElement).style.color = "white")
                        );
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.background =
                          i % 2 === 0 ? "white" : "#f0ede8";
                        Array.from((e.currentTarget as HTMLDivElement).querySelectorAll("span, p")).forEach(
                          (el) => ((el as HTMLElement).style.color = "")
                        );
                      }}
                    >
                      <div
                        style={{
                          padding: "4px 6px",
                          fontSize: 11,
                          borderRight: "1px solid #d0ccc4",
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                        }}
                      >
                        <Icon size={12} />
                        <span style={{ fontWeight: "bold" }}>{obj.label}</span>
                      </div>
                      <div
                        style={{
                          padding: "4px 6px",
                          fontSize: 11,
                          lineHeight: 1.4,
                          color: "#333",
                        }}
                      >
                        <p style={{ margin: 0 }}>{obj.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div
            style={{
              background: WIN_BG,
              borderTop: "2px solid #808080",
              display: "flex",
              fontSize: 10,
              fontFamily: "Tahoma, sans-serif",
              padding: "1px 4px",
              gap: 0,
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
              6 objet(s)
            </span>
            <span style={{ color: "#444" }}>
              Hackathon BUILD &amp; GO-TO MARKET · 23-25 Avr 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
