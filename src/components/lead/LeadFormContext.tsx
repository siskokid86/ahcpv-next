"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface LeadFormContextType {
  isOpen: boolean;
  openLeadForm: (cp?: string, ville?: string) => void;
  closeLeadForm: () => void;
  initialCp: string;
  initialVille: string;
}

const LeadFormContext = createContext<LeadFormContextType | null>(null);

export const useLeadForm = () => {
  const ctx = useContext(LeadFormContext);
  if (!ctx) throw new Error("useLeadForm must be used within LeadFormProvider");
  return ctx;
};

export const LeadFormProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialCp, setInitialCp] = useState("");
  const [initialVille, setInitialVille] = useState("");

  const openLeadForm = useCallback((cp?: string, ville?: string) => {
    if (cp) {
      setInitialCp(cp);
      sessionStorage.setItem("cp", cp);
    }
    if (ville) {
      setInitialVille(ville);
      sessionStorage.setItem("ville", ville);
    }
    setIsOpen(true);
  }, []);

  const closeLeadForm = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <LeadFormContext.Provider value={{ isOpen, openLeadForm, closeLeadForm, initialCp, initialVille }}>
      {children}
    </LeadFormContext.Provider>
  );
};