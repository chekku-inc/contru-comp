import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/config/site";

// Imagen Open Graph generada en tiempo de compilación (estática en el export)
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — materiales y servicios de construcción en ${site.address.city}, ${site.address.region}`;

export default async function Image() {
  const [bold, regular, logo] = await Promise.all([
    readFile(join(process.cwd(), "public/satoshi-webfont/Satoshi-Bold.woff")),
    readFile(join(process.cwd(), "public/satoshi-webfont/Satoshi-Regular.woff")),
    readFile(join(process.cwd(), "public/images/logo.png")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#EDECE8",
          padding: "64px 72px 0",
          fontFamily: "Satoshi",
          color: "#333A40",
        }}
      >
        {/* Marca */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" width={96} height={96} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 34, fontWeight: 700 }}>Complementos</span>
            <span style={{ fontSize: 19, letterSpacing: 4, color: "#F05A28", fontWeight: 700 }}>
              DE CONSTRUCCIÓN
            </span>
          </div>
        </div>

        {/* Titular */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 64,
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          <span>Todo para su obra,</span>
          <span style={{ color: "#F05A28" }}>en un solo lugar.</span>
        </div>

        {/* Subtítulo */}
        <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#6B747B" }}>
          Materiales, techado y estructuras metálicas · {site.address.city}, {site.address.region}
        </div>

        {/* Pie */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "auto",
            paddingBottom: 40,
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          <span style={{ color: "#F05A28" }}>construcomp.site</span>
          <span>{site.phone}</span>
        </div>

        {/* Banda naranja */}
        <div
          style={{
            display: "flex",
            height: 18,
            width: "1344px",
            marginLeft: -72,
            background: "#F05A28",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Satoshi", data: bold, weight: 700, style: "normal" },
        { name: "Satoshi", data: regular, weight: 400, style: "normal" },
      ],
    },
  );
}
