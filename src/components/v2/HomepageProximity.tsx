"use client";

import { MapPin } from "lucide-react";

const departments = [
  "Haute-Garonne (31)",
  "Hérault (34)",
  "Aude (11)",
  "Pyrénées-Orientales (66)",
  "Tarn (81)",
  "Tarn-et-Garonne (82)",
  "Ariège (09)",
  "Gers (32)",
];

const HomepageProximity = () => (
  <section className="bg-background py-20">
    <div className="container mx-auto max-w-4xl px-6">
      <h2 className="mb-4 text-center text-3xl text-foreground md:text-4xl">
        Votre installateur solaire en <span className="gradient-text">Occitanie</span>
      </h2>
      <p className="mx-auto mb-10 max-w-xl text-center text-muted-foreground">
        Depuis 2006, notre équipe locale de 11 techniciens certifiés intervient dans toute la région Occitanie.
      </p>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {departments.map((dept) => (
          <div key={dept} className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3">
            <MapPin className="h-4 w-4 shrink-0 text-primary" />
            <span className="text-sm font-medium text-foreground">{dept}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {[
          { value: "1 557+", label: "installations réalisées" },
          { value: "11", label: "techniciens certifiés" },
          { value: "Depuis 2006", label: "en Occitanie" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-bold text-primary">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomepageProximity;