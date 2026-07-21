import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

import workshopImage from "@/assets/about-workshop.jpg";

// Import all endoscopie images
import endo1 from "@/assets/equipments/Endoscopie/20200910_114715.jpg";
import endo2 from "@/assets/equipments/Endoscopie/20200910_114715 (1).jpg";
import endo3 from "@/assets/equipments/Endoscopie/IMG-20200912-WA0013.jpg";
import endo4 from "@/assets/equipments/Endoscopie/IMG-20200912-WA0028.jpg";
import endo5 from "@/assets/equipments/Endoscopie/ait2013-studio-192-edit-_zf-2864-10644-1-001__2_1.jpg";

// Import all gaz control images
import gas1 from "@/assets/equipments/Machine de contrôle de gaz/IMG-20200912-WA0014.jpg";
import gas2 from "@/assets/equipments/Machine de contrôle de gaz/IMG-20200912-WA0016.jpg";
import gas3 from "@/assets/equipments/Machine de contrôle de gaz/IMG_2948-rotated-e1646059406575.jpg";
import gas4 from "@/assets/equipments/Machine de contrôle de gaz/IMG_3059-rotated-e1646059387145.jpg";

// Import all cutting images
import cut1 from "@/assets/equipments/Machine de coupe rectification/20200910_113443.jpg";
import cut2 from "@/assets/equipments/Machine de coupe rectification/6-CC81_850.jpg";
import cut3 from "@/assets/equipments/Machine de coupe rectification/7-CC121_850.jpg";
import cut4 from "@/assets/equipments/Machine de coupe rectification/7-coupe-tube-orbital-CC121-AXXAIR.png";
import cut5 from "@/assets/equipments/Machine de coupe rectification/8-DCPACK_850.jpg";
import cut6 from "@/assets/equipments/Machine de coupe rectification/9-dresseuse-de-face.png";

// Import all welding images
import weld1 from "@/assets/equipments/Machine de soudure orbitale/2-SATF-65ND_850.jpg";
import weld2 from "@/assets/equipments/Machine de soudure orbitale/2-tetes-fermees-axxair.jpg";
import weld3 from "@/assets/equipments/Machine de soudure orbitale/20200617_113315.jpg";
import weld4 from "@/assets/equipments/Machine de soudure orbitale/20200910_123556.jpg";
import weld5 from "@/assets/equipments/Machine de soudure orbitale/3-SATF-115ND_850.jpg";
import weld6 from "@/assets/equipments/Machine de soudure orbitale/IMG_20170403_102322.jpg";
import weld7 from "@/assets/equipments/Machine de soudure orbitale/IMG_20170403_143150.jpg";
import weld8 from "@/assets/equipments/Machine de soudure orbitale/IMG_2945-1-rotated.jpg";
import weld9 from "@/assets/equipments/Machine de soudure orbitale/IMG_2951.jpg";
import weld10 from "@/assets/equipments/Machine de soudure orbitale/SATFX-76.jpg";
import weld11 from "@/assets/equipments/Machine de soudure orbitale/SATO-115E43.jpg";
import weld12 from "@/assets/equipments/Machine de soudure orbitale/SAXX-200.jpg";

// Import all CNC images
import cnc1 from "@/assets/equipments/Machine à commande numérique/20210222_093607.jpg";
import cnc2 from "@/assets/equipments/Machine à commande numérique/IMG_4259.jpg";
import cnc3 from "@/assets/equipments/Machine à commande numérique/IMG_4260.jpg";
import cnc4 from "@/assets/equipments/Machine à commande numérique/IMG_4261.jpg";
import cnc5 from "@/assets/equipments/Machine à commande numérique/IMG_4283.jpg";
import cnc6 from "@/assets/equipments/Machine à commande numérique/IMG_4292.jpg";

// Import all skid images
import skid1 from "@/assets/equipments/Skid de DégraissageDécapagePassivation/20211014_090938.jpg";
import skid2 from "@/assets/equipments/Skid de DégraissageDécapagePassivation/IMG-20200912-WA0000.jpg";
import skid3 from "@/assets/equipments/Skid de DégraissageDécapagePassivation/IMG-20200912-WA0042.jpg";

export const Route = createFileRoute("/equipements")({
  component: EquipmentsPage,
});

const EQUIPMENTS_DATA = [
  {
    id: "endoscopie",
    title: "Endoscopie",
    tag: "Contrôle Visuel",
    description: "Le contrôle visuel par endoscopie est indispensable pour valider la pénétration, la géométrie et la coloration des soudures internes. Notre équipement de haute technologie permet une inspection détaillée et archivée des réseaux de tuyauterie les plus inaccessibles.",
    specs: [
      "Sondes souples et rigides de diamètres variés",
      "Enregistrement vidéo HD et photos haute résolution",
      "Rapports détaillés de conformité FDA/EMA",
      "Éclairage LED à haute intensité intégré",
    ],
    images: [endo1, endo2, endo3, endo4, endo5],
  },
  {
    id: "controle-gaz",
    title: "Contrôle de gaz",
    tag: "Pureté Atmosphérique",
    description: "Le contrôle de l'oxygène résiduel (inertage) est crucial pour éviter la décoloration et l'oxydation de l'inox (le 'rochage') lors du soudage. Nos analyseurs de gaz de haute précision mesurent l'oxygène en ppm (parties par million) pour garantir des soudures de classe pharmaceutique.",
    specs: [
      "Mesure de l'oxygène résiduel jusqu'à 1 ppm",
      "Enregistrement et traçabilité informatique des données",
      "Compatibilité avec l'argon de soudage haute pureté",
      "Calibration automatique certifiée",
    ],
    images: [gas1, gas2, gas3, gas4],
  },
  {
    id: "coupe-rectification",
    title: "Coupe & rectification",
    tag: "Préparation Parfaite",
    description: "Une soudure orbitale parfaite exige une préparation irréprochable des tubes. Nos machines de coupe orbitale et de dressage de face assurent une coupe parfaitement d'équerre (sans bavure) et une rectification précise de l'épaisseur du tube.",
    specs: [
      "Coupe orbitale sans déformation du tube",
      "Dressage de face micrométrique",
      "Adaptabilité sur tous diamètres standards (ISO/ASME/OD)",
      "Vitesse réglable pour préservation de la structure matière",
    ],
    images: [cut1, cut2, cut3, cut4, cut5, cut6],
  },
  {
    id: "soudure-orbitale",
    title: "Soudure orbitale",
    tag: "Précision Automatisée",
    description: "Cœur de notre métier, la soudure orbitale TIG (Tungsten Inert Gas) garantit une qualité de jointure répétable, sans aucune rugosité interne, éliminant tout risque de nid à bactéries. Nos générateurs AXXAIR connectés enregistrent chaque programme de soudage.",
    specs: [
      "Têtes de soudage fermées pour atmosphère protectrice totale",
      "Générateurs programmables avec traçabilité DMOS",
      "Répétabilité absolue des paramètres de soudage",
      "Idéal pour les exigences d'ultra-pureté (WFI, fluides propres)",
    ],
    images: [weld1, weld2, weld3, weld4, weld5, weld6, weld7, weld8, weld9, weld10, weld11, weld12],
  },
  {
    id: "commande-numerique",
    title: "Commande numérique (CNC)",
    tag: "Usinage Précis",
    description: "Pour la préfabrication complexe en atelier et le formage sur mesure de pièces de tuyauterie, nous disposons d'équipements à commande numérique de dernière génération, offrant une flexibilité totale de production.",
    specs: [
      "Précision dimensionnelle centésimale",
      "Pliage et usinage multi-axes",
      "Répétabilité industrielle pour séries",
      "Programmation CAD/CAM intégrée",
    ],
    images: [cnc1, cnc2, cnc3, cnc4, cnc5, cnc6],
  },
  {
    id: "skid-degraissage",
    title: "Skid de Dégraissage / Décapage / Passivation",
    tag: "Traitement de Surface",
    description: "Afin de garantir la longévité de la résistance à la corrosion de nos installations, nous procédons à des traitements chimiques internes rigoureux de dégraissage, décapage et passivation via nos skids de recirculation automatisés.",
    specs: [
      "Circulation de fluides en circuit fermé (CIP/NEP)",
      "Produits chimiques conformes aux réglementations environnementales",
      "Contrôle de pH, température et conductivité",
      "Restauration complète de la couche d'oxyde de chrome protectrice",
    ],
    images: [skid1, skid2, skid3],
  },
];

