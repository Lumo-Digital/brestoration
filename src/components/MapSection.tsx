"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Eyebrow from "@/components/Eyebrow";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY!;

const COORDINATES = {
  lng: -80.32869885969049,
  lat: 25.807710169885514,
};

const ADDRESS = "3625 NW 82nd Ave Suite 111, Doral, FL 33166";

export default function MapSection() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [COORDINATES.lng, COORDINATES.lat + 0.001],
      zoom: 15,
      scrollZoom: false,
      interactive: true,
    });

    // Prevent map from taking focus and causing scroll jumps
    // This ensures the map doesn't interfere with page navigation
    const preventFocus = () => {
      const canvas = mapContainer.current?.querySelector("canvas");
      if (canvas) {
        canvas.setAttribute("tabindex", "-1");
        canvas.style.outline = "none";
      }

      // Prevent all focusable elements within the map
      const focusableElements = mapContainer.current?.querySelectorAll(
        'a, button, input, [tabindex]:not([tabindex="-1"])'
      );
      focusableElements?.forEach((el) => {
        el.setAttribute("tabindex", "-1");
      });
    };

    preventFocus();

    // Run again after map loads to catch dynamically added elements
    map.current.on("load", preventFocus);

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

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const mapUrl = isMobile
      ? `geo:${COORDINATES.lat},${COORDINATES.lng}?q=${encodeURIComponent(ADDRESS)}`
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

    const popup = new mapboxgl.Popup({
      offset: [0, -40],
      closeButton: false,
      closeOnClick: false,
      className: "custom-popup",
      focusAfterOpen: false,
    }).setHTML(`
        <a
          href="${mapUrl}"
          ${!isMobile ? 'target="_blank" rel="noopener noreferrer"' : ""}
          tabindex="-1"
          style="display: block; padding: 12px 16px; text-decoration: none; cursor: pointer; transition: background-color 0.2s;"
          onmouseover="this.style.backgroundColor='#f7fafc'"
          onmouseout="this.style.backgroundColor='white'"
        >
          <p style="margin: 0; font-size: 14px; font-weight: 600; color: #1a202c;">Blue Restoration Services</p>
          <p style="margin: 4px 0 0 0; font-size: 13px; color: #4a5568; line-height: 1.4;">${ADDRESS}</p>
        </a>
      `);

    new mapboxgl.Marker({ color: "#E63946" })
      .setLngLat([COORDINATES.lng, COORDINATES.lat])
      .addTo(map.current);

    popup.setLngLat([COORDINATES.lng, COORDINATES.lat]).addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <section className="w-full bg-white pt-12">
      <div className="mx-auto max-w-7xl px-6 pb-10">
        <Eyebrow>Lorem ipsum</Eyebrow>
        <h2 className="mx-auto mb-8 w-full text-center text-3xl leading-7 font-semibold text-balance md:w-2/3 lg:w-2/4">
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
