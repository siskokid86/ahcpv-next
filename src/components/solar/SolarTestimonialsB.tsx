"use client";

import { useEffect } from "react";

const SolarTestimonialsB = () => {
  useEffect(() => {
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="bg-[#F7F8FA] py-20 md:py-[120px]">
      <div className="mx-auto max-w-[1120px] px-5 md:px-10">
        <h2
          className="text-center text-[28px] font-bold text-[#1B2A4A] md:text-[40px]"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Ils ont fait leur Bilan Solaire.
        </h2>
        <p className="mt-4 text-center text-lg text-[#718096]">
          Et ils savent exactement combien ils économisent.
        </p>

        <div className="mt-12">
          <div
            className="elfsight-app-f2881327-39af-40e9-be20-ea37ef533889"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
};

export default SolarTestimonialsB;