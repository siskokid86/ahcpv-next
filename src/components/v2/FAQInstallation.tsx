"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    q: "Combien coûte une installation de panneaux solaires ?",
    a: "Le prix dépend de la puissance installée : 3 kWc dès 5 990€, 6 kWc dès 10 290€, 9 kWc dès 14 490€ TTC pose incluse, aides déduites. Ce tarif inclut le matériel, la pose, la mise en service et les démarches administratives.",
  },
  {
    q: "Combien de temps dure l'installation ?",
    a: "L'installation physique des panneaux prend généralement 1 à 2 jours. Notre équipe interne de 11 techniciens certifiés réalise la pose de A à Z, sans sous-traitance.",
  },
  {
    q: "Quelle puissance choisir pour ma maison ?",
    a: "3 kWc convient aux petites consommations (studio, couple). 6 kWc est le choix standard pour une famille de 3-4 personnes. 9 kWc est recommandé pour les grosses consommations ou si vous avez un véhicule électrique.",
  },
  {
    q: "Faut-il un permis de construire ?",
    a: "Non, un permis de construire n'est pas nécessaire pour une installation en toiture de moins de 20 m de hauteur. Une simple déclaration préalable de travaux suffit. Nous nous chargeons de toutes les démarches administratives.",
  },
  {
    q: "Quelles sont les aides disponibles ?",
    a: "Vous pouvez bénéficier de la prime à l'autoconsommation (jusqu'à 2 205€), d'un taux de TVA réduit (10 %), et de l'obligation d'achat du surplus par EDF OA. Nous les déduisons directement de votre devis.",
  },
  {
    q: "Quelle garantie sur l'installation ?",
    a: "Votre installation bénéficie d'une garantie décennale (10 ans) sur la pose, d'une garantie constructeur jusqu'à 30 ans sur les panneaux et de 25 ans sur les micro-onduleurs.",
  },
];

const FAQInstallation = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useScrollAnimation();

  return (
    <section className="bg-muted/30 py-24" ref={sectionRef}>
      <div className="container mx-auto max-w-3xl px-6">
        <div className="scroll-fade-up text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            Questions fréquentes sur{" "}
            <span className="gradient-text">l'installation de panneaux solaires</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="scroll-fade-up overflow-hidden rounded-2xl border border-border bg-card px-6 shadow-[var(--shadow-card)] transition-all duration-300"
            >
              <button
                className="flex w-full items-center justify-between py-5 text-left text-base font-semibold text-foreground hover:text-primary transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {/* Content always in DOM for pre-rendering / SEO */}
              <div
                className={`transition-all duration-300 ${
                  openIndex === i ? "max-h-96 pb-5 opacity-100" : "max-h-0 overflow-hidden opacity-0"
                }`}
                aria-hidden={openIndex !== i}
              >
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQInstallation;