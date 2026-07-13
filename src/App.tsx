import { useEffect } from "react";

/* ────── global helpers exposed to inline handlers ────── */
const PAGES = [
  "home","quisommesnous","about","savoirfaire","services","pointsforts","pharma",
  "agro","chimie","cosmetique","mobilier","interventions",
  "equipements","references","certifications","blog","contact",
];
const PARENT_NAV: Record<string, string> = {
  quisommesnous:"n-about",about:"n-about",savoirfaire:"n-about",services:"n-about",pointsforts:"n-about",
  pharma:"n-sectors",agro:"n-sectors",chimie:"n-sectors",cosmetique:"n-sectors",
  mobilier:"n-sectors",interventions:"n-sectors",equipements:"n-equipements",
  references:"n-references",certifications:"n-certifications",blog:"n-blog",
  contact:"n-contact",home:"n-home",
};

function navigateTo(id: string) {
  PAGES.forEach((p) => {
    const el = document.getElementById("p-" + p);
    if (el) el.classList.remove("active");
  });
  const pg = document.getElementById("p-" + id);
  if (pg) pg.classList.add("active");
  document.querySelectorAll(".nl").forEach((n) => n.classList.remove("on"));
  const nid = PARENT_NAV[id] || "n-home";
  const nl = document.getElementById(nid);
  if (nl) nl.classList.add("on");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function mobileClose(id: string) {
  navigateTo(id);
  document.getElementById("mob")?.classList.remove("open");
}

function handleSubmit(e: Event, msgId: string) {
  e.preventDefault();
  const msg = document.getElementById(msgId);
  if (msg) (msg as HTMLElement).style.display = "block";
  (e.target as HTMLFormElement).reset();
}

/* expose to inline onclick */
(window as any).nav = navigateTo;
(window as any).mc = mobileClose;
(window as any).submitForm = handleSubmit;

export default function App() {
  useEffect(() => {
    const scrollHandler = () => {
      document.getElementById("nav")?.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollHandler);

    // Fade-up observer
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((el) => {
          if (el.isIntersecting) {
            (el.target as HTMLElement).style.animationPlayState = "running";
            obs.unobserve(el.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fu").forEach((el) => {
      (el as HTMLElement).style.animationPlayState = "paused";
      obs.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      obs.disconnect();
    };
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: HTML_CONTENT,
      }}
    />
  );
}

const HTML_CONTENT = `
<!-- TOPBAR -->
<div class="topbar"><div class="wrap"><div class="topbar-inner">
  <div class="topbar-items">
    <div class="titem"><svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M11.5 9.5c0 .27-.06.53-.19.78l-.6 1.04c-.22.36-.5.67-.84.9-.35.23-.74.35-1.16.35C3.47 12.57.43 9.53.43 4.2c0-.43.12-.82.35-1.16l.9-.84c.25-.13.51-.19.78-.19.11 0 .22.02.33.07l2 .87c.35.15.58.5.58.87v1.67c0 .22-.1.43-.26.58l-.64.7c.51.96 1.37 1.82 2.33 2.33l.7-.64c.15-.16.36-.26.58-.26h1.67c.37 0 .72.23.87.58l.87 2c.05.11.07.22.07.33z" stroke="currentColor" stroke-width="1.2"/></svg>+216 50 191 004</div>
    <div class="titem"><svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1.5" y="3" width="10" height="7.5" rx="1" stroke="currentColor" stroke-width="1.2"/><path d="M1.5 5l5 3.5L11.5 5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>contact@u2iprocess.com</div>
    <div class="titem"><svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1.5C4.3 1.5 2.5 3.3 2.5 5.5c0 3.3 4 7 4 7s4-3.7 4-7C10.5 3.3 8.7 1.5 6.5 1.5z" stroke="currentColor" stroke-width="1.2"/></svg>Akouda, Sousse — Tunisie</div>
  </div>
  <div class="tsoc">
    <a href="https://www.facebook.com/groupe.univers.inox" target="_blank" class="tbtn">F</a>
    <a href="https://tn.linkedin.com/in/amen-allah-bouker-a308a56b" target="_blank" class="tbtn">in</a>
    <a href="https://www.youtube.com/channel/UC0RVYBuW1ONzYOZHDdi13-w" target="_blank" class="tbtn">▶</a>
  </div>
</div></div></div>

<!-- NAV -->
<nav id="nav"><div class="wrap"><div class="nav-inner">
  <a href="#" class="logo-wrap" onclick="nav('home');return false">
    <div><div class="logo-name">U2I Process</div><span class="logo-sub">Univers Inox Industriel</span></div>
  </a>
  <div class="nav-links">
    <span class="nl on" id="n-home" onclick="nav('home')">Accueil</span>
    <span class="nl has-drop" id="n-about">À propos
      <div class="drop">
        <span class="drop-link" onclick="nav('quisommesnous')">Qui sommes-nous</span>
        <span class="drop-link" onclick="nav('about')">Présentation</span>
        <span class="drop-link" onclick="nav('savoirfaire')">Savoir-faire</span>
        <span class="drop-link" onclick="nav('services')">Services proposés</span>
        <span class="drop-link" onclick="nav('pointsforts')">Points forts</span>
      </div>
    </span>
    <span class="nl has-drop" id="n-sectors">Secteurs
      <div class="drop">
        <span class="drop-link" onclick="nav('pharma')">Pharmaceutique</span>
        <span class="drop-link" onclick="nav('agro')">Agroalimentaire</span>
        <span class="drop-link" onclick="nav('chimie')">Chimique</span>
        <span class="drop-link" onclick="nav('cosmetique')">Cosmétique</span>
        <span class="drop-link" onclick="nav('mobilier')">Mobilier inox</span>
        <span class="drop-link" onclick="nav('interventions')">Interventions spécifiques</span>
      </div>
    </span>
    <span class="nl" id="n-equipements" onclick="nav('equipements')">Équipements</span>
    <span class="nl" id="n-references" onclick="nav('references')">Références</span>
    <span class="nl" id="n-certifications" onclick="nav('certifications')">Certifications</span>
    <span class="nl" id="n-blog" onclick="nav('blog')">Blog</span>
    <span class="nl" id="n-contact" onclick="nav('contact')">Contact</span>
  </div>
  <div class="nav-right">
    <span class="btn btn-outline" style="font-size:.58rem;padding:9px 18px;color:rgba(255,255,255,.6);border-color:rgba(255,255,255,.15)" onclick="nav('contact')">Devis gratuit</span>
    <a href="https://www.u2iprocess.com/?i=82779133001506" target="_blank" class="btn btn-red" style="font-size:.58rem;padding:9px 18px">Site officiel <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 8.5l7-7M4 1.5h4v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
    <div class="hbg" onclick="document.getElementById('mob').classList.add('open')"><span></span><span></span><span></span></div>
  </div>
</div></div></nav>

<!-- MOB MENU -->
<div id="mob" class="mob">
  <div class="mob-head">
    <div class="logo-wrap"><div class="logo-name" style="color:#fff">U2I Process</div></div>
    <div class="mob-x" onclick="document.getElementById('mob').classList.remove('open')"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 2l12 12M14 2L2 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div>
  </div>
  <div class="mob-body">
    <span class="mob-item" onclick="mc('home')">Accueil</span>
    <span class="mob-item" onclick="mc('quisommesnous')">Qui sommes-nous</span>
    <span class="mob-item" onclick="mc('about')">Présentation</span>
    <span class="mob-sub" onclick="mc('savoirfaire')">→ Savoir-faire</span>
    <span class="mob-sub" onclick="mc('services')">→ Services proposés</span>
    <span class="mob-sub" onclick="mc('pointsforts')">→ Points forts</span>
    <span class="mob-item" onclick="mc('pharma')">Pharmaceutique</span>
    <span class="mob-sub" onclick="mc('agro')">→ Agroalimentaire</span>
    <span class="mob-sub" onclick="mc('chimie')">→ Chimique</span>
    <span class="mob-sub" onclick="mc('cosmetique')">→ Cosmétique</span>
    <span class="mob-sub" onclick="mc('mobilier')">→ Mobilier Inox</span>
    <span class="mob-item" onclick="mc('equipements')">Équipements</span>
    <span class="mob-item" onclick="mc('references')">Références</span>
    <span class="mob-item" onclick="mc('certifications')">Certifications</span>
    <span class="mob-item" onclick="mc('blog')">Blog</span>
    <span class="mob-item" onclick="mc('contact')">Contact</span>
    <div style="margin-top:24px;display:flex;flex-direction:column;gap:12px">
      <a href="https://www.u2iprocess.com/?i=82779133001506" target="_blank" class="btn btn-red" style="justify-content:center">Site officiel ↗</a>
      <span class="btn btn-ghost-w" style="justify-content:center" onclick="mc('contact')">Demander un devis</span>
    </div>
  </div>
</div>

<!-- ═══ PAGE: ACCUEIL ═══ -->
<div id="p-home" class="page active">

<!-- HERO -->
<div class="hero">
  <img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/pharmaceutique.jpg" alt="" class="hero-bg-img">
  <div class="hero-overlay"></div>
  <div class="hero-grid"></div>
  <div class="hero-diag"></div>
  <div class="hero-diag2"></div>
  <div class="hero-orb1"></div>
  <div class="hero-orb2"></div>
  <div class="hero-noise"></div>
  <div class="hero-bracket"></div>
  <div class="hero-bracket2"></div>
  <div class="wrap">
    <div class="hero-inner">
      <div class="hero-content">
        <div class="hero-eyebrow">
          <div class="hero-eyebrow-bar"></div>
          <div class="hero-eyebrow-dot"></div>
          <div class="hero-eyebrow-text">Groupe Univers Inox Industriel — Fondé 2015 · Akouda, Sousse</div>
        </div>
        <h1 class="hero-h1">
          <span>Tuyauterie</span>
          <span class="line-red">Inox &</span>
          <span>Soudure</span>
          <span class="line-outline">Orbitale.</span>
        </h1>
        <p class="hero-sub">Spécialistes des installations inox haute exigence pour les industries <strong>pharmaceutique, agroalimentaire, chimique</strong> et cosmétique. Partenaire officiel <strong>AXXAIR</strong> depuis 2015.</p>
        <div class="hero-ctas">
          <span class="btn btn-red" onclick="nav('pharma')">Nos secteurs <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M6.5 2l4.5 4.5L6.5 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          <span class="btn btn-ghost-w" onclick="nav('contact')">Demander un devis</span>
          <a href="https://www.u2iprocess.com/wp-content/uploads/2022/03/depliant-U2I-2016-01.pdf" target="_blank" class="btn btn-ghost-w">Brochure PDF</a>
        </div>
        <div class="hero-stats">
          <div class="hstat"><div class="hstat-n">2015<em>→</em></div><div class="hstat-l">Fondée</div></div>
          <div class="hstat"><div class="hstat-n">5<em>+</em></div><div class="hstat-l">Secteurs</div></div>
          <div class="hstat"><div class="hstat-n">ISO</div><div class="hstat-l">Certifié</div></div>
          <div class="hstat"><div class="hstat-n">AXXAIR</div><div class="hstat-l">Partenaire</div></div>
        </div>
      </div>
      <div class="hero-panel-wrap">
        <div class="hero-badge">Partenaire<br>Officiel</div>
        <div class="hero-panel">
          <div class="hp-header">
            <div class="hp-header-ico"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.4"/><path d="M7 10l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <div><div class="hp-header-title">Domaines d'expertise</div><div class="hp-header-sub">Interventions sur site & atelier</div></div>
          </div>
          <div class="hp-items">
            <div class="hp-item" onclick="nav('pharma')">
              <div class="hp-ico"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2C5.13 2 2 5.13 2 9s3.13 7 7 7 7-3.13 7-7S12.87 2 9 2z" stroke="currentColor" stroke-width="1.3"/><path d="M6 9l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
              <div><div class="hp-title">Tuyauterie Pharmaceutique</div><div class="hp-sub">WFI · EPPI · CIP/SIP · ASME BPE</div></div>
              <div class="hp-arr"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            </div>
            <div class="hp-divider"></div>
            <div class="hp-item" onclick="nav('agro')">
              <div class="hp-ico"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2.5 14l3-8 3 6 3-4 3 6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
              <div><div class="hp-title">Agroalimentaire</div><div class="hp-sub">3-A · EHEDG · HACCP · Inox 316L</div></div>
              <div class="hp-arr"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            </div>
            <div class="hp-divider"></div>
            <div class="hp-item" onclick="nav('chimie')">
              <div class="hp-ico"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M7 2v5.5L3 15h12l-4-7.5V2M6 2h6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
              <div><div class="hp-title">Chimique & Cosmétique</div><div class="hp-sub">ATEX · Passivation · ISO 22716</div></div>
              <div class="hp-arr"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            </div>
            <div class="hp-divider"></div>
            <div class="hp-item" onclick="nav('equipements')">
              <div class="hp-ico"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="3" stroke="currentColor" stroke-width="1.3"/><path d="M9 2.5V1M9 17v-1.5M2.5 9H1M17 9h-1.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg></div>
              <div><div class="hp-title">Soudure Orbitale AXXAIR</div><div class="hp-sub">TIG automatisé · FDA compliant</div></div>
              <div class="hp-arr"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            </div>
          </div>
          <div class="hp-footer">
            <div class="ax-pill">
              <div class="ax-dot"></div>
              <div class="ax-text">Partenaire officiel AXXAIR<span>Depuis 2015 · Soudure orbitale certifiée</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- TRUST STRIP -->
<div class="trust-strip"><div class="wrap"><div class="ts-inner" style="overflow-x:auto;scrollbar-width:none">
  <div class="ts-item"><svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1l2.3 4.6L14 6.5l-3.75 3.65L11.1 16 6.5 13.5 1.9 16l.85-5.85L-1 6.5l5.2-.9z" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>Certifié ISO</div>
  <div class="ts-item"><svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1L1 3.7v3.5C1 10.4 3.5 12.7 6.5 13 9.5 12.7 12 10.4 12 7.2V3.7z" stroke="currentColor" stroke-width="1.2"/></svg>GMP · FDA · ASME BPE</div>
  <div class="ts-item"><svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M4.5 6.5l1.5 1.5 3-3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>Partenaire AXXAIR</div>
  <div class="ts-item"><svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1C4.3 1 2.5 2.8 2.5 5c0 3.5 4 7.5 4 7.5S10.5 8.5 10.5 5C10.5 2.8 8.7 1 6.5 1z" stroke="currentColor" stroke-width="1.2"/></svg>Akouda, Sousse</div>
  <div class="ts-item"><svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1.5" y="3.5" width="10" height="6.5" rx=".8" stroke="currentColor" stroke-width="1.2"/><path d="M1.5 5.5l5 3 5-3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>Qualification IQ/OQ/PQ</div>
  <div class="ts-item"><svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 7.5l2-4 3 3.5 2-3.5 3.5 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>Tunisie · Algérie · International</div>
</div></div></div>

<!-- MARQUEE -->
<div class="marquee-wrap"><div class="marquee-track">
  <div class="mitem"><div class="mitem-dot"></div>Soudure Orbitale TIG</div>
  <div class="mitem"><div class="mitem-dot"></div>Tuyauterie Pharmaceutique WFI</div>
  <div class="mitem"><div class="mitem-dot"></div>ASME BPE</div>
  <div class="mitem"><div class="mitem-dot"></div>FDA 21 CFR Part 11</div>
  <div class="mitem"><div class="mitem-dot"></div>Partenaire AXXAIR</div>
  <div class="mitem"><div class="mitem-dot"></div>IQ/OQ/PQ</div>
  <div class="mitem"><div class="mitem-dot"></div>Inox 316L</div>
  <div class="mitem"><div class="mitem-dot"></div>GMP Compliant</div>
  <div class="mitem"><div class="mitem-dot"></div>Ra ≤ 0.8µm</div>
  <div class="mitem"><div class="mitem-dot"></div>3-A / EHEDG</div>
  <div class="mitem"><div class="mitem-dot"></div>Soudure Orbitale TIG</div>
  <div class="mitem"><div class="mitem-dot"></div>Tuyauterie Pharmaceutique WFI</div>
  <div class="mitem"><div class="mitem-dot"></div>ASME BPE</div>
  <div class="mitem"><div class="mitem-dot"></div>FDA 21 CFR Part 11</div>
  <div class="mitem"><div class="mitem-dot"></div>Partenaire AXXAIR</div>
  <div class="mitem"><div class="mitem-dot"></div>IQ/OQ/PQ</div>
  <div class="mitem"><div class="mitem-dot"></div>Inox 316L</div>
  <div class="mitem"><div class="mitem-dot"></div>GMP Compliant</div>
  <div class="mitem"><div class="mitem-dot"></div>Ra ≤ 0.8µm</div>
  <div class="mitem"><div class="mitem-dot"></div>3-A / EHEDG</div>
</div></div>

<!-- SECTEURS -->
<section style="padding:0">
  <div style="max-width:100%;padding:0">
    <div style="background:var(--off);padding:60px clamp(18px,4vw,72px) 0">
      <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:40px;flex-wrap:wrap">
        <div><div class="accent-line"><span class="label">Secteurs d'intervention</span></div><h2>5 Industries,<br>une expertise inox.</h2></div>
        <span class="btn btn-outline" onclick="nav('pharma')">Explorer tous les secteurs <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
      </div>
    </div>
    <div class="sectors-grid" style="margin:0">
      <div class="sec-card sec-card-featured fu d1" onclick="nav('pharma')">
        <div class="sec-card-img"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/pharmaceutique.jpg" alt="Pharmaceutique" loading="lazy"><div class="sec-card-overlay"></div></div>
        <div class="sec-card-body"><div class="sec-num">01 — Prioritaire</div><div class="sec-title">Secteur Pharmaceutique</div><p class="sec-desc">Soudure orbitale boucles WFI/EPPI, CIP/SIP. Qualification IQ/OQ/PQ. ASME BPE, FDA compliant, Ra ≤ 0,8 µm.</p><div class="sec-pills"><span class="pill">WFI / EPPI</span><span class="pill">ASME BPE</span><span class="pill">FDA</span><span class="pill">IQ/OQ/PQ</span></div></div>
      </div>
      <div class="sec-card fu d2" onclick="nav('agro')">
        <div class="sec-card-img"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/agroalimentaire.jpg" alt="Agroalimentaire" loading="lazy"><div class="sec-card-overlay"></div></div>
        <div class="sec-card-body"><div class="sec-num">02</div><div class="sec-title">Agroalimentaire</div><p class="sec-desc">Standards 3-A, EHEDG, CIP/SIP, raccords aseptiques. Inox 316L alimentaire.</p><div class="sec-pills"><span class="pill">3-A / EHEDG</span><span class="pill">HACCP</span></div></div>
      </div>
      <div class="sec-card fu d3" onclick="nav('chimie')">
        <div class="sec-card-img"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/chimie.jpg" alt="Chimique" loading="lazy"><div class="sec-card-overlay"></div></div>
        <div class="sec-card-body"><div class="sec-num">03</div><div class="sec-title">Chimique</div><p class="sec-desc">ATEX, dégraissage, décapage, passivation. Procédés chimiques exigeants.</p><div class="sec-pills"><span class="pill">ATEX</span><span class="pill">Passivation</span></div></div>
      </div>
      <div class="sec-card fu d2" onclick="nav('cosmetique')">
        <div class="sec-card-img"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/cosmetique.jpg" alt="Cosmétique" loading="lazy"><div class="sec-card-overlay"></div></div>
        <div class="sec-card-body"><div class="sec-num">04</div><div class="sec-title">Cosmétique</div><p class="sec-desc">Surface miroir, ISO 22716, hygiène totale, Ra 0,4 µm.</p><div class="sec-pills"><span class="pill">ISO 22716</span><span class="pill">Surface miroir</span></div></div>
      </div>
      <div class="sec-card fu d3" onclick="nav('mobilier')">
        <div class="sec-card-img"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/mobilier.jpg" alt="Mobilier inox" loading="lazy"><div class="sec-card-overlay"></div></div>
        <div class="sec-card-body"><div class="sec-num">05</div><div class="sec-title">Mobilier Inox Pro</div><p class="sec-desc">Cuisine pro, laboratoire, hôpital, bloc opératoire. Sur mesure.</p><div class="sec-pills"><span class="pill">Sur mesure</span><span class="pill">Cuisine pro</span></div></div>
      </div>
    </div>
  </div>
</section>

<!-- À PROPOS -->
<div class="about-split">
  <div class="about-img-side">
    <img src="https://www.u2iprocess.com/wp-content/uploads/2021/11/univer-inox-presentation.jpg" alt="U2I Process atelier" loading="lazy">
    <div class="about-img-overlay"></div>
    <div class="about-badge"><div class="about-badge-n">2015</div><div class="about-badge-l">Fondée à Akouda</div></div>
  </div>
  <div class="about-content">
    <span class="label-w">Qui sommes-nous</span>
    <h2 style="color:#fff;margin-bottom:20px">Spécialistes<br>inox depuis<br>10 ans.</h2>
    <p>Fondée en 2015, <strong style="color:rgba(255,255,255,.85)">Univers Inox Industriel</strong> est basée à Akouda, Sousse. Spécialistes en chaudronnerie, soudure et tuyauterie industrielle pour les domaines de haute exigence — pharmaceutique, alimentaire, chimique.</p>
    <p>Notre équipe d'ingénieurs et techniciens expérimentés contrôle toutes les phases d'un projet : études, préfabrication, travaux sur site, mise en service, qualification et maintenance.</p>
    <div class="about-tags">
      <span class="atag">Chaudronnerie</span><span class="atag">Soudure orbitale</span><span class="atag">Tuyauterie process</span><span class="atag">Qualification</span><span class="atag">Maintenance</span><span class="atag">2D/3D</span>
    </div>
    <div style="display:flex;gap:12px;flex-wrap:wrap">
      <span class="btn btn-red" onclick="nav('quisommesnous')">En savoir plus <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
      <a href="https://www.u2iprocess.com/wp-content/uploads/2022/03/depliant-U2I-2016-01.pdf" target="_blank" class="btn btn-ghost-w">Télécharger brochure</a>
    </div>
  </div>
</div>

<!-- STATS -->
<div class="stats-band"><div class="stats-inner">
  <div class="stat-cell"><div class="stat-label">Fondation</div><div class="stat-n">2015<em>+</em></div><div class="stat-sub">Akouda, Sousse — Tunisie</div></div>
  <div class="stat-cell"><div class="stat-label">Secteurs</div><div class="stat-n">5<em>+</em></div><div class="stat-sub">Industries haute exigence</div></div>
  <div class="stat-cell"><div class="stat-label">Certification</div><div class="stat-n">ISO</div><div class="stat-sub">Qualité certifiée GMP/FDA</div></div>
  <div class="stat-cell"><div class="stat-label">Partenariat</div><div class="stat-n">AXXAIR</div><div class="stat-sub">Partenaire officiel depuis 2015</div></div>
</div></div>

<!-- SERVICES -->
<section class="bg-off">
  <div class="wrap">
    <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:52px;flex-wrap:wrap">
      <div><div class="accent-line"><span class="label">Services</span></div><h2>Ce que nous réalisons.</h2></div>
      <span class="btn btn-outline" onclick="nav('services')">Tous les services</span>
    </div>
    <div class="svc-grid">
      <div class="svc fu d1"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M12 4V2M12 22v-2M4 12H2M22 12h-2M6.3 6.3L4.9 4.9M19.1 19.1l-1.4-1.4M6.3 17.7L4.9 19.1M19.1 4.9l-1.4 1.4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg></div><h4>Soudure orbitale TIG</h4><p>Solution complète AXXAIR depuis 2015. Têtes ouvertes/fermées, weld logs FDA, conformité ASME BPE. Ra ≤ 0,8 µm garanti.</p></div>
      <div class="svc fu d2"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="4" y="8" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M9 8V6a3 3 0 016 0v2" stroke="currentColor" stroke-width="1.5"/></svg></div><h4>Vente matériel AXXAIR</h4><p>Partenaire officiel depuis 2015. Machines soudure orbitale, têtes, alimentations. Formation et SAV.</p></div>
      <div class="svc fu d3"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M3 10h18M10 3v18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><h4>Installation lignes de production</h4><p>Montage mécanique, électrique, interconnexion machines. Mise en service complète et qualification sur site.</p></div>
      <div class="svc fu d1"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="10" cy="10" r="6" stroke="currentColor" stroke-width="1.5"/><path d="M16 16l5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div><h4>Endoscopie & contrôle visuel</h4><p>Inspection interne HD des soudures. Rapport illustré conforme FDA. Documentation qualification complète.</p></div>
      <div class="svc fu d2"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 19l5-12 5 8 5-6 4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><h4>Dégraissage · Décapage · Passivation</h4><p>Skids de traitement de surface compacts. ASTM A967/A380. Passivation acide nitrique/citrique.</p></div>
      <div class="svc fu d3"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 6v6c0 5.5 4 10.7 8 12 4-1.3 8-6.5 8-12V6z" stroke="currentColor" stroke-width="1.5"/><path d="M9 12l2 2 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div><h4>Qualification IQ/OQ/PQ</h4><p>Protocoles et rapports de qualification pour secteurs réglementés. Documentation GMP/FDA complète.</p></div>
    </div>
  </div>
</section>

<!-- AXXAIR -->
<div class="axxair-band">
  <div class="axxair-bg"></div>
  <div class="axxair-cross"></div>
  <div class="axxair-glow"></div>
  <div class="wrap" style="position:relative;z-index:1">
    <div class="ax-inner">
      <div class="ax-content">
        <span class="label-w" style="margin-bottom:12px;display:block">Partenariat exclusif · Depuis 2015</span>
        <h2 style="color:#fff;margin-bottom:18px">Partenaire officiel<br>AXXAIR.</h2>
        <p>Équipés de la solution complète de soudage orbital AXXAIR depuis 2015. Vente et mise en œuvre des machines de soudure orbitale pour les exigences pharmaceutiques, alimentaires et chimiques.</p>
        <div class="ax-ctas">
          <a href="https://bit.ly/3KUZJcJ" target="_blank" class="btn btn-red">Visiter AXXAIR <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5l8-8M4 1.5h5v5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
          <span class="btn btn-ghost-w" onclick="nav('services')">Nos services soudure</span>
        </div>
      </div>
      <div class="ax-logo-box">
        <div class="ax-logo-name">AXXAIR</div>
        <div class="ax-since"><div class="ax-since-dot"></div>Partenaire officiel 2015</div>
        <div style="margin-top:14px;font-family:'Space Mono',monospace;font-size:.52rem;color:rgba(255,255,255,.3);line-height:1.8;letter-spacing:.06em;text-transform:uppercase">Soudure orbitale · Têtes<br>Alimentations · Consommables</div>
      </div>
    </div>
  </div>
</div>

<!-- PARTENAIRES -->
<section class="bg-white">
  <div class="wrap">
    <div class="sh center"><div class="accent-line" style="justify-content:center"><span class="label">Partenaires</span></div><h2>Ils nous font confiance.</h2><p>Réseau de fabricants et fournisseurs internationaux sélectionnés pour leur excellence technique.</p></div>
    <div class="partners-scroll">
      <div class="p-logo"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/1.jpg" alt="" loading="lazy" onerror="this.closest('.p-logo').style.display='none'"></div>
      <div class="p-logo"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/2.jpg" alt="" loading="lazy" onerror="this.closest('.p-logo').style.display='none'"></div>
      <div class="p-logo"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/3.jpg" alt="" loading="lazy" onerror="this.closest('.p-logo').style.display='none'"></div>
      <div class="p-logo"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/5.jpg" alt="" loading="lazy" onerror="this.closest('.p-logo').style.display='none'"></div>
      <div class="p-logo"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/4.jpg" alt="" loading="lazy" onerror="this.closest('.p-logo').style.display='none'"></div>
      <div class="p-logo"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/6.jpg" alt="" loading="lazy" onerror="this.closest('.p-logo').style.display='none'"></div>
      <div class="p-logo"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/7.jpg" alt="" loading="lazy" onerror="this.closest('.p-logo').style.display='none'"></div>
      <div class="p-logo"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/8.jpg" alt="" loading="lazy" onerror="this.closest('.p-logo').style.display='none'"></div>
      <div class="p-logo"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/10.jpg" alt="" loading="lazy" onerror="this.closest('.p-logo').style.display='none'"></div>
      <div class="p-logo"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/9.jpg" alt="" loading="lazy" onerror="this.closest('.p-logo').style.display='none'"></div>
      <div class="p-logo"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/partenairetu3.jpg" alt="" loading="lazy" onerror="this.closest('.p-logo').style.display='none'"></div>
      <div class="p-logo"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/13.jpg" alt="" loading="lazy" onerror="this.closest('.p-logo').style.display='none'"></div>
      <div class="p-logo"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/algerie.jpg" alt="" loading="lazy" onerror="this.closest('.p-logo').style.display='none'"></div>
    </div>
  </div>
</section>

<!-- ACTUALITÉS -->
<section class="bg-off">
  <div class="wrap">
    <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:48px;flex-wrap:wrap">
      <div><div class="accent-line"><span class="label">Actualités</span></div><h2>Dernières nouvelles.</h2></div>
      <span class="btn btn-outline" onclick="nav('blog')">Voir le blog</span>
    </div>
    <div class="blog-grid">
      <div class="news-card fu d1" onclick="nav('blog')">
        <div class="news-img" style="height:280px"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/03/Nouvel-atelier-8-825x620.jpeg" alt="Nouvel atelier" loading="lazy"></div>
        <div class="news-body"><div class="news-cat">News · Infrastructure</div><div class="news-title">Nouvel atelier spécialisé — Akouda</div><p class="news-excerpt">Inauguration de notre nouvel atelier spécialisé en préfabrication inox et soudure orbitale. Capacités de production renforcées, contrôle qualité intégré.</p><div class="news-date">15 mars 2022</div></div>
      </div>
      <div class="news-card fu d2" onclick="nav('blog')">
        <div class="news-img" style="height:200px"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/A3P-newsV2-825x620.jpg" alt="A3P Tunisie" loading="lazy"></div>
        <div class="news-body"><div class="news-cat">Événement</div><div class="news-title">A3P Tunisie — U2I présent</div><p class="news-excerpt">Fiers de notre participation au plus grand événement de l'industrie pharmaceutique tunisienne.</p><div class="news-date">22 février 2022</div></div>
      </div>
      <div class="news-card fu d3" onclick="nav('blog')">
        <div class="news-img" style="height:200px"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/03/IMG_2468-825x618.jpg" alt="U2I Installation" loading="lazy"></div>
        <div class="news-body"><div class="news-cat">Réalisation</div><div class="news-title">U2I Univers Inox Installation</div><p class="news-excerpt">Filiale U2I Installation, spécialiste des travaux sur site — montage, assemblage et qualification.</p><div class="news-date">22 février 2022</div></div>
      </div>
    </div>
  </div>
</section>

<!-- CTA BAND -->
<div class="cta-band">
  <div class="cta-band-bg"></div>
  <div class="cta-band-stripe"></div>
  <div class="cta-band-noise"></div>
  <div class="wrap"><div class="cta-inner">
    <div class="cta-text"><h2>Nouveau projet ?</h2><p>Notre équipe vous répond sous 24h et vous accompagne de la spécification à la qualification complète.</p></div>
    <div class="cta-actions">
      <span class="btn btn-gold" onclick="nav('contact')">Demander un devis <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M6.5 2l4.5 4.5L6.5 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
      <a href="tel:+21650191004" class="btn btn-ghost-w">+216 50 191 004</a>
    </div>
  </div></div>
</div>

</div><!-- /home -->

<!-- ═══ PAGE: QUI SOMMES-NOUS ═══ -->
<div id="p-quisommesnous" class="page">
<div class="pg-header"><img src="https://www.u2iprocess.com/wp-content/uploads/2021/11/univer-inox-presentation.jpg" alt="U2I atelier" class="pg-header-img"><div class="pg-header-overlay"></div><div class="pg-header-stripe"></div><div class="wrap pg-header-inner"><div class="breadcrumb"><span onclick="nav('home')">Accueil</span><em>/</em><span>Qui sommes-nous</span></div><span class="label-w" style="margin-bottom:14px;display:block">Notre histoire</span><h1>Univers Inox<br>Industriel.</h1><p>Fondée en 2015 à Akouda, Sousse — spécialistes en tuyauterie inox et soudure orbitale pour les industries de haute exigence.</p></div></div>

<!-- MAIN ABOUT SECTION -->
<div class="about-split"><div class="about-img-side"><img src="https://www.u2iprocess.com/wp-content/uploads/2021/11/univer-inox-presentation.jpg" alt="U2I équipe" loading="lazy"><div class="about-img-overlay"></div><div class="about-badge"><div class="about-badge-n">10+</div><div class="about-badge-l">Ans d'expérience</div></div></div><div class="about-content"><span class="label-w">Qui nous sommes</span><h2 style="color:#fff;margin-bottom:20px">Spécialistes de la<br>tuyauterie inox<br>et soudure orbitale.</h2><p>Fondée en 2015, <strong style="color:rgba(255,255,255,.85)">Univers Inox Industriel (U2I)</strong> est une PME basée à Akouda, à proximité de Sousse en Tunisie. Nous sommes spécialisés en chaudronnerie, travaux de soudure et tuyauterie industrielle pour les secteurs de haute exigence : pharmaceutique, agroalimentaire, chimique et cosmétique.</p><p>Notre équipe d'<strong style="color:rgba(255,255,255,.85)">ingénieurs et techniciens expérimentés</strong>, forte de plus de 10 ans d'expérience dans le domaine pharmaceutique, maîtrise toutes les phases d'un projet — de l'étude à la qualification complète.</p><p>Nous écoutons les besoins spécifiques de nos clients et délivrons des solutions conformes aux standards les plus exigeants : FDA, ASME BPE, GMP, ISO 9001.</p><div class="about-tags"><span class="atag">Fondée 2015</span><span class="atag">Akouda, Sousse</span><span class="atag">Chaudronnerie</span><span class="atag">Tuyauterie inox</span><span class="atag">Soudure orbitale</span><span class="atag">Qualification IQ/OQ/PQ</span></div></div></div>

<!-- STATS BANNER -->
<div class="stats-band"><div class="stats-inner">
  <div class="stat-cell"><div class="stat-label">Fondation</div><div class="stat-n">2015</div><div class="stat-sub">Akouda, Sousse — Tunisie</div></div>
  <div class="stat-cell"><div class="stat-label">Expérience</div><div class="stat-n">10<em>+</em></div><div class="stat-sub">Ans en pharmaceutique</div></div>
  <div class="stat-cell"><div class="stat-label">Secteurs</div><div class="stat-n">5<em>+</em></div><div class="stat-sub">Industries haute exigence</div></div>
  <div class="stat-cell"><div class="stat-label">Partenariat</div><div class="stat-n">AXXAIR</div><div class="stat-sub">Officiel depuis 2015</div></div>
</div></div>

<!-- NOTRE MISSION / VISION -->
<section class="bg-off"><div class="wrap"><div class="sh"><div class="accent-line"><span class="label">Notre approche</span></div><h2>Mission & Valeurs.</h2></div><div class="svc-grid">
  <div class="svc"><div style="font-family:'Bebas Neue',sans-serif;font-size:1.3rem;color:var(--red);letter-spacing:.04em;margin-bottom:8px;text-transform:uppercase">Mission</div><h4>Excellence & Conformité</h4><p>Fournir des solutions de tuyauterie inox et soudure orbitale fiables, conformes aux normes internationales les plus strictes, pour les industries pharmaceutique, alimentaire et chimique.</p></div>
  <div class="svc"><div style="font-family:'Bebas Neue',sans-serif;font-size:1.3rem;color:var(--red);letter-spacing:.04em;margin-bottom:8px;text-transform:uppercase">Valeurs</div><h4>Qualité & Réactivité</h4><p>Qualité irréprochable, écoute client, réactivité en intervention urgente, expertise technique reconnue, intégrité professionnelle.</p></div>
  <div class="svc"><div style="font-family:'Bebas Neue',sans-serif;font-size:1.3rem;color:var(--red);letter-spacing:.04em;margin-bottom:8px;text-transform:uppercase">Engagement</div><h4>Partenaire de confiance</h4><p>Nous nous engageons auprès de chaque client à être un partenaire fiable, transparent et à l'écoute, de la phase d'étude à la qualification complète.</p></div>
</div></div></section>

<!-- EXPERTISE -->
<section class="bg-white"><div class="wrap"><div class="sh center"><div class="accent-line" style="justify-content:center"><span class="label">Notre expertise</span></div><h2>Domaines de compétence.</h2></div><div class="svc-grid">
  <div class="svc"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M12 4V2M12 22v-2M4 12H2M22 12h-2M6.3 6.3L4.9 4.9M19.1 19.1l-1.4-1.4M6.3 17.7L4.9 19.1M19.1 4.9l-1.4 1.4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg></div><h4>Soudure orbitale TIG</h4><p>Solution complète AXXAIR depuis 2015. Têtes fermées/ouvertes, weld logs documentés, conformité FDA, ASME BPE, IQ/OQ/PQ.</p></div>
  <div class="svc"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 6v6c0 5.5 4 10.7 8 12 4-1.3 8-6.5 8-12V6z" stroke="currentColor" stroke-width="1.5"/></svg></div><h4>Tuyauterie pharmaceutique</h4><p>EPPI/WFI, EP/PW, VP/PS, CIP/SIP. ASME BPE, FDA 21 CFR, GMP. Ra ≤ 0,8 µm garanti.</p></div>
  <div class="svc"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M3 10h18M10 3v18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><h4>Modélisation 2D/3D</h4><p>Isométriques, P&ID, spécifications matériaux, CAO/DAO, analyse techniques, plans de soudure.</p></div>
  <div class="svc"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="10" cy="10" r="6" stroke="currentColor" stroke-width="1.5"/><path d="M16 16l5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div><h4>Endoscopie & contrôle</h4><p>Inspection interne HD des soudures. Rapport illustré FDA. Documentation qualification 100% conforme.</p></div>
  <div class="svc"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 19l5-12 5 8 5-6 4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><h4>Traitement de surface</h4><p>Dégraissage, décapage, passivation ASTM A967/A380. Contrôle qualité intégré.</p></div>
  <div class="svc"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 6v6c0 5.5 4 10.7 8 12 4-1.3 8-6.5 8-12V6z" stroke="currentColor" stroke-width="1.5"/><path d="M9 12l2 2 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div><h4>Qualification & GMP</h4><p>IQ/OQ/PQ complets. Protocoles et rapports FDA 21 CFR. Documentation GMP intégrale.</p></div>
</div></div></section>

<!-- NOS CERTIFICATIONS -->
<section class="bg-off"><div class="wrap"><div class="sh center"><div class="accent-line" style="justify-content:center"><span class="label">Certifications</span></div><h2>Standards & Conformité.</h2></div><div class="cert-row">
  <div class="cert-chip"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2l3 7h7l-5.5 4 2 7L11 16l-6.5 4 2-7L1 9h7z" stroke="currentColor" stroke-width="1.4"/></svg><div><div class="cert-chip-n">ISO 9001</div><div class="cert-chip-s">Quality Management</div></div></div>
  <div class="cert-chip"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2L3 6v6c0 4.8 3.5 9.3 8 10.5C16.5 21.3 20 16.8 20 12V6z" stroke="currentColor" stroke-width="1.4"/></svg><div><div class="cert-chip-n">FDA 21 CFR</div><div class="cert-chip-s">Pharmaceutical</div></div></div>
  <div class="cert-chip"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="1.4"/><path d="M8 11l2 2 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg><div><div class="cert-chip-n">ASME BPE</div><div class="cert-chip-s">Process Equipment</div></div></div>
  <div class="cert-chip"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="1.4"/><path d="M8 11h6M11 8v6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg><div><div class="cert-chip-n">3-A / EHEDG</div><div class="cert-chip-s">Food Safety</div></div></div>
  <div class="cert-chip"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="1.4"/><path d="M11 7v4l3 2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg><div><div class="cert-chip-n">IQ/OQ/PQ</div><div class="cert-chip-s">Qualification</div></div></div>
  <div class="cert-chip"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 15l4-10 4 7 4-5 3.5 8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg><div><div class="cert-chip-n">ASTM A967</div><div class="cert-chip-s">Passivation</div></div></div>
</div></div></section>

<!-- POINTS FORTS -->
<section class="bg-navy"><div class="wrap"><div class="sh center" style="margin-bottom:50px"><div class="accent-line" style="justify-content:center"><span class="label" style="color:var(--red)">Pourquoi U2I</span></div><h2 style="color:#fff">Nos points forts.</h2></div><div class="svc-grid">
  <div class="svc"><div style="font-family:'Bebas Neue',sans-serif;font-size:2.5rem;color:var(--red);line-height:1;margin-bottom:12px">01</div><h4 style="color:#fff">Expertise pharma reconnue</h4><p style="color:rgba(255,255,255,.75)">Plus de 10 ans d'expérience dans les exigences strictes des industries pharmaceutique et biotechnologique.</p></div>
  <div class="svc"><div style="font-family:'Bebas Neue',sans-serif;font-size:2.5rem;color:var(--red);line-height:1;margin-bottom:12px">02</div><h4 style="color:#fff">Partenaire officiel AXXAIR</h4><p style="color:rgba(255,255,255,.75)">Solution complète de soudage orbital depuis 2015. Formation continue, vente et support technique inclus.</p></div>
  <div class="svc"><div style="font-family:'Bebas Neue',sans-serif;font-size:2.5rem;color:var(--red);line-height:1;margin-bottom:12px">03</div><h4 style="color:#fff">Conformité totale</h4><p style="color:rgba(255,255,255,.75)">FDA 21 CFR, ASME BPE, GMP, ISO 9001, 3-A, EHEDG, ASTM — toutes les certifications requises.</p></div>
  <div class="svc"><div style="font-family:'Bebas Neue',sans-serif;font-size:2.5rem;color:var(--red);line-height:1;margin-bottom:12px">04</div><h4 style="color:#fff">Documentation complète</h4><p style="color:rgba(255,255,255,.75)">Dossiers GMP/FDA, isométriques, P&ID, certificats matériaux, weld logs, endoscopie, attestations soudeur.</p></div>
  <div class="svc"><div style="font-family:'Bebas Neue',sans-serif;font-size:2.5rem;color:var(--red);line-height:1;margin-bottom:12px">05</div><h4 style="color:#fff">Réactivité & flexibilité</h4><p style="color:rgba(255,255,255,.75)">Interventions urgentes sur site. Disponibilité rapide. Réponse sous 24h ouvrées.</p></div>
  <div class="svc"><div style="font-family:'Bebas Neue',sans-serif;font-size:2.5rem;color:var(--red);line-height:1;margin-bottom:12px">06</div><h4 style="color:#fff">Couverture régionale</h4><p style="color:rgba(255,255,255,.75)">Tunisie, Algérie et international. Mobilité des équipes techniques sur vos installations.</p></div>
</div></div></section>

<!-- CONTACT CTA -->
<div class="cta-band"><div class="cta-band-bg"></div><div class="cta-band-stripe"></div><div class="wrap"><div class="cta-inner"><div class="cta-text"><h2>Discutons de votre projet.</h2><p>Notre équipe spécialiste vous accompagne de la conception à la qualification complète.</p></div><div class="cta-actions"><span class="btn btn-gold" onclick="nav('contact')">Nous contacter <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M6.5 2l4.5 4.5L6.5 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><a href="tel:+21650191004" class="btn btn-ghost-w">+216 50 191 004</a></div></div></div></div>
</div><!-- /quisommesnous -->

<!-- ═══ PAGE: À PROPOS ═══ -->
<div id="p-about" class="page">
<div class="pg-header"><img src="https://www.u2iprocess.com/wp-content/uploads/2021/11/univer-inox-presentation.jpg" alt="" class="pg-header-img"><div class="pg-header-overlay"></div><div class="pg-header-stripe"></div><div class="wrap pg-header-inner"><div class="breadcrumb"><span onclick="nav('home')">Accueil</span><em>/</em><span>Présentation</span></div><span class="label-w" style="margin-bottom:14px;display:block">Qui sommes-nous</span><h1>Groupe Univers<br>Inox Industriel.</h1><p>Fondée en 2015 à Akouda, Sousse — spécialistes en tuyauterie inox et soudure orbitale pour les industries de haute exigence.</p></div></div>
<div class="about-split">
  <div class="about-img-side"><img src="https://www.u2iprocess.com/wp-content/uploads/2021/11/univer-inox-presentation.jpg" alt="U2I équipe" loading="lazy"><div class="about-img-overlay"></div><div class="about-badge"><div class="about-badge-n">10+</div><div class="about-badge-l">Ans d'expérience pharma</div></div></div>
  <div class="about-content"><span class="label-w">Présentation</span><h2 style="color:#fff;margin-bottom:20px">Spécialistes de la<br>tuyauterie inox<br>depuis 2015.</h2><p>Fondée en 2015, la société <strong style="color:rgba(255,255,255,.85)">Univers Inox Industriel</strong> est basée à Akouda, une ville située à quelques kilomètres au nord-ouest de Sousse en Tunisie. Spécialisés en chaudronnerie, travaux de soudure et tuyauterie industrielle spécialement dans les domaines de haute exigence.</p><p>Notre personnel constitué d'équipes d'ingénieurs et techniciens spécialisés et expérimentés, issus d'une expérience de plus de 10 ans dans le domaine pharmaceutique, peut contrôler toutes les phases de la réalisation d'un projet.</p><p>Le personnel U2I, spécialiste de la tuyauterie process, est avant tout à l'écoute des besoins spécifiques de ses clients.</p><div class="about-tags"><span class="atag">Fondée 2015</span><span class="atag">Akouda, Sousse</span><span class="atag">Chaudronnerie</span><span class="atag">Tuyauterie inox</span><span class="atag">Soudure orbitale</span><span class="atag">IQ/OQ/PQ</span></div><div style="display:flex;gap:12px;flex-wrap:wrap"><a href="https://www.u2iprocess.com/wp-content/uploads/2022/03/depliant-U2I-2016-01.pdf" target="_blank" class="btn btn-red">Télécharger la brochure</a><span class="btn btn-ghost-w" onclick="nav('contact')">Nous contacter</span></div></div>
</div>
<div class="stats-band"><div class="stats-inner">
  <div class="stat-cell"><div class="stat-label">Fondation</div><div class="stat-n">2015</div><div class="stat-sub">Akouda, Sousse</div></div>
  <div class="stat-cell"><div class="stat-label">Secteurs</div><div class="stat-n">5<em>+</em></div><div class="stat-sub">Industries haute exigence</div></div>
  <div class="stat-cell"><div class="stat-label">Expérience pharma</div><div class="stat-n">10<em>+</em></div><div class="stat-sub">Années d'expertise</div></div>
  <div class="stat-cell"><div class="stat-label">Certification</div><div class="stat-n">ISO</div><div class="stat-sub">Qualité certifiée</div></div>
</div></div>
<section class="bg-off"><div class="wrap"><div class="sh"><div class="accent-line"><span class="label">Savoir-faire</span></div><h2>Notre activité principale.</h2></div><div class="svc-grid">
  <div class="svc"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 6v6c0 5.5 4 10.7 8 12 4-1.3 8-6.5 8-12V6z" stroke="currentColor" stroke-width="1.5"/></svg></div><h4>Tuyauterie pharmaceutique</h4><p>Conception et réalisation EPPI/WFI, EP/PW, VP/PS, CIP/SIP selon ASME BPE. Dossiers de soudure complets.</p></div>
  <div class="svc"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M3 10h18M10 3v18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><h4>Modélisation 2D/3D</h4><p>Dispositions de tuyauterie, isométriques, P&ID. Spécifications matériaux, analyse des contraintes.</p></div>
  <div class="svc"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 19l5-12 5 8 5-6 4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><h4>Sous-traitance industrielle</h4><p>Montage sous-ensembles, SKID filtration CIP/SIP. Tôlerie : découpe laser, pliage, roulage numérique.</p></div>
</div><div style="text-align:center;margin-top:40px"><a href="https://www.u2iprocess.com/savoir-faire/" target="_blank" class="btn btn-red">Voir le savoir-faire complet</a></div></div></section>
<div class="cta-band"><div class="cta-band-bg"></div><div class="cta-band-stripe"></div><div class="wrap"><div class="cta-inner"><div class="cta-text"><h2>Rencontrons-nous.</h2><p>Discutons de votre projet à Akouda ou en visioconférence.</p></div><div class="cta-actions"><span class="btn btn-gold" onclick="nav('contact')">Nous contacter</span><a href="tel:+21650191004" class="btn btn-ghost-w">+216 50 191 004</a></div></div></div></div>
</div>

<!-- ═══ PAGE: PHARMA ═══ -->
<div id="p-pharma" class="page">
<div class="pg-header"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/pharmaceutique.jpg" alt="" class="pg-header-img"><div class="pg-header-overlay"></div><div class="pg-header-stripe"></div><div class="wrap pg-header-inner"><div class="breadcrumb"><span onclick="nav('home')">Accueil</span><em>/</em><span>Secteurs</span><em>/</em><span>Pharmaceutique</span></div><span class="label-w" style="display:block;margin-bottom:14px">Secteur Prioritaire N°1</span><h1>Tuyauterie Inox<br>Pharmaceutique.</h1><p>Soudure orbitale boucles WFI/EPPI, CIP/SIP. Qualification IQ/OQ/PQ. ASME BPE, FDA compliant, Ra ≤ 0,8 µm.</p></div></div>
<div class="about-split"><div class="about-content" style="background:var(--off)"><div class="accent-line"><span class="label">Tuyauteries pharmaceutiques</span></div><h2 style="margin-bottom:20px;color:var(--ink)">ASME BPE · FDA<br>· GMP.</h2><p style="color:var(--ink3)">Soudure orbitale des boucles de distribution d'eau pharmaceutique <strong style="color:var(--ink2)">EPPI / WFI, EP / PW, VP / PS, CIP/SIP</strong>, circuits de transfert produit stérile.</p><p style="color:var(--ink3)">Tuyauterie selon la norme ASME BPE jusqu'à D115, SF1, SF4. Réalisations des SKID filtration sur mesure avec cahier de soudure complet, certificats, isométries, P&ID, endoscopie.</p><p style="color:var(--ink3)">Utilités propres pour procédés pharmaceutiques — Vapeur pure, gaz purs (AC process, Azote, CO₂, Argon).</p><div class="about-tags" style="margin:20px 0 28px"><span class="atag" style="background:var(--red-dim);color:var(--red);border-color:rgba(227,28,28,.15)">WFI / EPPI</span><span class="atag" style="background:var(--red-dim);color:var(--red);border-color:rgba(227,28,28,.15)">ASME BPE</span><span class="atag" style="background:var(--red-dim);color:var(--red);border-color:rgba(227,28,28,.15)">FDA 21 CFR</span><span class="atag" style="background:var(--red-dim);color:var(--red);border-color:rgba(227,28,28,.15)">IQ/OQ/PQ</span><span class="atag" style="background:var(--red-dim);color:var(--red);border-color:rgba(227,28,28,.15)">Ra ≤ 0,8 µm</span><span class="atag" style="background:var(--red-dim);color:var(--red);border-color:rgba(227,28,28,.15)">Vapeur pure</span></div><span class="btn btn-red" onclick="nav('contact')">Demander un devis <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div><div class="about-img-side"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/pharmaceutique.jpg" alt="Pharmaceutique" loading="lazy"><div class="about-img-overlay"></div></div></div>
<div class="cta-band"><div class="cta-band-bg"></div><div class="cta-band-stripe"></div><div class="wrap"><div class="cta-inner"><div class="cta-text"><h2>Projet pharmaceutique ?</h2><p>Contactez notre équipe spécialisée.</p></div><div class="cta-actions"><span class="btn btn-gold" onclick="nav('contact')">Nous contacter</span></div></div></div></div>
</div>

<!-- AGRO -->
<div id="p-agro" class="page">
<div class="pg-header"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/agroalimentaire.jpg" alt="" class="pg-header-img"><div class="pg-header-overlay"></div><div class="pg-header-stripe"></div><div class="wrap pg-header-inner"><div class="breadcrumb"><span onclick="nav('home')">Accueil</span><em>/</em><span>Secteurs</span><em>/</em><span>Agroalimentaire</span></div><span class="label-w" style="display:block;margin-bottom:14px">Secteur Agroalimentaire</span><h1>Tuyauterie Inox<br>Agroalimentaire.</h1><p>Standards 3-A, EHEDG, CIP/SIP, HACCP. Tuyauteries inox 316L conformes normes d'hygiène spécifiques.</p></div></div>
<div class="about-split"><div class="about-content" style="background:var(--off)"><div class="accent-line"><span class="label">Standards alimentaires</span></div><h2 style="margin-bottom:20px;color:var(--ink)">3-A · EHEDG<br>· HACCP.</h2><p style="color:var(--ink3)">Tuyauteries inox répondant aux normes d'hygiène spécifiques. Raccords aseptiques conformes aux normes 3-A Sanitary Standards et EHEDG. Réseaux CIP/SIP, lignes de transfert produit.</p><p style="color:var(--ink3)">Conception et réalisation de réseaux CIP/SIP, lignes de transfert produit, circuits vapeur et utilités pour les unités de production agroalimentaires.</p><div class="about-tags" style="margin:20px 0 28px"><span class="atag" style="background:var(--red-dim);color:var(--red);border-color:rgba(227,28,28,.15)">3-A / EHEDG</span><span class="atag" style="background:var(--red-dim);color:var(--red);border-color:rgba(227,28,28,.15)">CIP/SIP</span><span class="atag" style="background:var(--red-dim);color:var(--red);border-color:rgba(227,28,28,.15)">HACCP</span><span class="atag" style="background:var(--red-dim);color:var(--red);border-color:rgba(227,28,28,.15)">Inox 316L</span><span class="atag" style="background:var(--red-dim);color:var(--red);border-color:rgba(227,28,28,.15)">Aseptique</span></div><span class="btn btn-red" style="margin-top:20px" onclick="nav('contact')">Demander un devis</span></div><div class="about-img-side"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/agroalimentaire.jpg" alt="" loading="lazy"><div class="about-img-overlay"></div></div></div>
<div class="cta-band"><div class="cta-band-bg"></div><div class="cta-band-stripe"></div><div class="wrap"><div class="cta-inner"><div class="cta-text"><h2>Projet agroalimentaire ?</h2></div><div class="cta-actions"><span class="btn btn-gold" onclick="nav('contact')">Nous contacter</span></div></div></div></div>
</div>

<!-- CHIMIE -->
<div id="p-chimie" class="page">
<div class="pg-header"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/chimie.jpg" alt="" class="pg-header-img"><div class="pg-header-overlay"></div><div class="pg-header-stripe"></div><div class="wrap pg-header-inner"><div class="breadcrumb"><span onclick="nav('home')">Accueil</span><em>/</em><span>Secteurs</span><em>/</em><span>Chimique</span></div><span class="label-w" style="display:block;margin-bottom:14px">Secteur Chimique</span><h1>Tuyauterie Inox<br>Chimique.</h1><p>Soudeurs et tuyauteurs hautement qualifiés. ATEX, passivation, décapage. Résistance chimique élevée.</p></div></div>
<div class="about-split"><div class="about-content" style="background:var(--off)"><div class="accent-line"><span class="label">Process chimiques</span></div><h2 style="margin-bottom:20px;color:var(--ink)">ATEX · Passivation<br>· Résistance.</h2><p style="color:var(--ink3)">Une équipe de soudeurs et tuyauteurs hautement qualifiés pour les procédés chimiques les plus exigeants. Résistance chimique élevée, ATEX, dégraissage, décapage et passivation ASTM A967.</p><div class="about-tags" style="margin:20px 0 28px"><span class="atag" style="background:var(--red-dim);color:var(--red);border-color:rgba(227,28,28,.15)">ATEX</span><span class="atag" style="background:var(--red-dim);color:var(--red);border-color:rgba(227,28,28,.15)">Passivation ASTM A967</span><span class="atag" style="background:var(--red-dim);color:var(--red);border-color:rgba(227,28,28,.15)">Décapage</span><span class="atag" style="background:var(--red-dim);color:var(--red);border-color:rgba(227,28,28,.15)">Résistance chimique</span></div><span class="btn btn-red" style="margin-top:20px" onclick="nav('contact')">Demander un devis</span></div><div class="about-img-side"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/chimie.jpg" alt="" loading="lazy"><div class="about-img-overlay"></div></div></div>
<div class="cta-band"><div class="cta-band-bg"></div><div class="cta-band-stripe"></div><div class="wrap"><div class="cta-inner"><div class="cta-text"><h2>Projet chimique ?</h2></div><div class="cta-actions"><span class="btn btn-gold" onclick="nav('contact')">Nous contacter</span></div></div></div></div>
</div>

<!-- COSMETIQUE -->
<div id="p-cosmetique" class="page">
<div class="pg-header"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/cosmetique.jpg" alt="" class="pg-header-img"><div class="pg-header-overlay"></div><div class="pg-header-stripe"></div><div class="wrap pg-header-inner"><div class="breadcrumb"><span onclick="nav('home')">Accueil</span><em>/</em><span>Secteurs</span><em>/</em><span>Cosmétique</span></div><span class="label-w" style="display:block;margin-bottom:14px">Secteur Cosmétique</span><h1>Installations Inox<br>Cosmétique.</h1><p>Surface miroir, ISO 22716, hygiène totale, zéro zone morte. Ra 0,4 µm.</p></div></div>
<div class="about-split"><div class="about-content" style="background:var(--off)"><div class="accent-line"><span class="label">Standards cosmétiques</span></div><h2 style="margin-bottom:20px;color:var(--ink)">ISO 22716<br>· Surface miroir.</h2><p style="color:var(--ink3)">Installations inox conformes aux normes strictes du secteur cosmétique. Surfaces miroir Ra 0,4 µm, hygiène totale sans zone morte, conformité ISO 22716.</p><span class="btn btn-red" style="margin-top:20px" onclick="nav('contact')">Demander un devis</span></div><div class="about-img-side"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/cosmetique.jpg" alt="" loading="lazy"><div class="about-img-overlay"></div></div></div>
<div class="cta-band"><div class="cta-band-bg"></div><div class="cta-band-stripe"></div><div class="wrap"><div class="cta-inner"><div class="cta-text"><h2>Projet cosmétique ?</h2></div><div class="cta-actions"><span class="btn btn-gold" onclick="nav('contact')">Nous contacter</span></div></div></div></div>
</div>

<!-- MOBILIER -->
<div id="p-mobilier" class="page">
<div class="pg-header"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/mobilier.jpg" alt="" class="pg-header-img"><div class="pg-header-overlay"></div><div class="pg-header-stripe"></div><div class="wrap pg-header-inner"><div class="breadcrumb"><span onclick="nav('home')">Accueil</span><em>/</em><span>Secteurs</span><em>/</em><span>Mobilier Inox</span></div><span class="label-w" style="display:block;margin-bottom:14px">Mobilier Professionnel</span><h1>Mobilier Inox<br>pour Professionnels.</h1><p>Large gamme sur mesure — cuisine pro, laboratoire, hôpital, bloc opératoire. Découpe laser et pliage numérique.</p></div></div>
<div class="about-split"><div class="about-content" style="background:var(--off)"><div class="accent-line"><span class="label">Mobilier sur mesure</span></div><h2 style="margin-bottom:20px;color:var(--ink)">Inox sur mesure,<br>toutes industries.</h2><p style="color:var(--ink3)">Large gamme de produits sur mesure : matériels de cuisine professionnelle, laboratoire, hôpital, restauration collective, bloc opératoire, salles blanches. Découpe laser, pliage, roulage numérique.</p><span class="btn btn-red" style="margin-top:20px" onclick="nav('contact')">Demander un devis</span></div><div class="about-img-side"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/mobilier.jpg" alt="" loading="lazy"><div class="about-img-overlay"></div></div></div>
<div class="cta-band"><div class="cta-band-bg"></div><div class="cta-band-stripe"></div><div class="wrap"><div class="cta-inner"><div class="cta-text"><h2>Besoin de mobilier inox ?</h2></div><div class="cta-actions"><span class="btn btn-gold" onclick="nav('contact')">Demander un devis</span></div></div></div></div>
</div>

<!-- INTERVENTIONS -->
<div id="p-interventions" class="page">
<div class="pg-header"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/pharmaceutique.jpg" alt="" class="pg-header-img"><div class="pg-header-overlay"></div><div class="pg-header-stripe"></div><div class="wrap pg-header-inner"><div class="breadcrumb"><span onclick="nav('home')">Accueil</span><em>/</em><span>Secteurs</span><em>/</em><span>Interventions</span></div><span class="label-w" style="display:block;margin-bottom:14px">Interventions spécifiques</span><h1>Interventions<br>Spécifiques.</h1><p>Endoscopie, passivation, réparation tuyauterie, soudure orbitale — ponctuelles ou urgentes.</p></div></div>
<section class="bg-off"><div class="wrap"><div class="sh"><div class="accent-line"><span class="label">Sur site ou en atelier</span></div><h2>Nos interventions.</h2></div><div class="svc-grid"><div class="svc"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="10" cy="10" r="6" stroke="currentColor" stroke-width="1.5"/><path d="M16 16l5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div><h4>Endoscopie industrielle</h4><p>Inspection visuelle interne HD. Rapport illustré FDA, documentation qualification.</p></div><div class="svc"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 19l5-12 5 8 5-6 4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><h4>Passivation & dégraissage</h4><p>Sur site — dégraissage alcalin, décapage acide, passivation ASTM A967/A380.</p></div><div class="svc"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M12 4V2M12 22v-2M4 12H2M22 12h-2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg></div><h4>Soudure orbitale urgente</h4><p>Intervention rapide sur site — réparation ou modification avec équipement AXXAIR mobile.</p></div></div></div></section>
<div class="cta-band"><div class="cta-band-bg"></div><div class="cta-band-stripe"></div><div class="wrap"><div class="cta-inner"><div class="cta-text"><h2>Intervention urgente ?</h2></div><div class="cta-actions"><a href="tel:+21650191004" class="btn btn-gold">+216 50 191 004</a><span class="btn btn-ghost-w" onclick="nav('contact')">Formulaire</span></div></div></div></div>
</div>

<!-- SERVICES -->
<div id="p-services" class="page">
<div class="pg-header"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/2-tetes-fermees-axxair.jpg" alt="" class="pg-header-img"><div class="pg-header-overlay"></div><div class="pg-header-stripe"></div><div class="wrap pg-header-inner"><div class="breadcrumb"><span onclick="nav('home')">Accueil</span><em>/</em><span>Services</span></div><span class="label-w" style="display:block;margin-bottom:14px">Services proposés</span><h1>Nos services &<br>savoir-faire.</h1><p>Soudure orbitale, vente AXXAIR, installation, endoscopie, qualification — l'ensemble des services U2I.</p></div></div>
<section class="bg-off"><div class="wrap"><div class="svc-grid">
  <div class="svc"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M12 4V2M12 22v-2M4 12H2M22 12h-2M6.3 6.3L4.9 4.9M19.1 19.1l-1.4-1.4M6.3 17.7L4.9 19.1M19.1 4.9l-1.4 1.4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg></div><h4>Soudure orbitale TIG INOX</h4><p>Solution complète AXXAIR depuis 2015. Têtes fermées et ouvertes, alimentation arc, générateur de gaz. Weld logs, conformité FDA ASME BPE.</p></div>
  <div class="svc"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="4" y="8" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M9 8V6a3 3 0 016 0v2" stroke="currentColor" stroke-width="1.5"/></svg></div><h4>Vente matériel AXXAIR & NITTY GRITTY</h4><p>Partenaire officiel depuis 2015. Machines orbitales, têtes, alimentations, consommables. Formation et SAV inclus.</p></div>
  <div class="svc"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M3 10h18M10 3v18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><h4>Installation lignes de production</h4><p>Montage mécanique, électrique, interconnexion. Mise en service et qualification sur site.</p></div>
  <div class="svc"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="10" cy="10" r="6" stroke="currentColor" stroke-width="1.5"/><path d="M16 16l5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div><h4>Endoscopie & contrôle</h4><p>Inspection interne HD. Rapport illustré FDA. Documentation qualification complète.</p></div>
  <div class="svc"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 19l5-12 5 8 5-6 4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><h4>Dégraissage · Décapage · Passivation</h4><p>Skids compacts ASTM A967/A380. Passivation acide nitrique/citrique. Commande automatique.</p></div>
  <div class="svc"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 6v6c0 5.5 4 10.7 8 12 4-1.3 8-6.5 8-12V6z" stroke="currentColor" stroke-width="1.5"/><path d="M9 12l2 2 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div><h4>Qualification IQ/OQ/PQ</h4><p>Protocoles et rapports GMP/FDA. Dossier complet : certificats, isométries, P&ID, attestations soudeur.</p></div>
</div></div></section>
<div class="cta-band"><div class="cta-band-bg"></div><div class="cta-band-stripe"></div><div class="wrap"><div class="cta-inner"><div class="cta-text"><h2>Discutons de votre projet.</h2></div><div class="cta-actions"><span class="btn btn-gold" onclick="nav('contact')">Nous contacter</span></div></div></div></div>
</div>

<!-- SAVOIR-FAIRE -->
<div id="p-savoirfaire" class="page">
<div class="pg-header"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/2-tetes-fermees-axxair.jpg" alt="" class="pg-header-img"><div class="pg-header-overlay"></div><div class="pg-header-stripe"></div><div class="wrap pg-header-inner"><div class="breadcrumb"><span onclick="nav('home')">Accueil</span><em>/</em><span>Savoir-faire</span></div><span class="label-w" style="display:block;margin-bottom:14px">Expertise technique</span><h1>Notre savoir-faire.</h1><p>Tuyauterie pharmaceutique, modélisation 2D/3D, sous-traitance industrielle — une expertise complète.</p></div></div>
<div class="about-split"><div class="about-img-side"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/2-tetes-fermees-axxair.jpg" alt="" loading="lazy"><div class="about-img-overlay"></div></div><div class="about-content"><span class="label-w">Activité générale</span><h2 style="color:#fff;margin-bottom:18px">Tuyauterie<br>de process.</h2><p>Systèmes de tuyauterie de process essentiels aux installations pharmaceutiques et biotechnologiques. Notre équipe possède une expertise approfondie des codes ASME BPE, ASME B16.1, ASME B31.3.</p><div class="about-tags"><span class="atag">ASME BPE</span><span class="atag">ASME B31.3</span><span class="atag">2D/3D</span><span class="atag">P&ID</span></div></div></div>
<section class="bg-off"><div class="wrap"><div class="sh"><div class="accent-line"><span class="label">Sous-traitance industrielle</span></div><h2>SKID · Filtration · Tôlerie.</h2></div><div class="svc-grid"><div class="svc"><h4>Montage sous-ensembles</h4><p>Montage et assemblage des sous-ensembles des lignes de production — eaux pharmaceutiques, fabrication, remplissage.</p></div><div class="svc"><h4>Fabrication SKID</h4><p>SKID filtration CIP/SIP, chauffage/refroidissement, osmose inverse, manifolds sur mesure.</p></div><div class="svc"><h4>Tôlerie industrielle</h4><p>Découpe laser, pliage, roulage CNC. Fabrication meubles haute qualité pour pharma, alimentaire, hôpital.</p></div></div></div></section>
<div class="cta-band"><div class="cta-band-bg"></div><div class="cta-band-stripe"></div><div class="wrap"><div class="cta-inner"><div class="cta-text"><h2>Parlons de votre projet.</h2></div><div class="cta-actions"><span class="btn btn-gold" onclick="nav('contact')">Nous contacter</span></div></div></div></div>
</div>

<!-- POINTS FORTS (missing from new design — filled from original) -->
<div id="p-pointsforts" class="page">
<div class="pg-header"><div class="pg-header-overlay" style="background:var(--navy);position:absolute;inset:0"></div><div class="pg-header-stripe"></div><div class="wrap pg-header-inner"><div class="breadcrumb"><span onclick="nav('home')">Accueil</span><em>/</em><span>Points forts</span></div><span class="label-w" style="display:block;margin-bottom:14px">Nos atouts</span><h1>Nos points forts.</h1><p>Ce qui fait la différence U2I — expertise, qualité, réactivité et partenariats stratégiques.</p></div></div>
<section class="bg-off"><div class="wrap"><div class="svc-grid">
  <div class="svc"><div style="font-family:'Bebas Neue',sans-serif;font-size:2.5rem;color:var(--red);line-height:1;margin-bottom:12px">01</div><h4>Expertise pharma 10+ ans</h4><p>Équipe d'ingénieurs et techniciens issus d'une expérience de plus de 10 ans dans le domaine pharmaceutique.</p></div>
  <div class="svc"><div style="font-family:'Bebas Neue',sans-serif;font-size:2.5rem;color:var(--red);line-height:1;margin-bottom:12px">02</div><h4>Partenaire officiel AXXAIR</h4><p>Solution complète de soudage orbital AXXAIR depuis 2015. Formation, vente et SAV inclus.</p></div>
  <div class="svc"><div style="font-family:'Bebas Neue',sans-serif;font-size:2.5rem;color:var(--red);line-height:1;margin-bottom:12px">03</div><h4>Conformité totale</h4><p>FDA 21 CFR, ASME BPE, GMP, ISO 9001, 3-A, EHEDG — toutes les certifications requises.</p></div>
  <div class="svc"><div style="font-family:'Bebas Neue',sans-serif;font-size:2.5rem;color:var(--red);line-height:1;margin-bottom:12px">04</div><h4>Qualification IQ/OQ/PQ</h4><p>Rédaction et exécution des protocoles de qualification pour secteurs réglementés.</p></div>
  <div class="svc"><div style="font-family:'Bebas Neue',sans-serif;font-size:2.5rem;color:var(--red);line-height:1;margin-bottom:12px">05</div><h4>Réactivité & flexibilité</h4><p>Intervention rapide sur site ou en atelier. Disponibles pour les urgences. Réponse sous 24h.</p></div>
  <div class="svc"><div style="font-family:'Bebas Neue',sans-serif;font-size:2.5rem;color:var(--red);line-height:1;margin-bottom:12px">06</div><h4>Couverture internationale</h4><p>Tunisie, Algérie et à l'international. Mobilité des équipes sur vos sites de production.</p></div>
</div></div></section>
<div class="cta-band"><div class="cta-band-bg"></div><div class="cta-band-stripe"></div><div class="wrap"><div class="cta-inner"><div class="cta-text"><h2>Convaincu ?</h2><p>Contactez-nous pour discuter de votre projet.</p></div><div class="cta-actions"><span class="btn btn-gold" onclick="nav('contact')">Nous contacter</span></div></div></div></div>
</div>

<!-- EQUIPEMENTS -->
<div id="p-equipements" class="page">
<div class="pg-header"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/2-tetes-fermees-axxair.jpg" alt="" class="pg-header-img"><div class="pg-header-overlay"></div><div class="pg-header-stripe"></div><div class="wrap pg-header-inner"><div class="breadcrumb"><span onclick="nav('home')">Accueil</span><em>/</em><span>Équipements</span></div><span class="label-w" style="display:block;margin-bottom:14px">Parc machine</span><h1>Nos équipements.</h1><p>Solution complète AXXAIR, endoscopie, skids de traitement, machines à commande numérique.</p></div></div>
<section class="bg-off"><div class="wrap"><div class="svc-grid">
  <div class="svc"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M12 4V2M12 22v-2M4 12H2M22 12h-2M6.3 6.3L4.9 4.9M17.7 17.7l-1.1-1.1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg></div><h4>Machine soudure orbitale AXXAIR</h4><p>Solution complète depuis 2015. Têtes fermées et ouvertes, alimentations, générateur de gaz. Weld logs FDA compliant.<br><a href="https://bit.ly/3KUZJcJ" target="_blank" style="color:var(--red);font-family:'Space Mono',monospace;font-size:.6rem;letter-spacing:.06em;margin-top:10px;display:block">Voir AXXAIR ↗</a></p></div>
  <div class="svc"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="10" cy="10" r="6" stroke="currentColor" stroke-width="1.5"/><path d="M16 16l5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div><h4>Endoscopie industrielle</h4><p>Caméra HD articulée, enregistrement vidéo, rapport illustré. Ø 6mm+. Conforme FDA pour qualification.</p></div>
  <div class="svc"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 19l5-12 5 8 5-6 4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><h4>Skid dégraissage / passivation</h4><p>Unités compactes. Dégraissage, décapage acide, passivation nitrique/citrique. ASTM A967/A380.</p></div>
  <div class="svc"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M3 10h18M10 3v18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><h4>Machine commande numérique</h4><p>Découpe laser, pliage, roulage CNC pour tôlerie inox. Séries courtes et grandes séries.</p></div>
  <div class="svc"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="10" cy="10" r="3" stroke="currentColor" stroke-width="1.5"/><path d="M10 3V1M10 19v-1.5M3 10H1M19 10h-1.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg></div><h4>Contrôle de gaz</h4><p>Détection et analyse gazeuse multipoints. Sécurité process, conformité ATEX.</p></div>
  <div class="svc"><div class="svc-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 6v6c0 5.5 4 10.7 8 12 4-1.3 8-6.5 8-12V6z" stroke="currentColor" stroke-width="1.5"/></svg></div><h4>Équipements de coupe & rectification</h4><p>Coupe de précision, rugosité Ra 0,4 µm pour inox et aluminium. Tolérances au micron.</p></div>
</div></div></section>
<div class="cta-band"><div class="cta-band-bg"></div><div class="cta-band-stripe"></div><div class="wrap"><div class="cta-inner"><div class="cta-text"><h2>Besoin d'un équipement ?</h2></div><div class="cta-actions"><span class="btn btn-gold" onclick="nav('contact')">Demander un devis</span></div></div></div></div>
</div>

<!-- RÉFÉRENCES -->
<div id="p-references" class="page">
<div class="pg-header"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/03/inox5.jpg" alt="" class="pg-header-img"><div class="pg-header-overlay"></div><div class="pg-header-stripe"></div><div class="wrap pg-header-inner"><div class="breadcrumb"><span onclick="nav('home')">Accueil</span><em>/</em><span>Références</span></div><span class="label-w" style="display:block;margin-bottom:14px">Nos réalisations</span><h1>Références &<br>réalisations.</h1><p>Projets pharmaceutiques, agroalimentaires, chimiques — découvrez nos réalisations concrètes.</p></div></div>
<section class="bg-off"><div class="wrap"><div class="refs-grid">
  <div class="ref-card"><div class="ref-img"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/03/Nouvel-atelier-8-825x620.jpeg" alt="" loading="lazy"><div class="ref-tag">Infrastructure</div></div><div class="ref-body"><div class="ref-eyebrow">Atelier · 2022</div><div class="ref-title">Nouvel atelier spécialisé — Akouda</div><p class="ref-desc">Inauguration du nouvel atelier U2I spécialisé en préfabrication inox et soudure orbitale. Capacités renforcées.</p></div></div>
  <div class="ref-card"><div class="ref-img"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/A3P-newsV2-825x620.jpg" alt="" loading="lazy"><div class="ref-tag">Événement</div></div><div class="ref-body"><div class="ref-eyebrow">A3P Tunisie · 2022</div><div class="ref-title">Participation A3P Tunisie</div><p class="ref-desc">Présence au plus grand événement de l'industrie pharmaceutique tunisienne — A3P 2022.</p></div></div>
  <div class="ref-card"><div class="ref-img"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/03/IMG_2468-825x618.jpg" alt="" loading="lazy"><div class="ref-tag">Réalisation</div></div><div class="ref-body"><div class="ref-eyebrow">Installation · 2022</div><div class="ref-title">U2I Univers Inox Installation</div><p class="ref-desc">Filiale dédiée aux travaux sur site — montage, assemblage et qualification des installations.</p></div></div>
  <div class="ref-card"><div class="ref-img" style="display:flex;align-items:center;justify-content:center;background:var(--navy2);position:relative"><div style="font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:rgba(255,255,255,.2);letter-spacing:.1em">Boucle WFI</div><div class="ref-tag">Pharmaceutique</div></div><div class="ref-body"><div class="ref-eyebrow">Soudure orbitale</div><div class="ref-title">Boucle distribution WFI</div><p class="ref-desc">Boucle WFI inox 316L. Documentation IQ/OQ/PQ conforme FDA 21 CFR. Ra ≤ 0,8 µm vérifié.</p></div></div>
  <div class="ref-card"><div class="ref-img" style="display:flex;align-items:center;justify-content:center;background:var(--navy2);position:relative"><div style="font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:rgba(255,255,255,.2);letter-spacing:.1em">Ligne sanitaire</div><div class="ref-tag">Agroalimentaire</div></div><div class="ref-body"><div class="ref-eyebrow">Tuyauterie inox</div><div class="ref-title">Ligne sanitaire laitière</div><p class="ref-desc">Tuyauteries inox 316L conformes EHEDG/3-A pour unité de transformation laitière.</p></div></div>
  <div class="ref-card"><div class="ref-img" style="display:flex;align-items:center;justify-content:center;background:var(--navy2);position:relative"><div style="font-family:'Bebas Neue',sans-serif;font-size:1.5rem;color:rgba(255,255,255,.2);letter-spacing:.1em">SKID CIP/SIP</div><div class="ref-tag">Process</div></div><div class="ref-body"><div class="ref-eyebrow">SKID · Process</div><div class="ref-title">SKID filtration CIP/SIP</div><p class="ref-desc">Fabrication SKID sur mesure avec cahier de soudure complet — certificats, isométries, P&ID.</p></div></div>
</div></div></section>
<div class="cta-band"><div class="cta-band-bg"></div><div class="cta-band-stripe"></div><div class="wrap"><div class="cta-inner"><div class="cta-text"><h2>Votre réalisation sera la prochaine.</h2></div><div class="cta-actions"><span class="btn btn-gold" onclick="nav('contact')">Démarrer un projet</span></div></div></div></div>
</div>

<!-- CERTIFICATIONS -->
<div id="p-certifications" class="page">
<div class="pg-header"><div class="pg-header-overlay" style="background:var(--navy);position:absolute;inset:0"></div><div class="pg-header-stripe"></div><div class="wrap pg-header-inner"><div class="breadcrumb"><span onclick="nav('home')">Accueil</span><em>/</em><span>Certifications</span></div><span class="label-w" style="display:block;margin-bottom:14px">Garanties qualité</span><h1>Certifications<br>& conformité.</h1><p>Nos certifications sont la preuve de notre engagement envers l'excellence et les standards les plus exigeants.</p></div></div>
<section class="bg-off"><div class="wrap">
  <div class="sh center"><div class="accent-line" style="justify-content:center"><span class="label">Standards internationaux</span></div><h2>Nos certifications.</h2></div>
  <div class="cert-row">
    <div class="cert-chip"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2l3 7h7l-5.5 4 2 7L11 16l-6.5 4 2-7L1 9h7z" stroke="currentColor" stroke-width="1.4"/></svg><div><div class="cert-chip-n">ISO 9001</div><div class="cert-chip-s">Management Qualité</div></div></div>
    <div class="cert-chip"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2L3 6v6c0 4.8 3.5 9.3 8 10.5C16.5 21.3 20 16.8 20 12V6z" stroke="currentColor" stroke-width="1.4"/></svg><div><div class="cert-chip-n">CE Mark</div><div class="cert-chip-s">Conformité Européenne</div></div></div>
    <div class="cert-chip"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="1.4"/><path d="M8 11l2 2 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg><div><div class="cert-chip-n">ASME BPE</div><div class="cert-chip-s">Process Equipment</div></div></div>
    <div class="cert-chip"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="3" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M3 10h16M10 3v16" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg><div><div class="cert-chip-n">FDA 21 CFR</div><div class="cert-chip-s">Pharmaceutical</div></div></div>
    <div class="cert-chip"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="1.4"/><path d="M8 11h6M11 8v6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg><div><div class="cert-chip-n">3-A / EHEDG</div><div class="cert-chip-s">Hygiène alimentaire</div></div></div>
    <div class="cert-chip"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 15l4-10 4 7 4-5 3.5 8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg><div><div class="cert-chip-n">ASTM A967</div><div class="cert-chip-s">Passivation</div></div></div>
    <div class="cert-chip"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2L3 6v6c0 4.8 3.5 9.3 8 10.5C16.5 21.3 20 16.8 20 12V6z" stroke="currentColor" stroke-width="1.4"/></svg><div><div class="cert-chip-n">GMP / FDA</div><div class="cert-chip-s">Bonnes pratiques</div></div></div>
    <div class="cert-chip"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="1.4"/><path d="M11 7v4l3 2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg><div><div class="cert-chip-n">IQ/OQ/PQ</div><div class="cert-chip-s">Qualification</div></div></div>
  </div>
  <div style="margin-top:60px"><div class="sh"><div class="accent-line"><span class="label">Processus qualité</span></div><h2>De la conception à la qualification.</h2></div>
  <div class="svc-grid">
    <div class="svc"><div style="font-family:'Bebas Neue',sans-serif;font-size:2.5rem;color:var(--red);line-height:1;margin-bottom:12px">01</div><h4>Sourcing contrôlé</h4><p>Certificats d'analyse fournis. Inox 316L/304L certifié, raccords conformes ASME BPE.</p></div>
    <div class="svc"><div style="font-family:'Bebas Neue',sans-serif;font-size:2.5rem;color:var(--red);line-height:1;margin-bottom:12px">02</div><h4>Soudure documentée</h4><p>Chaque soudure enregistrée (weld log), numérotée, photographiée. Paramètres archivés.</p></div>
    <div class="svc"><div style="font-family:'Bebas Neue',sans-serif;font-size:2.5rem;color:var(--red);line-height:1;margin-bottom:12px">03</div><h4>Contrôle endoscopique</h4><p>Inspection visuelle interne 100%. Rapport illustré conforme GMP. Vérification Ra.</p></div>
    <div class="svc"><div style="font-family:'Bebas Neue',sans-serif;font-size:2.5rem;color:var(--red);line-height:1;margin-bottom:12px">04</div><h4>Passivation & tests</h4><p>ASTM A967. Tests d'étanchéité hydrostatique. Documentation complète.</p></div>
    <div class="svc"><div style="font-family:'Bebas Neue',sans-serif;font-size:2.5rem;color:var(--red);line-height:1;margin-bottom:12px">05</div><h4>Qualification IQ/OQ/PQ</h4><p>Rédaction et exécution protocoles. Dossier qualité complet, P&ID, isométries.</p></div>
    <div class="svc"><div style="font-family:'Bebas Neue',sans-serif;font-size:2.5rem;color:var(--red);line-height:1;margin-bottom:12px">06</div><h4>Livraison certifiée</h4><p>Dossier complet — certificats, isométries, P&ID, fiches techniques, attestations soudeur, endoscopie.</p></div>
  </div></div>
</div></section>
<div class="cta-band"><div class="cta-band-bg"></div><div class="cta-band-stripe"></div><div class="wrap"><div class="cta-inner"><div class="cta-text"><h2>Besoin de nos certificats ?</h2></div><div class="cta-actions"><span class="btn btn-gold" onclick="nav('contact')">Nous contacter</span></div></div></div></div>
</div>

<!-- BLOG -->
<div id="p-blog" class="page">
<div class="pg-header"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/03/Nouvel-atelier-8-825x620.jpeg" alt="" class="pg-header-img"><div class="pg-header-overlay"></div><div class="pg-header-stripe"></div><div class="wrap pg-header-inner"><div class="breadcrumb"><span onclick="nav('home')">Accueil</span><em>/</em><span>Blog</span></div><span class="label-w" style="display:block;margin-bottom:14px">Blog & Actualités</span><h1>Actualités &<br>insights.</h1><p>Nouvelles de l'atelier, événements, retours de projets et veille technique.</p></div></div>
<section class="bg-off"><div class="wrap">
  <div class="blog-full-grid">
    <div class="blog-list">
      <div class="blog-card"><div class="blog-card-img" style="height:200px"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/03/Nouvel-atelier-8-825x620.jpeg" alt="" loading="lazy"></div><div class="blog-card-body"><div class="bc-meta"><span class="bc-cat">News</span>·<span>15 mars 2022</span></div><div class="bc-title">Nouvel atelier spécialisé — Akouda, Sousse</div><p class="bc-excerpt">Nous avons le plaisir de vous présenter notre nouvel atelier spécialisé dans la préfabrication inox et la soudure orbitale à Akouda. Capacités renforcées et contrôle qualité intégré.</p><span class="btn btn-outline" style="font-size:.6rem;padding:9px 16px">Lire l'article</span></div></div>
      <div class="blog-card"><div class="blog-card-img" style="height:200px"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/A3P-newsV2-825x620.jpg" alt="" loading="lazy"></div><div class="blog-card-body"><div class="bc-meta"><span class="bc-cat">Événement</span>·<span>22 février 2022</span></div><div class="bc-title">A3P Tunisie — U2I fier de sa participation</div><p class="bc-excerpt">U2I Univers Inox Industriel est fier de sa participation au plus grand événement de l'industrie pharmaceutique tunisienne — A3P Tunisie 2022.</p><span class="btn btn-outline" style="font-size:.6rem;padding:9px 16px">Lire l'article</span></div></div>
      <div class="blog-card"><div class="blog-card-img" style="height:200px"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/03/IMG_2468-825x618.jpg" alt="" loading="lazy"></div><div class="blog-card-body"><div class="bc-meta"><span class="bc-cat">Réalisation</span>·<span>22 février 2022</span></div><div class="bc-title">U2I Univers Inox Industriel Installation</div><p class="bc-excerpt">Filiale chargée des installations sur site — spécialistes en tuyauteries inox et équipements industriels.</p><span class="btn btn-outline" style="font-size:.6rem;padding:9px 16px">Lire l'article</span></div></div>
      <div class="blog-card"><div class="blog-card-img" style="height:200px;background:var(--navy2);display:flex;align-items:center;justify-content:center"><div style="font-family:'Bebas Neue',sans-serif;color:rgba(255,255,255,.15);font-size:1.5rem;letter-spacing:.1em">Soudure orbitale</div></div><div class="blog-card-body"><div class="bc-meta"><span class="bc-cat">Technique</span>·<span>Janvier 2022</span></div><div class="bc-title">Soudure orbitale TIG : indispensable en pharma</div><p class="bc-excerpt">La soudure orbitale garantit une reproductibilité parfaite, documentation complète et conformité totale FDA/ASME BPE.</p><span class="btn btn-outline" style="font-size:.6rem;padding:9px 16px">Lire l'article</span></div></div>
      <div class="blog-card"><div class="blog-card-img" style="height:200px;background:var(--navy2);display:flex;align-items:center;justify-content:center"><div style="font-family:'Bebas Neue',sans-serif;color:rgba(255,255,255,.15);font-size:1.5rem;letter-spacing:.1em">Passivation inox</div></div><div class="blog-card-body"><div class="bc-meta"><span class="bc-cat">Technique</span>·<span>Décembre 2021</span></div><div class="bc-title">Passivation inox ASTM A967 : guide pratique</div><p class="bc-excerpt">Comprendre les étapes du traitement de surface inox — dégraissage, décapage, passivation — et leur importance pour les industries pharmaceutique et alimentaire.</p><span class="btn btn-outline" style="font-size:.6rem;padding:9px 16px">Lire l'article</span></div></div>
    </div>
    <div class="blog-sidebar">
      <div class="bsb"><div class="bsb-title">Thèmes</div><div class="bsb-tags"><span class="bsb-tag">Soudure orbitale</span><span class="bsb-tag">Pharma</span><span class="bsb-tag">GMP/FDA</span><span class="bsb-tag">AXXAIR</span><span class="bsb-tag">Passivation</span><span class="bsb-tag">Agro</span><span class="bsb-tag">Endoscopie</span><span class="bsb-tag">IQ/OQ/PQ</span></div></div>
      <div class="bsb"><div class="bsb-title">Articles récents</div>
        <div class="recent-post"><div class="rp-thumb"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/03/Nouvel-atelier-8-825x620.jpeg" alt="" style="width:100%;height:100%;object-fit:cover"></div><div><div class="rp-title">Nouvel atelier — Akouda</div><div class="rp-date">15 mars 2022</div></div></div>
        <div class="recent-post"><div class="rp-thumb"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/02/A3P-newsV2-825x620.jpg" alt="" style="width:100%;height:100%;object-fit:cover"></div><div><div class="rp-title">A3P Tunisie — Participation</div><div class="rp-date">22 février 2022</div></div></div>
        <div class="recent-post"><div class="rp-thumb"><img src="https://www.u2iprocess.com/wp-content/uploads/2022/03/IMG_2468-825x618.jpg" alt="" style="width:100%;height:100%;object-fit:cover"></div><div><div class="rp-title">U2I Installation</div><div class="rp-date">22 février 2022</div></div></div>
      </div>
      <div class="nl-box"><div class="nl-title">Newsletter</div><p class="nl-desc">Recevez nos actualités et insights techniques.</p><input type="email" class="nl-input" placeholder="votre@email.com"><button class="btn btn-red" style="width:100%;justify-content:center" onclick="alert('Inscription enregistrée !')">S'inscrire</button></div>
      <div class="bsb" style="background:var(--navy);border-color:rgba(255,255,255,.06)"><div class="bsb-title" style="color:rgba(255,255,255,.2)">Brochure U2I</div><p style="font-size:.84rem;color:rgba(255,255,255,.45);margin-bottom:16px;font-weight:300">Téléchargez notre brochure complète.</p><a href="https://www.u2iprocess.com/wp-content/uploads/2022/03/depliant-U2I-2016-01.pdf" target="_blank" class="btn btn-red" style="width:100%;justify-content:center;font-size:.6rem">Télécharger PDF</a></div>
    </div>
  </div>
</div></section>
<div class="cta-band"><div class="cta-band-bg"></div><div class="cta-band-stripe"></div><div class="wrap"><div class="cta-inner"><div class="cta-text"><h2>Un projet à discuter ?</h2></div><div class="cta-actions"><span class="btn btn-gold" onclick="nav('contact')">Nous contacter</span></div></div></div></div>
</div>

<!-- CONTACT -->
<div id="p-contact" class="page">
<div class="pg-header"><div class="pg-header-overlay" style="background:var(--navy);position:absolute;inset:0"></div><div class="pg-header-stripe"></div><div class="wrap pg-header-inner"><div class="breadcrumb"><span onclick="nav('home')">Accueil</span><em>/</em><span>Contact</span></div><span class="label-w" style="display:block;margin-bottom:14px">Contact</span><h1>Vous avez un<br>nouveau projet ?<br>Contactez-nous.</h1><p>Rue Omar el Mokhtar, Kabissa 4022, Akouda — Sousse, Tunisie. Réponse sous 24h.</p></div></div>
<section class="bg-off"><div class="wrap"><div class="contact-wrap">
  <div>
    <div class="c-info-item"><div class="c-ico"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17.5 13.5c0 .35-.08.69-.25 1.01l-.8 1.38c-.28.47-.64.86-1.07 1.17-.43.28-.91.44-1.41.44C7.05 17.5 2.5 12.95 2.5 5.53c0-.5.16-.98.44-1.41l1.17-1.07c.32-.17.66-.25 1.01-.25.13 0 .27.03.41.09l2.63 1.15c.45.2.76.65.76 1.14V6.9c0 .28-.12.54-.34.73l-.85.78c.66 1.25 1.79 2.38 3.04 3.04l.78-.85c.19-.22.45-.34.73-.34h1.72c.49 0 .94.31 1.14.76l1.15 2.63c.06.14.09.28.09.41z" stroke="currentColor" stroke-width="1.4"/></svg></div><div><div class="c-info-label">Téléphone</div><div class="c-info-val"><a href="tel:+21650191004">+216 50 191 004</a></div></div></div>
    <div class="c-info-item"><div class="c-ico"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2.5" y="5" width="15" height="11" rx="1.5" stroke="currentColor" stroke-width="1.4"/><path d="M2.5 7.5L10 12.5l7.5-5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg></div><div><div class="c-info-label">Email</div><div class="c-info-val"><a href="mailto:contact@u2iprocess.com">contact@u2iprocess.com</a></div></div></div>
    <div class="c-info-item"><div class="c-ico"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2C7 2 4.5 4.5 4.5 7.5c0 4.5 5.5 10.5 5.5 10.5s5.5-6 5.5-10.5C15.5 4.5 13 2 10 2z" stroke="currentColor" stroke-width="1.4"/><circle cx="10" cy="7.5" r="2.5" stroke="currentColor" stroke-width="1.4"/></svg></div><div><div class="c-info-label">Adresse</div><div class="c-info-val">Rue Omar el Mokhtar, Kabissa 4022<br>Akouda, Sousse — Tunisie</div></div></div>
    <div class="c-info-item"><div class="c-ico"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.4"/><path d="M10 2C10 2 7 5.5 7 10s3 8 3 8M10 2C10 2 13 5.5 13 10s-3 8-3 8M2 10h16" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg></div><div><div class="c-info-label">Site officiel</div><div class="c-info-val"><a href="https://www.u2iprocess.com/?i=82779133001506" target="_blank">www.u2iprocess.com ↗</a></div></div></div>
    <div style="margin-top:8px;display:flex;gap:8px">
      <a href="https://www.facebook.com/groupe.univers.inox" target="_blank" class="foot-sb" style="background:var(--surf);color:var(--ink3);border-color:var(--bdr2);width:40px;height:40px">F</a>
      <a href="https://tn.linkedin.com/in/amen-allah-bouker-a308a56b" target="_blank" class="foot-sb" style="background:var(--surf);color:var(--ink3);border-color:var(--bdr2);width:40px;height:40px">in</a>
      <a href="https://www.youtube.com/channel/UC0RVYBuW1ONzYOZHDdi13-w" target="_blank" class="foot-sb" style="background:var(--surf);color:var(--ink3);border-color:var(--bdr2);width:40px;height:40px">▶</a>
    </div>
    <div style="margin-top:28px;background:var(--white);border:1px solid var(--bdr);border-radius:var(--rl);padding:22px;border-left:3px solid var(--red)">
      <div class="label" style="margin-bottom:8px">Réponse garantie sous 24h</div>
      <p style="font-size:.87rem;color:var(--ink3);line-height:1.65">Toute demande reçoit une réponse sous <strong>24h ouvrées</strong>. Devis technique sous <strong>48h</strong>.</p>
    </div>
  </div>
  <div class="form-card">
    <div style="margin-bottom:28px"><span class="label" style="margin-bottom:8px;display:block">Formulaire de contact</span><h3 style="font-family:'Bebas Neue',sans-serif;font-size:2rem;letter-spacing:.02em">Envoyez-nous un message.</h3></div>
    <form onsubmit="submitForm(event,'fm1')">
      <div class="form-row"><div class="fg"><label class="fl">Prénom *</label><input type="text" class="fi" required></div><div class="fg"><label class="fl">Nom *</label><input type="text" class="fi" required></div></div>
      <div class="form-row"><div class="fg"><label class="fl">Email *</label><input type="email" class="fi" required></div><div class="fg"><label class="fl">Téléphone</label><input type="tel" class="fi"></div></div>
      <div class="fg"><label class="fl">Entreprise</label><input type="text" class="fi"></div>
      <div class="fg"><label class="fl">Secteur d'activité</label><select class="fsel"><option value="">Sélectionner...</option><option>Pharmaceutique / Biotech</option><option>Agroalimentaire</option><option>Chimique / Pétrochimie</option><option>Cosmétique</option><option>Mobilier professionnel</option><option>Autre</option></select></div>
      <div class="fg"><label class="fl">Objet *</label><select class="fsel" required><option value="">Sélectionner...</option><option>Demande de devis tuyauterie</option><option>Soudure orbitale</option><option>Matériel AXXAIR</option><option>Information technique</option><option>Autre</option></select></div>
      <div class="fg"><label class="fl">Message *</label><textarea class="fta" required placeholder="Décrivez votre projet ou votre besoin..."></textarea></div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px"><input type="checkbox" required style="accent-color:var(--red);width:14px;height:14px;flex-shrink:0"><label style="font-size:.8rem;color:var(--ink4)">J'accepte le traitement de mes données pour répondre à ma demande.</label></div>
      <button type="submit" class="btn btn-red" style="width:100%;justify-content:center;padding:16px">Envoyer le message <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      <div id="fm1" class="success-msg">✓ MESSAGE ENVOYÉ — Nous vous répondons sous 24h ouvrées.</div>
    </form>
  </div>
</div></div></section>
</div>

<!-- ═══ FOOTER ═══ -->
<footer>
  <div class="foot-inner"><div class="wrap">
    <div class="foot-grid">
      <div class="foot-logo">
        <a href="#" onclick="nav('home');return false" class="logo-wrap">
          <div><div class="logo-name">U2I Process</div><span class="logo-sub">Univers Inox Industriel</span></div>
        </a>
        <p>Fondée en 2015 à Akouda, Sousse — spécialistes en tuyauterie inox, soudure orbitale et installations industrielles haute exigence. Partenaire officiel AXXAIR.</p>
        <div class="foot-soc">
          <a href="https://www.facebook.com/groupe.univers.inox" target="_blank" class="foot-sb">F</a>
          <a href="https://tn.linkedin.com/in/amen-allah-bouker-a308a56b" target="_blank" class="foot-sb">in</a>
          <a href="https://www.youtube.com/channel/UC0RVYBuW1ONzYOZHDdi13-w" target="_blank" class="foot-sb">▶</a>
        </div>
      </div>
      <div class="foot-col"><h5>Navigation</h5><ul>
        <li><span onclick="nav('home')">Accueil</span></li>
        <li><span onclick="nav('about')">Présentation</span></li>
        <li><span onclick="nav('savoirfaire')">Savoir-faire</span></li>
        <li><span onclick="nav('services')">Services proposés</span></li>
        <li><span onclick="nav('equipements')">Équipements</span></li>
        <li><span onclick="nav('references')">Références</span></li>
        <li><span onclick="nav('certifications')">Certifications</span></li>
        <li><span onclick="nav('blog')">Blog / Actualités</span></li>
        <li><span onclick="nav('contact')">Contact</span></li>
      </ul></div>
      <div class="foot-col"><h5>Secteurs</h5><ul>
        <li><span onclick="nav('pharma')">Pharmaceutique</span></li>
        <li><span onclick="nav('agro')">Agroalimentaire</span></li>
        <li><span onclick="nav('chimie')">Chimique</span></li>
        <li><span onclick="nav('cosmetique')">Cosmétique</span></li>
        <li><span onclick="nav('mobilier')">Mobilier Inox</span></li>
        <li><span onclick="nav('interventions')">Interventions spécifiques</span></li>
      </ul>
      <h5 style="margin-top:24px">Contact</h5>
      <ul>
        <li><a href="tel:+21650191004">+216 50 191 004</a></li>
        <li><a href="mailto:contact@u2iprocess.com">contact@u2iprocess.com</a></li>
        <li><a href="https://www.u2iprocess.com/?i=82779133001506" target="_blank">www.u2iprocess.com ↗</a></li>
        <li style="color:rgba(255,255,255,.25);font-size:.82rem">Rue Omar el Mokhtar<br>Kabissa 4022 Akouda, Tunisie</li>
      </ul></div>
    </div>
    <div class="foot-bottom">
      <p>© 2026 Groupe Univers Inox Industriel U2I. Tous droits réservés.</p>
      <div style="display:flex;gap:20px"><a href="#">Mentions légales</a><a href="https://www.u2iprocess.com/?i=82779133001506" target="_blank">Site officiel ↗</a></div>
    </div>
  </div></div>
</footer>
`;
