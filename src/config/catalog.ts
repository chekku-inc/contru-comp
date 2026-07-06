export type Category = {
  code: string;
  name: string;
  items: string[];
  image: string;
  alt: string;
};

/**
 * Catálogo de líneas de producto. Ajuste nombres e ítems según el
 * inventario real. Las imágenes viven en /public/images/ — reemplace
 * cada archivo por una foto real conservando el mismo nombre.
 */
export const categories: Category[] = [
  {
    code: "CEM",
    name: "Cemento y agregados",
    items: ["Cemento gris", "Arena de río", "Grava", "Cal", "Pegamento cerámico"],
    image: "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?auto=format&fit=crop&w=900&q=70&h=600",
    alt: "Sacos de cemento apilados en bodega",
  },
  {
    code: "ACE",
    name: "Varilla y acero",
    items: ["Varilla corrugada", "Alambre de amarre", "Malla electrosoldada", "Angulares y platinas"],
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=900&q=70&h=600",
    alt: "Varilla corrugada de acero en estantería",
  },
  {
    code: "BLO",
    name: "Bloque y ladrillo",
    items: ["Bloque de concreto", "Ladrillo rafón", "Adoquín", "Soleras prefabricadas"],
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=900&q=70&h=600",
    alt: "Bloques de concreto en tarimas",
  },
  {
    code: "TEC",
    name: "Láminas y techos",
    items: ["Lámina aluzinc", "Lámina galvanizada", "Canaletas", "Aislantes térmicos"],
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=900&q=70&h=600",
    alt: "Láminas para techo apiladas",
  },
  {
    code: "ELE",
    name: "Eléctrico y plomería",
    items: ["Tubería PVC", "Cable eléctrico", "Accesorios sanitarios", "Tanques de agua"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=70&h=600",
    alt: "Tubería PVC y material eléctrico",
  },
  {
    code: "HER",
    name: "Herramientas y equipo",
    items: ["Herramienta manual", "Discos y brocas", "Carretillas", "Equipo de protección"],
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=70&h=600",
    alt: "Herramientas de construcción en exhibición",
  },
];

export const galleryImages = [
  { src: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=70&h=1200", alt: "Vista general de la bodega de materiales" },
  { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=70&h=700", alt: "Área de despacho y carga de camiones" },
  { src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=700&q=70&h=700", alt: "Estanterías con inventario de ferretería" },
  { src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=700&q=70&h=700", alt: "Entrega de materiales en obra" },
];
