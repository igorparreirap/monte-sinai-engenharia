import { services } from "@/data/services";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-titulo" className="bg-white py-24">
      <div className="container">
        <SectionHeading id="servicos-titulo" eyebrow="Área de atuação" title="Nossos serviços" />
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="group rounded-xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-brand-navy/5 transition-colors group-hover:bg-brand-orange/15">
                <Icon className="h-7 w-7 text-brand-orange" aria-hidden="true" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold text-ink">{title}</h3>
              <p className="font-body leading-relaxed text-muted">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
