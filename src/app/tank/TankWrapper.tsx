"use client";

import dynamic from "next/dynamic";

const TankClient = dynamic(() => import("@/components/pages/Tank"), { ssr: false });

export default function TankWrapper() {
  return <TankClient />;
}
