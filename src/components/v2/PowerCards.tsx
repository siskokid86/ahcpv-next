"use client";

import { CheckCircle, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLeadForm } from "@/components/lead/LeadFormContext";

const cards = [
  {
    kwc: "3 kWc",
    panels: "6 panneaux",
    surface: "~16 m²",
    profile: "Petit foyer (1-2 pers.)",
    cta: "Obtenir mon devis 3kWc",
    badge: null,
  },
  {
    kwc: "6 kWc",
    panels: "12 panneaux",
    surface: "~32 m²",
    profile: "Maison familiale (3-4 pers.)",
    cta: "Obtenir mon devis 6kWc",
    badge: "Le plus choisi",
  },
  {
    kwc: "9 kWc",
    panels: "18 panneaux",
    surface: "~48 m²",
    profile: "Grande maison (4+ pers.)",
    cta: "Obtenir mon devis 9kWc",
    badge: null,
  },
];

const PowerCards = () => {
  const sectionRef = useScrollAnimation();
  const { openLeadForm } = useLeadForm();

  return (
    <section className="bg-background py-24" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="scroll-fade-up text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            Quelle puissance pour <span className="gradient-text">votre maison</span> ?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Choisissez la puissance adaptée à votre consommation et à la surface disponible sur votre toiture.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.kwc}
              className={`scroll-fade-up relative flex flex-col rounded-2xl border bg-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                card.badge ? "border-primary ring-2 ring-primary/20" : "border-border"
              }`}
            >
              {card.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground shadow-[var(--shadow-primary)]">
                  <Star className="h-3 w-3" />
                  {card.badge}
                </div>
              )}

              <h3 className="mb-6 text-center text-3xl font-bold text-foreground">{card.kwc}</h3>

              <div className="mb-8 space-y-4">
                {[
                  card.panels,
                  `Surface toiture : ${card.surface}`,
                  card.profile,
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground">{feat}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => openLeadForm()}
                className={`mt-auto block w-full rounded-xl py-4 text-center font-semibold transition-all hover:opacity-90 ${
                  card.badge
                    ? "bg-primary text-primary-foreground shadow-[var(--shadow-primary)]"
                    : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {card.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PowerCards;