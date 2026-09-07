import FadeIn from "../components/FadeIn";
import { useLang } from "../i18n/LangContext";

export default function ServicesSection() {
  const { t } = useLang();

  return (
    <section
      id="services"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0}>
        <h2
          className="mb-16 text-center font-black uppercase text-[#0C0C0C] sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          {t.services.heading}
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {t.services.items.map((item, i) => (
          <FadeIn key={item.n} delay={i * 0.1}>
            <div
              className="flex items-start gap-6 border-t border-[rgba(12,12,12,0.15)] py-8 last:border-b sm:gap-10 sm:py-10 md:gap-14 md:py-12"
            >
              <span
                className="flex-shrink-0 font-black text-[#0C0C0C]"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {item.n}
              </span>
              <div className="flex flex-col gap-2 pt-2 sm:gap-3 md:pt-4">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {item.name}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed text-[#0C0C0C]"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)", opacity: 0.6 }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
