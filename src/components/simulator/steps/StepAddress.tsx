"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { MapPin, Search, Navigation } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SimulatorData } from "../simulatorTypes";

const realisations = [
  { src: "/images/realisations/frontignan.jpg", label: "Frontignan • 6 kWc" },
  { src: "/images/realisations/tournefeuille.jpg", label: "Tournefeuille • 6 kWc" },
  { src: "/images/realisations/daux.jpg", label: "Daux • 5 kWc" },
  { src: "/images/realisations/vindry.jpg", label: "Vindry • 7 kWc" },
  { src: "/images/realisations/saint-marcel.jpg", label: "St-Marcel • 4 kWc" },
  { src: "/images/realisations/gigean.jpg", label: "Gigean • 7 kWc" },
  { src: "/images/realisations/castelmaurou.jpg", label: "Castelmaurou • 12 kWc" },
  { src: "/images/realisations/villemur.jpg", label: "Villemur • 6 kWc" },
  { src: "/images/realisations/marambat.jpg", label: "Marambat • 8.5 kWc" },
  { src: "/images/realisations/agde.jpg", label: "Agde • 6 kWc" },
  { src: "/images/realisations/vic-la-gardiole.jpg", label: "Vic-la-Gardiole • 7 kWc" },
  { src: "/images/realisations/vigoulet.jpg", label: "Vigoulet • 9 kWc" },
];

interface Props {
  data: SimulatorData;
  setField: <K extends keyof SimulatorData>(key: K, value: SimulatorData[K]) => void;
  onNext: () => void;
}

interface Suggestion {
  label: string;
  postcode: string;
  city: string;
  lat: number;
  lng: number;
}

