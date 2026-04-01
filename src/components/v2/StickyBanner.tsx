"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "ahc-banner-dismissed";
const EXPIRY_DAYS = 7;

const isDismissed = () => {
  const dismissed = localStorage.getItem(STORAGE_KEY);
  if (!dismissed) return false;
  const expiryDate = new Date(dismissed);
  return expiryDate.getTime() > Date.now();
};

const StickyBanner = () => {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/estimation") {
      setVisible(false);
      return;
    }
    setVisible(!isDismissed());
  }, [pathname]);

  const dismiss = () => {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + EXPIRY_DAYS);
    localStorage.setItem(STORAGE_KEY, expiry.toISOString());
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
      <div className="container mx-auto flex items-center justify-between gap-3">
        <div className="flex flex-1 items-center justify-center gap-3 text-primary-foreground">
          <p className="text-sm font-semibold sm:text-base">
            <span className="hidden sm:inline">Batterie ou borne de recharge offerte*</span>
            <span className="sm:hidden">Batterie offerte*</span>
            <span className="mx-2 hidden text-primary-foreground/50 sm:inline">—</span>
            <span className="mx-1.5 text-primary-foreground/50 sm:hidden">—</span>
            <span className="text-xs font-medium text-primary-foreground/80 sm:text-sm">Offre limitée</span>
          </p>
          <a
            href="#offre"
            className="shrink-0 rounded-lg bg-primary-foreground px-4 py-1.5 text-sm font-semibold text-primary transition-all hover:opacity-90"
          >
            En profiter
          </a>
        </div>
        <button
          onClick={dismiss}
          className="shrink-0 rounded-full p-1 text-primary-foreground/70 transition hover:text-primary-foreground"
          aria-label="Fermer"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default StickyBanner;