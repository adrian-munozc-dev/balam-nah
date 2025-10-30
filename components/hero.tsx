"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/portada.jpg" alt="Balam-Nah naturaleza" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-primary-foreground mb-6 text-balance">
          BALAM-NAH
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto text-pretty">
          Descubre el abrazo de la naturaleza
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg" asChild>
            <a href="#actividades">Explorar Actividades</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg bg-background/20 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="#contacto">Reservar Ahora</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#actividades" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary-foreground" />
      </a>
    </section>
  )
}
