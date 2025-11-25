import { siteConfig } from "@/lib/siteConfig";

export default function WhyUsSection() {
  return (
    <div className="container-page">
      <div className="section-card px-6 py-8 md:px-10 md:py-10">
        <div className="section-title mb-8">
          <h2>¿Por qué elegir AudioMédica?</h2>
          <p>
            Combinamos experiencia clínica, tecnología actual y un trato humano
            para que cada paciente y cada profesional se sienta acompañado.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {siteConfig.highlights.map((item) => (
            <div key={item} className="space-y-3">
              <div className="h-9 w-9 rounded-2xl bg-brand-primary/10 flex items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-brand-primary" />
              </div>
              <p className="text-sm md:text-base text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
