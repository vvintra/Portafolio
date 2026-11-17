"use client"

import { useEffect, useState } from "react"
import Image, { type StaticImageData } from "next/image"
import { ArrowUpRight, Award, BrainCircuit, ChevronLeft, ChevronRight, Clock, Maximize2 } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"

import itba from "@/assets/certificados/itba.jpg"
import santander from "@/assets/certificados/santander.jpg"
import huggingFace from "@/assets/certificados/hugging-face.jpg"
import ap2022 from "@/assets/certificados/ap2022.jpg"
import ap2023 from "@/assets/certificados/ap2023.jpg"
import ministerio from "@/assets/certificados/ministerio.jpg"
import claude101 from "@/assets/certificados/claude-101.jpg"
import claudeCode101 from "@/assets/certificados/claude-code-101.jpg"
import claudeCodeInAction from "@/assets/certificados/claude-code-in-action.jpg"

type Cert = {
  id: string
  title: string
  issuer: string
  date: string
  hours?: string
  scholarship?: string
  description: string
  image?: StaticImageData
  link?: { href: string; label: string }
}

const featured: Cert = {
  id: "itba",
  title: "Certificación Avanzada en Full Stack Developer",
  issuer: "ITBA · Escuela de Innovación",
  date: "Diciembre 2024",
  hours: "306 horas",
  scholarship: "Beca Santander Open Academy",
  description: "Programa intensivo del Instituto Tecnológico de Buenos Aires sobre desarrollo web de punta a punta: front-end, back-end, bases de datos, APIs y despliegue. Accedí con una plaza otorgada por Santander Open Academy.",
  image: itba,
}

const scholarshipLetter: Cert = {
  id: "santander",
  title: "Plaza otorgada · Programa Full Stack Developer – ITBA",
  issuer: "Santander Open Academy",
  date: "2024",
  description: "Beca de Santander Open Academy para cursar el programa del ITBA.",
  image: santander,
}

const software: Cert[] = [
  {
    id: "ap2023",
    title: "#YoProgramo · Perfil Web Full Stack Junior",
    issuer: "Argentina Programa 4.0 · INTI",
    date: "Mayo 2023",
    scholarship: "Programa nacional",
    description: "Trayecto formativo de la Secretaría de Economía del Conocimiento orientado a la inserción laboral como desarrollador web.",
    image: ap2023,
  },
  {
    id: "ap2022",
    title: "#SéProgramar · Primera etapa aprobada",
    issuer: "Argentina Programa · CESSI · INTI",
    date: "Junio 2022",
    scholarship: "Programa nacional",
    description: "Etapa inicial del plan Argentina Programa, avalada por la Cámara Argentina de Software: lógica y fundamentos de programación.",
    image: ap2022,
    link: { href: "https://inti.gob.ar/inti/certificates/verify/gPg20bxPHA835eLB", label: "Verificar" },
  },
  {
    id: "ministerio",
    title: "Introducción al Trabajo Informático",
    issuer: "Ministerio de Trabajo · Asociación Gremial de Computación",
    date: "2021",
    hours: "36 horas",
    scholarship: "Formación Profesional",
    description: "Curso registrado por el Ministerio de Trabajo y dictado por el gremio informático sobre el ejercicio profesional en el sector.",
    image: ministerio,
    link: { href: "https://publicempleo.trabajo.gob.ar/Pages/ValidarCertificadoRegice.aspx?GuidID=1CDE4148-E914-42B0-8E5C-C62311F67C09&tipo=2", label: "Verificar" },
  },
  {
    id: "platzi",
    title: "Ruta de cursos de programación",
    issuer: "Platzi",
    date: "2023",
    scholarship: "Beca Binance (BNB)",
    description: "Cursos completados durante la beca: desarrollo web, programación y fundamentos de blockchain.",
  },
]

const ai: Cert[] = [
  {
    id: "claude-code-in-action",
    title: "Claude Code in Action",
    issuer: "Anthropic · Claude Academy",
    date: "Noviembre 2026",
    description: "Flujos de trabajo con agentes, manejo de contexto, revisión de código e integración con herramientas.",
    image: claudeCodeInAction,
    link: { href: "https://academy.claude.com/verify/f49771496b48f1adc759501aff362e7d", label: "Verificar" },
  },
  {
    id: "claude-code-101",
    title: "Claude Code 101",
    issuer: "Anthropic · Claude Academy",
    date: "Noviembre 2026",
    description: "Fundamentos del desarrollo asistido por IA desde la terminal.",
    image: claudeCode101,
    link: { href: "https://academy.claude.com/verify/3123d5c02461ed7e86228b254bf6c251", label: "Verificar" },
  },
  {
    id: "claude-101",
    title: "Claude 101",
    issuer: "Anthropic · Claude Academy",
    date: "Noviembre 2026",
    description: "Uso efectivo de modelos de lenguaje: instrucciones, análisis y trabajo con documentos.",
    image: claude101,
    link: { href: "https://academy.claude.com/verify/7e67319dc9fe8d97d41bbf7f4136b571", label: "Verificar" },
  },
  {
    id: "hugging-face",
    title: "Deep Reinforcement Learning · Certificate of Excellence",
    issuer: "Hugging Face",
    date: "Marzo 2023",
    description: "Q-Learning, DQN, gradiente de política y entrenamiento de agentes en entornos simulados.",
    image: huggingFace,
    link: { href: "https://huggingface.co/learn/deep-rl-course", label: "Ver curso" },
  },
]

