import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import type { FormEvent } from "react";
import FadeIn from "../components/FadeIn";
import { useLang } from "../i18n/LangContext";

export default function ContactSection() {
  const { t } = useLang();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
    const subject = encodeURIComponent(`Contacto desde portafolio — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:kiansaaca@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="bg-ink px-5 py-20 sm:px-8 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-2 md:gap-20">
        <FadeIn>
          <h2 className="hero-heading mb-5 text-3xl font-black uppercase leading-tight sm:text-4xl md:text-5xl">
            {t.contact.heading}
          </h2>
          <p className="mb-10 max-w-md text-[#D7E2EA]/70">{t.contact.text}</p>

          <div className="flex flex-col gap-4">
            <a href="mailto:kiansaaca@gmail.com" className="flex items-center gap-3 text-[#D7E2EA]/80 transition-colors hover:text-[#D7E2EA]">
              <Mail size={18} className="text-[#D7E2EA]" /> kiansaaca@gmail.com
            </a>
            <a href="tel:+19512987671" className="flex items-center gap-3 text-[#D7E2EA]/80 transition-colors hover:text-[#D7E2EA]">
              <Phone size={18} className="text-[#D7E2EA]" /> +1 (951) 298-7671
            </a>
            <a
              href="https://www.linkedin.com/in/kian-saavedra-canessa-76737b2b7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#D7E2EA]/80 transition-colors hover:text-[#D7E2EA]"
            >
              <Linkedin size={18} className="text-[#D7E2EA]" /> LinkedIn
            </a>
            <div className="flex items-center gap-3 text-[#D7E2EA]/80">
              <MapPin size={18} className="text-[#D7E2EA]" /> {t.contact.location}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs uppercase tracking-wide text-[#D7E2EA]/50">
                {t.contact.formName}
              </label>
              <input
                name="name"
                type="text"
                required
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[#D7E2EA] outline-none transition-colors focus:border-[#D7E2EA]/50"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs uppercase tracking-wide text-[#D7E2EA]/50">
                {t.contact.formEmail}
              </label>
              <input
                name="email"
                type="email"
                required
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[#D7E2EA] outline-none transition-colors focus:border-[#D7E2EA]/50"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs uppercase tracking-wide text-[#D7E2EA]/50">
                {t.contact.formMessage}
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[#D7E2EA] outline-none transition-colors focus:border-[#D7E2EA]/50"
              />
            </div>
            <button
              type="submit"
              className="mt-2 rounded-full px-8 py-3 text-sm font-medium uppercase tracking-widest text-white"
              style={{
                background:
                  "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
                boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
              }}
            >
              {t.contact.formSend}
            </button>
            <p className="text-center text-xs text-[#D7E2EA]/40">{t.contact.formNote}</p>
          </form>
        </FadeIn>
      </div>

      <p className="mx-auto mt-24 max-w-5xl border-t border-white/10 pt-8 text-center text-xs text-[#D7E2EA]/40">
        {t.footer}
      </p>
    </section>
  );
}
