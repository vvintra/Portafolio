import { GraduationCap, Code2, Terminal, GitBranch } from "lucide-react"

const skills = [
  { title: "Desarrollo web", icon: Code2, items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML y CSS"] },
  { title: "Lógica y sistemas", icon: Terminal, items: ["Python", "Java", "Node.js", "Bases de datos", "APIs"] },
  { title: "Herramientas", icon: GitBranch, items: ["Git", "GitHub", "Linux", "Vercel", "Trabajo en equipo"] },
]

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">Aprender, hacer, compartir</p>
        <h2 className="mb-12 text-3xl md:text-5xl">Formación y herramientas<span className="text-primary">.</span></h2>
        <div className="mb-8 flex flex-col gap-6 border border-border bg-card p-7 sm:flex-row md:p-10">
          <GraduationCap className="h-10 w-10 shrink-0 text-primary" />
          <div><p className="mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">Formación universitaria · En curso</p><h3 className="mb-3 text-2xl">Ingeniería en Computación</h3><p className="mb-3 text-muted-foreground">Facultad de Ciencias Exactas y Tecnología · Universidad Nacional de Tucumán</p><p className="max-w-3xl leading-relaxed text-muted-foreground">Combino mi formación académica con el desarrollo de proyectos de software. Me interesa entender los problemas, construir soluciones útiles y seguir aprendiendo en cada etapa.</p></div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map(group => <div key={group.title} className="border border-border p-7"><group.icon className="mb-5 h-6 w-6 text-primary" aria-hidden="true" /><h3 className="mb-5 text-xl">{group.title}</h3><ul className="flex flex-wrap gap-2">{group.items.map(skill => <li key={skill} className="bg-muted px-3 py-2 text-sm text-muted-foreground">{skill}</li>)}</ul></div>)}
        </div>
      </div>
    </section>
  )
}
