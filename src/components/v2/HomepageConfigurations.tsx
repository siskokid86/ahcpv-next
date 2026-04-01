"use client";

import { ArrowRight, Home, Zap, Sun } from "lucide-react";
import { useLeadForm } from "@/components/lead/LeadFormContext";

const configs = [
  {
    icon: Home,
    title: "Toit plat et terrasse",
    desc: "L'installation est possible sur toit plat grâce à des supports inclinés spécifiques. Nos équipes adaptent l'inclinaison pour maximiser la production solaire.",
  },
  {
    icon: Zap,
    title: "Maison en triphasé",
    desc: "Nos installations sont 100 % compatibles avec les compteurs triphasés. Aucune contrainte supplémentaire, même fonctionnement, mêmes économies.",
  },
  {
    icon: Sun,
    title: "Autoconsommation",
    desc: "Jusqu'à 95 % d'autoconsommation grâce à la batterie virtuelle. Consommez votre propre énergie solaire, même la nuit et les jours gris.",
  },
];

const HomepageConfigurations = () => {
  const { openLeadForm } = useLeadForm();
  return (
  <section className="bg-muted/30 py-20">
    <div className="container mx-auto max-w-5xl px-6">
      <h2 className="mb-4 text-center text-3xl text-foreground md:text-4xl">
        Installation solaire adaptée à <span className="gradient-text">votre maison</span>
      </h2>
      <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
        Toit plat, triphasé ou autoconsommation totale : nous avons la solution adaptée à chaque configuration.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {configs.map((c) => (
          <div key={c.title} className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <c.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-foreground">{c.title}</h3>
            <p className="mb-4 text-sm text-muted-foreground">{c.desc}</p>
            <button
              onClick={() => openLeadForm()}
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              Estimer mon projet
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default HomepageConfigurations;