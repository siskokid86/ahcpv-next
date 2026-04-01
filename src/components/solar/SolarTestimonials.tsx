"use client";

import { Star } from "lucide-react";

const Stars5 = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} fill="#F5A623" stroke="#F5A623" />
    ))}
  </div>
);

const testimonials = [
  {
    text: <>J'avais reçu 4 devis. Le moins cher à 6 000 €. J'ai choisi AHC à 9 800 € parce qu'on m'a montré exactement combien j'allais économiser, chiffres à l'appui. Résultat : ma facture est passée <strong className="text-[#38A169]">de 185 à 28 €/mois</strong>. Les 3 800 € de différence sont rentabilisés en 2 ans.</>,
    name: "Jean-Pierre",
    loc: "Perpignan (66)",
    img: "/images/solar-portrait1.jpg",
  },
  {
    text: <>On ne comprenait rien aux devis. Trop de jargon, des kWc, des kWh... L'équipe AHC nous a fait un Bilan Solaire clair : votre facture actuelle, votre facture après, point. On a signé le jour même. <strong className="text-[#38A169]">220 €/mois avant, 35 €/mois après</strong>.</>,
    name: "Marie et Luc",
    loc: "Montpellier (34)",
    img: "/images/solar-portrait2.jpg",
  },
  {
    text: <>L'équipe AHC m'a dit : "Monsieur, avec votre toit et votre consommation, le 3 kWc suffit. Le 6 serait du gaspillage." Quel installateur vous dit de dépenser moins ? Facture : <strong className="text-[#38A169]">de 130 à 45 €/mois</strong>.</>,
    name: "Robert",
    loc: "Narbonne (11)",
    img: "/images/solar-portrait3.jpg",
  },
];

const SolarTestimonials = () => (
  <section className="bg-[#F7F8FA] py-20 md:py-[120px]">
    <div className="mx-auto max-w-[1120px] px-5 md:px-10">
      <h2 className="text-center text-[28px] font-bold text-[#1B2A4A] md:text-[40px]" style={{ fontFamily: "Playfair Display, serif" }}>
        Ils ont fait leur Bilan Solaire.
      </h2>
      <p className="mt-4 text-center text-lg text-[#718096]">Et ils savent exactement combien ils économisent.</p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
            <Stars5 />
            <p className="relative mt-4 text-base leading-relaxed text-[#2D3748]">
              <span className="absolute -top-4 -left-1 text-4xl text-[#F5A623]/30">"</span>
              {t.text}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img src={t.img} alt={t.name} width={48} height={48} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="font-bold text-[#1B2A4A]">{t.name}</p>
                <p className="text-sm text-[#718096]">{t.loc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolarTestimonials;