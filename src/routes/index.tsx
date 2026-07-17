import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Search,
  Youtube,
  X,
} from "lucide-react";

import pharmaImage from "@/assets/hero-pharma.jpg";
import agroImage from "@/assets/hero-agro.jpg";
import chimieImage from "@/assets/sector-chimie.jpg";
import cosmetiqueImage from "@/assets/sector-cosmetique.jpg";
import mobilierImage from "@/assets/sector-mobilier.jpg";
import presentationImage from "@/assets/hero-pharma.jpg";
import installationImage from "@/assets/about-workshop.jpg";
import atelierImage from "@/assets/about-workshop.jpg";
import a3pImage from "@/assets/sector-interventions.jpg";
import axxairImage from "@/assets/hero-welding.jpg";
import slide1Image from "@/assets/20230329_100358.jpg";
import slide2Image from "@/assets/IMG_1416.png";
import slide3Image from "@/assets/WhatsApp Image 2026-07-08 at 1.16.12 PM - Copie.jpeg";
import slide4Image from "@/assets/sector-mobilier.jpg";
import presentationVideo from "@/assets/U2I video banner.mp4";
import logoImage from "@/assets/logo-u2i-removebg-preview.png";
import axxairLogoImage from "@/assets/partners/AXXAIR-logo.png";
import sanofiLogoImage from "@/assets/partners/Sanofi.png";
import hikmaLogoImage from "@/assets/partners/LOGO HIKMA.jpg";
import saiphLogoImage from "@/assets/partners/LOGO SAIPH.png";
import teriakLogoImage from "@/assets/partners/LOGO TERIAK.png";
import unimedLogoImage from "@/assets/partners/UNIMED LOGO .png";
import cevaLogoImage from "@/assets/partners/LOGO_CEVA_SANTE_ANIMALE.jpg";
import deliceLogoImage from "@/assets/partners/LOGO DELICE.jpg";
import referencesBgImage from "@/assets/axxair-1.jpg";
import cert1 from "@/assets/certif/Certificat-de-formation-Axxair-BOUKER-AMEN-ALLAH_page-0001_001-scaled.jpg";
import cert2 from "@/assets/certif/Certificat-de-formation-Axxair-IMED-MANFOUKH_page-0001_001-scaled.jpg";
import cert3 from "@/assets/certif/Certificat-de-formation-Axxair-NABIL-SLAMA_page-0001_001-scaled.jpg";
import cert4 from "@/assets/certif/CERTIFICATE-9K-UNIVERS-U2I_001.jpg";
import cert5 from "@/assets/certif/CERTIFICATE-Official-distributor_page-0001_001-scaled.jpg";
import cert6 from "@/assets/certif/IMG_8071.jpg";
import cert7 from "@/assets/certif/iso-1.png";
import cert8 from "@/assets/certif/UIT-officiel-distributeur-_page-0001_001-1.jpg";
import u2iUpdatedVideo from "@/assets/U2I Updated.mp4";

import equip1 from "@/assets/equipments/Endoscopie/20200910_114715 (1).jpg";
import equip2 from "@/assets/equipments/Machine de contrôle de gaz/IMG-20200912-WA0014.jpg";
import equip3 from "@/assets/equipments/Machine de coupe rectification/20200910_113443.jpg";
import equip4 from "@/assets/equipments/Machine de soudure orbitale/2-SATF-65ND_850.jpg";
import equip5 from "@/assets/equipments/Machine à commande numérique/20210222_093607.jpg";
import equip6 from "@/assets/equipments/Skid de DégraissageDécapagePassivation/20211014_090938.jpg";

const pharma = { url: pharmaImage };
const agro = { url: agroImage };
const chimie = { url: chimieImage };
const cosmetique = { url: cosmetiqueImage };
const mobilier = { url: mobilierImage };
const presentation = { url: presentationImage };
const installation = { url: installationImage };
const atelier = { url: atelierImage };
const a3p = { url: a3pImage };
const axxair = { url: axxairImage };
const axxairLogo = { url: axxairLogoImage };
const sanofiLogo = { url: sanofiLogoImage };
const hikmaLogo = { url: hikmaLogoImage };
const saiphLogo = { url: saiphLogoImage };
const teriakLogo = { url: teriakLogoImage };
const unimedLogo = { url: unimedLogoImage };
const cevaLogo = { url: cevaLogoImage };
const deliceLogo = { url: deliceLogoImage };
const logo = { url: logoImage };

export const Route = createFileRoute("/")({
  component: Index,
});

const HERO_SLIDES = [
  {
    label: "Tuyauterie & Soudure",
    title:
      "« Pourquoi elle  la précision continue de guider l'ambition de Groupe Univers Inox »",
    date: "08.07.2026",
    image: slide1Image,
  },
  {
    label: "Soudure Orbitale",
    title:
      "Partenaire officiel AXXAIR — une solution complète au service des industries à haute exigence.",
    date: "Depuis 2015",
    image: slide2Image,
  },
  {
    label: "Agroalimentaire",
    title:
      "Tuyauteries inox conçues pour les normes d'hygiène les plus strictes.",
    date: "Pharma · Agro · Chimie",
    image: slide3Image,
  },
  {
    label: "Nouvel Atelier",
    title:
      "Un nouvel atelier de préfabrication pour accélérer nos projets industriels.",
    date: "Akouda, Tunisie",
    image: slide4Image,
  },
] as const;



const SECTORS = [
  { tag: "Exigence Pharma", title: "Pharmaceutique", image: pharma.url },
  { tag: "Qualité Alimentaire", title: "Agroalimentaire", image: agro.url },
  { tag: "Procédés Sensibles", title: "Chimique", image: chimie.url },
  { tag: "Lignes Propres", title: "Cosmétique", image: cosmetique.url },
  { tag: "Sur Mesure", title: "Mobilier inox", image: mobilier.url },
] as const;

const EQUIPMENTS = [
  { title: "Endoscopie", image: equip1 },
  { title: "Contrôle de gaz", image: equip2 },
  { title: "Coupe rectification", image: equip3 },
  { title: "Soudure orbitale", image: equip4 },
  { title: "Commande numérique", image: equip5 },
  { title: "Skid Dégraissage", image: equip6 },
] as const;

