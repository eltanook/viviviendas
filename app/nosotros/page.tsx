"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Home, Users, Target, Hammer } from "lucide-react"
import { useCart } from "@/components/cart-provider"

export default function NosotrosPage() {
  const cart = useCart()

  const materials = [
    {
      category: "Paredes",
      items: [
        "Estructura autoportante con bastidores de madera (Saligna) de 1\" x 3\" y 2\" x 3\"",
        "Aislación: Fieltro asfáltico como barrera de vapor"
      ]
    },
    {
      category: "Revestimiento Exterior",
      items: [
        "Placas cementicias planas de 6mm Superboard de Eternit Argentina",
        "Base de revestimiento texturado aplicado a rodillo como mordiente"
      ]
    },
    {
      category: "Revestimiento Interior",
      items: [
        "Placas de yeso Durlok o similar",
        "Instaladas sin masillado ni tomado de juntas para facilitar futuros trabajos"
      ]
    },
    {
      category: "Aberturas",
      items: [
        "Exteriores: Perfiles de aluminio blanco línea herrero con vidrio incluido",
        "Interiores: Puertas placas línea estándar"
      ]
    },
    {
      category: "Instalaciones",
      items: [
        "Eléctrica: Cañerías distribuidas y embutidas en paneles con bocas estándares",
        "Agua fría y caliente: Cañerías en paneles sanitarios individuales"
      ]
    },
    {
      category: "Cielorraso y Techo",
      items: [
        "Cielorraso: Revestimiento integral en madera machimbre de 1/2\"",
        "Estructura de Techo: Madera (Saligna) conformando cabreadas reticulares"
      ]
    }
  ]

  const viviendaTypes = [
    "Vivienda permanente",
    "Casa quinta",
    "Casa de campo",
    "Puesto rural",
    "Casa de playa",
    "Vivienda de alquiler (generar renta)",
    "Emergencia habitacional",
    "Complejos turísticos",
    "Cabañas"
  ]

  const croquisSizes = [
    { size: "22m²", description: "Vivienda compacta ideal para una persona o pareja" },
    { size: "25m²", description: "Espacio funcional para pequeñas familias" },
    { size: "29m²", description: "Vivienda con un dormitorio y living comedor" },
    { size: "36m²", description: "Casa con dos dormitorios y espacios amplios" },
    { size: "47m²", description: "Vivienda familiar con tres dormitorios" },
    { size: "48m²", description: "Casa espaciosa para familias medianas" },
    { size: "55m²", description: "Vivienda amplia con múltiples dormitorios" },
    { size: "66m²", description: "Casa grande para familias numerosas" }
  ]

  return (
    <div className="min-h-screen">
      <Header cartItemsCount={cart.itemsCount} onCartOpen={cart.openCart} />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Sobre Nosotros</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Conoce más sobre Viviendas Tu Nuevo Hogar y nuestro compromiso con la construcción en seco
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Nuestra Historia */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="p-3 bg-primary rounded-lg">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  Nuestra Historia
                </h2>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Fundada en 2025
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  En Viviendas Tu Nuevo Hogar, fundada en 2025, somos un equipo de profesionales que dedicó su vida a la construcción de viviendas premoldeadas. 
                  Entendemos la dificultad de muchas personas para acceder a una casa propia.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nuestro propósito es hacer realidad ese sueño, ofreciendo una solución accesible y rápida para un sector de la sociedad que más lo necesita.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/modern-house-construction.png"
                  alt="Construcción en seco - Sistema prefabricado"
                  className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold">2025</div>
                  <div className="text-sm">Fundada</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tipos de Viviendas */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="p-3 bg-primary rounded-lg">
                  <Home className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  Tipos de Viviendas
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Las Viviendas Premoldeadas son otro término utilizado en la construcción de viviendas en seco y pueden utilizarse en múltiples contextos:
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {viviendaTypes.map((type, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                      <Home className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">{type}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Croquis Disponibles */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="p-3 bg-secondary rounded-lg">
                  <Target className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  Nuestros Croquis
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Actualmente estamos reformando nuestros croquis. El orden será de menor a mayor, ofreciendo opciones desde viviendas compactas hasta casas familiares amplias:
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {croquisSizes.map((croquis, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">{croquis.size}</div>
                    <p className="text-sm text-muted-foreground">{croquis.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Estructura y Materiales */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="p-3 bg-primary rounded-lg">
                  <Hammer className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  Estructura y Materiales
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Utilizamos solo los mejores materiales para garantizar la durabilidad y calidad de tu vivienda
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.map((material, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-lg border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">
                    {material.category}
                  </h3>
                  <ul className="space-y-2">
                    {material.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>


        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
