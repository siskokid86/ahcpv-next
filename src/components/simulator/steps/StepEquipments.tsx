"use client";

import { SimulatorData } from "../simulatorTypes";
import { Car, PlugZap, Waves, Snowflake, ThermometerSun, UtensilsCrossed, Wind, Droplets, ArrowRight } from "lucide-react";

interface Props {
  data: SimulatorData;
  setField: <K extends keyof SimulatorData>(key: K, value: SimulatorData[K]) => void;
  onNext: () => void;
}

const equipments = [
  { key: "hasEV" as const, label: "Véhicule électrique", Icon: Car },
  { key: "hasChargingStation" as const, label: "Borne de recharge", Icon: PlugZap },
  { key: "hasPool" as const, label: "Piscine ou Jacuzzi", Icon: Waves },
  { key: "hasAC" as const, label: "Climatisation", Icon: Snowflake },
  { key: "hasHeatPump" as const, label: "Pompe à chaleur", Icon: ThermometerSun },
  { key: "hasDishwasher" as const, label: "Lave-vaisselle", Icon: UtensilsCrossed },
  { key: "hasDryer" as const, label: "Sèche-linge", Icon: Wind },
  { key: "hasWaterHeater" as const, label: "Chauffe-eau élec.", Icon: Droplets },
] as const;

const StepEquipments = ({ data, setField, onNext }: Props) => (
  <div className="animate-in fade-in duration-300 text-center">
    <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
      Vos équipements
    </h2>
    <p className="mb-6 text-muted-foreground">
      Sélectionnez les équipements que vous possédez
    </p>
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {equipments.map((eq) => {
        const active = data[eq.key];
        return (
          <button
            key={eq.key}
            onClick={() => setField(eq.key, !active)}
            className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all hover:shadow-md ${
              active
                ? "border-primary bg-primary/5 shadow-sm"
                : "border-border hover:border-primary/40"
            }`}
          >
            <eq.Icon className={`h-7 w-7 ${active ? "text-primary" : "text-muted-foreground"}`} />
            <span className={`text-xs font-semibold leading-tight ${active ? "text-primary" : "text-foreground"}`}>
              {eq.label}
            </span>
          </button>
        );
      })}
    </div>
    <button
      onClick={onNext}
      className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 font-semibold text-primary-foreground shadow-lg transition-all hover:opacity-90"
    >
      Voir mes résultats
      <ArrowRight className="h-5 w-5" />
    </button>
  </div>
);

export default StepEquipments;