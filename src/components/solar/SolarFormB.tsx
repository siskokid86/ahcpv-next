"use client";

import { useState, useRef } from "react";
import { Calendar, Phone, Check, MapPin, Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useLeadForm } from "@/components/lead/LeadFormContext";

type SearchPhase = "idle" | "step1" | "step2" | "step3" | "done";

const SolarFormB = () => {
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
    <section id="formulaire" className="bg-white py-20 md:py-[120px]">
      <div className="mx-auto max-w-[1120px] px-5 md:px-10">
        {/* Code postal form - centered at the top */}
        <div className="mx-auto max-w-[520px] overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
          <div className="px-8 pt-8 pb-2 text-center">
            <h2
              className="text-[24px] font-bold text-[#1B2A4A] md:text-[32px]"
              style={{ fontFamily: "Playfair Display, serif" }}
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

        {/* Content below */}
        <div className="mx-auto mt-12 flex max-w-[900px] flex-col gap-10 md:flex-row md:gap-16">
          <div className="w-full md:w-1/2">
            <h3 className="text-[20px] font-bold text-[#1B2A4A] md:text-[24px]">
              Votre Bilan Solaire Personnalisé.
            </h3>
            <ul className="mt-6 flex flex-col gap-3">
              {[
                "Analyse de votre consommation réelle",
                "Étude technique de votre toiture",
                "Économies chiffrées en €/mois",
                "Document de 8-10 pages, à vous même si vous ne signez pas",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-base text-[#2D3748]">
                  <Check size={18} className="mt-0.5 shrink-0 text-[#38A169]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/2">
            <div className="rounded-xl border border-[#F5A623] bg-[#FFF9ED] p-5">
              <p className="flex items-start gap-2 font-bold text-[#2D3748]">
                <Calendar size={18} className="mt-0.5 shrink-0 text-[#F5A623]" />
                Chaque Bilan est réalisé sur mesure par notre équipe.
              </p>
              <p className="mt-2 text-[15px] text-[#2D3748]">
                Nombre de créneaux limité chaque mois. Les installations commandées avant fin avril seront opérationnelles pour l'été — pic de production solaire.
              </p>
            </div>

            <p className="mt-6 flex items-center gap-2 text-[15px] text-[#718096]">
              <Phone size={16} />
              Ou appelez-nous directement :{" "}
              <a href="tel:0448060443" className="font-bold text-[#1B2A4A] transition hover:underline">04 48 06 04 43</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarFormB;