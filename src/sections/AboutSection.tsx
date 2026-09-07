import { Orbit, Boxes, Cpu, Sparkles } from "lucide-react";
import FadeIn from "../components/FadeIn";
import AnimatedText from "../components/AnimatedText";
import ContactButton from "../components/ContactButton";
import { useLang } from "../i18n/LangContext";

function CornerIcon({
  Icon,
  className,
}: {
  Icon: typeof Orbit;
  className: string;
}) {
  return (
    <div className={`absolute hidden md:flex items-center justify-center rounded-3xl border border-white/10 ${className}`}
      style={{
        background:
          "radial-gradient(circle at 35% 30%, rgba(215,226,234,0.12), rgba(12,12,12,0) 65%)",
      }}
    >
      <Icon className="h-[38%] w-[38%] text-[#D7E2EA]/50" strokeWidth={1.2} />
    </div>
  );
}

export default function AboutSection() {
  const { t } = useLang();

  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10"
    >
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
        <CornerIcon Icon={Orbit} className="left-[4%] top-[4%] h-[120px] w-[120px] sm:h-[160px] sm:w-[160px] md:h-[210px] md:w-[210px]" />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
        <CornerIcon Icon={Boxes} className="bottom-[8%] left-[6%] h-[100px] w-[100px] sm:h-[140px] sm:w-[140px] md:left-[10%] md:h-[180px] md:w-[180px]" />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
        <CornerIcon Icon={Cpu} className="right-[4%] top-[4%] h-[120px] w-[120px] sm:h-[160px] sm:w-[160px] md:h-[210px] md:w-[210px]" />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
        <CornerIcon Icon={Sparkles} className="bottom-[8%] right-[6%] h-[130px] w-[130px] sm:h-[170px] sm:w-[170px] md:right-[10%] md:h-[220px] md:w-[220px]" />
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            {t.about.heading}
          </h2>
        </FadeIn>

        <AnimatedText
          text={t.about.text}
          className="max-w-[560px] text-center font-medium leading-relaxed text-[clamp(1rem,2vw,1.35rem)]"
        />

        <div className="mt-6 sm:mt-8 md:mt-10">
          <ContactButton />
        </div>
      </div>
    </section>
  );
}
