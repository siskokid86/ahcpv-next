"use client";

const badges = ["Garantie décennale", "Panneaux garantis 25-30 ans", "Onduleurs garantis 20-25 ans"];

const S360Guarantee = () => (
  <section className="bg-[#1a2b4a] py-16 md:py-24">
    <div className="mx-auto max-w-[800px] px-5 text-center">
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="mx-auto">
        <path d="M28 4L6 14v14c0 13.2 9.4 25.5 22 28 12.6-2.5 22-14.8 22-28V14L28 4z" stroke="#f5a623" strokeWidth="2.5" fill="none" />
        <path d="M20 28l6 6 10-12" stroke="#f5a623" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <h2 className="mt-6 text-2xl font-bold text-white md:text-[32px]">Garantie Production 12 Mois</h2>

      <p className="mt-4 text-lg leading-relaxed text-[#e2e8f0]">
        Si votre installation produit moins de 90% de la simulation sur les 12 premiers mois, on intervient gratuitement pour diagnostiquer et corriger. Point.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {badges.map((b) => (
          <span key={b} className="rounded-[20px] bg-white/10 px-5 py-2 text-sm font-bold text-white">
            {b}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default S360Guarantee;