"use client";

import { useState, useRef, useEffect } from "react";
import { Check, X, ArrowLeft, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";

type Step = 1 | 2 | 3;
type Screen = Step | "disqualified" | "confirmed";

interface FormData {
  monthlyBill: "less-100" | "100-150" | "150-200" | "more-200" | null;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  postalCode: string;
  gdprConsent: boolean;
}

const billToAnnual: Record<string, number> = {
  "less-100": 1000,
  "100-150": 1500,
  "150-200": 2100,
  "more-200": 3000,
};

function getCookie(name: string): string {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : "";
}

interface LeadFormStepsProps {
  initialPostalCode?: string;
  onComplete?: () => void;
  mode: "page" | "modal";
}

const LeadFormSteps = ({ initialPostalCode = "", onComplete, mode }: LeadFormStepsProps) => {
  const router = useRouter();
  const formStartTime = useRef(Date.now());
  const [screen, setScreen] = useState<Screen>(1);
  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState<FormData>({
    monthlyBill: null,
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    postalCode: initialPostalCode || (typeof window !== "undefined" ? sessionStorage.getItem("cp") : null) || "",
    gdprConsent: false,
  });

  useEffect(() => {
    formStartTime.current = Date.now();
  }, []);

  const stepNumber = typeof screen === "number" ? screen : null;
  const progressPercent = stepNumber ? (stepNumber / 3) * 100 : 0;

  const setField = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    // Honeypot check
    const honeypot = (document.getElementById("lead-website") as HTMLInputElement)?.value;
    if (honeypot) return;

    // Speed check (< 3s = bot)
    if (Date.now() - formStartTime.current < 3000) return;

    setSubmitting(true);

    const ville = sessionStorage.getItem("ville") || "";

    const payload = {
      nom: data.lastName,
      prenom: data.firstName,
      telephone: data.phone,
      email: data.email,
      code_postal: data.postalCode,
      type_logement: "maison",
      facture_annuelle: data.monthlyBill ? billToAnnual[data.monthlyBill] : 0,
      ville,
      utm_source: getCookie("utm_source"),
      utm_medium: getCookie("utm_medium"),
      utm_campaign: getCookie("utm_campaign"),
      gclid: getCookie("gclid"),
      wbraid: getCookie("wbraid"),
      gbraid: getCookie("gbraid"),
      submitted_at: new Date().toISOString(),
    };

    // Google Ads conversion tracking (once per session)
    if (!sessionStorage.getItem("conversion_tracked")) {
      try {
        if (typeof (window as any).gtag === "function") {
          (window as any).gtag("event", "conversion", {
            send_to: "AW-11176357292/1weaCMTvyKkbEKzbptEp",
          });
        }
        sessionStorage.setItem("conversion_tracked", "1");
      } catch {}
    }

    // Send to API route (proxied to Zapier)
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Lead submission error:", err);
    }

    setSubmitting(false);

    if (mode === "page") {
      router.push("/tank");
    } else {
      setScreen("confirmed");
    }
  };

  const isStep3Valid =
    data.firstName.trim() &&
    data.lastName.trim() &&
    data.phone.trim() &&
    data.email.trim() &&
    data.postalCode.trim().length === 5 &&
    data.gdprConsent;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
      {/* Progress bar */}
      {stepNumber && (
        <Progress value={progressPercent} className="h-1 rounded-none" />
      )}

      <div className="p-6 sm:p-8">
        {/* Step 1 — Owner qualification */}
        {screen === 1 && (
          <div className="animate-in fade-in duration-300">
            <div className="mb-4 flex justify-center">
              <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                Pour propriétaires de maison individuelle uniquement
              </span>
            </div>
            <h2 className="mb-6 text-center text-2xl font-bold text-foreground sm:text-3xl">
              Êtes-vous propriétaire d'une maison individuelle ?
            </h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setScreen(2)}
                className="group flex items-center gap-2 rounded-xl border border-border px-8 py-4 font-semibold transition-all hover:border-primary hover:shadow-md"
              >
                <Check className="h-5 w-5 text-green-500 transition-transform group-hover:scale-110" />
                Oui
              </button>
              <button
                onClick={() => setScreen("disqualified")}
                className="group flex items-center gap-2 rounded-xl border border-border px-8 py-4 font-semibold transition-all hover:border-destructive hover:shadow-md"
              >
                <X className="h-5 w-5 text-muted-foreground transition-transform group-hover:scale-110" />
                Non
              </button>
            </div>
          </div>
        )}

        {/* Step 2 — Monthly bill */}
        {screen === 2 && (
          <div className="animate-in fade-in duration-300">
            <h2 className="mb-6 text-center text-2xl font-bold text-foreground sm:text-3xl">
              Facture d'électricité mensuelle moyenne ?
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {([
                { value: "less-100", label: "Moins de 100€" },
                { value: "100-150", label: "100 - 150€" },
                { value: "150-200", label: "150 - 200€" },
                { value: "more-200", label: "Plus de 200€" },
              ] as const).map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => { setField("monthlyBill", opt.value); setScreen(3); }}
                  className="rounded-xl border border-border p-4 font-semibold transition-all hover:border-primary hover:shadow-md"
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <button onClick={() => setScreen(1)} className="mt-6 flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground mx-auto">
              <ArrowLeft className="h-4 w-4" /> Retour
            </button>
          </div>
        )}

        {/* Step 3 — Contact details */}
        {screen === 3 && (
          <div className="animate-in fade-in duration-300">
            <h2 className="mb-1 text-center text-2xl font-bold text-foreground sm:text-3xl">
              Plus qu'une étape !
            </h2>
            <p className="mb-6 text-center text-sm text-muted-foreground">
              Recevez votre estimation détaillée et soyez rappelé par un expert
            </p>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Input
                  placeholder="Prénom"
                  value={data.firstName}
                  onChange={(e) => setField("firstName", e.target.value)}
                  required
                />
                <Input
                  placeholder="Nom"
                  value={data.lastName}
                  onChange={(e) => setField("lastName", e.target.value)}
                  required
                />
              </div>
              <Input
                type="tel"
                placeholder="Téléphone"
                value={data.phone}
                onChange={(e) => setField("phone", e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={data.email}
                onChange={(e) => setField("email", e.target.value)}
                required
              />
              <Input
                placeholder="Code postal"
                value={data.postalCode}
                onChange={(e) => setField("postalCode", e.target.value.replace(/\D/g, "").slice(0, 5))}
                maxLength={5}
                required
              />
              {/* Honeypot */}
              <input
                type="text"
                id="lead-website"
                name="website"
                autoComplete="off"
                tabIndex={-1}
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />
              {/* Hidden UTM / gclid fields */}
              <input type="hidden" name="utm_source" value={getCookie("utm_source")} />
              <input type="hidden" name="utm_medium" value={getCookie("utm_medium")} />
              <input type="hidden" name="utm_campaign" value={getCookie("utm_campaign")} />
              <input type="hidden" name="utm_term" value={getCookie("utm_term")} />
              <input type="hidden" name="utm_content" value={getCookie("utm_content")} />
              <input type="hidden" name="gclid" value={getCookie("gclid")} />
              <input type="hidden" name="wbraid" value={getCookie("wbraid")} />
              <input type="hidden" name="gbraid" value={getCookie("gbraid")} />
              <div className="flex items-start gap-2 pt-1">
                <Checkbox
                  id="gdpr"
                  checked={data.gdprConsent}
                  onCheckedChange={(v) => setField("gdprConsent", v === true)}
                />
                <label htmlFor="gdpr" className="text-xs leading-tight text-muted-foreground cursor-pointer">
                  J'accepte d'être contacté par Amélioration Habitat Conseil concernant mon projet solaire.{" "}
                  <a href="/privacy-policy" target="_blank" className="text-primary hover:underline">
                    Politique de confidentialité
                  </a>
                </label>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              disabled={!isStep3Valid || submitting}
              className="cta-pulse mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 font-semibold text-primary-foreground shadow-[var(--shadow-primary)] transition-all hover:opacity-90 disabled:pointer-events-none disabled:opacity-50"
            >
              {submitting ? <Loader2 className="h-5 w-5 animate-spin" /> : "Recevoir mon estimation"}
            </button>
            <button onClick={() => setScreen(2)} className="mt-4 flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground mx-auto">
              <ArrowLeft className="h-4 w-4" /> Retour
            </button>
          </div>
        )}

        {/* Disqualified screen */}
        {screen === "disqualified" && (
          <div className="animate-in fade-in duration-300 text-center py-6">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
              <X className="h-8 w-8 text-destructive" />
            </div>
            <h2 className="mb-3 text-xl font-bold text-foreground">
              Désolé !
            </h2>
            <p className="text-muted-foreground">
              Notre offre s'adresse uniquement aux propriétaires de maisons individuelles.
            </p>
            <button
              onClick={() => setScreen(1)}
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" /> Recommencer
            </button>
          </div>
        )}

        {/* Confirmed screen (modal only) */}
        {screen === "confirmed" && (
          <div className="animate-in fade-in duration-300 text-center py-6">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mb-3 text-xl font-bold text-foreground">
              Merci !
            </h2>
            <p className="text-muted-foreground">
              Votre demande a bien été envoyée. Un conseiller vous rappellera sous 24h.
            </p>
            {onComplete && (
              <button
                onClick={onComplete}
                className="mt-6 rounded-xl bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Fermer
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadFormSteps;