import React, { useCallback, useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
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
import slide3Image from "@/assets/WhatsApp Image 2026-07-08 at 1.13.25 PM.jpeg";
import slide4Image from "@/assets/WhatsApp Image 2026-07-08 at 1.13.24 PM.jpeg";
import heroVideo from "@/assets/hero section vd.mp4";
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
import expertiseBgImage from "@/assets/ChatGPT_Image_9_juil._2026__08_08_05-removebg-preview.png";
import expertiseBgImage2 from "@/assets/redredred-removebg-preview.png";

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
      "« Pourquoi la précision continue de guider l'ambition de Groupe Univers Inox »",
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
    <header
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
    </header>
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
      className="stat-card group relative flex flex-col justify-center gap-1.5 px-8 py-4 cursor-default select-none"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Red top accent line */}
      <span className="stat-accent absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#e0141c] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon + label row */}
      <div className="flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/8 text-[#e0141c]">
          {icon}
        </span>
        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/35 transition-colors duration-200 group-hover:text-white/60">
          {label}
        </span>
      </div>

      {/* Number */}
      <div className="flex items-baseline gap-0.5" style={{ fontFamily: "var(--font-display)" }}>
        <span
          className="text-[2.2rem] font-black leading-none text-white transition-colors duration-200 group-hover:text-[#e0141c]"
        >
          {num}
        </span>
        <span className="text-xl font-black text-[#e0141c]">{suffix}</span>
      </div>

      {/* Right divider (except last) */}
      <span className="stat-divider absolute right-0 inset-y-3 w-px bg-white/8" />

      <style>{`
        .stat-card {
          animation: statIn 0.7s cubic-bezier(0.16,1,0.3,1) both;
        }
        @keyframes statIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .stat-card:last-child .stat-divider { display: none; }
      `}</style>
    </div>
  );
}

/* --------------------------------- Hero --------------------------------- */

function Hero() {
  const [i, setI] = useState(0);
  const [videoEnded, setVideoEnded] = useState(false);
  const [progress, setProgress] = useState(0);
  const total = HERO_SLIDES.length;
  const SLIDE_DURATION = 6500;

  const go = useCallback(
    (dir: 1 | -1) => {
      setI((p) => (p + dir + total) % total);
      setProgress(0);
    },
    [total],
  );

  useEffect(() => {
    if (!videoEnded) return;
    setProgress(0);
    const startTime = Date.now();
    const raf = { id: 0 };
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        raf.id = requestAnimationFrame(tick);
      } else {
        setI((p) => (p + 1) % total);
        setProgress(0);
      }
    };
    raf.id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.id);
  }, [i, total, videoEnded]);

  return (
    <section
      className="hero-section relative overflow-hidden bg-black"
      style={{ height: "100svh", minHeight: 640 }}
    >
      {/* ── Grain texture overlay ── */}
      <div className="hero-grain" aria-hidden="true" />

      {/* ── Video ── */}
      <video
        src={heroVideo}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${videoEnded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        autoPlay
        muted
        playsInline
        onEnded={() => setVideoEnded(true)}
      />

      {/* ── Slide images ── */}
      {HERO_SLIDES.map((s, idx) => (
        <img
          key={s.title}
          src={s.image}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1100ms] ${videoEnded && idx === i ? "opacity-100" : "opacity-0"
            }`}
          loading={idx === 0 ? "eager" : "lazy"}
        />
      ))}

      {/* ── Cinematic gradient overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      {/* ── Red diagonal accent bar ── */}
      <div className="hero-red-bar" aria-hidden="true" />

      {/* ── Vertical side label ── */}
      <div className="absolute right-8 top-1/2 z-20 hidden -translate-y-1/2 lg:flex flex-col items-center gap-4">
        <div
          className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          U2I Process Group · Tunisie
        </div>
        <div className="h-16 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>

      {/* ── Main content ── */}
      <div className="wrap relative z-10 flex h-full flex-col justify-center">
        <div key={i} className="max-w-3xl hero-content">

          {/* Category chip */}
          <div className="hero-chip mb-6 flex items-center gap-3">
            <span className="block h-px w-8 bg-[#e0141c]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#e0141c]">
              {HERO_SLIDES[i].label}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="hero-title mb-8 text-white"
            style={{
              fontSize: "clamp(2.6rem, 6.5vw, 5rem)",
              lineHeight: 1.02,
              fontWeight: 800,
              letterSpacing: "-0.025em",
            }}
          >
            {HERO_SLIDES[i].title}
          </h1>

          {/* Date + CTA */}
          <div className="hero-cta flex items-center gap-5">
            <span className="rounded-sm bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70 backdrop-blur">
              {HERO_SLIDES[i].date}
            </span>
            <a
              href="#responsabilité"
              className="group flex items-center gap-2 text-sm font-bold text-white transition hover:text-[#e0141c]"
            >
              Découvrir
              <span className="grid h-10 w-10 place-items-center rounded-full border border-white/30 transition-all duration-300 group-hover:border-[#e0141c] group-hover:bg-[#e0141c]">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom bar: stats + controls ── */}
      <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/[0.08] bg-black/40 backdrop-blur-sm">
        <div className="wrap flex items-stretch">
          {/* Stats */}
          <div className="hidden md:flex mr-auto">
            {[
              {
                value: "10", suffix: "+", label: "Années d'expérience",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
              },
              {
                value: "200", suffix: "+", label: "Projets réalisés",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                ),
              },
              {
                value: "3", suffix: "", label: "Secteurs clés",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                  </svg>
                ),
              },
            ].map((s, idx) => (
              <StatCard key={s.label} value={s.value} suffix={s.suffix} label={s.label} icon={s.icon} delay={idx * 120} />
            ))}
          </div>

          {/* Slide progress + arrows */}
          <div className="flex items-center gap-6 py-4 md:py-0 ml-auto md:ml-0">
            <div className="flex items-center gap-4">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { setI(idx); setProgress(0); }}
                  aria-label={`Slide ${idx + 1}`}
                  className="relative h-0.5 rounded-full bg-white/20 overflow-hidden transition-all duration-300"
                  style={{ width: idx === i ? 64 : 24 }}
                >
                  {idx === i && (
                    <span
                      className="absolute inset-y-0 left-0 bg-[#e0141c] rounded-full"
                      style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
                    />
                  )}
                </button>
              ))}
              <span className="text-xs font-bold text-white/40">
                {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>

            <div className="flex divide-x divide-white/10 border-l border-white/10">
              <button
                onClick={() => go(-1)}
                aria-label="Précédent"
                className="grid h-14 w-14 place-items-center text-white/60 transition hover:bg-white/10 hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Suivant"
                className="grid h-14 w-14 place-items-center text-white/60 transition hover:bg-white/10 hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Animated scroll indicator ── */}
      <div className="absolute left-1/2 bottom-24 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <div className="h-10 w-px overflow-hidden bg-white/10">
          <div className="hero-scroll-line h-full w-full bg-white/50" />
        </div>
      </div>

      <style>{`
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

        /* Staggered content entrance animations */
        .hero-content { animation: heroIn 1s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-chip    { animation: heroIn 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-title   { animation: heroIn 0.9s 0.28s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-cta     { animation: heroIn 0.8s 0.5s cubic-bezier(0.16,1,0.3,1) both; }

        @keyframes heroIn {
          from { opacity: 0; transform: translateY(32px) skewY(1.5deg); }
          to   { opacity: 1; transform: translateY(0) skewY(0deg); }
        }

        /* Scroll line drop animation */
        .hero-scroll-line { animation: scrollDrop 2.2s ease-in-out infinite; }
        @keyframes scrollDrop {
          0%   { transform: translateY(-100%); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
      `}</style>
    </section>
  );
}


/* ------------------------------ Presentation ----------------------------- */

function Presentation() {
  return (
    <section id="presentation" className="section-paper overflow-hidden relative">
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image Side */}
          <div className="relative group mx-auto w-full max-w-md lg:max-w-none hidden lg:block">
            {/* Decorative background blob */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#e0141c]/20 to-transparent rounded-[2rem] blur-2xl opacity-50 transition-opacity duration-500 group-hover:opacity-70" />

            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src={slide1Image}
                alt="Univers Inox Industriel"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 border-[3px] border-white/20 rounded-[2rem] pointer-events-none mix-blend-overlay" />
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
          </div>

          {/* Text Side */}
          <div className="lg:py-10 mt-12 lg:mt-0">
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
                <div className="relative rounded-[1.5rem] overflow-hidden shadow-xl">
                  <img
                    src={slide1Image}
                    alt="Univers Inox Industriel"
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                  <div className="absolute inset-0 border-[3px] border-white/20 rounded-[1.5rem] pointer-events-none mix-blend-overlay" />
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
          </div>

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
    <section id="secteurs" className="section-red relative">
      <img
        src={expertiseBgImage}
        alt=""
        className="absolute -bottom-1 -right-30 h-auto w-64 md:w-96 lg:w-[1000px] object-contain opacity-30 pointer-events-none"
        style={{ mixBlendMode: 'plus-lighter' }}
      />
      <img
        src={expertiseBgImage2}
        alt=""
        className="absolute -top-10 -left-10 h-auto w-64 md:w-96 lg:w-[1000px] object-contain opacity-30 pointer-events-none"
        style={{ mixBlendMode: 'plus-lighter' }}
      />
      <div className="wrap relative z-10">
        <h2
          className="mb-16 text-center"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
        >
          Nos domaines d'expertise
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((s, i) => (
            <a
              key={s.title}
              href="#"
              className={`group relative block overflow-hidden rounded-2xl bg-neutral-800 ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              style={{ aspectRatio: i === 0 ? "16 / 12" : "4 / 3" }}
            >
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <span className="absolute left-6 top-6 rounded bg-white/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur">
                {s.tag}
              </span>
              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-white">
                <h3 className="text-2xl font-bold sm:text-3xl">{s.title}</h3>
                <span className="icon-btn shrink-0">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-14 flex justify-center">
          <a href="/secteurs" className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#e0141c] transition-all hover:bg-neutral-100 hover:shadow-lg">
            Voir tous les secteurs
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#e0141c] text-white transition-transform group-hover:translate-x-1">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {EQUIPMENTS.map((eq, i) => (
            <article
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
            </article>
          ))}
        </div>
        
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
        <div className="mx-auto max-w-4xl text-center">
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
        </div>

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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.title}
              className="overflow-hidden rounded-[2rem] bg-white shadow-sm"
            >
              <img
                src={cert.image}
                alt={cert.title}
                loading="lazy"
                className="h-64 w-full object-cover"
              />
            </div>
          ))}
        </div>
        
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
