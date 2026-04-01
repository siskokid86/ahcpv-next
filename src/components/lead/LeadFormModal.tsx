"use client";

import { useLeadForm } from "./LeadFormContext";
import LeadFormSteps from "./LeadFormSteps";

const LeadFormModal = () => {
  const { isOpen, closeLeadForm, initialCp } = useLeadForm();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 backdrop-blur-sm">
      <div className="relative mx-4 w-full max-w-lg animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={closeLeadForm}
          className="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-card text-muted-foreground shadow-md transition hover:text-foreground"
          aria-label="Fermer"
        >
          ✕
        </button>
        <LeadFormSteps
          initialPostalCode={initialCp}
          onComplete={closeLeadForm}
          mode="modal"
        />
      </div>
    </div>
  );
};

export default LeadFormModal;