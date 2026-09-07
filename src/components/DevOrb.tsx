import Magnet from "./Magnet";

const CHIPS = [
  { label: "React.js", className: "left-[2%] top-[6%]", delay: "0s" },
  { label: "Laravel", className: "right-[0%] top-[22%]", delay: "0.5s" },
  { label: "Python", className: "right-[-4%] bottom-[26%]", delay: "1s" },
  { label: "TypeScript", className: "left-[-4%] bottom-[10%]", delay: "1.5s" },
  { label: "Docker", className: "left-[10%] bottom-[-4%]", delay: "2s" },
  { label: "TensorFlow", className: "right-[8%] top-[-4%]", delay: "2.5s" },
];

export default function DevOrb() {
  return (
    <div className="relative aspect-square w-[220px] sm:w-[300px] md:w-[380px] lg:w-[460px]">
      <div
        className="absolute inset-0 rounded-full border border-dashed border-white/15"
        style={{ animation: "spin-slow 40s linear infinite" }}
      />
      <div
        className="absolute inset-[9%] rounded-full border border-dashed border-white/10"
        style={{ animation: "spin-slow-reverse 30s linear infinite" }}
      />

      {CHIPS.map((chip) => (
        <span
          key={chip.label}
          className={`absolute rounded-full border border-white/10 bg-[#0c0c0c]/80 px-3 py-1.5 font-mono text-[10px] text-[#D7E2EA]/80 backdrop-blur sm:px-4 sm:py-2 sm:text-xs ${chip.className}`}
          style={{ animation: `bob 6s ease-in-out infinite`, animationDelay: chip.delay }}
        >
          {chip.label}
        </span>
      ))}

      <Magnet padding={160} strength={6} className="absolute inset-[16%]">
        <div
          className="relative flex h-full w-full items-center justify-center rounded-full border border-white/10"
          style={{
            background:
              "radial-gradient(circle at 32% 28%, rgba(215,226,234,0.28), rgba(12,12,12,0) 55%), linear-gradient(150deg, rgba(182,0,168,0.22) 0%, rgba(118,33,176,0.18) 55%, rgba(190,76,0,0.16) 100%)",
            boxShadow: "0 0 140px -20px rgba(190,76,0,0.35) inset, 0 0 60px -10px rgba(182,0,168,0.25)",
          }}
        >
          <span className="hero-heading select-none font-black tracking-tight text-[13vw] sm:text-[9vw] md:text-[6.5vw] lg:text-[5vw]">
            KSC
          </span>
        </div>
      </Magnet>
    </div>
  );
}
