import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import referencesBgImage from "@/assets/axxair-1.jpg";
import axxairLogoImage from "@/assets/partners/AXXAIR-logo.png";
import sanofiLogoImage from "@/assets/partners/Sanofi.png";
import hikmaLogoImage from "@/assets/partners/LOGO HIKMA.jpg";
import saiphLogoImage from "@/assets/partners/LOGO SAIPH.png";
import teriakLogoImage from "@/assets/partners/LOGO TERIAK.png";
import unimedLogoImage from "@/assets/partners/UNIMED LOGO .png";
import cevaLogoImage from "@/assets/partners/LOGO_CEVA_SANTE_ANIMALE.jpg";
import deliceLogoImage from "@/assets/partners/LOGO DELICE.jpg";
import logoBerg from "@/assets/partners/Berg-Life-Sciences-295x300.jpg";
import logoEnex from "@/assets/partners/Enex-we-know-how-logo-retina-300x262.png";
import logoDarEssaydali from "@/assets/partners/LOGO-DAR_ESSAYDALI_94d6073d8c-1-300x280.png";
import logoMedika from "@/assets/partners/LOGO-MEDIKA-300x269.png";
import logoMedis from "@/assets/partners/LOGO-MediS-300x264.png";
import logoSteripharm from "@/assets/partners/LOGO-STERIPHARM-300x268.png";
import logoPierreFabre from "@/assets/partners/Pierre-fabre-logo-1-300x288.png";
import logoCogia from "@/assets/partners/cogia-logo.png";
import logoLmp from "@/assets/partners/logo-LMP-291x300.jpg";
import logoMeva from "@/assets/partners/logo-MEVA-150x150.jpg";
import logoPharmaDearm from "@/assets/partners/logo-PHARMA-DEARM-296x300.png";
import logoAdwya from "@/assets/partners/logo-adwya--300x291.png";
import logoThera from "@/assets/partners/logo-thera-400-150x150.png";
import logoOpella from "@/assets/partners/opella-1-300x278.png";
import logoSartorius from "@/assets/partners/sartorius-logo-vector-2-300x288.png";
import logoTetrapak from "@/assets/partners/tetrapak-logo-screen-400-150x150.png";
import logoWinthrop from "@/assets/partners/winthrop-1-300x296.jpg";
import logoBwt from "@/assets/partners/BWT.png";
import logoAdvancs from "@/assets/partners/LOGO-ADVANCS-150x150.jpeg";
import logoDorcas from "@/assets/partners/dorcas-logo-300x225.png";

import cert1 from "@/assets/certif/Certificat-de-formation-Axxair-BOUKER-AMEN-ALLAH_page-0001_001-scaled.jpg";
import cert2 from "@/assets/certif/Certificat-de-formation-Axxair-IMED-MANFOUKH_page-0001_001-scaled.jpg";
import cert3 from "@/assets/certif/Certificat-de-formation-Axxair-NABIL-SLAMA_page-0001_001-scaled.jpg";
import cert4 from "@/assets/certif/CERTIFICATE-9K-UNIVERS-U2I_001.jpg";
import cert5 from "@/assets/certif/CERTIFICATE-Official-distributor_page-0001_001-scaled.jpg";
import cert6 from "@/assets/certif/IMG_8071.jpg";
import cert7 from "@/assets/certif/iso-1.png";
import cert8 from "@/assets/certif/UIT-officiel-distributeur-_page-0001_001-1.jpg";

export const Route = createFileRoute("/references")({
  component: ReferencesPage,
});

const PARTNER_LOGOS = [
  { title: "Sanofi", image: sanofiLogoImage },
  { title: "Hikma", image: hikmaLogoImage },
  { title: "Saiph", image: saiphLogoImage },
  { title: "Teriak", image: teriakLogoImage },
  { title: "UNIMED", image: unimedLogoImage },
  { title: "CEVA Santé Animale", image: cevaLogoImage },
  { title: "Délice", image: deliceLogoImage },
  { title: "Berg Life Sciences", image: logoBerg },
  { title: "Enex", image: logoEnex },
  { title: "Dar Essaydali", image: logoDarEssaydali },
  { title: "Medika", image: logoMedika },
  { title: "MediS", image: logoMedis },

  { title: "Cogia", image: logoCogia },
  { title: "LMP", image: logoLmp },
  { title: "MEVA", image: logoMeva },
  { title: "Pharma Dearm", image: logoPharmaDearm },
  { title: "Adwya", image: logoAdwya },
  { title: "Thera", image: logoThera },
  { title: "Opella", image: logoOpella },
  { title: "Sartorius", image: logoSartorius },
  { title: "Tetrapak", image: logoTetrapak },
  { title: "Winthrop", image: logoWinthrop },
  { title: "BWT", image: logoBwt },
  { title: "Advancs", image: logoAdvancs },
  { title: "Dorcas", image: logoDorcas },
  { title: "Steripharm", image: logoSteripharm },
  { title: "Pierre Fabre", image: logoPierreFabre },
] as const;

const CERTIFICATIONS = [
  { title: "Certificat Axxair - Bouker Amen Allah", image: cert1 },
  { title: "Certificat Axxair - Imed Manfoukh", image: cert2 },
  { title: "Certificat Axxair - Nabil Slama", image: cert3 },
  { title: "Certificat 9K Univers U2I", image: cert4 },
  { title: "Official Distributor Certificate", image: cert5 },
  { title: "Certification IMG_8071", image: cert6 },
  { title: "ISO 9001", image: cert7 },
  { title: "Official Distributor UIT", image: cert8 },
] as const;

function ReferencesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden" style={{ height: "340px" }}>
        <img src={referencesBgImage} alt="Nos Références" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        <div className="wrap relative z-10 flex h-full flex-col justify-center pt-24">
          <div className="mb-4 flex items-center gap-2 text-sm text-white/50">
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#e0141c]">Références</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#e0141c]">Nos Partenaires & Certifications</span>
          </div>
          <h1 className="text-white font-black" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: 1.05, letterSpacing: "-0.025em" }}>
            Références
          </h1>
        </div>
      </section>

      <div className="bg-[#111] border-b border-white/10 py-3">
        <div className="wrap flex items-center gap-2 text-sm text-white/50">
          <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
            Accueil
          </Link>
          <span className="text-white/20">›</span>
          <span className="text-[#e0141c] font-semibold">Références</span>
        </div>
      </div>

      <main>
        {/* Partenaires */}
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d] via-[#0d0d11] to-[#060607]" />
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[560px] h-[560px] rounded-full bg-[#e0141c]/10 blur-3xl opacity-60" />
          <div className="relative wrap">
            <div className="grid gap-10 lg:grid-cols-2 items-start">
              <div className="space-y-8">
                <span className="inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#e0141c]">
                  Partenaires
                </span>
                <h2 className="text-4xl md:text-5xl font-black tracking-[-0.04em] text-white">
                  Nos partenaires aux côtés des plus grands acteurs industriels.
                </h2>
                <p className="max-w-3xl text-white/70 leading-8">
                  Une sélection de partenaires leaders qui nous accompagnent sur chaque projet, du design à la livraison, avec fiabilité, expertise et conformité.
                </p>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4 [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)] pb-8 pt-4">
                  {PARTNER_LOGOS.slice(0, 12).map((partner, idx) => (
                    <div
                      key={`left-${idx}`}
                      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 sm:p-6 h-32 sm:h-36 flex items-center justify-center transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(224,20,28,0.18)] w-full"
                    >
                      <img
                        src={partner.image}
                        alt={partner.title}
                        loading="lazy"
                        className="h-[60px] md:h-[70px] w-full object-contain grayscale opacity-70 transition duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1 bg-[#e0141c] w-0 group-hover:w-full transition-all duration-500" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 h-fit [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)] pb-8 pt-4">
                {PARTNER_LOGOS.slice(12).map((partner, idx) => (
                  <div
                    key={`right-${idx}`}
                    className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 sm:p-6 h-32 sm:h-36 flex items-center justify-center transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(224,20,28,0.18)] w-full"
                  >
                    <img
                      src={partner.image}
                      alt={partner.title}
                      loading="lazy"
                      className="h-[60px] md:h-[70px] w-full object-contain grayscale opacity-70 transition duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-[#e0141c] w-0 group-hover:w-full transition-all duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications (match main page layout) */}
        <section className="section-paper py-20">
          <div className="wrap">
            <div className="mx-auto max-w-3xl text-center mb-10 md:mb-16">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-black/40">Certifications</h3>
              <p className="text-base leading-relaxed text-slate-600">Nos attestations officielles, formations et homologations qui garantissent la conformité et la qualité de nos équipements.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6 md:gap-8">
              {/* Featured certificate */}
              <div className="group relative">
                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-lg transition-all duration-700 hover:shadow-[0_12px_36px_rgba(224,20,28,0.14)] hover:border-[#e0141c]/40 h-full min-h-[420px] lg:min-h-0">
                  <img src={CERTIFICATIONS[0].image} alt={CERTIFICATIONS[0].title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                  <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center"><span className="text-xs font-black text-white/70 font-mono">01</span></div>
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#e0141c] font-bold mb-2">Certification Officielle</p>
                    <h3 className="text-white font-black text-2xl md:text-3xl leading-tight mb-4">{CERTIFICATIONS[0].title}</h3>
                    <div className="flex items-center gap-3"><div className="h-px flex-1 bg-white/20" /><span className="text-white/40 text-xs uppercase tracking-wider">Visuel</span></div>
                  </div>
                </div>
              </div>

              {/* Masonry / staggered grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[220px]">
                {CERTIFICATIONS.slice(1).map((cert, idx) => {
                  const i = idx + 1;
                  const isTall = idx === 1 || idx === 4;
                  return (
                    <div key={cert.title} className={`group relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#e0141c]/40 hover:shadow-[0_20px_40px_rgba(224,20,28,0.15)] ${isTall ? "row-span-2" : "row-span-1"}`}>
                      <img src={cert.image} alt={cert.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center"><span className="text-[10px] font-black text-white/70 font-mono">{String(i + 1).padStart(2, '0')}</span></div>
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#e0141c] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-lg shadow-[#e0141c]/40"><ArrowUpRight className="h-3.5 w-3.5 text-white" /></div>
                      <div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                        <p className="text-[9px] uppercase tracking-[0.25em] text-[#e0141c] font-bold mb-1">Certification</p>
                        <h4 className="text-white font-bold text-xs md:text-sm leading-tight line-clamp-2">{cert.title}</h4>
                      </div>
                      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#e0141c] to-transparent w-0 group-hover:w-full transition-all duration-500" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
