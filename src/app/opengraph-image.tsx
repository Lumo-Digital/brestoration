import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Blue Restoration - Expert Restoration Services";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1e3a8a",
          backgroundImage:
            "linear-gradient(to bottom right, #1e3a8a 0%, #0f172a 100%)",
        }}
      >
        {/* Logo or Brand Name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "white",
              margin: "0",
              textAlign: "center",
              lineHeight: "1.2",
            }}
          >
            Blue Restoration
          </h1>
          <p
            style={{
              fontSize: "32px",
              color: "#93c5fd",
              margin: "20px 0 0 0",
              textAlign: "center",
              maxWidth: "900px",
            }}
          >
            Expert Water, Fire & Mold Damage Restoration
          </p>
          <div
            style={{
              display: "flex",
              gap: "30px",
              marginTop: "40px",
              fontSize: "24px",
              color: "#e0e7ff",
            }}
          >
            <span>🔥 Fire Damage</span>
            <span>💧 Water Damage</span>
            <span>🦠 Mold Evaluation</span>
          </div>
          <p
            style={{
              fontSize: "28px",
              color: "#fbbf24",
              margin: "40px 0 0 0",
              fontWeight: "600",
            }}
          >
            Available 24/7 • South Florida
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
