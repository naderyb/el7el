"use client";

export function ZelijBorder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      style={{ height: "32px" }}
    >
      <svg
        width="100%"
        height="32"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="zelij-border"
            width="96"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            {/* Outer hexagonal frame */}
            <polygon
              points="48,2 68,10 68,22 48,30 28,22 28,10"
              fill="none"
              stroke="#052F43"
              strokeWidth="1.2"
              opacity="0.8"
            />
            {/* Mid layer */}
            <polygon
              points="48,6 64,12 64,20 48,26 32,20 32,12"
              fill="none"
              stroke="#01B2A6"
              strokeWidth="0.8"
              opacity="0.6"
            />
            {/* Inner accent */}
            <polygon
              points="48,10 60,14 60,18 48,22 36,18 36,14"
              fill="#CC9033"
              opacity="0.15"
            />
            {/* Center circle */}
            <circle cx="48" cy="16" r="3" fill="#037DBC" opacity="0.5" />
            {/* Corner accents */}
            <circle cx="28" cy="16" r="2" fill="#01B2A6" opacity="0.4" />
            <circle cx="68" cy="16" r="2" fill="#01B2A6" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="32" fill="url(#zelij-border)" />
      </svg>
    </div>
  );
}

export function ZelijSection({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="zelij-full"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            {/* Large outer dodecagon */}
            <polygon
              points="60,8 95,20 105,55 95,90 60,102 25,90 15,55 25,20"
              fill="none"
              stroke="#052F43"
              strokeWidth="0.8"
              opacity="0.12"
            />

            {/* Mid-layer polygons */}
            <polygon
              points="60,22 82,32 88,60 82,88 60,98 38,88 32,60 38,32"
              fill="none"
              stroke="#01B2A6"
              strokeWidth="0.6"
              opacity="0.08"
            />

            {/* Inner hexagon */}
            <polygon
              points="60,35 76,42 76,75 60,82 44,75 44,42"
              fill="none"
              stroke="#037DBC"
              strokeWidth="0.5"
              opacity="0.1"
            />

            {/* Decorative diamonds */}
            <polygon
              points="60,45 68,60 60,75 52,60"
              fill="#CC9033"
              opacity="0.08"
            />

            {/* Radial lines */}
            <line
              x1="60"
              y1="8"
              x2="60"
              y2="35"
              stroke="#035482"
              strokeWidth="0.4"
              opacity="0.1"
            />
            <line
              x1="95"
              y1="20"
              x2="76"
              y2="42"
              stroke="#035482"
              strokeWidth="0.4"
              opacity="0.1"
            />
            <line
              x1="105"
              y1="55"
              x2="76"
              y2="60"
              stroke="#035482"
              strokeWidth="0.4"
              opacity="0.1"
            />
            <line
              x1="95"
              y1="90"
              x2="76"
              y2="75"
              stroke="#035482"
              strokeWidth="0.4"
              opacity="0.1"
            />
            <line
              x1="60"
              y1="102"
              x2="60"
              y2="82"
              stroke="#035482"
              strokeWidth="0.4"
              opacity="0.1"
            />
            <line
              x1="25"
              y1="90"
              x2="44"
              y2="75"
              stroke="#035482"
              strokeWidth="0.4"
              opacity="0.1"
            />
            <line
              x1="15"
              y1="55"
              x2="44"
              y2="60"
              stroke="#035482"
              strokeWidth="0.4"
              opacity="0.1"
            />
            <line
              x1="25"
              y1="20"
              x2="44"
              y2="42"
              stroke="#035482"
              strokeWidth="0.4"
              opacity="0.1"
            />

            {/* Center accent circle */}
            <circle
              cx="60"
              cy="60"
              r="6"
              fill="none"
              stroke="#01B2A6"
              strokeWidth="0.5"
              opacity="0.15"
            />
            <circle cx="60" cy="60" r="2" fill="#CC9033" opacity="0.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#zelij-full)" />
      </svg>
    </div>
  );
}

export function OrnamentalStar({
  size = 60,
  opacity = 0.2,
  className = "",
}: {
  size?: number;
  opacity?: number;
  className?: string;
}) {
  const cx = size / 2;
  const cy = size / 2;
  const r1 = size * 0.45;
  const r2 = size * 0.2;
  const points = 8;
  const pts = Array.from({ length: points * 2 }, (_, i) => {
    const angle = (Math.PI / points) * i - Math.PI / 2;
    const r = i % 2 === 0 ? r1 : r2;
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(" ");

  return (
    <svg
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points={pts}
        fill="#C4824A"
        fillOpacity={opacity}
        stroke="#C8973C"
        strokeWidth="0.5"
        strokeOpacity={opacity * 2}
      />
      <circle
        cx={cx}
        cy={cy}
        r={size * 0.08}
        fill="#C8973C"
        fillOpacity={opacity * 1.5}
      />
    </svg>
  );
}

export function OrnamentalDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 h-px bg-linear-to-r from-transparent via-[#C4824A] to-transparent opacity-60" />
      <OrnamentalStar size={32} opacity={0.5} />
      {label && (
        <span className="font-display text-xs tracking-widest text-[#C4824A] uppercase opacity-80">
          {label}
        </span>
      )}
      <OrnamentalStar size={32} opacity={0.5} />
      <div className="flex-1 h-px bg-linear-to-r from-transparent via-[#C4824A] to-transparent opacity-60" />
    </div>
  );
}
