import type { Metadata } from "next";
import PanneauSolaireVoitureElectrique from "@/components/pages/PanneauSolaireVoitureElectrique";

export const metadata: Metadata = {
  title: "Panneaux Solaires + Voiture Électrique | Borne de recharge incluse",
  description:
    "Rechargez votre voiture électrique avec vos panneaux solaires. Borne de recharge incluse. Jusqu'à 1 200€/an d'économies.",
  alternates: { canonical: "https://amelioration-habitat-conseil.fr/panneau-solaire-voiture-electrique" },
};

export default function Page() {
  return <PanneauSolaireVoitureElectrique />;
}
