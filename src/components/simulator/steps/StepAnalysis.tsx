"use client";

import { useEffect, useState } from "react";
import { SimulatorData } from "../simulatorTypes";
import { Sun, MapPin, BarChart3, Loader2 } from "lucide-react";

interface Props {
  data: SimulatorData;
  onComplete: () => void;
}

const steps = [
  { icon: MapPin, text: "Localisation de votre toiture", duration: 1200 },
  { icon: Sun, text: "Analyse de l'ensoleillement", duration: 1500 },
  { icon: BarChart3, text: "Calcul de votre potentiel solaire", duration: 1800 },
];

const StepAnalysis = ({ data, onComplete }: Props) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const runStep = (i: number) => {
      if (i >= steps.length) {
        timeout = setTimeout(onComplete, 500);
        return;
      }
      setCurrentStep(i);
      timeout = setTimeout(() => runStep(i + 1), steps[i].duration);
    };
    runStep(0);
    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div className="animate-in fade-in duration-300 text-center py-8">
      <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
        <Sun className="h-10 w-10 text-primary animate-spin" style={{ animationDuration: "3s" }} />
      </div>
      <h2 className="mb-2 text-2xl font-bold text-foreground">
        Analyse en cours…
      </h2>
      <p className="mb-8 text-sm text-muted-foreground">
        {data.city && `Simulation pour ${data.city} (${data.postalCode})`}
      </p>
      <div className="mx-auto max-w-sm space-y-4">
        {steps.map((s, i) => {
          const Icon = s.icon;
          const isDone = i < currentStep;
          const isCurrent = i === currentStep;
          return (
            <div
              key={i}
              className={`flex items-center gap-3 rounded-lg p-3 text-left transition-all duration-500 ${
                isDone
                  ? "bg-primary/5 text-foreground"
                  : isCurrent
                  ? "bg-primary/10 text-foreground"
                  : "text-muted-foreground/50"
              }`}
            >
              {isDone ? (
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">✓</span>
              ) : isCurrent ? (
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              ) : (
                <Icon className="h-8 w-8" />
              )}
              <span className="font-medium text-sm">{s.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepAnalysis;