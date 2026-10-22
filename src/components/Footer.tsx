import logo from "@/assets/images/logo-monte-sinai.png";
import { company, navItems } from "@/data/company";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-navy-dark py-14 text-white">
      <div className="container grid gap-10 md:grid-cols-3">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <img
              src={logo}
              alt=""
              width={48}
              height={42}
              loading="lazy"
              className="h-11 w-auto rounded-md bg-white p-1"
            />
            <p className="font-heading text-lg font-bold leading-tight">{company.name}</p>
          </div>
          <p className="font-body text-sm text-white/70">{company.tagline}</p>
          <p className="mt-2 font-body text-sm text-white/50">CNPJ {company.cnpj}</p>
        </div>

        <nav aria-label="Rodapé">
          <p className="mb-4 font-heading font-semibold">Links rápidos</p>
          <ul className="space-y-2 font-body text-sm text-white/70">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-brand-orange">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 font-heading font-semibold">Redes sociais</p>
          <SocialLinks />
          <p className="mt-6 font-body text-sm text-white/70">{company.businessHours}</p>
        </div>
      </div>

      <div className="container mt-10 border-t border-white/10 pt-6">
        <p className="text-center font-body text-sm text-white/50">
          © {year} {company.legalName}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
