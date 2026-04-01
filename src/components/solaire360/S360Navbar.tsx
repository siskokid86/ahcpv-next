"use client";

const S360Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white shadow-sm">
    <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-5">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-[#1a2b4a]">AHC</span>
        <span className="hidden text-xs text-[#4a5568] sm:inline">Amélioration Habitat Conseil</span>
      </div>

      {/* Desktop phone */}
      <a
        href="tel:0448060443"
        className="hidden items-center gap-2 font-semibold text-[#1a2b4a] transition-colors hover:text-[#f5a623] md:flex"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        04 48 06 04 43
      </a>

      {/* Mobile phone icon */}
      <a
        href="tel:0448060443"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5a623] md:hidden"
        aria-label="Appeler"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </a>
    </div>
  </nav>
);

export default S360Navbar;