// components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="container-page flex flex-col items-center gap-3 py-3 md:py-4">
        {/* LOGO SOLO, AÚN MÁS GRANDE (≈40% MÁS QUE EL ANTERIOR) */}
        <div className="flex flex-col items-center">
          <div className="relative h-48 w-48 md:h-64 md:w-64 lg:h-72 lg:w-72">
            <Image
              src="/images/logo-audiomedica.png"
              alt="AudioMédica - Salud auditiva y equipos médicos"
              fill
              sizes="(min-width: 1024px) 288px, (min-width: 768px) 256px, 192px"
              className="object-contain"
            />
          </div>
          <span className="sr-only">
            {siteConfig.name} · Salud auditiva y equipos médicos
          </span>
        </div>

        {/* Menú */}
        <nav className="flex flex-wrap justify-center gap-5 text-xs md:text-sm font-medium text-slate-700">
          <Link href="#servicios" className="hover:text-brand-primary">
            Servicios
          </Link>
          <Link href="#equipos" className="hover:text-brand-primary">
            Equipos
          </Link>
          <Link href="#nosotros" className="hover:text-brand-primary">
            Nosotros
          </Link>
          <Link href="#proceso" className="hover:text-brand-primary">
            Proceso
          </Link>
          <Link href="#chequeo" className="hover:text-brand-primary">
            Chequea tu audición
          </Link>
          <Link href="#info-importante" className="hover:text-brand-primary">
            Información importante
          </Link>
          <Link href="#contacto" className="hover:text-brand-primary">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
