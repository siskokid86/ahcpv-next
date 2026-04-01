"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLeadForm } from "@/components/lead/LeadFormContext";

const faqs = [
  {
    q: "Quel est le prix moyen d'une installation solaire ?",
    a: "Le prix dépend de la puissance : 3 kWc dès 5 990€, 6 kWc dès 10 290€, 9 kWc dès 14 490€. Ces tarifs incluent le matériel, la pose, les démarches administratives et les aides de l'État déjà déduites.",
  },
  {
    q: "Les aides sont-elles déjà déduites de vos tarifs ?",
    a: "Oui. Nos prix affichés incluent la déduction de la prime à l'autoconsommation et la TVA réduite applicable. Vous n'avez pas de démarche supplémentaire à effectuer, nous nous occupons de tout.",
  },
  {
    q: "Comment obtenir un devis gratuit ?",
    a: "Remplissez notre formulaire d'estimation en 2 minutes. Un conseiller vous recontacte sous 24h pour affiner votre projet et vous proposer un devis personnalisé, sans engagement.",
  },
  {
    q: "Y a-t-il des frais cachés ?",
    a: "Non. Le prix affiché inclut le matériel, la pose, les démarches administratives et la mise en service. Les aides de l'État sont déjà déduites du prix. Pas de mauvaises surprises.",
  },
  {
    q: "Quelle est la durée de vie des panneaux solaires ?",
    a: "Les panneaux solaires ont une durée de vie de plus de 25 ans avec un rendement garanti. Nos panneaux bénéficient d'une garantie fabricant de 20 à 25 ans selon le modèle choisi.",
  },
  {
    q: "Combien de temps dure l'installation ?",
    a: "L'installation physique des panneaux prend généralement 1 à 2 jours. Le délai total du projet (étude, démarches administratives, installation) est d'environ 2 à 3 mois.",
  },
];

const FAQPrixPV = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useScrollAnimation();
  const { openLeadForm } = useLeadForm();

  return (
    <section id="faq" className="bg-muted py-24" ref={sectionRef}>
      <div className="container mx-auto max-w-3xl px-6">
        <div className="scroll-fade-up mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
            Questions fréquentes
          </span>
          <h2 className="text-3xl text-foreground md:text-4xl">
            Vos questions sur les <span className="gradient-text">prix</span>
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

        <div className="scroll-fade-up mt-12 text-center">
          <button
            onClick={() => openLeadForm()}
            className="cta-pulse inline-flex items-center gap-3 rounded-xl bg-primary px-10 py-5 text-lg font-bold text-primary-foreground shadow-[var(--shadow-primary)] transition-all hover:opacity-90"
          >
            Obtenir mon estimation gratuite
            <ArrowRight className="h-5 w-5" />
          </button>
          <p className="mt-4 text-sm text-muted-foreground">Service gratuit | Sans engagement</p>
        </div>
      </div>
    </section>
  );
};

export default FAQPrixPV;