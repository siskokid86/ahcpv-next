"use client";

import { lazy, Suspense } from "react";
import HeaderV2 from "@/components/v2/HeaderV2";
import TopBannerV2 from "@/components/v2/TopBannerV2";
import HeroV2 from "@/components/v2/HeroV2";
import StickyBanner from "@/components/v2/StickyBanner";
import SchemaMarkup from "@/components/v2/SchemaMarkup";
import FAQV2 from "@/components/v2/FAQV2";
import HomepageConfigurations from "@/components/v2/HomepageConfigurations";
import HomepageProximity from "@/components/v2/HomepageProximity";
import HomepageRentability from "@/components/v2/HomepageRentability";

const OfferV2 = lazy(() => import("@/components/v2/OfferV2"));
const ComparisonV2 = lazy(() => import("@/components/v2/ComparisonV2"));
const TrustV2 = lazy(() => import("@/components/v2/TrustV2"));
const CompactStats = lazy(() => import("@/components/v2/CompactStats"));
const HowItWorksV2 = lazy(() => import("@/components/v2/HowItWorksV2"));
const ProfileV2 = lazy(() => import("@/components/v2/ProfileV2"));
const BenefitsV2 = lazy(() => import("@/components/v2/BenefitsV2"));
const TestimonialsV2 = lazy(() => import("@/components/v2/TestimonialsV2"));
const CTAV2 = lazy(() => import("@/components/v2/CTAV2"));
const FooterV2 = lazy(() => import("@/components/v2/FooterV2"));

const IndexV2 = () => {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup />
      <StickyBanner />
      <HeaderV2 />
      <TopBannerV2 />
      <main>
        <HeroV2 />
        {/* Pre-rendered sections for SEO */}
        <HomepageConfigurations />
        <HomepageProximity />
        <HomepageRentability />
        <FAQV2 />
        <Suspense fallback={null}>
          <OfferV2 />
          <ComparisonV2 />
          <TrustV2 />
          <div className="container mx-auto px-6 py-6">
            <CompactStats />
          </div>
          <HowItWorksV2 />
          <ProfileV2 />
          <BenefitsV2 />
          <TestimonialsV2 />
          <CTAV2 />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <FooterV2 />
      </Suspense>
    </div>
  );
};

export default IndexV2;
