"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
const logoAhc = "/images/logo-ahc.png";
import { Phone, Sun, Zap, Battery, Share2, CheckCircle2, Clock } from "lucide-react";

const Tank = () => {
  const ville = sessionStorage.getItem("ville") || "";
  const simData = (() => {
    try {
      const raw = sessionStorage.getItem("sim_estimate");
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  })();

  // Countdown 24h from submission
  const [timeLeft, setTimeLeft] = useState("");
  useEffect(() => {
    const submitted = sessionStorage.getItem("sim_submitted_at");
    if (!submitted) return;
    const target = new Date(submitted).getTime() + 24 * 60 * 60 * 1000;
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) { setTimeLeft("Très bientôt !"); return; }
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      setTimeLeft(`${h}h ${m}min`);
    };
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);

  const handleShare = () => {
    const text = `Je viens de simuler mes économies solaires avec AHC${ville ? ` à ${ville}` : ""} ! Fais ta simulation gratuite ici :`;
    const url = `${window.location.origin}/simulateur`;
    if (navigator.share) {
      navigator.share({ title: "Simulateur Solaire AHC", text, url }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${text} ${url}`);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="flex items-center px-6 py-4 md:px-12">
        <img src={logoAhc} alt="Amélioration Habitat Conseil" className="h-10 md:h-12" />
      </header>

      {/* Main content */}
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-2xl">
          {/* Success badge */}
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 animate-scale-in">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <h1 className="mb-4 text-center text-2xl font-bold text-foreground md:text-3xl">
            {ville
              ? <>Merci pour votre demande concernant votre projet solaire à <span className="gradient-text">{ville}</span>.</>
              : "Merci pour votre demande !"}
          </h1>
          <p className="mb-8 text-center text-muted-foreground">
            Nos équipes sont en train de traiter vos informations. Vous serez contacté dans les plus brefs délais.
          </p>

          {/* Countdown */}
          {timeLeft && (
            <div className="mx-auto mb-6 flex max-w-sm items-center justify-center gap-3 rounded-xl border border-border bg-card p-4">
              <Clock className="h-5 w-5 text-primary shrink-0" />
              <div className="text-sm">
                <span className="text-muted-foreground">Rappel estimé dans </span>
                <span className="font-bold text-foreground">{timeLeft}</span>
              </div>
            </div>
          )}

          {/* Simulation summary */}
          {simData && (
            <div className="mb-6 rounded-2xl border border-border bg-card p-5">
              <h3 className="mb-4 text-center text-sm font-semibold text-foreground">
                Récapitulatif de votre simulation
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center rounded-xl bg-primary/5 p-3">
                  <Sun className="mb-1 h-5 w-5 text-amber-500" />
                  <span className="text-base font-bold text-foreground">{simData.recommendedKwc} kWc</span>
                  <span className="text-[10px] text-muted-foreground">Puissance</span>
                </div>
                <div className="flex flex-col items-center rounded-xl bg-primary/5 p-3">
                  <Zap className="mb-1 h-5 w-5 text-primary" />
                  <span className="text-base font-bold text-foreground">{simData.savingsAnnual} €</span>
                  <span className="text-[10px] text-muted-foreground">Économies/an</span>
                </div>
                <div className="flex flex-col items-center rounded-xl bg-primary/5 p-3">
                  <Battery className="mb-1 h-5 w-5 text-green-500" />
                  <span className="text-base font-bold text-foreground">{simData.totalProduction?.toLocaleString()}</span>
                  <span className="text-[10px] text-muted-foreground">kWh/an</span>
                </div>
              </div>
            </div>
          )}

          {/* Contact + Share */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="tel:0661376352"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              <Phone className="h-4 w-4" />
              06 61 37 63 52
            </a>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted"
            >
              <Share2 className="h-4 w-4" />
              Partager à un voisin
            </button>
          </div>

          {ville && (
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Pour votre projet à <span className="font-semibold text-foreground">{ville}</span>, vous pouvez contacter directement notre conseiller local.
            </p>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-6 text-center text-sm text-muted-foreground">
        Amélioration Habitat Conseil – 9 avenue du général LECLERC 31340 VILLEMUR SUR TARN – 752 494
        419 R.C.S. Toulouse –{" "}
        <Link href="/mentions-legales" className="text-primary hover:underline">
          Mentions légales
        </Link>{" "}
        –{" "}
        <Link href="/privacy-policy" className="text-primary hover:underline">
          Politique de confidentialité
        </Link>
        .
      </footer>
    </div>
  );
};

export default Tank;
