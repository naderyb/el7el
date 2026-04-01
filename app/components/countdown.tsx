"use client";
import { useState, useEffect } from "react";

const EVENT_DATE = new Date("2026-04-23T18:00:00");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const tick = () => {
      const now = new Date();
      const diff = EVENT_DATE.getTime() - now.getTime();
      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTime({ days, hours, minutes, seconds });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [mounted]);

  if (!mounted) return null;

  const units = [
    { label: "Jours", value: time.days },
    { label: "Heures", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Secondes", value: time.seconds },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        fontFamily: "Tahoma, MS Sans Serif, monospace",
      }}
    >
      {units.map((u, i) => (
        <div
          key={u.label}
          style={{ display: "flex", alignItems: "flex-start", gap: 6 }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* Sunken display panel */}
            <div
              style={{
                background: "black",
                color: "#00ff00",
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: 22,
                fontWeight: "bold",
                width: 56,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderTop: "2px solid #404040",
                borderLeft: "2px solid #404040",
                borderRight: "2px solid #ffffff",
                borderBottom: "2px solid #ffffff",
                letterSpacing: "0.05em",
              }}
            >
              {pad(u.value)}
            </div>
            <span
              style={{
                fontSize: 9,
                color: "#444",
                marginTop: 3,
                fontFamily: "Tahoma, sans-serif",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {u.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: 8,
                gap: 4,
              }}
            >
              <span
                style={{
                  width: 4,
                  height: 4,
                  background: "#000",
                  display: "block",
                  borderRadius: 0,
                }}
              />
              <span
                style={{
                  width: 4,
                  height: 4,
                  background: "#000",
                  display: "block",
                  borderRadius: 0,
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
