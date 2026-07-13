import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Send } from "lucide-react";

import contactBgImage from "@/assets/about-workshop.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden" style={{ height: "340px" }}>
        <img src={contactBgImage} alt="Contactez-nous" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        <div className="wrap relative z-10 flex h-full flex-col justify-center pt-24">
          <div className="mb-4 flex items-center gap-2 text-sm text-white/50">
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#e0141c]">Contact</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="block h-px w-10 bg-[#e0141c]" />
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#e0141c]">Nous Contacter</span>
          </div>
          <h1 className="text-white font-black" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: 1.05, letterSpacing: "-0.025em" }}>
            Contact
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
          <span className="text-[#e0141c] font-semibold">Contact</span>
        </div>
      </div>

      <main className="py-20 bg-black">
        <div className="wrap">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Informations de contact */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="block h-px w-8 bg-[#e0141c]" />
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#e0141c]">Informations</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
                Discutons de votre projet
              </h2>
              <p className="text-white/60 mb-12 text-lg">
                Vous avez un projet en tuyauterie industrielle ou soudure orbitale ? Notre équipe d'experts est à votre disposition pour vous accompagner de A à Z.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#e0141c]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Téléphone</h3>
                    <p className="text-white/60 mb-2">Du Lundi au Vendredi, 8h - 17h</p>
                    <a href="tel:+21650191004" className="text-xl font-bold hover:text-[#e0141c] transition-colors">+216 50 191 004</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#e0141c]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                    <p className="text-white/60 mb-2">Notre équipe vous répondra sous 24h</p>
                    <a href="mailto:u2i@u2iprocess.com" className="text-xl font-bold hover:text-[#e0141c] transition-colors">u2i@u2iprocess.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#e0141c]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Siège social</h3>
                    <p className="text-white/60 text-lg">Akouda, Sousse<br />Tunisie</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="bg-[#111] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-8">Envoyez-nous un message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-semibold text-white/70">Prénom</label>
                    <input type="text" id="firstName" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#e0141c] transition-colors" placeholder="Jean" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-semibold text-white/70">Nom</label>
                    <input type="text" id="lastName" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#e0141c] transition-colors" placeholder="Dupont" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-white/70">Email</label>
                  <input type="email" id="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#e0141c] transition-colors" placeholder="jean.dupont@entreprise.com" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-white/70">Sujet</label>
                  <input type="text" id="subject" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#e0141c] transition-colors" placeholder="Demande de devis" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-white/70">Message</label>
                  <textarea id="message" rows={5} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#e0141c] transition-colors resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                </div>

                <button type="submit" className="w-full bg-[#e0141c] hover:bg-[#c01118] text-white font-bold rounded-xl px-6 py-4 transition-colors flex items-center justify-center gap-2 group">
                  Envoyer le message
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
