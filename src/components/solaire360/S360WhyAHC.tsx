"use client";

const items = [
  {
    icon: <path d="M20 6L9 17l-5-5" />,
    title: "Équipe interne de 11 techniciens",
    text: "Zéro sous-traitance. Les mêmes personnes du premier appel au SAV.",
  },
  {
    icon: <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>,
    title: "20 ans d'expérience terrain",
    text: "Patrick a installé des panneaux bien avant que ce soit à la mode. 1 557 toits et il les connaît tous.",
  },
  {
    icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></>,
    title: "100% Occitanie",
    text: "On ne couvre que les départements 66, 34, 11 et 31. Ça veut dire qu'on connaît votre ensoleillement, votre PLU, votre commune.",
  },
  {
    icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>,
    title: "Certifié RGE QualiPV",
    text: "Obligatoire pour bénéficier des aides. Mais surtout, c'est un audit qualité annuel de nos installations.",
  },
  {
    icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></>,
    title: "Démarches 100% gérées",
    text: "Mairie, Enedis, MaPrimeRénov, prime autoconsommation. On fait tout, vous signez.",
  },
  {
    icon: <><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></>,
    title: "Garantie Production 12 mois",
    text: "Moins de 90% de la simulation ? On revient et on corrige. Gratuitement.",
  },
];

const S360WhyAHC = () => (
  <section className="bg-[#f5f6fa] py-16 md:py-24">
    <div className="mx-auto max-w-[1120px] px-5">
      <h2 className="text-center text-2xl font-bold text-[#1a2b4a] md:text-4xl">
        Pourquoi choisir AHC plutôt qu'un autre installateur
      </h2>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#f5a623]/15">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {item.icon}
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-[#1a2b4a]">{item.title}</h3>
              <p className="mt-1 text-sm text-[#4a5568]">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default S360WhyAHC;