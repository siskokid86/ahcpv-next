"use client";

const SolarFooter = () => (
  <footer className="bg-[#1B2A4A] py-12">
    <div className="mx-auto max-w-[1120px] px-5 md:px-10">
      <div className="flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
        <span className="text-base font-bold text-white">Amélioration Habitat Conseil</span>
        <span className="text-sm text-white/70">19 avenue de Toulouse, 31320 Castanet-Tolosan</span>
        <a href="tel:0448060443" className="text-sm text-white transition hover:text-[#F5A623]">04 48 06 04 43</a>
        <span className="text-sm text-white/70">amelioration-habitat-conseil.fr</span>
      </div>
      <hr className="my-6 border-white/10" />
      <p className="text-center text-[13px] text-white/50">
        20 ans d'expérience — 1 557 installations en Occitanie
      </p>
    </div>
  </footer>
);

export default SolarFooter;