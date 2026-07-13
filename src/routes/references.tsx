import { createFileRoute, Link } from "@tanstack/react-router";

import referencesBgImage from "@/assets/axxair-1.jpg";
import axxairLogoImage from "@/assets/partners/AXXAIR-logo.png";
import sanofiLogoImage from "@/assets/partners/Sanofi.png";
import hikmaLogoImage from "@/assets/partners/LOGO HIKMA.jpg";
import saiphLogoImage from "@/assets/partners/LOGO SAIPH.png";
import teriakLogoImage from "@/assets/partners/LOGO TERIAK.png";
import unimedLogoImage from "@/assets/partners/UNIMED LOGO .png";
import cevaLogoImage from "@/assets/partners/LOGO_CEVA_SANTE_ANIMALE.jpg";
import deliceLogoImage from "@/assets/partners/LOGO DELICE.jpg";

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
            <span className="block h-px w-10 bg-[#e0141c]" />
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            Accueil
          </Link>
          <span className="text-white/20">›</span>
          <span className="text-[#e0141c] font-semibold">Références</span>
        </div>
      </div>

      <main>
        {/* Partenaires */}
        <section className="section-dark py-20">
          <div className="wrap">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Nos Partenaires</h2>
              <p className="text-white/60 max-w-2xl mx-auto">Ils nous font confiance pour la réalisation de leurs projets les plus exigeants.</p>
            </div>
            
            <div className="flex justify-center mb-12">
               <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center">
                 <img src={axxairLogoImage} alt="AXXAIR" className="h-20 object-contain mb-4" />
                 <span className="text-white/80 font-semibold uppercase tracking-widest text-sm">Partenaire officiel depuis 2015</span>
               </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {PARTNER_LOGOS.map((partner, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 flex items-center justify-center h-32 hover:scale-105 transition-transform duration-300 shadow-lg">
                  <img src={partner.image} alt={partner.title} className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="section-paper py-20">
          <div className="wrap">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">Nos Certifications</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">Gage de notre engagement envers la qualité et l'excellence opérationnelle.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-xl border border-neutral-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                  <div className="h-64 w-full bg-neutral-100 p-2 flex-grow">
                     <img src={cert.image} alt={cert.title} className="w-full h-full object-contain" />
                  </div>
                  <div className="p-4 text-center border-t border-neutral-100">
                    <h3 className="text-sm font-bold text-neutral-800">{cert.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
