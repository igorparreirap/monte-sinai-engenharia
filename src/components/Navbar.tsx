import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/images/logo-monte-sinai.png";
import { company, navItems } from "@/data/company";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-navy/95 backdrop-blur-md">
      <nav aria-label="Principal" className="container flex h-20 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={logo}
            alt=""
            width={56}
            height={49}
            className="h-12 w-auto rounded-md bg-white p-1"
          />
          <span className="leading-tight">
            <span className="block font-heading text-lg font-bold text-white">
              {company.shortName}
            </span>
            <span className="block font-body text-xs uppercase tracking-wider text-white/70">
              Engenharia e Construções
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-heading text-sm font-medium uppercase tracking-wide text-white/80 transition-colors hover:text-brand-orange"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contato"
              className="rounded-md bg-brand-orange px-6 py-2.5 font-heading text-sm font-semibold text-brand-navy-dark transition hover:brightness-110"
            >
              Orçamento
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="text-white md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div id="menu-mobile" className="border-t border-white/10 bg-brand-navy md:hidden">
          <ul className="container flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-heading text-sm font-medium uppercase text-white/80 hover:text-brand-orange"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="inline-block rounded-md bg-brand-orange px-6 py-2.5 font-heading text-sm font-semibold text-brand-navy-dark"
              >
                Solicitar orçamento
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
