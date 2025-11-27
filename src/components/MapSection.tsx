"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Eyebrow from "@/components/Eyebrow";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGJhcmF2YWxsZSIsImEiOiJjbTRqNHI1cHAwYTU1MmtxNTh5d3prZGduIn0.Bl_9OB43trwN0SuMvZc3RA";

const COORDINATES = {
  lng: -80.32869885969049,
  lat: 25.807710169885514,
};

export default function MapSection() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [COORDINATES.lng, COORDINATES.lat],
      zoom: 15,
      scrollZoom: false,
    });

    map.current.on("load", () => {
      // Ocultar todos los POIs (puntos de interés)
      const layers = map.current?.getStyle()?.layers;
      if (layers) {
        layers.forEach((layer) => {
          if (
            layer.id.includes("poi") ||
            layer.id.includes("label-poi") ||
            layer.id.includes("poi-label")
          ) {
            map.current?.setLayoutProperty(layer.id, "visibility", "none");
          }
        });
      }
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    new mapboxgl.Marker({ color: "#E63946" })
      .setLngLat([COORDINATES.lng, COORDINATES.lat])
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <section className="w-full bg-white pt-12">
      <div className="mx-auto max-w-7xl px-6 pb-10">
        <Eyebrow>Lorem ipsum</Eyebrow>
        <h2 className="mx-auto mb-8 w-full text-center text-3xl leading-7 font-semibold text-balance sm:w-2/4">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </h2>
      </div>
      <div
        ref={mapContainer}
        className="h-[300px] w-full sm:h-[400px] md:h-[500px]"
      />
    </section>
  );
}
