import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Facebook, Linkedin, Mail, Menu, Phone, X, Youtube } from "lucide-react";
import logoImage from "@/assets/logo-u2i-removebg-preview.png";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Qui sommes-nous", href: "/about" },
  { label: "Secteurs", href: "/secteurs" },
  { label: "Equipements", href: "/equipements" },
  { label: "References", href: "/references" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouterState();
  const isHome = router.location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showBg = scrolled || !isHome || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        showBg ? "bg-black shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      {/* Utility bar */}
      <div
        className={`hidden md:block overflow-hidden border-b border-white/10 text-[11px] font-semibold text-white/80 transition-[max-height,padding] duration-300 ${
          scrolled ? "max-h-0 border-b-0 py-0" : "max-h-14 py-2.5"
        }`}
      >
        <div className="wrap flex items-center justify-end gap-7">
          <div className="mr-auto flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-[#e0141c]" />
            <span className="font-bold tracking-wider">+216 50 191 004</span>
            <span className="text-white/20 mx-1">|</span>
            <Mail className="h-3.5 w-3.5 ml-1 text-[#e0141c]" />
            <span className="font-bold tracking-wider">u2i@u2iprocess.com</span>
            <span className="opacity-80 hidden sm:inline ml-2 border-l border-white/20 pl-4">
              Vous avez un nouveau projet ? N'hesitez pas a nous contacter !
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
      <div className={`transition-all duration-300 ${scrolled ? "py-3" : "py-4"}`}>
        <div className="wrap flex items-center gap-8">
          <Link to="/" aria-label="U2I" className="mr-4 shrink-0">
            <img
              src={logoImage}
              alt="Univers Inox"
              className={`w-auto rounded-md object-contain transition-all duration-300 ${
                scrolled ? "h-10 sm:h-12" : "h-12 sm:h-14"
              }`}
            />
          </Link>

          <nav className="hidden flex-1 lg:block" aria-label="Menu principal">
            <ul className="flex gap-6 [&:hover_a]:opacity-50">
              {NAV_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm font-bold text-white transition-opacity hover:!opacity-100 hover:text-[#e0141c] relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#e0141c] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="ml-auto grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white lg:hidden hover:bg-[#e0141c]/20 transition-colors"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-[60] w-4/5 max-w-sm bg-black backdrop-blur-xl px-8 pt-24 pb-8 transition-transform duration-300 lg:hidden border-l border-white/10 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-6 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white"
          onClick={() => setOpen(false)}
          aria-label="Fermer le menu"
        >
          <X className="h-5 w-5" />
        </button>

        <ul className="flex flex-col gap-6">
          {NAV_LINKS.map((item) => (
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

        <div className="mt-10 pt-8 border-t border-white/10 space-y-3">
          <a href="tel:+21650191004" className="flex items-center gap-3 text-sm text-white/70 hover:text-white">
            <Phone className="h-4 w-4 text-[#e0141c]" />
            +216 50 191 004
          </a>
          <a href="mailto:u2i@u2iprocess.com" className="flex items-center gap-3 text-sm text-white/70 hover:text-white">
            <Mail className="h-4 w-4 text-[#e0141c]" />
            u2i@u2iprocess.com
          </a>
          <div className="flex gap-4 pt-2">
            <a href="#" aria-label="Facebook" className="text-white/50 hover:text-[#e0141c]"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="text-white/50 hover:text-[#e0141c]"><Linkedin className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="text-white/50 hover:text-[#e0141c]"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
