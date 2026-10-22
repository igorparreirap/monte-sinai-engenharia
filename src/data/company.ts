/**
 * Fonte única dos dados institucionais exibidos no site.
 * Para atualizar telefone, endereço ou redes sociais, altere somente aqui.
 */

const FOUNDING_YEAR = 2013;

const WHATSAPP_GREETING = "Olá! Vim pelo site da Monte Sinai e gostaria de mais informações.";

/** Monta o link do WhatsApp a partir do número com DDI e DDD (somente dígitos). */
function whatsappLink(number: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(WHATSAPP_GREETING)}`;
}

export interface WhatsAppContact {
  name: string;
  display: string;
  href: string;
}

/**
 * Contatos de WhatsApp. O primeiro ("Contato") é o número oficial da empresa,
 * usado também no botão flutuante e nas redes sociais.
 */
export const whatsappContacts: readonly WhatsAppContact[] = [
  { name: "Contato", display: "(62) 9 9637-3177", href: whatsappLink("5562996373177") },
  { name: "Fabiano", display: "(62) 9 8429-3564", href: whatsappLink("5562984293564") },
  { name: "Joel", display: "(62) 9 9698-0943", href: whatsappLink("5562996980943") },
  { name: "Alberto", display: "(62) 9 8247-2147", href: whatsappLink("5562982472147") },
];

export const company = {
  name: "Monte Sinai Engenharia e Construções",
  legalName: "Monte Sinai Engenharia e Construções LTDA",
  shortName: "Monte Sinai",
  cnpj: "18.671.108/0001-71",
  foundingYear: FOUNDING_YEAR,
  yearsOfExperience: new Date().getFullYear() - FOUNDING_YEAR,
  tagline: "Soluções completas em engenharia elétrica com qualidade e compromisso.",
  email: "contato@montesinaieng.com.br",
  whatsapp: whatsappContacts[0],
  address: {
    street: "Praça da Matriz, Qd. 11, Lt. 20",
    city: "Itaberaí",
    state: "GO",
    zip: "76630-000",
  },
  businessHours: "Segunda a sexta, das 8h às 18h",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.367168541456!2d-49.811689425268035!3d-16.019732228543283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935d910f40fb690b%3A0xb9b759c2f09a8f56!2sMonte%20Sinai%20Engenharia!5e1!3m2!1spt-BR!2sbr!4v1754769352829!5m2!1spt-BR!2sbr",
} as const;

export type SocialNetwork = "facebook" | "instagram" | "linkedin" | "youtube" | "whatsapp";

export const socialLinks: ReadonlyArray<{ network: SocialNetwork; label: string; href: string }> = [
  {
    network: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61577898127199",
  },
  {
    network: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/montesinaiengenharia/",
  },
  {
    network: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/monte-sinai-engenharia/",
  },
  {
    network: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCYmh-xkL9cNbzepjWz9gS-w",
  },
  { network: "whatsapp", label: "WhatsApp", href: company.whatsapp.href },
];

export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
] as const;

export const stats = [
  { value: "+150", label: "Projetos concluídos" },
  { value: `${company.yearsOfExperience}+`, label: "Anos de experiência" },
  { value: "100%", label: "Clientes satisfeitos" },
] as const;
