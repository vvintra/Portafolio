import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans, IBM_Plex_Serif, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { siteUrl } from "@/lib/site"

const sans = IBM_Plex_Sans({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-ibm-plex-sans", display: "swap" })
const serif = IBM_Plex_Serif({ weight: ["400", "500", "600"], subsets: ["latin"], variable: "--font-ibm-plex-serif", display: "swap" })
const mono = IBM_Plex_Mono({ weight: ["400", "500"], subsets: ["latin"], variable: "--font-ibm-plex-mono", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Lucas Lisandro Arroyo | Desarrollo, Ingeniería y Comunidad",
  description: "Soy Lucas Arroyo, desarrollador y estudiante de Ingeniería en Computación en FACET. Fundador de Sizoft. Conocé mis proyectos de software, mi formación, mi trayectoria y mis certificaciones.",
  authors: [{ name: "Lucas Lisandro Arroyo", url: "https://github.com/vvintra" }],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "es_AR", siteName: "Lucas Arroyo", title: "Lucas Arroyo — Software con propósito", description: "Desarrollo, ingeniería y comunidad. Ideas que se convierten en proyectos reales.", url: "/" },
  twitter: { card: "summary_large_image", title: "Lucas Arroyo — Software con propósito", description: "Desarrollo, ingeniería y comunidad. Conocé mis proyectos." },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" suppressHydrationWarning>
      <body className={`${sans.variable} ${serif.variable} ${mono.variable} relative font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <a href="#main-content" className="fixed left-4 top-4 z-[100] -translate-y-24 bg-foreground px-5 py-3 text-background focus:translate-y-0">Saltar al contenido</a>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
