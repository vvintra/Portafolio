"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpenIcon, HeartIcon, StarIcon, SunIcon, MapIcon } from "lucide-react"
import BackgroundShapes from "@/components/background-shapes"

export default function Poems() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const poems = [
    {
      id: "luz",
      title: "Luz en la Oscuridad",
      icon: <SunIcon className="h-5 w-5" />,
      content: (
        <>
          <p className="mb-4">
            Cuando te vi sentí como si el mundo a mi alrededor,
            <br />
            que hasta el momento me resultaba frío y extraño,
            <br />
            se iluminara con la cálida luz del sol.
          </p>
          <p className="mb-4">
            Al principio no se me ocurrió de dónde podría haber salido tanta luz,
            <br />y me pasó, como al que observa el sol tras un denso manto de nubes,
            <br />
            se me antojó plano como un disco de luz mortecina,
            <br />
            solo para darme cuenta que tú eras toda fuente de luz.
          </p>
          <p className="mb-4">
            Cuando te vas el mundo se apaga
            <br />y vuelve a ser tan gris como antes.
          </p>
          <p>
            No creo ser el único que se sienta así por tu ausencia,
            <br />
            pero mi angustia es superior a cualquier otro,
            <br />
            porque tengo claro cuán vanas son mis esperanzas,
            <br />
            consciente de que mi abulia y retraimiento no son muy atractivos,
            <br />
            creo que me resignaré a admirarte desde la distancia,
            <br />
            bañado por la calidez de la luz que irradias,
            <br />
            contemplando en silencio tu destello.
          </p>
        </>
      ),
    },
    {
      id: "nostalgia",
      title: "Ahogado en Nostalgia",
      icon: <HeartIcon className="h-5 w-5" />,
      content: (
        <>
          <p className="mb-4">
            Siento que me estoy ahogando,
            <br />
            pues el tiempo corre y el mar se expande,
            <br />
            me ahogo en esta nostalgia de ti,
            <br />
            me ahogo en este dolor de no verte,
            <br />
            me ahogo en este llanto de no poder dibujar una sonrisa.
          </p>
          <p className="mb-4">
            Miedo al destino, terror a lo desconocido, dolor por lo perdido...
            <br />
            estos son los sentimientos que me ahogan.
          </p>
          <p>
            Y sin embargo, en medio de todo este caos,
            <br />
            siento una pequeña chispa de esperanza.
            <br />
            Una esperanza de que un día, tal vez, podamos vernos de nuevo.
            <br />Y entonces, quizás, podré sonreír de verdad.
            <br />
            Me siento pequeño ante lo insondable del porvenir,
            <br />
            este miedo al destino es mi terror interno.
          </p>
        </>
      ),
    },
    {
      id: "camino",
      title: "Camino Incierto",
      icon: <MapIcon className="h-5 w-5" />,
      content: (
        <>
          <p className="mb-4">
            No sé qué hacer con mi vida, no sé a dónde ir,
            <br />
            siento que todo está fuera de mi control y no sé cómo actuar.
            <br />
            Me siento impotente e insignificante ante este inmenso universo,
            <br />
            no sé qué hacer con mi vida, no sé a dónde ir.
          </p>
          <p className="mb-4">
            Me siento perdido en el camino, sin saber qué rumbo tomar,
            <br />
            no quiero seguir así, viviendo sin rumbo ni meta.
            <br />
            Quiero encontrar mi propósito, descubrir mi destino.
            <br />
            Pero el miedo me paraliza, me impide avanzar,
            <br />
            No quiero arriesgarme, no quiero equivocarme.
          </p>
          <p>
            ¿Cómo saber qué camino tomar si todos me parecen igual de oscuros?
            <br />
            ¿Cómo saber qué es lo que quiero si no sé lo que me espera?
            <br />
            Todo parece tan incierto.
            <br />
            No sé qué hacer.
          </p>
        </>
      ),
    },
    {
      id: "palabra",
      title: "La Flor de la Palabra",
      icon: <BookOpenIcon className="h-5 w-5" />,
      content: (
        <>
          <p className="mb-4">
            La palabra que es flor de nuestra boca
            <br />y que brota de nuestra conciencia,
            <br />
            la palabra que es vida de nuestro mundo,
            <br />
            sigue siendo grávida de futuro,
            <br />
            esperanza que no morirá.
          </p>
          <p className="mb-4">
            Podrá morir el rostro oculto de quien la nombra
            <br />
            pero la palabra que viene desde el fondo de la historia
            <br />y de la tierra ya no podrá ser arrancada.
          </p>
          <p className="mb-4">
            Mientras alguien padezca, mientras alguien llore,
            <br />
            mientras alguien defienda nuestra libertad,
            <br />
            la palabra, esa flor de la boca que es vida del mundo, vivirá.
          </p>
          <p>
            En el éxtasis de un atardecer que no será una noche,
            <br />
            en la fragancia de un verano que no será un invierno,
            <br />
            en la esperanza de un pueblo que no será una raza,
            <br />
            la flor de la palabra seguirá siendo futuro.
          </p>
        </>
      ),
    },
    {
      id: "escape",
      title: "El Sueño de Escapar",
      icon: <StarIcon className="h-5 w-5" />,
      content: (
        <>
          <p className="mb-4">
            Pensé en irme lejos, donde nadie me conociera;
            <br />
            cumplir el sueño viajero que siempre me propuse,
            <br />
            una vida desobligada.
          </p>
          <p className="mb-4">
            No tendría que convencer a nadie,
            <br />
            ni a mí mismo de que estaba destinado a hacer algo importante.
            <br />
            Lejos de la presión de ser algo, de ser alguien,
            <br />
            el cálido abrazo de asumirse como un hombre común,
            <br />
            sin aspiraciones de nada, sin deseo alguno,
            <br />
            más que vivir en el anonimato del mundo…
          </p>
          <p>
            Pero no puedo, nunca he podido
            <br />y sé que solo son fantasías con las que juego en mi mente.
            <br />
            El hombre común puede irse al demonio.
          </p>
        </>
      ),
    },
  ]

  return (
    <section id="poems" className="py-20 bg-muted/30 section-with-shapes">
      <BackgroundShapes intensity="low" colorScheme="tertiary" />

      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-heading">Mis Poemas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expresiones del alma, pensamientos convertidos en versos
          </p>
        </motion.div>

        <Tabs defaultValue="luz" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            {poems.map((poem) => (
              <TabsTrigger key={poem.id} value={poem.id} className="flex items-center gap-2">
                {poem.icon}
                <span className="hidden md:inline">{poem.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {poems.map((poem) => (
            <TabsContent key={poem.id} value={poem.id}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={fadeIn}
              >
                <Card className="overflow-hidden border-primary/20">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-2xl font-semibold mb-6 text-center gradient-heading">{poem.title}</h3>
                    <div className="prose prose-lg dark:prose-invert max-w-3xl mx-auto text-center italic">
                      {poem.content}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

