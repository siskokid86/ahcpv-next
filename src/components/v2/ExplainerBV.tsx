"use client";

import { Sun, Cloud, Moon, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: Sun,
    title: "Produisez",
    desc: "Vos panneaux captent l'énergie solaire en journée et alimentent votre foyer en direct.",
  },
  {
    icon: Cloud,
    title: "Stockez virtuellement",
    desc: "Le surplus est injecté dans le réseau et crédité sur votre compte de stockage virtuel.",
  },
  {
    icon: Moon,
    title: "Consommez quand vous voulez",
    desc: "Utilisez vos crédits le soir, la nuit ou les jours gris — sans aucune perte.",
  },
];

const advantages = [
  "Stockez autant que vous produisez — pas de limite de kWh",
  "Pas de batterie physique à acheter ni à remplacer",
  "Zéro gaspillage : chaque kWh produit est consommé",
  "Suivez vos économies en temps réel depuis votre téléphone",
];

const ExplainerBV = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="bg-muted py-24" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="scroll-fade-up text-center">
          <h2 className="mb-4 text-3xl text-foreground md:text-4xl">
            Comment fonctionne la{" "}
            <span className="gradient-text">batterie virtuelle</span> ?
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-muted-foreground">
            Un principe simple : votre surplus solaire est stocké virtuellement et restitué quand vous en avez besoin.
          </p>
        </div>

        {/* 3 étapes */}
        <div className="scroll-fade-up mx-auto mb-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow-card)]"
            >
              {i < steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-primary md:block">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <step.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Avantages */}
        <div className="scroll-fade-up mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <h3 className="mb-6 text-center text-xl font-semibold text-foreground">
            Les avantages du stockage virtuel
          </h3>
          <ul className="space-y-4">
            {advantages.map((adv) => (
              <li key={adv} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">{adv}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExplainerBV;