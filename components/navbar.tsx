"use client"

import { useEffect, useState } from "react"
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Sobre mí", href: "#about" },
  { name: "Proyectos", href: "#projects" },
  { name: "Formación", href: "#education" },
  { name: "Trayectoria", href: "#trajectory" },
  { name: "Certificaciones", href: "#certificates" },
  { name: "Galería", href: "#gallery" },
]

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])
  useEffect(() => {
    if (!isMenuOpen) return
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false)
    }
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false)
    }
    document.addEventListener("keydown", handleKey)
    window.addEventListener("resize", handleResize)
    return () => {
      document.removeEventListener("keydown", handleKey)
      window.removeEventListener("resize", handleResize)
    }
  }, [isMenuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <nav aria-label="Navegación principal" className="container mx-auto flex h-20 items-center justify-between gap-4 px-6">
        <a href="#hero" onClick={() => setIsMenuOpen(false)} aria-label="Lucas Arroyo, inicio" className="font-sans text-3xl font-semibold tracking-tighter">la<span className="text-primary">.</span></a>
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map(item => <a key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">{item.name}</a>)}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Cambiar tema" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
            {mounted && resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button asChild variant="outline" className="hidden gap-2 sm:inline-flex"><a href="#contact">Hablemos <ArrowUpRight className="h-4 w-4" /></a></Button>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>
      {isMenuOpen && <nav id="mobile-navigation" aria-label="Navegación móvil" className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-border bg-background px-6 py-4 lg:hidden">
        {[...navItems, { name: "Contacto", href: "#contact" }].map(item => <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="block border-b border-border py-3 text-lg hover:text-primary">{item.name}</a>)}
      </nav>}
    </header>
  )
}
