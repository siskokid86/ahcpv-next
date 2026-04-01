"use client";

import { Gift, ArrowRight } from "lucide-react";

const getPromoEndDate = () => {
  const now = new Date();
  const end = new Date(now.getFullYear(), now.getMonth() + 3, 0);
  return end.toLocaleDateString("fr-FR");
};

const TopBannerV2 = () => {
  const promoEnd = getPromoEndDate();

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-primary py-2.5">
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="relative flex h-5 w-5 items-center justify-center">
            <Gift className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-sm font-semibold text-primary-foreground">
            2 ans de batterie virtuelle offerts*
          </span>
          <span className="hidden text-sm text-primary-foreground/80 sm:inline">
            | Offre valable jusqu'au {promoEnd}
          </span>
        </div>
        <a
          href="#offre"
          className="flex items-center gap-2 rounded-full border border-primary-foreground/30 px-4 py-1 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
        >
          En profiter
          <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
};

export default TopBannerV2;