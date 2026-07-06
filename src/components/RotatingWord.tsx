"use client";

import { useEffect, useState } from "react";
import { Calligraph } from "calligraph";

/**
 * Palabra rotatoria del hero (Calligraph + Motion).
 * Las palabras "fantasma" invisibles ocupan la misma celda de la
 * cuadrícula para reservar el ancho y alto de la palabra más larga,
 * de modo que el título nunca cambia de tamaño ni reacomoda líneas.
 */
export default function RotatingWord({
  words,
  interval = 2600,
}: {
  words: string[];
  interval?: number;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="grid text-brand">
      {words.map((w) => (
        <span
          key={w}
          aria-hidden="true"
          className="invisible col-start-1 row-start-1 whitespace-nowrap"
        >
          {w}
        </span>
      ))}
      <span className="col-start-1 row-start-1 whitespace-nowrap">
        <Calligraph>{words[i]}</Calligraph>
      </span>
    </span>
  );
}
