import type { ReactNode } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";
import { ContactForm } from "./ContactForm";
import { SectionHeading } from "./SectionHeading";
import { SocialLinks } from "./SocialLinks";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

interface InfoItemProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

function InfoItem({ icon, title, children }: InfoItemProps) {
  return (
    <li className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10 text-brand-orange">
        {icon}
      </div>
      <div>
        <p className="font-heading font-semibold text-white">{title}</p>
        <div className="font-body text-white/75">{children}</div>
      </div>
    </li>
  );
}

const linkClass = "underline-offset-4 transition-colors hover:text-brand-orange hover:underline";

export function Contact() {
  const { address } = company;
  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-teal py-24"
    >
      <div className="container">
        <SectionHeading
          id="contato-titulo"
          eyebrow="Fale conosco"
          title="Entre em contato"
          tone="light"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <p className="font-body text-lg leading-relaxed text-white/80">
              Solicite um orçamento sem compromisso. Nossa equipe está pronta para atender você e
              oferecer as melhores soluções em engenharia elétrica.
            </p>

            <ul className="space-y-6">
              <InfoItem icon={<MapPin className="h-5 w-5" aria-hidden="true" />} title="Endereço">
                <address className="not-italic">
                  {address.street}
                  <br />
                  {address.city} – {address.state}, {address.zip}
                </address>
              </InfoItem>
              <InfoItem icon={<Phone className="h-5 w-5" aria-hidden="true" />} title="Telefone">
                <a href={company.phone.href} className={linkClass}>
                  {company.phone.display}
                </a>
              </InfoItem>
              <InfoItem icon={<WhatsAppIcon className="h-5 w-5" />} title="WhatsApp">
                <a
                  href={company.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {company.whatsapp.display}
                </a>
              </InfoItem>
              <InfoItem icon={<Mail className="h-5 w-5" aria-hidden="true" />} title="E-mail">
                <a href={`mailto:${company.email}`} className={linkClass}>
                  {company.email}
                </a>
              </InfoItem>
              <InfoItem
                icon={<Clock className="h-5 w-5" aria-hidden="true" />}
                title="Horário de atendimento"
              >
                {company.businessHours}
              </InfoItem>
            </ul>

            <div>
              <p className="mb-4 font-heading font-semibold text-white">Redes sociais</p>
              <SocialLinks />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
