import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

export default function Navbar() {
  const { contact } = siteConfig;

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="container-page flex items-center justify-between py-3 md:py-4">
        <Link href="#top" className="flex items-center gap-2">
          <div className="relative h-9 w-9 md:h-10 md:w-10">
            <Image
              src="/images/logo-audiomedica.png"
              alt="Logo AudioMédica"
              fill
              sizes="40px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm md:text-base font-semibold text-brand-primary">
              {siteConfig.shortName}
            </span>
            <span className="text-[11px] md:text-xs text-slate-500">
              Salud auditiva & equipos médicos
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
          <Link href="#servicios" className="hover:text-brand-primary">
            Servicios
          </Link>
          <Link href="#equipos" className="hover:text-brand-primary">
            Equipos
          </Link>
          <Link href="#nosotros" className="hover:text-brand-primary">
            Nosotros
          </Link>
          <Link href="#contacto" className="hover:text-brand-primary">
            Contacto
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${contact.phoneDisplay.replace(/[^0-9+]/g, "")}`}
            className="btn-outline text-xs"
          >
            Llamar
          </a>
          <a
            href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
              contact.whatsappMessage
            )}`}
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-xs"
          >
            Agenda por WhatsApp
          </a>
        </div>

        {/* Versión móvil: solo botón WhatsApp */}
        <div className="md:hidden">
          <a
            href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
              contact.whatsappMessage
            )}`}
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-xs px-4 py-2"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
