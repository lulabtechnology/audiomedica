"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

export default function ContactSection() {
  const { contact } = siteConfig;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const whatsappBaseUrl = `https://wa.me/${contact.whatsappNumber}`;
  const whatsappDefaultMessage = contact.whatsappMessage;

  const whatsappUrlSimple = `${whatsappBaseUrl}?text=${encodeURIComponent(
    whatsappDefaultMessage
  )}`;

  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=Av+Balboa+con+Av+Italia,+PH+Plaza+Comercial+Paitilla,+Piso+2,+Ofic.+78,+Paitilla,+San+Francisco,+Ciudad+de+Panama";

  const handleSendToWhatsApp = () => {
    const lines = [
      whatsappDefaultMessage,
      "",
      "Datos enviados desde el formulario web:",
      `Nombre: ${name || "No indicado"}`,
      `Teléfono/WhatsApp: ${phone || "No indicado"}`,
      `Comentario: ${userMessage || "No indicado"}`
    ];

    const fullMessage = lines.join("\n");

    const url =
      whatsappBaseUrl + "?text=" + encodeURIComponent(fullMessage);

    window.open(url, "_blank");
  };

  return (
    <div className="container-page">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-stretch">
        {/* Tarjeta contacto */}
        <div className="section-card p-6 md:p-8 space-y-5">
          <div className="section-title mb-3">
            <h2>Agenda tu cita o pide información</h2>
            <p>
              Escríbenos por WhatsApp, llámanos o envíanos un correo. Con gusto
              te ayudamos a encontrar la mejor solución para tu audición o tu
              consultorio.
            </p>
          </div>

          <div className="space-y-4 text-sm md:text-base text-slate-700">
            <div>
              <p className="font-semibold text-brand-primary">WhatsApp</p>
              <a
                href={whatsappUrlSimple}
                target="_blank"
                rel="noreferrer"
                className="text-brand-primary underline underline-offset-4"
              >
                Enviar mensaje
              </a>
            </div>

            <div>
              <p className="font-semibold text-brand-primary">Teléfono</p>
              <p>{contact.phoneDisplay}</p>
            </div>

            <div>
              <p className="font-semibold text-brand-primary">Correo</p>
              <a
                href={`mailto:${contact.email}`}
                className="text-slate-700 underline underline-offset-4"
              >
                {contact.email}
              </a>
            </div>

            <div>
              <p className="font-semibold text-brand-primary">Dirección</p>
              <p>{contact.address}</p>
            </div>

            <div>
              <p className="font-semibold text-brand-primary">Horarios</p>
              <p>Lunes a viernes: 8:00 a.m. – 5:00 p.m.</p>
              <p>Sábados: 8:00 a.m. – 12:00 m.d.</p>
            </div>
          </div>

          <div className="pt-3 flex flex-wrap gap-3">
            <a
              href={whatsappUrlSimple}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Agendar por WhatsApp
            </a>
            <a
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              Ver ubicación en mapa
            </a>
          </div>
        </div>

        {/* Tarjeta formulario CONECTADA A WHATSAPP */}
        <div className="section-card p-6 md:p-7 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-primary">
              Déjanos tus datos
            </h3>
            <p className="text-sm text-slate-600">
              Completa el formulario y enviaremos la información directamente a
              nuestro WhatsApp para continuar la atención.
            </p>
          </div>

          <form
            className="mt-4 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-600">
                Nombre completo
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/40"
                placeholder="Ej. Ana Pérez"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-600">
                Teléfono o WhatsApp
              </label>
              <input
                type="tel"
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/40"
                placeholder="Ej. +507 6XX-XXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-600">
                ¿En qué podemos ayudarte?
              </label>
              <textarea
                rows={3}
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/40 resize-none"
                placeholder="Ej. Quiero una evaluación auditiva / Estoy interesado en audífonos / Cabina para consultorio..."
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
              />
            </div>

            <button
              type="button"
              onClick={handleSendToWhatsApp}
              className="btn-primary w-full justify-center text-sm"
            >
              Enviar (ejemplo visual)
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
