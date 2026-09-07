import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectArt from "../components/ProjectArt";
import LiveProjectButton from "../components/LiveProjectButton";
import { PROJECTS } from "../data/projects";
import { useLang } from "../i18n/LangContext";

const TOTAL = PROJECTS.length;

function ProjectCard({ index }: { index: number }) {
  const { t } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);
  const project = PROJECTS[index];
  const copy = t.projects.items[index];

  const targetScale = 1 - (TOTAL - 1 - index) * 0.03;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky top-24 h-[85vh] md:top-32"
      style={{ top: `${96 + index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="flex h-full flex-col gap-6 rounded-[40px] border-2 border-[#D7E2EA] bg-ink p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA]"
              style={{ fontSize: "clamp(2.5rem, 8vw, 100px)" }}
            >
              {copy.n}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 sm:text-sm">
                {copy.category}
              </span>
              <h3 className="text-lg font-medium uppercase text-[#D7E2EA] sm:text-2xl md:text-3xl">
                {copy.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton href={project.url} />
        </div>

        <div className="flex flex-1 gap-3">
          <div className="flex w-2/5 flex-col gap-3">
            <ProjectArt
              project={project}
              variant={1}
              className="w-full"
              rounded="rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
            />
            <ProjectArt
              project={project}
              variant={2}
              className="w-full flex-1"
              rounded="rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
            />
          </div>
          <ProjectArt
            project={project}
            variant={3}
            className="w-3/5"
            rounded="rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
          />
        </div>

        <p className="max-w-2xl text-sm text-[#D7E2EA]/70 sm:text-base">{copy.desc}</p>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const { t } = useLang();

  return (
    <section
      id="projects"
      className="relative -mt-10 rounded-t-[40px] bg-ink px-5 pb-32 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
      style={{ zIndex: 10 }}
    >
      <h2
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        {t.projects.heading}
      </h2>

      <div className="mx-auto max-w-6xl">
        {PROJECTS.map((_, i) => (
          <ProjectCard key={PROJECTS[i].key} index={i} />
        ))}
      </div>
    </section>
  );
}
