"use client";

import { useState, useEffect, useRef } from "react";
import { Zap, Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useLeadForm } from "@/components/lead/LeadFormContext";
type SearchPhase = "idle" | "step1" | "step2" | "step3" | "done";
const highlights = ["Jusqu'à 30ans de garantie matériel", "Stockage virtuel inclus", "Estimation gratuite en 2 min", "Pose en 1-2 jours"];
const HeroV2 = () => {
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("votre ville");
  const [searchPhase, setSearchPhase] = useState<SearchPhase>("idle");
  const [resolvedCity, setResolvedCity] = useState("votre zone");
  const resolvedCityRef = useRef("votre zone");
  const { openLeadForm } = useLeadForm();
  useEffect(() => {
    fetch("https://ipapi.co/json/").then(res => res.json()).then(data => {
      if (data?.city) setCity(data.city);
    }).catch(() => {});
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cp = postalCode.trim();
    if (!/^\d{5}$/.test(cp)) return;
    setSearchPhase("step1");

    fetch(`https://geo.api.gouv.fr/communes?codePostal=${cp}&fields=nom`).then(res => res.json()).then(data => {
      if (Array.isArray(data) && data.length > 0 && data[0].nom) {
        resolvedCityRef.current = data[0].nom;
        setResolvedCity(data[0].nom);
      }
    }).catch(() => {});

    setTimeout(() => setSearchPhase("step2"), 1500);
    setTimeout(() => {
      setSearchPhase("done");
      openLeadForm(cp, resolvedCityRef.current);
      setTimeout(() => setSearchPhase("idle"), 500);
    }, 3500);
  };
  const progressValue = searchPhase === "step1" ? 50 : searchPhase === "step2" || searchPhase === "done" ? 100 : 0;
  const stepText = searchPhase === "step1" ? `Recherche du contact le plus proche de ${resolvedCity}...` : searchPhase === "step2" ? `Analyse de l'ensoleillement à ${resolvedCity}...` : "";
  return <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* BG */}
      <img
        src="/images/hero-bg.webp"
        alt="Installation panneaux solaires en Occitanie"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-foreground/90" />

      <div className="relative z-10 container mx-auto px-6 text-center py-[40px]">
        {/* Badge */}
        <a href="#offre" className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-xs sm:text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20 max-w-[90vw] text-center">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-foreground opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-foreground" />
          </span>
          <span>Créneaux disponibles aux environs de <span className="font-bold">{city}</span></span>
        </a>

        {/* Main heading */}
        <h1 className="mx-auto mb-8 max-w-4xl text-4xl font-normal leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
          <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
            Installation photovoltaïque
          </span>
          <br />
          en autoconsommation avec ou sans revente.
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-4 max-w-2xl text-lg font-light text-primary-foreground/70">
          Panneaux + batterie virtuelle incluse. Estimez vos économies en 2 minutes.
        </p>

        {/* Form / Animation */}
        <div className="mx-auto mb-4 max-w-lg overflow-hidden rounded-2xl bg-card shadow-xl ring-1 ring-border/50">
          {searchPhase === "idle" ? <form onSubmit={handleSubmit} className="flex items-center">
              <input type="text" placeholder="Votre code postal" value={postalCode} onChange={e => setPostalCode(e.target.value)} maxLength={5} className="flex-1 min-w-0 bg-transparent px-4 sm:px-6 py-5 text-foreground placeholder:text-muted-foreground outline-none" />
              <button type="submit" className="cta-pulse m-2 shrink-0 rounded-xl bg-primary px-5 sm:px-8 py-3.5 font-semibold text-primary-foreground transition-all hover:opacity-90">
                Commencer
              </button>
            </form> : <div className="animate-fade-in flex flex-col items-center gap-4 px-6 py-6">
              <div className="flex items-center gap-3">
                <Loader2 className="h-5 w-5 animate-spin text-primary" />
                <span className="text-sm font-medium text-foreground">{stepText}</span>
              </div>
              <Progress value={progressValue} className="h-2 w-full" />
            </div>}
        </div>

        <p className="mb-16 flex items-center justify-center gap-2 text-sm text-primary-foreground/60">
          <Zap className="h-4 w-4 text-warning" />
          Études limitées à 15 foyers par semaine dans votre zone
        </p>

        {/* Highlights - 5 badges */}
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-4">
          {highlights.map(h => <div key={h} className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 px-3 py-3 text-center backdrop-blur-sm">
              <span className="text-sm font-medium text-primary-foreground/90">{h}</span>
            </div>)}
        </div>
      </div>
    </section>;
};
export default HeroV2;