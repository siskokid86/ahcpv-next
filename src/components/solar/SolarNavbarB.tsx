"use client";


const SolarNavbarB = () => (
  <nav className="sticky top-0 z-40 bg-white" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
    <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-5 md:px-10">
      <a href="/" className="flex items-center">
        <img src="/images/logo-ahc.png" alt="Amélioration Habitat Conseil" className="h-10" />
      </a>

      <img
        src="/images/partner-logos.png"
        alt="Partenaire EDF OA - CEE - MaPrimeRénov' - RGE QualiPV"
        className="h-8 md:h-10"
      />
    </div>
  </nav>
);

export default SolarNavbarB;