import {
  Bolt,
  Leaf,
  Network,
  PlugZap,
  ShieldCheck,
  SunMedium,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Bolt,
    title: "Projetos e Instalações Elétricas",
    description:
      "Projetos elétricos em alta e baixa tensão (urbana, rural, industrial, comercial e residencial), incluindo sistemas de detecção de incêndio, telefonia, lógica, energia estabilizada e cabeamento estruturado.",
  },
  {
    icon: Network,
    title: "Redes de Distribuição e Transmissão",
    description:
      "Construção e manutenção preventiva e corretiva de redes aéreas, subterrâneas e linhas de transmissão até 69 kV, incluindo operação com linha viva.",
  },
  {
    icon: PlugZap,
    title: "Subestações e Grupos Geradores",
    description:
      "Montagem eletromecânica de subestações transformadoras, cubículos de medição e proteção, grupos geradores e quadros de transferência automática (QTA).",
  },
  {
    icon: SunMedium,
    title: "Iluminação Pública e Energia Solar",
    description:
      "Projetos e execução de obras de iluminação pública em vias urbanas e áreas esportivas, além da montagem de sistemas fotovoltaicos para geração de energia solar.",
  },
  {
    icon: ShieldCheck,
    title: "Proteção e Segurança Elétrica",
    description:
      "Instalação de sistemas de proteção contra descargas atmosféricas, correção do fator de potência e alarmes de segurança.",
  },
  {
    icon: Leaf,
    title: "Licenciamento e Estudos Ambientais",
    description:
      "Elaboração de licenciamento ambiental, estudos ambientais, saneamento hidrossanitário e programas de recuperação de áreas degradadas (PRAD).",
  },
];
