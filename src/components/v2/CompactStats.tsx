"use client";

import { useCounter } from "@/hooks/useCounter";

const stats = [
  { value: 20, suffix: "", label: "ans d'expérience" },
  { value: 1557, suffix: "+", label: "installations" },
  { value: 11, suffix: "", label: "experts certifiés" },
];

const CompactStats = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 rounded-xl border border-border bg-card px-6 py-4 shadow-sm sm:gap-10">
      {stats.map((stat, i) => (
        <StatItem key={stat.label} {...stat} showDivider={i < stats.length - 1} />
      ))}
    </div>
  );
};

const StatItem = ({ value, suffix, label, showDivider }: { value: number; suffix: string; label: string; showDivider: boolean }) => {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="flex items-center gap-6 sm:gap-10">
      <div className="text-center">
        <span className="text-2xl font-bold text-primary sm:text-3xl">
          {count}{suffix}
        </span>
        <span className="ml-2 text-sm text-muted-foreground">{label}</span>
      </div>
      {showDivider && (
        <div className="hidden h-8 w-px bg-border sm:block" />
      )}
    </div>
  );
};

export default CompactStats;