"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
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

  useEffect(() => {
    if (selectedImage === null) return
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") setSelectedImage(current => current === null ? null : (current + images.length - 1) % images.length)
      if (event.key === "ArrowRight") setSelectedImage(current => current === null ? null : (current + 1) % images.length)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [selectedImage, images.length])

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
            <motion.button
              key={image.src}
              type="button"
              aria-label={`Ampliar: ${image.alt}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
              className="cursor-pointer text-left"
              onClick={() => setSelectedImage(index)}
            >
              <Card className="overflow-hidden group h-64">
                <div className="relative h-full w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform group-hover:scale-105 duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                    <span className="text-white font-medium text-center">{image.alt}</span>
                    <span className="text-white/80 text-sm mt-1 px-2 py-0.5 rounded-full bg-primary/50 backdrop-blur-sm">{image.category}</span>
                  </div>
                </div>
              </Card>
            </motion.button>
          ))}
        </div>
        <Dialog open={selectedImage !== null} onOpenChange={open => { if (!open) setSelectedImage(null) }}>
          <DialogContent className="max-w-4xl border-border bg-background p-4">
            {selectedImage !== null && (
              <>
                <DialogTitle className="pr-8">{images[selectedImage].alt}</DialogTitle>
                <DialogDescription>{images[selectedImage].category} · Foto {selectedImage + 1} de {images.length}. Usá las flechas para navegar.</DialogDescription>
                <div className="relative">
                  <div className="relative h-[70vh] w-full">
                    <Image
                      src={images[selectedImage].src}
                      alt={images[selectedImage].alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    />
                  </div>
                  <button
                    type="button"
                    aria-label="Foto anterior"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full"
                    onClick={() => navigateImage("prev")}
                  >
                    <ChevronLeftIcon className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    aria-label="Foto siguiente"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full"
                    onClick={() => navigateImage("next")}
                  >
                    <ChevronRightIcon className="h-6 w-6" />
                  </button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
