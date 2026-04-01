import type { Metadata } from "next";
import InstallateurUrbanSolar from "@/components/pages/InstallateurUrbanSolar";

export const metadata: Metadata = {
  title: "Installateur Urban Solar | Amélioration Habitat Conseil",
  description: "Installateur certifié Urban Solar en Occitanie. Panneaux solaires haut de gamme, pose professionnelle.",
  alternates: { canonical: "https://amelioration-habitat-conseil.fr/installateur-urban-solar" },
};

export default function Page() {
  return <InstallateurUrbanSolar />;
}
