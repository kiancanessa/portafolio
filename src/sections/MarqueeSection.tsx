import { useEffect, useRef } from "react";
import ProjectArt from "../components/ProjectArt";
import { PROJECTS } from "../data/projects";
import type { ProjectMeta } from "../data/projects";

type Tile = { project: ProjectMeta; variant: 1 | 2 | 3 };

function buildRow(order: number[], variants: (1 | 2 | 3)[]): Tile[] {
  const single = order.map((i, idx) => ({ project: PROJECTS[i], variant: variants[idx] }));
  return [...single, ...single, ...single];
}

const ROW_1 = buildRow([0, 1, 2, 0, 1, 2], [1, 2, 3, 2, 1, 3]);
const ROW_2 = buildRow([1, 2, 0, 2, 1, 0], [3, 1, 2, 1, 3, 2]);

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      const section = sectionRef.current;
      const row1 = row1Ref.current;
      const row2 = row2Ref.current;
      if (!section || !row1 || !row2) return;

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      row1.style.transform = `translateX(${offset - 200}px)`;
      row2.style.transform = `translateX(${-(offset - 200)}px)`;
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="overflow-hidden bg-ink pb-10 pt-24 sm:pt-32 md:pt-40">
      <div ref={row1Ref} className="mb-3 flex gap-3" style={{ willChange: "transform" }}>
        {ROW_1.map((tile, i) => (
          <ProjectArt
            key={`r1-${i}`}
            project={tile.project}
            variant={tile.variant}
            rounded="rounded-2xl"
            className="h-[270px] w-[420px] flex-shrink-0"
          />
        ))}
      </div>
      <div ref={row2Ref} className="flex gap-3" style={{ willChange: "transform" }}>
        {ROW_2.map((tile, i) => (
          <ProjectArt
            key={`r2-${i}`}
            project={tile.project}
            variant={tile.variant}
            rounded="rounded-2xl"
            className="h-[270px] w-[420px] flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
