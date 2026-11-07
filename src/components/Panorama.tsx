import panoramaLarge from "@/assets/images/panorama-obra-2048.webp";
import panoramaSmall from "@/assets/images/panorama-obra-1024.webp";

export function Panorama() {
  return (
    <figure className="relative w-full overflow-hidden bg-brand-navy-dark">
      <img
        src={panoramaLarge}
        srcSet={`${panoramaSmall} 1024w, ${panoramaLarge} 2048w`}
        sizes="100vw"
        alt="Vista panorâmica de loteamento com postes de iluminação pública instalados"
        width={2048}
        height={286}
        loading="lazy"
        decoding="async"
        className="h-44 w-full object-cover sm:h-auto"
      />
    </figure>
  );
}
