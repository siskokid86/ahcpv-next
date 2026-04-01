"use client";

import { Shield, Award, Users, MapPin } from "lucide-react";

const items = [
  { icon: Shield, text: "RGE QualiPV" },
  { icon: Award, text: "Assurance décennale" },
  { icon: Users, text: "11 experts internes" },
  { icon: MapPin, text: "100% Occitanie" },
];

const SolarReassurance = () => (
  <section className="bg-[#1B2A4A] py-6">
    <div className="mx-auto grid max-w-[1120px] grid-cols-2 gap-4 px-5 md:grid-cols-4 md:px-10">
      {items.map((item) => (
        <div key={item.text} className="flex items-center justify-center gap-2 text-white/90">
          <item.icon size={24} />
          <span className="text-sm">{item.text}</span>
        </div>
      ))}
    </div>
  </section>
);

export default SolarReassurance;