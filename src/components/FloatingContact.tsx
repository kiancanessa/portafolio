import { Mail, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "19512987671";
const EMAIL = "kiansaaca@gmail.com";

export default function FloatingContact() {
  return (
    <div className="fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-3 sm:right-6 sm:gap-4">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp"
        aria-label="WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full shadow-lg shadow-black/40 transition-transform duration-200 hover:scale-110 sm:h-14 sm:w-14"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="text-white" size={24} strokeWidth={2} fill="white" fillOpacity={0.15} />
      </a>

      <a
        href={`mailto:${EMAIL}`}
        title="Email"
        aria-label="Email"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#0c0c0c] shadow-lg shadow-black/40 transition-transform duration-200 hover:scale-110 sm:h-14 sm:w-14"
        style={{
          background:
            "linear-gradient(135deg, rgba(182,0,168,0.9), rgba(118,33,176,0.9))",
        }}
      >
        <Mail className="text-white" size={22} strokeWidth={2} />
      </a>
    </div>
  );
}
