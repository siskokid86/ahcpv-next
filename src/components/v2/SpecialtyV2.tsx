"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const leftItems = [
  { img: "/images/icons/panneau-solaire.png", title: "Panneaux Photovoltaïques", desc: "3 à 500 kWc – haut rendement – Garantie 30 ans" },
  { img: "/images/icons/onduleur.png", title: "Micro Onduleurs AP System", desc: "Compatible domotique" },
  { img: "/images/icons/batterie.png", title: "Batterie virtuelle", desc: "5 à 50 kWh – pour consommer même la nuit" },
];

const rightItems = [
  { img: "/images/icons/appli.png", title: "Application mobile", desc: "Indicateurs de production et économie" },
  { img: "/images/icons/stockage.png", title: "Capacité de stockage", desc: "3KW à 20 KW" },
  { img: "/images/icons/pilotage.png", title: "Pilotage intelligent", desc: "0 kWh perdu, 100 % utilisé" },
];

const SpecialtyV2 = ({ customVirtuelImg }: { customVirtuelImg?: string }) => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="batterie" className="bg-gradient-to-b from-section-dark to-primary py-24" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="scroll-fade-up text-center">
          <h2 className="mb-4 text-3xl text-section-dark-foreground md:text-4xl">
            Notre spécialité :
            <br />
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Photovoltaïque & Batterie virtuelle
            </span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-section-dark-foreground/70">
            Installation à l'épreuve du temps pour faire des économies massives, malgré la baisse des prix de revente.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-8">
            {leftItems.map((item) => (
              <div key={item.title} className="scroll-fade-up flex items-start gap-4 rounded-2xl border border-section-dark-foreground/10 bg-section-dark-foreground/5 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-section-dark-foreground/10">
                <img src={item.img} alt={item.title} className="h-14 w-14 object-contain" loading="lazy" />
                <div>
                  <h4 className="font-bold text-section-dark-foreground">{item.title}</h4>
                  <p className="text-sm italic text-section-dark-foreground/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="scroll-fade-up flex items-center justify-center">
            <img src={customVirtuelImg || "/images/virtuel.jpg"} alt="Batterie virtuelle panneaux solaires fonctionnement" className="max-h-80 rounded-2xl object-contain shadow-2xl" loading="lazy" />
          </div>

          <div className="space-y-8">
            {rightItems.map((item) => (
              <div key={item.title} className="scroll-fade-up flex items-start gap-4 rounded-2xl border border-section-dark-foreground/10 bg-section-dark-foreground/5 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-section-dark-foreground/10">
                <img src={item.img} alt={item.title} className="h-14 w-14 object-contain" loading="lazy" />
                <div>
                  <h4 className="font-bold text-section-dark-foreground">{item.title}</h4>
                  <p className="text-sm italic text-section-dark-foreground/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtyV2;