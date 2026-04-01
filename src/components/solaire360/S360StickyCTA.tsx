"use client";

import { useEffect, useState } from "react";

const S360StickyCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const scrollToForm = () => {
    document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 bg-white p-3 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <button
        onClick={scrollToForm}
        className="w-full rounded-lg bg-[#f5a623] py-3.5 text-base font-bold text-white"
      >
        Estimer mes économies
      </button>
    </div>
  );
};

export default S360StickyCTA;