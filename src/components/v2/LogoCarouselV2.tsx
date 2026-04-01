"use client";

const logos = [
  "/images/logos/logo-6.jpg",
  "/images/logos/logo-7.jpg",
  "/images/logos/logo-10.jpg",
  "/images/logos/logo-14.jpg",
  "/images/logos/logo-12.jpg",
  "/images/logos/logo-11.jpg",
  "/images/logos/logo-9.jpg",
  "/images/logos/logo-8.jpg",
];

const LogoCarouselV2 = () => {
  return (
    <section className="overflow-hidden bg-white py-10">
      <p className="mb-6 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Nos partenaires de confiance
      </p>
      <div className="relative">
        <div className="logo-carousel-track flex w-max items-center gap-16">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`Partenaire ${(i % logos.length) + 1}`}
              className="h-14 w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarouselV2;