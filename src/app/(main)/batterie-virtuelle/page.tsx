import type { Metadata } from "next";
import BatterieVirtuelle from "@/components/pages/BatterieVirtuelle";

export const metadata: Metadata = {
  title: "Batterie Virtuelle Solaire | Stockage Sans Batterie | AHC Occitanie",
  description:
    "La batterie virtuelle vous permet de stocker votre surplus solaire sans batterie physique. Zéro revente, zéro perte. Incluse avec nos installations.",
  alternates: { canonical: "https://amelioration-habitat-conseil.fr/batterie-virtuelle" },
};

export default function Page() {
  return <BatterieVirtuelle />;
}
