import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Silvana Xool",
    location: "Chunhuhub, Quintana Roo",
    rating: 5,
    text: "Una experiencia inolvidable. El glamping es espectacular y el personal muy amable. Los atardeceres en la laguna son mágicos.",
    image: "/silvana.jpeg",
  },
  {
    name: "Rubi Moreno",
    location: "Tulum, Quintana Roo",
    rating: 5,
    text: "El kayak por los manglares fue increíble. Vimos muchas aves y la naturaleza es impresionante. Totalmente recomendado.",
    image: "/rubi.jpeg",
  },
  {
    name: "Rosa Canul",
    location: "Santa Isabel, Quintana Roo",
    rating: 5,
    text: "El taller de tintes naturales fue fascinante. Aprendimos mucho sobre la cultura maya y la conexión con la naturaleza.",
    image: "/rosa.jpeg",
  },
  {
    name: "Miguel Nah",
    location: "Señor, Quintana Roo",
    rating: 5,
    text: "Perfecto para desconectar. El camping es cómodo y las noches estrelladas son espectaculares. Volveremos sin duda.",
    image: "/miguel.jpeg",
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-4">
            Experiencias de Nuestros Visitantes
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre la opinión de quienes ya vivieron la magia de Balam-Nah
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="animate-scale-in hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <div className="flex gap-1 mt-2">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
