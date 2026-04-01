"use client";

import { useEffect, useState } from "react";

const SolarStickyCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const obs = new IntersectionObserver(([e]) => setShow(!e.isIntersecting), { threshold: 0 });
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 bg-white p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <button
        onClick={() => document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth" })}
        className="w-full rounded-[10px] bg-[#F5A623] py-3.5 text-base font-bold text-white"
      >
        Demander mon Bilan Solaire
      </button>
    </div>
  );
};

export default SolarStickyCTA;