"use client";

const scrollToForm = () => {
  document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth" });
};

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38a169" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
);

const packs = [
  {
    title: "Pack 3 kWc",
    subtitle: "8 panneaux DualSun — ~16 m² de toiture",
    price: "5 990",
    priceNote: "Pose incluse, aides déduites",
    features: [
      "Production ~4 200 kWh/an",
      "Idéal pour 1-2 personnes",
      "2 ans batterie virtuelle offerts",
      "Économies ~70 €/mois",
    ],
    cta: "Estimer mes économies",
    highlighted: false,
  },
  {
    title: "Pack 6 kWc",
    subtitle: "16 panneaux DualSun — ~32 m² de toiture",
    price: "9 790",
    priceNote: "Pose incluse, aides déduites",
    badge: "Le plus choisi",
    features: [
      "Production ~8 400 kWh/an",
      "Idéal pour 3-4 personnes",
      "2 ans batterie virtuelle offerts",
      "Prime autoconsommation 2 205 €",
      "Économies ~110 €/mois",
      "Rentabilisé en ~7 ans",
    ],
    cta: "Estimer mes économies",
    highlighted: true,
  },
  {
    title: "Pack 9 kWc",
    subtitle: "18 panneaux DualSun — ~48 m² de toiture",
    price: null,
    priceLabel: "Sur devis",
    priceNote: "Chaque projet 9 kWc est unique",
    features: [
      "Production ~12 600 kWh/an",
      "Idéal gros consommateurs",
      "2 ans batterie virtuelle offerts",
      "Prime autoconsommation maximale",
      "Économies jusqu'à 160 €/mois",
      "Revente de surplus possible",
    ],
    cta: "Demander mon devis",
    highlighted: false,
  },
];

const S360Pricing = () => (
  <section className="bg-[#f5f6fa] py-16 md:py-24">
    <div className="mx-auto max-w-[1120px] px-5 text-center">
      <h2 className="text-2xl font-bold text-[#1a2b4a] md:text-4xl">Nos packs solaires</h2>
      <p className="mx-auto mt-4 max-w-[700px] text-lg text-[#4a5568]">
        Pose incluse, aides déduites. Batterie virtuelle MyLight 2 ans offerte sur chaque pack.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {packs.map((p) => (
          <div
            key={p.title}
            className={`relative rounded-2xl bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 ${
              p.highlighted ? "border-2 border-[#f5a623] shadow-md" : ""
            }`}
          >
            {p.badge && (
              <span className="absolute -top-3 right-5 rounded-xl bg-[#f5a623] px-3 py-1 text-xs font-bold text-white">
                {p.badge}
              </span>
            )}
            <h3 className="text-xl font-bold text-[#1a2b4a]">{p.title}</h3>
            <p className="mt-1 text-sm text-[#4a5568]">{p.subtitle}</p>

            <p className="mt-5">
              {p.price ? (
                <>
                  <span className="text-[28px] font-bold text-[#1a2b4a]">À partir de {p.price} €</span>
                  <span className="ml-1 text-base text-[#1a2b4a]">TTC</span>
                </>
              ) : (
                <span className="text-[28px] font-bold text-[#1a2b4a]">{p.priceLabel}</span>
              )}
            </p>
            <p className="text-[13px] text-[#4a5568]">{p.priceNote}</p>

            <hr className="my-5 border-[#e2e8f0]" />

            <ul className="flex flex-col gap-2.5">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-[15px] text-[#2d3748]">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToForm}
              className={`mt-6 w-full rounded-lg px-7 py-3.5 text-base font-bold transition ${
                p.highlighted
                  ? "bg-[#f5a623] text-white hover:bg-[#e6951a]"
                  : "border-2 border-[#f5a623] text-[#f5a623] hover:bg-[#f5a623] hover:text-white"
              }`}
            >
              {p.cta}
            </button>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-6 max-w-[800px] text-sm text-[#4a5568]">
        Tous les prix incluent la pose par notre équipe, le matériel, et les aides en vigueur (MaPrimeRénov, prime autoconsommation). TVA 10% pour les maisons de plus de 2 ans.
      </p>
    </div>
  </section>
);

export default S360Pricing;