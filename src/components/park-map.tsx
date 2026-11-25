import { useEffect, useRef, useState } from "react";
import type { Park } from "@/data/parks";
import { LAGOON } from "@/data/parks";
import "leaflet/dist/leaflet.css";

type Props = {
  parks: Park[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

export function ParkMap({ parks, selectedId, onSelect }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);
  const layerRef = useRef<import("leaflet").LayerGroup | null>(null);
  const fitted = useRef("");
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let dead = false;
    const frame = host.current;
    void import("leaflet").then((L) => {
      if (dead || !frame || mapRef.current) return;
      const map = L.map(frame, {
        scrollWheelZoom: false,
        zoomControl: true,
      });
      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        attribution: "&copy; OpenStreetMap &copy; CARTO",
        maxZoom: 18,
      }).addTo(map);
      mapRef.current = map;
      layerRef.current = L.layerGroup().addTo(map);
      setReady(true);
      window.setTimeout(() => map.invalidateSize(), 60);
    });
    return () => {
      dead = true;
      mapRef.current?.remove();
      mapRef.current = null;
      layerRef.current = null;
      setReady(false);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const map = mapRef.current;
    const layer = layerRef.current;
    if (!map || !layer) return;
    let cancelled = false;

    void import("leaflet").then((L) => {
      if (cancelled || !mapRef.current || !layerRef.current) return;
      layer.clearLayers();

      const lagoon = L.circleMarker([LAGOON.lat, LAGOON.lng], {
        radius: 7,
        color: "#f3eee4",
        weight: 2,
        fillColor: "#b85c38",
        fillOpacity: 1,
      });
      lagoon.bindTooltip("Airlie Beach Lagoon — town centre", { direction: "top" });
      layer.addLayer(lagoon);

      const bounds: [number, number][] = [[LAGOON.lat, LAGOON.lng]];
      for (const park of parks) {
        bounds.push([park.lat, park.lng]);
        const on = park.id === selectedId;
        const marker = L.marker([park.lat, park.lng], {
          icon: L.divIcon({
            className: "park-pin-wrap",
            html: `<span class="park-pin${on ? " is-on" : ""}">${park.rank}</span>`,
            iconSize: [32, 32],
            iconAnchor: [16, 16],
          }),
          zIndexOffset: on ? 800 : 100 + park.rank,
          keyboard: true,
          title: park.name,
        });
        marker.on("click", () => onSelectRef.current(park.id));
        marker.bindTooltip(`${park.rank}. ${park.short} · ${park.driveMin} min`, {
          direction: "top",
          offset: [0, -14],
        });
        layer.addLayer(marker);
      }

      const key = parks.map((p) => p.id).join("|");
      if (bounds.length > 1 && fitted.current !== key) {
        map.fitBounds(bounds, { padding: [36, 36], maxZoom: 14 });
        fitted.current = key;
      } else if (bounds.length === 1) {
        map.setView(bounds[0], 13);
        fitted.current = key;
      }
      map.invalidateSize();
    });

    return () => {
      cancelled = true;
    };
  }, [parks, selectedId, ready]);

  return <div ref={host} className="map-frame" role="region" aria-label="Map of caravan parks" />;
}
