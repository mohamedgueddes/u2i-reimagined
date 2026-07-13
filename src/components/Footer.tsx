import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import logoImage from "@/assets/logo-u2i-removebg-preview.png";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-20 text-white">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end">
          <div className="flex items-center gap-4">
            <img src={logoImage} alt="U2I" className="h-14 w-auto object-contain" />
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
              U2I Process Group
            </div>
          </div>
          <div className="flex flex-wrap gap-6 text-sm font-bold">
            {["Qui sommes nous", "Secteurs", "Equipements", "References", "Contact"].map((l) => (
              <a key={l} href="#" className="hover:text-[#e0141c] transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-14 py-14 md:grid-cols-3">
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-white/50">A propos</h4>
            <p className="text-sm text-white/60 leading-relaxed">
              Fondee en 2015, la societe Univers Inox Industriel est basee a Akouda, une ville situee a quelques kilometres au nord-ouest de Sousse en Tunisie.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-white/50">Liens utiles</h4>
            <ul className="space-y-2 text-sm">
              {["Equipements", "Savoir Faire", "References", "Contact"].map((x) => (
                <li key={x}>
                  <a href="#" className="flex items-center gap-2 text-white/70 hover:text-[#e0141c] transition-colors">
                    <span className="block h-px w-3 bg-[#e0141c]" />
                    {x}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-white/50">Adresse</h4>
            <p className="text-sm text-white/60 leading-relaxed">
              Rue Omar el mokhtar kabissa 4022 Akouda, Tunisie<br />
              Tel : +216 50 191 004<br />
              Email : u2i@u2iprocess.com
            </p>
            <div className="mt-4 flex items-center gap-3">
              {[Facebook, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/20 transition hover:border-[#e0141c] hover:text-[#e0141c]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 py-8 md:flex-row md:items-center">
          <div className="flex flex-wrap gap-6 text-xs text-white/60">
            {["Politique de confidentialite", "CGU", "Mentions legales"].map((l) => (
              <a key={l} href="#" className="hover:text-white">
                {l}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="mr-2 text-xs text-white/50">
              +216 50 191 004 · u2i@u2iprocess.com
            </span>
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/20 transition hover:border-[#e0141c] hover:text-[#e0141c]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} U2I Process — Univers Inox Industriel · Akouda, Sousse — Tunisie
          <span className="ml-4 inline-flex items-center gap-2">
            <Phone className="inline h-3 w-3 text-[#e0141c]" /> +216 50 191 004
            <Mail className="ml-3 inline h-3 w-3 text-[#e0141c]" /> u2i@u2iprocess.com
          </span>
        </div>
      </div>
    </footer>
  );
}
