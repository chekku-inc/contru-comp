# Complementos de Construcción — Sitio web

Sitio de una página construido con **Next.js 15 (App Router) + Tailwind CSS v4 + TypeScript**. Totalmente estático, rápido y optimizado para SEO local.

## Cómo correrlo

```bash
npm install
npm run dev      # desarrollo → http://localhost:3000
npm run build    # compilar para producción
npm start        # servir la versión compilada
```

## Los 2 archivos que debe editar

### 1. `src/config/site.ts` — datos del negocio
Teléfono, WhatsApp, dirección, coordenadas, horarios y dominio. **Todo el sitio** (textos, botones, SEO y datos estructurados de Google) se alimenta de este archivo. Los valores marcados con `TODO` son de ejemplo.

### 2. `public/images/` — las fotos
Facebook bloquea la descarga automática, así que las fotos hay que bajarlas a mano desde la página (abrir foto → clic derecho → *Guardar imagen como…*) y **reemplazar los archivos conservando el mismo nombre**:

| Archivo | Uso | Sugerencia |
|---|---|---|
| `hero.jpg` | Foto principal (vertical) | La mejor foto de la bodega, formato 4:5 |
| `og.jpg` | Vista previa al compartir el enlace | Foto horizontal 1200×630 |
| `cat-cemento.jpg` … `cat-herramientas.jpg` | Tarjetas de producto | Foto de cada línea, horizontal 3:2 |
| `bodega-1.jpg` … `bodega-4.jpg` | Galería | Fotos del local, despacho y entregas |

Mientras no las reemplace, el sitio muestra marcadores de posición con la identidad de la marca, así que funciona desde el primer momento.

El catálogo de productos (nombres, ítems por línea) se edita en `src/config/catalog.ts`.

## Identidad de marca

Derivada de la identidad real del negocio (fachada y artes de redes sociales):

| Token | Valor | Uso |
|---|---|---|
| Brand (naranja) | `#F05A28` | Fachada y logo: CTA, acentos, franjas, duotono |
| Brand 600 | `#D8481A` | Hover y estados activos del naranja |
| Brand 50 | `#FDEEE7` | Tinte suave para fondos de énfasis |
| Ink (carbón) | `#333A40` | Carbón del logo: encabezado, pie, texto |
| Concrete | `#EDECE8` | Gris claro de la fachada: fondo general |
| Paper | `#FFFFFF` | Blanco de los artes: tarjetas |
| Rebar | `#6B747B` | Texto secundario |

Reglas de uso: texto **blanco** sobre naranja (como en los artes), tema claro con secciones alternas blanco/gris, botones píldora (`.btn`, `.btn-brand`, `.btn-ghost`) y tarjetas con borde fino y sombra suave (`.card-pop`). Utilidades adicionales: `.brand-strip` (banda naranja) y `.duotone` (velo naranja para fotos).

Isotipo: "C" hexagonal con silueta de casa recortada — recreado como SVG en `src/components/LogoMark.tsx` (encabezado) y `src/app/icon.svg` (favicon).

Tipografía: **Satoshi** (títulos en Bold, texto en Regular/Medium), autoalojada desde `public/satoshi-webfont/` con `next/font/local`. Sin llamadas a Google Fonts.

## SEO incluido

- Metadatos completos + Open Graph + Twitter Card (`src/app/layout.tsx`)
- Datos estructurados **schema.org/HardwareStore** (negocio local: dirección, horario, teléfono, geolocalización) para aparecer en resultados enriquecidos de Google
- `sitemap.xml`, `robots.txt` y `manifest.webmanifest` generados automáticamente
- HTML semántico, `lang="es"`, textos alternativos en todas las imágenes
- Imágenes optimizadas con `next/image` (AVIF/WebP, carga diferida)
- 100 % estático: ~112 kB de JS inicial

## Publicar en GitHub Pages

El sitio exporta estático (`output: "export"`) y trae el workflow `.github/workflows/deploy.yml`:

1. Suba el repositorio a GitHub (rama `main`).
2. En el repo: **Settings → Pages → Source: GitHub Actions**.
3. Cada push a `main` compila y publica automáticamente. El `basePath` se calcula solo según el nombre del repo.

Antes o después de publicar:

1. Cambie `url` en `src/config/site.ts` por la URL real (la de Pages o su dominio propio).
2. Verifique el sitio en [Google Search Console](https://search.google.com/search-console) y envíe el sitemap.
3. Cree el perfil de [Google Business Profile](https://business.google.com) con la misma dirección y teléfono — es lo que más pesa para búsquedas locales tipo "materiales de construcción El Progreso".

> **Fotos**: por ahora las imágenes son *stock* de Unsplash (enlazadas desde su CDN). Reemplácelas por fotos reales del negocio cuando las tenga: edite las URLs en `src/config/catalog.ts`, `Hero.tsx` y `layout.tsx` (Open Graph), o vuelva a archivos locales en `public/images/`.
# contru-comp
