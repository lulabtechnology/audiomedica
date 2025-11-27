// components/ProductsSection.tsx
import Image from "next/image";

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  bullets?: string[];
};

const products: Product[] = [
  {
    id: "equipos-auditivos",
    name: "Equipos de diagnóstico auditivo",
    description:
      "Tecnología de última generación para realizar pruebas objetivas y precisas en la evaluación de la audición.",
    image: "/images/servicio-equipos-auditivos.jpg",
    bullets: [
      "Equipos para timpanometría e impedanciometría.",
      "Sistemas para tamizaje auditivo neonatal.",
      "Soluciones para clínicas, hospitales y consultorios."
    ]
  },
  {
    id: "equipos-visuales",
    name: "Equipos de diagnóstico visual",
    description:
      "Equipos especializados para complementar la atención en salud visual dentro de tu práctica clínica.",
    image: "/images/servicio-equipos-visuales.jpg",
    bullets: [
      "Equipos para medición y análisis de la superficie ocular.",
      "Diseñados para entornos clínicos y de optometría.",
      "Soporte en selección, instalación y puesta en marcha."
    ]
  },
  {
    id: "sistema-conduccion-osea",
    name: "Sistema de conducción ósea",
    description:
      "Solución auditiva de alta gama basada en conducción ósea, ideal para casos seleccionados donde se busca una alternativa a la cirugía.",
    image: "/images/servicio-sistema-conduccion-osea.jpg",
    bullets: [
      "Diadema ósea integrada: plena libertad de movimiento.",
      "Todo en uno en una sola carcasa, sin cableado externo.",
      "Resistente al agua y diseñada para uso diario.",
      "Ancho de banda con alta frecuencia de transmisión.",
      "La mejor alternativa a la cirugía en casos indicados.",
      "Conexión inalámbrica vía Bluetooth."
    ]
  }
];

export default function ProductsSection() {
  return (
    <div className="container-page">
      <div className="section-title mb-10 md:mb-12">
        <h2>Equipos y cabinas para profesionales</h2>
        <p>
          AudioMédica es tu aliado en la selección de equipos de diagnóstico
          auditivo y visual, cabinas audiométricas y soluciones de conducción
          ósea para tu consultorio o clínica.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.id}
            className="section-card flex flex-col overflow-hidden"
          >
            {/* Imagen SIN recortes, respetando tamaño */}
            <div className="relative w-full aspect-[4/3] bg-slate-50 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-3"
                sizes="(min-width: 1024px) 260px, (min-width: 768px) 33vw, 100vw"
              />
            </div>

            <div className="flex flex-1 flex-col gap-2 p-5 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-brand-primary">
                {product.name}
              </h3>
              <p className="text-sm text-slate-600">{product.description}</p>

              {product.bullets && (
                <ul className="mt-2 space-y-1 text-sm text-slate-600">
                  {product.bullets.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
