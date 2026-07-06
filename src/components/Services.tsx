import Reveal from "./Reveal";

const services = [
  {
    title: "Entrega a obra",
    text: "Camiones propios para despachar cemento, bloque y agregados directo a su proyecto. Pedidos antes del mediodía salen el mismo día.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M2 7h11v9H2zM13 10h4l3 3v3h-7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="6.5" cy="18" r="1.8" stroke="currentColor" strokeWidth="2" />
        <circle cx="16.5" cy="18" r="1.8" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Cotizaciones por lista",
    text: "Envíenos su lista de materiales por WhatsApp y le devolvemos la cotización completa, con precios por volumen, el mismo día.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M9 8h6M9 12h6M9 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Techado y estructuras",
    text: "Fabricación e instalación de canales, techos y estructuras metálicas: mezzanines, marcos y cubiertas para casas, bodegas y comercios.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 11l9-7 9 7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M5 10v10h14V10" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Atención a contratistas",
    text: "Condiciones especiales para maestros de obra y constructoras: precios por proyecto, apartado de material y despacho programado.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 20c0-3 3.5-4.5 8-4.5s8 1.5 8 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M7.5 8a4.5 4.5 0 109 0c0-1-.2-1.7-.5-2.3-2 1.3-5.5 1.3-8 0-.3.6-.5 1.3-.5 2.3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios" className="scroll-mt-24 bg-concrete py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Cómo trabajamos</p>
            <h2 className="display mt-2 text-4xl sm:text-5xl">
              Menos vueltas, más avance de obra
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <article className="card-pop relative h-full p-6 pt-10">
                <span className="absolute -top-6 left-6 grid size-12 place-items-center rounded-full bg-brand-50 text-brand shadow-sm">
                  {s.icon}
                </span>
                <h3 className="display text-2xl">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-700">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
