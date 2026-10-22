import { company } from "@/data/company";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

export function WhatsAppButton() {
  return (
    <a
      href={company.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp (abre em nova aba)"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition hover:scale-105 hover:bg-[#1ebe5b]"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
