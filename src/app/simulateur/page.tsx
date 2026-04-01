import type { Metadata } from "next";
import Simulateur from "@/components/pages/Simulateur";

export const metadata: Metadata = {
  title: "Simulateur Solaire Gratuit | Estimez vos Économies - AHC",
  description: "Simulez gratuitement vos économies solaires. Estimation personnalisée en quelques minutes.",
  alternates: { canonical: "https://amelioration-habitat-conseil.fr/simulateur" },
};

export default function Page() {
  return <Simulateur />;
}
