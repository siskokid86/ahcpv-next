import type { Metadata } from "next";
import BilanSolaire from "@/components/pages/BilanSolaire";

export const metadata: Metadata = {
  title: "Panneaux Solaires Occitanie | Bilan Solaire Gratuit - AHC",
  description: "Bilan Solaire Personnalisé gratuit par Amélioration Habitat Conseil. Méthode SOLAR en 5 étapes, garantie résultat 12 mois, 11 experts RGE internes, zéro sous-traitance.",
  alternates: { canonical: "https://amelioration-habitat-conseil.fr/bilan-solaire" },
};

export default function Page() {
  return <BilanSolaire />;
}
