"use client";

import { Phone } from "lucide-react";

const scrollToForm = () => {
  document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth" });
};

const SolarNavbar = () => (
  <nav className="sticky top-0 z-40 bg-white" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
    <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-5 md:px-10">
      <a href="/" className="flex items-center">
        <img src="/images/logo-ahc.png" alt="Amélioration Habitat Conseil" className="h-10" />
      </a>

      {/* Desktop */}
      <div className="hidden items-center gap-4 md:flex">
        <a href="tel:0448060443" className="flex items-center gap-2 font-semibold text-[#1B2A4A] transition hover:text-[#F5A623]">
          <Phone size={16} />
          04 48 06 04 43
        </a>
        <button
          onClick={scrollToForm}
          className="rounded-lg bg-[#F5A623] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#E09010]"
        >
          Demander mon Bilan Solaire
        </button>
      </div>

      {/* Mobile */}
      <a
        href="tel:0448060443"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5A623] md:hidden"
        aria-label="Appeler"
      >
        <Phone size={18} color="white" />
      </a>
    </div>
  </nav>
);

export default SolarNavbar;