function EquipmentsPage() {
  // Store the active image index for each equipment section
  const [activeIndices, setActiveIndices] = useState<Record<number, number>>({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  // Lightbox Modal State
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    images: string[];
    currentIndex: number;
    title: string;
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0,
    title: "",
  });

  // Swipe Gesture detection state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const handleThumbnailClick = (eqIdx: number, imgIdx: number) => {
    setActiveIndices((prev) => ({
      ...prev,
      [eqIdx]: imgIdx,
    }));
  };

  const handlePrevImage = (eqIdx: number, imagesLength: number) => {
    setActiveIndices((prev) => {
      const current = prev[eqIdx];
      const nextIndex = (current - 1 + imagesLength) % imagesLength;
      return {
        ...prev,
        [eqIdx]: nextIndex,
      };
    });
  };

  const handleNextImage = (eqIdx: number, imagesLength: number) => {
    setActiveIndices((prev) => {
      const current = prev[eqIdx];
      const nextIndex = (current + 1) % imagesLength;
      return {
        ...prev,
        [eqIdx]: nextIndex,
      };
    });
  };

  const openLightbox = (images: string[], index: number, title: string) => {
    setLightbox({
      isOpen: true,
      images,
      currentIndex: index,
      title,
    });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const lightboxPrev = () => {
    setLightbox((prev) => {
      const nextIndex = (prev.currentIndex - 1 + prev.images.length) % prev.images.length;
      return { ...prev, currentIndex: nextIndex };
    });
  };

  const lightboxNext = () => {
    setLightbox((prev) => {
      const nextIndex = (prev.currentIndex + 1) % prev.images.length;
      return { ...prev, currentIndex: nextIndex };
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      lightboxNext();
    }
    if (isRightSwipe) {
      lightboxPrev();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Page Hero Banner */}
      <section className="relative overflow-hidden" style={{ height: "260px" }}>
        <img src={workshopImage} alt="Nos Equipements" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

          <div className="wrap relative z-10 flex h-full flex-col justify-center pt-16">
          <div className="mb-2 flex items-center gap-2 text-sm text-white/50">
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#e0141c]">Équipements</span>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#e0141c]">Parc Machines & Technologie</span>
          </div>
          <h1 className="text-white font-black" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", lineHeight: 1.05, letterSpacing: "-0.025em" }}>
            Nos Équipements
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
          <span className="text-[#e0141c] font-semibold">Équipements</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="pb-16">
        {EQUIPMENTS_DATA.map((eq, eqIdx) => {
          const isDark = eqIdx % 2 === 0;
          const sectionClass = isDark ? "bg-black border-b border-white/5 py-12 md:py-24" : "section-paper py-12 md:py-24 rounded-none m-0";
          const titleClass = isDark ? "text-white mb-4 font-black" : "text-neutral-900 mb-4 font-black";
          const descClass = isDark ? "text-white/70 leading-relaxed mb-6 text-sm md:text-base" : "text-neutral-600 leading-relaxed mb-6 text-sm md:text-base";
          const specClass = isDark ? "text-white/70" : "text-neutral-700";
          const bulletClass = "mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#e0141c]";
          
          const imageOrder = eqIdx % 2 !== 0 ? 'lg:order-1' : 'lg:order-2';
          const textOrder = eqIdx % 2 !== 0 ? 'lg:order-2' : 'lg:order-1';
          const activeImgIdx = activeIndices[eqIdx] || 0;
          const activeImage = eq.images[activeImgIdx];

          return (
            <section key={eq.id} id={eq.id} className={sectionClass}>
              <div className="wrap min-w-0">
                <div className="grid min-w-0 gap-8 lg:grid-cols-2 items-center">
                  
                  {/* Left or Right: Text info */}
                  <div className={`${textOrder} order-1 min-w-0`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#e0141c]">{eq.tag}</span>
                    </div>
                    <h2 className={titleClass} style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.6rem)", lineHeight: 1.1 }}>
                      {eq.title}
                    </h2>
                    <p className={descClass}>{eq.description}</p>
                    
                    {/* Specs Bullet List */}
                    <div className="border-t border-neutral-800/20 pt-6">
                      <h4 className={`text-xs font-bold uppercase tracking-[0.14em] mb-4 ${isDark ? 'text-white/50' : 'text-neutral-500'}`}>
                        Spécifications techniques
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {eq.specs.map((spec, specIdx) => (
                          <li key={specIdx} className={`flex items-start gap-3 text-xs md:text-sm leading-snug ${specClass}`}>
                            <span className={bulletClass} />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Left or Right: Beautiful Interactive Gallery */}
                  <div className={`${imageOrder} flex flex-col gap-3 order-2 min-w-0`}>
                    
                    {/* Main Active Image Display */}
                    <div className="relative overflow-hidden rounded-2xl group border border-white/10 bg-neutral-900 aspect-[4/3] shadow-2xl flex items-center justify-center min-w-0 max-w-full">
                      <img 
                        src={activeImage} 
                        alt={`${eq.title} - active`} 
                        className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 pointer-events-none" />
                      
                      {/* Left Navigation Arrow (Tap friendly on mobile, hover triggered on desktop) */}
                      <button 
                        onClick={() => handlePrevImage(eqIdx, eq.images.length)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 backdrop-blur-md md:hover:bg-[#e0141c] text-white rounded-full flex items-center justify-center border border-white/10 transition-all duration-300 shadow-lg md:opacity-0 md:group-hover:opacity-100 transform md:-translate-x-2 md:group-hover:translate-x-0"
                        aria-label="Photo précédente"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      {/* Right Navigation Arrow (Tap friendly on mobile, hover triggered on desktop) */}
                      <button 
                        onClick={() => handleNextImage(eqIdx, eq.images.length)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 backdrop-blur-md md:hover:bg-[#e0141c] text-white rounded-full flex items-center justify-center border border-white/10 transition-all duration-300 shadow-lg md:opacity-0 md:group-hover:opacity-100 transform md:translate-x-2 md:group-hover:translate-x-0"
                        aria-label="Photo suivante"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Photo counter and expand icon */}
                      <div className="absolute bottom-4 left-4 z-10 flex items-center gap-3">
                        <span className="font-mono text-[10px] md:text-xs bg-black/75 backdrop-blur-md px-2.5 py-0.5 rounded-full text-white/80 border border-white/10">
                          {activeImgIdx + 1} / {eq.images.length}
                        </span>
                      </div>
                      
                      <button 
                        onClick={() => openLightbox(eq.images, activeImgIdx, eq.title)}
                        className="absolute bottom-4 right-4 z-10 w-8 h-8 bg-black/75 backdrop-blur-md hover:bg-[#e0141c] text-white rounded-full flex items-center justify-center border border-white/10 hover:border-transparent transition-colors duration-300 shadow-md"
                        title="Agrandir l'image"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Scrollable Gallery Thumbnails (Styled with snap-scroll for mobile) */}
                    <div className="relative min-w-0 overflow-hidden">
                      <div className="flex gap-2 overflow-x-auto py-3 px-1.5 scroll-smooth snap-x snap-mandatory [-webkit-overflow-scrolling:touch] min-w-0">
                        {eq.images.map((img, imgIdx) => {
                          const isActive = imgIdx === activeImgIdx;
                          return (
                            <button
                              key={imgIdx}
                              onClick={() => handleThumbnailClick(eqIdx, imgIdx)}
                              className={`flex-shrink-0 w-14 md:w-24 aspect-[4/3] rounded-lg md:rounded-xl overflow-hidden border-2 transition-all duration-300 snap-start ${
                                isActive 
                                  ? 'border-[#e0141c] scale-95 shadow-md shadow-[#e0141c]/35 opacity-100' 
                                  : 'border-transparent opacity-60 hover:opacity-100'
                              }`}
                            >
                              <img src={img} alt={`miniature ${imgIdx + 1}`} className="w-full h-full object-cover" />
                            </button>
                          );
                        })}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </main>

      {/* Lightbox full-screen modal */}
      {lightbox.isOpen && lightbox.images.length > 0 && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col justify-between p-4 md:p-8 animate-fade-in">
          
          {/* Header */}
          <div className="flex items-center justify-between w-full border-b border-white/10 pb-3">
            <div>
              <span className="text-[#e0141c] font-black uppercase text-[10px] md:text-xs tracking-widest">Équipements</span>
              <h4 className="text-white font-bold text-base md:text-xl leading-none mt-1">{lightbox.title}</h4>
            </div>
            
            <button 
              onClick={closeLightbox}
              className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/10 hover:bg-[#e0141c] text-white flex items-center justify-center transition-colors duration-300"
              aria-label="Fermer"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Main Showcase Panel (With touch swipe gesture support) */}
          <div 
            className="relative flex-grow flex items-center justify-center my-3 md:my-8 touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            
            {/* Prev arrow */}
            <button 
              onClick={lightboxPrev}
              className="absolute left-1 md:left-4 z-10 w-9 h-9 md:w-16 md:h-16 rounded-full bg-black/60 hover:bg-[#e0141c] text-white flex items-center justify-center border border-white/10 hover:border-transparent transition-all shadow-xl"
              aria-label="Précédente"
            >
              <ChevronLeft className="w-5 h-5 md:w-8 md:h-8" />
            </button>

            {/* Main image container */}
            <div className="max-w-full max-h-[55vh] md:max-h-[70vh] flex items-center justify-center p-1">
              <img 
                src={lightbox.images[lightbox.currentIndex]} 
                alt={`${lightbox.title} zoom`} 
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/5 animate-scale-up select-none pointer-events-none" 
              />
            </div>

            {/* Next arrow */}
            <button 
              onClick={lightboxNext}
              className="absolute right-1 md:right-4 z-10 w-9 h-9 md:w-16 md:h-16 rounded-full bg-black/60 hover:bg-[#e0141c] text-white flex items-center justify-center border border-white/10 hover:border-transparent transition-all shadow-xl"
              aria-label="Suivante"
            >
              <ChevronRight className="w-5 h-5 md:w-8 md:h-8" />
            </button>
          </div>

          {/* Footer thumbnails (Grid wrap layout) */}
          <div className="w-full flex flex-col items-center gap-3 pb-2">
            <span className="font-mono text-xs text-white/50">
              {lightbox.currentIndex + 1} / {lightbox.images.length}
            </span>
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl px-4 overflow-y-auto max-h-24 scrollbar-thin">
              {lightbox.images.map((img, idx) => {
                const isActive = idx === lightbox.currentIndex;
                return (
                  <button 
                    key={idx}
                    onClick={() => setLightbox(prev => ({ ...prev, currentIndex: idx }))}
                    className={`flex-shrink-0 w-12 md:w-16 aspect-[4/3] rounded-md md:rounded-lg overflow-hidden border-2 transition-all ${
                      isActive ? 'border-[#e0141c] scale-95 opacity-100 shadow-md shadow-[#e0141c]/35' : 'border-transparent opacity-50 hover:opacity-90'
                    }`}
                  >
                    <img src={img} alt={`miniature lightbox ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                );
              })}
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
}
