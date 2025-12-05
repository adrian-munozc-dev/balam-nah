"use client"

export function ChristmasFlyers() {
  const flyers = [
    { src: "/flayer1.png", alt: "Flyer Navideño 1" },
    { src: "/flayer2.png", alt: "Flyer Navideño 2" },
    { src: "/flayer3.png", alt: "Flyer Navideño 3" },
  ]

  return (
    <section id="navidad" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/glamping.PNG" 
          alt="Navidad Balam-Nah" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-white drop-shadow-lg">
            🎄 Felices Fiestas 🎄
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto text-white">
            Desde la Selva Maya, te enviamos nuestros mejores deseos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {flyers.map((flyer, index) => (
            <div 
              key={index} 
              className="animate-scale-in hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-[500px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm border-2 border-white/10">
                <img 
                  src={flyer.src} 
                  alt={flyer.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje final */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-block bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border border-white/20">
            <p className="text-white text-lg md:text-xl font-serif italic">
              "En la naturaleza encontramos la verdadera esencia de la Navidad"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}