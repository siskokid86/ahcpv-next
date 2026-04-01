"use client";

import { useState } from "react";
import { ArrowRight, Lock, Calendar, Phone, MapPin, CheckCircle, Check } from "lucide-react";

const SolarForm = () => {
  const [cp, setCp] = useState("");
  const [facture, setFacture] = useState("");
  const [projet, setProjet] = useState("");
  const [tel, setTel] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ cp, facture, projet, tel });
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-[10px] border border-[#E2E8F0] bg-[#F7F8FA] px-4 py-3.5 pl-10 text-base text-[#2D3748] outline-none transition focus:border-[#F5A623] focus:shadow-[0_0_0_3px_rgba(245,166,35,0.1)]";

  return (
    <section id="formulaire" className="bg-white py-20 md:py-[120px]">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-12 px-5 md:flex-row md:gap-16 md:px-10">
        {/* Left */}
        <div className="w-full md:w-1/2">
          <h2 className="text-[28px] font-bold leading-tight text-[#1B2A4A] md:text-[40px]" style={{ fontFamily: "Playfair Display, serif" }}>
            Votre Bilan Solaire Personnalisé.<br />
            <span className="text-[#1B2A4A]">Gratuit. Sans engagement.</span>
          </h2>

          <ul className="mt-8 flex flex-col gap-3">
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

          <div className="mt-8 rounded-xl border border-[#F5A623] bg-[#FFF9ED] p-5">
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

        {/* Right - Form */}
        <div className="w-full md:w-1/2">
          <div className="rounded-[20px] border border-[#E2E8F0] bg-white p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)] md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center py-10 text-center">
                <CheckCircle size={48} className="animate-bounce text-[#38A169]" />
                <p className="mt-4 text-xl font-bold text-[#38A169]">
                  Merci. Notre équipe vous contacte sous 48h pour planifier votre Bilan Solaire.
                </p>
              </div>
            ) : (
              <>
                <h3 className="mb-6 text-center text-[22px] font-bold text-[#1B2A4A]">Recevoir mon Bilan Solaire</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-[#2D3748]">Votre code postal</label>
                    <div className="relative">
                      <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#718096]" />
                      <input type="text" required placeholder="ex: 31320" value={cp} onChange={(e) => setCp(e.target.value)} className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-[#2D3748]">Votre facture EDF mensuelle</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#718096]">€</span>
                      <select value={facture} onChange={(e) => setFacture(e.target.value)} className={inputClass}>
                        <option value="">Sélectionnez...</option>
                        <option>Moins de 100 €/mois</option>
                        <option>100 - 150 €/mois</option>
                        <option>150 - 200 €/mois</option>
                        <option>Plus de 200 €/mois</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-[#2D3748]">Votre projet</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#718096]">☀</span>
                      <select value={projet} onChange={(e) => setProjet(e.target.value)} className={inputClass}>
                        <option value="">Sélectionnez...</option>
                        <option>Première installation solaire</option>
                        <option>Ajout batterie ou extension</option>
                        <option>Je ne sais pas encore</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-[#2D3748]">Votre numéro de téléphone</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#718096]" />
                      <input type="tel" required placeholder="06 XX XX XX XX" value={tel} onChange={(e) => setTel(e.target.value)} className={inputClass} />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#F5A623] py-4 text-lg font-bold text-white shadow-[0_4px_12px_rgba(245,166,35,0.3)] transition hover:bg-[#E09010] hover:shadow-lg active:scale-[0.98]"
                  >
                    Recevoir mon Bilan Solaire Gratuit <ArrowRight size={18} />
                  </button>

                  <div className="mt-1 text-center text-[13px] text-[#718096]">
                    <p className="flex items-center justify-center gap-1"><Lock size={12} /> Vos informations restent confidentielles</p>
                    <p>Réponse sous 48h</p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarForm;