"use client";

import { SimulatorData, HeatingType } from "../simulatorTypes";
import { Flame, ThermometerSun, Wind, Droplets, TreePine, HelpCircle } from "lucide-react";

interface Props {
  data: SimulatorData;
  setField: <K extends keyof SimulatorData>(key: K, value: SimulatorData[K]) => void;
  onNext: () => void;
}

const options: { value: HeatingType; label: string; icon: typeof Flame }[] = [
  { value: "electrique", label: "Électrique (radiateurs)", icon: ThermometerSun },
  { value: "pompe-a-chaleur", label: "Pompe à chaleur", icon: Wind },
  { value: "gaz", label: "Gaz", icon: Flame },
  { value: "fioul", label: "Fioul", icon: Droplets },
  { value: "bois", label: "Bois / Granulés", icon: TreePine },
  { value: "autre", label: "Autre / Je ne sais pas", icon: HelpCircle },
];

const StepHeating = ({ data, setField, onNext }: Props) => (
  <div className="animate-in fade-in duration-300 text-center">
    <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
      Type de chauffage ?
    </h2>
    <p className="mb-8 text-muted-foreground">
      Votre mode de chauffage influence votre consommation électrique
    </p>
    <div className="grid grid-cols-2 gap-3">
      {options.map((opt) => {
        const Icon = opt.icon;
        return (
          <button
            key={opt.value}
            onClick={() => {
              setField("heatingType", opt.value);
              onNext();
            }}
            className="flex flex-col items-center gap-2 rounded-xl border-2 border-border p-4 font-semibold transition-all hover:border-primary hover:shadow-lg"
          >
            <Icon className="h-7 w-7 text-primary" />
            <span className="text-sm">{opt.label}</span>
          </button>
        );
      })}
    </div>
  </div>
);

export default StepHeating;