// components/Hero.tsx
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

export default function Hero() {
  const { contact } = siteConfig;

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-200/60"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-light via-white to-slate-100" />
      <div className="container-page grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-20 lg:py-24">
        {/* Texto principal */}
        <div className="space-y-6 md:space-y-7">
          <span className="chip-soft">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            Cuidamos tu audición y tu práctica médica
          </span>

          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-dark">
              Escucha la vida con{" "}
              <span className="text-brand-primary">claridad</span>.
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-xl">
              Somos una empresa de salud auditiva dedicada a la venta y
              adaptación de audífonos para personas con discapacidad auditiva,
              y a la venta de equipos médicos para profesionales de la salud
              auditiva y visual.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <a
              href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
                contact.whatsappMessage
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Agenda tu cita por WhatsApp
            </a>
            <a href="#servicios" className="btn-outline">
              Ver servicios
            </a>
          </div>

          <div className="flex flex-wrap gap-6 pt-3 text-xs md:text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Evaluaciones auditivas completas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Audífonos modernos y discretos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Equipos y cabinas para profesionales</span>
            </div>
          </div>
        </div>

        {/* Tarjeta con imagen + info */}
        <div className="relative">
          <div className="section-card overflow-hidden bg-white/95">
            <div className="relative h-64 w-full md:h-80">
              <Image
                src="/images/hero-consulta-auditiva.jpg"
                alt="Profesional realizando evaluación auditiva a paciente"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 480px, 100vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 via-slate-900/0 to-transparent" />
            </div>
            <div className="p-5 md:p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-primary/80">
                CENTRO DE SALUD AUDITIVA · PANAMÁ
              </p>
              <h2 className="text-lg md:text-xl font-semibold text-slate-900">
                Evaluaciones, audífonos y soluciones para tu audición en un solo
                lugar.
              </h2>
              <div className="flex flex-wrap gap-4 text-xs text-slate-600">
                <div className="max-w-xs">
                  <p className="font-semibold text-brand-primary">Dirección</p>
                  <p>{contact.address}</p>
                </div>
                <div>
                  <p className="font-semibold text-brand-primary">Teléfono</p>
                  <p>{contact.phoneDisplay}</p>
                  <p className="truncate">{contact.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* ➜ Badge de “Citas por WhatsApp” eliminado */}
        </div>
      </div>
    </section>
  );
}
