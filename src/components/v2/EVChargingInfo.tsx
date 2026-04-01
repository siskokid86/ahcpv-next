"use client";

import { Car, Route, Gauge, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLeadForm } from "@/components/lead/LeadFormContext";

const profiles = [
  {
    label: "Petit rouleur",
    km: "~10 000 km/an",
    icon: Car,
    power: "3 kWc recommandés",
    panels: "6 panneaux",
    description: "Trajets domicile-travail courts et usage urbain",
    coverage: "Couvre la majorité de vos recharges à l'année",
    savings: "Économie estimée : ~500€/an de carburant",
    popular: false,
  },
  {
    label: "Rouleur moyen",
    km: "~15 000 km/an",
    icon: Route,
    power: "6 kWc recommandés",
    panels: "12 panneaux",
    description: "Usage quotidien classique, trajets variés",
    coverage: "Recharge solaire quasi complète + alimentation maison",
    savings: "Économie estimée : ~800€/an de carburant",
    popular: true,
  },
  {
    label: "Gros rouleur",
    km: "~25 000 km/an",
    icon: Gauge,
    power: "9 kWc recommandés",
    panels: "18 panneaux",
    description: "Longs trajets réguliers ou usage intensif",
    coverage: "Autonomie maximale pour la voiture et le foyer",
    savings: "Économie estimée : ~1 200€/an de carburant",
    popular: false,
  },
];

const EVChargingInfo = () => {
  const sectionRef = useScrollAnimation();
  const { openLeadForm } = useLeadForm();

  return (
    <section ref={sectionRef} className="bg-muted py-24">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="scroll-fade-up text-center mb-14">
          <h2 className="text-3xl text-foreground md:text-4xl mb-4">
            Combien de panneaux pour{" "}
            <span className="gradient-text">recharger votre voiture</span> ?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            La puissance nécessaire dépend de votre kilométrage annuel. Voici les configurations les plus courantes pour couvrir vos besoins en recharge solaire.
          </p>
        </div>

        <div className="scroll-fade-up grid gap-6 md:grid-cols-3">
          {profiles.map((profile) => {
            const Icon = profile.icon;
            return (
              <div
                key={profile.label}
                className={`relative rounded-2xl border bg-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-lg ${
                  profile.popular
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-border"
                }`}
              >
                {profile.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Le plus courant
                  </span>
                )}

                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{profile.label}</h3>
                    <p className="text-sm text-muted-foreground">{profile.km}</p>
                  </div>
                </div>

                <div className="mb-4 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {profile.power} — {profile.panels}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {profile.description}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {profile.coverage}
                  </div>
                </div>

                <div className="mb-6 rounded-lg bg-success/10 px-4 py-2.5 text-center">
                  <span className="text-sm font-semibold text-success">{profile.savings}</span>
                </div>

                <button
                  onClick={() => openLeadForm()}
                  className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 font-semibold transition-all ${
                    profile.popular
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "border border-border bg-background text-foreground hover:bg-muted"
                  }`}
                >
                  Estimer mon projet
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>

        <p className="scroll-fade-up mt-8 text-center text-sm text-muted-foreground">
          Ces profils sont indicatifs. Votre installation est dimensionnée sur mesure en tenant compte de votre consommation domestique, de votre véhicule et de l'ensoleillement de votre région.
        </p>
      </div>
    </section>
  );
};

export default EVChargingInfo;