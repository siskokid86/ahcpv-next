"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    q: "Quel est le prix moyen d'une installation photovoltaïque en 2026 ?",
    a: "Le prix d'une installation dépend de la puissance choisie, du type de pose (surimposition ou intégration), de la complexité de votre toiture et de votre région. Chaque projet est unique : c'est pourquoi nous réalisons une étude personnalisée gratuite pour vous donner un prix exact, aides déduites.",
  },
  {
    q: "Quelles aides de l'État réduisent le coût ?",
    a: "Plusieurs dispositifs peuvent réduire significativement le coût de votre installation : prime à l'autoconsommation, TVA réduite, aides régionales et locales. Le montant total dépend de votre situation. Notre étude gratuite intègre automatiquement toutes les aides auxquelles vous avez droit.",
  },
  {
    q: "Le prix inclut-il la pose et le matériel ?",
    a: "Oui. Nos devis sont tout inclus : panneaux, onduleur, système de fixation, câblage, main-d'œuvre, mise en service et démarches administratives. Aucun coût caché, aucun supplément.",
  },
  {
    q: "Combien de temps pour rentabiliser l'installation ?",
    a: "Le retour sur investissement dépend de votre consommation, de l'ensoleillement de votre région et des aides obtenues. En moyenne, nos clients rentabilisent leur installation en quelques années, puis profitent d'une énergie quasi gratuite pendant plus de 25 ans.",
  },
  {
    q: "Existe-t-il des facilités de paiement ?",
    a: "Oui, nous proposons plusieurs solutions de financement adaptées à votre budget : paiement comptant, crédit classique ou solutions de financement partenaires. Votre conseiller vous présente toutes les options lors de l'étude personnalisée.",
  },
  {
    q: "Pourquoi les prix varient autant d'un installateur à l'autre ?",
    a: "Les écarts s'expliquent par la qualité du matériel, les garanties offertes, le sérieux de la pose et le suivi après-vente. Chez AHC, nous utilisons du matériel premium avec des garanties longue durée, posé par des équipes certifiées. Un prix bas cache souvent des compromis sur la qualité ou les garanties.",
  },
];

const FAQPrix = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useScrollAnimation();

  return (
    <section id="faq" className="bg-muted py-24" ref={sectionRef}>
      <div className="container mx-auto max-w-3xl px-6">
        <div className="scroll-fade-up text-center">
          <h2 className="mb-14 text-3xl text-foreground md:text-4xl">
            Questions fréquentes sur le{" "}
            <span className="gradient-text">prix des panneaux solaires</span>
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

export default FAQPrix;