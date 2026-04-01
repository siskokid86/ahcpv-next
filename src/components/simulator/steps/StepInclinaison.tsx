"use client";

import { SimulatorData, Inclinaison } from "../simulatorTypes";

interface Props {
  data: SimulatorData;
  setField: <K extends keyof SimulatorData>(key: K, value: SimulatorData[K]) => void;
  onNext: () => void;
}

const RoofIcon = ({ angle, isOptimal }: { angle: number; isOptimal?: boolean }) => {
  const color = isOptimal ? "text-primary" : "text-foreground";
  // Draw a simple house/roof cross-section with varying angle
  const roofEndY = 10 - (angle / 50) * 18; // higher angle = steeper peak
  return (
    <svg width="56" height="40" viewBox="0 0 56 40" fill="none" className="mx-auto">
      {/* Walls */}
      <rect x="8" y="22" width="40" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-border" fill="none" />
      {/* Roof */}
      <polyline
        points={`6,24 28,${Math.max(roofEndY, 2)} 50,24`}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={color}
        fill="none"
      />
      {/* Angle arc */}
      {angle > 0 && (
        <text x="28" y="37" textAnchor="middle" fontSize="8" fontWeight="bold" className={`fill-current ${color}`}>
          ~{angle}°
        </text>
      )}
    </svg>
  );
};

const options: { value: Inclinaison; label: string; angle: number; desc: string }[] = [
  { value: "plat", label: "Toit plat", angle: 0, desc: "0° – 5°" },
  { value: "faible", label: "Faible pente", angle: 15, desc: "5° – 20°" },
  { value: "moyenne", label: "Pente moyenne", angle: 30, desc: "20° – 40°" },
  { value: "forte", label: "Forte pente", angle: 45, desc: "40°+" },
];

const StepInclinaison = ({ data, setField, onNext }: Props) => (
  <div className="animate-in fade-in duration-300 text-center">
    <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
      Inclinaison de votre toiture ?
    </h2>
    <p className="mb-8 text-muted-foreground">
      Une pente de 20° à 40° est optimale pour le solaire
    </p>
    <div className="grid grid-cols-2 gap-3">
      {options.map((opt) => {
        const isOptimal = opt.value === "moyenne";
        return (
          <button
            key={opt.value}
            onClick={() => {
              setField("inclinaison", opt.value);
              onNext();
            }}
            className={`flex flex-col items-center gap-2 rounded-xl border-2 p-5 font-semibold transition-all hover:border-primary hover:shadow-lg ${
              isOptimal ? "border-primary/30 bg-primary/5" : "border-border"
            }`}
          >
            <RoofIcon angle={opt.angle} isOptimal={isOptimal} />
            <span>{opt.label}</span>
            <span className="text-xs font-normal text-muted-foreground">{opt.desc}</span>
            {isOptimal && (
              <span className="text-[10px] font-normal text-primary">Optimal</span>
            )}
          </button>
        );
      })}
    </div>
  </div>
);

export default StepInclinaison;