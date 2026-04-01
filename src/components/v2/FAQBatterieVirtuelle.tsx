"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    q: "Qu'est-ce qu'une batterie virtuelle exactement ?",
    a: "La batterie virtuelle est un service qui vous permet de stocker votre surplus d'électricité solaire sur le réseau, sous forme de crédits. Contrairement à une batterie physique, il n'y a aucun équipement à installer chez vous : votre excédent est injecté dans le réseau et vous le récupérez quand vous en avez besoin.",
  },
  {
    q: "Quelle différence avec une batterie physique ?",
    a: "Une batterie physique (lithium) stocke entre 6 et 20 kWh et coûte plusieurs milliers d'euros. La batterie virtuelle offre une capacité illimitée, sans usure, sans remplacement et sans coût matériel supplémentaire. Vous ne perdez plus aucun kWh produit.",
  },
  {
    q: "Est-ce compatible avec mon installation existante ?",
    a: "Oui. La batterie virtuelle est compatible avec toutes les installations photovoltaïques, qu'elles soient neuves ou déjà en service. Il suffit que vos panneaux soient raccordés au réseau.",
  },
  {
    q: "Comment fonctionne le stockage virtuel concrètement ?",
    a: "En journée, vos panneaux produisent de l'électricité. Ce que vous ne consommez pas est injecté dans le réseau et crédité sur votre compte virtuel. Le soir ou les jours gris, vous puisez dans ces crédits pour couvrir votre consommation — sans aucune perte.",
  },
  {
    q: "Y a-t-il des frais mensuels ?",
    a: "Le service de batterie virtuelle est inclus dans nos offres avec stockage virtuel. Il n'y a pas de frais supplémentaires cachés : vous ne payez que votre installation solaire.",
  },
  {
    q: "Puis-je combiner batterie physique et virtuelle ?",
    a: "Absolument. Certains de nos clients choisissent une batterie physique pour l'autonomie immédiate et la batterie virtuelle pour stocker le surplus restant. C'est la combinaison idéale pour atteindre jusqu'à 95% d'autoconsommation.",
  },
];

const FAQBatterieVirtuelle = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useScrollAnimation();

  return (
    <section id="faq" className="bg-muted py-24" ref={sectionRef}>
      <div className="container mx-auto max-w-3xl px-6">
        <div className="scroll-fade-up text-center">
          <h2 className="mb-14 text-3xl text-foreground md:text-4xl">
            Questions fréquentes sur la{" "}
            <span className="gradient-text">batterie virtuelle</span>
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

export default FAQBatterieVirtuelle;