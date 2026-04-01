"use client";

import { ArrowRight, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const scrollToForm = () => {
  document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth" });
};

function useCountUp(target: number, duration = 2000) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            setValue(Math.round(p * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return { ref, value };
}

const SolarHero = () => {
  const c1 = useCountUp(1557);
  const c2 = useCountUp(20);

  return (
    <section id="hero" className="bg-white py-16 md:py-24">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-12 px-5 md:flex-row md:gap-16 md:px-10">
        {/* Text */}
        <div className="w-full md:w-[55%]">
          <span className="inline-block rounded-full bg-[#F5A623]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#F5A623]">
            Bureau d'études solaire indépendant
          </span>

          <h1 className="mt-6 text-[40px] font-bold leading-[1.15] text-[#1B2A4A] md:text-[56px]" style={{ fontFamily: "Playfair Display, serif" }}>
            Combien allez-vous<br />
            <span className="text-[#F5A623]">vraiment</span> économiser ?
          </h1>

          <p className="mt-5 text-xl text-[#718096]">
            Amélioration Habitat Conseil analyse votre consommation réelle, étudie votre toiture et s'engage par écrit sur un montant d'économies mensuelles. Pas une estimation. Un engagement.
          </p>

          {/* Proof */}
          <div className="mt-8 flex items-center gap-6 md:gap-8">
            {[
              { val: c1, label: "installations" },
              { val: c2, label: "d'expérience", suffix: " ans" },
              { val: null, label: "résultat 12 mois", text: "Garantie" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 md:gap-8">
                {i > 0 && <div className="h-10 w-px bg-[#E2E8F0]" />}
                <div className="text-center">
                  {item.val ? (
                    <span ref={item.val.ref} className="block text-[28px] font-bold text-[#1B2A4A]">
                      {item.val.value.toLocaleString("fr-FR")}{item.suffix || ""}
                    </span>
                  ) : (
                    <span className="block text-[28px] font-bold text-[#1B2A4A]">{item.text}</span>
                  )}
                  <span className="text-sm text-[#718096]">{item.label}</span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollToForm}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#F5A623] px-10 py-4 text-lg font-bold text-white shadow-[0_4px_12px_rgba(245,166,35,0.3)] transition hover:scale-[1.02] hover:bg-[#E09010] active:scale-[0.98] md:w-auto"
          >
            Demander mon Bilan Solaire Gratuit <ArrowRight size={20} />
          </button>

          <p className="mt-3 flex items-center gap-1.5 text-sm text-[#718096]">
            <Clock size={14} /> Réponse sous 48h — Gratuit, sans engagement
          </p>
        </div>

        {/* Image */}
        <div className="hidden w-[45%] md:block">
          <img
            src="/images/solar-hero-patrick.jpg"
            alt="Expert AHC tenant un Bilan Solaire devant une maison avec panneaux solaires"
            width={640}
            height={800}
            className="rounded-[20px] object-cover shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
            style={{ aspectRatio: "4/5" }}
          />
        </div>
      </div>
    </section>
  );
};

export default SolarHero;