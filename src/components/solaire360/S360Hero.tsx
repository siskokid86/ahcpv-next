"use client";

const scrollToForm = () => {
  document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth" });
};

const S360Hero = () => (
  <section id="hero" className="bg-white py-16 md:py-24">
    <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-10 px-5 md:flex-row md:gap-16">
      {/* Text column */}
      <div className="w-full md:w-[55%]">
        <span className="inline-block rounded-[20px] bg-[#f5a623]/15 px-4 py-1.5 text-sm font-bold text-[#f5a623]">
          1 557 installations en Occitanie
        </span>

        <h1 className="mt-5 text-[28px] font-extrabold leading-[1.15] text-[#1a2b4a] md:text-[44px]">
          Vos panneaux solaires installés par des experts locaux
        </h1>

        <p className="mt-4 text-lg text-[#4a5568] md:text-[22px]">
          La Méthode Solaire 360 : du diagnostic à la pose par notre équipe de 11 techniciens certifiés RGE. Zéro sous-traitance, zéro mauvaise surprise.
        </p>

        {/* Savings block */}
        <div className="mt-6 rounded-xl bg-[#f5f6fa] p-5">
          <p className="flex items-center gap-2 text-sm font-bold text-[#4a5568]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            Économies moyennes constatées
          </p>
          <p className="mt-2">
            <span className="text-[32px] font-bold text-[#38a169]">110&nbsp;€/mois</span>
            <span className="ml-2 text-base text-[#4a5568]">pour un foyer standard</span>
          </p>
          <p className="mt-1 text-base text-[#2d3748]">
            Jusqu'à <strong>160&nbsp;€/mois</strong>{" "}
            <span className="text-sm text-[#4a5568]">pour les gros consommateurs (clim, piscine, voiture électrique)</span>
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-7 flex flex-wrap gap-3">
          <button
            onClick={scrollToForm}
            className="rounded-lg bg-[#f5a623] px-8 py-4 text-base font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#e6951a]"
          >
            Estimer mes économies
          </button>
          <a
            href="tel:0448060443"
            className="rounded-lg border-2 border-[#1a2b4a] px-8 py-4 text-base font-bold text-[#1a2b4a] transition hover:bg-[#1a2b4a] hover:text-white"
          >
            Appeler Patrick - 04 48 06 04 43
          </a>
        </div>
        <p className="mt-3 text-[13px] italic text-[#4a5568]">Gratuit et sans engagement — Réponse sous 48h</p>
      </div>

      {/* Image column */}
      <div className="hidden w-[45%] md:block">
        <img
          src="/images/s360-hero-house.jpg"
          alt="Maison provençale avec panneaux solaires en Occitanie"
          width={800}
          height={600}
          className="rounded-2xl object-cover shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default S360Hero;