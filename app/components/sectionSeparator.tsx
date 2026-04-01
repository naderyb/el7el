"use client";

interface SectionSeparatorProps {
  className?: string;
}

export default function SectionSeparator({
  className = "",
}: SectionSeparatorProps) {
  return (
    <div
      className={className}
      style={{
        background: "#ece9d8",
        padding: "0 16px",
        display: "flex",
        alignItems: "center",
        height: 24,
      }}
    >
      {/* Win2K horizontal rule: two lines */}
      <div style={{ flex: 1, borderTop: "1px solid #808080", borderBottom: "1px solid #ffffff" }} />
    </div>
  );
}
