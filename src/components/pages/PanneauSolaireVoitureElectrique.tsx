"use client";

import { lazy, Suspense } from "react";
import HeaderV2 from "@/components/v2/HeaderV2";
import TopBannerV2 from "@/components/v2/TopBannerV2";
import HeroEV from "@/components/v2/HeroEV";
import EVChargingInfo from "@/components/v2/EVChargingInfo";
import StickyBanner from "@/components/v2/StickyBanner";

const OfferV2 = lazy(() => import("@/components/v2/OfferV2"));
const TrustV2 = lazy(() => import("@/components/v2/TrustV2"));
const CompactStats = lazy(() => import("@/components/v2/CompactStats"));
const TestimonialsV2 = lazy(() => import("@/components/v2/TestimonialsV2"));
const FAQEV = lazy(() => import("@/components/v2/FAQEV"));
const CTAV2 = lazy(() => import("@/components/v2/CTAV2"));
const FooterV2 = lazy(() => import("@/components/v2/FooterV2"));

const PanneauSolaireVoitureElectrique = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyBanner />
      <HeaderV2 />
      <TopBannerV2 />
      <main>
        <HeroEV />
        <EVChargingInfo />
        <Suspense fallback={null}>
          <OfferV2 invertOrder />
          <TrustV2 />
          <div className="container mx-auto px-6 py-6">
            <CompactStats />
          </div>
          <TestimonialsV2 />
          <FAQEV />
          <CTAV2 ctaText="Estimer mon projet solaire + borne" microcopy="Borne de recharge incluse | Sans engagement" />
        </Suspense>
      </main>
      <FooterV2 />
    </div>
  );
};

export default PanneauSolaireVoitureElectrique;
