import { Home, Pizza, Palette } from "lucide-react";
import type { ProjectMeta } from "../data/projects";

const ICONS: Record<ProjectMeta["key"], typeof Home> = {
  rosarito: Home,
  pizza: Pizza,
  pinturas: Palette,
};

interface ProjectArtProps {
  project: ProjectMeta;
  variant?: 1 | 2 | 3;
  className?: string;
  rounded?: string;
}

export default function ProjectArt({
  project,
  variant = 1,
  className = "",
  rounded = "rounded-[40px] sm:rounded-[50px] md:rounded-[60px]",
}: ProjectArtProps) {
  const Icon = ICONS[project.key];

  return (
    <div
      className={`relative overflow-hidden ${rounded} ${className}`}
      style={{ background: project.gradient }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.14), transparent 55%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative flex h-full w-full items-center justify-center">
        <Icon
          className="text-white/90"
          strokeWidth={1.4}
          style={{
            width: variant === 2 ? "22%" : "34%",
            height: variant === 2 ? "22%" : "34%",
            opacity: variant === 3 ? 0.85 : 0.9,
          }}
        />
      </div>
    </div>
  );
}
