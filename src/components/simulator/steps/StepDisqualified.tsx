"use client";

import { ArrowLeft, X } from "lucide-react";

interface Props {
  onRetry: () => void;
}

const StepDisqualified = ({ onRetry }: Props) => (
  <div className="animate-in fade-in duration-300 text-center py-6">
    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
      <X className="h-8 w-8 text-destructive" />
    </div>
    <h2 className="mb-3 text-xl font-bold text-foreground">Désolé !</h2>
    <p className="text-muted-foreground">
      L'installation de panneaux solaires s'adresse uniquement aux propriétaires de maisons individuelles.
    </p>
    <button
      onClick={onRetry}
      className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
    >
      <ArrowLeft className="h-4 w-4" /> Recommencer
    </button>
  </div>
);

export default StepDisqualified;