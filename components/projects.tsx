import { ArrowUpRight, BookOpen, Building2, ImageIcon, Monitor, Store } from "lucide-react"

const projects = [
  {
    name: "tumostrador",
    type: "Software para negocios",
    description: "ERP para PyMEs argentinas: ventas, caja, stock y facturación electrónica ARCA en un mismo lugar. Nació como la planilla de facturación de un bar donde trabajaba de cajero y creció hasta ser un producto.",
    tags: ["ERP", "Gestión comercial", "Facturación ARCA"],
    href: "https://tumostrador.shop",
    label: "tumostrador.shop",
    icon: Store,
    color: "bg-[#2e469a]",
    detail: "El negocio, en orden.",
  },
  {
    name: "ortografin",
    type: "Iniciativa educativa",
    description: "Un aporte para ayudar a chicos a mejorar su tipeo, su ortografía y su caligrafía. Hoy funciona en la web y pronto estará disponible como app para celulares.",
    tags: ["Educación", "Escritura", "Web", "Próximamente móvil"],
    href: "https://ortografin.lat",
    label: "ortografin.lat",
    icon: BookOpen,
    color: "bg-[#a73528]",
    detail: "Cada palabra cuenta.",
  },
  {
    name: "ERP Lubricentro",
    type: "Aplicación de escritorio",
    description: "La versión de tumostrador para lubricentros, con instaladores para Windows y Linux y actualizaciones distribuidas desde GitHub.",
    tags: ["Windows", "Linux", "Actualizaciones"],
    href: "https://github.com/vvintra/erp-lubricentro-descargas/releases",
    label: "Ver versiones",
    icon: Monitor,
    color: "bg-[#303c32]",
    detail: "Software en el mostrador.",
  },
  {
    name: "Generación de imágenes con IA",
    type: "Exploración e investigación",
    description: "Modelos de difusión ejecutados en local sobre GPU AMD: ComfyUI con DirectML, InstantID para preservar identidad y FaceFusion para edición. Comparación de parecido facial entre métodos. Incluye un notebook de Google Colab listo para probarlo.",
    tags: ["Stable Diffusion", "ComfyUI", "DirectML", "Google Colab"],
    href: "https://colab.research.google.com/drive/1OyjmCLRXJCBZcjLhR8QAilYhU7r84Mpv?usp=sharing",
    label: "Abrir en Google Colab",
    icon: ImageIcon,
    color: "bg-[#8a6a1f]",
    detail: "Modelos en local.",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="border-y border-border py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div><p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">De la idea al producto</p><h2 className="text-3xl font-semibold md:text-5xl">Proyectos<span className="text-primary">.</span></h2></div>
          <a href="https://github.com/vvintra" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-b border-foreground pb-1 text-sm">Más en GitHub <ArrowUpRight className="h-4 w-4" /></a>
        </div>

        <a href="https://sizoft.com" target="_blank" rel="noopener noreferrer" className="group mb-6 flex flex-col gap-6 border-2 border-foreground bg-card p-7 transition-colors hover:border-primary md:flex-row md:items-center md:justify-between md:p-10">
          <div className="flex items-start gap-5">
            <Building2 className="mt-1 h-8 w-8 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Emprendimiento · Fundador</p>
              <h3 className="mb-2 text-3xl">Sizoft</h3>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">Software, soporte e IT. Es la marca que agrupa y aloja todos mis productos: cada proyecto de esta sección se desarrolla, publica y mantiene desde Sizoft, con dominio y despliegue propios.</p>
            </div>
          </div>
          <span className="flex shrink-0 items-center gap-2 font-mono text-sm group-hover:text-primary">sizoft.com <ArrowUpRight className="h-5 w-5" /></span>
        </a>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => <article key={project.name} className="group flex flex-col border border-border bg-card">
            <div className={`${project.color} relative flex min-h-48 flex-col justify-between overflow-hidden p-7 text-white`}>
              <div className="flex items-center justify-between"><project.icon className="h-7 w-7" aria-hidden="true" /><span className="font-mono text-xs text-white/90">0{index + 1}</span></div>
              <p className="relative z-10 mt-10 max-w-[260px] text-3xl font-medium leading-tight tracking-tight">{project.detail}</p>
              <div aria-hidden="true" className="absolute -right-10 -bottom-10 h-44 w-44 rounded-full border-[25px] border-white/10 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{project.type}</p>
              <h3 className="mb-3 text-2xl">{project.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              <ul className="my-6 flex flex-wrap gap-2">{project.tags.map(tag => <li key={tag} className="border border-border px-2 py-1 font-mono text-[10px]">{tag}</li>)}</ul>
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-auto flex items-center justify-between border-t border-border pt-5 text-sm font-medium hover:text-primary" aria-label={`${project.label}: ${project.name}`}>{project.label}<ArrowUpRight className="h-5 w-5" /></a>
            </div>
          </article>)}
        </div>
      </div>
    </section>
  )
}
