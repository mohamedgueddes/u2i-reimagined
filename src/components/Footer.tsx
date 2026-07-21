import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import logoImage from "@/assets/logo-u2i-removebg-preview.png";
import atelierImage from "@/assets/about-workshop.jpg";
import pharmaImage from "@/assets/hero-pharma.jpg";
import emailIcon from "@/assets/partners/email.png";

const pharma = { url: pharmaImage };
const atelier = { url: atelierImage };

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-20 text-white">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end">
          <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
            U2I Process Group
          </div>
          <div className="flex flex-wrap gap-6 text-sm font-bold">
            {["Qui sommes nous", "Secteurs", "Equipments", "References","Blog", "Contact"].map(
              (l) => (
                <a key={l} href="#" className="hover:text-primary">
                  {l}
                </a>
              ),
            )}
          </div>
        </div>

        <div className="grid gap-14 py-14 md:grid-cols-2">
          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.14em] text-white/50">
              Derniers événements
            </h4>
            <ul className="space-y-4">
              {[
                { t: "Participation à A3P Tunisie 2026", d: "08.07.2026" },
                { t: "Inauguration du nouvel atelier", d: "15.06.2026" },
              ].map((e) => (
                <li key={e.t}>
                  <a
                    href="#"
                    className="flex items-center justify-between border-b border-white/10 py-3 text-sm hover:text-primary"
                  >
                    <span className="font-semibold">{e.t}</span>
                    <span className="text-white/50">{e.d}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.14em] text-white/50">
              Dernières publications
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { t: "Rapport Annuel 2025", d: "01.07.2026", s: "PDF · 4.2 MB", img: atelier.url },
                { t: "Document Pharma 2026", d: "20.06.2026", s: "PDF · 12.5 MB", img: pharma.url },
              ].map((p) => (
                <a key={p.t} href="#" className="group block">
                  <div
                    className="mb-3 overflow-hidden rounded-lg"
                    style={{ aspectRatio: "4 / 3" }}
                  >
                    <img
                      src={p.img}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition group-hover:scale-105"
                    />
                  </div>
                  <div className="text-[11px] text-white/50">{p.d}</div>
                  <div className="text-sm font-bold">{p.t}</div>
                  <div className="text-[11px] text-white/50">{p.s}</div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 border-t border-white/10 py-12 sm:grid-cols-2 md:grid-cols-4">
          {[
            { h: "Sites évènementiels", l: ["U2I Pharma Day", "Tunisia Inox Expo"] },
            { h: "Réglementations", l: ["Qualité ISO 9001", "Normes ASME BPE"] },
            { h: "Besoin d'aide ?", l: ["Nous contacter", "FAQ"] },
            { h: "Autres sites", l: ["AXXAIR Partner", "Nitty Gritty"] },
          ].map((c) => (
            <div key={c.h}>
              <h5 className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-white/60">
                {c.h}
              </h5>
              <ul className="space-y-2 text-sm">
                {c.l.map((x) => (
                  <li key={x}>
                    <a href="#" className="text-white/80 hover:text-primary">
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 py-8 md:flex-row md:items-center">
          <div className="flex flex-wrap gap-6 text-xs text-white/60">
            {["Politique de confidentialité", "CGU", "Mentions légales", "Plan du site"].map(
              (l) => (
                <a key={l} href="#" className="hover:text-white">
                  {l}
                </a>
              ),
            )}
          </div>
          <div className="flex items-center gap-3">
            <span className="mr-2 text-xs text-white/50">+216 50 191 004</span>
            <a href="mailto:u2i@u2iprocess.com" className="inline-block hover:opacity-90 transition-opacity">
              <img src={emailIcon} alt="Email" className="h-5 w-auto object-contain inline-block" />
            </a>
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/20 transition hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} U2I Process — Univers Inox Industriel · Akouda, Sousse — Tunisie
          <span className="ml-4 inline-flex items-center gap-2">
            <Phone className="inline h-3 w-3 text-primary" /> +216 50 191 004
            <a href="mailto:u2i@u2iprocess.com" className="ml-3 inline-block hover:opacity-90 transition-opacity">
              <img src={emailIcon} alt="Email" className="h-4 w-auto object-contain inline-block" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
