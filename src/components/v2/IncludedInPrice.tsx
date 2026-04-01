"use client";

import { CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const items = [
  "Panneaux DualSun haut rendement, fabriqués en France",
  "Micro-onduleurs AP System",
  "Pose par notre équipe interne (1-2 jours)",
  "Démarches administratives (mairie, Enedis, aides)",
  "Batterie virtuelle incluse",
  "Garantie décennale + garantie matériel jusqu'à 30 ans",
  "Suivi production via application mobile",
];

const IncludedInPrice = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="bg-card py-20">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="scroll-fade-up mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-success/10 px-4 py-1.5 text-sm font-medium text-success">
            Tout compris
          </span>
          <h2 className="text-3xl text-foreground md:text-4xl">
            Ce qui est inclus dans <span className="gradient-text">nos prix</span>
          </h2>
        </div>

        <div className="scroll-fade-up grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 transition-all hover:shadow-md"
            >
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-success" />
              <span className="text-sm font-medium text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncludedInPrice;