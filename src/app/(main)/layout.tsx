"use client";

import { LeadFormProvider } from "@/components/lead/LeadFormContext";
import LeadFormModal from "@/components/lead/LeadFormModal";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LeadFormProvider>
      <LeadFormModal />
      {children}
    </LeadFormProvider>
  );
}
