"use client";

import { Sun, Home, TrendingUp, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLeadForm } from "@/components/lead/LeadFormContext";

const tiers = [
  {
    power: "3 kWc",
    panels: "6 panneaux",
    surface: "~16 m²",
    icon: Sun,
    description: "Idéal pour un petit foyer ou une consommation modérée",
    savings: "Réduction notable sur votre facture",
    popular: false,
  },
  {
    power: "6 kWc",
    panels: "12 panneaux",
    surface: "~32 m²",
    icon: Home,
    description: "Le choix le plus courant pour une maison familiale",
    savings: "Couvre une grande partie de votre consommation",
    popular: true,
  },
  {
    power: "9 kWc",
    panels: "18 panneaux",
    surface: "~48 m²",
    icon: TrendingUp,
    description: "Pour les grandes maisons ou forte consommation",
    savings: "Maximisez votre indépendance énergétique",
    popular: false,
  },
];

const PricingGrid = () => {
  const sectionRef = useScrollAnimation();
  const { openLeadForm } = useLeadForm();

  const goToEstimation = () => {
    openLeadForm();
  };

  return (
    <section ref={sectionRef} className="bg-muted py-24">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="scroll-fade-up text-center mb-14">
          <h2 className="text-3xl text-foreground md:text-4xl mb-4">
            Quelle puissance pour{" "}
            <span className="gradient-text">votre maison</span> ?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Le prix d'une installation photovoltaïque dépend de nombreux facteurs : puissance, type de toiture, région et aides disponibles. Voici les configurations les plus courantes.
          </p>
        </div>

        <div className="scroll-fade-up grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.power}
                className={`relative rounded-2xl border bg-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-lg ${
                  tier.popular
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-border"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Le plus choisi
                  </span>
                )}

                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{tier.power}</h3>
                    <p className="text-sm text-muted-foreground">{tier.panels}</p>
                  </div>
                </div>

                <div className="mb-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Surface toiture : {tier.surface}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {tier.description}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {tier.savings}
                  </div>
                </div>

                <p className="mb-6 text-center text-sm font-medium text-muted-foreground italic">
                  Prix sur devis — selon votre toiture et votre région
                </p>

                <button
                  onClick={goToEstimation}
                  className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 font-semibold transition-all ${
                    tier.popular
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "border border-border bg-background text-foreground hover:bg-muted"
                  }`}
                >
                  Obtenir mon prix exact
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>

        <p className="scroll-fade-up mt-8 text-center text-sm text-muted-foreground">
          Ces configurations sont indicatives. Votre installation est dimensionnée sur mesure selon votre consommation, votre toiture et les aides auxquelles vous avez droit.
        </p>
      </div>
    </section>
  );
};

export default PricingGrid;