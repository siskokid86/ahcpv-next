"use client";

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f5a623" stroke="#f5a623" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    ))}
  </div>
);

const testimonials = [
  {
    img: "/images/s360-temoignage1.jpg",
    quote: "Ma facture est passée de 185 à 28 € par mois. Patrick est venu chez moi, il a tout mesuré, tout calculé. L'équipe a posé les panneaux en une journée. Je n'ai eu aucune démarche à faire.",
    name: "Jean-Pierre",
    detail: "Perpignan (66) — Pack 6 kWc — Juin 2024",
  },
  {
    img: "/images/s360-temoignage2.jpg",
    quote: "On hésitait depuis 2 ans. Patrick nous a montré les chiffres réels, pas des promesses. Facture passée de 220 à 35 €. Et on recharge la voiture électrique gratuitement. On regrette juste de ne pas avoir commencé plus tôt.",
    name: "Marie et Luc",
    detail: "Montpellier (34) — Pack 9 kWc + Borne VE — Mars 2025",
  },
  {
    img: "/images/s360-temoignage3.jpg",
    quote: "Même avec un petit pack de 3 kWc, je suis passé de 130 à 45 € par mois. L'équipe d'AHC m'a clairement dit qu'un 6 kWc serait trop pour ma consommation. Ça, ça m'a mis en confiance.",
    name: "Robert",
    detail: "Narbonne (11) — Pack 3 kWc — Septembre 2024",
  },
];

const S360Testimonials = () => (
  <section className="bg-[#f5f6fa] py-16 md:py-24">
    <div className="mx-auto max-w-[1120px] px-5 text-center">
      <h2 className="text-2xl font-bold text-[#1a2b4a] md:text-4xl">Ils sont passés au solaire avec AHC</h2>
      <p className="mt-4 text-lg text-[#4a5568]">Plus de 1 557 familles en Occitanie nous ont fait confiance.</p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-1">
            <img src={t.img} alt={`Installation solaire ${t.name}`} width={768} height={512} loading="lazy" className="h-[180px] w-full rounded-xl object-cover" />
            <div className="mt-4">
              <Stars />
              <p className="mt-3 text-base italic leading-relaxed text-[#2d3748]">"{t.quote}"</p>
              <p className="mt-4 text-[15px] font-bold text-[#1a2b4a]">{t.name}</p>
              <p className="text-[13px] text-[#4a5568]">{t.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default S360Testimonials;