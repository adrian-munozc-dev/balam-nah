"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function LocationMap() {
  const [isMapOpen, setIsMapOpen] = useState(false)

  return (
    <section id="ubicacion" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-4">Nuestra Ubicación</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Encuéntranos en el corazón de la selva maya
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Primera columna: Dirección y Google Maps */}
            <div className="space-y-8">
              {/* Información de Dirección */}
              <div className="bg-card p-8 rounded-lg border border-border shadow-lg animate-fade-in-up">
                <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Dirección</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  V. Rancho Balam Nah, Número 781, calle 72<br />
                  Carretera Santa I. entronque laguna Ocom y Chancah<br />
                  77200 Felipe Carrillo Puerto, Quintana Roo
                </p>
              </div>

              {/* Google Maps */}
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30093.35745706692!2d-88.0691039!3d19.4698034!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5a839269e7bee9%3A0x6786939f71d8059f!2sBALAM-NAH%20Cooperativa%20%22La%20casa%20del%20sigilo%22%20(centro%20ecotur%C3%ADstico)!5e0!3m2!1ses!2smx!4v1760908894241!5m2!1ses!2smx" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Balam-Nah en Google Maps"
                />
              </div>
            </div>

            {/* Segunda columna: Mapa Ilustrativo */}
            <div 
              className="relative h-[735px] rounded-lg overflow-hidden shadow-xl animate-scale-in cursor-pointer group"
              style={{ animationDelay: "0.2s" }}
              onClick={() => setIsMapOpen(true)}
            >
              <img
                src="/mapa.jpeg"
                alt="Mapa de Balam-Nah"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/80 px-4 py-2 rounded-lg">
                  Click para ampliar
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal para ver mapa completo */}
        {isMapOpen && (
          <div
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setIsMapOpen(false)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => setIsMapOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="max-w-5xl max-h-[90vh] w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <img
                src="/mapa.jpeg"
                alt="Mapa de Balam-Nah"
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}