"use client";

const steps = [
  {
    num: 1,
    title: "Diagnostic Personnalisé",
    text: "Patrick se déplace chez vous. Il analyse votre consommation réelle sur vos factures EDF, étudie l'orientation et l'inclinaison de votre toit, et prend en compte votre profil : clim, piscine, voiture électrique, nombre d'occupants. Ce n'est pas un devis en ligne — c'est un diagnostic par un installateur qui a 20 ans de terrain.",
    badge: "Étude gratuite et sans engagement",
    img: "/images/s360-diagnostic.jpg",
    imgAlt: "Patrick réalise un diagnostic solaire chez un client",
  },
  {
    num: 2,
    title: "Conception Sur-Mesure",
    text: "On dimensionne exactement ce qu'il vous faut : 3, 6 ou 9 kWc. Pas plus, pas moins. Simulation de production réelle basée sur votre toit, votre orientation et l'ensoleillement de votre commune. Choix entre batterie virtuelle MyLight (95% d'autoconsommation) ou batterie physique selon votre usage. Aucune sur-vente : si 3 kWc suffisent, on vous le dit.",
  },
  {
    num: 3,
    title: "Installation par Notre Équipe",
    text: "Nos 11 techniciens certifiés RGE posent votre installation. Les mêmes personnes du début à la fin. Panneaux DualSun (fabrication française, Tier 1), micro-onduleurs AP System pour une production optimale panneau par panneau. Pose en 1 à 2 jours. Votre toit est entre les mains de professionnels que vous pouvez recontacter demain.",
    img: "/images/s360-installation.jpg",
    imgAlt: "Techniciens AHC posant des panneaux solaires sur un toit",
  },
  {
    num: 4,
    title: "Démarches 100% Gérées",
    text: "On s'occupe de tout le papier : déclaration préalable en mairie, demande de raccordement Enedis, dossier MaPrimeRénov, prime à l'autoconsommation, mise en service. Vous signez les documents, on fait le reste. La plupart de nos clients nous disent que c'est ce qui les a le plus soulagés.",
  },
  {
    num: 5,
    title: "Suivi Production à Vie",
    text: "Votre production est visible en temps réel sur votre application. Si quelque chose ne tourne pas rond, c'est l'équipe qui a posé vos panneaux qui intervient — pas un call center. Patrick sera encore là dans 10 ans. Et dans 20 ans. C'est l'avantage de travailler avec une entreprise locale qui a 20 ans d'ancienneté.",
  },
];

const S360Method = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="mx-auto max-w-[1120px] px-5 text-center">
      <h2 className="text-2xl font-bold text-[#1a2b4a] md:text-4xl">La Méthode Solaire 360</h2>
      <p className="mx-auto mt-4 max-w-[700px] text-lg text-[#4a5568]">
        Un accompagnement complet, de l'étude à la production. Chaque étape est réalisée par notre équipe interne.
      </p>
    </div>

    <div className="relative mx-auto mt-12 max-w-[1120px] px-5">
      {/* Timeline line */}
      <div className="absolute left-[29px] top-0 hidden h-full w-0.5 bg-[#1a2b4a] md:left-1/2 md:block" />
      <div className="absolute left-[29px] top-0 block h-full w-0.5 bg-[#1a2b4a] md:hidden" />

      <div className="flex flex-col gap-16">
        {steps.map((step, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div key={step.num} className="relative flex gap-6 md:gap-0">
              {/* Circle - mobile */}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5a623] text-lg font-bold text-white md:hidden">
                {step.num}
              </div>

              {/* Desktop layout */}
              <div className="hidden w-full md:flex">
                {/* Left content */}
                <div className={`w-[calc(50%-24px)] ${isLeft ? "" : "order-3"}`}>
                  {isLeft && (
                    <div className="pr-8 text-right">
                      <h3 className="text-xl font-bold text-[#1a2b4a]">{step.title}</h3>
                      <p className="mt-2 text-base leading-relaxed text-[#4a5568]">{step.text}</p>
                      {step.badge && (
                        <span className="mt-3 inline-block rounded-full bg-[#38a169]/15 px-3 py-1 text-[13px] font-bold text-[#38a169]">
                          {step.badge}
                        </span>
                      )}
                    </div>
                  )}
                  {!isLeft && step.img && (
                    <div className="flex justify-end pr-8">
                      <img src={step.img} alt={step.imgAlt} width={320} height={220} className="rounded-xl object-cover" />
                    </div>
                  )}
                  {!isLeft && !step.img && <div />}
                </div>

                {/* Circle - desktop */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5a623] text-lg font-bold text-white">
                  {step.num}
                </div>

                {/* Right content */}
                <div className={`w-[calc(50%-24px)] ${isLeft ? "" : "order-2"}`}>
                  {!isLeft && (
                    <div className="pl-8">
                      <h3 className="text-xl font-bold text-[#1a2b4a]">{step.title}</h3>
                      <p className="mt-2 text-base leading-relaxed text-[#4a5568]">{step.text}</p>
                      {step.badge && (
                        <span className="mt-3 inline-block rounded-full bg-[#38a169]/15 px-3 py-1 text-[13px] font-bold text-[#38a169]">
                          {step.badge}
                        </span>
                      )}
                    </div>
                  )}
                  {isLeft && step.img && (
                    <div className="pl-8">
                      <img src={step.img} alt={step.imgAlt} width={320} height={220} className="rounded-xl object-cover" />
                    </div>
                  )}
                  {isLeft && !step.img && <div />}
                </div>
              </div>

              {/* Mobile content */}
              <div className="md:hidden">
                <h3 className="text-xl font-bold text-[#1a2b4a]">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-[#4a5568]">{step.text}</p>
                {step.badge && (
                  <span className="mt-3 inline-block rounded-full bg-[#38a169]/15 px-3 py-1 text-[13px] font-bold text-[#38a169]">
                    {step.badge}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default S360Method;