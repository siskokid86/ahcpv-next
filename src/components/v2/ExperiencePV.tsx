"use client";

import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLeadForm } from "@/components/lead/LeadFormContext";

const points = [
  "Panneaux et onduleurs garantis jusqu'à 30 ans",
  "Certifiés RGE – QualiPV – Assurance décennale",
  "Implantation locale dans toute l'Occitanie",
];

const ExperiencePV = () => {
  const sectionRef = useScrollAnimation();
  const { openLeadForm } = useLeadForm();

  return (
    <section ref={sectionRef} className="bg-muted py-20">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Colonne gauche : vidéo + certifications */}
          <div className="scroll-fade-up space-y-6">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              >
                <source src="/images/video-solaire-3.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/certifications.png"
                alt="Certifications RGE QualiPV Garantie Décennale"
                className="max-h-16 object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Colonne droite : texte */}
          <div className="scroll-fade-up space-y-6">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Plus de <span className="gradient-text">20 ans d'expérience</span>
            </h2>
            <p className="text-foreground/90">
              Amélioration Habitat Conseil, c'est plus de 20 ans d'expérience dans le photovoltaïque.
            </p>
            <p className="text-muted-foreground">
              Panneaux DualSun, fabriqués en France, issus d'usines partenaires classées Tier 1.
            </p>

            <ul className="space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="font-semibold text-foreground">{p}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <button
                onClick={() => openLeadForm()}
                className="cta-pulse inline-block rounded-xl bg-primary px-10 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-primary)] transition-all hover:opacity-90"
              >
                Obtenir mon estimation gratuite
              </button>
              <p className="mt-3 text-sm text-muted-foreground">Service gratuit | Sans engagement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePV;