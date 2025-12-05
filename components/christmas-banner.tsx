"use client"

import { Sparkles } from "lucide-react"

export function ChristmasBanner() {
  return (
    <div className="relative bg-red-900 py-12 md:py-16 overflow-hidden border-y-4 border-yellow-500">
      {/* Patrón decorativo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>
      
      {/* Brillo superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Título principal */}
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="h-7 w-7 text-yellow-300 animate-pulse" />
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white drop-shadow-lg">
              ¡Diciembre ha llegado!
            </h3>
            <Sparkles className="h-7 w-7 text-yellow-300 animate-pulse" />
          </div>
          
          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-white leading-relaxed font-medium">
            y con él, la magia de la Navidad y el Año Nuevo en la Selva Maya.
          </p>
          
          {/* Línea decorativa */}
          <div className="flex items-center justify-center gap-4 py-2">
            <div className="h-px w-16 bg-yellow-300" />
            <span className="text-yellow-300 text-xl">✨</span>
            <div className="h-px w-16 bg-yellow-300" />
          </div>
          
          {/* Mensaje principal */}
          <p className="text-base md:text-lg text-white leading-relaxed max-w-3xl mx-auto">
            Te invitamos a vivir una experiencia inolvidable en la naturaleza, 
            rodeado de la rica cultura y la biodiversidad de la comunidad.
          </p>
          
          {/* Decoración inferior */}
          <div className="pt-4">
            <div className="inline-flex items-center gap-3 text-2xl">
              <span>🎄</span>
              <span>✨</span>
              <span>🌟</span>
              <span>✨</span>
              <span>🎄</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Brillo inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
    </div>
  )
}