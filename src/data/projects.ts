export interface ProjectMeta {
  key: "rosarito" | "lemus" | "recorridos" | "inmocrm" | "pizza" | "eliot" | "pinturas";
  url: string;
  gradient: string;
}

// El orden manda: primero los dos sitios inmobiliarios y las herramientas
// propias que se conectan a ellos, luego el resto de los clientes.
// translations.projects.items debe seguir este mismo orden.
export const PROJECTS: ProjectMeta[] = [
  {
    key: "rosarito",
    url: "https://elcasarosaritogroup.com/",
    gradient: "linear-gradient(135deg, #1c4b3d 0%, #0a1f18 100%)",
  },
  {
    key: "lemus",
    url: "https://lemus-realty.vercel.app/",
    gradient: "linear-gradient(135deg, #1b3a6b 0%, #0a1424 100%)",
  },
  {
    key: "recorridos",
    url: "https://recorridos-zeta.vercel.app/",
    gradient: "linear-gradient(135deg, #6b3f1c 0%, #1a1008 100%)",
  },
  {
    key: "inmocrm",
    url: "https://inmocrm-omega.vercel.app/",
    gradient: "linear-gradient(135deg, #2b2f6b 0%, #0d0f1f 100%)",
  },
  {
    key: "pizza",
    url: "https://georgys-pizza-kiancanessa.vercel.app/",
    gradient: "linear-gradient(135deg, #6d2b1f 0%, #24100a 100%)",
  },
  {
    key: "eliot",
    url: "https://palacio-de-eliot.vercel.app/",
    gradient: "linear-gradient(135deg, #4a3418 0%, #16100a 100%)",
  },
  {
    key: "pinturas",
    url: "https://pinturas-galeria.vercel.app/",
    gradient: "linear-gradient(135deg, #3a2a63 0%, #14101f 100%)",
  },
];
