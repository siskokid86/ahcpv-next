"use client";

const cards = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#e53e3e" opacity=".12" />
        <text x="20" y="26" textAnchor="middle" fill="#e53e3e" fontSize="22" fontWeight="bold">?</text>
      </svg>
    ),
    title: "Des devis au téléphone sans voir votre toit",
    text: "La plupart des entreprises envoient un devis standard sans même venir chez vous. Résultat : installation mal dimensionnée, mauvaise orientation, production décevante.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#e53e3e" opacity=".12" />
        <g stroke="#e53e3e" strokeWidth="1.8" strokeLinecap="round">
          <circle cx="14" cy="18" r="4" /><circle cx="26" cy="18" r="4" /><path d="M10 30c0-3 2-5 4-5h4M22 25h4c2 0 4 2 4 5" />
        </g>
      </svg>
    ),
    title: "Des sous-traitants que vous ne reverrez jamais",
    text: "Le commercial n'est pas l'installateur. L'installateur n'est pas le SAV. Personne ne connaît votre dossier. Et quand il y a un problème, chacun renvoie vers l'autre.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#e53e3e" opacity=".12" />
        <rect x="12" y="10" width="16" height="20" rx="2" stroke="#e53e3e" strokeWidth="1.8" />
        <circle cx="20" cy="22" r="2" fill="#e53e3e" />
        <line x1="20" y1="15" x2="20" y2="18" stroke="#e53e3e" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Les démarches administratives sur votre dos",
    text: "Déclaration en mairie, raccordement Enedis, dossier MaPrimeRénov, prime autoconsommation… C'est à vous de tout gérer, souvent sans aide.",
  },
];

const S360Problem = () => (
  <section className="bg-[#f5f6fa] py-16 md:py-24">
    <div className="mx-auto max-w-[1120px] px-5 text-center">
      <h2 className="text-2xl font-bold text-[#1a2b4a] md:text-4xl">
        Installer des panneaux solaires, ça devrait être simple
      </h2>
      <p className="mx-auto mt-4 max-w-[700px] text-lg text-[#4a5568]">
        Pourtant, la plupart des gens qui nous contactent ont les mêmes craintes.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <div
            key={c.title}
            className="rounded-xl border-t-[3px] border-[#e53e3e] bg-white p-7 shadow-sm transition hover:-translate-y-1"
          >
            {c.icon}
            <h3 className="mt-4 text-lg font-bold text-[#1a2b4a]">{c.title}</h3>
            <p className="mt-2 text-base text-[#4a5568]">{c.text}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-lg font-semibold text-[#1a2b4a]">
        C'est exactement pour ça qu'on a structuré la Méthode Solaire 360.
      </p>
    </div>
  </section>
);

export default S360Problem;