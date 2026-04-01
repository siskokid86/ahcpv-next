"use client";

import dynamic from "next/dynamic";

const TankSimuClient = dynamic(() => import("@/components/pages/TankSimu"), { ssr: false });

export default function TankSimuWrapper() {
  return <TankSimuClient />;
}
