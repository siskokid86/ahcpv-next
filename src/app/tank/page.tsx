import type { Metadata } from "next";
import TankWrapper from "./TankWrapper";

export const metadata: Metadata = {
  title: "Merci pour votre demande | Amélioration Habitat Conseil",
};

export default function Page() {
  return <TankWrapper />;
}
