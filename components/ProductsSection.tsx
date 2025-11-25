export default function ProductsSection() {
  return (
    <div className="container-page">
      <div className="section-title mb-10 md:mb-12">
        <h2>Equipos para profesionales</h2>
        <p>
          AudioMédica también es un aliado para clínicas, hospitales y
          profesionales de la salud auditiva y visual, ofreciendo soluciones
          confiables y soporte cercano.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="section-card p-5 md:p-6 flex flex-col gap-3">
          <h3 className="text-base md:text-lg font-semibold text-brand-primary">
            Equipos de diagnóstico auditivo
          </h3>
          <p className="text-sm text-slate-600">
            Audiometría clínica, impedanciometría, otoemisiones acústicas y
            otros equipos diagnósticos para una práctica moderna.
          </p>
          <ul className="mt-1 space-y-1 text-sm text-slate-600">
            <li>• Audiometros clínicos y portátiles</li>
            <li>• Impedanciómetros</li>
            <li>• Equipos para tamizaje auditivo</li>
          </ul>
        </div>

        <div className="section-card p-5 md:p-6 flex flex-col gap-3">
          <h3 className="text-base md:text-lg font-semibold text-brand-primary">
            Equipos para salud visual
          </h3>
          <p className="text-sm text-slate-600">
            Equipos seleccionados para complementar tu práctica en salud
            auditiva y visual.
          </p>
          <ul className="mt-1 space-y-1 text-sm text-slate-600">
            <li>• Oftalmoscopios y retinoscopios</li>
            <li>• Lámparas, lupas y accesorios</li>
            <li>• Soporte en selección y puesta en marcha</li>
          </ul>
        </div>

        <div className="section-card p-5 md:p-6 flex flex-col gap-3">
          <h3 className="text-base md:text-lg font-semibold text-brand-primary">
            Cabinas audiométricas
          </h3>
          <p className="text-sm text-slate-600">
            Cabinas insonorizadas para realizar estudios auditivos con la mejor
            calidad de sonido y confort para tus pacientes.
          </p>
          <ul className="mt-1 space-y-1 text-sm text-slate-600">
            <li>• Diseño y dimensiones adaptadas a tu espacio</li>
            <li>• Instalación profesional</li>
            <li>• Asesoría en mantenimiento y uso</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
