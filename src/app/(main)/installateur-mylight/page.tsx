import type { Metadata } from "next";
import InstallateurMylight from "@/components/pages/InstallateurMylight";

export const metadata: Metadata = {
  title: "Installateur Mylight | Amélioration Habitat Conseil",
  description: "Installateur certifié Mylight en Occitanie. Batterie virtuelle et autoconsommation solaire optimisée.",
  alternates: { canonical: "https://amelioration-habitat-conseil.fr/installateur-mylight" },
};

export default function Page() {
  return <InstallateurMylight />;
}
