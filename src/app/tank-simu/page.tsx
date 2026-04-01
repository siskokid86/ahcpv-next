import type { Metadata } from "next";
import TankSimuWrapper from "./TankSimuWrapper";

export const metadata: Metadata = {
  title: "Résultats de votre simulation | Amélioration Habitat Conseil",
};

export default function Page() {
  return <TankSimuWrapper />;
}
