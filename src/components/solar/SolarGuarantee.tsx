"use client";

import { CheckCircle } from "lucide-react";

const points = [
  "1 557 installations de recul en Occitanie",
  "Simulations calibrées sur 20 ans de données météo locales",
  "Équipe interne de 11 experts — contrôle qualité de la pose au suivi",
];

const SolarGuarantee = () => (
  <section className="bg-white py-20 md:py-[120px]">
    <div className="mx-auto max-w-[1120px] px-5 md:px-10">
      <div className="overflow-hidden rounded-3xl bg-[#1B2A4A] p-10 md:p-16">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
          <div className="w-full md:w-[60%]">
            <span className="inline-block rounded-full bg-[#F5A623] px-5 py-2 text-sm font-bold text-[#1B2A4A]">
              EXCLUSIVITÉ AHC
            </span>

            <h2 className="mt-6 text-[28px] font-bold text-white md:text-[40px]" style={{ fontFamily: "Playfair Display, serif" }}>
              Garantie Résultat 12 Mois
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-white/90">
              AHC s'engage par écrit sur un montant d'économies mensuelles. À 12 mois, si la production réelle est inférieure de plus de 10% à la simulation, AHC intervient à ses frais.
            </p>

            <div className="mt-8">
              <p className="font-bold text-white">Pourquoi on peut faire ça :</p>
              <ul className="mt-3 flex flex-col gap-2">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-white/90">
                    <CheckCircle size={18} className="mt-0.5 shrink-0 text-[#38A169]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="hidden w-[40%] md:block">
            <img
              src="/images/solar-guarantee.jpg"
              alt="Poignée de main après installation de panneaux solaires"
              width={768}
              height={512}
              loading="lazy"
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SolarGuarantee;