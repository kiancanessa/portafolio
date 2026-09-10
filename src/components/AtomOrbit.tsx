import type { CSSProperties } from "react";
import Magnet from "./Magnet";
import { BRAND_ICONS } from "../data/brandIcons";
import { useLang } from "../i18n/LangContext";

interface OrbitNode {
  icon: keyof typeof BRAND_ICONS;
  categoryKey: "frontend" | "ai" | "backend" | "data" | "devops";
  phase: number;
}

interface OrbitRing {
  tilt: number;
  yaw: number;
  duration: number;
  inset: string;
  glow: string;
  nodes: OrbitNode[];
}

const RINGS: OrbitRing[] = [
  {
    tilt: 74,
    yaw: 0,
    duration: 26,
    inset: "0%",
    glow:
      "conic-gradient(from 0deg, rgba(97,218,251,0.05), rgba(97,218,251,0.85), rgba(118,33,176,0.5), rgba(97,218,251,0.05))",
    nodes: [
      { icon: "react", categoryKey: "frontend", phase: 0 },
      { icon: "python", categoryKey: "data", phase: 0.5 },
    ],
  },
  {
    tilt: 72,
    yaw: 61,
    duration: 21,
    inset: "7%",
    glow:
      "conic-gradient(from 140deg, rgba(255,111,0,0.05), rgba(255,111,0,0.85), rgba(182,0,168,0.5), rgba(255,111,0,0.05))",
    nodes: [
      { icon: "tensorflow", categoryKey: "ai", phase: 0.18 },
      { icon: "docker", categoryKey: "devops", phase: 0.68 },
    ],
  },
  {
    tilt: 70,
    yaw: 122,
    duration: 31,
    inset: "3%",
    glow:
      "conic-gradient(from 260deg, rgba(182,0,168,0.05), rgba(182,0,168,0.85), rgba(97,218,251,0.5), rgba(182,0,168,0.05))",
    nodes: [
      { icon: "laravel", categoryKey: "backend", phase: 0.36 },
      { icon: "typescript", categoryKey: "frontend", phase: 0.86 },
    ],
  },
];

function OrbitBadge({ node }: { node: OrbitNode }) {
  const { t } = useLang();
  const brand = BRAND_ICONS[node.icon];

  return (
    <div
      className="relative flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 sm:h-14 sm:w-14 md:h-16 md:w-16"
      style={{
        background:
          "radial-gradient(circle at 32% 26%, rgba(255,255,255,0.28), rgba(255,255,255,0.04) 42%, rgba(12,12,12,0.96) 78%)",
        boxShadow: `0 0 22px -4px ${brand.hex}80, inset 0 -6px 14px -6px ${brand.hex}70`,
      }}
    >
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-label={brand.title}
        className="h-1/2 w-1/2 drop-shadow"
        fill={brand.hex}
      >
        <path d={brand.path} />
      </svg>

      <span className="absolute left-1/2 top-full hidden -translate-x-1/2 translate-y-2 whitespace-nowrap rounded-full border border-white/10 bg-[#0c0c0c]/85 px-3 py-1 text-center md:block">
        <span className="block text-[11px] font-medium leading-tight text-[#D7E2EA]">
          {brand.title}
        </span>
        <span className="block text-[9px] leading-tight text-[#D7E2EA]/45">
          {t.hero.orbit[node.categoryKey]}
        </span>
      </span>
    </div>
  );
}

export default function AtomOrbit() {
  return (
    <Magnet padding={180} strength={7} className="relative flex flex-col items-center">
      <div className="atom-scene relative aspect-square w-[280px] sm:w-[380px] md:w-[470px] lg:w-[540px]">
        {/* Resplandor de fondo */}
        <div
          className="absolute inset-[12%] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(118,33,176,0.45), rgba(182,0,168,0.18) 45%, transparent 70%)",
            animation: "atom-pulse 7s ease-in-out infinite",
          }}
        />

        <div className="atom-world">
          {/* Núcleo */}
          <div
            className="absolute left-1/2 top-1/2 flex h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10"
            style={{
              background:
                "radial-gradient(circle at 34% 26%, rgba(215,226,234,0.5), rgba(120,60,190,0.35) 32%, rgba(30,10,60,0.98) 68%, rgba(8,6,16,1) 100%)",
              boxShadow:
                "0 0 90px -10px rgba(182,0,168,0.55), inset 0 -18px 40px -18px rgba(255,150,80,0.65), inset 0 12px 30px -14px rgba(255,255,255,0.5)",
            }}
          >
            <span className="hero-heading select-none font-black tracking-tight text-[10vw] sm:text-[6vw] md:text-[4.4vw] lg:text-[3.6vw]">
              KSC
            </span>
          </div>

          {/* Anillos + tecnologías orbitando */}
          {RINGS.map((ring, ri) => (
            <div
              key={ri}
              className="atom-plane"
              style={
                {
                  "--tilt": `${ring.tilt}deg`,
                  "--yaw": `${ring.yaw}deg`,
                  inset: ring.inset,
                } as CSSProperties
              }
            >
              <div
                className="atom-ring"
                style={{ "--ring-glow": ring.glow } as CSSProperties}
              />

              {ring.nodes.map((node) => (
                <div
                  key={node.icon}
                  className="atom-spinner"
                  style={
                    {
                      "--dur": `${ring.duration}s`,
                      "--delay": `${-ring.duration * node.phase}s`,
                    } as CSSProperties
                  }
                >
                  <div className="atom-node">
                    <div
                      className="atom-upright"
                      style={
                        {
                          "--dur": `${ring.duration}s`,
                          "--delay": `${-ring.duration * node.phase}s`,
                        } as CSSProperties
                      }
                    >
                      <div
                        className="atom-flat"
                        style={
                          {
                            "--tilt": `${ring.tilt}deg`,
                            "--yaw": `${ring.yaw}deg`,
                          } as CSSProperties
                        }
                      >
                        <OrbitBadge node={node} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Pedestal */}
      <div className="relative -mt-4 h-16 w-[72%] sm:h-20 md:h-24">
        <div
          className="absolute inset-x-0 top-0 h-full rounded-[50%] border border-white/10"
          style={{
            background:
              "linear-gradient(180deg, rgba(40,26,60,0.9) 0%, rgba(14,12,20,0.95) 55%, rgba(10,10,14,1) 100%)",
            boxShadow:
              "0 -1px 30px -6px rgba(182,0,168,0.55), 0 18px 50px -20px rgba(0,0,0,0.9)",
          }}
        />
        <div
          className="absolute inset-x-[6%] top-[14%] h-[42%] rounded-[50%]"
          style={{
            background:
              "linear-gradient(90deg, rgba(97,218,251,0.5), rgba(182,0,168,0.6), rgba(255,140,60,0.5))",
            filter: "blur(7px)",
            opacity: 0.65,
          }}
        />
      </div>
    </Magnet>
  );
}
