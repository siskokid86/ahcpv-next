"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Sun } from "lucide-react";

const PHONE_NUMBER = "04 48 06 04 43";
const PHONE_TEL = "tel:+33448060443";

const HeaderV2 = ({ minimal = false }: { minimal?: boolean }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navItems = [
    { label: "Mon estimation", href: "#offre" },
    { label: "Simulateur ☀️", href: "/simulateur" },
    { label: "Batterie", href: "#batterie" },
    { label: "Comment ça marche ?", href: "#howto" },
    { label: "Avis", href: "#avis" },
    { label: "F.A.Q", href: "#faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "header-scrolled shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a href="/" className="flex shrink-0 items-center">
          <img src="/images/logo-ahc.png" alt="Amélioration Habitat Conseil" className="h-10 sm:h-12" />
        </a>

        {!minimal && (
          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-3">
          <a
            href={PHONE_TEL}
            className="hidden items-center gap-2 text-sm font-semibold text-primary transition-all hover:opacity-80 sm:flex"
          >
            <Phone className="h-4 w-4" />
            <span>{PHONE_NUMBER}</span>
          </a>

          {/* Mobile phone icon */}
          <a
            href={PHONE_TEL}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground sm:hidden"
            aria-label="Appeler"
          >
            <Phone className="h-4 w-4" />
          </a>

          {!minimal && (
            <button
              className="flex h-9 w-9 items-center justify-center lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          )}
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-6 bg-background lg:hidden">
          <button
            className="absolute right-4 top-4"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xl font-medium text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={PHONE_TEL}
            className="mt-4 flex items-center gap-2 text-lg font-semibold text-primary"
          >
            <Phone className="h-5 w-5" />
            <span>{PHONE_NUMBER}</span>
          </a>
          <a
            href="/simulateur"
            className="mt-2 flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground transition hover:opacity-90"
            onClick={() => setMobileOpen(false)}
          >
            <Sun className="h-5 w-5" />
            Simuler mes économies
          </a>
        </div>
      )}
    </header>
  );
};

export default HeaderV2;