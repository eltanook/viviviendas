"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const heroSlides = [
  {
    id: 1,
    image: "/modern-house-construction.png",
    title: "Tu nuevo hogar te espera",
    subtitle: "Construcción en seco de alta calidad",
    description: "Especialistas en viviendas permanentes, casas quintas y propiedades de inversión.",
    cta: "Ver catálogo",
    link: "/catalogo"
  },
  {
    id: 2,
    image: "/modern-beach-house.png",
    title: "Casas de playa exclusivas",
    subtitle: "Diseño y confort junto al mar",
    description: "Construimos tu refugio perfecto frente al océano con materiales de primera calidad.",
    cta: "Ver casas de playa",
    link: "/catalogo?categoria=Viviendas%20por%20Tipo&subcategoria=Casa%20de%20Playa"
  },
  {
    id: 3,
    image: "/elegant-country-house.png",
    title: "Casas quintas de ensueño",
    subtitle: "Tranquilidad en cada detalle",
    description: "Espacios amplios y naturales para disfrutar en familia los fines de semana.",
    cta: "Ver casas quintas",
    link: "/catalogo?categoria=Viviendas%20por%20Tipo&subcategoria=Casa%20Quinta"
  },
  {
    id: 4,
    image: "/modern-house-exterior.png",
    title: "Croquis personalizados",
    subtitle: "Diseños adaptados a tus necesidades",
    description: "Desde 22m² hasta 66m², planos completos para construir tu vivienda ideal.",
    cta: "Ver croquis",
    link: "/catalogo?categoria=Croquis%20por%20Tamaño"
  }
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [timerKey, setTimerKey] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [timerKey])

  const resetTimer = () => {
    setTimerKey(prev => prev + 1)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    resetTimer()
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    resetTimer()
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    resetTimer()
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
            className="parallax h-full w-full flex items-center justify-center px-4 pt-20 md:pt-32"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`,
            }}
          >
            <div className="container mx-auto text-center text-white relative z-10 max-w-4xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 font-roboto leading-tight">{slide.title}</h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 md:mb-6 text-secondary">{slide.subtitle}</h2>
              <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">{slide.description}</p>
              <div className="flex justify-center">
                <Button size="lg" className="text-base md:text-lg px-6 md:px-8 py-2 md:py-3 relative z-20 hover:bg-red-700 hover:text-white transition-colors duration-200" asChild>
                  <Link href={slide.link}>
                    {slide.cta}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-30"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-30"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-primary" : "bg-white/50"}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
