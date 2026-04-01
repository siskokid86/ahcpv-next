"use client";

import { Shield, Check, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useLeadForm } from "@/components/lead/LeadFormContext";

const HeroPrixPV = () => {
  const [city, setCity] = useState("votre région");
  const { openLeadForm } = useLeadForm();

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((d) => { if (d?.city) setCity(d.city); })
      .catch(() => {});
  }, []);

  return (
    <section className="bg-background py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Shield className="h-4 w-4" />
            Installateur certifié disponible à {city}
          </span>

          <h1 className="mb-6 text-3xl font-extrabold leading-tight text-foreground md:text-4xl lg:text-5xl">
            Prix Panneaux Solaires 2026 :{" "}
            <span className="gradient-text">Tarifs Installation Pose Incluse</span>
          </h1>

          <p className="mb-10 text-lg text-muted-foreground">
            Tous nos prix incluent la pose, les démarches administratives et les aides déduites.
          </p>

          <ul className="mb-10 inline-flex flex-col gap-4 text-left">
            {[
              { bold: "Réduisez vos factures", rest: "grâce à l'énergie solaire" },
              { bold: "Profitez des aides de l'État", rest: "pour financer en partie votre installation" },
              { bold: "Installation rapide", rest: "par des experts certifiés RGE QualiPV" },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-warning">
                  <Check className="h-3.5 w-3.5 text-foreground" />
                </div>
                <span className="text-foreground">
                  <strong>{item.bold}</strong> {item.rest}
                </span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => openLeadForm()}
            className="cta-pulse inline-flex items-center gap-3 rounded-xl bg-primary px-10 py-5 text-lg font-bold text-primary-foreground shadow-[var(--shadow-primary)] transition-all hover:opacity-90"
          >
            Obtenir mon devis gratuit
            <ArrowRight className="h-5 w-5" />
          </button>
          <p className="mt-4 text-sm text-muted-foreground">Service gratuit | Sans engagement</p>

          {/* Aperçu prix compact */}
          <div className="mx-auto mt-8 max-w-xl rounded-xl border border-border bg-card px-6 py-4 shadow-sm">
            <p className="text-base font-semibold text-foreground sm:text-lg">
              À partir de <span className="text-primary">5 990€</span> (3 kWc)
              <span className="mx-2 text-muted-foreground">|</span>
              <span className="text-primary">10 290€</span> (6 kWc)
              <span className="mx-2 text-muted-foreground">|</span>
              <span className="text-primary">14 490€</span> (9 kWc)
            </p>
            <p className="mt-1 text-sm text-muted-foreground">TTC pose incluse, aides déduites</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPrixPV;