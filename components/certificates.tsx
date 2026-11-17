import { ArrowUpRight, Award, BrainCircuit, Clock } from "lucide-react"

type Cert = {
  title: string
  issuer: string
  date: string
  hours?: string
  scholarship?: string
  description: string
  link?: { href: string; label: string }
}

const groups: { title: string; icon: typeof Award; note?: string; items: Cert[] }[] = [
  {
    title: "Desarrollo de software",
    icon: Award,
    items: [
      {
        title: "Certificación Avanzada en Full Stack Developer",
        issuer: "ITBA · Escuela de Innovación",
        date: "Diciembre 2024",
        hours: "306 horas",
        scholarship: "Beca Santander Open Academy",
        description: "Programa intensivo del Instituto Tecnológico de Buenos Aires sobre desarrollo web de punta a punta: front-end, back-end, bases de datos, APIs y despliegue.",
      },
      {
        title: "#YoProgramo · Perfil Web Full Stack Junior",
        issuer: "Argentina Programa 4.0 · INTI",
        date: "Mayo 2023",
        scholarship: "Programa nacional con beca",
        description: "Trayecto formativo de la Secretaría de Economía del Conocimiento y el INTI orientado a la inserción laboral como desarrollador web full stack.",
      },
      {
        title: "Ruta de cursos de programación",
        issuer: "Platzi",
        date: "2023",
        scholarship: "Beca Binance (BNB)",
        description: "Conjunto de cursos completados durante la beca: desarrollo web, programación y fundamentos de blockchain.",
      },
      {
        title: "#SéProgramar · Primera etapa aprobada",
        issuer: "Argentina Programa · CESSI · INTI",
        date: "Junio 2022",
        scholarship: "Programa nacional con beca",
        description: "Etapa inicial del plan Argentina Programa, avalada por la Cámara Argentina de Software: lógica, algoritmos y fundamentos de programación.",
      },
      {
        title: "Introducción al Trabajo Informático",
        issuer: "Ministerio de Trabajo · Asociación Gremial de Computación",
        date: "2021",
        hours: "36 horas",
        scholarship: "Plan de Formación Profesional",
        description: "Curso registrado por el Ministerio de Trabajo, Empleo y Seguridad Social y dictado por el gremio de trabajadores informáticos sobre el ejercicio profesional en el sector.",
      },
    ],
  },
  {
    title: "Inteligencia artificial",
    icon: BrainCircuit,
    items: [
      {
        title: "Claude Code in Action",
        issuer: "Anthropic · Claude Academy",
        date: "Noviembre 2026",
        description: "Uso avanzado de Claude Code en proyectos reales: flujos de trabajo con agentes, contexto, revisión de código e integración con herramientas.",
        link: { href: "https://academy.claude.com/verify/f49771496b48f1adc759501aff362e7d", label: "Verificar" },
      },
      {
        title: "Claude Code 101",
        issuer: "Anthropic · Claude Academy",
        date: "Noviembre 2026",
        description: "Fundamentos de desarrollo asistido por IA desde la terminal con Claude Code.",
        link: { href: "https://academy.claude.com/verify/3123d5c02461ed7e86228b254bf6c251", label: "Verificar" },
      },
      {
        title: "Claude 101",
        issuer: "Anthropic · Claude Academy",
        date: "Noviembre 2026",
        description: "Uso efectivo de modelos de lenguaje: redacción de instrucciones, análisis y trabajo con documentos.",
        link: { href: "https://academy.claude.com/verify/7e67319dc9fe8d97d41bbf7f4136b571", label: "Verificar" },
      },
      {
        title: "Deep Reinforcement Learning Course · Certificate of Excellence",
        issuer: "Hugging Face",
        date: "Marzo 2023",
        description: "Aprendizaje por refuerzo profundo: Q-Learning, DQN, métodos de gradiente de política y entrenamiento de agentes en entornos simulados.",
        link: { href: "https://huggingface.co/learn/deep-rl-course", label: "Ver curso" },
      },
    ],
  },
  {
    title: "En preparación",
    icon: Clock,
    note: "Rutas de aprendizaje oficiales en curso, con examen de certificación previsto.",
    items: [
      {
        title: "Examen AI-901: Aspectos básicos de la inteligencia artificial de Microsoft Azure",
        issuer: "Microsoft Learn",
        date: "En curso",
        description: "Ruta de aprendizaje oficial sobre conceptos de IA y servicios de Azure AI: aprendizaje automático, visión por computadora, lenguaje natural e IA generativa.",
        link: { href: "https://learn.microsoft.com/es-es/credentials/", label: "Microsoft Learn" },
      },
      {
        title: "Cloud Digital Leader",
        issuer: "Google Cloud Skills Boost",
        date: "En curso",
        description: "Ruta de aprendizaje gratuita sobre fundamentos de la nube, transformación digital, datos e IA en Google Cloud, con insignias de habilidad por módulo.",
        link: { href: "https://www.cloudskillsboost.google/", label: "Skills Boost" },
      },
    ],
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">Formación complementaria</p>
        <h2 className="mb-4 text-3xl md:text-5xl">Certificaciones<span className="text-primary">.</span></h2>
        <p className="mb-14 max-w-2xl leading-relaxed text-muted-foreground">La mayor parte de esta formación la obtuve mediante becas: Santander Open Academy, Argentina Programa, el Plan de Formación Profesional del Ministerio de Trabajo y Binance.</p>

        <div className="space-y-16">
          {groups.map(group => (
            <div key={group.title}>
              <div className="mb-6 flex items-center gap-3 border-b border-border pb-4">
                <group.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="text-xl">{group.title}</h3>
                <span className="ml-auto font-mono text-xs text-muted-foreground">{group.items.length}</span>
              </div>
              {group.note && <p className="mb-6 text-sm text-muted-foreground">{group.note}</p>}
              <div className="grid gap-6 md:grid-cols-2">
                {group.items.map(cert => (
                  <article key={cert.title} className="flex flex-col border border-border bg-card p-7">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{cert.issuer}</p>
                    <h4 className="mb-3 text-lg leading-snug">{cert.title}</h4>
                    <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{cert.description}</p>
                    <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-border pt-4 font-mono text-[11px]">
                      <span className={cert.date === "En curso" ? "bg-primary px-2 py-1 text-primary-foreground" : "bg-muted px-2 py-1"}>{cert.date}</span>
                      {cert.hours && <span className="bg-muted px-2 py-1">{cert.hours}</span>}
                      {cert.scholarship && <span className="border border-border px-2 py-1 text-muted-foreground">{cert.scholarship}</span>}
                      {cert.link && <a href={cert.link.href} target="_blank" rel="noopener noreferrer" className="ml-auto flex items-center gap-1 hover:text-primary">{cert.link.label} <ArrowUpRight className="h-3 w-3" /></a>}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
