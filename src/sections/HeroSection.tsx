import FadeIn from "../components/FadeIn";
import AtomOrbit from "../components/AtomOrbit";
import ContactButton from "../components/ContactButton";
import Navbar from "../components/Navbar";
import { useLang } from "../i18n/LangContext";

export default function HeroSection() {
  const { t } = useLang();

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden py-6"
    >
      <Navbar />

      <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-10 md:px-10">
        <div className="w-full overflow-hidden">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading w-full whitespace-nowrap text-center font-black uppercase leading-none tracking-tight text-[9vw] sm:text-[10vw] md:text-[11vw] lg:text-[12vw]">
              {t.hero.greeting} {t.hero.name}
            </h1>
          </FadeIn>
        </div>

        <FadeIn delay={0.6} y={30}>
          <AtomOrbit />
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
