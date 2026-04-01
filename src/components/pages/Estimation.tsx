"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import HeaderV2 from "@/components/v2/HeaderV2";
import TestimonialsV2 from "@/components/v2/TestimonialsV2";
import LogoCarouselV2 from "@/components/v2/LogoCarouselV2";
import StatsV2 from "@/components/v2/StatsV2";
import LeadFormSteps from "@/components/lead/LeadFormSteps";

const Estimation = () => {
  const searchParams = useSearchParams();
  const cp = searchParams.get("cp") || "";
  const ville = searchParams.get("ville") || "";

  useEffect(() => {
    if (cp) sessionStorage.setItem("cp", cp);
    if (ville) sessionStorage.setItem("ville", ville);

    if (typeof (window as any).prepopulateIframe === "function") {
      (window as any).prepopulateIframe();
    }
  }, [cp, ville]);

  return (
    <div className="min-h-screen bg-background">
      <HeaderV2 minimal />

      <section className="container mx-auto grid gap-8 px-6 pb-16 pt-6 md:grid-cols-[7fr_3fr]">
        {/* Left -- H1 + Form */}
        <div>
          <h1 className="mb-2 text-center text-3xl font-bold text-foreground md:text-left md:text-4xl">
            Obtenez une <span className="gradient-text">estimation</span>
          </h1>
          <p className="mb-6 text-center text-base text-muted-foreground md:text-left">
            Gratuit et sans engagement
          </p>
          <LeadFormSteps initialPostalCode={cp} mode="page" />
        </div>

        {/* Right -- Certifications */}
        <div className="flex flex-col items-center justify-start gap-6 pt-8">
          <img
            src="/images/certifications.png"
            alt="Certifications RGE QualiPV Garantie Décennale"
            className="w-full max-w-xs"
            loading="lazy"
          />
          {ville && (
            <p className="text-center text-sm text-muted-foreground">
              Projet à <span className="font-semibold text-foreground">{ville}</span>
            </p>
          )}
        </div>
      </section>

      {/* Reuse V2 sections */}
      <TestimonialsV2 />
      <LogoCarouselV2 />
      <StatsV2 />

      {/* Footer */}
      <footer className="border-t border-border px-6 py-6 text-center text-sm text-muted-foreground">
        Amélioration Habitat Conseil -- 9 avenue du général LECLERC 31340 VILLEMUR SUR TARN -- 752 494
        419 R.C.S. Toulouse --{" "}
        <Link href="/mentions-legales" className="text-primary hover:underline">
          Mentions légales
        </Link>{" "}
        --{" "}
        <Link href="/privacy-policy" className="text-primary hover:underline">
          Politique de confidentialité
        </Link>
        .
      </footer>
    </div>
  );
};

export default Estimation;
