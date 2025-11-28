// components/ServicesSection.tsx
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

export default function ServicesSection() {
  const { services } = siteConfig;

  return (
    <div className="container-page">
      <div className="section-title mb-10 md:mb-12">
        <h2>Servicios de salud auditiva</h2>
        <p>
          Evaluaciones completas, adaptación de audífonos, protectores
          personalizados y soluciones de conducción ósea para cuidar tu
          audición.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.id}
            className="section-card flex flex-col overflow-hidden"
          >
            <div className="relative w-full aspect-[4/3] bg-slate-50 flex items-center justify-center">
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-contain p-3"
                sizes="(min-width: 1024px) 260px, (min-width: 768px) 50vw, 100vw"
              />
            </div>

            <div className="flex flex-1 flex-col gap-2 p-5 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-brand-primary">
                {service.name}
              </h3>
              <p className="text-sm text-slate-600 flex-1">
                {service.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
