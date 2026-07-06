const items = [
  "Cemento",
  "Varilla y acero",
  "Bloque",
  "Láminas",
  "Techado",
  "Canales",
  "Estructuras metálicas",
  "Eléctrico y plomería",
  "Herramientas",
];

/** Cinta continua de líneas de producto. */
export default function Marquee() {
  return (
    <div className="marquee overflow-hidden bg-ink py-3.5 text-paper">
      <div className="marquee-track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {items.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="flex items-center gap-6 pr-6 font-[family-name:var(--font-display)] text-lg font-semibold tracking-wide"
              >
                {item}
                <span className="text-brand" aria-hidden="true">
                  ✚
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
      <p className="sr-only">{items.join(", ")}</p>
    </div>
  );
}
