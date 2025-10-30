"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, X } from "lucide-react"

const galleryItems = [
  {
    type: "image",
    src: "/g1.jpeg",
    alt: "Camping en Balam-Nah",
  },
  {
    type: "image",
    src: "/g2.jpeg",
    alt: "Glamping de lujo",
  },
  {
    type: "image",
    src: "/g3.jpeg",
    alt: "Aventura en kayak",
  },
  {
    type: "image",
    src: "/g4.jpeg",
    alt: "Avistamiento de aves",
  },
  {
    type: "image",
    src: "/g5.jpeg",
    alt: "Senderismo",
  },
  {
    type: "image",
    src: "/g6.jpeg",
    alt: "Atardecer en Balam-Nah",
    thumbnail: "/atardecer-laguna-naturaleza.jpg",
  },
  {
    type: "image",
    src: "/g7.jpeg",
    alt: "Taller de tintes",
  },
  {
    type: "image",
    src: "/g8.jpeg",
    alt: "Noches estrelladas",
  },
]

export function Gallery() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  return (
    <section id="galeria" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-4">Galería</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre la belleza de Balam-Nah a través de nuestras imágenes y videos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedItem(index)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.type === "video" ? item.thumbnail : item.src}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 bg-primary/90 rounded-full group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-primary-foreground fill-current" />
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem !== null && (
          <div
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedItem(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => setSelectedItem(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="max-w-5xl max-h-[90vh] w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <img
                src={galleryItems[selectedItem].src}
                alt={galleryItems[selectedItem].alt}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}