export type Orientation = "nord-sud" | "est-ouest" | "nord-est-sud-ouest" | "nord-ouest-sud-est" | null;
export type Inclinaison = "plat" | "faible" | "moyenne" | "forte" | null;
export type MonthlyBill = "less-80" | "80-120" | "120-180" | "180-250" | "more-250" | null;
export type HeatingType = "electrique" | "pompe-a-chaleur" | "gaz" | "fioul" | "bois" | "autre" | null;

export interface SimulatorData {
  // Address
  address: string;
  postalCode: string;
  city: string;
  lat: number | null;
  lng: number | null;
  // Qualification
  isOwner: boolean | null;
  // Roof
  orientation: Orientation;
  inclinaison: Inclinaison;
  // Heating
  heatingType: HeatingType;
  // Bill
  monthlyBill: MonthlyBill;
  // Equipment
  hasEV: boolean;
  hasChargingStation: boolean;
  hasPool: boolean;
  hasAC: boolean;
  hasHeatPump: boolean;
  hasDishwasher: boolean;
  hasDryer: boolean;
  hasWaterHeater: boolean;
  // Contact (gated)
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  gdprConsent: boolean;
}

export const defaultSimulatorData: SimulatorData = {
  address: "",
  postalCode: "",
  city: "",
  lat: null,
  lng: null,
  isOwner: null,
  orientation: null,
  inclinaison: null,
  heatingType: null,
  monthlyBill: null,
  hasEV: false,
  hasChargingStation: false,
  hasPool: false,
  hasAC: false,
  hasHeatPump: false,
  hasDishwasher: false,
  hasDryer: false,
  hasWaterHeater: false,
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  gdprConsent: false,
};

export const billToAnnual: Record<string, number> = {
  "less-80": 800,
  "80-120": 1200,
  "120-180": 1800,
  "180-250": 2600,
  "more-250": 3600,
};

export function computeSolarEstimate(data: SimulatorData, withBattery = false) {
  const annualBill = data.monthlyBill ? billToAnnual[data.monthlyBill] : 1500;

  const orientationFactor: Record<string, number> = {
    "nord-sud": 1.0,
    "est-ouest": 0.85,
    "nord-est-sud-ouest": 0.93,
    "nord-ouest-sud-est": 0.93,
  };
  const oFactor = data.orientation ? orientationFactor[data.orientation] : 0.9;

  const inclinaisonFactor: Record<string, number> = {
    plat: 0.85,
    faible: 0.92,
    moyenne: 1.0,
    forte: 0.9,
  };
  const iFactor = data.inclinaison ? inclinaisonFactor[data.inclinaison] : 0.95;

  const baseProductionPerKwc = 1350;
  const production = baseProductionPerKwc * oFactor * iFactor;

  const recommendedKwc = annualBill <= 1000 ? 3 : annualBill <= 1800 ? 6 : 9;
  const totalProduction = Math.round(production * recommendedKwc);

  // Autoconsumption
  let autoConsumptionRate = 0.40
    + (data.hasPool ? 0.05 : 0)
    + (data.hasAC ? 0.05 : 0)
    + (data.hasEV ? 0.08 : 0)
    + (data.hasChargingStation ? 0.04 : 0)
    + (data.hasHeatPump ? 0.05 : 0)
    + (data.hasDishwasher ? 0.02 : 0)
    + (data.hasDryer ? 0.02 : 0)
    + (data.hasWaterHeater ? 0.03 : 0)
    + (data.heatingType === "electrique" ? 0.08 : 0)
    + (data.heatingType === "pompe-a-chaleur" ? 0.06 : 0);

  if (withBattery) {
    autoConsumptionRate += 0.18;
  }
  const effectiveRate = Math.min(autoConsumptionRate, withBattery ? 0.80 : 0.65);

  // Price of kWh
  const priceKwh = 0.2516;
  const resalePrice = 0.13;

  // Savings = self-consumed production savings + surplus resale
  const rawSavings = Math.round(
    totalProduction * priceKwh * effectiveRate +
    totalProduction * (1 - effectiveRate) * resalePrice
  );
  // Cap savings: can't save more than bill minus minimum grid costs (subscription + winter residual)
  const minAnnualCost = 180; // ~15€/mois abonnement + résiduel
  const maxSavings = Math.max(annualBill - minAnnualCost, 0);
  const savingsAnnual = Math.min(rawSavings, maxSavings);
  const savingsPercent = Math.min(Math.round((savingsAnnual / annualBill) * 100), withBattery ? 80 : 65);

  const co2Saved = Math.round(totalProduction * 0.05);
  const sunlightHours = 2150;

  // Price estimate
  let priceEstimate = recommendedKwc === 3 ? 8500 : recommendedKwc === 6 ? 14500 : 19500;
  if (withBattery) priceEstimate += 4000;
  const aides = recommendedKwc === 3 ? 1500 : recommendedKwc === 6 ? 3000 : 4500;
  const roi = Math.round((priceEstimate - aides) / savingsAnnual);

  // Annual bill comparison — floor at minimum grid cost
  const annualBillAfter = Math.max(Math.round(annualBill - savingsAnnual), minAnnualCost);

  // Cumulative savings at N years (with electricity price increase of 5%/year — moyenne historique tarif réglementé EDF 2010-2024)
  const cumulativeSavings = (years: number) => {
    let total = 0;
    for (let y = 1; y <= years; y++) {
      total += savingsAnnual * Math.pow(1.05, y - 1);
    }
    return Math.round(total);
  };

  // Chart data for bill evolution
  const chartData = [];
  const currentYear = new Date().getFullYear();
  for (let y = 0; y < 6; y++) {
    const year = currentYear + 5 + y * 5;
    const factor = Math.pow(1.05, 5 + y * 5);
    chartData.push({
      year: year.toString(),
      sans: Math.round(annualBill * factor),
      avec: Math.round(annualBillAfter * factor),
    });
  }

  return {
    sunlightHours,
    totalProduction,
    co2Saved,
    savingsAnnual,
    savingsPercent,
    recommendedKwc,
    priceEstimate,
    aides,
    roi,
    annualBill,
    annualBillAfter,
    cumulativeSavings,
    chartData,
    effectiveRate: Math.round(effectiveRate * 100),
  };
}
