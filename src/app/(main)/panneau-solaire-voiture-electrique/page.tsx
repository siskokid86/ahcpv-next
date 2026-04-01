import type { Metadata } from "next";
import PanneauSolaireVoitureElectrique from "@/components/pages/PanneauSolaireVoitureElectrique";

export const metadata: Metadata = {
  title: "Panneau Solaire et Voiture Électrique | Amélioration Habitat Conseil",
  description:
    "Rechargez votre voiture électrique grâce à vos panneaux solaires. 2 ans de batterie virtuelle offerts. Installation en 1-2 jours. Estimation gratuite.",
  alternates: { canonical: "https://amelioration-habitat-conseil.fr/panneau-solaire-voiture-electrique" },
};

export default function Page() {
  return <PanneauSolaireVoitureElectrique />;
}
