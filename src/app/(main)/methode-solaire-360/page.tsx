import type { Metadata } from "next";
import Solaire360 from "@/components/pages/Solaire360";

export const metadata: Metadata = {
  title: "Installation Panneaux Solaires Occitanie | Méthode Solaire 360 - AHC",
  description: "Panneaux solaires à partir de 5 990 € pose incluse aides déduites. 2 ans de batterie virtuelle offerts. 1 557 installations en Occitanie. Estimez vos économies - réponse sous 48h.",
  alternates: { canonical: "https://amelioration-habitat-conseil.fr/methode-solaire-360" },
};

export default function Page() {
  return <Solaire360 />;
}
