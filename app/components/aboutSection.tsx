"use client";
import {
  OrnamentalDivider,
  OrnamentalStar,
  ZelijSection,
} from "../zelijpattern";
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
  { label: "Computer Science", color: "#2E7D6B", icon: "💻" },
  { label: "Marketing", color: "#C4824A", icon: "📈" },
  { label: "Finance", color: "#C8973C", icon: "💰" },
  { label: "Comptabilité", color: "#5C3A1E", icon: "📊" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: "#FAF3E0" }}
    >
      <ZelijSection className="opacity-60" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-display text-xs tracking-widest uppercase text-[#C4824A] mb-3">
            L&apos;Événement
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#3D2210] mb-6">
            BUILD &amp; GO-TO MARKET
          </h2>
          <OrnamentalDivider />
          <p
            className="text-[#5C3A1E]/80 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mt-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            EL7EL est un hackathon hybride innovant co-organisé par{" "}
            <strong className="text-[#C4824A]">Nexus Club</strong> et{" "}
            <strong className="text-[#C4824A]">ESTIN Cloud Hub</strong>, visant
            à offrir une expérience complète autour du cycle de vie d&apos;un
            produit numérique — de sa conception technique jusqu&apos;à sa
            valorisation sur le marché.
          </p>
          <p
            className="text-[#5C3A1E]/70 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mt-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contrairement aux hackathons classiques, ce format unique combine{" "}
            <em>innovation technologique</em>, déploiement{" "}
            <strong>Cloud &amp; DevOps</strong>, stratégie marketing et
            modélisation financière — pour produire des solutions à fort
            potentiel réel.
          </p>
        </div>

        {/* Specialties */}
        <div className="mb-16">
          <p className="font-display text-[10px] tracking-widest uppercase text-[#C4824A]/70 text-center mb-6">
            Spécialités Participantes
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {specialties.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 px-5 py-2.5 rounded-sm card-hover"
                style={{
                  background: "white",
                  border: `1px solid ${s.color}40`,
                  boxShadow: "0 2px 10px rgba(92,58,30,0.08)",
                }}
              >
                <span className="text-lg">{s.icon}</span>
                <span
                  className="font-display text-xs tracking-wider uppercase"
                  style={{ color: s.color }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Objectives grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {objectives.map((obj, i) => {
            const Icon = obj.icon;
            return (
              <div
                key={obj.label}
                className="relative p-6 rounded-sm card-hover group"
                style={{
                  background: "white",
                  border: "1px solid rgba(196,130,74,0.2)",
                  boxShadow: "0 2px 15px rgba(92,58,30,0.06)",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {/* Corner ornament */}
                <div className="absolute top-2 right-2">
                  <OrnamentalStar size={20} opacity={0.3} />
                </div>

                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center mb-4"
                  style={{
                    background: "rgba(196,130,74,0.1)",
                    border: "1px solid rgba(196,130,74,0.2)",
                  }}
                >
                  <Icon size={18} color="#C4824A" />
                </div>
                <h3 className="font-display text-sm font-semibold text-[#3D2210] mb-2 tracking-wide">
                  {obj.label}
                </h3>
                <p
                  className="text-[#5C3A1E]/70 text-sm leading-relaxed"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {obj.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
