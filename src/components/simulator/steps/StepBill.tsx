"use client";

import { SimulatorData, MonthlyBill } from "../simulatorTypes";
import { Receipt } from "lucide-react";

interface Props {
  data: SimulatorData;
  setField: <K extends keyof SimulatorData>(key: K, value: SimulatorData[K]) => void;
  onNext: () => void;
}

const options: { value: MonthlyBill; label: string }[] = [
  { value: "less-80", label: "Moins de 80€" },
  { value: "80-120", label: "80 — 120€" },
  { value: "120-180", label: "120 — 180€" },
  { value: "180-250", label: "180 — 250€" },
  { value: "more-250", label: "Plus de 250€" },
];

const StepBill = ({ data, setField, onNext }: Props) => (
  <div className="animate-in fade-in duration-300 text-center">
    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
      <Receipt className="h-8 w-8 text-primary" />
    </div>
    <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
      Facture mensuelle d'électricité ?
    </h2>
    <p className="mb-8 text-muted-foreground">
      Cela nous permet de dimensionner votre installation
    </p>
    <div className="space-y-3">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => {
            setField("monthlyBill", opt.value);
            onNext();
          }}
          className="w-full rounded-xl border-2 border-border p-4 font-semibold transition-all hover:border-primary hover:shadow-lg text-left"
        >
          {opt.label}
        </button>
      ))}
    </div>
  </div>
);

export default StepBill;