import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans, IBM_Plex_Serif, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "./navbar"

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
})

const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-serif",
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
})

export const metadata: Metadata = {
  title: "Mi Portafolio | Estudiante de Ingeniería y Misionero Salesiano",
  description: "Portafolio personal de un estudiante de ingeniería en computación, catequista y misionero salesiano",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${ibmPlexSans.variable} ${ibmPlexSerif.variable} ${ibmPlexMono.variable} font-sans relative`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}



import './globals.css'