const PARTNER_LOGOS = [
  { title: "Sanofi", image: sanofiLogo.url },
  { title: "Hikma", image: hikmaLogo.url },
  { title: "Saiph", image: saiphLogo.url },
  { title: "Teriak", image: teriakLogo.url },
  { title: "UNIMED", image: unimedLogo.url },
  { title: "CEVA Santé Animale", image: cevaLogo.url },
  { title: "Délice", image: deliceLogo.url },
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

const referencesBg = { url: referencesBgImage };

/* ----------------------------- Video Banner ----------------------------- */

function VideoBanner() {
  return (
    <section className="relative w-screen h-screen ml-[calc(-50vw+50%)] overflow-hidden">
      {/* Video background */}
      <video
        src={presentationVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#e0141c]/5 rounded-full blur-3xl" />

      <div className="absolute inset-0 flex items-center justify-start">
        <div className="w-full px-6 md:px-12">
          <div className="max-w-4xl mx-0">
            {/* Left accent border */}
            <div className="flex gap-8 items-stretch">
              <div className="w-1 bg-gradient-to-b from-[#e0141c] to-[#e0141c]/30 flex-shrink-0" />
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
                  L'exigence à chaque étape
                </h2>
                <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed mb-8 max-w-2xl">
                  Découvrez nos processus de bout en bout, garantissant la qualité, la précision et la sécurité de chaque intervention industrielle.
                </p>

                {/* Visual emphasis elements */}
                <div className="flex flex-wrap gap-4">
                  <div className="px-4 py-2 bg-[#e0141c]/10 border border-[#e0141c]/30 backdrop-blur-sm">
                    <p className="text-sm font-semibold text-[#e0141c]">Qualité Certifiée</p>
                  </div>
                  <div className="px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm">
                    <p className="text-sm font-semibold text-white/70">Précision Industrielle</p>
                  </div>
                  <div className="px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm">
                    <p className="text-sm font-semibold text-white/70">Sécurité Garantie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function Index() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[1000] focus:bg-primary focus:px-3 focus:py-2 focus:text-white"
      >
        Aller au contenu
      </a>
      <main id="main">
        <Hero />
        <Presentation />
        <Sectors />
        <Equipments />
        <References />
        <PartnersMarquee />
      </main>
    </>
  );
}

/* -------------------------------- Header -------------------------------- */

function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/85 backdrop-blur-xl" : "bg-transparent"
        }`}
    >
      {/* Utility bar */}
      <div
        className={`overflow-hidden border-b border-white/10 text-[11px] font-semibold text-white/80 transition-[max-height,padding] duration-300 ${scrolled ? "max-h-0 border-b-0 py-0" : "max-h-14 py-2.5"
          }`}
      >
        <div className="wrap flex items-center justify-end gap-7">
          <div className="mr-auto flex items-center gap-2">
            <Phone className="h-3.5 w-3.5" />
            <span className="font-bold tracking-wider">+216 50 191 004</span>
            <span className="text-white/20 mx-1">|</span>
            <Mail className="h-3.5 w-3.5 ml-1" />
            <span className="font-bold tracking-wider">u2i@u2iprocess.com</span>
            <span className="opacity-80 hidden sm:inline ml-2 border-l border-white/20 pl-4">
              Vous avez un nouveau projet ? N'hésitez pas à nous contacter !
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="opacity-80 hover:text-[#e0141c] hover:opacity-100 transition-colors">
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a href="#" aria-label="YouTube" className="opacity-80 hover:text-[#e0141c] hover:opacity-100 transition-colors">
              <Youtube className="h-3.5 w-3.5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="opacity-80 hover:text-[#e0141c] hover:opacity-100 transition-colors">
              <Linkedin className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className={`transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
        <div className="wrap flex items-center gap-10">
          <a href="#" aria-label="U2I" className="mr-4 shrink-0">
            <img
              src={logo.url}
              alt="Univers Inox"
              className={`w-auto rounded-md object-contain transition-all duration-300 ${scrolled ? "h-12 sm:h-14" : "h-14 sm:h-16"}`}
            />
          </a>

          <nav className="hidden flex-1 lg:block" aria-label="Menu principal">
            <ul className="flex gap-8 [&:hover_a]:opacity-50">
              {[
                { label: "Qui sommes-nous", href: "/about" },
                { label: "Secteurs", href: "#secteurs" },
                { label: "Equipements", href: "#equipements" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm font-bold text-white transition-opacity hover:!opacity-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="hidden items-center gap-7 lg:flex">
            {["References", "Blog", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="text-sm font-bold text-white transition-opacity hover:opacity-70"
                >
                  {l}
                </a>
              </li>
            ))}
            <li>
            </li>
          </ul>

          <button
            className="ml-auto grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white lg:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-[60] w-4/5 max-w-sm bg-black backdrop-blur-xl px-8 pt-24 pb-8 transition-transform duration-300 lg:hidden border-l border-white/10 ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <button
          className="absolute top-6 right-6 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white"
          onClick={() => setOpen(false)}
          aria-label="Fermer le menu"
        >
          <X className="h-5 w-5" />
        </button>

        <ul className="flex flex-col gap-6 pt-4">
          {[
            { label: "Qui sommes-nous", href: "/about" },
            { label: "Secteurs", href: "#secteurs" },
            { label: "Equipements", href: "#equipements" },
            { label: "References", href: "#references" },
            { label: "Blog", href: "#blog" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-bold text-white hover:text-[#e0141c] transition-colors block py-1 border-b border-white/10"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.header>
  );
}

/* ----------------------------- Stat Card ----------------------------- */

function useCountUp(target: number, duration = 1400, delay = 0) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let raf: number;
    const timeout = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // ease-out-expo
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(eased * target));
        if (progress < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => { clearTimeout(timeout); cancelAnimationFrame(raf); };
  }, [target, duration, delay]);
  return count;
}

function StatCard({
  value, suffix, label, icon, delay,
}: {
  value: string; suffix: string; label: string; icon: React.ReactNode; delay: number;
}) {
  const num = useCountUp(parseInt(value, 10), 1600, 400 + delay);
  return (
    <div
      className="stat-card rounded-[1.75rem] border border-white/10 bg-black/25 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-[#e0141c]/30"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#e0141c]/15 text-[#e0141c]">
          {icon}
        </span>
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
          {label}
        </p>
      </div>

      <div className="mt-4 flex items-baseline gap-2" style={{ fontFamily: "var(--font-display)" }}>
        <span className="text-[2.4rem] font-black leading-none text-white">{num}</span>
        <span className="text-xl font-black text-[#e0141c]">{suffix}</span>
      </div>

      <style>{`
        .stat-card {
          animation: statIn 0.7s cubic-bezier(0.16,1,0.3,1) both;
        }
        @keyframes statIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

/* ----------------------------- Bottom Stats Bar ----------------------------- */

function BottomStatsBar() {
  const stats = [
    { value: "250+", title: "Clients", subtitle: "satisfaits" },
    { value: "120+", title: "Projets", subtitle: "réalisés" },
    { value: "15+", title: "Années", subtitle: "d'expérience" },
    { value: "98%", title: "Taux", subtitle: "de satisfaction" },
  ];

  return (
    <div className="w-full border-t border-white/10 bg-black/70 backdrop-blur-xl hidden md:block z-20 relative">
      <div className="wrap">
        <div className="grid grid-cols-4 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="group relative py-6 px-4 lg:px-8 flex flex-col xl:flex-row xl:items-center gap-2 xl:gap-6 overflow-hidden">
              {/* Subtle hover background sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e0141c]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -translate-x-full group-hover:translate-x-full ease-in-out" />

              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#e0141c] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="text-4xl lg:text-5xl font-black text-white tracking-tighter drop-shadow-lg transition-transform duration-500 group-hover:-translate-y-1">
                {stat.value}
              </div>
              <div className="flex-1">
                <div className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 group-hover:text-[#e0141c] transition-colors duration-300">
                  {stat.title}
                </div>
                <div className="text-xs lg:text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                  {stat.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* --------------------------------- Hero --------------------------------- */

function Hero() {
  const [i, setI] = useState(0);
  const total = HERO_SLIDES.length;
  const SLIDE_DURATION = 5000;

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setI((p) => (p + 1) % total);
    }, SLIDE_DURATION);
    return () => window.clearTimeout(timeout);
  }, [i, total]);

  return (
    <section
      className="hero-section relative overflow-hidden bg-black"
      style={{ height: "100svh", minHeight: 640 }}
    >
      {/* ── Grain texture overlay ── */}
      <div className="hero-grain" aria-hidden="true" />

      {/* ── Background Images ── */}
      {HERO_SLIDES.map((s, idx) => (
        <motion.img
          key={s.title}
          src={s.image}
          alt=""
          initial={idx === 0 ? { y: 40, scale: 1.05, opacity: 0 } : { opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: idx === i ? 1 : 0 }}
          transition={{
            opacity: { duration: 1.1, ease: "easeInOut" },
            y: { duration: 1.5, ease: "easeOut" },
            scale: { duration: 1.5, ease: "easeOut" }
          }}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ zIndex: idx === i ? 10 : 0 }}
          loading={idx === 0 ? "eager" : "lazy"}
        />
      ))}

      {/* ── Cinematic gradient overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      {/* ── Red diagonal accent bar ── */}
      <div className="hero-red-bar" aria-hidden="true" />

      {/* ── Main content ── */}
      <div className="wrap relative z-10 flex h-full items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="mb-8 text-white"
            style={{
              fontSize: "clamp(3rem, 7vw, 5.8rem)",
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: "-0.025em",
            }}
          >
            Pourquoi la <span className="text-[#e0141c]">précision</span><br />
            continue de guider l'ambition de<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Groupe Univers Inox</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row sm:items-center gap-5"
          >
            <a
              href="#responsabilité"
              className="group inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-[#e0141c]"
            >
              Découvrir
              <span className="grid h-10 w-10 place-items-center rounded-full border border-white/30 transition-all duration-300 group-hover:border-[#e0141c] group-hover:bg-[#e0141c]">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Bottom Section (Marquee + Stats) ── */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col">

        {/* Partner Marquee */}
        <div className="border-t border-white/[0.05] py-4 overflow-hidden">
          <div className="flex whitespace-nowrap animate-hero-marquee">
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-8 sm:mx-12 lg:mx-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <img src={logo.image} alt={logo.title} className="h-8 md:h-10 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>

        <BottomStatsBar />

      </div>

      <style>{`
        .animate-hero-marquee {
          animation: heroMarquee 30s linear infinite;
        }
        @keyframes heroMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-25%); }
        }
        /* Grain noise overlay */
        .hero-grain {
          position: absolute; inset: 0; z-index: 5; pointer-events: none;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 200px 200px;
          mix-blend-mode: overlay;
        }

        /* Red diagonal accent bar */
        .hero-red-bar {
          position: absolute; top: 0; bottom: 0; left: 36%; z-index: 4; pointer-events: none;
          width: 3px;
          background: linear-gradient(to bottom, transparent 5%, #e0141c 25%, #e0141c 75%, transparent 95%);
          opacity: 0.45;
          transform: skewX(-8deg);
        }
      `}</style>
    </section>
  );
}


/* ------------------------------ Presentation ----------------------------- */

function Presentation() {
  const [isInView, setIsInView] = useState(false);
  const desktopVideoRef = useRef<HTMLVideoElement | null>(null);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const section = document.getElementById("presentation");
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry?.isIntersecting ?? false);
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    [desktopVideoRef.current, mobileVideoRef.current].forEach((video) => {
      if (!video) return;

      if (isInView) {
        video.currentTime = 0;
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    });
  }, [isInView]);

  return (
    <section id="presentation" className="section-paper overflow-hidden relative">
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative group mx-auto w-full max-w-md lg:max-w-none hidden lg:block"
          >
            {/* Decorative background blob */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#e0141c]/20 to-transparent rounded-[2rem] blur-2xl opacity-50 transition-opacity duration-500 group-hover:opacity-70" />

            <div className="relative overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src={presentationImage}
                alt="Univers Inox Industriel"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 border-[3px] border-white/20 pointer-events-none mix-blend-overlay" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-white p-5 rounded-2xl shadow-xl border border-black/5 animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="flex flex-col justify-center items-center h-12 w-12 lg:h-14 lg:w-14 bg-[#e0141c] text-white rounded-full font-black text-lg lg:text-xl">
                  10+
                </div>
                <div>
                  <div className="text-xs lg:text-sm font-bold text-neutral-900 leading-tight">Années</div>
                  <div className="text-xs lg:text-sm font-medium text-neutral-500 leading-tight">d'expérience</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:py-10 mt-12 lg:mt-0"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="block h-px w-8 lg:w-10 bg-[#e0141c]" />
              <h3 className="text-xs lg:text-sm font-bold uppercase tracking-widest text-[#e0141c] italic">
                Qui sommes nous
              </h3>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6 tracking-tight">
              Présentation
            </h2>

            <div className="h-1 w-16 bg-[#e0141c] mb-8" />

            <div className="space-y-6 text-sm md:text-base text-neutral-600 leading-relaxed font-medium">
              <p>
                Fondée en 2015, la société <strong className="text-neutral-900 font-bold">Univers inox industriel</strong> est basée à Akouda une ville située à quelques kilomètres au nord-ouest de Sousse en Tunisie. Nous sommes spécialisés en chaudronnerie, travaux de soudure et tuyauterie industrielle spécialement dans les domaines de haute exigence notamment le secteurs pharmaceutique, alimentaires et chimique.
              </p>
              <p>
                Notre personnel constitué d'équipe d'ingénieurs et des techniciens spécialisés et expérimentés issue d'une expérience de plus que 10 ans dans le domaine pharmaceutique, peut contrôler toutes les phases de la réalisation d'un projet : les études, la préfabrication en atelier, les travaux sur site, la mise en service, la qualification de l'installation, la maintenance sur site. Le personnel U2I spécialiste de la tuyauterie process est avant tout à l'écoute des besoins spécifiques de ses clients.
              </p>
            </div>

            <div className="mt-8 mb-8 lg:hidden">
              <div className="relative mx-auto w-full max-w-sm">
                <div className="relative overflow-hidden shadow-xl">
                  <video
                    ref={mobileVideoRef}
                    src={presentationVideo}
                    muted
                    playsInline
                    loop
                    preload="metadata"
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                  <div className="absolute inset-0 border-[3px] border-white/20 pointer-events-none mix-blend-overlay" />
                </div>

                <div className="absolute bottom-0 sm:-bottom-4 right-0 sm:-right-4 bg-white p-4 rounded-2xl shadow-lg border border-black/5">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col justify-center items-center h-11 w-11 bg-[#e0141c] text-white rounded-full font-black text-base">
                      10+
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-neutral-900 leading-tight">Années</div>
                      <div className="text-[11px] font-medium text-neutral-500 leading-tight">d'expérience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/about" className="btn btn-red px-8 py-3.5 shadow-lg shadow-red-500/25 group">
                Lire plus <span className="ml-1 tracking-normal font-normal transition-transform group-hover:translate-x-1">»</span>
              </a>
              <a href="#" className="btn btn-red px-8 py-3.5 shadow-lg shadow-red-500/25">
                Télécharger brochure
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}

/* -------------------------------- Sectors ------------------------------- */

function Sectors() {
  return (
    <section id="secteurs" className="bg-white relative py-24 overflow-hidden">
      {/* Decorative White Theme Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neutral-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#e0141c]/[0.03] rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="wrap relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="block h-px w-8 bg-[#e0141c]" />
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#e0141c] italic">
              Savoir-Faire
            </h3>
            <span className="block h-px w-8 bg-[#e0141c]" />
          </div>
          <h2 className="text-neutral-950 font-black mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Nos Domaines d'Expertise
          </h2>
          <p className="max-w-2xl text-neutral-500 text-lg font-medium">
            Découvrez nos solutions industrielles adaptées à chaque secteur, alliant haute précision, respect des normes et innovation constante.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >

          {/* Main Video Block (Spans 2 columns & 2 rows on large screens) */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="relative overflow-hidden rounded-[2.5rem] bg-black shadow-2xl group md:col-span-2 md:row-span-2 flex flex-col justify-end min-h-[400px] lg:min-h-0"
          >
            <video
              src={u2iUpdatedVideo}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            <div className="absolute top-6 left-6 flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e0141c] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e0141c]"></span>
              </span>
              <span className="text-white text-[11px] font-bold uppercase tracking-wider bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                U2I en action
              </span>
            </div>

            <div className="relative z-10 p-8 md:p-12">
              <h3 className="text-white font-black text-3xl md:text-5xl mb-4 leading-tight">
                L'excellence <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">industrielle</span>
              </h3>
              <div className="flex items-center gap-4">
                <a href="/secteurs" className="inline-flex items-center gap-2 bg-[#e0141c] text-white px-6 py-3 rounded-full font-bold text-sm transition-all hover:bg-[#c01018] hover:shadow-lg hover:-translate-y-0.5">
                  Voir nos réalisations
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Sector Cards */}
          {SECTORS.map((s) => (
            <motion.a
              variants={{ hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}
              key={s.title}
              href="/secteurs"
              className="group relative overflow-hidden rounded-[2rem] bg-white border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col p-2 h-[300px] sm:h-[320px]"
            >
              <div className="relative w-full flex-1 rounded-[1.5rem] overflow-hidden shrink-0">
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-black text-neutral-900 uppercase tracking-widest shadow-sm">
                  {s.tag}
                </div>
              </div>

              <div className="p-4 sm:p-5 flex items-center justify-between shrink-0">
                <h4 className="text-neutral-900 font-bold text-[1.15rem] leading-tight transition-colors group-hover:text-[#e0141c]">
                  {s.title}
                </h4>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-400 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-[#e0141c] group-hover:border-[#e0141c] group-hover:text-white group-hover:shadow-md ml-2">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 group-hover:rotate-45" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

/* ------------------------------ Equipments ------------------------------ */

function Equipments() {
  return (
    <section id="equipements" className="section-dark overflow-hidden relative py-24">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-[#e0141c]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-[#e0141c]/5 blur-[100px] pointer-events-none" />

      <div className="wrap mb-16 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-3">
            <span className="block h-px w-8 bg-[#e0141c]" />
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#e0141c] italic">
              Haute Précision
            </h3>
            <span className="block h-px w-8 bg-[#e0141c]" />
          </div>
          <h2 className="text-white font-black mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Notre Parc Machines
          </h2>
          <p className="max-w-2xl text-white/60 text-sm md:text-base font-medium">
            Découvrez nos équipements de dernière génération, conçus pour répondre aux exigences les plus strictes de l'industrie avec une précision absolue.
          </p>
        </div>
      </div>

      <div className="wrap relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {EQUIPMENTS.map((eq, i) => (
            <motion.article
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_10px_40px_rgba(224,20,28,0.15)]"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={eq.image}
                alt={eq.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="transform md:translate-y-8 md:transition-transform md:duration-500 md:group-hover:translate-y-0">
                  <div className="w-10 h-10 mb-4 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white group-hover:bg-[#e0141c] group-hover:border-[#e0141c] transition-colors duration-500">
                    <span className="font-mono text-xs font-bold">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-tight mb-2 drop-shadow-md">
                    {eq.title}
                  </h3>
                  <div className="h-auto opacity-100 md:h-0 md:opacity-0 md:overflow-hidden md:transition-all md:duration-500 md:group-hover:h-8 md:group-hover:opacity-100">
                    <p className="text-[#e0141c] text-sm mt-2 flex items-center gap-2 font-bold uppercase tracking-wider">
                      Découvrir <ArrowUpRight className="h-4 w-4" />
                    </p>
                  </div>
                </div>
              </div>

              {/* Highlight line on hover */}
              <div className="absolute bottom-0 left-0 h-1 bg-[#e0141c] w-0 transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-14 flex justify-center">
          <a href="/equipements" className="group flex items-center gap-2 rounded-full bg-[#e0141c] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#c01118] hover:shadow-[0_0_20px_rgba(224,20,28,0.4)]">
            Voir tout notre parc machines
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#e0141c] transition-transform group-hover:translate-x-1">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Careers -------------------------------- */

function References() {
  return (
    <section id="carrières" className="relative overflow-hidden py-16 md:py-20">
      <img
        src={referencesBg.url}
        alt="AXXAIR background"
        loading="lazy"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80 blur-sm"
      />

      <div className="relative wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-white/60">
            Références</p>
          <div className="flex justify-center mb-6">
            <img
              src={axxairLogo.url}
              alt="AXXAIR"
              loading="lazy"
              className="h-20 w-auto object-contain"
            />
          </div>
          <h2
            className="mb-4 text-white"
            style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}
          >
            Partenaire officiel AXXAIR depuis 2015
          </h2>
        </motion.div>

        <div className="mt-14 text-center">
          <h3 className="mb-6 text-xl font-semibold uppercase tracking-[0.22em] text-white/80">
            Partenaires
          </h3>
          <div className="overflow-hidden rounded-[2rem] p-4">
            <div className="marquee">
              <div className="marquee-track flex items-center gap-6">
                {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((partner, idx) => (
                  <div
                    key={`${partner.title}-${idx}`}
                    className="flex h-24 min-w-[160px] items-center justify-center rounded-3xl bg-white/10 p-4 shadow-inner shadow-black/10"
                  >
                    <img
                      src={partner.image}
                      alt={partner.title}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Header -------------------------------- */

function PartnersMarquee() {
  return (
    <section className="section-paper">
      <div className="wrap">
        <h3 className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.2em] text-black/40">
          Certifications
        </h3>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              variants={{ hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}
              key={cert.title}
              className="overflow-hidden bg-white shadow-sm"
            >
              <img
                src={cert.image}
                alt={cert.title}
                loading="lazy"
                className="h-64 w-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-14 flex justify-center">
          <a href="/references" className="group flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition-all hover:bg-neutral-800 hover:shadow-lg">
            Découvrir toutes nos références
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#e0141c] text-white transition-transform group-hover:translate-x-1">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Footer -------------------------------- */

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black pt-20 text-white">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end">
          <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
            U2I Process Group
          </div>
          <div className="flex flex-wrap gap-6 text-sm font-bold">
            {["Qui sommes nous", "Secteurs", "Equipments", "References", "Blog", "Contact"].map(
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
            <span className="mr-2 text-xs text-white/50">
              +216 50 191 004 · u2i@u2iprocess.com
            </span>
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
            <Mail className="ml-3 inline h-3 w-3 text-primary" /> u2i@u2iprocess.com
          </span>
        </div>
      </div>
    </footer>
  );
}
