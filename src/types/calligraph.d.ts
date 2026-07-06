// Stub mínimo para compilar antes de `npm install`.
// El paquete real (calligraph) trae sus propios tipos.
declare module "calligraph" {
  import type { ReactNode } from "react";
  export function Calligraph(props: {
    children: ReactNode;
    className?: string;
  }): React.JSX.Element;
}
