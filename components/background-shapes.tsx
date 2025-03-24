"use client"

import { motion } from "framer-motion"

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
  // Determine number of shapes based on intensity
  const shapeCount = intensity === "low" ? 4 : intensity === "medium" ? 6 : 8

  // Generate random shapes
  const generateShapes = () => {
    const shapes = []

    for (let i = 0; i < shapeCount; i++) {
      const isEven = i % 2 === 0
      const shapeType = i % 3 // 0: square, 1: circle, 2: triangle

      const size = Math.floor(Math.random() * 100) + 100 // 100-200px
      const left = `${Math.floor(Math.random() * 80) + 10}%` // 10-90%
      const top = `${Math.floor(Math.random() * 80) + 10}%` // 10-90%
      const duration = Math.floor(Math.random() * 15) + 15 // 15-30s
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
              opacity: [0.3, 0.1, 0.3],
              scale: isEven ? [1, 1.1, 1] : [1, 0.9, 1],
            }
          : { opacity: 0.2 },
        transition: {
          duration,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          delay,
        },
      }

      shapes.push(shape)
    }

    return shapes
  }

  const shapes = generateShapes()

  return (
    <div className={`absolute inset-0 overflow-hidden z-0 pointer-events-none ${className}`}>
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={shape.class}
          style={shape.style}
          animate={shape.animation}
          transition={shape.transition}
        />
      ))}
    </div>
  )
}

