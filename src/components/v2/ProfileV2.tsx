"use client";

import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const criteria = [
  "Vous êtes propriétaire d'une maison",
  "Vous cherchez à maximiser vos économies (pas à vendre)",
  "Votre toiture est dégagée et accessible",
  "Vous souhaitez gagner en autonomie énergétique",
  "Vous envisagez un projet rentable et durable",
  "Vous êtes prêt à profiter d'aides financières et de primes disponibles",
];

const ProfileV2 = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="bg-muted py-24" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="scroll-fade-up text-center">
          <h2 className="mb-4 text-3xl text-foreground md:text-4xl">
            Est-ce adapté à <span className="gradient-text">votre profil</span> ?
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-muted-foreground">
            Vous cochez les cases ? Prêt à faire jusqu'à 95 % d'autoconsommation ?
          </p>
        </div>

        <div className="mx-auto max-w-lg">
          <p className="scroll-fade-up mb-6 text-center font-semibold text-success">
            ✦ Idéal pour vous si
          </p>
          <div className="space-y-3">
            {criteria.map((c, i) => (
              <div
                key={c}
                className="scroll-fade-up flex items-center justify-between rounded-2xl border border-border bg-card px-6 py-4 shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-[1.02]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-semibold text-foreground">{c}</span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-success/10">
                  <Check className="h-4 w-4 text-success" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileV2;