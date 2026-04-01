"use client";

import HeaderV2 from "@/components/v2/HeaderV2";
import TopBannerV2 from "@/components/v2/TopBannerV2";
import HeroUrbanSolar from "@/components/v2/HeroUrbanSolar";
import OfferV2 from "@/components/v2/OfferV2";
import ComparisonV2 from "@/components/v2/ComparisonV2";
import TrustV2 from "@/components/v2/TrustV2";
import StatsV2 from "@/components/v2/StatsV2";
import SpecialtyV2 from "@/components/v2/SpecialtyV2";
import HowItWorksV2 from "@/components/v2/HowItWorksV2";
import TestimonialsV2 from "@/components/v2/TestimonialsV2";
import FAQUrbanSolar from "@/components/v2/FAQUrbanSolar";
import CTAV2 from "@/components/v2/CTAV2";
import FooterV2 from "@/components/v2/FooterV2";
const batterieSansLogo = "/images/batterie-sans-logo.jpg";
const virtuelSansLogo = "/images/virtuel-sans-logo.jpg";

const InstallateurUrbanSolar = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderV2 />
      <TopBannerV2 />
      <main>
        <HeroUrbanSolar />
        <OfferV2 customBatteryImg={batterieSansLogo} />
        <ComparisonV2 />
        <TrustV2 />
        <StatsV2 />
        <SpecialtyV2 customVirtuelImg={virtuelSansLogo} />
        <HowItWorksV2 />
        <TestimonialsV2 />
        <FAQUrbanSolar />
        <CTAV2 />
      </main>
      <FooterV2 />
    </div>
  );
};

export default InstallateurUrbanSolar;
