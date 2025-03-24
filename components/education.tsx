"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCapIcon, BookOpenIcon, AwardIcon } from "lucide-react"
import BackgroundShapes from "@/components/background-shapes"

export default function Education() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="education" className="py-20 section-with-shapes">
      <BackgroundShapes intensity="low" colorScheme="secondary" />

      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Formación Académica</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Mi trayectoria educativa y habilidades técnicas</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeIn}
          >
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <GraduationCapIcon className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Ingeniería en Computación</CardTitle>
                  <p className="text-sm text-muted-foreground">FACET - 4º año</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Especialización en desarrollo de software</li>
                  <li>Proyectos de investigación en inteligencia artificial</li>
                  <li>Participación en hackathons universitarios</li>
                  <li>Promedio académico destacado</li>
                </ul>
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
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <BookOpenIcon className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Formación Complementaria</CardTitle>
                  <p className="text-sm text-muted-foreground">Cursos y certificaciones</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Desarrollo web full-stack (React, Node.js)</li>
                  <li>Ciencia de datos y aprendizaje automático</li>
                  <li>Formación en liderazgo y trabajo en equipo</li>
                  <li>Certificación en metodologías ágiles</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={fadeIn}
          className="mt-12"
        >
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <AwardIcon className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Habilidades Técnicas</CardTitle>
                <p className="text-sm text-muted-foreground">Competencias en desarrollo</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Lenguajes de Programación</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">JavaScript/TypeScript</span>
                        <span className="text-sm">90%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Python</span>
                        <span className="text-sm">85%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Java</span>
                        <span className="text-sm">75%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Tecnologías</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">React/Next.js</span>
                        <span className="text-sm">85%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Node.js/Express</span>
                        <span className="text-sm">80%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Bases de datos</span>
                        <span className="text-sm">70%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

