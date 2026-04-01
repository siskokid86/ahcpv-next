"use client";

import { lazy, Suspense } from "react";
import HeaderV2 from "@/components/v2/HeaderV2";
import HeroPrixPV from "@/components/v2/HeroPrixPV";
import PricingPacksPV from "@/components/v2/PricingPacksPV";
import FAQPrixPV from "@/components/v2/FAQPrixPV";
import StickyBanner from "@/components/v2/StickyBanner";

const IncludedInPrice = lazy(() => import("@/components/v2/IncludedInPrice"));
const OfferV2 = lazy(() => import("@/components/v2/OfferV2"));
const ExperiencePV = lazy(() => import("@/components/v2/ExperiencePV"));
const CompactStats = lazy(() => import("@/components/v2/CompactStats"));
const TestimonialsV2 = lazy(() => import("@/components/v2/TestimonialsV2"));
const CTAV2 = lazy(() => import("@/components/v2/CTAV2"));
const FooterV2 = lazy(() => import("@/components/v2/FooterV2"));

/* Section aides -- pre-rendu pour SEO */
const AidesSolaires = () => (
  <section className="bg-muted/30 py-20">
    <div className="container mx-auto max-w-3xl px-6">
      <h2 className="mb-6 text-center text-3xl text-foreground md:text-4xl">
        Les aides pour vos <span className="gradient-text">panneaux solaires</span>
      </h2>
      <p className="mb-8 text-center text-muted-foreground">
        Profitez des dispositifs en vigueur pour réduire le coût de votre installation.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { title: "Prime autoconsommation", desc: "Versée par l'État sur 5 ans. Jusqu'à 2 205€ selon la puissance installée." },
          { title: "TVA réduite", desc: "Taux de TVA à 10 % pour les installations ≤ 3 kWc en résidentiel." },
          { title: "Aides locales", desc: "Certaines collectivités en Occitanie proposent des aides complémentaires." },
        ].map((aide) => (
          <div key={aide.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-foreground">{aide.title}</h3>
            <p className="text-sm text-muted-foreground">{aide.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PrixPV = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyBanner />
      <HeaderV2 minimal />
      <main>
        <HeroPrixPV />
        <PricingPacksPV />
        {/* Pre-rendered for SEO */}
        <AidesSolaires />
        <FAQPrixPV />
        <Suspense fallback={null}>
          <IncludedInPrice />
          <OfferV2 />
          <ExperiencePV />
          <div className="container mx-auto px-6 py-6">
            <CompactStats />
          </div>
          <TestimonialsV2 />
          <CTAV2 ctaText="Obtenir mon estimation gratuite" microcopy="Service gratuit | Prix tout inclus | Aides déduites" />
        </Suspense>
      </main>
      <FooterV2 />
    </div>
  );
};

export default PrixPV;
