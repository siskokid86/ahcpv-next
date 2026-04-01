"use client";

import { useState } from "react";

const S360Form = () => {
  const [cp, setCp] = useState("");
  const [facture, setFacture] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cp.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="formulaire" className="bg-white py-16 md:py-24">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-12 px-5 md:flex-row md:gap-16">
        {/* Left: Form */}
        <div className="w-full md:w-[60%]">
          <h2 className="text-[28px] font-bold text-[#1a2b4a] md:text-4xl">Estimez vos économies solaires</h2>
          <p className="mt-2 text-base text-[#4a5568]">Réponse personnalisée de Patrick sous 48h. Gratuit et sans engagement.</p>

          {submitted ? (
            <div className="mt-8 flex flex-col items-center rounded-2xl bg-[#f5f6fa] p-10 text-center">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="animate-bounce">
                <circle cx="28" cy="28" r="28" fill="#38a169" opacity=".15" />
                <path d="M18 28l7 7 13-14" stroke="#38a169" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="mt-4 text-xl font-bold text-[#38a169]">Merci, Patrick vous recontacte sous 48h.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6">
              <div>
                <label htmlFor="cp" className="text-sm font-bold text-[#2d3748]">Votre code postal</label>
                <input
                  id="cp"
                  type="text"
                  required
                  placeholder="Ex : 34000"
                  value={cp}
                  onChange={(e) => setCp(e.target.value)}
                  className="mt-1 h-12 w-full rounded-lg border border-[#e2e8f0] bg-[#f5f6fa] pl-4 text-base text-[#2d3748] outline-none transition focus:border-[#f5a623]"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="facture" className="text-sm font-bold text-[#2d3748]">
                  Montant approximatif de votre facture EDF mensuelle (optionnel)
                </label>
                <input
                  id="facture"
                  type="text"
                  placeholder="Ex : 150 €"
                  value={facture}
                  onChange={(e) => setFacture(e.target.value)}
                  className="mt-1 h-12 w-full rounded-lg border border-[#e2e8f0] bg-[#f5f6fa] pl-4 text-base text-[#2d3748] outline-none transition focus:border-[#f5a623]"
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full rounded-lg bg-[#f5a623] py-[18px] text-lg font-bold text-white shadow-md transition hover:bg-[#e6951a] hover:shadow-lg"
              >
                Estimer mes économies gratuitement
              </button>

              <div className="mt-3 flex flex-col gap-1.5 text-[13px] text-[#4a5568]">
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Vos informations restent confidentielles
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Réponse sous 48h
                </span>
              </div>
            </form>
          )}

          {/* Urgency block */}
          {!submitted && (
            <div className="mt-6 rounded-r-lg border-l-[3px] border-[#e53e3e] bg-[#e53e3e]/[.08] p-4">
              <p className="text-sm text-[#2d3748]">
                Patrick réalise chaque étude personnellement. Capacité limitée à 8 études par mois. Les installations posées au printemps produisent dès le premier jour de l'été.
              </p>
            </div>
          )}
        </div>

        {/* Right: Image + info (desktop) */}
        <div className="hidden w-[40%] md:block">
          <img
            src="/images/s360-sunset-house.jpg"
            alt="Maison occitane avec panneaux solaires au coucher du soleil"
            width={640}
            height={854}
            loading="lazy"
            className="rounded-2xl object-cover shadow-lg"
            style={{ aspectRatio: "3/4" }}
          />
          <div className="mt-5">
            <p className="text-[15px] font-bold text-[#1a2b4a]">Les aides diminuent chaque année</p>
            <p className="mt-1 text-sm text-[#4a5568]">
              Prime autoconsommation 2026 : 2 205 € (était 2 340 € en 2025). Chaque année qui passe, c'est de l'argent en moins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default S360Form;