const PhotoGrid = () => {
  const [paused, setPaused] = useState(false);
  const doubledRealisations = [...realisations, ...realisations];
  const col1 = doubledRealisations.filter((_, i) => i % 3 === 0);
  const col2 = doubledRealisations.filter((_, i) => i % 3 === 1);
  const col3 = doubledRealisations.filter((_, i) => i % 3 === 2);

  return (
    <div
      className="relative h-[280px] sm:h-[340px] lg:h-[400px] overflow-hidden rounded-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex gap-2 h-full">
        {[col1, col2, col3].map((col, colIdx) => (
          <div
            key={colIdx}
            className="flex-1 flex flex-col gap-2"
            style={{
              animation: `masonry-scroll-${colIdx % 2 === 0 ? 'up' : 'down'} ${18 + colIdx * 4}s linear infinite`,
              animationPlayState: paused ? 'paused' : 'running',
            }}
          >
            {col.map((r, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl shrink-0"
                style={{ height: `${100 + (i % 3) * 40}px` }}
              >
                <img
                  src={r.src}
                  alt={r.label}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-1.5 left-2 text-[10px] font-medium text-white/90 truncate right-2">
                  {r.label}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background to-transparent z-10" />
      <style>{`
        @keyframes masonry-scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes masonry-scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

const StepAddress = ({ data, setField, onNext }: Props) => {
  const [query, setQuery] = useState(data.address || "");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showMap, setShowMap] = useState(!!data.lat);
  const [loading, setLoading] = useState(false);
  const [addressLocked, setAddressLocked] = useState(!!data.lat);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const searchAddress = useCallback(async (q: string) => {
    if (q.length < 5) { setSuggestions([]); return; }
    try {
      const res = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(q)}&limit=5&type=housenumber`);
      const json = await res.json();
      const results: Suggestion[] = json.features?.map((f: any) => ({
        label: f.properties.label,
        postcode: f.properties.postcode,
        city: f.properties.city,
        lat: f.geometry.coordinates[1],
        lng: f.geometry.coordinates[0],
      })) || [];
      if (results.length === 0) {
        const res2 = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(q)}&limit=5`);
        const json2 = await res2.json();
        const results2: Suggestion[] = json2.features?.map((f: any) => ({
          label: f.properties.label,
          postcode: f.properties.postcode,
          city: f.properties.city,
          lat: f.geometry.coordinates[1],
          lng: f.geometry.coordinates[0],
        })) || [];
        setSuggestions(results2);
      } else {
        setSuggestions(results);
      }
    } catch {
      setSuggestions([]);
    }
  }, []);

  useEffect(() => {
    if (addressLocked) return;
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => searchAddress(query), 300);
    return () => clearTimeout(debounceRef.current);
  }, [query, searchAddress, addressLocked]);

  const selectAddress = (s: Suggestion) => {
    setAddressLocked(true);
    setField("address", s.label);
    setField("postalCode", s.postcode);
    setField("city", s.city);
    setField("lat", s.lat);
    setField("lng", s.lng);
    setQuery(s.label);
    setSuggestions([]);
    setShowMap(true);
    sessionStorage.setItem("cp", s.postcode);
    sessionStorage.setItem("ville", s.city);
  };

  useEffect(() => {
    if (!showMap || !data.lat || !data.lng || !mapRef.current) return;
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView([data.lat, data.lng], 19);
      markerRef.current?.setLatLng([data.lat, data.lng]);
      return;
    }

    const initMap = async () => {
      const L = (await import("leaflet")).default;
      await import("leaflet/dist/leaflet.css");

      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current!, {
        center: [data.lat!, data.lng!],
        zoom: 19,
        zoomControl: true,
        attributionControl: false,
      });

      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        { maxZoom: 20 }
      ).addTo(map);

      const marker = L.marker([data.lat!, data.lng!], { draggable: true }).addTo(map);
      marker.bindPopup("Glissez le marqueur sur votre toiture").openPopup();

      marker.on("dragend", () => {
        const pos = marker.getLatLng();
        setField("lat", pos.lat);
        setField("lng", pos.lng);
      });

      mapInstanceRef.current = map;
      markerRef.current = marker;
      setTimeout(() => map.invalidateSize(), 100);
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        markerRef.current = null;
      }
    };
  }, [showMap, data.lat, data.lng]);

  const handleConfirm = () => {
    if (!data.lat || !data.lng) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onNext();
    }, 300);
  };

  // Before map: show search + photo grid side by side on desktop
  // After map: show search + map side by side on desktop
  const hasMap = showMap && data.lat;

  return (
    <div className="animate-in fade-in duration-300 w-full max-w-5xl mx-auto">
      <div className="lg:flex lg:gap-8 lg:items-start">
        {/* Left column: title + search + confirm */}
        <div className="lg:w-1/2">
          <h1 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
            Démarrez votre simulation 100% gratuite
          </h1>
          <p className="mb-6 text-sm text-muted-foreground">
            Des centaines de propriétaires ont aussi commencé par cette simulation. Saisissez votre adresse pour localiser votre toiture.
          </p>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="12 rue de la Paix, Toulouse..."
              value={query}
              onChange={(e) => {
                setAddressLocked(false);
                setQuery(e.target.value);
                if (showMap) setShowMap(false);
              }}
              className="h-14 pl-10 text-base"
              autoFocus
            />
          </div>

          {suggestions.length > 0 && (
            <div className="relative z-50">
              <div className="absolute top-0 left-0 right-0 mt-1 rounded-xl border border-border bg-card shadow-lg overflow-hidden">
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => selectAddress(s)}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-muted/50 border-b border-border last:border-0"
                  >
                    <Navigation className="h-4 w-4 shrink-0 text-primary" />
                    <span className="truncate">{s.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {hasMap && (
            <div className="mt-4 lg:mt-6">
              <p className="mb-3 text-xs text-muted-foreground flex items-center justify-center gap-1">
                <MapPin className="h-3 w-3" />
                Déplacez le marqueur sur votre toiture pour plus de précision
              </p>
              <button
                onClick={handleConfirm}
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 font-semibold text-primary-foreground shadow-lg transition-all hover:opacity-90 disabled:opacity-50"
              >
                {loading ? (
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                ) : (
                  <>
                    <MapPin className="h-5 w-5" />
                    Confirmer ma position
                  </>
                )}
              </button>
            </div>
          )}

          {!hasMap && (
            <p className="mt-4 text-center text-xs text-muted-foreground lg:text-left">
              🔒 Gratuit • Sans engagement • 2 min
            </p>
          )}
        </div>

        {/* Right column: masonry grid OR map */}
        <div className="mt-6 lg:mt-0 lg:w-1/2">
          {hasMap ? (
            <div
              ref={mapRef}
              className="h-[250px] sm:h-[300px] lg:h-[350px] w-full rounded-xl overflow-hidden border border-border"
              style={{ zIndex: 1 }}
            />
          ) : (
            <PhotoGrid />
          )}
        </div>
      </div>
    </div>
  );
};

export default StepAddress;