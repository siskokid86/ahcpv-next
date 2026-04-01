"use client";

import { FileText, Calculator, CalendarDays, Power } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLeadForm } from "@/components/lead/LeadFormContext";

const steps = [
  { icon: FileText, title: "Faites votre demande en ligne", desc: "Remplissez notre formulaire en 2 min chrono" },
  { icon: Calculator, title: "Recevez votre estimation", desc: "Recevez notre meilleure offre accompagnée d'une estimation de vos économies potentielles." },
  { icon: CalendarDays, title: "Obtenez votre planning", desc: "Notre équipe vous propose la solution la plus intéressante et établit un planning de mise en place." },
  { icon: Power, title: "Mise en service", desc: "Votre installation est prête. Nos techniciens vous expliquent comment maximiser vos économies." },
];

const HowItWorksV2 = () => {
  const sectionRef = useScrollAnimation();
  const { openLeadForm } = useLeadForm();

  return (
    <section id="howto" className="bg-background py-24" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="scroll-fade-up text-center">
          <h2 className="mb-4 text-3xl text-foreground md:text-4xl">
            Amélioration Habitat Conseil
            <br />
            <span className="gradient-text">s'occupe de tout</span>
          </h2>
          <p className="mx-auto mb-16 max-w-xl text-muted-foreground">
            Chez nous, tout est pensé pour vous simplifier la vie
          </p>
        </div>

        <div className="grid gap-14 md:grid-cols-2">
          <div className="space-y-10">
            {steps.map((step, i) => (
              <div key={step.title} className="scroll-fade-up flex items-start gap-5">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-[var(--shadow-primary)]">
                  <step.icon className="h-6 w-6" />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-card text-xs font-bold text-primary shadow-sm ring-2 ring-background">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-bold text-foreground">{step.title}</h4>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}

            <div className="scroll-fade-up pt-4">
              <button
                onClick={() => openLeadForm()}
                className="cta-pulse inline-block rounded-xl bg-primary px-10 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-primary)] transition-all hover:opacity-90"
              >
                Devis en ligne
              </button>
              <p className="mt-3 text-sm text-muted-foreground">Service gratuit | Sans engagement</p>
            </div>
          </div>

          <div className="scroll-fade-up flex items-center justify-center">
            <img
              src="/images/simulation-ahc.webp"
              alt="Simulation estimation photovoltaïque AHC"
              className="max-h-[520px] rounded-2xl object-contain shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksV2;