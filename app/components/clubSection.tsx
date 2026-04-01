"use client";
import Image from "next/image";
import { ExternalLink, Target, Globe, Users } from "lucide-react";

const clubs = [
  {
    name: "Nexus Club",
    school: "IFAG - Institut Higher Institute du groupe INSAG",
    tagline: "Entrepreneuriat & Technologie",
    website: "https://nexus-club-zeta.vercel.app/",
    description:
      "Nexus Club est un club estudiantin dynamique et innovant qui regroupe des étudiants passionnés par l'entrepreneuriat et la technologie. Notre mission : favoriser l'apprentissage, l'échange de compétences et l'innovation, et rapprocher le monde professionnel aux étudiants.",
    points: [
      { icon: Target, text: "Développer les compétences via des workshops orientés marché du travail" },
      { icon: Globe, text: "Créer des opportunités de networking entre étudiants, pros et entrepreneurs" },
      { icon: Users, text: "Faciliter l'insertion professionnelle via stages, mentorat et emploi" },
    ],
  },
  {
    name: "ESTIN Cloud Hub",
    school: "ESTIN - École Supérieure en Sciences et Technologies de l'Informatique et du Numérique, Béjaïa",
    tagline: "Cloud Computing & DevOps",
    website: null,
    description:
      "ESTIN Cloud Hub (ECH) est un club technologique universitaire spécialisé dans le Cloud Computing et le DevOps. Créé pour accompagner les étudiants dans leur transition vers le monde professionnel, le club développe des compétences pratiques et recherchées.",
    points: [
      { icon: Target, text: "Former des étudiants autonomes et adaptables orientés innovation" },
      { icon: Globe, text: "Construire une communauté technologique innovante autour du Cloud et DevOps" },
      { icon: Users, text: "Intégrer les étudiants au marché national et international" },
    ],
  },
];

const WIN_BG = "#d4d0c8";
const WIN_RAISED = {
  borderTop: "2px solid #ffffff",
  borderLeft: "2px solid #ffffff",
  borderRight: "2px solid #404040",
  borderBottom: "2px solid #404040",
  background: WIN_BG,
};

export default function Clubs() {
  return (
    <section
      id="clubs"
      style={{
        background: "#ece9d8",
        padding: "40px 16px",
        fontFamily: "Tahoma, MS Sans Serif, Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        {/* Outer window */}
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
              Co-Organisateurs — Les Clubs
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
              padding: "1px 2px",
              fontSize: 11,
            }}
          >
            {["Fichier", "Édition", "Affichage", "Aide"].map((m) => (
              <span
                key={m}
                style={{ padding: "2px 6px", cursor: "default", userSelect: "none" }}
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

          {/* Body */}
          <div style={{ background: WIN_BG, padding: "12px" }}>
            <p
              style={{
                fontSize: 11,
                color: "#444",
                marginBottom: 12,
                fontStyle: "italic",
              }}
            >
              Deux clubs unis par une vision commune d&apos;excellence et d&apos;innovation.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: 12,
              }}
            >
              {clubs.map((club, ci) => (
                <div
                  key={club.name}
                  style={{
                    ...WIN_RAISED,
                    boxShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                  }}
                >
                  {/* Inner title bar (inactive style for second) */}
                  <div
                    style={{
                      background:
                        ci === 0
                          ? "linear-gradient(90deg, #0a246a 0%, #a6caf0 100%)"
                          : "linear-gradient(90deg, #7a96df 0%, #adc3e0 100%)",
                      color: "white",
                      padding: "3px 6px",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      userSelect: "none",
                    }}
                  >
                    {club.name === "Nexus Club" && (
                      <Image
                        src="/nexus_club_logo.svg"
                        alt="Nexus Club Logo"
                        width={12}
                        height={12}
                        style={{ imageRendering: "pixelated" }}
                      />
                    )}
                    <span style={{ fontSize: 11, fontWeight: "bold", flex: 1 }}>
                      {club.name}
                    </span>
                    {club.website && (
                      <a
                        href={club.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: WIN_BG,
                          color: "black",
                          padding: "1px 6px",
                          fontSize: 10,
                          fontFamily: "Tahoma, sans-serif",
                          borderTop: "1px solid #ffffff",
                          borderLeft: "1px solid #ffffff",
                          borderRight: "1px solid #404040",
                          borderBottom: "1px solid #404040",
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                        }}
                        aria-label="Visiter le site"
                      >
                        <ExternalLink size={9} />
                        <span>Site</span>
                      </a>
                    )}
                  </div>

                  {/* Card body */}
                  <div style={{ padding: "10px", background: WIN_BG }}>
                    {/* School name - sunken */}
                    <div
                      style={{
                        borderTop: "2px solid #404040",
                        borderLeft: "2px solid #404040",
                        borderRight: "2px solid #ffffff",
                        borderBottom: "2px solid #ffffff",
                        background: "white",
                        padding: "4px 6px",
                        fontSize: 10,
                        color: "#444",
                        marginBottom: 8,
                        lineHeight: 1.4,
                      }}
                    >
                      <strong style={{ color: "#0a246a" }}>{club.tagline}</strong>
                      <br />
                      {club.school}
                    </div>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: 11,
                        lineHeight: 1.6,
                        color: "#000",
                        marginBottom: 10,
                      }}
                    >
                      {club.description}
                    </p>

                    {/* Group box with points */}
                    <div
                      style={{
                        border: "1px solid #808080",
                        padding: "12px 8px 8px",
                        position: "relative",
                        marginTop: 8,
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
                        Missions
                      </span>
                      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                        {club.points.map((pt, i) => {
                          const Icon = pt.icon;
                          return (
                            <div
                              key={i}
                              style={{ display: "flex", alignItems: "flex-start", gap: 6 }}
                            >
                              <div
                                style={{
                                  borderTop: "2px solid #404040",
                                  borderLeft: "2px solid #404040",
                                  borderRight: "2px solid #ffffff",
                                  borderBottom: "2px solid #ffffff",
                                  background: "white",
                                  width: 18,
                                  height: 18,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  flexShrink: 0,
                                }}
                              >
                                <Icon size={10} color="#0a246a" />
                              </div>
                              <p style={{ fontSize: 10, lineHeight: 1.5, color: "#333", margin: 0 }}>
                                {pt.text}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
              2 objet(s)
            </span>
            <span style={{ color: "#444" }}>Co-Organisateurs d&apos;EL7EL 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
