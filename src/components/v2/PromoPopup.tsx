"use client";

import { useState, useEffect, useCallback } from "react";
import { X, Battery, Gift } from "lucide-react";
import { useRouter } from "next/navigation";

const STORAGE_KEY = "promo-popup-dismissed";

const getPromoEndDate = () => {
  const now = new Date();
  const end = new Date(now.getFullYear(), now.getMonth() + 3, 0);
  return end.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
};

const wasDismissedToday = () => {
  const dismissed = localStorage.getItem(STORAGE_KEY);
  if (!dismissed) return false;
  const today = new Date().toDateString();
  return dismissed === today;
};

const PromoPopup = () => {
  const [open, setOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const router = useRouter();

  const show = useCallback(() => {
    if (hasShown || wasDismissedToday()) return;
    setOpen(true);
    setHasShown(true);
  }, [hasShown]);

  const dismiss = () => {
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, new Date().toDateString());
  };

  // Timer: show after 5s
  useEffect(() => {
    if (wasDismissedToday()) return;
    const timer = setTimeout(show, 5000);
    return () => clearTimeout(timer);
  }, [show]);

  // Exit intent (desktop only)
  useEffect(() => {
    if (wasDismissedToday()) return;
    const handler = (e: MouseEvent) => {
      if (e.clientY <= 5) show();
    };
    document.addEventListener("mouseleave", handler);
    return () => document.removeEventListener("mouseleave", handler);
  }, [show]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4 animate-fade-in">
      <div className="relative w-full max-w-md rounded-2xl bg-card border border-border shadow-2xl overflow-hidden">
        {/* Close */}
        <button
          onClick={dismiss}
          className="absolute right-3 top-3 z-10 rounded-full bg-muted p-1.5 text-muted-foreground transition hover:bg-muted-foreground/20"
          aria-label="Fermer"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header gradient */}
        <div className="bg-gradient-to-br from-primary to-primary/80 px-6 pt-8 pb-6 text-center text-primary-foreground">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/20">
            <Gift className="h-7 w-7" />
          </div>
          <h2 className="text-2xl font-bold leading-tight">
            2 ans de batterie virtuelle offerts*
          </h2>
          <p className="mt-2 text-sm text-primary-foreground/80">
            Pour toute installation photovoltaïque
          </p>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-4">
          <div className="flex items-start gap-3">
            <Battery className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="text-sm text-foreground">
              <span className="font-semibold">Batterie virtuelle</span> — Stockez votre surplus virtuellement, restituez-le quand vous en avez besoin. 2 ans inclus.
            </p>
          </div>

          <div className="rounded-xl bg-muted/50 border border-border px-4 py-3 text-center">
            <p className="text-xs text-muted-foreground">
              Offre limitée — réservée aux 5 premiers clients du mois
            </p>
            <p className="mt-1 text-xs font-semibold text-foreground">
              Valable jusqu'au {getPromoEndDate()}
            </p>
          </div>

          <button
            onClick={() => {
              dismiss();
              router.push("/estimation");
            }}
            className="cta-pulse w-full rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Estimer mon projet gratuitement
          </button>

          <button
            onClick={dismiss}
            className="w-full text-center text-xs text-muted-foreground hover:text-foreground transition"
          >
            Non merci, peut-être plus tard
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;