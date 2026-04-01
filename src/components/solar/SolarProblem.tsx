"use client";

import { X } from "lucide-react";

const points = [
  {
    bold: "Des kWc, des kWh, des rendements...",
    text: "Chaque devis utilise des unités différentes. Impossible de comparer.",
  },
  {
    bold: "Le prix ne dit rien.",
    text: "Un devis à 6 000 € peut coûter plus cher qu'un à 10 000 € si le dimensionnement est mauvais.",
  },
  {
    bold: "\"Jusqu'à 70% d'économies\"",
    text: "Tous promettent la même chose. Aucun ne s'engage par écrit sur un montant précis.",
  },
  {
    bold: "Qui sera là dans 10 ans ?",
    text: "Votre installation dure 30 ans. L'installateur qui a la plus belle pub sera-t-il encore là pour l'entretenir ?",
  },
];

const SolarProblem = () => (
  <section className="bg-[#F7F8FA] py-20 md:py-[120px]">
    <div className="mx-auto max-w-[1120px] px-5 md:px-10">
      <h2 className="mx-auto max-w-[800px] text-center text-[28px] font-bold leading-[1.2] text-[#1B2A4A] md:text-[40px]" style={{ fontFamily: "Playfair Display, serif" }}>
        Vous avez reçu des devis solaires.<br />
        <span className="text-[#E53E3E]">Vous ne savez toujours pas combien vous allez économiser.</span>
      </h2>

      <div className="mt-12 flex flex-col items-center gap-10 md:flex-row md:gap-16">
        <div className="w-full md:w-1/2">
          <img src="/images/solar-problem.jpg" alt="Propriétaire perplexe devant des devis solaires" width={768} height={512} loading="lazy" className="rounded-2xl object-cover" />
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-5">
            {points.map((p, i) => (
              <div key={i} className="flex gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E53E3E]/10">
                  <X size={14} className="text-[#E53E3E]" />
                </div>
                <p className="text-base leading-relaxed text-[#2D3748]">
                  <strong>{p.bold}</strong> {p.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border-l-4 border-[#F5A623] bg-white p-6">
            <p className="text-lg italic text-[#2D3748]">
              Le vrai problème n'est pas de trouver un installateur. C'est de comprendre ce que vous achetez.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SolarProblem;