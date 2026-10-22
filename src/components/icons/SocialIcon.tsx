import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import type { SocialNetwork } from "@/data/company";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface SocialIconProps {
  network: SocialNetwork;
  className?: string;
}

export function SocialIcon({ network, className }: SocialIconProps) {
  switch (network) {
    case "facebook":
      return <Facebook className={className} aria-hidden="true" />;
    case "instagram":
      return <Instagram className={className} aria-hidden="true" />;
    case "linkedin":
      return <Linkedin className={className} aria-hidden="true" />;
    case "youtube":
      return <Youtube className={className} aria-hidden="true" />;
    case "whatsapp":
      return <WhatsAppIcon className={className} />;
  }
}
