"use client";

import { XCircle, CheckCircle, Zap, Clock, Battery, Smartphone, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLeadForm } from "@/components/lead/LeadFormContext";

const ComparisonV2 = () => {
  const sectionRef = useScrollAnimation();
  const { openLeadForm } = useLeadForm();

  return (
    <section className="bg-muted py-24" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="scroll-fade-up text-center">
          <h2 className="mb-4 text-3xl text-foreground md:text-4xl">
            Batterie physique, virtuelle ou revente ?
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-muted-foreground">
            Voici un comparatif clair pour comprendre les différences et choisir la solution la plus rentable.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Sans batterie */}
          <div className="scroll-fade-up rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-[1.02]">
            <h3 className="mb-6 text-center text-2xl text-foreground">Sans batterie</h3>
            <ul className="space-y-4">
              {[
                { icon: XCircle, color: "text-destructive", text: "Revente à EDF ~0,04 €/kWh" },
                { icon: XCircle, color: "text-destructive", text: "Jusqu'à 60% de production perdue" },
                { icon: Zap, color: "text-warning", text: "Consommation uniquement le jour" },
                { icon: Clock, color: "text-muted-foreground", text: "Rentabilité plus lente" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <item.icon className={`mt-0.5 h-5 w-5 shrink-0 ${item.color}`} />
                  <span className="text-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Batterie physique */}
          <div className="scroll-fade-up rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-[1.02]">
            <h3 className="mb-6 text-center text-2xl text-foreground">Batterie physique</h3>
            <ul className="space-y-4">
              {[
                { icon: CheckCircle, color: "text-success", text: "Stockage direct chez vous" },
                { icon: CheckCircle, color: "text-success", text: "Utilisation le soir et la nuit" },
                { icon: Zap, color: "text-primary", text: "Autonomie locale renforcée" },
                { icon: Battery, color: "text-foreground", text: "Capacité 6,6 kWh à 20 kWh" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <item.icon className={`mt-0.5 h-5 w-5 shrink-0 ${item.color}`} />
                  <span className="text-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Batterie virtuelle – recommended */}
          <div className="scroll-fade-up relative rounded-2xl border-2 border-primary bg-card p-8 shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-5 py-1 text-xs font-bold text-primary-foreground">
              <Star className="mr-1 inline h-3 w-3" />
              Recommandé
            </div>
            <h3 className="mb-6 text-center text-2xl text-foreground">Batterie virtuelle</h3>
            <ul className="space-y-4">
              {[
                { icon: CheckCircle, color: "text-success", text: "Capacité illimitée" },
                { icon: CheckCircle, color: "text-success", text: "Surplus valorisé automatiquement" },
                { icon: CheckCircle, color: "text-success", text: "100% de la production utilisée" },
                { icon: Smartphone, color: "text-primary", text: "Suivi via application mobile" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <item.icon className={`mt-0.5 h-5 w-5 shrink-0 ${item.color}`} />
                  <span className="text-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="scroll-fade-up mt-14 text-center">
          <button
            onClick={() => openLeadForm()}
            className="cta-pulse inline-block rounded-xl bg-primary px-10 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-primary)] transition-all hover:opacity-90"
          >
            Obtenir mon estimation gratuite
          </button>
          <p className="mt-3 text-sm text-muted-foreground">Service gratuit | Sans engagement</p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonV2;