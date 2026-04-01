"use client";

import { useEffect } from "react";
import S360Navbar from "@/components/solaire360/S360Navbar";
import S360Hero from "@/components/solaire360/S360Hero";
import S360Stats from "@/components/solaire360/S360Stats";
import S360Problem from "@/components/solaire360/S360Problem";
import S360Method from "@/components/solaire360/S360Method";
import S360Guarantee from "@/components/solaire360/S360Guarantee";
import S360Pricing from "@/components/solaire360/S360Pricing";
import S360Simulator from "@/components/solaire360/S360Simulator";
import S360Testimonials from "@/components/solaire360/S360Testimonials";
import S360Equipment from "@/components/solaire360/S360Equipment";
import S360WhyAHC from "@/components/solaire360/S360WhyAHC";
import S360Form from "@/components/solaire360/S360Form";
import S360Footer from "@/components/solaire360/S360Footer";
import S360StickyCTA from "@/components/solaire360/S360StickyCTA";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Amélioration Habitat Conseil",
  description:
    "Installateur panneaux solaires en Occitanie. Méthode Solaire 360 : diagnostic, pose par équipe interne certifiée RGE, démarches gérées, suivi à vie.",
  url: "https://amelioration-habitat-conseil.fr",
  telephone: "+33448060443",
  address: {
    "@type": "PostalAddress",
    streetAddress: "19 avenue de Toulouse",
    addressLocality: "Castanet-Tolosan",
    postalCode: "31320",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Pyrénées-Orientales" },
    { "@type": "AdministrativeArea", name: "Hérault" },
    { "@type": "AdministrativeArea", name: "Aude" },
    { "@type": "AdministrativeArea", name: "Haute-Garonne" },
  ],
  priceRange: "À partir de 5990 EUR",
};

const Solaire360 = () => {
  useEffect(() => {
    const id = "s360-schema";
    if (!document.getElementById(id)) {
      const script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(SCHEMA);
      document.head.appendChild(script);
    }
    return () => {
      document.getElementById(id)?.remove();
    };
  }, []);

  return (
    <div className="scroll-smooth font-sans pb-20 md:pb-0" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <S360Navbar />
      <S360Hero />
      <S360Stats />
      <S360Problem />
      <S360Method />
      <S360Guarantee />
      <S360Pricing />
      <S360Simulator />
      <S360Testimonials />
      <S360Equipment />
      <S360WhyAHC />
      <S360Form />
      <S360Footer />
      <S360StickyCTA />
    </div>
  );
};

export default Solaire360;
