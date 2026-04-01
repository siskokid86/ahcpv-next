"use client";

const cards = [
  {
    tag: "CAS FRÉQUENT",
    tagStyle: "bg-[#E2E8F0] text-[#718096]",
    before: 180,
    after: 45,
    saving: "135",
    sub: "d'économie dès la première année",
    detail: "Soit 1 620 €/an réinjectés dans votre budget",
  },
  {
    tag: "MEILLEUR ROI",
    tagStyle: "bg-[#F5A623]/15 text-[#F5A623]",
    before: 250,
    after: 40,
    saving: "210",
    sub: "d'économie dès la première année",
    detail: "Soit 2 520 €/an — amortissement accéléré",
  },
  {
    tag: "LONG TERME",
    tagStyle: "bg-[#38A169]/15 text-[#38A169]",
    before: null,
    after: null,
    saving: "100%",
    sub: "d'économie pure",
    detail: "Installation amortie. Chaque euro produit est un euro gagné pendant 20+ ans.",
    isPercent: true,
  },
];

const Bar = ({ value, max, color, label }: { value: number; max: number; color: string; label: string }) => (
  <div className="flex items-center gap-2">
    <span className="w-16 text-right text-sm text-[#718096]">{label}</span>
    <div className="h-5 flex-1 rounded-full bg-[#F7F8FA]">
      <div className="h-5 rounded-full" style={{ width: `${(value / max) * 100}%`, backgroundColor: color }} />
    </div>
    <span className="w-20 text-sm font-semibold text-[#2D3748]">{value} €/mois</span>
  </div>
);

const SolarEconomies = () => (
  <section className="bg-white py-20 md:py-[120px]">
    <div className="mx-auto max-w-[1120px] px-5 md:px-10">
      <h2 className="text-center text-[28px] font-bold text-[#1B2A4A] md:text-[40px]" style={{ fontFamily: "Playfair Display, serif" }}>
        Des factures divisées par 4. Minimum.
      </h2>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {cards.map((c) => (
          <div key={c.tag} className="rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
            <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase ${c.tagStyle}`}>{c.tag}</span>

            {c.before !== null && c.after !== null && (
              <div className="mt-6 space-y-2">
                <Bar value={c.before} max={250} color="#E53E3E" label="AVANT" />
                <Bar value={c.after} max={250} color="#38A169" label="APRÈS" />
              </div>
            )}

            <p className={`${c.before !== null ? "mt-6" : "mt-8"} text-center`}>
              <span className={`font-bold text-[#38A169] ${c.isPercent ? "text-5xl" : "text-4xl"}`}>
                {c.saving}{!c.isPercent && " €/mois"}
              </span>
            </p>
            <p className="mt-2 text-center text-base text-[#2D3748]">{c.sub}</p>
            <p className="mt-3 text-center text-sm text-[#718096]">{c.detail}</p>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-[700px] text-center text-[15px] italic text-[#718096]">
        Économies basées sur des installations réelles en Occitanie. Chaque Bilan Solaire est calculé sur vos données personnelles.
      </p>
    </div>
  </section>
);

export default SolarEconomies;