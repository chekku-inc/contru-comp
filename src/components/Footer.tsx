import Image from "next/image";
import { site, whatsappLink, mapsLink } from "@/config/site";

const links = [
  { href: "#productos", label: "Productos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#bodega", label: "Nuestra bodega" },
  { href: "#contacto", label: "Contacto" },
];

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-50 text-brand">
      {children}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_1fr_0.8fr]">
        {/* Marca */}
        <div>
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="" width={52} height={52} className="size-13" />
            <span className="display text-xl leading-none">
              Complementos
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-brand">
                de Construcción
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-ink-700">{site.tagline}</p>
          <a
            href={whatsappLink("Hola, quiero cotizar materiales.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-brand mt-6 !py-2.5 text-sm"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="display text-xl">Contacto</h3>
          <ul className="mt-5 space-y-4 text-ink-700">
            <li className="flex items-center gap-3">
              <IconCircle>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 21s-7-6-7-11a7 7 0 1114 0c0 5-7 11-7 11z" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </IconCircle>
              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
                {site.address.street}, {site.address.city}, {site.address.region}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <IconCircle>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </IconCircle>
              <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="hover:text-brand">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <IconCircle>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" />
                </svg>
              </IconCircle>
              <a href={`mailto:${site.email}`} className="hover:text-brand">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Enlaces */}
        <div>
          <h3 className="display text-xl">Enlaces</h3>
          <ul className="mt-5 space-y-3 text-ink-700">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex items-center gap-2 hover:text-brand">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" />
                  </svg>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-brand"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" />
                </svg>
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-5 text-sm text-rebar sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.legalName}. {site.address.city},{" "}
            {site.address.country}.
          </p>
          <p>
            Hecho en {site.address.city}, {site.address.region}.
          </p>
        </div>
      </div>
    </footer>
  );
}
