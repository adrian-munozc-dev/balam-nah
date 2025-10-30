import { Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-center">
          {/* Logo y descripción */}
          <div className="flex flex-col items-center md:items-center -mt-6">
            <img
              src="/logo-blanco.png"
              alt="Balam-Nah Logo"
              className="h-50 w-auto"
            />
            <p className="text-primary-foreground/80 leading-relaxed text-sm max-w-xs md:max-w-none">
              Centro ecoturístico que promuebe el desarrollo sostenible familiar-comunitario, integración, conservación de flora y fauna.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="flex flex-col items-center md:items-center">
            <h4 className="font-semibold mb-6 text-lg">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {[
                ["#actividades", "Actividades"],
                ["#galeria", "Galería"],
                ["#testimonios", "Testimonios"],
                ["#eventos", "Eventos"],
                ["#contacto", "Contacto"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes sociales y contacto */}
          <div className="flex flex-col items-center md:items-center">
            <h4 className="font-semibold mb-6 text-lg">Conéctate</h4>

            <div className="flex gap-3 mb-6">
              <a
                href="https://www.facebook.com/share/17mCZLjHpt/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-lg transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/balamnah.official?igsh=cnI1YnFkcjZmM3o5&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-lg transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@balamnah6?_t=ZS-90gxqCDrnw9&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-lg transition-all duration-300"
                aria-label="TikTok"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>

            <div className="space-y-3 text-sm text-primary-foreground/80 text-center md:text-right">
              <div className="flex justify-center md:justify-center items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Laguna O'ocom, Selva Maya</span>
              </div>
              <div className="flex justify-center md:justify-center items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>baalam.nah@gmail.com</span>
              </div>
              <div className="flex justify-center md:justify-center items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+52 (983) 181-1350</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6">
          <div className="text-center">
            <p className="text-primary-foreground/60 text-sm">
              &copy; {new Date().getFullYear()} Balam-Nah. Todos los derechos reservados.
            </p>
            <p className="text-primary-foreground/60 text-xs mt-2">
              Comparte tus experiencias con{" "}
              <span className="font-semibold text-accent">#BalamNah</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
