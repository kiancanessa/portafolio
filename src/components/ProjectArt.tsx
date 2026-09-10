import type { ProjectMeta } from "../data/projects";

/** 1 = hero de escritorio, 2 = vista interior, 3 = versión móvil */
type Variant = 1 | 2 | 3;

const VARIANT_FILE: Record<Variant, string> = {
  1: "1",
  2: "2",
  3: "mobile",
};

interface ProjectArtProps {
  project: ProjectMeta;
  variant?: Variant;
  className?: string;
  rounded?: string;
  alt?: string;
  eager?: boolean;
}

export default function ProjectArt({
  project,
  variant = 1,
  className = "",
  rounded = "rounded-[40px] sm:rounded-[50px] md:rounded-[60px]",
  alt,
  eager = false,
}: ProjectArtProps) {
  const src = `/projects/${project.key}-${VARIANT_FILE[variant]}.webp`;

  return (
    <div
      className={`relative overflow-hidden ${rounded} ${className}`}
      style={{ background: project.gradient }}
    >
      <img
        src={src}
        alt={alt ?? ""}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-cover object-top"
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
    </div>
  );
}
