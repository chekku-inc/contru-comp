import Image from "next/image";
import { site, whatsappLink } from "@/config/site";
import RotatingWord from "./RotatingWord";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-concrete">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.05fr_1fr] md:py-24">
        {/* Texto */}
        <div>         
          <h1 className="hero-rise display mt-4 text-5xl [animation-delay:120ms] sm:text-6xl lg:text-7xl">
            Todo para su{" "}
            <RotatingWord
              words={["obra", "techo", "proyecto", "casa", "bodega"]}
            />
            <br />
            en un solo lugar.
          </h1>
          <p className="hero-rise mt-6 max-w-lg text-lg text-ink-700 [animation-delay:240ms]">
            Cemento, varilla, bloque, láminas y herramienta con precios de
            bodega — más techado, canales y estructuras metálicas. Despachamos
            a su obra en {site.address.city} y alrededores.
          </p>

          <div className="hero-rise mt-9 flex flex-wrap gap-4 [animation-delay:360ms]">
            <a
              href={whatsappLink("Hola, quiero cotizar materiales para mi obra.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-brand"
            >
              Cotizar por WhatsApp
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 12h16m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </a>
            <a href="#productos" className="btn btn-ghost">
              Ver productos
            </a>
          </div>

          <dl className="hero-rise mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6 [animation-delay:480ms]">
            {[
              ["Entrega", "a obra"],
              ["Precios", "de bodega"],
              ["Atención", "a contratistas"],
            ].map(([a, b]) => (
              <div key={a}>
                <dt className="display text-2xl text-brand">{a}</dt>
                <dd className="text-sm text-rebar">{b}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Imagen de la bodega */}
        <div className="hero-rise relative mx-auto w-full max-w-lg [animation-delay:200ms]">
          <Image
            src="/images/hero_section.webp"
            alt={`Bodega de materiales de ${site.name}`}
            width={1400}
            height={1400}
            priority
            sizes="(min-width: 768px) 46vw, 100vw"
            className="w-full rounded-3xl shadow-2xl shadow-ink/25"
          />
        </div>
      </div>
    </section>
  );
}
