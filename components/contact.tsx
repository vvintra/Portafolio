"use client"

import { useState, type FormEvent } from "react"
import { ArrowUpRight, Mail, MapPin, Github, Instagram, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const email = "lucaslisandroarroyo02@gmail.com"

export default function Contact() {
  const [draft, setDraft] = useState<string | null>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const body = `${data.get("message")}\n\nNombre: ${data.get("name")}\nEmail de contacto: ${data.get("email")}`
    const href = `mailto:${email}?subject=${encodeURIComponent(String(data.get("subject")))}&body=${encodeURIComponent(body)}`
    setDraft(href)
    window.location.href = href
  }

  return (
    <section id="contact" className="border-t border-border bg-muted/40 py-20 md:py-28">
      <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">El próximo proyecto empieza con una charla</p>
          <h2 className="mb-6 text-4xl md:text-6xl">¿Construimos<br />algo juntos<span className="text-primary">?</span></h2>
          <p className="mb-9 max-w-md leading-relaxed text-muted-foreground">Si tenés una idea, buscás colaborar o querés conocer más sobre mi trabajo, escribime.</p>
          <div className="space-y-5 text-sm">
            <a href={`mailto:${email}`} className="flex items-center gap-3 break-all hover:text-primary"><Mail className="h-5 w-5 shrink-0 text-primary" />{email}</a>
            <a href="tel:+543814064164" className="flex items-center gap-3 hover:text-primary"><Phone className="h-5 w-5 text-primary" />+54 381 406-4164</a>
            <p className="flex items-center gap-3 text-muted-foreground"><MapPin className="h-5 w-5 text-primary" />Tucumán, Argentina</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-6">
            <a href="https://github.com/vvintra" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary"><Github className="h-4 w-4" />GitHub <ArrowUpRight className="h-3 w-3" /></a>
            <a href="https://www.instagram.com/_lucasarroyo/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary"><Instagram className="h-4 w-4" />Instagram <ArrowUpRight className="h-3 w-3" /></a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5 border border-border bg-card p-6 md:p-8">
          <h3 className="text-xl">Contame tu idea</h3>
          <p id="contact-help" className="text-sm leading-relaxed text-muted-foreground">Completá el mensaje y abrilo en tu aplicación de correo para enviarlo.</p>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2"><label htmlFor="name" className="text-sm">Nombre</label><Input id="name" name="name" autoComplete="name" placeholder="Tu nombre" maxLength={100} required /></div>
            <div className="space-y-2"><label htmlFor="email" className="text-sm">Email</label><Input id="email" name="email" type="email" autoComplete="email" placeholder="tu@email.com" maxLength={200} required /></div>
          </div>
          <div className="space-y-2"><label htmlFor="subject" className="text-sm">Asunto</label><Input id="subject" name="subject" placeholder="¿En qué podemos colaborar?" maxLength={160} required /></div>
          <div className="space-y-2"><label htmlFor="message" className="text-sm">Mensaje</label><Textarea id="message" name="message" placeholder="Me gustaría conversar sobre…" rows={5} maxLength={3000} required /></div>
          <Button type="submit" className="w-full gap-2" aria-describedby="contact-help">Abrir en mi correo <ArrowUpRight className="h-4 w-4" /></Button>
          {draft && <p role="status" className="text-sm leading-relaxed text-muted-foreground">Tu borrador está listo. Enviá el mensaje desde tu aplicación de correo. Si no se abrió, <a href={draft} className="underline hover:text-primary">abrí el borrador de nuevo</a> o escribí a <a href={`mailto:${email}`} className="break-all underline">{email}</a>.</p>}
        </form>
      </div>
    </section>
  )
}
