"use client";

import SolarNavbarB from "@/components/solar/SolarNavbarB";
import SolarHeroB from "@/components/solar/SolarHeroB";
import SolarProblem from "@/components/solar/SolarProblem";
import SolarMethod from "@/components/solar/SolarMethod";
import SolarBilan from "@/components/solar/SolarBilan";
import SolarEconomies from "@/components/solar/SolarEconomies";
import SolarTestimonialsB from "@/components/solar/SolarTestimonialsB";
import SolarGuarantee from "@/components/solar/SolarGuarantee";
import SolarComparison from "@/components/solar/SolarComparison";
import SolarFormB from "@/components/solar/SolarFormB";
import SolarReassurance from "@/components/solar/SolarReassurance";
import SolarFooterB from "@/components/solar/SolarFooterB";
import SolarStickyCTA from "@/components/solar/SolarStickyCTA";

const BilanSolaire = () => {
  return (
    <div className="scroll-smooth pb-20 md:pb-0" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />
      <SolarNavbarB />
      <main>
        <SolarHeroB />
        <SolarProblem />
        <SolarMethod />
        <SolarBilan />
        <SolarEconomies />
        <SolarTestimonialsB />
        <SolarGuarantee />
        <SolarComparison />
        <SolarFormB />
        <SolarReassurance />
      </main>
      <SolarFooterB />
      <SolarStickyCTA />
    </div>
  );
};

export default BilanSolaire;
