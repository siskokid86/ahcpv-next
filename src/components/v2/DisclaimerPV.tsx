"use client";

import { AlertTriangle, Info } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const DisclaimerPV = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="bg-background py-16">
      <div className="container mx-auto max-w-3xl px-6">
        <div className="scroll-fade-up mb-6 rounded-xl border-l-4 border-destructive bg-destructive/5 p-5">
          <div className="mb-2 flex items-center gap-2 text-lg font-bold text-destructive">
            <AlertTriangle className="h-5 w-5" />
            Absence de garantie d'obtention
          </div>
          <p className="text-sm text-muted-foreground">
            Nous tenons à informer nos utilisateurs que l'obtention des primes n'est pas garantie. L'approbation des demandes est à la discrétion des organismes gestionnaires et dépend de la disponibilité des fonds. Nous vous recommandons de consulter les sites officiels et de soumettre des demandes bien documentées pour optimiser vos chances d'approbation.
          </p>
        </div>

        <div className="scroll-fade-up rounded-xl border-l-4 border-primary bg-primary/5 p-5">
          <div className="mb-2 flex items-center gap-2 text-lg font-bold text-primary">
            <Info className="h-5 w-5" />
            Plateforme indépendante
          </div>
          <p className="text-sm text-muted-foreground">
            Veuillez noter qu'Amélioration Habitat Conseil est une plateforme indépendante et n'est en aucun cas affiliée ou approuvée par des organismes gouvernementaux. Les informations fournies visent à orienter et informer les utilisateurs, mais ne doivent pas être interprétées comme des annonces ou approbations gouvernementales officielles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerPV;