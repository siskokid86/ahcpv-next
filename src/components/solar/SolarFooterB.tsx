"use client";

const SolarFooterB = () => (
  <footer className="bg-[#1B2A4A] py-12">
    <div className="mx-auto max-w-[1120px] px-5 md:px-10">
      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        {/* Company info */}
        <div>
          <span className="text-base font-bold text-white">Amélioration Habitat Conseil</span>
          <p className="mt-2 text-sm text-white/70">19 avenue de Toulouse, 31320 Castanet-Tolosan</p>
          <a href="tel:0448060443" className="mt-1 block text-sm text-white transition hover:text-[#F5A623]">
            04 48 06 04 43
          </a>
          <span className="mt-1 block text-sm text-white/70">amelioration-habitat-conseil.fr</span>
        </div>

        {/* Internal links for SEO */}
        <nav aria-label="Pages du site">
          <span className="text-sm font-bold text-white">Nos pages</span>
          <ul className="mt-2 flex flex-col gap-1.5">
            {[
              { href: "/", label: "Accueil" },
              { href: "/bilan-solaire", label: "Bilan Solaire" },
              { href: "/methode-solaire-360", label: "Méthode Solaire 360" },
              { href: "/prix-pv", label: "Prix panneaux solaires" },
              { href: "/batterie-virtuelle", label: "Batterie virtuelle" },
              { href: "/estimation", label: "Estimation gratuite" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/60 transition hover:text-[#F5A623]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Certifications */}
        <div>
          <span className="text-sm font-bold text-white">Certifications</span>
          <ul className="mt-2 flex flex-col gap-1.5 text-sm text-white/60">
            <li>RGE QualiPV</li>
            <li>Assurance décennale</li>
            <li>Garantie résultat 12 mois</li>
          </ul>
        </div>

        {/* Zone */}
        <div>
          <span className="text-sm font-bold text-white">Zone d'intervention</span>
          <ul className="mt-2 flex flex-col gap-1.5 text-sm text-white/60">
            <li>Haute-Garonne (31)</li>
            <li>Hérault (34)</li>
            <li>Aude (11)</li>
            <li>Pyrénées-Orientales (66)</li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-white/10" />
      <p className="text-center text-[13px] text-white/50">
        © 2026 Amélioration Habitat Conseil — 20 ans d'expérience, 1 557 installations en Occitanie — Tous droits réservés
      </p>
    </div>
  </footer>
);

export default SolarFooterB;