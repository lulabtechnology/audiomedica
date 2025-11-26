import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="container-page flex flex-col items-center gap-3 py-3 md:py-4">
        {/* Logo + nombre centrado y más grande */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative h-10 w-10 md:h-14 md:w-14">
            <Image
              src="/images/logo-audiomedica.png"
              alt="Logo AudioMédica"
              fill
              sizes="56px"
              className="object-contain"
            />
          </div>
          <div className="text-center leading-tight">
            <span className="block text-lg md:text-2xl font-semibold text-brand-primary">
              {siteConfig.name}
            </span>
            <span className="block text-xs md:text-sm text-slate-500">
              Salud auditiva & equipos médicos
            </span>
          </div>
        </div>

        {/* Menú simple, sin botón de WhatsApp */}
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
