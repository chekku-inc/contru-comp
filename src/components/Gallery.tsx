import Image from "next/image";
import { galleryImages } from "@/config/catalog";
import { site } from "@/config/site";
import Reveal from "./Reveal";

export default function Gallery() {
  return (
    <section id="bodega" className="scroll-mt-24 bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Nuestra bodega</p>
            <h2 className="display mt-2 text-4xl sm:text-5xl">
              Material en existencia, no en catálogo
            </h2>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-[family-name:var(--font-display)] font-semibold text-brand hover:text-brand-600"
            >
              Ver más fotos en Facebook
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 12h16m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
          {galleryImages.map((img, i) => (
            <Reveal
              key={img.src}
              delay={i * 70}
              className={`relative overflow-hidden rounded-3xl ${
                i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
