interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  id?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}

export function SectionHeading({
  eyebrow,
  title,
  id,
  align = "center",
  tone = "dark",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={centered ? "mb-14 text-center" : "mb-8"}>
      <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`font-heading text-3xl font-extrabold md:text-4xl ${tone === "light" ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-brand-orange to-brand-lime ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}
