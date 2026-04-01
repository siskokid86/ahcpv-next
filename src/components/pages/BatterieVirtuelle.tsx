"use client";

import { lazy, Suspense } from "react";
import HeaderV2 from "@/components/v2/HeaderV2";
import TopBannerV2 from "@/components/v2/TopBannerV2";
import HeroBatterieVirtuelle from "@/components/v2/HeroBatterieVirtuelle";
import ExplainerBV from "@/components/v2/ExplainerBV";
import FAQBatterieVirtuelle from "@/components/v2/FAQBatterieVirtuelle";
import StickyBanner from "@/components/v2/StickyBanner";

const ComparisonV2 = lazy(() => import("@/components/v2/ComparisonV2"));
const OfferV2 = lazy(() => import("@/components/v2/OfferV2"));
const TrustV2 = lazy(() => import("@/components/v2/TrustV2"));
const CompactStats = lazy(() => import("@/components/v2/CompactStats"));
const TestimonialsV2 = lazy(() => import("@/components/v2/TestimonialsV2"));
const CTAV2 = lazy(() => import("@/components/v2/CTAV2"));
const FooterV2 = lazy(() => import("@/components/v2/FooterV2"));

const BatterieVirtuelle = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyBanner />
      <HeaderV2 />
      <TopBannerV2 />
      <main>
        <HeroBatterieVirtuelle />
        <ExplainerBV />
        {/* FAQ pre-rendered for SEO */}
        <FAQBatterieVirtuelle />
        <Suspense fallback={null}>
          <ComparisonV2 />
          <OfferV2 />
          <TrustV2 />
          <div className="container mx-auto px-6 py-6">
            <CompactStats />
          </div>
          <TestimonialsV2 />
          <CTAV2 ctaText="Estimer mes économies" microcopy="Batterie virtuelle incluse | Sans engagement" />
        </Suspense>
      </main>
      <FooterV2 />
    </div>
  );
};

export default BatterieVirtuelle;
