export default function ImportantInfoSection() {
  const localReportUrl = "/docs/informe-oms-salud-auditiva.pdf";
  const whoUrl =
    "https://www.who.int/publications/i/item/world-report-on-hearing";

  return (
    <div className="container-page">
      <div className="section-card px-6 py-8 md:px-10 md:py-10 space-y-6">
        <div className="section-title mb-3">
          <h2>Información importante</h2>
          <p>
            La pérdida auditiva es un tema de salud global. Compartimos
            información clave para que puedas dimensionar la importancia de
            cuidar tu audición a tiempo.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-4 text-sm md:text-base text-slate-700">
            <h3 className="font-semibold text-brand-primary">
              Informe de la Organización Mundial de la Salud (OMS)
            </h3>
            <p>
              La OMS ha publicado un informe detallado sobre la salud auditiva a
              nivel mundial, donde se destacan las consecuencias de no tratar la
              pérdida auditiva y los beneficios de la detección y atención
              temprana.
            </p>
            <p className="text-sm text-slate-600">
              Puedes consultar el documento completo para conocer datos,
              estadísticas y recomendaciones oficiales sobre prevención,
              diagnóstico y tratamiento.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href={localReportUrl} className="btn-outline">
                Ver informe OMS (PDF)
              </a>
              <a
                href={whoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                Ver publicación en sitio de la OMS
              </a>
            </div>

            <p className="text-[11px] text-slate-500">
              *Para que el botón de PDF funcione, sube el archivo a{" "}
              <code>/public/docs/informe-oms-salud-auditiva.pdf</code> en tu
              proyecto.
            </p>
          </div>

          <div className="rounded-3xl bg-brand-primary/5 p-5 md:p-6 text-xs md:text-sm text-slate-700">
            <p className="font-semibold text-brand-primary mb-2">
              ¿Por qué es importante revisar tu audición?
            </p>
            <ul className="space-y-2">
              <li>• La pérdida auditiva puede afectar la comunicación diaria.</li>
              <li>• Un diagnóstico temprano facilita mejores resultados.</li>
              <li>• Existen soluciones modernas y discretas para cada caso.</li>
              <li>
                • Cuidar tu audición también protege tu bienestar emocional y
                social.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
