import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Waves, TreePine, Building2 } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Viviendas Permanentes",
    description: "Casas familiares diseñadas para el confort y la durabilidad a largo plazo.",
    features: ["Diseño personalizado", "Materiales premium", "Eficiencia energética"],
  },
  {
    icon: Waves,
    title: "Casas de Playa",
    description: "Refugios costeros que combinan resistencia marina con diseño elegante.",
    features: ["Resistente a la humedad", "Vistas panorámicas", "Espacios abiertos"],
  },
  {
    icon: TreePine,
    title: "Casas Quintas",
    description: "Espacios de descanso en entornos naturales para escapar de la ciudad.",
    features: ["Integración con la naturaleza", "Amplios jardines", "Zonas de recreación"],
  },
  {
    icon: Building2,
    title: "Complejos Turísticos",
    description: "Desarrollos comerciales para inversión en el sector turístico.",
    features: ["Rentabilidad garantizada", "Gestión integral", "Ubicaciones estratégicas"],
  },
]

export function ServicesSection() {
  return (
    // SECCIÓN DE SERVICIOS TEMPORALMENTE COMENTADA - DESCOMENTAR PARA MOSTRAR
    /*
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 text-foreground font-roboto">Nuestros Servicios</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Especializados en construcción en seco para diferentes necesidades y estilos de vida
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    */
    
    // SECCIÓN VACÍA - NO SE MUESTRA NADA EN PANTALLA
    null
  )
}
