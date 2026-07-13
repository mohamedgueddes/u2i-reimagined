import { createFileRoute } from "@tanstack/react-router";
import workshopImage from "@/assets/about-workshop.jpg";
import pharmaImage from "@/assets/hero-pharma.jpg";
import weldingImage from "@/assets/hero-welding.jpg";
import presentationImage from "@/assets/presentation.jpg";
import teamImage1 from "@/assets/IMG-20240214-WA0000.jpg";
import teamImage2 from "@/assets/IMG-20260408-WA0067.jpg";
import teamImage3 from "@/assets/IMG_2278.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Page Hero Banner */}
      <section className="relative overflow-hidden" style={{ height: "340px" }}>
        <img
          src={workshopImage}
          alt="Atelier U2I"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        <div className="wrap relative z-10 flex h-full flex-col justify-center pt-24">
          {/* Breadcrumb */}
          <div className="mb-4 flex items-center gap-2 text-sm text-white/50">
            <a href="/" className="hover:text-white transition-colors">Accueil</a>
            <span className="text-white/30">/</span>
            <span className="text-[#e0141c]">Qui sommes-nous</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="block h-px w-10 bg-[#e0141c]" />
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#e0141c]">A propos</span>
          </div>
          <h1
            className="text-white font-black"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
          >
            Qui sommes-nous
          </h1>
        </div>
      </section>

      {/* Breadcrumb bar */}
      <div className="bg-[#111] border-b border-white/10 py-3">
        <div className="wrap flex items-center gap-2 text-sm text-white/50">
          <a href="/" className="hover:text-white transition-colors flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            Accueil
          </a>
          <span className="text-white/20">›</span>
          <span className="text-[#e0141c] font-semibold">Qui sommes-nous</span>
        </div>
      </div>

      {/* Main Content */}
      <main>

        {/* ── Presentation generale ── */}
        <section className="section-paper rounded-none" style={{ margin: 0, borderRadius: 0 }}>
          <div className="wrap">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="block h-px w-8 bg-[#e0141c]" />
                  <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#e0141c]">Presentation generale</span>
                </div>
                <h2 className="text-neutral-900 mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
                  Univers Inox Industriel, votre partenaire de A a Z
                </h2>
                <div className="space-y-5 text-neutral-600 leading-relaxed">
                  <p>
                    Fondee en 2015, la societe <strong className="text-neutral-900">Univers Inox Industriel (U2I)</strong> est basee a Akouda, une ville situee a quelques kilometres au nord-ouest de Sousse en Tunisie. Nous sommes specialises en chaudronnerie, travaux de soudure et tuyauterie industrielle, specialement dans les domaines de haute exigence : secteur pharmaceutique, alimentaire et chimique.
                  </p>
                  <p>
                    Notre personnel constitue d'une equipe d'ingenieurs et de techniciens specialises et experimentes, issus d'une experience de plus de 10 ans dans le domaine pharmaceutique, peut controler toutes les phases de la realisation d'un projet : les etudes, la prefabrication en atelier, les travaux sur site, la mise en service, la qualification de l'installation et la maintenance sur site.
                  </p>
                  <p>
                    Le personnel U2I, specialiste de la tuyauterie process, est avant tout a l'ecoute des besoins specifiques de ses clients.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-[2rem] shadow-2xl">
                  <img
                    src={presentationImage}
                    alt="Presentation U2I"
                    className="w-full h-80 object-cover"
                  />
                </div>
                {/* Stats overlay */}
                <div className="absolute bottom-0 sm:-bottom-6 left-0 sm:-left-6 bg-[#e0141c] text-white rounded-2xl p-6 shadow-xl">
                  <div className="text-4xl font-black" style={{ fontFamily: "var(--font-display)" }}>10+</div>
                  <div className="text-sm font-bold uppercase tracking-wider opacity-90">Ans d'experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Nos prestations ── */}
        <section className="section-dark py-20">
          <div className="wrap">
            <div className="grid gap-12 lg:grid-cols-[2fr_3fr] items-start">
              <div className="overflow-hidden rounded-[2rem] shadow-xl">
                <img
                  src={pharmaImage}
                  alt="Nos prestations"
                  className="w-full h-full min-h-[400px] object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="block h-px w-8 bg-[#e0141c]" />
                  <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#e0141c]">Nos prestations</span>
                </div>
                <h2 className="text-white mb-8" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                  Univers Inox Industriel, votre partenaire de A a Z.
                </h2>
                <ul className="space-y-3">
                  {[
                    "Etude et conseil (P&ID et dimensionnements)",
                    "Plans 2D sur logiciels DAO (Autocad)",
                    "Plans 3D sur logiciel(s) (SolidWorks)",
                    "Note de calcul",
                    "Support et assistance technique",
                    "Conformite aux standards et respect des normes",
                    "Respect des regles de securite",
                    "Endoscopie par operateurs qualifies",
                    "Degraissage, passivation et decapage",
                    "Electrotis - Automatisme",
                    "Mise en service",
                    "Maintenance et SAV de vos reseaux de tuyauteries Inox",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/75 text-sm leading-relaxed">
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#e0141c]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Ressources humaines et techniques ── */}
        <section className="section-paper rounded-none" style={{ margin: 0, borderRadius: 0 }}>
          <div className="wrap">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="block h-px w-8 bg-[#e0141c]" />
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#e0141c]">Equipe</span>
              </div>
              <h2 className="text-neutral-900 mb-6" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                Ressources humaines et techniques
              </h2>
            </div>

            <div className="grid gap-12 lg:grid-cols-[3fr_2fr] items-start">
              <div className="space-y-5 text-neutral-600 leading-relaxed">
                <p>
                  L'equipe de 7 charges d'affaires s'appuyant sur un bureau d'etude (2 postes de dessin en 3D), un laboratoire d'essais et de mise au point et un laboratoire de controle qualite (Video-endoscopie...).
                </p>
                <p>
                  Chaudronnerie et atelier d'equipements qualifies et parfaitement equipes, disposant d'un atelier de 1 000 m2 exclusivement mise aux normes en departement tolerie (decoupes laser, plieuse de derniere generation, stockage de tole a plat, tubes et roulage numerique), un departement soudure et un departement chaudronnerie.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  {[
                    { value: "7", label: "Charges d'affaires" },
                    { value: "1000m²", label: "Atelier equipe" },
                    { value: "10+", label: "Annees d'experience" },
                    { value: "100%", label: "Qualite certifiee" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-2xl bg-neutral-50 border border-neutral-200 p-6">
                      <div className="text-3xl font-black text-[#e0141c] mb-1" style={{ fontFamily: "var(--font-display)" }}>
                        {stat.value}
                      </div>
                      <div className="text-sm font-semibold text-neutral-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="overflow-hidden rounded-2xl">
                  <img src={teamImage1} alt="Equipe U2I" className="w-full h-56 object-cover" />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <img src={teamImage2} alt="Atelier U2I" className="w-full h-56 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Assurance qualite ── */}
        <section className="section-dark py-20">
          <div className="wrap">
            <div className="grid gap-12 lg:grid-cols-[2fr_3fr] items-start">
              <div className="overflow-hidden rounded-[2rem] shadow-xl">
                <img
                  src={weldingImage}
                  alt="Assurance qualite"
                  className="w-full h-full min-h-[380px] object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="block h-px w-8 bg-[#e0141c]" />
                  <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#e0141c]">Qualite</span>
                </div>
                <h2 className="text-white mb-6" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                  Assurance qualite
                </h2>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Demarche qualite en concordance au secteur pharmaceutique (BPF, QI, QO) :
                </p>
                <ul className="space-y-4">
                  {[
                    "Controle de la fourniture a reception des materiaux : aspect, dimensionnel...",
                    "Controle des partiaux sous-traitance : FAT et SAT",
                    "Controle documentaire des parties achetes et des parties sous-traitees : certificats matieres, metalographie, indices...",
                    "Controle de la production : enregistrement des operations et des operateurs, controle visuel, photo, endoscopies...",
                    "Dossier technique complet",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/75 text-sm leading-relaxed">
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#e0141c]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Points forts / Nos atouts ── */}
        <section className="section-red relative overflow-hidden">
          <div className="wrap relative z-10">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="block h-px w-8 bg-white/50" />
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-white/70">Nos atouts</span>
                <span className="block h-px w-8 bg-white/50" />
              </div>
              <h2 className="text-white font-black" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
                Pourquoi choisir U2I ?
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "🏭",
                  title: "Expertise technique",
                  text: "Specialiste de la tuyauterie inox et soudure orbitale depuis plus de 10 ans.",
                },
                {
                  icon: "🤝",
                  title: "Partenaire AXXAIR",
                  text: "Distributeur officiel AXXAIR depuis 2015 — solution complete de soudure orbitale.",
                },
                {
                  icon: "📋",
                  title: "Documentation ISO",
                  text: "Qualification IQ/OQ/PQ, documentation complete et traçabilite integree.",
                },
                {
                  icon: "⚡",
                  title: "Reactivite",
                  text: "Intervention rapide sur site et en atelier, de la conception a la mise en service.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white/10 border border-white/20 p-8 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-black text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-white/75 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Photos galerie team ── */}
        <section className="section-dark py-20">
          <div className="wrap">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="block h-px w-8 bg-[#e0141c]" />
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#e0141c]">Notre equipe</span>
                <span className="block h-px w-8 bg-[#e0141c]" />
              </div>
              <h2 className="text-white font-black" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
                Professionnalisme au quotidien
              </h2>
            </div>
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
              {[teamImage1, teamImage2, teamImage3, workshopImage, pharmaImage, weldingImage].map((img, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-2xl group relative"
                  style={{ aspectRatio: "4/3" }}
                >
                  <img
                    src={img}
                    alt={`Galerie U2I ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Contact ── */}
        <section className="section-paper rounded-none py-20" style={{ margin: 0, borderRadius: 0 }}>
          <div className="wrap text-center">
            <h2 className="text-neutral-900 font-black mb-6" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
              Vous avez un projet ?
            </h2>
            <p className="text-neutral-600 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Contactez-nous pour discuter de vos besoins en tuyauterie inox, soudure orbitale et installations industrielles.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+21650191004" className="btn btn-red px-10 py-4 shadow-lg shadow-red-500/25">
                +216 50 191 004
              </a>
              <a href="mailto:u2i@u2iprocess.com" className="btn btn-outline-dark px-10 py-4">
                u2i@u2iprocess.com
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
