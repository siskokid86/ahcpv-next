"use client";

import { Sun, Zap, Shield, Wrench } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  { icon: Sun, title: "Panneaux Solaires", desc: "Installation complète" },
  { icon: Zap, title: "Onduleurs", desc: "Matériel de qualité" },
  { icon: Shield, title: "Garantie 25 ans", desc: "Protection longue durée" },
  { icon: Wrench, title: "Maintenance", desc: "Suivi régulier inclus" },
];

const ServicesPV = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="bg-card py-20">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="scroll-fade-up mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-warning px-4 py-1.5 text-sm font-medium text-foreground">
            Nos services
          </span>
          <h2 className="text-3xl text-foreground md:text-4xl">
            Une solution complète pour votre maison
          </h2>
        </div>

        <div className="scroll-fade-up grid grid-cols-2 gap-6 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-warning/20">
                  <Icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPV;