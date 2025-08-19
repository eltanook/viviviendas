"use client"
import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Footer } from "@/components/footer"
import { useCart } from "@/components/cart-provider"
import { Home, Zap, Clock, DollarSign, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const cart = useCart()

  const quickFeatures = [
    {
      icon: Clock,
      title: "Construcción Rápida",
      description: "Tu casa lista en mucho menos tiempo que la construcción tradicional"
    },
    {
      icon: Zap,
      title: "Eficiencia Energética",
      description: "Excelente aislamiento que reduce costos de calefacción y refrigeración"
    },
    {
      icon: DollarSign,
      title: "Costo Predecible",
      description: "Presupuesto definido con mayor precisión desde el inicio"
    },
    {
      icon: Home,
      title: "Diseño Personalizado",
      description: "Adaptamos la vivienda a tu idea y necesidades específicas"
    }
  ]

  const viviendaTypes = [
    "Vivienda permanente",
    "Casa quinta",
    "Casa de campo",
    "Casa de playa",
    "Complejos turísticos",
    "Cabañas"
  ]

  return (
    <div className="min-h-screen">
      <Header cartItemsCount={cart.itemsCount} onCartOpen={cart.openCart} />
      
      <main>
        <HeroCarousel />

        {/* Introducción Principal */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-black mb-6 text-foreground">
                Viviendas Tu Nuevo Hogar
              </h1>
              <p className="text-2xl font-semibold text-muted-foreground mb-4">
                Tu casa, en menos tiempo.
              </p>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Especialistas en construcción en seco y viviendas premoldeadas. 
                Hacemos realidad tu sueño de tener una casa propia con una solución 
                accesible, rápida y de calidad.
              </p>
            </div>

            {/* Características Principales */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {quickFeatures.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Principal */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" asChild>
                  <Link href="/catalogo">
                    Ver Catálogo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contacto">
                    Solicitar Presupuesto
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Tipos de Viviendas */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Soluciones para cada necesidad
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nuestras viviendas premoldeadas se adaptan a diferentes usos y estilos de vida
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {viviendaTypes.map((type, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="p-3 bg-secondary/10 rounded-lg w-fit mx-auto mb-4">
                      <Home className="h-6 w-6 text-secondary" />
                    </div>
                    <p className="text-foreground font-medium">{type}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/nosotros">
                  Conoce más sobre nosotros
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 text-primary-foreground cta-section">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para hacer realidad tu sueño?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contáctanos hoy mismo y descubre cómo podemos ayudarte a construir tu nuevo hogar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="cta-presupuesto-button" asChild>
                <Link href="/contacto">
                  Solicitar Presupuesto
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="cta-outline-button" asChild>
                <Link href="/catalogo">
                  Ver Nuestros Proyectos
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
