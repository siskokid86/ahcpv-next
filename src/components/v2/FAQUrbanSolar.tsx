"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    q: "Qu'est-ce qu'un installateur agréé Urban Solar ?",
    a: "Un installateur agréé Urban Solar est un professionnel certifié qui a suivi une formation spécifique à la solution de stockage virtuel Urban Solar Energy. Il garantit une mise en service conforme aux standards de l'éditeur, assurant un fonctionnement optimal et le maintien de toutes les garanties.",
  },
  {
    q: "Qu'est-ce que la solution Urban Solar Energy ?",
    a: "Urban Solar Energy est une entreprise spécialisée dans le stockage virtuel d'énergie solaire. Leur solution permet de stocker virtuellement le surplus d'électricité produit par vos panneaux photovoltaïques et de le récupérer quand vous en avez besoin, sans batterie physique.",
  },
  {
    q: "La solution Urban Solar est-elle compatible avec tous les panneaux ?",
    a: "Oui, parfaitement. La solution de stockage virtuel Urban Solar est compatible avec toutes les marques de panneaux photovoltaïques. Elle s'intègre à votre installation existante ou neuve pour vous permettre d'atteindre jusqu'à 95% d'autoconsommation.",
  },
  {
    q: "Quelle est la garantie sur la solution Urban Solar ?",
    a: "La solution de stockage virtuel Urban Solar est incluse dans nos offres sans frais supplémentaires. L'installation de vos panneaux, réalisée par notre équipe certifiée RGE, est couverte par une garantie décennale conformément à la réglementation.",
  },
  {
    q: "Combien de temps prend l'installation ?",
    a: "L'installation complète (panneaux, onduleur, raccordement) est généralement réalisée en une journée pour une maison individuelle. La mise en service de la solution Urban Solar et les démarches administratives sont prises en charge par nos équipes.",
  },
  {
    q: "L'installation est-elle éligible aux aides de l'État ?",
    a: "Oui, en tant qu'installateur certifié RGE, nos installations sont éligibles à la prime à l'autoconsommation, à l'obligation d'achat du surplus et aux différentes aides locales. Nous vous accompagnons dans toutes les démarches.",
  },
];

const FAQUrbanSolar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useScrollAnimation();

  return (
    <section id="faq" className="bg-muted py-24" ref={sectionRef}>
      <div className="container mx-auto max-w-3xl px-6">
        <div className="scroll-fade-up text-center">
          <h2 className="mb-14 text-3xl text-foreground md:text-4xl">
            Questions fréquentes sur{" "}
            <span className="gradient-text">Urban Solar et l'installation</span>
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

export default FAQUrbanSolar;