import { socialLinks } from "@/data/company";
import { SocialIcon } from "./icons/SocialIcon";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {socialLinks.map((link) => (
        <li key={link.network}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${link.label} da Monte Sinai (abre em nova aba)`}
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-brand-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
          >
            <SocialIcon network={link.network} className="h-5 w-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
