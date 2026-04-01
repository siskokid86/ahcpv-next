"use client";

import { SimulatorData, Orientation } from "../simulatorTypes";
import { Compass } from "lucide-react";

interface Props {
  data: SimulatorData;
  setField: <K extends keyof SimulatorData>(key: K, value: SimulatorData[K]) => void;
  onNext: () => void;
}

const options: { value: Orientation; label: string; desc: string; arrows: [number, number]; ideal?: boolean }[] = [
  { value: "nord-sud", label: "Nord / Sud", desc: "Idéal ☀️", arrows: [0, 180], ideal: true },
  { value: "est-ouest", label: "Est / Ouest", desc: "Très bien", arrows: [90, 270] },
  { value: "nord-est-sud-ouest", label: "Nord-Est / Sud-Ouest", desc: "Bon rendement", arrows: [45, 225] },
  { value: "nord-ouest-sud-est", label: "Nord-Ouest / Sud-Est", desc: "Bon rendement", arrows: [315, 135] },
];

const DualCompass = ({ arrows, isIdeal }: { arrows: [number, number]; isIdeal?: boolean }) => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="mx-auto">
    <circle cx="28" cy="28" r="26" stroke="currentColor" strokeWidth="1.5" className="text-border" />
    <circle cx="28" cy="28" r="3" fill="currentColor" className={isIdeal ? "text-primary" : "text-muted-foreground"} />
    {/* Cardinal markers */}
    <text x="28" y="11" textAnchor="middle" fontSize="7" fontWeight="bold" className="fill-muted-foreground">N</text>
    <text x="28" y="51" textAnchor="middle" fontSize="7" fontWeight="bold" className="fill-muted-foreground">S</text>
    <text x="8" y="31" textAnchor="middle" fontSize="7" fontWeight="bold" className="fill-muted-foreground">O</text>
    <text x="48" y="31" textAnchor="middle" fontSize="7" fontWeight="bold" className="fill-muted-foreground">E</text>
    {/* Two arrows for the axis */}
    {arrows.map((rot, i) => (
      <g key={i} transform={`rotate(${rot} 28 28)`}>
        <line x1="28" y1="28" x2="28" y2="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
          className={isIdeal ? "text-primary" : "text-foreground"} />
        <polygon points="28,5 24.5,13 31.5,13" fill="currentColor"
          className={isIdeal ? "text-primary" : "text-foreground"} />
      </g>
    ))}
  </svg>
);

const StepOrientation = ({ data, setField, onNext }: Props) => (
  <div className="animate-in fade-in duration-300 text-center w-full max-w-lg mx-auto">
    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
      <Compass className="h-7 w-7 text-primary" />
    </div>
    <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
      Orientation de votre toiture ?
    </h2>
    <p className="mb-8 text-muted-foreground">
      Dans quel axe sont orientés les pans de votre toit ?
    </p>
    <div className="grid grid-cols-2 gap-3">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => {
            setField("orientation", opt.value);
            onNext();
          }}
          className={`flex flex-col items-center gap-2 rounded-xl border-2 p-5 font-semibold transition-all hover:border-primary hover:shadow-lg ${
            opt.ideal ? "border-primary/30 bg-primary/5" : "border-border"
          }`}
        >
          <DualCompass arrows={opt.arrows} isIdeal={opt.ideal} />
          <span className="text-sm">{opt.label}</span>
          <span className={`text-[10px] font-normal ${opt.ideal ? "text-primary" : "text-muted-foreground"}`}>
            {opt.desc}
          </span>
        </button>
      ))}
    </div>
  </div>
);

export default StepOrientation;