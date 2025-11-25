import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/80 mt-10">
      <div className="container-page py-5 md:py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
          reservados.
        </p>
        <p className="text-[11px] md:text-xs">
          Centro de salud auditiva · Ciudad de Panamá, República de Panamá.
        </p>
      </div>
    </footer>
  );
}
