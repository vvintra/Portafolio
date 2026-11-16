import { ImageResponse } from "next/og"

export const dynamic = "force-static"

export const alt = "Lucas Arroyo — Desarrollo, Ingeniería y Comunidad"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: "#f7f5ef", color: "#22221f", width: "100%", height: "100%", display: "flex", padding: 70, justifyContent: "space-between" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ fontSize: 22, color: "#a73528" }}>DESARROLLO / INGENIERÍA / COMUNIDAD</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 100, fontWeight: 700, lineHeight: 1 }}><span>Lucas Lisandro</span><span style={{ color: "#a73528" }}>Arroyo.</span></div>
        <div style={{ fontSize: 30 }}>Software con propósito. Desde Argentina.</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 230, height: 230, background: "#2e469a", alignSelf: "center" }}><div style={{ width: 150, height: 150, borderRadius: "50%", border: "30px solid #efc64b" }} /></div>
    </div>, size,
  )
}
