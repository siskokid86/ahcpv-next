"use client";

import { Check, X, Minus } from "lucide-react";

type CellType = "check" | "x" | "~";
interface Row {
  label: string;
  ahc: { text: string; type: CellType };
  grand: { text: string; type: CellType };
  platform: { text: string; type: CellType };
  low: { text: string; type: CellType };
}

const rows: Row[] = [
  {
    label: "Interlocuteur unique",
    ahc: { text: "Patrick Perrotet (référent Occitanie)", type: "check" },
    grand: { text: "Centre d'appels", type: "x" },
    platform: { text: "Dispatching automatique", type: "x" },
    low: { text: "Variable", type: "x" },
  },
  {
    label: "Équipe d'installation",
    ahc: { text: "11 salariés internes", type: "check" },
    grand: { text: "Sous-traitants", type: "x" },
    platform: { text: "Sous-traitants", type: "x" },
    low: { text: "1-2 personnes", type: "x" },
  },
  {
    label: "Garantie résultat écrite",
    ahc: { text: "Oui, 12 mois", type: "check" },
    grand: { text: "Non", type: "x" },
    platform: { text: "Non", type: "x" },
    low: { text: "Non", type: "x" },
  },
  {
    label: "Sera là dans 10 ans",
    ahc: { text: "20 ans d'historique", type: "check" },
    grand: { text: "Probablement", type: "~" },
    platform: { text: "Incertain", type: "x" },
    low: { text: "Incertain", type: "x" },
  },
  {
    label: "Démarches administratives",
    ahc: { text: "100% gérées par AHC", type: "check" },
    grand: { text: "Partiellement", type: "~" },
    platform: { text: "Non", type: "x" },
    low: { text: "Partiellement", type: "~" },
  },
  {
    label: "Suivi post-installation",
    ahc: { text: "3, 6 et 12 mois", type: "check" },
    grand: { text: "Sur demande", type: "~" },
    platform: { text: "Non", type: "x" },
    low: { text: "Non", type: "x" },
  },
  {
    label: "Expertise des intervenants",
    ahc: { text: "Patrick Perrotet, 25+ ans d'expérience, formateur d'ingénieurs", type: "check" },
    grand: { text: "Techniciens salariés", type: "~" },
    platform: { text: "Variable selon sous-traitant", type: "x" },
    low: { text: "Non communiqué", type: "x" },
  },
  {
    label: "Qualité du matériel",
    ahc: { text: "Jusqu'à 30 ans de garantie production", type: "check" },
    grand: { text: "10-15 ans selon marque", type: "~" },
    platform: { text: "Variable", type: "x" },
    low: { text: "Entrée de gamme", type: "x" },
  },
];

const Icon = ({ type }: { type: CellType }) => {
  if (type === "check") return <Check size={16} className="shrink-0 text-[#38A169]" />;
  if (type === "x") return <X size={16} className="shrink-0 text-[#E53E3E]" />;
  return <Minus size={16} className="shrink-0 text-[#F5A623]" />;
};

const SolarComparison = () => (
  <section className="bg-[#F7F8FA] py-20 md:py-[120px]">
    <div className="mx-auto max-w-[1120px] px-5 md:px-10">
      <h2 className="text-center text-[28px] font-bold text-[#1B2A4A] md:text-[40px]" style={{ fontFamily: "Playfair Display, serif" }}>
        Comparez avant de décider.
      </h2>
      <p className="mt-4 text-center text-lg text-[#718096]">C'est exactement ce qu'on vous demande.</p>

      {/* Desktop table */}
      <div className="mt-12 hidden overflow-x-auto md:block">
        <table className="w-full text-left text-sm">
          <thead>
            <tr>
              <th className="p-4" />
              <th className="rounded-t-xl bg-[#F5A623] p-4 text-center font-bold text-white">AHC</th>
              <th className="p-4 text-center font-semibold text-[#718096]">Grand groupe national</th>
              <th className="p-4 text-center font-semibold text-[#718096]">Plateforme en ligne</th>
              <th className="p-4 text-center font-semibold text-[#718096]">Installateur low-cost</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.label} className={i % 2 === 0 ? "bg-white" : ""}>
                <td className="p-4 font-semibold text-[#1B2A4A]">{r.label}</td>
                {[r.ahc, r.grand, r.platform, r.low].map((cell, j) => (
                  <td key={j} className={`p-4 text-center ${j === 0 ? "bg-[#FFF9ED]" : ""}`}>
                    <div className="flex items-center justify-center gap-1.5">
                      <Icon type={cell.type} />
                      <span className={cell.type === "check" && j === 0 ? "font-semibold text-[#38A169]" : "text-[#2D3748]"}>
                        {cell.text}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="mt-12 flex flex-col gap-4 md:hidden">
        {rows.map((r) => (
          <div key={r.label} className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
            <p className="mb-3 font-semibold text-[#1B2A4A]">{r.label}</p>
            {[
              { label: "AHC", cell: r.ahc, highlight: true },
              { label: "Grand groupe", cell: r.grand },
              { label: "Plateforme", cell: r.platform },
              { label: "Low-cost", cell: r.low },
            ].map((col) => (
              <div key={col.label} className={`flex items-center justify-between py-1.5 ${col.highlight ? "font-semibold" : ""}`}>
                <span className="text-sm text-[#718096]">{col.label}</span>
                <span className="flex items-center gap-1 text-sm">
                  <Icon type={col.cell.type} /> {col.cell.text}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-[15px] italic text-[#718096]">
        Comparaison basée sur les pratiques courantes du marché en Occitanie.
      </p>
    </div>
  </section>
);

export default SolarComparison;