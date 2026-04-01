"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLeadForm } from "@/components/lead/LeadFormContext";

interface CTAV2Props {
  ctaText?: string;
  microcopy?: string;
}

const CTAV2 = ({ ctaText = "Estimer mon projet gratuitement", microcopy = "2 minutes | Sans engagement | Résultat immédiat" }: CTAV2Props) => {
  const sectionRef = useScrollAnimation();
  const { openLeadForm } = useLeadForm();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-section-dark via-primary to-secondary py-28" ref={sectionRef}>
      <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative container mx-auto max-w-2xl px-6 text-center">
        <div className="scroll-fade-up">
          <h2 className="mb-6 text-3xl text-primary-foreground md:text-5xl">
            Vos panneaux solaires
            <br />
            vous attendent
          </h2>
          <p className="mb-10 text-lg text-primary-foreground/70">
            Les tarifs de revente baissent. Vos économies, elles, peuvent commencer maintenant.
          </p>
          <button
            onClick={() => openLeadForm()}
            className="cta-pulse inline-block rounded-xl bg-card px-10 py-5 text-lg font-semibold text-primary shadow-2xl transition-all hover:scale-105"
          >
            {ctaText}
          </button>
          <p className="mt-4 text-sm text-primary-foreground/50">
            {microcopy}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTAV2;