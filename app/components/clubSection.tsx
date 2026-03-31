"use client";
import Image from "next/image";
import { ExternalLink, Target, Globe, Users } from "lucide-react";

const clubs = [
  {
    name: "Nexus Club",
    school: "IFAG - Institut Higher Institute du groupe INSAG",
    tagline: "Entrepreneuriat & Technologie",
    color: "#B85C38",
    accentColor: "#A0553C",
    website: "https://nexus-club-zeta.vercel.app/",
    description:
      "Nexus Club est un club estudiantin dynamique et innovant qui regroupe des étudiants passionnés par l'entrepreneuriat et la technologie. Notre mission : favoriser l'apprentissage, l'échange de compétences et l'innovation, et rapprocher le monde professionnel aux étudiants.",
    points: [
      {
        icon: Target,
        text: "Développer les compétences via des workshops orientés marché du travail",
      },
      {
        icon: Globe,
        text: "Créer des opportunités de networking entre étudiants, pros et entrepreneurs",
      },
      {
        icon: Users,
        text: "Faciliter l'insertion professionnelle via stages, mentorat et emploi",
      },
    ],
  },
  {
    name: "ESTIN Cloud Hub",
    school:
      "ESTIN - École Supérieure en Sciences et Technologies de l'Informatique et du Numérique, Béjaïa",
    tagline: "Cloud Computing & DevOps",
    color: "#D4A574",
    accentColor: "#A0553C",
    website: null,
    description:
      "ESTIN Cloud Hub (ECH) est un club technologique universitaire spécialisé dans le Cloud Computing et le DevOps. Créé pour accompagner les étudiants dans leur transition vers le monde professionnel, le club développe des compétences pratiques et recherchées.",
    points: [
      {
        icon: Target,
        text: "Former des étudiants autonomes et adaptables orientés innovation",
      },
      {
        icon: Globe,
        text: "Construire une communauté technologique innovante autour du Cloud et DevOps",
      },
      {
        icon: Users,
        text: "Intégrer les étudiants au marché national et international",
      },
    ],
  },
];

export default function Clubs() {
  return (
    <section id="clubs" className="relative py-24 px-4 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display text-xs tracking-widest uppercase text-(--accent-terra)">
            Co-Organisateurs
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-(--primary)">
            Les Clubs
          </h2>
          <p
            className="text-(--primary)/70 text-sm mt-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Deux clubs unis par une vision commune d&apos;excellence et
            d&apos;innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {clubs.map((club) => (
            <div
              key={club.name}
              className="relative rounded-sm overflow-hidden card-hover"
              style={{
                background: "white",
                border: "1px solid rgba(184,92,56,0.15)",
                boxShadow: "0 4px 30px rgba(61,36,22,0.08)",
              }}
            >
              {/* Top accent bar */}
              <div
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(90deg, ${club.color}, ${club.accentColor})`,
                }}
              />

              {/* Header */}
              <div
                className="p-6 pb-4"
                style={{
                  background: `linear-gradient(135deg, ${club.color}08, transparent)`,
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {club.name === "Nexus Club" && (
                        <Image
                          src="/nexus_club_logo.svg"
                          alt="Nexus Club Logo"
                          width={36}
                          height={36}
                          style={{ height: "auto" }}
                        />
                      )}
                      <h3
                        className="font-display text-xl font-bold"
                        style={{ color: "#3D2416" }}
                      >
                        {club.name}
                      </h3>
                    </div>
                    <p
                      className="font-display text-[10px] tracking-widest uppercase mb-1"
                      style={{ color: club.color }}
                    >
                      {club.tagline}
                    </p>
                    <p
                      className="text-[#3D2416]/50 text-xs leading-relaxed"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {club.school}
                    </p>
                  </div>
                  {club.website && (
                    <a
                      href={club.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 p-2 rounded-sm transition-colors"
                      style={{
                        background: `${club.color}15`,
                        border: `1px solid ${club.color}30`,
                      }}
                      aria-label="Visiter le site"
                    >
                      <ExternalLink size={14} style={{ color: club.color }} />
                    </a>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="px-6 pb-6">
                <div
                  className="h-px w-full mb-4"
                  style={{
                    background: `linear-gradient(90deg, ${club.color}40, transparent)`,
                  }}
                />
                <p
                  className="text-[#3D2416]/75 text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {club.description}
                </p>

                <div className="flex flex-col gap-3">
                  {club.points.map((pt, i) => {
                    const Icon = pt.icon;
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div
                          className="shrink-0 w-6 h-6 rounded-sm flex items-center justify-center mt-0.5"
                          style={{ background: `${club.color}15` }}
                        >
                          <Icon size={12} style={{ color: club.color }} />
                        </div>
                        <p
                          className="text-[#3D2416]/70 text-xs leading-relaxed"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {pt.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
