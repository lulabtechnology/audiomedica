export default function ProcessSection() {
  const steps = [
    {
      title: "1. Evaluación auditiva",
      text: "Realizamos una audiometría e impedanciometría para conocer tu perfil auditivo."
    },
    {
      title: "2. Asesoría personalizada",
      text: "Te explicamos de forma clara tus resultados y las opciones de audífonos o protección."
    },
    {
      title: "3. Prueba de audífonos GRATIS",
      text: "Prueba los audífonos adaptados a tu necesidad auditiva antes de tomar una decisión."
    },
    {
      title: "4. Adaptación y seguimiento",
      text: "Ajustamos los audífonos, te enseñamos a usarlos y damos seguimiento para tu comodidad."
    }
  ];

  return (
    <div className="container-page">
      <div className="section-title mb-10 md:mb-12">
        <h2>Así te acompañamos paso a paso</h2>
        <p>
          Queremos que recuperes la confianza al escuchar: nuestro proceso es
          claro, cercano y pensado para tu día a día.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {steps.map((step) => (
          <div key={step.title} className="section-card p-5 md:p-6 space-y-3">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-accent">
              {step.title}
            </p>
            <p className="text-sm md:text-base text-slate-700">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
