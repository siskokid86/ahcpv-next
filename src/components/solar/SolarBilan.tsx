"use client";

import { Quote } from "lucide-react";

const items = [
  { n: 1, title: "Analyse de votre consommation actuelle", sub: "(12 mois de données réelles)" },
  { n: 2, title: "Étude technique de votre toiture", sub: "(orientation, inclinaison, ombrages)" },
  { n: 3, title: "Simulation de production solaire", sub: "(calibrée sur données météo locales Occitanie)" },
  { n: 4, title: "Dimensionnement recommandé", sub: "(avec justification du choix)" },
  { n: 5, title: "Économies chiffrées en € par mois", sub: "(pas une fourchette, un montant)" },
  { n: 6, title: "Plan de financement", sub: "(mensualités, aides déduites, amortissement)" },
  { n: 7, title: "Engagement de résultat", sub: "(le montant sur lequel AHC s'engage)" },
];

const SolarBilan = () => (
  <section className="bg-[#F7F8FA] py-20 md:py-[120px]">
    <div className="mx-auto max-w-[1120px] px-5 md:px-10">
      <h2 className="text-center text-[28px] font-bold text-[#1B2A4A] md:text-[40px]" style={{ fontFamily: "Playfair Display, serif" }}>
        Votre Bilan Solaire Personnalisé
      </h2>
      <p className="mx-auto mt-4 max-w-[600px] text-center text-lg text-[#718096]">
        Un document de 8 à 10 pages que vous gardez, même si vous ne signez pas.
      </p>

      <div className="mt-12 flex flex-col items-center gap-12 md:flex-row md:gap-16">
        {/* Mockup */}
        <div className="w-full md:w-[45%]">
          <div className="mx-auto max-w-[360px] rotate-0 rounded-lg bg-white p-6 shadow-[0_8px_40px_rgba(0,0,0,0.12)] md:-rotate-2">
            <div className="rounded-t-md bg-[#1B2A4A] px-4 py-3">
              <p className="text-sm font-bold text-white">AHC</p>
              <p className="text-xs text-white/80">Bilan Solaire Personnalisé</p>
            </div>
            <div className="mt-4 space-y-2 px-2">
              <div className="h-2 w-3/4 rounded bg-[#E2E8F0]" />
              <div className="h-2 w-full rounded bg-[#E2E8F0]" />
              <div className="h-2 w-2/3 rounded bg-[#E2E8F0]" />
            </div>
            <div className="mt-5 flex items-end gap-3 px-2">
              <div className="flex flex-col items-center gap-1">
                <div className="h-24 w-10 rounded-t bg-[#E53E3E]/60" />
                <span className="text-[10px] text-[#718096]">Avant</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="h-10 w-10 rounded-t bg-[#38A169]/70" />
                <span className="text-[10px] text-[#718096]">Après</span>
              </div>
            </div>
            <div className="mt-4 space-y-2 px-2">
              <div className="h-2 w-full rounded bg-[#E2E8F0]" />
              <div className="h-2 w-5/6 rounded bg-[#E2E8F0]" />
            </div>
            <div className="mt-4 rounded-md bg-[#F5A623]/15 p-3">
              <p className="text-xs font-bold text-[#F5A623]">Économie mensuelle estimée : --- €/mois</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-[55%]">
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <div key={item.n} className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1B2A4A] text-xs font-bold text-white">
                  {item.n}
                </span>
                <p className="text-base text-[#2D3748]">
                  <strong>{item.title}</strong>{" "}
                  <span className="text-[#718096]">{item.sub}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border-2 border-dashed border-[#F5A623] bg-white p-6">
            <Quote size={24} className="mb-2 text-[#F5A623]/30" />
            <p className="text-lg font-bold text-[#1B2A4A]">
              Chaque chiffre est vérifiable. Chaque recommandation est justifiée.
            </p>
            <p className="mt-2 text-[15px] text-[#718096]">
              Notre Bilan Solaire n'est pas une plaquette commerciale — c'est un document d'expertise chiffré, basé sur vos données réelles. C'est la signature Amélioration Habitat Conseil.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SolarBilan;