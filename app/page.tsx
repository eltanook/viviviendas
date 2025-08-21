"use client"
import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Footer } from "@/components/footer"
import { useCart } from "@/components/cart-provider"
import { Home, Zap, Clock, DollarSign, ArrowRight, Target, Wrench } from "lucide-react"
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
                Viviendas tu nuevo hogar
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
                    Ver catálogo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contacto">
                    Solicitar presupuesto
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Croquis Disponibles */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="p-3 bg-primary rounded-lg">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  Nuestros croquis
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Descubre nuestra colección completa de croquis profesionales, desde viviendas compactas hasta casas familiares amplias. Cada diseño está optimizado para maximizar el espacio y la funcionalidad.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { size: "22m²", description: "Vivienda compacta ideal para una persona o pareja" },
                { size: "25m²", description: "Espacio funcional para pequeñas familias" },
                { size: "29m²", description: "Vivienda con un dormitorio y living comedor" },
                { size: "36m²", description: "Casa con dos dormitorios y espacios amplios" },
                { size: "47m²", description: "Vivienda familiar con tres dormitorios" },
                { size: "48m²", description: "Casa espaciosa para familias medianas" },
                { size: "55m²", description: "Vivienda amplia con múltiples dormitorios" },
                { size: "66m²", description: "Casa grande para familias numerosas" }
              ].map((croquis, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">{croquis.size}</div>
                    <p className="text-sm text-muted-foreground">{croquis.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button size="lg" asChild>
                <Link href="/catalogo?categoria=Croquis%20por%20Tamaño">
                  Ver croquis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Tipos de Viviendas */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="p-3 bg-primary rounded-lg">
                  <Home className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  Soluciones para cada necesidad
                </h2>
              </div>
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
              <Button size="lg" asChild>
                <Link href="/catalogo?categoria=Viviendas%20por%20Tipo">
                  Ver todas las viviendas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="p-3 bg-primary rounded-lg">
                  <Wrench className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  Nuestros servicios
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Ofrecemos servicios especializados para complementar tu proyecto de vivienda
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "Instalación profesional",
                  description: "Equipo especializado para instalar tu vivienda en el terreno",
                  price: "Desde $15.000"
                },
                {
                  title: "Personalización de diseño",
                  description: "Adaptamos el diseño a tus necesidades específicas",
                  price: "Desde $8.000"
                },
                {
                  title: "Mantenimiento preventivo",
                  description: "Servicio de mantenimiento para mantener tu vivienda en perfectas condiciones",
                  price: "Desde $5.000"
                }
              ].map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                      <Wrench className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{service.description}</p>
                    <p className="text-lg font-bold text-primary">{service.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" asChild>
                <Link href="/catalogo?categoria=Servicios">
                  Ver todos los servicios
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
                  Solicitar presupuesto
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="cta-outline-button" asChild>
                <Link href="/catalogo">
                  Ver catálogo
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
