"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroSlides = [
  {
    id: 1,
    image: "/modern-house-construction.png",
    title: "Tu Nuevo Hogar Te Espera",
    subtitle: "Construcción en seco de alta calidad",
    description: "Especialistas en viviendas permanentes, casas quintas y propiedades de inversión.",
    cta: "Ver Catálogo",
  },
  {
    id: 2,
    image: "/modern-beach-house.png",
    title: "Casas de Playa Exclusivas",
    subtitle: "Diseño y confort junto al mar",
    description: "Construimos tu refugio perfecto frente al océano con materiales de primera calidad.",
    cta: "Conocer Más",
  },
  {
    id: 3,
    image: "/elegant-country-house.png",
    title: "Casas Quintas de Ensueño",
    subtitle: "Tranquilidad en cada detalle",
    description: "Espacios amplios y naturales para disfrutar en familia los fines de semana.",
    cta: "Solicitar Info",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="parallax h-full w-full flex items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`,
            }}
          >
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-5xl md:text-7xl font-black mb-4 font-roboto">{slide.title}</h1>
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-secondary">{slide.subtitle}</h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">{slide.description}</p>
              <Button size="lg" className="text-lg px-8 py-3">
                {slide.cta}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-primary" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
