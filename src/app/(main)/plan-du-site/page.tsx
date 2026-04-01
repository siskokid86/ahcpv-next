import type { Metadata } from "next";
import Sitemap from "@/components/pages/Sitemap";

export const metadata: Metadata = {
  title: "Plan du site | Amélioration Habitat Conseil",
  description: "Plan du site Amélioration Habitat Conseil - toutes nos pages.",
};

export default function Page() {
  return <Sitemap />;
}
