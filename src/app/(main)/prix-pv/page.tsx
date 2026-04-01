import type { Metadata } from "next";
import PrixPV from "@/components/pages/PrixPV";

export const metadata: Metadata = {
  title: "Prix Panneaux Solaires 2026 : Tarifs dès 5 990€ Pose Incluse | AHC",
  description:
    "Prix panneaux solaires : 3 kWc dès 5 990€, 6 kWc dès 10 290€, 9 kWc dès 14 490€. Pose incluse, aides déduites. Devis gratuit en 2 min.",
  alternates: { canonical: "https://amelioration-habitat-conseil.fr/prix-pv" },
};

export default function Page() {
  return <PrixPV />;
}
