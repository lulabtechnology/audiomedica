export default function HearingTestSection() {
  const testUrl = "https://www.sonici.com/hearing-test";

  return (
    <div className="container-page">
      <div className="section-card px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-primary">
            Chequea tu audición en línea
          </h2>
          <p className="text-sm md:text-base text-slate-600">
            Si tienes dudas sobre cómo estás escuchando, puedes realizar una
            prueba auditiva básica en línea. No reemplaza una evaluación
            profesional, pero es un buen primer paso para orientarte.
          </p>
          <p className="text-xs md:text-sm text-slate-500">
            Después de hacer la prueba, si los resultados indican alguna
            dificultad, con gusto podemos realizar una evaluación completa en
            nuestro centro.
          </p>

          <div className="pt-2">
            <a
              href={testUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Hacer prueba de audición en línea
            </a>
          </div>
        </div>

        <div className="flex-1">
          <div className="rounded-3xl border border-dashed border-brand-primary/40 bg-brand-primary/5 p-5 md:p-6 text-sm text-slate-600">
            <p className="font-semibold text-brand-primary mb-2">
              Importante
            </p>
            <p>
              El resultado de la prueba en línea es solo orientativo. Para un
              diagnóstico confiable y la adaptación de audífonos, siempre es
              necesario una evaluación presencial con nuestros profesionales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
