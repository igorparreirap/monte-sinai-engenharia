import { company } from "@/data/company";

export function LocationMap() {
  return (
    <section aria-label="Localização no mapa" className="h-96 w-full bg-surface">
      <iframe
        src={company.mapEmbedUrl}
        title={`Mapa com a localização da ${company.name} em ${company.address.city} – ${company.address.state}`}
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </section>
  );
}
