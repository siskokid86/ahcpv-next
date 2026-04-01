import type { Metadata } from "next";
import MentionsLegales from "@/components/pages/MentionsLegales";

export const metadata: Metadata = {
  title: "Mentions Légales | Amélioration Habitat Conseil",
  description: "Mentions légales du site Amélioration Habitat Conseil.",
};

export default function Page() {
  return <MentionsLegales />;
}
