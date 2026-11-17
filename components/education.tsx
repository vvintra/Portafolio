import { GraduationCap, Code2, Terminal, GitBranch, BrainCircuit } from "lucide-react"

const studyAreas = ["Programación y algoritmos", "Matemática y análisis", "Sistemas digitales", "Arquitectura de computadoras", "Redes de computadoras", "Bases de datos"]

const skills = [
  { title: "Desarrollo web", icon: Code2, items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML y CSS"] },
  { title: "Back-end y sistemas", icon: Terminal, items: ["Node.js", "Python", "Java", "C", "PostgreSQL", "APIs REST"] },
  { title: "Inteligencia artificial", icon: BrainCircuit, items: ["Claude Code", "Modelos de difusión", "ComfyUI", "Aprendizaje por refuerzo"] },
  { title: "Herramientas", icon: GitBranch, items: ["Git y GitHub", "Linux", "Vercel", "Render", "Integración continua"] },
]

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">Formación académica</p>
        <h2 className="mb-12 text-3xl md:text-5xl">Formación y herramientas<span className="text-primary">.</span></h2>
        <div className="mb-8 grid gap-8 border border-border bg-card p-7 md:p-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-6 sm:flex-row">
            <GraduationCap className="h-10 w-10 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">Carrera de grado · 2021 – actualidad</p>
              <h3 className="mb-3 text-2xl">Ingeniería en Computación</h3>
              <p className="mb-3 text-muted-foreground">Facultad de Ciencias Exactas y Tecnología (FACET) · Universidad Nacional de Tucumán</p>
              <p className="max-w-2xl leading-relaxed text-muted-foreground">Formación orientada al diseño de sistemas de hardware y software. Complemento la cursada con proyectos en producción y con participación activa en la vida institucional de la facultad.</p>
            </div>
          </div>
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">Áreas de estudio</p>
            <ul className="flex flex-wrap gap-2">{studyAreas.map(area => <li key={area} className="border border-border px-3 py-2 text-sm text-muted-foreground">{area}</li>)}</ul>
            <p className="mt-6 mb-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">Secundario · 2015 – 2020</p>
            <p className="text-sm text-muted-foreground">Escuela Tulio García Fernández · Bachiller con orientación en Soluciones Digitales</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map(group => <div key={group.title} className="border border-border p-7"><group.icon className="mb-5 h-6 w-6 text-primary" aria-hidden="true" /><h3 className="mb-5 text-xl">{group.title}</h3><ul className="flex flex-wrap gap-2">{group.items.map(skill => <li key={skill} className="bg-muted px-3 py-2 text-sm text-muted-foreground">{skill}</li>)}</ul></div>)}
        </div>
      </div>
    </section>
  )
}
