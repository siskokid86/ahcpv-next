import type { Metadata } from "next";
import InstallationPanneauxSolaires from "@/components/pages/InstallationPanneauxSolaires";

export const metadata: Metadata = {
  title: "Installation Panneaux Solaires 3kWc, 6kWc, 9kWc | Amélioration Habitat Conseil",
  description: "Installation panneaux solaires de 3 à 9 kWc par nos 11 experts certifiés RGE en Occitanie. Pose en 1-2 jours, garantie 30 ans, batterie offerte. Devis gratuit.",
  alternates: { canonical: "https://amelioration-habitat-conseil.fr/installation-panneaux-solaires-3kwc-6kwc-9kwc-pour-maison-individuelle" },
};

export default function Page() {
  return <InstallationPanneauxSolaires />;
}
