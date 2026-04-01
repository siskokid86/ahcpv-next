"use client";

import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const installations = [
  { src: "/images/realisations/agde.jpg", city: "Agde" },
  { src: "/images/realisations/castelmaurou.jpg", city: "Castelmaurou" },
  { src: "/images/realisations/daux.jpg", city: "Daux" },
  { src: "/images/realisations/frontignan.jpg", city: "Frontignan" },
  { src: "/images/realisations/gigean.jpg", city: "Gigean" },
  { src: "/images/realisations/tournefeuille.jpg", city: "Tournefeuille" },
  { src: "/images/realisations/vigoulet.jpg", city: "Vigoulet-Auzil" },
  { src: "/images/realisations/villemur.jpg", city: "Villemur" },
];

const TestimonialsV2 = () => {
  const sectionRef = useScrollAnimation();

  useEffect(() => {
    if (document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) return;
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="avis" className="bg-background py-24" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="scroll-fade-up text-center">
          <h2 className="mb-4 text-3xl text-foreground md:text-4xl">
            Nos clients <span className="gradient-text">vous en parlent</span>
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-muted-foreground">
            Découvrez les retours d'expérience de nos clients satisfaits en Occitanie
          </p>
        </div>
        <div className="scroll-fade-up">
          <div className="elfsight-app-f2881327-39af-40e9-be20-ea37ef533889" data-elfsight-app-lazy />
        </div>

        {/* Installation photos gallery */}
        <div className="scroll-fade-up mt-16">
          <h3 className="mb-2 text-center text-2xl font-bold text-foreground md:text-3xl">
            Nos réalisations en <span className="gradient-text">Occitanie</span>
          </h3>
          <p className="mx-auto mb-8 max-w-lg text-center text-muted-foreground">
            Quelques-unes des 1 557+ installations réalisées par notre équipe
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
            {installations.map((item) => (
              <div key={item.city} className="group relative overflow-hidden rounded-xl">
                <img
                  src={item.src}
                  alt={`Installation panneaux solaires à ${item.city}`}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <span className="text-sm font-semibold text-white">{item.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsV2;