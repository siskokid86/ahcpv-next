"use client";

import { ShieldCheck, Clock, Users, Wrench, Award, Smartphone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  { icon: ShieldCheck, title: "Certifié RGE & QualiPV", desc: "Gage de qualité reconnu par l'État, indispensable pour les aides." },
  { icon: Clock, title: "Plus de 20 ans d'expérience", desc: "Depuis 2006, nous accompagnons les particuliers en Occitanie." },
  { icon: Award, title: "1557+ installations réalisées", desc: "Une expertise terrain prouvée par nos chantiers." },
  { icon: Users, title: "Équipe interne, zéro sous-traitance", desc: "Nos techniciens sont salariés, formés et expérimentés." },
  { icon: Wrench, title: "Garantie décennale incluse", desc: "Votre installation est protégée pendant 10 ans minimum." },
  { icon: Smartphone, title: "Suivi production via app", desc: "Visualisez votre production et vos économies en temps réel." },
];

const WhyAHC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="bg-background py-24" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="scroll-fade-up text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            Pourquoi choisir <span className="gradient-text">Amélioration Habitat Conseil</span> ?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Un installateur local, certifié et engagé à vos côtés sur le long terme.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="scroll-fade-up rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <r.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAHC;