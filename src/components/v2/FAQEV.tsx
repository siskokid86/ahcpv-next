"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    q: "Peut-on vraiment recharger sa voiture électrique avec des panneaux solaires ?",
    a: "Oui, c'est tout à fait possible et de plus en plus courant. Vos panneaux solaires produisent de l'électricité en journée, qui alimente directement votre borne de recharge. Le surplus peut être stocké virtuellement pour recharger le soir. Résultat : vous roulez avec votre propre énergie solaire.",
  },
  {
    q: "Combien de panneaux solaires faut-il pour recharger une voiture électrique ?",
    a: "Cela dépend de votre kilométrage annuel et de votre véhicule. En moyenne, une installation de 6 kWc (12 panneaux) suffit pour couvrir les besoins d'un rouleur moyen tout en alimentant une partie de la maison. Une étude personnalisée permet de dimensionner précisément votre installation.",
  },
  {
    q: "Quelle borne de recharge est compatible avec les panneaux solaires ?",
    a: "Toutes les bornes de recharge domestiques sont compatibles avec une installation photovoltaïque. Nous installons des bornes intelligentes qui peuvent prioriser la recharge solaire : votre voiture se recharge en priorité quand vos panneaux produisent, pour maximiser l'autoconsommation.",
  },
  {
    q: "Est-ce que ça fonctionne aussi pour une voiture hybride rechargeable ?",
    a: "Absolument. Les hybrides rechargeables ont des batteries plus petites, ce qui signifie qu'elles se rechargent encore plus vite avec vos panneaux solaires. Même une petite installation peut couvrir l'intégralité de vos recharges.",
  },
  {
    q: "Puis-je recharger ma voiture la nuit avec l'énergie solaire ?",
    a: "Oui, grâce au stockage virtuel inclus dans nos offres. L'énergie produite en journée que vous ne consommez pas est créditée sur votre compte. Vous la récupérez le soir pour recharger votre véhicule, sans aucune perte.",
  },
  {
    q: "La borne de recharge est-elle incluse dans l'installation ?",
    a: "Dans le cadre de notre offre, la borne de recharge peut être offerte avec votre installation solaire. Tout est installé par nos équipes certifiées : panneaux, onduleur et borne, en une seule intervention.",
  },
];

const FAQEV = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useScrollAnimation();

  return (
    <section id="faq" className="bg-muted py-24" ref={sectionRef}>
      <div className="container mx-auto max-w-3xl px-6">
        <div className="scroll-fade-up text-center">
          <h2 className="mb-14 text-3xl text-foreground md:text-4xl">
            Questions fréquentes sur le{" "}
            <span className="gradient-text">solaire et la recharge électrique</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="scroll-fade-up overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300"
            >
              <button
                className="flex w-full items-center justify-between px-7 py-5 text-left font-semibold text-foreground transition-colors hover:text-primary"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="px-7 text-muted-foreground">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQEV;