"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, CheckCircle2, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { SimulatorData, defaultSimulatorData } from "./simulatorTypes";
import StepAddress from "./steps/StepAddress";
import StepOwner from "./steps/StepOwner";
import StepOrientation from "./steps/StepOrientation";
import StepInclinaison from "./steps/StepInclinaison";
import StepHeating from "./steps/StepHeating";
import StepBill from "./steps/StepBill";
import StepEquipments from "./steps/StepEquipments";
import StepAnalysis from "./steps/StepAnalysis";
import StepResults from "./steps/StepResults";
import StepDisqualified from "./steps/StepDisqualified";

const TOTAL_STEPS = 8;
const STORAGE_KEY = "sim_progress";

const testimonials = [
  { name: "Jean P.", city: "Toulouse", text: "J'économise 87€/mois depuis l'installation.", step: 6 },
  { name: "Marie L.", city: "Montpellier", text: "Rentabilisé en 7 ans, je recommande !", step: 5 },
  { name: "Pierre D.", city: "Bordeaux", text: "La simulation était très proche de la réalité.", step: 7 },
];

function getStepLabels(data: SimulatorData): string[] {
  const labels: string[] = [];
  if (data.city) labels.push(data.city);
  if (data.orientation) labels.push(data.orientation.replace(/-/g, "/"));
  if (data.monthlyBill) {
    const map: Record<string, string> = { "less-80": "<80€", "80-120": "80-120€", "120-180": "120-180€", "180-250": "180-250€", "more-250": ">250€" };
    labels.push(map[data.monthlyBill] || "");
  }
  return labels.filter(Boolean);
}

function randomViewers() {
  return Math.floor(Math.random() * 8) + 3;
}

const SimulatorFlow = () => {
  // Restore from sessionStorage
  const [step, setStep] = useState(() => {
    if (typeof window === "undefined") return 1;
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.step || 1;
      }
    } catch {}
    return 1;
  });

  const [data, setData] = useState<SimulatorData>(() => {
    if (typeof window === "undefined") return defaultSimulatorData;
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...defaultSimulatorData, ...parsed.data };
      }
    } catch {}
    return defaultSimulatorData;
  });

  const [showResume, setShowResume] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.step > 1;
      }
    } catch {}
    return false;
  });

  const [transitioning, setTransitioning] = useState(false);
  const [viewers] = useState(randomViewers);

  const setField = useCallback(<K extends keyof SimulatorData>(key: K, value: SimulatorData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }));
  }, []);

  // Save progress
  useEffect(() => {
    if (step > 0 && step <= TOTAL_STEPS) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ step, data }));
    }
  }, [step, data]);

  const progressPercent = step <= TOTAL_STEPS ? (step / TOTAL_STEPS) * 100 : 100;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const goBack = () => {
    if (step > 1) changeStep(step - 1);
  };

  const changeStep = (next: number) => {
    setTransitioning(true);
    setTimeout(() => {
      setStep(next);
      setTransitioning(false);
    }, 150);
  };

  // Resume prompt
  if (showResume && step > 1) {
    return (
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gradient-to-b from-background to-muted/30 px-4">
        <div className="w-full max-w-md text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
            <CheckCircle2 className="h-7 w-7 text-primary" />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-foreground">
            Reprendre votre simulation ?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Vous aviez commencé une simulation{data.city ? ` pour ${data.city}` : ""}. Souhaitez-vous la continuer ?
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={() => setShowResume(false)}
              className="flex-1 rounded-xl bg-primary py-3 font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Reprendre (étape {step}/{TOTAL_STEPS})
            </button>
            <button
              onClick={() => {
                sessionStorage.removeItem(STORAGE_KEY);
                setStep(1);
                setData(defaultSimulatorData);
                setShowResume(false);
              }}
              className="flex-1 rounded-xl border border-border bg-card py-3 font-semibold text-foreground transition hover:bg-muted"
            >
              Recommencer
            </button>
          </div>
        </div>
      </div>
    );
  }

  const stepLabels = getStepLabels(data);
  const currentTestimonial = testimonials.find((t) => t.step === step);

  const makeNext = (next: number) => () => changeStep(next);

  const renderStep = () => {
    switch (step) {
      case 1: return <StepAddress data={data} setField={setField} onNext={makeNext(2)} />;
      case 2: return <StepOwner onYes={makeNext(3)} onNo={makeNext(-1)} />;
      case 3: return <StepOrientation data={data} setField={setField} onNext={makeNext(4)} />;
      case 4: return <StepInclinaison data={data} setField={setField} onNext={makeNext(5)} />;
      case 5: return <StepHeating data={data} setField={setField} onNext={makeNext(6)} />;
      case 6: return <StepBill data={data} setField={setField} onNext={makeNext(7)} />;
      case 7: return <StepEquipments data={data} setField={setField} onNext={makeNext(8)} />;
      case 8: return <StepAnalysis data={data} onComplete={makeNext(9)} />;
      case 9: return <StepResults data={data} setField={setField} />;
      case -1: return <StepDisqualified onRetry={makeNext(1)} />;
      default: return null;
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col bg-gradient-to-b from-background to-muted/30">
      {/* Progress bar fixed top */}
      {step > 0 && step <= TOTAL_STEPS && (
        <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
          <Progress value={progressPercent} className="h-1.5 rounded-none" />
          <div className="flex items-center justify-between px-4 py-2">
            {step > 1 ? (
              <button
                onClick={goBack}
                className="flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" /> Retour
              </button>
            ) : (
              <div />
            )}
            {/* Recap badges */}
            <div className="hidden sm:flex items-center gap-1.5">
              {stepLabels.map((label, i) => (
                <span key={i} className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium text-primary">
                  <CheckCircle2 className="h-3 w-3" />
                  {label}
                </span>
              ))}
            </div>
            <span className="text-xs font-medium text-muted-foreground">
              {step}/{TOTAL_STEPS}
            </span>
          </div>
        </div>
      )}

      {/* Content area */}
      <div className={`flex flex-1 flex-col items-center justify-center px-4 py-6 transition-opacity duration-150 ${transitioning ? "opacity-0" : "opacity-100"}`}>
        {renderStep()}
      </div>

      {/* Social proof + contextual testimonial footer */}
      {step > 1 && step <= TOTAL_STEPS && (
        <div className="px-4 pb-4">
          {currentTestimonial && (
            <div className="mx-auto mb-2 max-w-md rounded-xl border border-border bg-card px-4 py-3 text-center">
              <p className="text-xs text-muted-foreground italic">"{currentTestimonial.text}"</p>
              <p className="mt-1 text-[10px] font-semibold text-foreground">
                {currentTestimonial.name} — {currentTestimonial.city}
              </p>
            </div>
          )}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
            <Users className="h-3.5 w-3.5 text-green-500" />
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            <span>{viewers} personnes simulent en ce moment</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimulatorFlow;