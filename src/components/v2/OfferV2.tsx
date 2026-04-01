"use client";

import { Clock, Battery, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLeadForm } from "@/components/lead/LeadFormContext";

const getPromoEndDate = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 3, 0).toLocaleDateString("fr-FR");
};

const OfferV2 = ({ customBatteryImg, invertOrder }: { customBatteryImg?: string; invertOrder?: boolean }) => {
  const sectionRef = useScrollAnimation();
  const { openLeadForm } = useLeadForm();
  const promoEnd = getPromoEndDate();

  return (
    <section id="offre" className="bg-background py-24" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="scroll-fade-up relative mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary px-8 py-14 text-center text-primary-foreground">
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium backdrop-blur-sm">
            <Clock className="h-3.5 w-3.5" />
            Offre limitée — jusqu'au {promoEnd}
          </div>
          <h2 className="mb-4 text-3xl md:text-4xl">
            2 ans de batterie virtuelle offerts*
          </h2>
          <p className="mx-auto max-w-2xl text-primary-foreground/75">
            Livré et installé sans supplément, en plus de votre installation solaire. Réservé aux 5 premiers clients à partir du {new Date(new Date().getFullYear(), new Date().getMonth(), 1).toLocaleDateString("fr-FR")}.
          </p>
        </div>

        {/* Single card centered */}
        <div className="mx-auto max-w-lg">
          <div className="scroll-fade-up group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <div className="flex items-center justify-center bg-muted p-10">
              <img
                src={customBatteryImg || "/images/batterie-panneau-solaire-offerte.webp"}
                alt="Batterie virtuelle MyLight offerte avec installation solaire"
                className="max-h-56 rounded-xl object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <Battery className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl text-foreground">Batterie virtuelle MyLight</h3>
              <p className="mb-6 text-muted-foreground">2 ans offerts</p>
              <div className="mb-8 space-y-4">
                {[
                  "Stockez votre surplus virtuellement",
                  "Restituez-le quand vous en avez besoin",
                  "Zéro revente à perte (0,04 cts/kWh)",
                  "Compatible avec toutes nos installations",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground">{f}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => openLeadForm()}
                className="mt-auto block w-full rounded-xl bg-primary py-4 text-center font-semibold text-primary-foreground shadow-[var(--shadow-primary)] transition-all hover:opacity-90"
              >
                En profiter maintenant
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferV2;