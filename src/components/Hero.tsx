import heroLarge from "@/assets/images/obra-iluminacao-publica-1920.webp";
import heroSmall from "@/assets/images/obra-iluminacao-publica-960.webp";
import { company } from "@/data/company";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-20"
    >
      <img
        src={heroLarge}
        srcSet={`${heroSmall} 960w, ${heroLarge} 1920w`}
        sizes="100vw"
        alt=""
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-dark/95 via-brand-navy/85 to-brand-teal/70" />

      <div className="container relative z-10 py-20 text-center">
        <p className="mb-6 animate-fade-in-up font-heading text-sm font-semibold uppercase tracking-[0.3em] text-brand-orange md:text-base">
          Engenharia elétrica &amp; construções
        </p>
        <h1
          id="hero-title"
          className="mx-auto max-w-4xl animate-fade-in-up font-heading text-4xl font-black leading-tight text-white [animation-delay:150ms] md:text-6xl lg:text-7xl"
        >
          Soluções em{" "}
          <span className="bg-gradient-to-r from-brand-orange to-brand-lime bg-clip-text text-transparent">
            engenharia elétrica
          </span>
        </h1>
        <p className="mx-auto mb-10 mt-6 max-w-2xl animate-fade-in-up font-body text-lg text-white/80 [animation-delay:300ms] md:text-xl">
          Mais de {company.yearsOfExperience} anos transformando energia em soluções de excelência,
          com tecnologia, segurança e qualidade.
        </p>
        <div className="flex animate-fade-in-up flex-col justify-center gap-4 [animation-delay:450ms] sm:flex-row">
          <a
            href="#servicos"
            className="rounded-md bg-brand-orange px-8 py-4 font-heading font-bold text-brand-navy-dark shadow-lg transition hover:brightness-110"
          >
            Nossos serviços
          </a>
          <a
            href="#contato"
            className="rounded-md border-2 border-white/40 px-8 py-4 font-heading font-semibold text-white transition hover:bg-white/10"
          >
            Fale conosco
          </a>
        </div>
      </div>
    </section>
  );
}
