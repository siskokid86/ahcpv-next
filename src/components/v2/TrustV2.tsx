"use client";

import { useRef, useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLeadForm } from "@/components/lead/LeadFormContext";

const features = [
  "Panneaux et onduleurs garantis jusqu'à 30 ans",
  "Certifiés RGE – QualiPV – Assurance décennale",
  "Implantation locale dans toute l'Occitanie",
];

const TrustV2 = () => {
  const sectionRef = useScrollAnimation();
  const { openLeadForm } = useLeadForm();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-muted py-24" ref={sectionRef}>
      <div className="container mx-auto grid gap-14 px-6 md:grid-cols-2">
        {/* Left – Video & Certifications */}
        <div className="scroll-fade-up flex flex-col items-center gap-8">
          <video
            ref={videoRef}
            src={videoVisible ? "/images/video-solaire-3.mp4" : undefined}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
          <img
            src="/images/certifications.png"
            alt="Certifications RGE QualiPV Garantie Décennale"
            className="max-w-md w-full"
            loading="lazy"
          />
        </div>

        {/* Right – Description */}
        <div className="scroll-fade-up flex flex-col justify-center">
          <h2 className="mb-4 text-3xl text-foreground md:text-4xl">
            Plus de <span className="gradient-text">20 ans d'expérience</span>
          </h2>
          <p className="mb-2 text-lg text-foreground">
            Amélioration Habitat Conseil, c'est plus de 20 ans d'expérience dans le photovoltaïque.
          </p>
          <p className="mb-8 text-muted-foreground">
            Panneaux DualSun, fabriqués en France, issus d'usines partenaires classées Tier 1.
          </p>

          <div className="space-y-4">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="font-semibold text-foreground">{f}</span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <button
              onClick={() => openLeadForm()}
              className="cta-pulse inline-block rounded-xl bg-primary px-10 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-primary)] transition-all hover:opacity-90"
            >
              Obtenir mon estimation gratuite
            </button>
            <p className="mt-3 text-sm text-muted-foreground">
              Service gratuit | Sans engagement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustV2;