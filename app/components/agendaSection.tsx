"use client";
import { useState } from "react";

const days = [
  {
    label: "Jour 1",
    sublabel: "Lancement",
    items: [
      { time: "16:00 - 17:30", label: "Check-in", type: "admin" },
      { time: "17:30 - 19:00", label: "Cérémonie d'ouverture", type: "ceremony" },
      { time: "19:00 - 21:00", label: "Début de l'innovation", type: "hack" },
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
      { time: "15:00 - 17:30", label: "Pitch finale & remise des prix", type: "ceremony" },
    ],
  },
];

const typeConfig: Record<string, { dot: string; label: string; color: string }> = {
  hack:     { dot: "#008080", label: "Innovation",  color: "#000080" },
  food:     { dot: "#008000", label: "Repas",       color: "#006400" },
  break:    { dot: "#808000", label: "Pause",       color: "#554400" },
  ceremony: { dot: "#000080", label: "Cérémonie",   color: "#000080" },
  deadline: { dot: "#cc0000", label: "Deadline",    color: "#cc0000" },
  admin:    { dot: "#808080", label: "Admin",       color: "#444" },
};

const WIN_BG = "#d4d0c8";
const WIN_RAISED = {
  borderTop: "2px solid #ffffff",
  borderLeft: "2px solid #ffffff",
  borderRight: "2px solid #404040",
  borderBottom: "2px solid #404040",
  background: WIN_BG,
};

export default function Agenda() {
  const [activeDay, setActiveDay] = useState(0);
  const day = days[activeDay];

  return (
    <section
      id="agenda"
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
              Calendrier — EL7EL 2026 · 48 heures d&apos;innovation
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
            {["Fichier", "Affichage", "Aller à", "Aide"].map((m) => (
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

          {/* Tab row */}
          <div
            style={{
              background: "#bbb9b3",
              display: "flex",
              alignItems: "flex-end",
              paddingTop: 6,
              paddingLeft: 6,
              paddingRight: 6,
              borderBottom: `2px solid ${WIN_BG}`,
            }}
          >
            {days.map((d, i) => (
              <button
                key={d.label}
                onClick={() => setActiveDay(i)}
                style={{
                  padding: "4px 16px",
                  fontSize: 11,
                  fontFamily: "Tahoma, sans-serif",
                  cursor: "pointer",
                  position: "relative",
                  marginRight: 2,
                  background: activeDay === i ? WIN_BG : "#bbb9b3",
                  borderTop: "1px solid #ffffff",
                  borderLeft: "1px solid #ffffff",
                  borderRight: "1px solid #404040",
                  borderBottom: activeDay === i ? `2px solid ${WIN_BG}` : "1px solid #404040",
                  zIndex: activeDay === i ? 1 : 0,
                  fontWeight: activeDay === i ? "bold" : "normal",
                  color: "#000",
                }}
              >
                {d.label} · {d.sublabel}
              </button>
            ))}
          </div>

          {/* Content area */}
          <div style={{ background: WIN_BG, padding: "8px" }}>
            {/* Table header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr 90px",
                marginBottom: 1,
              }}
            >
              {["Heure", "Activité", "Type"].map((h) => (
                <div
                  key={h}
                  style={{
                    ...WIN_RAISED,
                    padding: "2px 8px",
                    fontSize: 11,
                    fontWeight: "bold",
                    cursor: "default",
                    userSelect: "none",
                  }}
                >
                  {h}
                </div>
              ))}
            </div>

            {/* List container */}
            <div
              style={{
                borderTop: "2px solid #404040",
                borderLeft: "2px solid #404040",
                borderRight: "2px solid #ffffff",
                borderBottom: "2px solid #ffffff",
                background: "white",
                maxHeight: 400,
                overflowY: "auto",
              }}
            >
              {day.items.map((item, i) => {
                const cfg = typeConfig[item.type] || typeConfig.admin;
                return (
                  <div
                    key={i}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "120px 1fr 90px",
                      background: i % 2 === 0 ? "white" : "#f0ede8",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = "#0a246a";
                      Array.from(
                        (e.currentTarget as HTMLDivElement).querySelectorAll("span")
                      ).forEach((el) => ((el as HTMLElement).style.color = "white"));
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background =
                        i % 2 === 0 ? "white" : "#f0ede8";
                      Array.from(
                        (e.currentTarget as HTMLDivElement).querySelectorAll("span")
                      ).forEach((el) => ((el as HTMLElement).style.color = ""));
                    }}
                  >
                    {/* Time */}
                    <div
                      style={{
                        padding: "4px 8px",
                        fontSize: 11,
                        borderRight: "1px solid #d0ccc4",
                        fontFamily: "'Courier New', monospace",
                        color: "#444",
                      }}
                    >
                      <span>{item.time}</span>
                    </div>
                    {/* Label */}
                    <div
                      style={{
                        padding: "4px 8px",
                        fontSize: 11,
                        borderRight: "1px solid #d0ccc4",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: cfg.dot,
                          display: "inline-block",
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontWeight: item.type === "deadline" ? "bold" : "normal" }}>
                        {item.label}
                      </span>
                    </div>
                    {/* Type badge */}
                    <div
                      style={{
                        padding: "4px 8px",
                        fontSize: 10,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ color: cfg.color, fontWeight: "bold" }}>
                        {cfg.label}
                      </span>
                    </div>
                  </div>
                );
              })}
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
              {day.items.length} élément(s)
            </span>
            <span style={{ color: "#444" }}>
              {day.label} — {day.sublabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
