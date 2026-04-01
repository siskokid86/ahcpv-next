"use client";

const items = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a2b4a" strokeWidth="1.5"><rect x="2" y="7" width="20" height="10" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M2 10h20"/></svg>
    ),
    brand: "DualSun",
    category: "Panneaux solaires",
    text: "Fabrication française. Tier 1. Garantie 25-30 ans. Les mêmes panneaux qu'on pose depuis 10 ans — on connaît leur comportement dans le temps.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a2b4a" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 4v16M15 4v16M4 9h16M4 15h16"/></svg>
    ),
    brand: "AP System",
    category: "Micro-onduleurs",
    text: "Un micro-onduleur par panneau. Si un panneau est à l'ombre, les autres continuent de produire à plein régime. Garantie 20-25 ans.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a2b4a" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    ),
    brand: "MyLight",
    category: "Batterie virtuelle",
    text: "95% d'autoconsommation sans batterie physique. L'électricité que vous ne consommez pas est stockée virtuellement et restituée quand vous en avez besoin.",
  },
];

const S360Equipment = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="mx-auto max-w-[1120px] px-5 text-center">
      <h2 className="text-2xl font-bold text-[#1a2b4a] md:text-4xl">Du matériel premium, pas du low-cost</h2>
      <p className="mt-4 text-lg text-[#4a5568]">On ne pose que du matériel qu'on installerait chez nous.</p>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.brand} className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f5f6fa]">{item.icon}</div>
            <h3 className="mt-4 text-xl font-bold text-[#1a2b4a]">{item.brand}</h3>
            <p className="text-sm text-[#4a5568]">{item.category}</p>
            <p className="mx-auto mt-2 max-w-[320px] text-base text-[#2d3748]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default S360Equipment;