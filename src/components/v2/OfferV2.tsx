"use client";

import { Clock, Battery, Zap, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLeadForm } from "@/components/lead/LeadFormContext";

const getPromoEndDate = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 3, 0).toLocaleDateString("fr-FR");
};

const OfferV2 = ({ customBatteryImg, invertOrder }: { customBatteryImg?: string; invertOrder?: boolean }) => {
  const sectionRef = useScrollAnimation();
  const { openLeadForm } = useLeadForm();
  const promoEnd = getPromoEndDate();

  const cards = [
    {
      img: customBatteryImg || "/images/batterie-panneau-solaire-offerte.webp",
      icon: Battery,
      title: "Batterie de stockage",
      subtitle: "Physique ou virtuelle",
      features: [
        "Stockez le surplus non consommé",
        "Pas de revente à 0,04cts/kWh",
        "Batterie 6,6kWh ou Urban Solar",
      ],
    },
    {
      img: "/images/borne-de-recharge-kdo.jpg",
      icon: Zap,
      title: "Borne de recharge",
      subtitle: "12kW pour véhicule électrique",
      features: [
        "Recharge rapide à la maison",
        "Câble type 2 inclus",
        "Puissance max 50A • 12 kW",
      ],
    },
  ];

  const orderedCards = invertOrder ? [...cards].reverse() : cards;

  return (
    <section id="offre" className="bg-background py-24" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="scroll-fade-up relative mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary px-8 py-14 text-center text-primary-foreground">
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium backdrop-blur-sm">
            <Clock className="h-3.5 w-3.5" />
            Offre limitée — jusqu'au {promoEnd}
          </div>
          <h2 className="mb-4 text-3xl md:text-4xl">
            Batterie ou borne de recharge offerte*
          </h2>
          <p className="mx-auto max-w-2xl text-primary-foreground/75">
            Livré et installé sans supplément, en plus de votre installation solaire. Batterie physique réservée aux 5 premiers clients à partir du {new Date(new Date().getFullYear(), new Date().getMonth(), 1).toLocaleDateString("fr-FR")}.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2">
          {orderedCards.map((card) => (
            <div
              key={card.title}
              className="scroll-fade-up group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="flex items-center justify-center bg-muted p-10">
                <img
                  src={card.img}
                  alt={card.title === "Batterie de stockage" ? "Batterie de stockage panneau solaire offerte" : "Borne de recharge voiture électrique offerte"}
                  className="max-h-56 rounded-xl object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <card.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl text-foreground">{card.title}</h3>
                <p className="mb-6 text-muted-foreground">{card.subtitle}</p>
                <div className="mb-8 space-y-4">
                  {card.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-foreground">{f}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => openLeadForm()}
                  className="mt-auto block w-full rounded-xl bg-primary py-4 text-center font-semibold text-primary-foreground shadow-[var(--shadow-primary)] transition-all hover:opacity-90"
                >
                  Je choisis cette option
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferV2;