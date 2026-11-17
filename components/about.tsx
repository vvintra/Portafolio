import { Building2, Code2, Landmark } from "lucide-react"

const pillars = [
  {
    icon: Code2,
    title: "Ingeniería en formación",
    text: "Estudiante de Ingeniería en Computación en la Facultad de Ciencias Exactas y Tecnología de la Universidad Nacional de Tucumán, con formación complementaria certificada por el ITBA y Argentina Programa.",
  },
  {
    icon: Building2,
    title: "Emprendimiento propio",
    text: "Fundador de Sizoft, desde donde desarrollo y opero productos reales: un ERP con facturación electrónica para PyMEs y una plataforma educativa para practicar el español.",
  },
  {
    icon: Landmark,
    title: "Gestión institucional",
    text: "Secretario de Finanzas del Centro de Estudiantes de FACET y participante en la gestión de proyectos ante el Consejo Directivo de la facultad.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">Perfil</p>
            <h2 className="text-3xl md:text-5xl">Sobre mí<span className="text-primary">.</span></h2>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Combino la formación universitaria con el desarrollo de software en producción. Me interesa el ciclo completo:
            entender el problema, diseñar la solución, construirla, desplegarla y sostenerla con usuarios reales. En paralelo
            exploro inteligencia artificial aplicada, desde modelos de generación de imágenes ejecutados en local hasta
            herramientas de desarrollo asistido.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map(item => (
            <article key={item.title} className="border border-border bg-card p-7">
              <item.icon className="mb-5 h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mb-3 text-xl">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
