import Image from "next/image";
import { categories } from "@/config/catalog";
import { whatsappLink } from "@/config/site";
import Reveal from "./Reveal";

export default function Categories() {
  return (
    <section id="productos" className="scroll-mt-24 bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Líneas de producto</p>
            <h2 className="display mt-2 text-4xl sm:text-5xl">
              Inventario permanente
            </h2>
            <p className="mt-4 text-rebar">
              Si no lo ve en la lista, pregúntenos: lo conseguimos con nuestros
              proveedores en 24–48 horas.
            </p>
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <li key={cat.code}>
              <Reveal
                className="card-pop group flex h-full flex-col overflow-hidden"
                delay={(i % 3) * 90}
              >
                <div className="relative aspect-[3/2] overflow-hidden border-b border-line">
                  <Image
                    src={cat.image}
                    alt={cat.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="display text-2xl">{cat.name}</h3>
                    <span className="rounded-full bg-brand-50 px-2.5 py-0.5 font-[family-name:var(--font-display)] text-xs font-semibold tracking-widest text-brand">
                      {cat.code}
                    </span>
                  </div>
                  <ul className="mt-4 flex-1 space-y-1.5 text-[0.95rem] text-ink-700">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <span
                          className="size-1.5 shrink-0 rounded-full bg-brand"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(`Hola, quiero cotizar: ${cat.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-[family-name:var(--font-display)] font-semibold text-brand transition-colors hover:text-brand-600"
                  >
                    Cotizar esta línea
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M4 12h16m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </a>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
