"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react"
import Image from "next/image"
import BackgroundShapes from "@/components/background-shapes"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/26ed6e2d-2cef-4caf-af98-24433e517995.jpg-ZBDY2hx1PnfgHLigDDXKVyf6viFv9u.jpeg",
      alt: "Campamento misionero salesiano con jóvenes",
      category: "Salesiano",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-24%20at%2002.03.34%20%281%29-dayZwlf7d9XqTvZulSqZ3HA7lsf2OK.jpeg",
      alt: "Grupo de entrenamiento de Brazilian Jiu-Jitsu",
      category: "Artes Marciales",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-24%20at%2002.03.34%20%282%29-aWles5TGWxPTUcC4NJq81j4Vuod04Z.jpeg",
      alt: "Amigos del grupo de ingeniería",
      category: "Ingeniería",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-24%20at%2002.03.34%20%283%29-8cIp5wxbfMyAlwbArX7LXLAY8btR1F.jpeg",
      alt: "Celebración con compañeros de la universidad",
      category: "Social",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LorS8sf0dhHrt0AVwDc5CFdSdRTzUa.png",
      alt: "Grupo de voluntarios en actividad comunitaria",
      category: "Misiones",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-24%20at%2002.03.34%20%286%29-kVopSGnqvif1aDg9eDjUOVlzlaYPaD.jpeg",
      alt: "Panel de debate en modelo de Naciones Unidas",
      category: "Modelos de ONU",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-24%20at%2002.03.34%20%284%29-2u0Ixg81auO1SQosv8bsxljKJdGQzm.jpeg",
      alt: "Actividad misionera salesiana",
      category: "Salesiano",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ef9a59ac-1622-402b-815f-5e531ed1dd12.jpg-3Siru3vetLxHnnNDPCNpc2KW85kLSv.jpeg",
      alt: "Medalla de competición de Brazilian Jiu-Jitsu",
      category: "Artes Marciales",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/06faa2fb-95f7-4929-aa8e-e6d4c1b9a1fc.jpg-l0vdGeMEcF6jMuqIlXCfJewDPfrSsC.jpeg",
      alt: "Debate académico con compañeros",
      category: "Académico",
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    if (direction === "prev") {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section id="gallery" className="py-20 bg-muted/50 section-with-shapes">
      <BackgroundShapes intensity="low" colorScheme="mixed" />

      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-heading">Galería</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Momentos capturados durante misiones, competiciones, actividades académicas y viajes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  variants={fadeIn}
                  className="cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <Card className="overflow-hidden group h-64">
                    <div className="relative h-full w-full">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform group-hover:scale-105 duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                        <span className="text-white font-medium text-center">{image.alt}</span>
                        <span className="text-white/80 text-sm mt-1 px-2 py-0.5 rounded-full bg-primary/50 backdrop-blur-sm">
                          {image.category}
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                <div className="relative">
                  <button
                    className="absolute top-2 right-2 bg-black/60 text-white p-2 rounded-full z-10"
                    onClick={() => setSelectedImage(null)}
                  >
                    <XIcon className="h-5 w-5" />
                  </button>
                  <div className="relative h-[70vh] w-full">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    />
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <p className="text-white bg-black/60 inline-block px-4 py-2 rounded-lg backdrop-blur-sm">
                      {image.alt}
                    </p>
                  </div>
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full"
                    onClick={() => navigateImage("prev")}
                  >
                    <ChevronLeftIcon className="h-6 w-6" />
                  </button>
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full"
                    onClick={() => navigateImage("next")}
                  >
                    <ChevronRightIcon className="h-6 w-6" />
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}

