"use client";

const stats = [
  { value: "20+", label: "années d'expérience" },
  { value: "1 557", label: "installations réalisées" },
  { value: "11", label: "experts certifiés RGE" },
  { value: "0", label: "sous-traitance" },
];

const S360Stats = () => (
  <section className="bg-[#1a2b4a] py-10">
    <div className="mx-auto grid max-w-[1120px] grid-cols-2 gap-5 px-5 text-center md:grid-cols-4 md:gap-8">
      {stats.map((s) => (
        <div key={s.label}>
          <p className="text-[28px] font-extrabold text-[#f5a623] md:text-4xl">{s.value}</p>
          <p className="mt-1 text-sm text-[#e2e8f0]">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default S360Stats;