"use client";

interface SectionSeparatorProps {
  className?: string;
}

export default function SectionSeparator({
  className = "",
}: SectionSeparatorProps) {
  return (
    <div
      className={`w-full flex items-center justify-center py-12 ${className}`}
    >
      {/* LEFT LINE */}
      <div className="flex-1 h-0.5 bg-(--accent-terra)" />

      {/* CENTER SHAPE */}
      <div className="mx-6 flex items-center justify-center relative">
        <div className="w-4 h-4 border-2 border-(--accent-warm-gold) rotate-45" />
        <div className="absolute w-2 h-2 bg-(--accent-warm-gold) rotate-45" />
      </div>

      {/* RIGHT LINE */}
      <div className="flex-1 h-0.5 bg-(--accent-terra)" />
    </div>
  );
}
