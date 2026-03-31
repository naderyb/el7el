"use client";
import { useState } from "react";

const days = [
  {
    label: "Jour 1",
    sublabel: "Lancement",
    items: [
      { time: "16:00 - 17:30", label: "Check-in", type: "admin" },
      {
        time: "17:30 - 19:00",
        label: "Cérémonie d'ouverture",
        type: "ceremony",
      },
      {
        time: "19:00 - 21:00",
        label: "Début de l'innovation",
        type: "hack",
      },
      { time: "21:00 - 22:00", label: "Dîner", type: "food" },
      { time: "22:00 - 01:00", label: "Innovation", type: "hack" },
    ],
  },
  {
    label: "Jour 2",
    sublabel: "L'Innovation continue",
    items: [
      { time: "01:00 - 03:30", label: "Pause café & activités", type: "break" },
      { time: "03:30 - 08:00", label: "Innovation", type: "hack" },
      { time: "08:00 - 09:00", label: "Petit déjeuner", type: "food" },
      { time: "09:00 - 12:00", label: "Innovation", type: "hack" },
      { time: "12:00 - 13:00", label: "Déjeuner", type: "food" },
      { time: "13:00 - 15:00", label: "Prière & activités", type: "break" },
      { time: "15:00 - 17:30", label: "Innovation", type: "hack" },
      { time: "17:30 - 17:45", label: "Pause café", type: "break" },
      { time: "17:45 - 20:30", label: "Innovation", type: "hack" },
      { time: "20:30 - 21:30", label: "Dîner", type: "food" },
      { time: "21:30 - 01:00", label: "Innovation", type: "hack" },
    ],
  },
  {
    label: "Jour 3",
    sublabel: "Sprint Final",
    items: [
      { time: "01:00 - 03:30", label: "Pause café & activités", type: "break" },
      { time: "03:30 - 08:00", label: "Innovation", type: "hack" },
      { time: "08:00 - 09:00", label: "Petit déjeuner", type: "food" },
      { time: "09:00 - 12:00", label: "Innovation", type: "hack" },
      { time: "12:00", label: "Remise du travail", type: "deadline" },
      { time: "12:30 - 13:30", label: "Déjeuner", type: "food" },
      { time: "15:00", label: "Cérémonie de clôture", type: "ceremony" },
      {
        time: "15:00 - 17:30",
        label: "Pitch finale & remise des prix",
        type: "ceremony",
      },
    ],
  },
];

const typeStyles: Record<
  string,
  { bg: string; dot: string; text: string; label: string }
> = {
  hack: {
    bg: "bg-[#B85C38]/30 border-l-[#B85C38]",
    dot: "bg-[#B85C38]",
    text: "text-[#B85C38]",
    label: "Innovation",
  },
  food: {
    bg: "bg-[#D4A574]/30 border-l-[#D4A574]",
    dot: "bg-[#D4A574]",
    text: "text-[#D4A574]",
    label: "Repas",
  },
  break: {
    bg: "bg-[#A0553C]/30 border-l-[#A0553C]",
    dot: "bg-[#A0553C]",
    text: "text-[#A0553C]",
    label: "Pause",
  },
  ceremony: {
    bg: "bg-[#3D2416]/30 border-l-[#3D2416]",
    dot: "bg-[#3D2416]",
    text: "text-[#3D2416]",
    label: "Cérémonie",
  },
  deadline: {
    bg: "bg-red-200/75 border-l-red-500",
    dot: "bg-red-500",
    text: "text-red-600",
    label: "Deadline",
  },
  admin: {
    bg: "bg-[#6B2D2D]/30 border-l-[#6B2D2D]",
    dot: "bg-[#6B2D2D]",
    text: "text-[#6B2D2D]",
    label: "Admin",
  },
};

export default function Agenda() {
  const [activeDay, setActiveDay] = useState(0);
  const day = days[activeDay];

  return (
    <section id="agenda" className="relative py-24 px-4 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-display text-xs tracking-widest uppercase text-(--accent-terra) mb-3">
            Programme
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-(--primary)">
            Agenda
          </h2>
          <p
            className="text-(--primary)/70 text-sm mt-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            48 heures d&apos;innovation intensive · 23-25 Avril 2025
          </p>
        </div>

        {/* Day tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {days.map((d, i) => (
            <button
              key={d.label}
              onClick={() => setActiveDay(i)}
              className="font-display text-xs tracking-wider uppercase px-6 py-3 rounded-sm transition-all duration-300 font-semibold"
              style={
                activeDay === i
                  ? {
                      background: "#B85C38",
                      color: "white",
                      border: "2px solid #B85C38",
                      boxShadow: "0 6px 20px rgba(184, 92, 56, 0.4)",
                    }
                  : {
                      background: "white",
                      color: "#3D2416",
                      border: "2px solid rgba(184, 92, 56, 0.4)",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    }
              }
            >
              {d.label}{" "}
              <span className="opacity-70 normal-case ml-1 block sm:inline">
                · {d.sublabel}
              </span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-22 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#B85C38]/50 via-[#D4A574]/40 to-[#D4A574]/10 hidden sm:block" />

          <div className="flex flex-col gap-3">
            {day.items.map((item, i) => {
              const style = typeStyles[item.type];
              return (
                <div key={i} className="flex items-start gap-4 sm:gap-6">
                  {/* Time */}
                  <div className="hidden sm:block w-20 shrink-0 text-right">
                    <span className="font-display text-[10px] tracking-wide font-semibold">
                      {item.time.split(" - ")[0]}
                    </span>
                  </div>

                  {/* Dot */}
                  <div
                    className={`hidden sm:flex shrink-0 w-3 h-3 rounded-full mt-1.5 ${style.dot} ring-2 ring-white shadow-md`}
                  />

                  {/* Card */}
                  <div
                    className={`flex-1 p-4 rounded-sm border-l-4 ${style.bg} transition-all duration-200 hover:shadow-lg hover:scale-[1.02]`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="font-display text-sm font-semibold text-(--primary) leading-tight">
                        {item.label}
                      </span>
                      <span className="font-display text-[9px] tracking-widest uppercase text-(--primary)/50 sm:hidden">
                        {item.time}
                      </span>
                      <span
                        className={`hidden sm:block font-display text-[10px] tracking-widest font-semibold ${style.text}`}
                      >
                        {item.type === "hack"
                          ? "Innovation"
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
      </div>
    </section>
  );
}
