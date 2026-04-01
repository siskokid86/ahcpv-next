"use client";

import { CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLeadForm } from "@/components/lead/LeadFormContext";

const benefits = [
  "Etude technique personnalisée",
  "Dossier & démarches administratives gérées",
  "Pose en 1 à 2 jours, réalisée par des installateurs certifiés",
  "Aucune avance – Options de financement disponibles",
  "Suivi de votre production & stockage virtuel via app mobile",
];

const BenefitsV2 = () => {
  const sectionRef = useScrollAnimation();
  const { openLeadForm } = useLeadForm();

  return (
    <section className="bg-gradient-to-br from-section-dark to-primary py-24" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="scroll-fade-up text-center">
          <h2 className="mb-12 text-3xl text-section-dark-foreground md:text-4xl">
            Produisez, stockez, consommez
          </h2>
        </div>

        <div className="mx-auto max-w-xl space-y-5">
          {benefits.map((b) => (
            <div key={b} className="scroll-fade-up flex items-start gap-4 rounded-2xl border border-section-dark-foreground/10 bg-section-dark-foreground/5 p-5 backdrop-blur-sm">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="font-semibold text-section-dark-foreground">{b}</span>
            </div>
          ))}
        </div>

        <div className="scroll-fade-up mt-14 text-center">
          <button
            onClick={() => openLeadForm()}
            className="cta-pulse inline-block rounded-xl bg-accent px-10 py-4 font-semibold text-accent-foreground shadow-xl transition-all hover:opacity-90"
          >
            Obtenir mon estimation gratuite
          </button>
          <p className="mt-3 text-sm text-section-dark-foreground/60">Service gratuit | Sans engagement</p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsV2;