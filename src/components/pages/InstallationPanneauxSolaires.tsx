"use client";

import { lazy, Suspense } from "react";
import HeaderV2 from "@/components/v2/HeaderV2";
import TopBannerV2 from "@/components/v2/TopBannerV2";
import HeroInstallation from "@/components/v2/HeroInstallation";
import PowerCards from "@/components/v2/PowerCards";
import InstallationProcess from "@/components/v2/InstallationProcess";
import FAQInstallation from "@/components/v2/FAQInstallation";
import StickyBanner from "@/components/v2/StickyBanner";

const OfferV2 = lazy(() => import("@/components/v2/OfferV2"));
const WhyAHC = lazy(() => import("@/components/v2/WhyAHC"));
const CompactStats = lazy(() => import("@/components/v2/CompactStats"));
const TestimonialsV2 = lazy(() => import("@/components/v2/TestimonialsV2"));
const CTAV2 = lazy(() => import("@/components/v2/CTAV2"));
const FooterV2 = lazy(() => import("@/components/v2/FooterV2"));

const InstallationPanneauxSolaires = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyBanner />
      <HeaderV2 />
      <TopBannerV2 />
      <main>
        <HeroInstallation />
        <PowerCards />
        <InstallationProcess />
        {/* FAQ pre-rendered (not lazy) for SEO */}
        <FAQInstallation />
        <Suspense fallback={null}>
          <OfferV2 />
          <WhyAHC />
          <div className="container mx-auto px-6 py-6">
            <CompactStats />
          </div>
          <TestimonialsV2 />
          <CTAV2 ctaText="Estimer mon installation gratuitement" microcopy="1-2 jours de pose | Équipe interne | Garantie décennale" />
        </Suspense>
      </main>
      <FooterV2 />
    </div>
  );
};

export default InstallationPanneauxSolaires;
