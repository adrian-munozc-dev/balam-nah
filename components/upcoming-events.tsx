"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function UpcomingEvents() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Fecha objetivo: 1 de noviembre a las 19:00 (7:00 PM) hora local
  let eventDate = new Date(`${new Date().getFullYear()}-11-01T19:00:00`)

  // Si ya pasó este 1 de noviembre, fijamos la del próximo año
  if (eventDate.getTime() < Date.now()) {
    eventDate = new Date(`${new Date().getFullYear() + 1}-11-01T19:00:00`)
  }



  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = eventDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="eventos" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/hanal.jpg" alt="Eventos Balam-Nah" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-white">
            Próximos Eventos
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto text-white">
            No te pierdas nuestras experiencias especiales
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/95 backdrop-blur-sm animate-scale-in">
            <CardHeader>
              <CardTitle className="text-3xl font-serif text-center">
                Janal Pixán
              </CardTitle>
              <div className="flex items-center justify-center gap-4 text-muted-foreground mt-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>
                    {eventDate.toLocaleDateString("es-MX", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>19:00 hrs</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground mb-8 leading-relaxed">
                Únete a nosotros para una celebración única de Janal Pixán, donde honraremos a nuestros seres queridos que han partido. Disfruta de una noche mágica llena de tradiciones, música y gastronomía típica.
              </p>

              {/* Countdown Timer */}
              <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
                {[
                  { label: "Días", value: timeLeft.days },
                  { label: "Horas", value: timeLeft.hours },
                  { label: "Minutos", value: timeLeft.minutes },
                  { label: "Segundos", value: timeLeft.seconds },
                ].map((item, index) => (
                  <div key={index} className="bg-primary text-primary-foreground rounded-lg p-4 text-center flex flex-col items-center justify-center">
                    <div className="text-3xl md:text-4xl font-bold font-mono">
                      {item.value.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xs md:text-sm mt-1 opacity-90">{item.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}