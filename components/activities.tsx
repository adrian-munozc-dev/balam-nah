import { Card, CardContent } from "@/components/ui/card"
import { Tent, Sparkles, TreePine, Bird, Waves, Palette } from "lucide-react"

const activities = [
  {
    icon: Tent,
    title: "Camping",
    description: "Nuestro camping se encuentra en un entorno natural impresionante al aire libre.",
    image: "/camping.jpg",
  },
  {
    icon: Sparkles,
    title: "Glamping",
    description:
      "Disfruta de las increíbles mañanas, atardeceres y noches estrelladas en nuestro magnífico alojamiento en Balam-Nah.",
    image: "/glamping.PNG",
  },
  {
    icon: TreePine,
    title: "Senderismo",
    description: "Explora los senderos con la belleza de árboles frutales que nos rodean.",
    image: "/senderismo.jpg",
  },
  {
    icon: Bird,
    title: "Avistamiento de Aves",
    description:
      "Conoce la variedad de especies de aves que puedes observar en Balam-Nah y disfruta de sus lindos cantos.",
    image: "/avistamiento.jpg",
  },
  {
    icon: Waves,
    title: "Aventura en Kayak",
    description:
      "Recorre en kayak los canales de la laguna O'ocom, sumérgete en la vida silvestre de la selva maya y respira el aire puro del manglar.",
    image: "/kayac.jpg",
  },
  {
    icon: Palette,
    title: "Taller de Tintes de Árboles",
    description:
      "Ofrecemos un taller con conocimientos milenarios ancestrales para la elaboración de tintes naturales.",
    image: "/tintes.jpg",
  },
]

export function Activities() {
  return (
    <section id="actividades" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-4">
            Nuestras Actividades
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Vive experiencias únicas que conectan tu espíritu con la naturaleza
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon
            return (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary rounded-lg">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-primary-foreground">{activity.title}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
