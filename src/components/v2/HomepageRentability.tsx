"use client";

import { TrendingUp, Clock, Leaf } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "800 à 2 200€/an",
    label: "d'économies estimées",
    desc: "Selon la puissance installée (3 à 9 kWc) et votre consommation.",
  },
  {
    icon: Clock,
    value: "6 à 9 ans",
    label: "de retour sur investissement",
    desc: "Avec l'augmentation du prix de l'électricité, vos économies se renforcent chaque année.",
  },
  {
    icon: Leaf,
    value: "Jusqu'à 95%",
    label: "d'autoconsommation",
    desc: "Grâce à la batterie virtuelle, consommez votre propre énergie même la nuit.",
  },
];

const HomepageRentability = () => (
  <section className="bg-muted/30 py-20">
    <div className="container mx-auto max-w-5xl px-6">
      <h2 className="mb-4 text-center text-3xl text-foreground md:text-4xl">
        La rentabilité de vos <span className="gradient-text">panneaux solaires</span>
      </h2>
      <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
        Un investissement rentable dès la première année, qui prend de la valeur avec le temps.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <p className="mb-1 text-2xl font-bold text-primary">{s.value}</p>
            <p className="mb-3 text-sm font-semibold text-foreground">{s.label}</p>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomepageRentability;