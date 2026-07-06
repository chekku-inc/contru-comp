/**
 * ─────────────────────────────────────────────────────────────
 *  DATOS DEL NEGOCIO — edite ÚNICAMENTE este archivo para
 *  actualizar teléfono, dirección, horarios y redes sociales.
 *  Todo el sitio (incluido el SEO y los datos estructurados)
 *  se alimenta de aquí.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Complementos de Construcción",
  shortName: "Complementos",
  legalName: "Complementos de Construcción S. de R.L.",
  description:
    "Almacén de materiales de construcción en El Progreso, Yoro: cemento, varilla, bloque, láminas, agregados y herramientas, más servicios de techado, canales y estructuras metálicas.",
  tagline:
    "Expertos en venta de materiales y servicios de construcción y techado.",

  url: "https://construcomp.site",

  phone: "+504 9686-6554",
  whatsapp: "50496866554",

  email: "ventas@complementosconstruccion.com",

  address: {
    street: "Barrio Ejemplo, 5 calle, 10 avenida", // TODO: dirección real
    city: "El Progreso",
    region: "Yoro",
    country: "Honduras",
    countryCode: "HN",
  },

  // Coordenadas reales (ficha de Google Maps)
  geo: { lat: 15.4171948, lng: -87.7958391 },

  // Ficha del negocio en Google Maps
  placeUrl:
    "https://www.google.com/maps/place/Complementos+de+construcci%C3%B3n/@15.4171948,-87.7958391,17z/data=!3m1!1e3!4m6!3m5!1s0x8f663f00587631a7:0xb2207dba04bba3bb!8m2!3d15.4171948!4d-87.7958391!16s%2Fg%2F11w23hn80g",

  hours: [
    { days: "Lunes a viernes", open: "7:00 a. m.", close: "5:00 p. m." },
    { days: "Sábado", open: "7:00 a. m.", close: "12:00 m." },
  ],

  // Para datos estructurados (schema.org)
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "07:00",
      closes: "12:00",
    },
  ],

  social: {
    facebook:
      "https://www.facebook.com/people/Complementos-de-Construcci%C3%B3n/61588587566049/",
  },
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const mapsLink = site.placeUrl;

export const mapsEmbed = `https://www.google.com/maps?q=${site.geo.lat},${site.geo.lng}&z=17&output=embed`;
