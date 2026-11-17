const entries = [
  {
    period: "2026 – actualidad",
    category: "Experiencia · Independiente",
    title: "Fundador y desarrollador full stack",
    org: "Sizoft",
    text: "Desarrollo y opero tumostrador, un ERP con facturación electrónica ARCA, y sistemas a medida para clientes: un ERP de escritorio para un lubricentro, un ERP para un corralón de materiales y una tienda online. Me ocupo del ciclo completo, desde el relevamiento hasta el despliegue y el soporte.",
  },
  {
    period: "2024 – 2025",
    category: "Experiencia",
    title: "Cajero (fines de semana)",
    org: "Brotes Casa Cultural (actual Santos Discépolo)",
    text: "Caja y atención al cliente en noches de alto volumen. Digitalicé la facturación del local, primero en Excel y después como aplicación propia, que terminó siendo el ERP tumostrador. También creé un sistema de comandas con bot de WhatsApp automático y un módulo de gestión de personal.",
  },
  {
    period: "2025",
    category: "Institucional · Universidad",
    title: "Secretario de Finanzas",
    org: "Centro de Estudiantes de FACET, UNT",
    text: "Administración de los recursos del centro de estudiantes: presupuesto, rendición de cuentas y financiamiento de actividades para la comunidad estudiantil.",
  },
  {
    period: "2025",
    category: "Institucional · Universidad",
    title: "Gestión de proyectos ante el Consejo Directivo",
    org: "Facultad de Ciencias Exactas y Tecnología, UNT",
    text: "Participación en la formulación, seguimiento y presentación de proyectos estudiantiles ante el órgano de gobierno de la facultad.",
  },
  {
    period: "2021 – 2023",
    category: "Formación cívica",
    title: "Delegado y organizador de Modelos de Naciones Unidas",
    org: "Uniendo Metas",
    text: "Participación como delegado en simulaciones de la ONU y, luego, en la gestión y organización de modelos: negociación, redacción de resoluciones, oratoria y coordinación de equipos.",
  },
  {
    period: "2018 – 2022",
    category: "Voluntariado",
    title: "Misionero y animador salesiano",
    org: "Movimiento Juvenil Salesiano",
    text: "Misiones en comunidades y animación de grupos juveniles; catequesis y acompañamiento de niños y adolescentes. Experiencia sostenida de trabajo en equipo y liderazgo de grupos.",
  },
]

export default function Trajectory() {
  return (
    <section id="trajectory" className="border-t border-border bg-muted/40 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">Experiencia, liderazgo y participación</p>
        <h2 className="mb-12 text-3xl md:text-5xl">Trayectoria<span className="text-primary">.</span></h2>
        <ol className="border-l-2 border-foreground">
          {entries.map(entry => (
            <li key={entry.title} className="relative pb-10 pl-8 last:pb-0 md:pl-12">
              <span aria-hidden="true" className="absolute -left-[7px] top-1.5 h-3 w-3 bg-primary" />
              <div className="grid gap-2 md:grid-cols-[160px_1fr] md:gap-8">
                <p className="font-mono text-sm text-muted-foreground">{entry.period}</p>
                <div>
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-primary">{entry.category}</p>
                  <h3 className="text-xl">{entry.title}</h3>
                  <p className="mb-3 text-sm text-muted-foreground">{entry.org}</p>
                  <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">{entry.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
