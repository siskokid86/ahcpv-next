"use client";

import { useCounter } from "@/hooks/useCounter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: 20, suffix: "", label: "Années d'expérience", desc: "dans le photovoltaïque" },
  { value: 1557, suffix: "+", label: "Installations réalisées", desc: "en Occitanie" },
  { value: 11, suffix: "", label: "Experts à votre service", desc: "certifiés RGE" },
];

const StatCard = ({ value, suffix, label, desc }: { value: number; suffix: string; label: string; desc: string }) => {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="scroll-fade-up text-center">
      <p className="text-5xl font-bold text-primary md:text-6xl">
        {count}
        <span className="text-secondary">{suffix}</span>
      </p>
      <p className="mt-3 text-lg font-semibold text-foreground">{label}</p>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  );
};

const StatsV2 = () => {
  const sectionRef = useScrollAnimation();
  return (
    <section className="bg-background py-20" ref={sectionRef}>
      <div className="container mx-auto grid grid-cols-1 gap-12 px-6 md:grid-cols-3">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default StatsV2;