const upcoming = [
  {
    title: "AI-901: Aspectos básicos de la IA de Microsoft Azure",
    issuer: "Microsoft Learn",
    description: "Conceptos de IA y servicios de Azure AI: aprendizaje automático, visión, lenguaje natural e IA generativa.",
    href: "https://learn.microsoft.com/es-es/credentials/",
  },
  {
    title: "Cloud Digital Leader",
    issuer: "Google Cloud Skills Boost",
    description: "Fundamentos de la nube, transformación digital, datos e IA en Google Cloud, con insignias por módulo.",
    href: "https://www.cloudskillsboost.google/",
  },
]

const gallery = [featured, scholarshipLetter, ...software, ...ai].filter(c => c.image)

function Chips({ cert }: { cert: Cert }) {
  return (
    <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
      <span className="bg-muted px-2 py-1">{cert.date}</span>
      {cert.hours && <span className="bg-muted px-2 py-1">{cert.hours}</span>}
      {cert.scholarship && <span className="border border-border px-2 py-1 text-muted-foreground">{cert.scholarship}</span>}
    </div>
  )
}

function CertCard({ cert, onOpen, tilt }: { cert: Cert; onOpen: (id: string) => void; tilt: string }) {
  return (
    <article className="group flex flex-col border border-border bg-card transition-shadow duration-300 hover:shadow-[8px_8px_0_0_hsl(var(--primary))]">
      {cert.image ? (
        <button type="button" onClick={() => onOpen(cert.id)} aria-label={`Ver certificado: ${cert.title}`} className="relative block overflow-hidden border-b border-border bg-muted/60 px-8 pt-8 pb-6">
          <div className={`relative aspect-[1.414] w-full ${tilt} shadow-[0_18px_40px_-18px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.04]`}>
            <Image src={cert.image} alt={cert.title} fill placeholder="blur" sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 30vw" className="object-cover" />
          </div>
          <span className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center bg-foreground text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100"><Maximize2 className="h-4 w-4" /></span>
        </button>
      ) : (
        <div className="relative flex aspect-[1.414] items-end overflow-hidden border-b border-border bg-[#97c93d] p-7 text-[#121f3d]">
          <div aria-hidden="true" className="absolute -top-10 -right-10 h-48 w-48 rounded-full border-[28px] border-[#121f3d]/10" />
          <div aria-hidden="true" className="absolute top-8 left-7 h-3 w-3 bg-[#121f3d]" />
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em]">Ruta completada · {cert.date}</p>
            <p className="text-5xl font-semibold tracking-tight">{cert.issuer}</p>
          </div>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{cert.issuer}</p>
        <h4 className="mb-2 text-lg leading-snug">{cert.title}</h4>
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{cert.description}</p>
        <div className="mt-auto flex items-end justify-between gap-3 border-t border-border pt-4">
          <Chips cert={cert} />
          {cert.link && <a href={cert.link.href} target="_blank" rel="noopener noreferrer" className="flex shrink-0 items-center gap-1 font-mono text-[11px] hover:text-primary">{cert.link.label} <ArrowUpRight className="h-3 w-3" /></a>}
        </div>
      </div>
    </article>
  )
}

const tilts = ["-rotate-[1.5deg]", "rotate-[1deg]", "-rotate-[0.5deg]", "rotate-[1.5deg]"]

function GroupHeader({ icon: Icon, title, count }: { icon: typeof Award; title: string; count: number }) {
  return (
    <div className="mb-8 flex items-center gap-3 border-b-2 border-foreground pb-4">
      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
      <h3 className="text-2xl">{title}</h3>
      <span className="ml-auto font-mono text-xs text-muted-foreground">{String(count).padStart(2, "0")}</span>
    </div>
  )
}

export default function Certificates() {
  const [open, setOpen] = useState<number | null>(null)
  const openById = (id: string) => setOpen(gallery.findIndex(c => c.id === id))
  const move = (step: number) => setOpen(current => current === null ? null : (current + step + gallery.length) % gallery.length)

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") move(-1)
      if (e.key === "ArrowRight") move(1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const current = open === null ? null : gallery[open]

  return (
    <section id="certificates" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">Formación complementaria</p>
            <h2 className="text-3xl md:text-5xl">Certificaciones<span className="text-primary">.</span></h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">La mayor parte la obtuve mediante becas: Santander Open Academy, Argentina Programa, el Plan de Formación Profesional y Binance. Tocá cualquier certificado para verlo completo.</p>
        </div>

        {/* Destacado */}
        <article className="mb-20 grid items-center gap-12 border-2 border-foreground bg-card p-6 md:p-12 lg:grid-cols-[1.15fr_1fr]">
          <div className="relative mx-auto w-full max-w-xl py-6">
            <button type="button" onClick={() => openById("santander")} aria-label="Ver carta de beca Santander" className="absolute -top-2 left-6 right-[-1rem] z-0 aspect-[2.16] rotate-[4deg] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:rotate-[6deg] hover:-translate-y-2">
              <Image src={santander} alt="Carta de plaza otorgada por Santander Open Academy" fill placeholder="blur" sizes="(max-width: 1024px) 90vw, 40vw" className="object-cover" />
            </button>
            <button type="button" onClick={() => openById("itba")} aria-label="Ver certificado del ITBA" className="group relative z-10 mt-24 block aspect-[1.414] w-full -rotate-[2deg] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]">
              <Image src={itba} alt={featured.title} fill placeholder="blur" sizes="(max-width: 1024px) 90vw, 45vw" className="object-cover" />
              <span className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center bg-foreground text-background opacity-0 transition-opacity group-hover:opacity-100"><Maximize2 className="h-4 w-4" /></span>
            </button>
          </div>
          <div>
            <p className="mb-4 inline-block bg-primary px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-primary-foreground">Certificación destacada</p>
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">{featured.issuer}</p>
            <h3 className="mb-4 text-3xl leading-tight md:text-4xl">{featured.title}</h3>
            <p className="mb-8 leading-relaxed text-muted-foreground">{featured.description}</p>
            <div className="mb-8 grid grid-cols-3 border-y border-border">
              <div className="border-r border-border py-4 pr-4"><p className="text-3xl font-semibold">306</p><p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">horas</p></div>
              <div className="border-r border-border px-4 py-4"><p className="text-3xl font-semibold">2024</p><p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">diciembre</p></div>
              <div className="px-4 py-4"><p className="text-3xl font-semibold">ITBA</p><p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Buenos Aires</p></div>
            </div>
            <button type="button" onClick={() => openById("itba")} className="flex items-center gap-2 border-b border-foreground pb-1 text-sm hover:text-primary">Ver certificado completo <ArrowUpRight className="h-4 w-4" /></button>
          </div>
        </article>

        <div className="space-y-20">
          <div>
            <GroupHeader icon={Award} title="Desarrollo de software" count={software.length + 1} />
            <div className="grid gap-8 md:grid-cols-2">
              {software.map((cert, i) => <CertCard key={cert.id} cert={cert} onOpen={openById} tilt={tilts[i % tilts.length]} />)}
            </div>
          </div>

          <div>
            <GroupHeader icon={BrainCircuit} title="Inteligencia artificial" count={ai.length} />
            <div className="grid gap-8 md:grid-cols-2">
              {ai.map((cert, i) => <CertCard key={cert.id} cert={cert} onOpen={openById} tilt={tilts[(i + 1) % tilts.length]} />)}
            </div>
          </div>

          <div>
            <GroupHeader icon={Clock} title="En preparación" count={upcoming.length} />
            <div className="grid gap-8 md:grid-cols-2">
              {upcoming.map(item => (
                <article key={item.title} className="relative flex flex-col border-2 border-dashed border-border p-7">
                  <span className="mb-5 flex w-fit items-center gap-2 bg-primary px-2 py-1 font-mono text-[11px] text-primary-foreground"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary-foreground" /> En curso</span>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{item.issuer}</p>
                  <h4 className="mb-2 text-lg leading-snug">{item.title}</h4>
                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-auto flex items-center gap-1 font-mono text-[11px] hover:text-primary">Ruta de aprendizaje <ArrowUpRight className="h-3 w-3" /></a>
                </article>
              ))}
            </div>
          </div>
        </div>

        <Dialog open={open !== null} onOpenChange={o => { if (!o) setOpen(null) }}>
          <DialogContent className="max-w-5xl border-border bg-background p-4 md:p-6">
            {current && current.image && (
              <>
                <DialogTitle className="pr-8 text-lg">{current.title}</DialogTitle>
                <DialogDescription>{current.issuer} · {current.date} · {open! + 1} de {gallery.length}. Usá las flechas para navegar.</DialogDescription>
                <div className="relative mt-2 bg-muted/60 p-2 md:p-6">
                  <div className="relative h-[65vh] w-full">
                    <Image src={current.image} alt={current.title} fill placeholder="blur" sizes="(max-width: 1024px) 95vw, 1000px" className="object-contain" />
                  </div>
                  <button type="button" aria-label="Certificado anterior" onClick={() => move(-1)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-foreground p-2 text-background hover:bg-primary"><ChevronLeft className="h-5 w-5" /></button>
                  <button type="button" aria-label="Certificado siguiente" onClick={() => move(1)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-foreground p-2 text-background hover:bg-primary"><ChevronRight className="h-5 w-5" /></button>
                </div>
                {current.link && <a href={current.link.href} target="_blank" rel="noopener noreferrer" className="flex w-fit items-center gap-1 font-mono text-xs hover:text-primary">{current.link.label} <ArrowUpRight className="h-3 w-3" /></a>}
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
