"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LightbulbIcon, UsersIcon, RocketIcon, GlobeIcon } from "lucide-react"
import BackgroundShapes from "@/components/background-shapes"

export default function EngineeringGroup() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="engineering" className="py-20 section-with-shapes">
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
          <h2 className="text-3xl font-bold mb-4">Grupo de Ingeniería</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Impulsando metas y sueños en jóvenes estudiantes de ingeniería
          </p>
        </motion.div>

        <div className="w-full mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-semibold mb-4">Nuestra Misión</h3>
            <p className="mb-6">
              Fundé este grupo con la visión de crear un espacio donde estudiantes de ingeniería puedan desarrollar sus
              habilidades técnicas y humanas, a través de proyectos innovadores, viajes formativos y actividades de
              servicio comunitario.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <LightbulbIcon className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-medium">Innovación</h4>
                  <p className="text-sm text-muted-foreground">Fomentamos la creatividad y el pensamiento crítico</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <UsersIcon className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-medium">Colaboración</h4>
                  <p className="text-sm text-muted-foreground">Trabajamos en equipo para lograr objetivos comunes</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <RocketIcon className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-medium">Crecimiento</h4>
                  <p className="text-sm text-muted-foreground">Impulsamos el desarrollo personal y profesional</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <GlobeIcon className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-medium">Impacto</h4>
                  <p className="text-sm text-muted-foreground">Buscamos generar un cambio positivo en la sociedad</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={fadeIn}
        >
          <Card>
            <CardHeader>
              <CardTitle>Viajes y Proyectos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium mb-3">Viajes Formativos</h4>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Visitas a empresas tecnológicas líderes</li>
                    <li>Participación en congresos y ferias de ingeniería</li>
                    <li>Intercambios con universidades nacionales</li>
                    <li>Viajes de servicio a comunidades rurales</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3">Proyectos Destacados</h4>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Desarrollo de aplicaciones con impacto social</li>
                    <li>Talleres de robótica para escuelas secundarias</li>
                    <li>Hackathons solidarios</li>
                    <li>Mentorías para estudiantes de primer año</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

