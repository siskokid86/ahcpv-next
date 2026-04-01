"use client";

const S360Footer = () => (
  <footer className="bg-[#1a2b4a] py-12 text-white">
    <div className="mx-auto grid max-w-[1120px] gap-10 px-5 md:grid-cols-3">
      <div>
        <p className="text-lg font-bold">AHC — Amélioration Habitat Conseil</p>
        <p className="mt-2 text-sm text-[#e2e8f0]">19 avenue de Toulouse</p>
        <p className="text-sm text-[#e2e8f0]">31320 Castanet-Tolosan</p>
        <a href="tel:0448060443" className="mt-1 block text-sm text-[#e2e8f0] transition hover:text-[#f5a623]">04 48 06 04 43</a>
        <p className="text-sm text-[#e2e8f0]">amelioration-habitat-conseil.fr</p>
      </div>
      <div>
        <p className="text-base font-bold">Certifications</p>
        <ul className="mt-3 space-y-1 text-sm text-[#e2e8f0]">
          <li>RGE QualiPV</li>
          <li>Assurance décennale</li>
          <li>Garantie Production 12 mois</li>
        </ul>
      </div>
      <div>
        <p className="text-base font-bold">Zone d'intervention</p>
        <ul className="mt-3 space-y-1 text-sm text-[#e2e8f0]">
          <li>Pyrénées-Orientales (66)</li>
          <li>Hérault (34)</li>
          <li>Aude (11)</li>
          <li>Haute-Garonne (31)</li>
        </ul>
      </div>
    </div>
    <hr className="mx-auto my-8 max-w-[1120px] border-white/20" />
    <p className="text-center text-[13px] text-[#e2e8f0]">© 2026 Amélioration Habitat Conseil — Tous droits réservés</p>
  </footer>
);

export default S360Footer;