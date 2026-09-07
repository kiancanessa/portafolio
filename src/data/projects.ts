export interface ProjectMeta {
  key: "rosarito" | "pizza" | "pinturas";
  url: string;
  gradient: string;
}

export const PROJECTS: ProjectMeta[] = [
  {
    key: "rosarito",
    url: "https://elcasarosaritogroup.com/",
    gradient: "linear-gradient(135deg, #1c4b3d 0%, #0a1f18 100%)",
  },
  {
    key: "pizza",
    url: "https://georgys-pizza-kiancanessa.vercel.app/",
    gradient: "linear-gradient(135deg, #6d2b1f 0%, #24100a 100%)",
  },
  {
    key: "pinturas",
    url: "https://pinturas-galeria.vercel.app/",
    gradient: "linear-gradient(135deg, #3a2a63 0%, #14101f 100%)",
  },
];
