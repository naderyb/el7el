"use client";
import { useState } from "react";
import { OrnamentalDivider, ZelijSection } from "../zelijpattern";
import { Coffee, Utensils, Star, Moon } from "lucide-react";

const days = [
  {
    label: "Jour 0",
    sublabel: "Lancement",
    items: [
      { time: "16:00 – 17:30", label: "Check-in", type: "admin" },
      {
        time: "17:30 – 19:00",
        label: "Cérémonie d'ouverture",
        type: "ceremony",
      },
      {
        time: "19:00 – 21:00",
        label: "Début de l'innovation 🚀",
        type: "hack",
      },
      { time: "21:00 – 22:00", label: "Dîner", type: "food" },
      { time: "22:00 – 01:00", label: "Innovation", type: "hack" },
    ],
  },
  {
    label: "Jour 1",
    sublabel: "Nuit Blanche",
    items: [
      { time: "01:00 – 03:30", label: "Pause café & activités", type: "break" },
      { time: "03:30 – 08:00", label: "Innovation", type: "hack" },
      { time: "08:00 – 09:00", label: "Petit déjeuner", type: "food" },
      { time: "09:00 – 12:00", label: "Innovation", type: "hack" },
      { time: "12:00 – 13:00", label: "Déjeuner", type: "food" },
      { time: "13:00 – 15:00", label: "Prière & activités", type: "break" },
      { time: "15:00 – 17:30", label: "Innovation", type: "hack" },
      { time: "17:30 – 17:45", label: "Pause café", type: "break" },
      { time: "17:45 – 20:30", label: "Innovation", type: "hack" },
      { time: "20:30 – 21:30", label: "Dîner", type: "food" },
      { time: "21:30 – 01:00", label: "Innovation", type: "hack" },
    ],
  },
  {
    label: "Jour 2",
    sublabel: "Sprint Final",
    items: [
      { time: "01:00 – 03:30", label: "Pause café & activités", type: "break" },
      { time: "03:30 – 08:00", label: "Innovation", type: "hack" },
      { time: "08:00 – 09:00", label: "Petit déjeuner", type: "food" },
      { time: "09:00 – 12:00", label: "Innovation", type: "hack" },
      { time: "12:00", label: "⚠️ Remise du travail", type: "deadline" },
      { time: "12:30 – 13:30", label: "Déjeuner", type: "food" },
      { time: "15:00", label: "Cérémonie de clôture", type: "ceremony" },
      {
        time: "15:00 – 17:30",
        label: "Pitch finale & remise des prix 🏆",
        type: "ceremony",
      },
    ],
  },
];

const typeStyles: Record<string, { bg: string; dot: string; text: string }> = {
  hack: {
    bg: "bg-[#2E7D6B]/10 border-l-[#2E7D6B]",
    dot: "bg-[#2E7D6B]",
    text: "text-[#2E7D6B]",
  },
  food: {
    bg: "bg-[#C4824A]/10 border-l-[#C4824A]",
    dot: "bg-[#C4824A]",
    text: "text-[#C4824A]",
  },
  break: {
    bg: "bg-[#C8973C]/10 border-l-[#C8973C]",
    dot: "bg-[#C8973C]",
    text: "text-[#C8973C]",
  },
  ceremony: {
    bg: "bg-[#5C3A1E]/10 border-l-[#5C3A1E]",
    dot: "bg-[#5C3A1E]",
    text: "text-[#5C3A1E]",
  },
  deadline: {
    bg: "bg-red-100 border-l-red-500",
    dot: "bg-red-500",
    text: "text-red-600",
  },
  admin: {
    bg: "bg-[#3D5A80]/10 border-l-[#3D5A80]",
    dot: "bg-[#3D5A80]",
    text: "text-[#3D5A80]",
  },
};

export default function Agenda() {
  const [activeDay, setActiveDay] = useState(0);
  const day = days[activeDay];

  return (
    <section
      id="agenda"
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: "#F5ECD7" }}
    >
      <ZelijSection className="opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-display text-xs tracking-widest uppercase text-[#C4824A] mb-3">
            Programme
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#3D2210]">
            Agenda
          </h2>
          <OrnamentalDivider />
          <p
            className="text-[#5C3A1E]/70 text-sm mt-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            48 heures d&apos;innovation intensive · 23–25 Avril 2025
          </p>
        </div>

        {/* Day tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {days.map((d, i) => (
            <button
              key={d.label}
              onClick={() => setActiveDay(i)}
              className="font-display text-xs tracking-wider uppercase px-5 py-2.5 rounded-sm transition-all duration-300"
              style={
                activeDay === i
                  ? {
                      background: "#C4824A",
                      color: "#FAF3E0",
                      border: "1px solid #C4824A",
                      boxShadow: "0 4px 15px rgba(196,130,74,0.3)",
                    }
                  : {
                      background: "white",
                      color: "#5C3A1E",
                      border: "1px solid rgba(196,130,74,0.3)",
                    }
              }
            >
              {d.label}{" "}
              <span className="opacity-60 normal-case ml-1">
                · {d.sublabel}
              </span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-22 top-0 bottom-0 w-px bg-linear-to-b from-[#C4824A]/30 via-[#C8973C]/20 to-transparent hidden sm:block" />

          <div className="flex flex-col gap-3">
            {day.items.map((item, i) => {
              const style = typeStyles[item.type];
              return (
                <div key={i} className="flex items-start gap-4 sm:gap-6">
                  {/* Time */}
                  <div className="hidden sm:block w-20 shrink-0 text-right">
                    <span className="font-display text-[10px] tracking-wide text-[#5C3A1E]/60">
                      {item.time.split(" – ")[0]}
                    </span>
                  </div>

                  {/* Dot */}
                  <div
                    className={`hidden sm:flex shrink-0 w-3 h-3 rounded-full mt-3 ${style.dot} ring-2 ring-white shadow-sm`}
                  />

                  {/* Card */}
                  <div
                    className={`flex-1 p-3 sm:p-4 rounded-sm border-l-2 ${style.bg} transition-all duration-200 hover:shadow-md`}
                    style={{ borderLeftWidth: "3px" }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <span className="font-display text-xs tracking-wide text-[#3D2210]">
                        {item.label}
                      </span>
                      <span className="font-display text-[9px] tracking-widest uppercase text-[#5C3A1E]/50 sm:hidden">
                        {item.time}
                      </span>
                      <span
                        className={`hidden sm:block font-display text-[9px] tracking-widest ${style.text} opacity-70`}
                      >
                        {item.type === "hack"
                          ? "Hack"
                          : item.type === "food"
                            ? "Repas"
                            : item.type === "break"
                              ? "Pause"
                              : item.type === "ceremony"
                                ? "Cérémonie"
                                : item.type === "deadline"
                                  ? "Deadline"
                                  : "Admin"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-10 pt-8 border-t border-[#C4824A]/20">
          {Object.entries({
            hack: { label: "Innovation", icon: Star },
            food: { label: "Repas", icon: Utensils },
            break: { label: "Pause", icon: Coffee },
            ceremony: { label: "Cérémonie", icon: Moon },
            deadline: { label: "Deadline", icon: Star },
            admin: { label: "Admin", icon: Star },
          }).map(([k, v]) => {
            const IconComponent = v.icon;
            return (
              <div key={k} className="flex items-center gap-1.5">
                <IconComponent className={`w-3 h-3 ${typeStyles[k].text}`} />
                <span className="font-display text-[9px] tracking-widest uppercase text-[#5C3A1E]/60">
                  {v.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
