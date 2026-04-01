"use client";

import { ShieldCheck } from "lucide-react";

const FooterV2 = () => {
  return (
    <footer className="bg-[hsl(0,0%,8%)] py-8 text-[hsl(0,0%,70%)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          {/* Société & adresse */}
          <div className="space-y-1">
            <p className="text-sm font-semibold text-white">
              Amélioration Habitat Conseil (AHC)
            </p>
            <p className="text-xs">
              19 avenue de Toulouse — 31320 Castanet-Tolosan
            </p>
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>QualiRGE</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>QualiPV</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>Assurance décennale</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-2 border-t border-white/10 pt-4 text-center text-xs">
          <div className="flex gap-4">
            <a href="/mentions-legales" className="transition-colors hover:text-white">Mentions légales</a>
            <a href="/privacy-policy" className="transition-colors hover:text-white">Politique de confidentialité</a>
          </div>
          <span>© {new Date().getFullYear()} Amélioration Habitat Conseil — Tous droits réservés</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterV2;