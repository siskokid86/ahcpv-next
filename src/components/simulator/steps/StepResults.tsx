"use client";

import { useState, useRef, useEffect } from "react";
import { SimulatorData, computeSolarEstimate, billToAnnual } from "../simulatorTypes";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Sun, Zap, Leaf, Lock, Loader2, Battery, PanelTop } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useRouter } from "next/navigation";

function getCookie(name: string): string {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : "";
}

interface Props {
  data: SimulatorData;
  setField: <K extends keyof SimulatorData>(key: K, value: SimulatorData[K]) => void;
}

const savingsYears = [10, 15, 20, 25, 30] as const;

const StepResults = ({ data, setField }: Props) => {
  const router = useRouter();
  const formStartTime = useRef(Date.now());
  const [submitting, setSubmitting] = useState(false);
  const [withBattery, setWithBattery] = useState(true);
  const [selectedYears, setSelectedYears] = useState<number>(10);

  useEffect(() => {
    formStartTime.current = Date.now();
  }, []);

  const estimate = computeSolarEstimate(data, withBattery);

  const isValid =
    data.firstName.trim() &&
    data.lastName.trim() &&
    data.phone.trim() &&
    data.email.trim() &&
    data.gdprConsent;

  const handleSubmit = async () => {
    const honeypot = (document.getElementById("sim-website") as HTMLInputElement)?.value;
    if (honeypot) return;
    if (Date.now() - formStartTime.current < 3000) return;

    setSubmitting(true);

    const payload = {
      nom: data.lastName,
      prenom: data.firstName,
      telephone: data.phone,
      email: data.email,
      code_postal: data.postalCode,
      ville: data.city,
      adresse: data.address,
      type_logement: "maison",
      orientation: data.orientation,
      inclinaison: data.inclinaison,
      chauffage: data.heatingType,
      facture_annuelle: data.monthlyBill ? billToAnnual[data.monthlyBill] : 0,
      equipements: [
        data.hasEV && "véhicule_électrique",
        data.hasChargingStation && "borne_recharge",
        data.hasPool && "piscine",
        data.hasAC && "climatisation",
        data.hasHeatPump && "pompe_à_chaleur",
        data.hasDishwasher && "lave_vaisselle",
        data.hasDryer && "sèche_linge",
        data.hasWaterHeater && "chauffe_eau",
      ].filter(Boolean).join(", "),
      option_batterie: withBattery ? "oui" : "non",
      puissance_recommandee: estimate.recommendedKwc + "kWc",
      source: "simulateur",
      utm_source: getCookie("utm_source"),
      utm_medium: getCookie("utm_medium"),
      utm_campaign: getCookie("utm_campaign"),
      gclid: getCookie("gclid"),
      wbraid: getCookie("wbraid"),
      gbraid: getCookie("gbraid"),
      submitted_at: new Date().toISOString(),
    };


    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Lead submission error:", err);
    }

    // Save estimate for thank you page
    sessionStorage.setItem("sim_estimate", JSON.stringify({
      recommendedKwc: estimate.recommendedKwc,
      savingsAnnual: estimate.savingsAnnual,
      totalProduction: estimate.totalProduction,
    }));
    sessionStorage.setItem("sim_submitted_at", new Date().toISOString());
    sessionStorage.removeItem("sim_progress");

    setSubmitting(false);
    router.push("/tank-simu");
  };

  const monthlyBefore = Math.round(estimate.annualBill / 12);
  const monthlyAfter = Math.round(estimate.annualBillAfter / 12);

  return (
    <div className="animate-in fade-in duration-300">
      {/* Header */}
      <div className="mb-6 text-center">
        <h2 className="mb-1 text-2xl font-bold text-foreground sm:text-3xl">
          Votre simulation solaire
        </h2>
        <p className="text-sm text-muted-foreground">
          {data.city} ({data.postalCode})
        </p>
      </div>

      {/* Key metrics */}
      <div className="mb-6 grid grid-cols-3 gap-3">
        <div className="flex flex-col items-center rounded-xl bg-primary/5 p-4">
          <Sun className="mb-1 h-6 w-6 text-amber-500" />
          <span className="text-lg font-bold text-foreground sm:text-xl">{estimate.sunlightHours}h</span>
          <span className="text-[11px] text-muted-foreground text-center">Ensoleillement</span>
        </div>
        <div className="flex flex-col items-center rounded-xl bg-primary/5 p-4">
          <Zap className="mb-1 h-6 w-6 text-primary" />
          <span className="text-lg font-bold text-foreground sm:text-xl">{estimate.totalProduction.toLocaleString()}</span>
          <span className="text-[11px] text-muted-foreground text-center">kWh/an</span>
        </div>
        <div className="flex flex-col items-center rounded-xl bg-primary/5 p-4">
          <Leaf className="mb-1 h-6 w-6 text-green-500" />
          <span className="text-lg font-bold text-foreground sm:text-xl">{estimate.co2Saved} kg</span>
          <span className="text-[11px] text-muted-foreground text-center">CO₂ évité</span>
        </div>
      </div>

      {/* Battery toggle */}
      <div className="mb-6">
        <div className="flex rounded-xl border border-border overflow-hidden">
          <button
            onClick={() => setWithBattery(false)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-colors ${
              !withBattery
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            <PanelTop className="h-4 w-4" />
            Panneaux solaires
          </button>
          <button
            onClick={() => setWithBattery(true)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-colors ${
              withBattery
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            <Battery className="h-4 w-4" />
            Panneaux + batterie
          </button>
        </div>
      </div>

      {/* Cumulative savings */}
      <div className="mb-6">
        <h3 className="mb-3 text-sm font-semibold text-foreground">
          Vos économies cumulées au bout de
        </h3>
        <div className="flex gap-1 mb-4 overflow-x-auto">
          {savingsYears.map((y) => (
            <button
              key={y}
              onClick={() => setSelectedYears(y)}
              className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition-colors whitespace-nowrap ${
                selectedYears === y
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {y} ans
            </button>
          ))}
        </div>
        <div className="flex items-center justify-center rounded-xl border-2 border-primary/30 bg-primary/5 py-6">
          <span className="text-4xl font-bold text-primary sm:text-5xl">
            {estimate.cumulativeSavings(selectedYears).toLocaleString()} €
          </span>
        </div>
        <p className="mt-2 text-[11px] text-muted-foreground text-center">
          Incluant la hausse moyenne de 5%/an du prix de l'électricité (source : historique tarif réglementé, CRE)
        </p>
      </div>

      {/* Annual bill comparison */}
      <div className="mb-6">
        <h3 className="mb-3 text-sm font-semibold text-foreground">
          Estimation de votre facture mensuelle
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col items-center rounded-xl border border-border bg-card p-4">
            <span className="text-xs text-muted-foreground mb-1">Sans solaire</span>
            <span className="text-2xl font-bold text-foreground">{monthlyBefore} €</span>
            <span className="text-xs text-muted-foreground">/mois</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border-2 border-primary/30 bg-primary/5 p-4">
            <span className="text-xs text-primary mb-1 font-semibold">Avec solaire</span>
            <span className="text-2xl font-bold text-primary">{monthlyAfter} €</span>
            <span className="text-xs text-muted-foreground">/mois</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="mb-8">
        <h3 className="mb-3 text-sm font-semibold text-foreground">
          Évolution de votre facture annuelle
        </h3>
        <p className="mb-3 text-xs text-muted-foreground">
          Avec une hausse du prix de l'électricité de 4% par an
        </p>
        <div className="h-[220px] sm:h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={estimate.chartData} barGap={2}>
              <XAxis dataKey="year" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `${v} €`} width={60} />
              <Tooltip
                formatter={(value: number, name: string) => [
                  `${value} €`,
                  name === "sans" ? "Sans installation solaire" : "Avec installation solaire",
                ]}
                labelFormatter={(label) => `Année ${label}`}
                itemStyle={{ color: "hsl(var(--foreground))" }}
              />
              <Legend
                wrapperStyle={{ fontSize: "11px" }}
                formatter={(value) =>
                  value === "sans" ? (
                    <span style={{ color: "hsl(var(--foreground))" }}>Sans installation solaire</span>
                  ) : (
                    <span style={{ color: "hsl(var(--primary))" }}>Avec installation solaire</span>
                  )
                }
              />
              <Bar dataKey="sans" fill="hsl(var(--muted-foreground) / 0.3)" radius={[4, 4, 0, 0]} name="sans" />
              <Bar dataKey="avec" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} name="avec" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Gated devis section */}
      <div className="rounded-2xl border-2 border-primary/30 bg-gradient-to-b from-primary/5 to-transparent p-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Lock className="h-5 w-5 text-primary" />
          </div>
        </div>
        <h3 className="text-center text-lg font-bold text-foreground mb-1">
          Débloquez votre devis personnalisé
        </h3>
        <p className="text-center text-xs text-muted-foreground mb-6">
          Recevez votre étude complète et soyez rappelé par un expert
        </p>

        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Input
              placeholder="Prénom"
              value={data.firstName}
              onChange={(e) => setField("firstName", e.target.value)}
            />
            <Input
              placeholder="Nom"
              value={data.lastName}
              onChange={(e) => setField("lastName", e.target.value)}
            />
          </div>
          <Input
            type="tel"
            placeholder="Téléphone"
            value={data.phone}
            onChange={(e) => setField("phone", e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setField("email", e.target.value)}
          />
          {/* Honeypot */}
          <input
            type="text"
            id="sim-website"
            name="website"
            autoComplete="off"
            tabIndex={-1}
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
          />
          <div className="flex items-start gap-2 pt-1">
            <Checkbox
              id="sim-gdpr"
              checked={data.gdprConsent}
              onCheckedChange={(v) => setField("gdprConsent", v === true)}
            />
            <label htmlFor="sim-gdpr" className="text-xs leading-tight text-muted-foreground cursor-pointer">
              J'accepte d'être contacté par Amélioration Habitat Conseil concernant mon projet solaire.{" "}
              <a href="/privacy-policy" target="_blank" className="text-primary hover:underline">
                Politique de confidentialité
              </a>
            </label>
          </div>
          <button
            onClick={handleSubmit}
            disabled={!isValid || submitting}
            className="cta-pulse flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 font-semibold text-primary-foreground shadow-[var(--shadow-primary)] transition-all hover:opacity-90 disabled:pointer-events-none disabled:opacity-50"
          >
            {submitting ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <>
                <Lock className="h-4 w-4" />
                Recevoir mon devis personnalisé
              </>
            )}
          </button>
          <p className="text-center text-xs text-muted-foreground">
            🔒 Gratuit • Sans engagement • Rappel sous 24h
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepResults;