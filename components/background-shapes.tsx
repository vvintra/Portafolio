"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface BackgroundShapesProps {
  intensity?: "low" | "medium" | "high"
  className?: string
  colorScheme?: "primary" | "secondary" | "tertiary" | "mixed"
  animated?: boolean
}

export default function BackgroundShapes({
  intensity = "medium",
  className = "",
  colorScheme = "mixed",
  animated = true,
}: BackgroundShapesProps) {
  // Estado para almacenar las formas generadas
  const [shapes, setShapes] = useState<any[]>([])

  // Determinar número de formas basado en la intensidad y el dispositivo
  const getShapeCount = () => {
    // Reducir la cantidad de formas en dispositivos móviles
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768
    const baseCount = intensity === "low" ? 3 : intensity === "medium" ? 5 : 7
    return isMobile ? Math.max(2, Math.floor(baseCount / 2)) : baseCount
  }

  // Generar formas solo una vez al montar el componente
  useEffect(() => {
    const generateShapes = () => {
      const shapeCount = getShapeCount()
      const newShapes = []

      for (let i = 0; i < shapeCount; i++) {
        const isEven = i % 2 === 0
        const shapeType = i % 3 // 0: square, 1: circle, 2: triangle

        // Tamaños más pequeños para mejor rendimiento
        const size = Math.floor(Math.random() * 80) + 80 // 80-160px
        const left = `${Math.floor(Math.random() * 80) + 10}%` // 10-90%
        const top = `${Math.floor(Math.random() * 80) + 10}%` // 10-90%
        // Duraciones más largas para animaciones más suaves
        const duration = Math.floor(Math.random() * 20) + 20 // 20-40s
        const delay = i * 0.5 // stagger animations

        // Determine shape class based on colorScheme
        let shapeClass = ""
        if (colorScheme === "mixed") {
          if (i % 3 === 0) shapeClass = "bauhaus-shape"
          else if (i % 3 === 1) shapeClass = "bauhaus-circle"
          else shapeClass = "bauhaus-triangle"
        } else if (colorScheme === "primary") {
          shapeClass = shapeType === 0 ? "bauhaus-shape" : shapeType === 1 ? "bauhaus-shape-alt" : "bauhaus-shape"
        } else if (colorScheme === "secondary") {
          shapeClass = shapeType === 0 ? "bauhaus-circle" : shapeType === 1 ? "bauhaus-circle-alt" : "bauhaus-circle"
        } else if (colorScheme === "tertiary") {
          shapeClass =
            shapeType === 0 ? "bauhaus-triangle" : shapeType === 1 ? "bauhaus-triangle-alt" : "bauhaus-triangle"
        }

        const shape = {
          id: i,
          type: shapeType,
          class: shapeClass,
          style: { width: `${size}px`, height: `${size}px`, left, top },
          animation: animated
            ? {
                rotate: isEven ? [0, 360] : [0, -360],
                opacity: [0.2, 0.1, 0.2], // Reducir opacidad para mejor rendimiento
                scale: isEven ? [1, 1.05, 1] : [1, 0.95, 1], // Reducir escala para mejor rendimiento
              }
            : { opacity: 0.15 },
          transition: {
            duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay,
          },
        }

        newShapes.push(shape)
      }

      return newShapes
    }

    setShapes(generateShapes())
  }, [intensity, colorScheme, animated])

  // Si no hay formas (durante SSR), no renderizar nada
  if (shapes.length === 0) return null

  return (
    <div className={`absolute inset-0 overflow-hidden z-0 pointer-events-none ${className}`}>
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={shape.class}
          style={shape.style}
          animate={shape.animation}
          transition={shape.transition}
          initial={{ opacity: 0 }}
        />
      ))}
    </div>
  )
}

