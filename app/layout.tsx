import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Salud auditiva y equipos médicos en Panamá`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | Salud auditiva y equipos médicos en Panamá`,
    description: siteConfig.description,
    url: "https://www.audiomedica.com.pa",
    siteName: siteConfig.name,
    locale: "es_PA",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="page-gradient min-h-screen text-slate-900">
        {children}
      </body>
    </html>
  );
}
