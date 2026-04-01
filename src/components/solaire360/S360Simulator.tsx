"use client";

const S360Simulator = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="mx-auto max-w-[1120px] px-5 text-center">
      <h2 className="text-2xl font-bold text-[#1a2b4a] md:text-4xl">Combien allez-vous économiser ?</h2>
      <p className="mx-auto mt-4 max-w-[700px] text-lg text-[#4a5568]">
        Chiffres basés sur un pack 6 kWc en Occitanie avec batterie virtuelle MyLight (95% autoconsommation).
      </p>

      <div className="mx-auto mt-8 max-w-[700px] rounded-2xl bg-[#f5f6fa] p-8 md:p-10">
        {/* KPIs */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-16">
          <div className="text-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="2" className="mx-auto"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M16.36 16.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M16.36 7.64l1.42-1.42"/></svg>
            <p className="mt-2 text-[28px] font-bold text-[#1a2b4a]">8 400 kWh</p>
            <p className="text-sm text-[#4a5568]">produits par an</p>
          </div>
          <div className="text-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#38a169" strokeWidth="2" className="mx-auto"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            <p className="mt-2 text-[28px] font-bold text-[#38a169]">95%</p>
            <p className="text-sm text-[#4a5568]">autoconsommation</p>
          </div>
        </div>

        <hr className="my-6 border-[#e2e8f0]" />

        {/* Comparison table */}
        <div className="overflow-x-auto">
          <div className="min-w-[420px]">
            <div className="grid grid-cols-3 gap-2 text-sm font-bold text-[#4a5568]">
              <span>Profil</span><span className="text-center">Facture avant</span><span className="text-center">Facture après</span>
            </div>
            <div className="mt-3 grid grid-cols-3 items-center gap-2 rounded-lg bg-white p-3 text-sm">
              <span className="text-[#2d3748]">Foyer standard (5 500 kWh/an)</span>
              <span className="text-center text-[#4a5568]">~135 €/mois</span>
              <span className="text-center font-bold text-[#38a169]">~25 €/mois</span>
            </div>
            <div className="mt-2 grid grid-cols-3 items-center gap-2 rounded-lg bg-white p-3 text-sm">
              <span className="text-[#2d3748]">Gros consommateur (8 000 kWh/an)</span>
              <span className="text-center text-[#4a5568]">~195 €/mois</span>
              <span className="text-center font-bold text-[#38a169]">~35 €/mois</span>
            </div>
          </div>
        </div>

        {/* ROI block */}
        <div className="mt-6 rounded-xl bg-[#1a2b4a] p-5 text-center text-white">
          <p className="text-base font-bold">Rentabilité en ~7 ans, puis 23 ans de production gratuite</p>
          <p className="mt-1 text-sm text-[#e2e8f0]">Panneaux garantis 30 ans — Tarif EDF en hausse moyenne de 6%/an depuis 2020</p>
        </div>
      </div>
    </div>
  </section>
);

export default S360Simulator;