import { CheckCircle2 } from "lucide-react";
import teamPhoto from "@/assets/images/equipe-instalacao-eletrica.webp";
import { company, stats } from "@/data/company";
import { SectionHeading } from "./SectionHeading";

const highlights = [
  "Engenheiros eletricistas e técnicos especializados",
  "Projetos em conformidade com as normas técnicas",
  "Atendimento em todo o território nacional",
  "Soluções personalizadas e sustentáveis",
];

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="bg-surface py-24">
      <div className="container grid items-center gap-16 lg:grid-cols-2">
        <div className="relative">
          <img
            src={teamPhoto}
            alt="Equipe da Monte Sinai realizando serviço em rede elétrica com caminhão equipado com cesto aéreo"
            width={1200}
            height={675}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
          />
          <div className="absolute -bottom-6 -right-4 hidden rounded-xl bg-brand-orange px-8 py-5 text-brand-navy-dark shadow-lg md:block">
            <p className="font-heading text-3xl font-black">desde {company.foundingYear}</p>
            <p className="font-body text-sm font-semibold">no mercado de engenharia elétrica</p>
          </div>
        </div>

        <div>
          <SectionHeading
            id="sobre-titulo"
            eyebrow="Quem somos"
            title="Sobre a Monte Sinai Engenharia"
            align="left"
          />
          <div className="space-y-4 font-body text-lg leading-relaxed text-muted">
            <p>
              Fundada em {company.foundingYear}, a{" "}
              <strong className="text-ink">{company.legalName}</strong> se destaca no mercado de
              engenharia elétrica, oferecendo soluções completas com tecnologia, segurança e
              qualidade.
            </p>
            <p>
              Nossa equipe é formada por engenheiros eletricistas qualificados e técnicos
              especializados, atuando em projetos de instalações elétricas, automação, geração de
              energia e eficiência energética, sempre com foco em inovação e conformidade com as
              normas técnicas.
            </p>
            <p>
              Atendemos clientes em todo o território nacional, desenvolvendo soluções
              personalizadas e sustentáveis para cada necessidade, garantindo desempenho,
              confiabilidade e economia em cada projeto executado.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 font-body font-medium text-ink">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>

          <dl className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse rounded-xl border border-line bg-white p-4 text-center shadow-sm"
              >
                <dt className="font-body text-sm text-muted">{stat.label}</dt>
                <dd className="font-heading text-2xl font-extrabold text-brand-navy md:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
