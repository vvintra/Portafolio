"use client"

import { HeartIcon } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [basePath, setBasePath] = useState("")

  useEffect(() => {
    // Detectar si estamos en entorno de producción para ajustar el basePath
    if (process.env.NODE_ENV === "production") {
      setBasePath("/Miira-web-portfolio")
    }
  }, [])

  return (
    <footer className="bg-muted/30 py-12 border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-heading">Lucas Arroyo</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Estudiante de Ingeniería en Computación, Catequista y Misionero Salesiano, apasionado por las artes
              marciales y el desarrollo tecnológico.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link href="#education" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Formación
                </Link>
              </li>
              <li>
                <Link href="#salesian" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Salesiano
                </Link>
              </li>
              <li>
                <Link
                  href="#certificates"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Certificaciones
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Redes sociales</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/vvintra"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card/50 p-2 rounded-full hover:bg-primary/20 transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://x.com/VintraScrip"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card/50 p-2 rounded-full hover:bg-primary/20 transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/_lucasarroyo/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card/50 p-2 rounded-full hover:bg-primary/20 transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Contacto</h3>
              <p className="text-sm text-muted-foreground">lucaslisandroarroyo02@gmail.com</p>
              <p className="text-sm text-muted-foreground">+54 3914064164</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Lucas Lisandro Arroyo. Todos los derechos reservados.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <p className="text-sm text-muted-foreground flex items-center">
              Hecho con <HeartIcon className="h-4 w-4 text-red-500 mx-1" /> y Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

