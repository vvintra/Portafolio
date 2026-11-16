import { ArrowDown, ArrowUpRight, Code2, Heart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-border pt-32 pb-12 md:pt-44 md:pb-16">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div>
            <p className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-2 w-2 bg-primary" /> Desarrollo · Ingeniería · Comunidad
            </p>
            <h1 className="font-sans text-[clamp(3.5rem,8vw,7rem)] font-semibold leading-[0.95] tracking-[-0.065em]">
              Lucas<br />Lisandro<br /><span className="text-primary">Arroyo.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
              Construyo software con propósito. Estudio Ingeniería en Computación y creo proyectos que conectan tecnología y personas.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="gap-3"><a href="#projects">Explorá mis proyectos <ArrowUpRight className="h-4 w-4" /></a></Button>
              <Button asChild size="lg" variant="outline" className="gap-3"><a href="#contact">Hablemos <ArrowUpRight className="h-4 w-4" /></a></Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md" aria-hidden="true">
            <div className="mb-4 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"><span>Ideas que toman forma</span><span>LA / 01</span></div>
            <div className="grid aspect-square grid-cols-2 border-2 border-foreground">
              <div className="flex items-center justify-center border-r-2 border-b-2 border-foreground bg-primary"><div className="h-[65%] w-[65%] rounded-full border-[22px] border-[#f7f5ef]" /></div>
              <div className="relative overflow-hidden border-b-2 border-foreground bg-[#efc64b]"><div className="absolute bottom-0 left-0 h-full w-full rounded-tl-full bg-[#2e469a]" /></div>
              <div className="relative overflow-hidden border-r-2 border-foreground bg-[#2e469a]"><div className="absolute inset-7 border-2 border-[#f7f5ef]" /><div className="absolute inset-12 border-2 border-[#f7f5ef]" /><div className="absolute inset-[4.25rem] border-2 border-[#f7f5ef]" /></div>
              <div className="flex items-center justify-center bg-background"><span className="font-sans text-7xl font-medium tracking-tighter md:text-8xl">la<span className="text-primary">.</span></span></div>
            </div>
            <div className="mt-4 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"><span>Lógica + creatividad</span><span>Desde Argentina</span></div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-6 md:mt-20">
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground md:gap-8">
            <span className="flex items-center gap-2"><Code2 className="h-4 w-4 text-primary" /> Desarrollador</span>
            <span className="flex items-center gap-2"><Heart className="h-4 w-4 text-primary" /> Misionero salesiano</span>
            <span className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> Comunidad</span>
          </div>
          <a href="#about" className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider hover:text-primary">Conocé mi historia <ArrowDown className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  )
}
