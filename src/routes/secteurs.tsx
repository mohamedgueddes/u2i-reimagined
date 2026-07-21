import { createFileRoute, Link } from "@tanstack/react-router";

import workshopImage from "@/assets/about-workshop.jpg";
import pharmaImage from "@/assets/hero-pharma.jpg";
import agroImage from "@/assets/hero-agro.jpg";
import chimieImage from "@/assets/sector-chimie.jpg";
import cosmetiqueImage from "@/assets/sector-cosmetique.jpg";
import mobilierImage from "@/assets/sector-mobilier.jpg";

import img1 from "@/assets/WhatsApp Image 2026-07-08 at 1.13.24 PM.jpeg";
import img2 from "@/assets/WhatsApp Image 2026-07-08 at 1.13.25 PM.jpeg";
import img3 from "@/assets/20230329_100358.jpg";

export const Route = createFileRoute("/secteurs")({
  component: SectorsPage,
});

const SECTORS_DATA = [
  {
    id: "pharmaceutique",
    title: "Pharmaceutique",
    tag: "Exigence Pharma",
    description: "Nous réalisons des installations de tuyauterie en acier inoxydable répondant aux exigences les plus strictes du secteur pharmaceutique. Notre expertise en soudure orbitale garantit l'absence de zones de rétention et une traçabilité totale.",
    mainImage: pharmaImage,
    gallery: [pharmaImage, img1, img2]
  },
  {
    id: "agroalimentaire",
    title: "Agroalimentaire",
    tag: "Qualité Alimentaire",
    description: "Conception et réalisation de réseaux de fluides process pour l'industrie agroalimentaire. Nous assurons le respect des normes d'hygiène avec des finitions adaptées pour faciliter le nettoyage en place (NEP/CIP).",
    mainImage: agroImage,
    gallery: [agroImage, img3, img1]
  },
  {
    id: "chimique",
    title: "Chimique",
    tag: "Procédés Sensibles",
    description: "Expertise dans le transfert de fluides complexes et agressifs. Nos soudeurs qualifiés réalisent des réseaux sécurisés et durables, adaptés aux contraintes spécifiques de la chimie fine et industrielle.",
    mainImage: chimieImage,
    gallery: [chimieImage, img2, img3]
  },
  {
    id: "cosmetique",
    title: "Cosmétique",
    tag: "Lignes Propres",
    description: "Solutions de tuyauterie sur mesure pour l'industrie cosmétique. Nous portons une attention particulière à la qualité des états de surface pour préserver l'intégrité de vos produits sensibles.",
    mainImage: cosmetiqueImage,
    gallery: [cosmetiqueImage, img1, img2]
  },
  {
    id: "mobilier-inox",
    title: "Mobilier Inox",
    tag: "Sur Mesure",
    description: "Conception et fabrication sur mesure de mobilier en acier inoxydable pour les salles blanches, laboratoires et zones de production (tables, chariots, passerelles, garde-corps...).",
    mainImage: mobilierImage,
    gallery: [mobilierImage, img3, img1]
  }
];

function SectorsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Page Hero Banner */}
      <section className="relative overflow-hidden" style={{ height: "340px" }}>
        <img
          src={workshopImage}
          alt="Secteurs d'activité"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        <div className="wrap relative z-10 flex h-full flex-col justify-center pt-24">
          <div className="mb-4 flex items-center gap-2 text-sm text-white/50">
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#e0141c]">Secteurs</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#e0141c]">Nos Secteurs</span>
          </div>
          <h1
            className="text-white font-black"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
          >
            Domaines d'expertise
          </h1>
        </div>
      </section>

      {/* Breadcrumb bar */}
      <div className="bg-[#111] border-b border-white/10 py-3">
        <div className="wrap flex items-center gap-2 text-sm text-white/50">
          <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            Accueil
          </Link>
          <span className="text-white/20">›</span>
          <span className="text-[#e0141c] font-semibold">Secteurs</span>
        </div>
      </div>

      {/* Main Content */}
      <main>
        {SECTORS_DATA.map((sector, index) => {
          const isDark = index % 2 === 0;
          const sectionClass = isDark ? "section-dark py-20" : "section-paper py-20";
          const titleClass = isDark ? "text-white mb-6 font-black" : "text-neutral-900 mb-6 font-black";
          const textClass = isDark ? "space-y-5 text-white/70 leading-relaxed text-base" : "space-y-5 text-neutral-600 leading-relaxed text-base";
          const imageOrder = index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2';
          const textOrder = index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1';

          return (
            <section key={sector.id} id={sector.id} className={`${sectionClass} ${!isDark ? 'rounded-none m-0' : ''}`}>
              <div className="wrap">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                  <div className={`${textOrder}`}>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#e0141c]">{sector.tag}</span>
                    </div>
                    <h2 className={titleClass} style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
                      {sector.title}
                    </h2>
                    <div className={textClass}>
                      <p>{sector.description}</p>
                    </div>
                  </div>
                  <div className={`${imageOrder}`}>
                    {/* Main Image */}
                    <div className={`overflow-hidden rounded-2xl mb-4 ${isDark ? 'border border-white/10 shadow-xl' : 'shadow-2xl'}`}>
                      <img src={sector.mainImage} alt={sector.title} className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    {/* Gallery */}
                    <div className="grid grid-cols-3 gap-4">
                      {sector.gallery.map((img, i) => (
                        <div key={i} className={`overflow-hidden rounded-xl aspect-video ${isDark ? 'border border-white/10' : 'shadow-md'}`}>
                          <img src={img} alt={`${sector.title} gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
