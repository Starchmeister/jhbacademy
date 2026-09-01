import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "#f2f1ed",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgba(23,24,27,0.5)",
            border: "1px solid rgba(23,24,27,0.2)",
            padding: "10px 20px",
          }}
        >
          Est. 2019 — Johannesburg
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 300,
            color: "#17181b",
            marginTop: 40,
            lineHeight: 1.05,
          }}
        >
          JHB Christian Academy
        </div>
      </div>
    ),
    { ...size }
  );
}
