"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CodeIcon, HeartIcon, UsersIcon } from "lucide-react"
import BackgroundShapes from "@/components/background-shapes"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-muted/50 bauhaus-section section-with-shapes">
      <BackgroundShapes intensity="low" colorScheme="primary" />

      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 uppercase">Sobre Mí</h2>
          <div className="w-24 h-2 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono">
            Soy un apasionado estudiante de ingeniería que combina la tecnología con el servicio a los demás.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeIn}
          >
            <Card className="bauhaus-card">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 bg-primary p-3 w-16 h-16 flex items-center justify-center mx-auto">
                  <CodeIcon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 uppercase">Ingeniero en Formación</h3>
                <p className="text-muted-foreground font-mono">
                  Estudiante de 4º año de Ingeniería en Computación en FACET, con pasión por la tecnología y la
                  innovación.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <Card className="bauhaus-card">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 bg-secondary p-3 w-16 h-16 flex items-center justify-center mx-auto">
                  <HeartIcon className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 uppercase">Salesiano Comprometido</h3>
                <p className="text-muted-foreground font-mono">
                  Catequista y misionero salesiano, llevando el mensaje de Don Bosco a jóvenes de diferentes
                  comunidades.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeIn}
          >
            <Card className="bauhaus-card">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 bg-tertiary p-3 w-16 h-16 flex items-center justify-center mx-auto">
                  <UsersIcon className="h-8 w-8 text-tertiary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 uppercase">Líder Estudiantil</h3>
                <p className="text-muted-foreground font-mono">
                  Fundador de un grupo de estudiantes de ingeniería dedicado a impulsar metas en jóvenes a través de
                  proyectos y viajes.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
          className="mt-12 p-6 border-2 border-foreground relative"
        >
          <div className="absolute top-0 left-0 w-4 h-4 bg-primary transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-0 right-0 w-4 h-4 bg-secondary transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 bg-tertiary transform -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-primary transform translate-x-1/2 translate-y-1/2"></div>
          <p className="text-center italic font-serif">
            "Mi misión es combinar mi formación técnica con los valores salesianos para crear un impacto positivo en la
            vida de los jóvenes, especialmente aquellos con menos oportunidades."
          </p>
        </motion.div>
      </div>
    </section>
  )
}

