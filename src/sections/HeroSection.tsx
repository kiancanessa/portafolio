import FadeIn from "../components/FadeIn";
import Magnet from "../components/Magnet";
import ContactButton from "../components/ContactButton";
import Navbar from "../components/Navbar";
import { useLang } from "../i18n/LangContext";

export default function HeroSection() {
  const { t } = useLang();

  return (
    <section
      id="home"
      className="relative flex h-screen flex-col justify-between overflow-hidden"
    >
      <Navbar />

      <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6 md:px-10">
        <div className="w-full overflow-hidden">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading w-full whitespace-nowrap text-center font-black uppercase leading-none tracking-tight text-[9vw] sm:text-[10vw] md:text-[11vw] lg:text-[12vw]">
              {t.hero.greeting} {t.hero.name}
            </h1>
          </FadeIn>
        </div>

        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={5} className="h-[140px] w-[140px] sm:h-[180px] sm:w-[180px] md:h-[220px] md:w-[220px]">
            <div
              className="relative flex h-full w-full items-center justify-center rounded-full border border-white/10"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, rgba(215,226,234,0.22), rgba(12,12,12,0) 60%), linear-gradient(160deg, rgba(182,0,168,0.16), rgba(118,33,176,0.12))",
                boxShadow: "0 0 80px -15px rgba(190,76,0,0.3) inset",
              }}
            >
              <span className="hero-heading font-black tracking-tight text-3xl sm:text-4xl md:text-5xl">
                KSC
              </span>
            </div>
          </Magnet>
        </FadeIn>
      </div>

      <div className="flex items-end justify-between px-6 pb-7 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20} className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
          <p
            className="font-light uppercase leading-snug tracking-wide text-[#D7E2EA]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            {t.hero.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
