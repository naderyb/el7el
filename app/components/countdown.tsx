"use client";
import { useState, useEffect } from "react";

const EVENT_DATE = new Date("2025-04-23T16:00:00");

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
  const [mounted] = useState(true);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = EVENT_DATE.getTime() - now.getTime();
      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
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
    <div className="flex items-center justify-center gap-3 sm:gap-6">
      {units.map((u, i) => (
        <div key={u.label} className="flex items-start gap-3 sm:gap-6">
          <div className="flex flex-col items-center">
            <div
              className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-sm flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #3D2210 0%, #5C3A1E 100%)",
                border: "1px solid rgba(196,130,74,0.5)",
                boxShadow:
                  "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(200,151,60,0.2)",
              }}
            >
              {/* Corner ornaments */}
              <span className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-[#C8973C]/50" />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-[#C8973C]/50" />
              <span className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-[#C8973C]/50" />
              <span className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-[#C8973C]/50" />
              <span
                className="font-display text-2xl sm:text-3xl font-bold"
                style={{
                  color: "#E8D5B0",
                  textShadow: "0 0 20px rgba(200,151,60,0.4)",
                }}
              >
                {pad(u.value)}
              </span>
            </div>
            <span
              className="font-display text-[9px] sm:text-[10px] tracking-widest uppercase mt-2"
              style={{ color: "#C4824A" }}
            >
              {u.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <div className="flex flex-col items-center mt-3">
              <span className="w-1 h-1 rounded-full bg-[#C4824A] mb-2" />
              <span className="w-1 h-1 rounded-full bg-[#C4824A]" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
