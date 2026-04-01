import type { Metadata } from "next";
import PrivacyPolicy from "@/components/pages/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Amélioration Habitat Conseil",
  description: "Politique de confidentialité et protection des données personnelles.",
};

export default function Page() {
  return <PrivacyPolicy />;
}
