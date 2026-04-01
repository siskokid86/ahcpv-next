"use client";

import Link from "next/link";
import HeaderV2 from "@/components/v2/HeaderV2";
import FooterV2 from "@/components/v2/FooterV2";

const pages = [
  { title: "Accueil", path: "/" },
  { title: "Estimation gratuite", path: "/estimation" },
  { title: "Installation panneaux solaires 3kWc 6kWc 9kWc", path: "/installation-panneaux-solaires-3kwc-6kwc-9kwc-pour-maison-individuelle" },
  { title: "Prix panneau solaire 2026", path: "/prix-panneau-solaire" },
  { title: "Prix PV — Nos packs solaires", path: "/prix-pv" },
  { title: "Batterie virtuelle", path: "/batterie-virtuelle" },
  { title: "Panneau solaire & voiture électrique", path: "/panneau-solaire-voiture-electrique" },
  { title: "Installateur agréé Urban Solar", path: "/installateur-urban-solar" },
  { title: "Installateur agréé Mylight", path: "/installateur-mylight" },
  { title: "Mentions légales", path: "/mentions-legales" },
  { title: "Politique de confidentialité", path: "/privacy-policy" },
];

const Sitemap = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderV2 />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-foreground mb-8">Plan du site</h1>
        <ul className="space-y-4">
          {pages.map((page) => (
            <li key={page.path} className="border-b border-border pb-3">
              <Link href={page.path} className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {page.title}
                </span>
                <span className="text-sm text-muted-foreground font-mono">
                  {page.path}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <FooterV2 />
    </div>
  );
};

export default Sitemap;
