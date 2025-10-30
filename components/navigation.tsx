"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#actividades", label: "Actividades" },
    { href: "#galeria", label: "Galería" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#eventos", label: "Eventos" },
    { href: "#ubicacion", label: "Ubicación" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "nav-scrolled backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a href="#inicio" className="flex items-center md:ml-8">
            <img
              src={isScrolled ? "/logo-negro.png" : "/logo-blanco.png"}
              alt="Balam-Nah Logo"
              className="h-40 w-auto transition-all duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  isScrolled
                    ? "text-gray-800 hover:text-primary"
                    : "text-white hover:text-amber-800"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-800" : "text-white"}`} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled
                      ? "text-gray-800 hover:text-primary"
                      : "text-white hover:text-yellow-300"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
