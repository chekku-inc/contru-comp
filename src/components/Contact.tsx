import { site, whatsappLink, mapsLink, mapsEmbed } from "@/config/site";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24 bg-concrete py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2">
        <Reveal>
          <div>
            <p className="eyebrow">Contacto</p>
            <h2 className="display mt-2 text-4xl sm:text-5xl">
              Pase por la bodega o escríbanos
            </h2>
            <p className="mt-5 max-w-md text-ink-700">
              Atendemos por WhatsApp, teléfono o directamente en bodega. Traiga
              su lista de materiales y salga con la cotización en mano.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappLink("Hola, quiero información sobre materiales.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-brand"
              >
                WhatsApp
              </a>
              <a
                href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                className="btn btn-ghost"
              >
                Llamar {site.phone}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <dl className="card-pop grid h-full content-start gap-6 p-7">
            <div>
              <dt className="eyebrow">Dirección</dt>
              <dd className="mt-1 text-lg">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region}, {site.address.country}
              </dd>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-2 font-[family-name:var(--font-display)] font-semibold text-brand hover:text-brand-600"
              >
                Cómo llegar
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 12h16m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" />
                </svg>
              </a>
            </div>
            <div>
              <dt className="eyebrow">Horario</dt>
              {site.hours.map((h) => (
                <dd key={h.days} className="mt-1 text-lg">
                  {h.days}: {h.open} – {h.close}
                </dd>
              ))}
            </div>
            <div>
              <dt className="eyebrow">Correo</dt>
              <dd className="mt-1 text-lg">
                <a href={`mailto:${site.email}`} className="hover:text-brand-600">
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>

      {/* Ubicación en Google Maps */}
      <div className="mx-auto mt-14 max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="overflow-hidden rounded-3xl">
            <iframe
              src={mapsEmbed}
              title={`Ubicación de ${site.name} en Google Maps`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[380px] w-full md:h-[440px]"
            />
          </div>
          <p className="mt-4 text-sm text-rebar">
            {site.address.street} · {site.address.city}, {site.address.region}.{" "}
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand underline decoration-2 underline-offset-4 hover:text-brand-600"
            >
              Abrir en Google Maps
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
