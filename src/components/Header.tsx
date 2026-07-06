"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { site, whatsappLink } from "@/config/site";

const nav = [
  { href: "#productos", label: "Productos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#bodega", label: "Nuestra bodega" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Barra superior de contacto */}
      <div className="bg-brand text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-sm sm:px-6">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-2 font-medium hover:underline"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="hidden items-center gap-2 font-medium hover:underline md:flex"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" />
              </svg>
              {site.email}
            </a>
          </div>
          <a
            href={site.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-medium hover:underline"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.5H7.4V14h2.7v8h3.4z" />
            </svg>
            Facebook
          </a>
        </div>
      </div>

      {/* Navegación principal */}
      <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-3" aria-label="Inicio">
            <Image
              src="/images/logo.png"
              alt=""
              width={48}
              height={48}
              className="size-12 shrink-0"
            />
            <span className="display text-xl leading-none">
              Complementos
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-brand">
                de Construcción
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-sm font-semibold text-ink-700 transition-colors hover:text-brand"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappLink("Hola, quiero cotizar materiales.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-brand hidden !py-2.5 text-sm md:inline-flex"
          >
            Cotizar ahora
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 12h16m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </a>

          <button
            type="button"
            className="text-ink md:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav
            id="menu-movil"
            aria-label="Principal móvil"
            className="border-t border-line bg-paper px-4 pb-5 md:hidden"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line py-3 font-medium text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink("Hola, quiero cotizar materiales.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-brand mt-4 w-full justify-center"
            >
              Cotizar por WhatsApp
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
