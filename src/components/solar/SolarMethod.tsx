"use client";

import { Check } from "lucide-react";

const steps = [
  {
    letter: "S",
    title: "Situation — Analyse de votre consommation réelle",
    desc: "Pas une estimation basée sur la surface de votre maison. Vos vrais chiffres.",
    bullets: [
      "Factures EDF des 12 derniers mois",
      "Profil de consommation jour/nuit",
      "Équipements électriques (ballon d'eau chaude, climatisation, véhicule électrique...)",
    ],
  },
  {
    letter: "O",
    title: "Orientation — Étude technique de votre toiture",
    desc: "Chaque toit est différent. On mesure le vôtre, on ne devine pas.",
    bullets: [
      "Orientation, inclinaison, surface utile",
      "Analyse des ombrages (arbres, bâtiments, cheminées)",
      "Simulation avec données météo locales Occitanie sur 20 ans",
    ],
  },
  {
    letter: "L",
    title: "Levier — Dimensionnement optimal, pas maximal",
    desc: "Le point de bascule où chaque kWc supplémentaire rapporte moins que le précédent.",
    bullets: [
      "Calcul du seuil de rentabilité optimale",
      "Pas le plus gros système. Le plus rentable pour votre cas.",
      "Comparaison autoconsommation vs revente selon votre profil",
    ],
  },
  {
    letter: "A",
    title: "Architecture — Matériel adapté à votre cas",
    desc: "Le choix du matériel découle du diagnostic, pas l'inverse.",
    bullets: [
      "Panneaux DualSun (fabrication française, Tier 1)",
      "Micro-onduleurs AP Systems (optimisation panneau par panneau)",
      "Batterie virtuelle MyLight si pertinent pour votre profil",
    ],
  },
  {
    letter: "R",
    title: "Résultat — Engagement écrit sur vos économies",
    desc: "Pas une promesse commerciale. Un montant en euros par mois, noir sur blanc.",
    bullets: [
      "Engagement écrit sur les économies mensuelles en €",
      "Suivi de production à 3, 6 et 12 mois",
      "Si objectif non atteint à 12 mois : intervention corrective à nos frais",
    ],
    highlight: true,
  },
];

const SolarMethod = () => (
  <section className="bg-white py-20 md:py-[120px]">
    <div className="mx-auto max-w-[1120px] px-5 md:px-10">
      <h2 className="text-center text-[28px] font-bold text-[#1B2A4A] md:text-[40px]" style={{ fontFamily: "Playfair Display, serif" }}>
        La Méthode SOLAR
      </h2>
      <p className="mx-auto mt-4 max-w-[680px] text-center text-lg text-[#718096]">
        5 étapes pour passer de "je ne sais pas" à "je sais exactement combien je vais économiser chaque mois".
      </p>

      <div className="relative mt-14">
        {steps.map((step, i) => (
          <div key={step.letter} className="relative flex gap-6 pb-12 last:pb-0">
            {/* Timeline */}
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#1B2A4A] text-[28px] font-bold text-white">
                {step.letter}
              </div>
              {i < steps.length - 1 && (
                <div className="w-px flex-1 border-l-2 border-dashed border-[#E2E8F0]" />
              )}
            </div>

            {/* Content */}
            <div className={`flex-1 pb-4 ${step.highlight ? "rounded-2xl border-l-4 border-[#F5A623] bg-[#FFF9ED] p-6" : ""}`}>
              <h3 className="text-xl font-semibold text-[#1B2A4A] md:text-2xl">{step.title}</h3>
              <p className="mt-2 text-base text-[#718096]">{step.desc}</p>
              <ul className="mt-4 flex flex-col gap-2">
                {step.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-base text-[#2D3748]">
                    <Check size={18} className="mt-0.5 shrink-0 text-[#38A169]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolarMethod;