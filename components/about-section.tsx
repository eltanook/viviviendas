import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Zap, Shield, DollarSign, Leaf, Home, Settings, Hammer, Palette } from "lucide-react"

export function AboutSection() {
  const advantages = [
    {
      icon: Clock,
      title: "Mayor rapidez de construcción",
      description: "Tu casa lista en mucho menos tiempo"
    },
    {
      icon: Zap,
      title: "Eficiencia energética",
      description: "Excelente aislamiento, reduce costos de calefacción y refrigeración"
    },
    {
      icon: Leaf,
      title: "Menos desperdicio",
      description: "Generamos menos residuos en el lugar de instalación"
    },
    {
      icon: DollarSign,
      title: "Costo predecible",
      description: "Presupuesto definido con mayor precisión desde el inicio"
    }
  ]

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

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-6 text-foreground">
            Viviendas Tu Nuevo Hogar
          </h1>
          <p className="text-2xl font-semibold text-primary mb-4">
            Tu casa, en menos tiempo.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            En Viviendas Tu Nuevo Hogar, fundada en 2025, por gente que dedicó su vida a la construcción de viviendas premoldeadas. 
            Entendemos la dificultad de muchas personas para acceder a una casa propia. Nuestro propósito es hacer realidad ese sueño, 
            ofreciendo una solución accesible y rápida para un sector de la sociedad que más lo necesita.
          </p>
        </div>

        {/* How We Do It Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-primary rounded-lg">
                <Settings className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                ¿Cómo lo logramos?
              </h2>
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-4">
              El sistema de Construcción en Seco
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Nos especializamos en la Construcción en Seco, también conocida como viviendas prefabricadas o premoldeadas. 
              Este sistema se basa en el uso de materiales secos, lo que nos permite fabricar la mayor parte de tu vivienda 
              —desde muros y techos hasta la estructura completa— en nuestra fábrica.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              La gran ventaja de este método es la rapidez. Una vez que los componentes están listos, los trasladamos al terreno 
              y los ensamblamos, reduciendo significativamente los tiempos de construcción e instalación en el lugar. 
              Esto se traduce en que tendrás tu nuevo hogar listo para vivir en mucho menos tiempo que con la construcción tradicional.
            </p>
          </div>
          <div className="relative">
            <img
              src="/modern-house-construction.png"
              alt="Construcción en seco - Sistema prefabricado"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">2025</div>
              <div className="text-sm">Fundada</div>
            </div>
          </div>
        </div>

        {/* Personalized Design Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative order-2 lg:order-1">
            <img
              src="/modern-house-interior.png"
              alt="Diseño personalizado de vivienda"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm">Personalizable</div>
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-secondary rounded-lg">
                <Palette className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                Diseño Personalizado
              </h2>
            </div>
            <h3 className="text-2xl font-semibold text-secondary mb-4">
              Tu hogar, a tu medida
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Sabemos que cada familia es única, y por eso tu casa también debe serlo. Una de las grandes ventajas de nuestro 
              sistema de construcción es la flexibilidad en el diseño.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A diferencia de la construcción tradicional, nuestro sistema te permite adaptar la vivienda a tu idea o a lo que 
              soñaste para tu nuevo hogar. No solo construimos, te ayudamos a crear un espacio que refleje tu estilo y 
              satisfaga todas tus necesidades.
            </p>
          </div>
        </div>

        {/* Advantages Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Otras ventajas de nuestro sistema
            </h2>
            <p className="text-lg text-muted-foreground">
              Descubre por qué la construcción en seco es la opción más inteligente
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <advantage.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {advantage.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Materials and Structure Section */}
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

        {/* CTA Section */}
        <div className="text-center bg-primary text-primary-foreground p-12 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para hacer realidad tu sueño?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Contáctanos hoy mismo y descubre cómo podemos ayudarte a construir tu nuevo hogar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-primary">
              Solicitar Presupuesto
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Ver Nuestros Proyectos
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
