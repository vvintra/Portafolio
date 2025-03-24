"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeartIcon, MapIcon, BookIcon } from "lucide-react"
import BackgroundShapes from "@/components/background-shapes"

export default function SalesianWork() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="salesian" className="py-20 bg-muted/50 section-with-shapes">
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
          <h2 className="text-3xl font-bold mb-4">Labor Salesiana</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mi compromiso con la educación y evangelización en el espíritu de Don Bosco
          </p>
        </motion.div>

        <Tabs defaultValue="catequesis" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="catequesis">Catequesis</TabsTrigger>
            <TabsTrigger value="misiones">Misiones</TabsTrigger>
          </TabsList>

          <TabsContent value="catequesis">
            <div className="w-full">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                variants={fadeIn}
                className="flex flex-col justify-center"
              >
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <BookIcon className="mr-2 h-6 w-6 text-primary" />
                  Catequista Salesiano
                </h3>
                <p className="mb-4">
                  Como catequista salesiano, me dedico a la formación espiritual y humana de niños y jóvenes, siguiendo
                  el sistema preventivo de Don Bosco basado en la razón, la religión y el amor.
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Preparación para los sacramentos</li>
                  <li>Acompañamiento a grupos juveniles</li>
                  <li>Organización de retiros espirituales</li>
                  <li>Formación en valores cristianos y ciudadanos</li>
                </ul>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="misiones">
            <div className="w-full">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                variants={fadeIn}
                className="flex flex-col justify-center"
              >
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <MapIcon className="mr-2 h-6 w-6 text-primary" />
                  Misionero Salesiano
                </h3>
                <p className="mb-4">
                  Como misionero salesiano, llevo el mensaje de esperanza y alegría a comunidades rurales y urbanas
                  marginadas, compartiendo no solo la fe, sino también conocimientos y habilidades que ayuden a mejorar
                  su calidad de vida.
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Misiones rurales en diferentes provincias</li>
                  <li>Proyectos de desarrollo comunitario</li>
                  <li>Talleres de formación técnica para jóvenes</li>
                  <li>Actividades recreativas y culturales</li>
                </ul>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={fadeIn}
          className="mt-12 text-center"
        >
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <HeartIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Espíritu Salesiano</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                "La educación es cosa del corazón" - Don Bosco. Mi labor salesiana se basa en crear ambientes educativos
                donde los jóvenes se sientan amados, respetados y acompañados en su crecimiento integral.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

