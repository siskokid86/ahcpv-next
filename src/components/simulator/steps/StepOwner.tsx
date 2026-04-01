"use client";

import { Check, X, Home } from "lucide-react";

interface Props {
  onYes: () => void;
  onNo: () => void;
}

const StepOwner = ({ onYes, onNo }: Props) => (
  <div className="animate-in fade-in duration-300 text-center">
    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
      <Home className="h-8 w-8 text-primary" />
    </div>
    <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
      Êtes-vous propriétaire ?
    </h2>
    <p className="mb-8 text-muted-foreground">
      L'installation de panneaux solaires nécessite d'être propriétaire
    </p>
    <div className="flex justify-center gap-4">
      <button
        onClick={onYes}
        className="group flex items-center gap-3 rounded-xl border-2 border-border px-10 py-5 font-semibold transition-all hover:border-primary hover:shadow-lg"
      >
        <Check className="h-6 w-6 text-green-500 transition-transform group-hover:scale-110" />
        Oui
      </button>
      <button
        onClick={onNo}
        className="group flex items-center gap-3 rounded-xl border-2 border-border px-10 py-5 font-semibold transition-all hover:border-destructive hover:shadow-lg"
      >
        <X className="h-6 w-6 text-muted-foreground transition-transform group-hover:scale-110" />
        Non
      </button>
    </div>
  </div>
);

export default StepOwner;