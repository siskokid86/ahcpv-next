"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const packs = [
  {
    name: "Pack 3 kWc",
    power: "3 kWc - 6 à 8 panneaux",
    specs: ["Production : ~3 500 kWh/an", "Économies : ~800€/an", "Surface toiture : ~16 m²"],
    price: "5 990€",
    priceLabel: "À partir de",
    recommended: false,
  },
  {
    name: "Pack 6 kWc",
    power: "6 kWc - 12 à 16 panneaux",
    specs: ["Production : ~7 000 kWh/an", "Économies : ~1 500€/an", "Surface toiture : ~32 m²"],
    price: "10 290€",
    priceLabel: "À partir de",
    recommended: true,
  },
  {
    name: "Pack 9 kWc",
    power: "9 kWc - 18 à 24 panneaux",
    specs: ["Production : ~10 500 kWh/an", "Économies : ~2 200€/an", "Surface toiture : ~48 m²"],
    price: "14 490€",
    priceLabel: "À partir de",
    recommended: false,
  },
];

const PricingPacksPV = () => {
  const sectionRef = useScrollAnimation();
  const router = useRouter();

  return (
    <section ref={sectionRef} className="bg-background py-20">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="scroll-fade-up mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
            Nos tarifs 2026
          </span>
          <h2 className="text-3xl text-foreground md:text-4xl">
            Nos tarifs panneaux solaires{" "}
            <span className="gradient-text">2026</span>*
          </h2>
        </div>

        <div className="scroll-fade-up grid gap-6 md:grid-cols-3">
          {packs.map((pack) => (
            <div
              key={pack.name}
              className={`relative overflow-hidden rounded-2xl border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-lg ${
                pack.recommended ? "border-primary ring-2 ring-primary/20" : "border-border"
              }`}
            >
              {pack.recommended && (
                <span className="absolute -top-0 left-0 right-0 bg-primary py-1.5 text-center text-xs font-semibold text-primary-foreground">
                  Recommandé
                </span>
              )}

              <div className={`p-8 ${pack.recommended ? "pt-12" : ""}`}>
                <h3 className="mb-1 text-xl font-bold text-foreground">{pack.name}</h3>
                <p className="mb-4 text-sm font-semibold text-primary">{pack.power}</p>

                <ul className="mb-6 space-y-2">
                  {pack.specs.map((spec) => (
                    <li key={spec} className="text-sm text-muted-foreground">• {spec}</li>
                  ))}
                </ul>

                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground">{pack.priceLabel}</p>
                  <p className="text-3xl font-bold text-primary">{pack.price}</p>
                  <p className="text-xs text-muted-foreground">TTC pose incluse, aides déduites</p>
                  <p className="mt-1 text-xs italic text-muted-foreground">
                    *voir disclaimer. Prix indiqué à titre purement informatif
                  </p>
                </div>

                <button
                  onClick={() => router.push("/estimation")}
                  className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3 font-semibold transition-all ${
                    pack.recommended
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "border border-border bg-background text-foreground hover:bg-muted"
                  }`}
                >
                  Obtenir mon prix exact
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pourquoi ces prix */}
        <div className="scroll-fade-up mt-10 mx-auto max-w-3xl rounded-xl border border-border bg-card px-8 py-6 shadow-sm">
          <h3 className="mb-2 text-lg font-bold text-foreground">Pourquoi ces prix ?</h3>
          <p className="text-sm text-muted-foreground">
            Nos prix incluent tout : panneaux DualSun français, micro-onduleurs, pose par notre équipe interne, démarches administratives, batterie virtuelle et garantie décennale. Pas de frais cachés, pas de mauvaises surprises.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPacksPV;