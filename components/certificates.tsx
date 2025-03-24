"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { AwardIcon, CalendarIcon, ExternalLinkIcon } from "lucide-react"
import Image from "next/image"
import BackgroundShapes from "@/components/background-shapes"

export default function Certificates() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const certificates = [
    {
      title: "Desarrollo Web Full Stack",
      issuer: "Platzi",
      date: "2023",
      image: "https://v0.blob.com/platzi-certificate.png",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      link: "#",
    },
    {
      title: "Python para Ciencia de Datos",
      issuer: "Coursera",
      date: "2022",
      image: "https://v0.blob.com/coursera-certificate.png",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib"],
      link: "#",
    },
    {
      title: "Fundamentos de Ingeniería de Software",
      issuer: "edX",
      date: "2022",
      image: "https://v0.blob.com/edx-certificate.png",
      skills: ["Algoritmos", "Estructuras de Datos", "Patrones de Diseño"],
      link: "#",
    },
    {
      title: "Desarrollo de Aplicaciones Móviles",
      issuer: "Google",
      date: "2021",
      image: "https://v0.blob.com/google-certificate.png",
      skills: ["Android", "Kotlin", "Firebase"],
      link: "#",
    },
    {
      title: "Inteligencia Artificial y Machine Learning",
      issuer: "IBM",
      date: "2021",
      image: "https://v0.blob.com/ibm-certificate.png",
      skills: ["TensorFlow", "Scikit-learn", "Deep Learning"],
      link: "#",
    },
  ]

  return (
    <section id="certificates" className="py-20 bg-muted/30 section-with-shapes">
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-heading">Certificaciones</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Formación continua y especialización en diferentes áreas
          </p>
        </motion.div>

        <ScrollArea className="w-full whitespace-nowrap pb-6">
          <div className="flex space-x-6">
            {certificates.map((certificate, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={fadeIn}
                className="w-[300px] md:w-[350px] flex-shrink-0"
              >
                <Card className="overflow-hidden card-hover h-full">
                  <div className="relative h-40 w-full">
                    <Image
                      src={certificate.image || "/placeholder.svg"}
                      alt={certificate.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        {certificate.issuer}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold">{certificate.title}</h3>
                      <a
                        href={certificate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLinkIcon className="h-4 w-4" />
                      </a>
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{certificate.date}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {certificate.skills.map((skill, i) => (
                        <Badge key={i} variant="outline" className="bg-primary/5 border-primary/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          variants={fadeIn}
          className="mt-12 flex justify-center"
        >
          <Card className="max-w-2xl bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <AwardIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Aprendizaje Continuo</h3>
                <p className="text-muted-foreground">
                  Me mantengo constantemente actualizado con las últimas tecnologías y metodologías a través de cursos,
                  certificaciones y proyectos prácticos. El aprendizaje continuo es fundamental para mi desarrollo
                  profesional y personal.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

