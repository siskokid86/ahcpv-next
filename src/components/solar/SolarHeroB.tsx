"use client";

import { useState, useRef } from "react";
import { CheckCircle, MapPin, Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useLeadForm } from "@/components/lead/LeadFormContext";

type SearchPhase = "idle" | "step1" | "step2" | "step3" | "done";

const SolarHeroB = () => {
  const [postalCode, setPostalCode] = useState("");
  const { openLeadForm } = useLeadForm();
  const [searchPhase, setSearchPhase] = useState<SearchPhase>("idle");
  const [resolvedCity, setResolvedCity] = useState("votre zone");
  const resolvedCityRef = useRef("votre zone");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cp = postalCode.trim();
    if (!/^\d{5}$/.test(cp)) return;
    setSearchPhase("step1");

    fetch(`https://geo.api.gouv.fr/communes?codePostal=${cp}&fields=nom`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0 && data[0].nom) {
          resolvedCityRef.current = data[0].nom;
          setResolvedCity(data[0].nom);
          sessionStorage.setItem("cp", cp);
          sessionStorage.setItem("ville", data[0].nom);
        }
      })
      .catch(() => {});

    setTimeout(() => setSearchPhase("step2"), 1500);
    setTimeout(() => {
      setSearchPhase("done");
      openLeadForm(cp, resolvedCityRef.current);
      setTimeout(() => setSearchPhase("idle"), 500);
    }, 3500);
  };

  const progressValue =
    searchPhase === "step1" ? 50 : searchPhase === "step2" || searchPhase === "done" ? 100 : 0;
  const stepText =
    searchPhase === "step1"
      ? `Recherche du contact le plus proche de ${resolvedCity}...`
      : searchPhase === "step2"
        ? `Analyse de l'ensoleillement à ${resolvedCity}...`
        : "";

  return (
    <section id="hero" className="bg-white">

      {/* Hero content */}
      <div className="mx-auto max-w-[1120px] px-5 py-12 md:px-10 md:py-20">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
          {/* Left - Text */}
          <div className="w-full text-center md:w-[55%] md:text-left">
            <h1
              className="text-[36px] font-bold leading-[1.15] text-[#1B2A4A] md:text-[52px]"
              
            >
              Panneaux Solaires
            </h1>
            <p
              className="mt-4 text-[22px] font-bold leading-snug text-[#1B2A4A] md:text-[32px]"
              
            >
              Calculez votre Rendement &{" "}
              <span className="text-[#F5A623]">Comparez les prix</span> des installateurs locaux
            </p>

            {/* Bullet points */}
            <ul className="mt-8 space-y-3 text-left">
              {[
                "Jusqu'à -60% d'économies sur vos factures d'énergie",
                "Jusqu'à plusieurs milliers d'euros d'aides à l'installation",
                "Production garantie par contrat — 12 mois",
                "Installation rapide par nos 11 experts certifiés RGE",
              ].map((text) => (
                <li key={text} className="flex items-start gap-3 text-[16px] text-[#2D3748] md:text-[18px]">
                  <CheckCircle size={20} className="mt-0.5 shrink-0 text-[#38A169]" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* Social proof */}
            <div className="mt-8 flex items-center justify-center gap-2 md:justify-start">
              <span className="text-[18px] font-bold text-[#1B2A4A]">1 557 installations</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="#F5A623">
                    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.68l5.34-.78L10 1z" />
                  </svg>
                ))}
              </div>
              <span className="text-[14px] text-[#718096]">en Occitanie depuis 20 ans</span>
            </div>
          </div>

          {/* Right - Dashboard image */}
          <div className="hidden w-[45%] md:block">
            <img
              src="/images/solar-dashboard-illustration.png"
              alt="Illustration économies solaires - facture EDF avant et après installation de panneaux solaires"
              className="w-full rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>

        {/* Arrow down */}
        <div className="mt-10 flex justify-center text-4xl">👇</div>

        {/* Code postal form with simulation animation */}
        <div className="mx-auto mt-6 max-w-[520px] overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
          <div className="px-8 pt-8 pb-2 text-center">
            <h2
              className="text-[22px] font-bold text-[#1B2A4A] md:text-[28px]"
              
            >
              Obtenez votre Bilan Solaire Gratuit
            </h2>
            <p className="mt-1 text-[14px] text-[#718096]">Gratuit et sans engagement</p>
          </div>

          {searchPhase === "idle" ? (
            <form onSubmit={handleSubmit} className="flex items-center px-6 pb-6 pt-4">
              <div className="relative flex-1">
                <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#718096]" />
                <input
                  type="text"
                  placeholder="Votre code postal"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  maxLength={5}
                  className="w-full rounded-xl border border-[#E2E8F0] bg-[#F7F8FA] py-4 pl-10 pr-4 text-[15px] text-[#2D3748] outline-none transition focus:border-[#F5A623]"
                />
              </div>
              <button
                type="submit"
                className="ml-3 shrink-0 rounded-xl bg-[#F5A623] px-6 py-4 text-[15px] font-bold text-white shadow transition hover:bg-[#E09010] hover:scale-[1.02] active:scale-[0.98]"
              >
                Commencer
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center gap-4 px-8 pb-8 pt-4">
              <div className="flex items-center gap-3">
                <Loader2 className="h-5 w-5 animate-spin text-[#F5A623]" />
                <span className="text-sm font-medium text-[#2D3748]">{stepText}</span>
              </div>
              <Progress value={progressValue} className="h-2 w-full" />
            </div>
          )}
        </div>

        <p className="mt-3 text-center text-[13px] text-[#718096]">
          Études limitées à 15 foyers par semaine dans votre zone
        </p>
      </div>
    </section>
  );
};

export default SolarHeroB;