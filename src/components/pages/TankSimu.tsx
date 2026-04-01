"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
const logoAhc = "/images/logo-ahc.png";
import { Phone, Sun, Zap, Battery as BatteryIcon, Share2, CheckCircle2, Clock, CheckCircle, User, Mail } from "lucide-react";
const batterieImg = "/images/batterie-panneau-solaire-offerte.webp";

const getPromoEndDate = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 3, 0).toLocaleDateString("fr-FR");
};

const getCallbackTime = () => {
  const now = new Date();
  const h = now.getHours();
  if (h >= 20) {
    // After 8pm -> tomorrow at 10am
    return `demain à 10h00`;
  }
  // Within 30 minutes
  const callback = new Date(now.getTime() + 30 * 60 * 1000);
  const minutes = callback.getMinutes().toString().padStart(2, "0");
  return `${callback.getHours()}h${minutes}`;
};

const TankSimu = () => {
  const ville = sessionStorage.getItem("ville") || "";
  const simData = (() => {
    try {
      const raw = sessionStorage.getItem("sim_estimate");
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  })();

  const promoEnd = getPromoEndDate();
  const callbackTime = getCallbackTime();

  useEffect(() => {
    try {
      if (typeof (window as any).gtag === "function") {
        (window as any).gtag("event", "conversion", {
          send_to: "AW-11176357292/u7tACN_rs5QbEKzzptEp",
        });
      }
    } catch {}
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

  const offerCard = {
    img: batterieImg,
    icon: BatteryIcon,
    title: "Batterie virtuelle MyLight",
    subtitle: "2 ans offerts",
    features: [
      "Stockez votre surplus virtuellement",
      "Restituez-le quand vous en avez besoin",
      "Zéro revente à perte (0,04 cts/kWh)",
    ],
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="flex items-center px-6 py-4 md:px-12">
        <img src={logoAhc} alt="Amélioration Habitat Conseil" className="h-10 md:h-12" />
      </header>

      <main className="flex-1 px-4 pb-12">
        <div className="mx-auto max-w-4xl">
          {/* Success badge */}
          <div className="mb-6 flex justify-center pt-6">
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

          {/* Callback time */}
          <div className="mx-auto mb-8 flex max-w-sm items-center justify-center gap-3 rounded-xl border border-border bg-card p-4">
            <Clock className="h-5 w-5 text-primary shrink-0" />
            <div className="text-sm">
              <span className="text-muted-foreground">Rappel estimé à </span>
              <span className="font-bold text-foreground">{callbackTime}</span>
            </div>
          </div>

          {/* Simulation summary */}
          {simData && (
            <div className="mb-10 rounded-2xl border border-border bg-card p-5">
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
                  <BatteryIcon className="mb-1 h-5 w-5 text-green-500" />
                  <span className="text-base font-bold text-foreground">{simData.totalProduction?.toLocaleString()}</span>
                  <span className="text-[10px] text-muted-foreground">kWh/an</span>
                </div>
              </div>
            </div>
          )}

          {/* Offer banner */}
          <div className="mb-10">
            <div className="relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-secondary px-6 py-10 text-center text-primary-foreground">
              <div className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium backdrop-blur-sm">
                <Clock className="h-3.5 w-3.5" />
                Offre limitée — jusqu&apos;au {promoEnd}
              </div>
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                2 ans de batterie virtuelle offerts*
              </h2>
              <p className="mx-auto max-w-xl text-sm text-primary-foreground/75">
                Livré et installé sans supplément, en plus de votre installation solaire.
              </p>
            </div>

            <div className="mx-auto max-w-md">
              <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <div className="flex items-center justify-center bg-muted p-6">
                  <img
                    src={offerCard.img}
                    alt={offerCard.title}
                    className="max-h-40 rounded-xl object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <offerCard.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{offerCard.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{offerCard.subtitle}</p>
                  <div className="space-y-2.5">
                    {offerCard.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm text-foreground">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact section */}
          <div className="mb-10 rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-4 text-center text-lg font-bold text-foreground">
              Votre contact Amélioration Habitat Conseil
            </h3>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Patrick Perrottet</p>
                  <p className="text-sm text-muted-foreground">Conseiller solaire</p>
                </div>
              </div>
              <a
                href="tel:0448060443"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                <Phone className="h-4 w-4" />
                04 48 06 04 43
              </a>
            </div>
          </div>

          {/* Share */}
          <div className="flex justify-center">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted"
            >
              <Share2 className="h-4 w-4" />
              Partager à un voisin
            </button>
          </div>
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

export default TankSimu;
