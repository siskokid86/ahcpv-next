"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  { q: "L'installation va-t-elle endommager ma toiture ?", a: "Non. Nos installateurs certifiés RGE fixent les panneaux avec des systèmes étanches et garantis. Votre toiture reste parfaitement protégée, et nous couvrons les travaux par une assurance décennale." },
  { q: "Combien de temps faut-il pour rentabiliser mon installation ?", a: "La plupart de nos clients rentabilisent leur investissement en 6 à 9 ans. Avec l'augmentation du prix de l'électricité, vos économies sont immédiates et se renforcent chaque année." },
  { q: "Que se passe-t-il si je produis plus que je ne consomme ?", a: "Vous avez deux options : stocker votre surplus dans une batterie physique installée chez vous, ou profiter de notre solution de batterie virtuelle qui valorise automatiquement vos kWh sans perte." },
  { q: "L'installation est-elle adaptée à ma maison ?", a: "Nos experts réalisent une étude technique personnalisée. Nous vérifions l'ensoleillement, l'orientation de votre toit et votre consommation pour vous proposer une solution 100% sur mesure." },
  { q: "Est-ce que je dois avancer les frais ?", a: "Non. Nous proposons des solutions de financement flexibles et sans avance, afin que vos économies couvrent une grande partie de la mensualité." },
  { q: "Que se passe-t-il en cas de panne ou de problème ?", a: "Votre installation est garantie jusqu'à 30 ans. En cas de problème, nos équipes locales interviennent rapidement. Vous bénéficiez aussi d'un suivi en temps réel via notre application mobile." },
  { q: "Puis-je bénéficier d'aides financières ?", a: "Oui. Nos conseillers s'occupent de toutes les démarches administratives pour intégrer MaPrimeRénov', les CEE et la TVA réduite, afin de maximiser vos aides." },
];

const FAQV2 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useScrollAnimation();

  return (
    <section id="faq" className="bg-muted py-24" ref={sectionRef}>
      <div className="container mx-auto max-w-3xl px-6">
        <div className="scroll-fade-up text-center">
          <h2 className="mb-14 text-3xl text-foreground md:text-4xl">
            Des <span className="gradient-text">questions</span> ?
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
                <p className="px-7 text-muted-foreground">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQV2;