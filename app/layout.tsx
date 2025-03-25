import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans, IBM_Plex_Serif, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

// Optimizar la carga de fuentes
const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  display: "swap", // Mejora la carga de fuentes
})

const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-serif",
  display: "swap",
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mi Portafolio | Estudiante de Ingeniería y Misionero Salesiano",
  description: "Portafolio personal de un estudiante de ingeniería en computación, catequista y misionero salesiano",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}

          {/* Script para mejorar el rendimiento de las animaciones */}
          <Script id="animation-performance">
            {`
              // Detectar dispositivos de bajo rendimiento
              const isLowPerformanceDevice = () => {
                return (
                  navigator.deviceMemory < 4 || // Menos de 4GB de RAM
                  navigator.hardwareConcurrency < 4 // Menos de 4 núcleos
                );
              };
              
              // Aplicar clase al body para ajustar animaciones si es necesario
              if (typeof navigator !== 'undefined' && isLowPerformanceDevice()) {
                document.body.classList.add('reduce-animations');
              }
            `}
          </Script>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'