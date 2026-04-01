import type { Metadata } from "next";
import IndexV2 from "@/components/pages/IndexV2";

export const metadata: Metadata = {
  title: "Panneaux Solaires Occitanie | Installateur RGE depuis 2006 | AHC",
  description:
    "Installation panneaux solaires en Occitanie par Amélioration Habitat Conseil. 1 557+ installations, équipe de 11 experts RGE. Toit plat, triphasé, autoconsommation. Devis gratuit.",
  alternates: { canonical: "https://amelioration-habitat-conseil.fr/" },
};

export default function Page() {
  return <IndexV2 />;
}
