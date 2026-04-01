import type { Metadata } from "next";
import PrixPanneauSolaire from "@/components/pages/PrixPanneauSolaire";

export const metadata: Metadata = {
  title: "Prix Panneau Solaire | Amélioration Habitat Conseil",
  description: "Découvrez nos tarifs pour l'installation de panneaux solaires en Occitanie. Devis gratuit et personnalisé.",
  alternates: { canonical: "https://amelioration-habitat-conseil.fr/prix-panneau-solaire" },
};

export default function Page() {
  return <PrixPanneauSolaire />;
}
