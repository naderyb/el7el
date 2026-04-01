import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EL7EL - Hackathon | يد وحدة ما تسفق",
  description:
    "EL7EL hackathon hybride innovant co-organisé par Nexus Club et ESTIN Cloud Hub. BUILD & GO-TO MARKET - 23 Avril 2026.",
  themeColor: "#3a6ea5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
