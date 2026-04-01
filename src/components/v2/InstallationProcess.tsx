"use client";

import { Search, FileText, FolderOpen, Wrench, Smartphone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: Search,
    title: "Étude technique gratuite",
    desc: "Visite de votre toit, analyse de l'orientation, vérification des ombrages.",
    reassurance: "Aucun engagement à cette étape",
  },
  {
    icon: FileText,
    title: "Devis personnalisé sous 48h",
    desc: "Estimation détaillée avec les aides déduites, adaptée à votre consommation.",
    reassurance: "Prix tout inclus, aides déduites",
  },
  {
    icon: FolderOpen,
    title: "Démarches administratives",
    desc: "Mairie, Enedis, demande d'aides : nous prenons tout en charge.",
    reassurance: "On s'occupe de tout : mairie, Enedis, aides",
  },
  {
    icon: Wrench,
    title: "Installation en 1 à 2 jours",
    desc: "Par notre équipe interne, sans sous-traitance. Pose soignée et rapide.",
    reassurance: "Par notre équipe interne — zéro sous-traitance",
  },
  {
    icon: Smartphone,
    title: "Mise en service & suivi",
    desc: "Activation de votre installation et suivi de production en temps réel via l'application.",
    reassurance: "Suivi de production via votre application mobile",
  },
];

const InstallationProcess = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="bg-muted/30 py-24" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="scroll-fade-up text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            Comment se passe <span className="gradient-text">l'installation</span> ?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            De l'étude technique à la mise en service, nous nous occupons de tout.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-8">
          {steps.map((step, i) => (
            <div key={step.title} className="scroll-fade-up flex items-start gap-5">
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-[var(--shadow-primary)]">
                <step.icon className="h-6 w-6" />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-card text-xs font-bold text-primary shadow-sm ring-2 ring-background">
                  {i + 1}
                </span>
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
                <p className="mt-1 text-xs font-medium text-primary italic">→ {step.reassurance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstallationProcess;