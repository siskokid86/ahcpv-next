import type { Metadata } from "next";
import { Suspense } from "react";
import Estimation from "@/components/pages/Estimation";

export const metadata: Metadata = {
  title: "Estimez Vos Économies Solaires en 2 Minutes | AHC",
  description:
    "Obtenez votre estimation gratuite en 2 minutes. Panneaux solaires avec batterie virtuelle incluse en Occitanie.",
  alternates: { canonical: "https://amelioration-habitat-conseil.fr/estimation" },
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <Estimation />
    </Suspense>
  );
}
