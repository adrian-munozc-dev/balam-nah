"use client"

import { useEffect, useRef } from "react"

interface Snowflake {
  x: number
  y: number
  radius: number
  speed: number
  wind: number
}

export function Snowfall() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configurar tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Crear copos de nieve
    const snowflakes: Snowflake[] = []
    const numberOfFlakes = 50

    for (let i = 0; i < numberOfFlakes; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.5,
        wind: Math.random() * 0.5 - 0.25,
      })
    }

    // Animar copos
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      snowflakes.forEach((flake) => {
        ctx.beginPath()
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
        ctx.fill()

        // Mover el copo
        flake.y += flake.speed
        flake.x += flake.wind

        // Reiniciar cuando sale de la pantalla
        if (flake.y > canvas.height) {
          flake.y = -10
          flake.x = Math.random() * canvas.width
        }

        if (flake.x > canvas.width) {
          flake.x = 0
        } else if (flake.x < 0) {
          flake.x = canvas.width
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: "screen" }}
    />
  )
}