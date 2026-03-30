import type { Metadata } from "next";
import { Amiri, Cinzel, Playfair_Display } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "EL7EL — Hackathon | يد وحدة ما تسفق",
  description:
    "EL7EL hackathon hybride innovant co-organisé par Nexus Club et ESTIN Cloud Hub. BUILD & GO-TO MARKET — 23 Avril 2025.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      style={
        {
          "--amiri": amiri.style.fontFamily,
          "--cinzel": cinzel.style.fontFamily,
          "--playfair": playfair.style.fontFamily,
        } as React.CSSProperties
      }
    >
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
