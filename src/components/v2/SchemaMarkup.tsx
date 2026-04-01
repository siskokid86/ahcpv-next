"use client";

import { useEffect } from "react";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Amélioration Habitat Conseil",
  alternateName: "AHC",
  description: "Installateur de panneaux solaires en Occitanie depuis 2006",
  telephone: "+33448060443",
  url: "https://amelioration-habitat-conseil.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9 avenue du général Leclerc",
    addressLocality: "Villemur-sur-Tarn",
    postalCode: "31340",
    addressRegion: "Occitanie",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.87,
    longitude: 1.5,
  },
  priceRange: "5990-14490 EUR",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "856",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Installation panneaux solaires",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Pack 3 kWc",
        price: "5990",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "Pack 6 kWc",
        price: "10290",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "Pack 9 kWc",
        price: "14490",
        priceCurrency: "EUR",
      },
    ],
  },
};

const SchemaMarkup = () => {
  useEffect(() => {
    const id = "ahc-schema-jsonld";
    if (document.getElementById(id)) return;
    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(SCHEMA);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return null;
};

export default SchemaMarkup;