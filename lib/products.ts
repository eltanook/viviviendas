const descriptionBase = "Viviendas Tu Nuevo Hogar: Tu casa, en menos tiempo.\nEn Viviendas Tu Nuevo Hogar, fundada en 2025, por gente que dedico su vida a la construcción de viviendas premoldeadas de ahí que entendemos la dificultad de muchas personas para acceder a una casa propia. Nuestro propósito es hacer realidad ese sueño, ofreciendo una solución accesible y rápida para un sector de la sociedad que más lo necesita.\n________________________________________\n¿Cómo lo logramos? El sistema de Construcción en Seco\nNos especializamos en la Construcción en Seco, también conocida como viviendas prefabricadas o premoldeadas. Este sistema se basa en el uso de materiales secos, lo que nos permite fabricar la mayor parte de tu vivienda —desde muros y techos hasta la estructura completa— en nuestra fábrica.\nLa gran ventaja de este método es la rapidez. Una vez que los componentes están listos, los trasladamos al terreno y los ensamblamos, reduciendo significativamente los tiempos de construcción e instalación en el lugar. Esto se traduce en que tendrás tu nuevo hogar listo para vivir en mucho menos tiempo que con la construcción tradicional.\n\nDiseño Personalizado: Tu hogar, a tu medida\nSabemos que cada familia es única, y por eso tu casa también debe serlo. Una de las grandes ventajas de nuestro sistema de construcción es la flexibilidad en el diseño.\nA diferencia de la construcción tradicional, nuestro sistema te permite adaptar la vivienda a tu idea o a lo que soñaste para tu nuevo hogar. No solo construimos, te ayudamos a crear un espacio que refleje tu estilo y satisfaga todas tus necesidades.\n________________________________________\nOtras ventajas de nuestro sistema:\n•\tMayor rapidez de construcción: Tu casa lista en mucho menos tiempo.\n•\tEficiencia energética: Los materiales utilizados ofrecen un excelente aislamiento, lo que reduce los costos de calefacción y refrigeración.\n•\tMenos desperdicio de materiales: Como la mayoría de los componentes se fabrican en nuestro taller, generamos menos residuos en el lugar de instalación.\n•\tCosto predecible: Con nuestro sistema, el presupuesto se define con mayor precisión desde el inicio, evitando gastos imprevistos.\n\nEstructura y Materiales\n•\tParedes: \n\to\tEstructura autoportante con bastidores de madera (Saligna) de 1” x 3” y 2” x 3”.\n\to\tAislación: Fieltro asfáltico como barrera de vapor.\n•\tRevestimiento Exterior: \n\to\tPlacas cementicias planas de 6mm Superboard de Eternit Argentina.\n\to\tBase de revestimiento texturado aplicado a rodillo como mordiente para futuras aplicaciones de látex.\n•\tRevestimiento Interior: \n\to\tPlacas de yeso Durlok o similar, instaladas sin masillado ni tomado de juntas para facilitar futuros trabajos de pintura.\nAberturas\n•\tExteriores: \n\to\tPerfiles de aluminio blanco línea herrero con vidrio incluido.\n•\tInteriores: \n\to\tPuertas placas línea estándar.\nInstalaciones\n•\tEléctrica: \n\to\tCañerías distribuidas y embutidas en paneles con bocas estándares utilizando tubos y cajas de PVC.\n•\tAgua fría y caliente: \n\to\tCañerías en paneles sanitarios individuales para baño y cocina, con caños, codos y accesorios fusionados.\nCielorraso y Techo\n•\tCielorraso: \n\to\tRevestimiento integral en madera machimbre de 1/2”, estructurado sobre bastidores autoportantes de madera (Saligna) de 1” x 2”.\n\to\tAislación: Fieltro asfáltico como barrera de vapor.\n•\tEstructura de Techo: \n\to\tMadera (Saligna) conformando cabreadas reticulares para la fijación de clavaderas y chapas de techo (acanaladas, sinusoidales calibre 27).\n\nIMPORTANTE:\nLos valores expresados corresponden a cada una de las viviendas premoldeadas que construimos, en obra gris.\nLa Ficha Técnica se encuentra publicada en nuestra página web para una mejor comprensión de las características y materiales.\nEl flete no está incluido en los precios, ya que depende del destino de instalación de la vivienda seleccionada.";

// Datos centralizados de productos
export const products = [
  // Croquis de Viviendas por Tamaño
    {
    id: "croquis-21",
    name: "Nuestro Hogar #21",
    price: 5270000,
    category: "Croquis",
    subcategory: "21m²",
    description: descriptionBase,
    features: [],
    deliveryTime: "4-6 semanas",
    type: "croquis" as const
      ,
      images: [
        "/imagenes/03.jpg", // Render 3
        "/imagenes/04.jpg", // Render 4
        "/planos/21m2.jpg" // Plano
      ]
  },
  {
    id: "croquis-25",
    name: "Nuestro Hogar #25",
      price: 6750000,
    category: "Croquis",
    subcategory: "25m²",
    description: descriptionBase,
    features: [],
    deliveryTime: "4-6 semanas",
    type: "croquis" as const
      ,
      images: [
        "/imagenes/05.jpg", // Render 5
        "/imagenes/06.jpg", // Render 6
        "/planos/25m2.jpg" // Plano
      ]
  },
  {
    id: "croquis-25b",
    name: "Nuestro Hogar #25 B",
      price: 6750000,
    category: "Croquis",
    subcategory: "25m² B",
    description: descriptionBase,
    features: [],
    deliveryTime: "4-6 semanas",
    type: "croquis" as const
      ,
      images: [
        "/imagenes/07.jpg", // Render 7
        "/imagenes/08.jpg", // Render 8
        "/planos/25m2b.jpg" // Plano
      ]
  },
  {
    id: "croquis-29",
    name: "Nuestro Hogar #29",
      price: 7830000,
    category: "Croquis",
    subcategory: "29m²",
    description: descriptionBase,
    features: [],
    deliveryTime: "4-6 semanas",
    type: "croquis" as const
      ,
      images: [
        "/imagenes/01.jpg", // Render 1
        "/imagenes/02.jpg", // Render 2
        "/planos/29m2.jpg" // Plano
      ]
  },
  {
    id: "croquis-36",
    name: "Nuestro Hogar #36",
      price: 9720000,
    category: "Croquis",
    subcategory: "36m²",
    description: descriptionBase,
    features: [],
    deliveryTime: "5-7 semanas",
    type: "croquis" as const
      ,
      images: [
        "/imagenes/09.jpg", // Render 9
        "/imagenes/10.jpg", // Render 10
        "/planos/36m2.jpg" // Plano
      ]
  },
  {
    id: "croquis-47",
    name: "Nuestro Hogar #47",
      price: 12900000,
    category: "Croquis",
    subcategory: "47m²",
    description: descriptionBase,
    features: [],
    deliveryTime: "6-8 semanas",
    type: "croquis" as const
      ,
      images: [
        "/imagenes/11.jpg", // Render 11
        "/imagenes/12.jpg", // Render 12
        "/planos/47m2.jpg" // Plano
      ]
  },
  {
    id: "croquis-48",
    name: "Nuestro Hogar #48",
      price: 12960000,
    category: "Croquis",
    subcategory: "48m²",
    description: descriptionBase,
    features: [],
    deliveryTime: "6-8 semanas",
    type: "croquis" as const
      ,
      images: [
        "/imagenes/15.jpg", // Render 15
        "/imagenes/16.jpg", // Render 16
        "/planos/48m2.jpg" // Plano
      ]
  },
  {
    id: "croquis-55",
    name: "Nuestro Hogar #55",
      price: 14850000,
    category: "Croquis",
    subcategory: "55m²",
    description: descriptionBase,
    features: [],
    deliveryTime: "7-9 semanas",
    type: "croquis" as const
      ,
      images: [
        "/imagenes/17.jpg", // Render 17
        "/imagenes/18.jpg", // Render 18
        "/planos/55m2.jpg" // Plano
      ]
  },
  {
    id: "croquis-66",
    name: "Nuestro Hogar #66",
      price: 17820000,
    category: "Croquis",
    subcategory: "66m²",
    description: descriptionBase,
    features: [],
    deliveryTime: "7-9 semanas",
    type: "croquis" as const
      ,
      images: [
        "/imagenes/13.jpg", // Render 13
        "/imagenes/14.jpg", // Render 14
        "/planos/66m2.jpg" // Plano
      ]
  },
  {
    id: "croquis-66b",
    name: "Nuestro Hogar #66 B",
      price: 17820000,
    category: "Croquis",
    subcategory: "66m² B",
    description: descriptionBase,
    features: [],
    deliveryTime: "7-9 semanas",
    type: "croquis" as const
      ,
      images: [
        "/imagenes/19.jpg", // Render 19
        "/imagenes/20.jpg", // Render 20
        "/planos/66m2B.jpg" // Plano
      ]
  },

  // Viviendas por Tipo de Uso
  {
    id: "vivienda-permanente",
    name: "Vivienda Permanente",
    price: 85000,
    category: "Viviendas por Tipo",
    subcategory: "Vivienda Permanente",
    // image: "/modern-house-exterior.png", // Comentado - imagen generada por IA
    description: "Vivienda diseñada para residencia permanente con todos los acabados y comodidades.",
    features: ["Acabados premium", "Instalaciones completas", "Aislamiento térmico", "Garantía extendida"],
    deliveryTime: "8-10 semanas",
    type: "vivienda" as const,
    longDescription: "Esta vivienda permanente está diseñada para ser tu hogar definitivo. Incluye todos los acabados premium, instalaciones completas de electricidad y agua, aislamiento térmico y acústico de alta calidad, y una garantía extendida. Perfecta para familias que buscan calidad, confort y durabilidad a largo plazo.",
    specifications: {
      "Área total": "Variable según croquis",
      "Dormitorios": "Variable según croquis",
      "Baños": "Variable según croquis",
      "Altura": "2.40m",
      "Material principal": "Construcción en seco premium",
      "Aislamiento": "Térmico y acústico premium"
    },
    included: [
      "Vivienda completa montada",
      "Instalaciones eléctricas",
      "Instalaciones sanitarias",
      "Acabados premium",
      "Garantía extendida",
      "Manual de mantenimiento"
    ],
    // images: [ // Comentado - imágenes generadas por IA
    //   "/modern-house-exterior.png",
    //   "/modern-house-interior.png",
    //   "/modern-house-bedroom.png",
    //   "/modern-house-kitchen.png"
    // ]
  },
  {
    id: "casa-quinta",
    name: "Casa Quinta",
    price: 95000,
    category: "Viviendas por Tipo",
    subcategory: "Casa Quinta",
    // image: "/country-house-garden.png", // Comentado - imagen generada por IA
    description: "Perfecta para escapadas familiares, con amplio jardín y galería.",
    features: ["Galería cubierta", "Jardín amplio", "Estilo rústico", "Conexión con naturaleza"],
    deliveryTime: "8-10 semanas",
    type: "vivienda" as const,
    longDescription: "Esta casa quinta está diseñada para conectarte con la naturaleza. Incluye una galería cubierta perfecta para disfrutar del aire libre, un jardín amplio para actividades familiares, y un estilo rústico que se integra perfectamente con el entorno natural. Ideal para escapadas familiares y fines de semana de descanso.",
    specifications: {
      "Área total": "Variable según croquis",
      "Dormitorios": "Variable según croquis",
      "Baños": "Variable según croquis",
      "Altura": "2.40m",
      "Material principal": "Construcción en seco rústica",
      "Aislamiento": "Térmico y acústico"
    },
    included: [
      "Vivienda completa montada",
      "Galería cubierta",
      "Jardín básico",
      "Instalaciones completas",
      "Acabados rústicos",
      "Manual de mantenimiento"
    ],
    // images: [ // Comentado - imágenes generadas por IA
    //   "/country-house-garden.png",
    //   "/country-house-interior.png",
    //   "/country-house-bedroom.png",
    //   "/country-house-porch.png"
    // ]
  },
  {
    id: "casa-playa",
    name: "Casa de Playa",
    price: 105000,
    category: "Viviendas por Tipo",
    subcategory: "Casa de Playa",
    // image: "/mediterranean-beach-house.png", // Comentado - imagen generada por IA
    description: "Diseño mediterráneo ideal para disfrutar frente al mar.",
    features: ["Resistente a humedad", "Terraza", "Vistas al mar", "Materiales marinos"],
    deliveryTime: "8-10 semanas",
    type: "vivienda" as const,
    longDescription: "Esta casa de playa está diseñada específicamente para el entorno marino. Incluye materiales resistentes a la humedad, una terraza para disfrutar de las vistas al mar, y un diseño mediterráneo que se adapta perfectamente al paisaje costero. Perfecta para vacaciones familiares y escapadas de fin de semana.",
    specifications: {
      "Área total": "Variable según croquis",
      "Dormitorios": "Variable según croquis",
      "Baños": "Variable según croquis",
      "Altura": "2.40m",
      "Material principal": "Construcción en seco marina",
      "Aislamiento": "Térmico, acústico y anti-humedad"
    },
    included: [
      "Vivienda completa montada",
      "Terraza",
      "Materiales marinos",
      "Instalaciones completas",
      "Acabados premium",
      "Manual de mantenimiento"
    ],
    // images: [ // Comentado - imágenes generadas por IA
    //   "/mediterranean-beach-house.png",
    //   "/coastal-villa-interior.png",
    //   "/coastal-villa-bedroom.png",
    //   "/coastal-villa-pool.png"
    // ]
  },
  {
    id: "complejo-turistico",
    name: "Complejo Turístico",
    price: 75000,
    category: "Viviendas por Tipo",
    subcategory: "Complejo Turístico",
    // image: "/modern-tourist-cabin.png", // Comentado - imagen generada por IA
    description: "Módulo compacto y funcional para complejos turísticos.",
    features: ["Diseño turístico", "Fácil mantenimiento", "Rápida instalación", "Rentabilidad"],
    deliveryTime: "6-8 semanas",
    type: "vivienda" as const,
    longDescription: "Este módulo turístico está diseñado para maximizar la rentabilidad de tu inversión. Con un diseño funcional y fácil mantenimiento, se instala rápidamente y está optimizado para el uso turístico. Perfecto para complejos turísticos, glampings o cualquier emprendimiento turístico que busque calidad y rentabilidad.",
    specifications: {
      "Área total": "Variable según croquis",
      "Dormitorios": "Variable según croquis",
      "Baños": "Variable según croquis",
      "Altura": "2.40m",
      "Material principal": "Construcción en seco turística",
      "Aislamiento": "Térmico y acústico"
    },
    included: [
      "Módulo turístico completo",
      "Instalaciones básicas",
      "Acabados turísticos",
      "Manual de operación",
      "Garantía comercial",
      "Soporte técnico"
    ],
    // images: [ // Comentado - imágenes generadas por IA
    //   "/modern-tourist-cabin.png",
    //   "/tourist-cabin-interior.png",
    //   "/tourist-cabin-bedroom.png",
    //   "/tourist-cabin-deck.png"
    // ]
  },
  {
    id: "cabana-rustica",
    name: "Cabaña Rústica",
    price: 65000,
    category: "Viviendas por Tipo",
    subcategory: "Cabaña Rústica",
    // image: "/rustic-premium-cabin.png", // Comentado - imagen generada por IA
    description: "Estilo rústico con todas las comodidades modernas.",
    features: ["Estilo rústico", "Materiales naturales", "Chimenea", "Acabados premium"],
    deliveryTime: "7-9 semanas",
    type: "vivienda" as const,
    longDescription: "Esta cabaña rústica combina el encanto del estilo rústico con todas las comodidades modernas. Incluye materiales naturales, una chimenea para crear un ambiente acogedor, y acabados premium que garantizan confort y durabilidad. Perfecta para quienes buscan una conexión con la naturaleza sin sacrificar las comodidades modernas.",
    specifications: {
      "Área total": "Variable según croquis",
      "Dormitorios": "Variable según croquis",
      "Baños": "Variable según croquis",
      "Altura": "2.40m",
      "Material principal": "Construcción en seco rústica",
      "Aislamiento": "Térmico y acústico premium"
    },
    included: [
      "Cabaña rústica completa",
      "Chimenea",
      "Materiales naturales",
      "Instalaciones completas",
      "Acabados premium",
      "Manual de mantenimiento"
    ],
    // images: [ // Comentado - imágenes generadas por IA
    //   "/rustic-premium-cabin.png",
    //   "/rustic-cabin-interior.png",
    //   "/rustic-cabin-bedroom.png",
    //   "/rustic-cabin-fireplace.png"
    // ]
  },
  {
    id: "vivienda-alquiler",
    name: "Vivienda de Alquiler",
    price: 70000,
    category: "Viviendas por Tipo",
    subcategory: "Vivienda de Alquiler",
    // image: "/investment-property-house.png", // Comentado - imagen generada por IA
    description: "Diseñada para maximizar la rentabilidad de tu inversión.",
    features: ["Diseño funcional", "Bajo mantenimiento", "Alta rentabilidad", "Fácil gestión"],
    deliveryTime: "6-8 semanas",
    type: "vivienda" as const,
    longDescription: "Esta vivienda de alquiler está diseñada específicamente para maximizar la rentabilidad de tu inversión. Con un diseño funcional, bajo mantenimiento y fácil gestión, es perfecta para inversores que buscan una opción rentable y de bajo riesgo. Incluye todas las características necesarias para atraer inquilinos de calidad.",
    specifications: {
      "Área total": "Variable según croquis",
      "Dormitorios": "Variable según croquis",
      "Baños": "Variable según croquis",
      "Altura": "2.40m",
      "Material principal": "Construcción en seco comercial",
      "Aislamiento": "Térmico y acústico"
    },
    included: [
      "Vivienda de alquiler completa",
      "Instalaciones básicas",
      "Acabados comerciales",
      "Manual de gestión",
      "Garantía comercial",
      "Soporte técnico"
    ],
    // images: [ // Comentado - imágenes generadas por IA
    //   "/investment-property-house.png",
    //   "/investment-house-interior.png",
    //   "/investment-house-bedroom.png",
    //   "/investment-house-kitchen.png"
    // ]
  },

  // Servicios Adicionales
  {
    id: "instalacion",
    name: "Servicio de Instalación",
    price: 15000,
    category: "Servicios",
    subcategory: "Instalación",
    // image: "/modern-house-construction.png", // Comentado - imagen generada por IA
    description: "Instalación profesional de tu vivienda en el terreno.",
    features: ["Equipo especializado", "Instalación rápida", "Garantía de trabajo", "Supervisión técnica"],
    deliveryTime: "1-2 semanas",
    type: "servicio" as const,
    longDescription: "Nuestro servicio de instalación profesional incluye un equipo especializado que se encarga de instalar tu vivienda en el terreno de manera rápida y eficiente. Incluye supervisión técnica, garantía de trabajo y la tranquilidad de saber que tu vivienda está siendo instalada por profesionales con experiencia en construcción en seco.",
    specifications: {
      "Duración": "1-2 semanas",
      "Equipo": "Especializado",
      "Supervisión": "Técnica completa",
      "Garantía": "De trabajo",
      "Cobertura": "Todo el país",
      "Soporte": "24/7"
    },
    included: [
      "Equipo de instalación especializado",
      "Supervisión técnica completa",
      "Garantía de trabajo",
      "Soporte técnico",
      "Certificado de instalación",
      "Manual de uso"
    ],
    // images: [ // Comentado - imágenes generadas por IA
    //   "/modern-house-construction.png",
    //   "/modern-house-exterior.png",
    //   "/modern-house-interior.png",
    //   "/modern-house-bedroom.png"
    // ]
  },
  {
    id: "personalizacion",
    name: "Personalización de Diseño",
    price: 8000,
    category: "Servicios",
    subcategory: "Personalización",
    // image: "/modern-house-interior.png", // Comentado - imagen generada por IA
    description: "Adaptamos el diseño a tus necesidades específicas.",
    features: ["Diseño personalizado", "Consultoría técnica", "Planos detallados", "Seguimiento del proyecto"],
    deliveryTime: "2-3 semanas",
    type: "servicio" as const,
    longDescription: "Nuestro servicio de personalización de diseño te permite adaptar la vivienda a tus necesidades específicas. Incluye consultoría técnica, planos detallados y seguimiento completo del proyecto. Trabajamos contigo para crear un diseño que se adapte perfectamente a tu estilo de vida, necesidades y presupuesto.",
    specifications: {
      "Duración": "2-3 semanas",
      "Consultoría": "Técnica completa",
      "Planos": "Detallados",
      "Seguimiento": "Completo del proyecto",
      "Revisiones": "Ilimitadas",
      "Garantía": "De satisfacción"
    },
    included: [
      "Consultoría técnica completa",
      "Planos detallados",
      "Seguimiento del proyecto",
      "Revisiones ilimitadas",
      "Garantía de satisfacción",
      "Soporte técnico"
    ],
    // images: [ // Comentado - imágenes generadas por IA
    //   "/modern-house-interior.png",
    //   "/modern-house-exterior.png",
    //   "/modern-house-bedroom.png",
    //   "/modern-house-kitchen.png"
    // ]
  },
  {
    id: "mantenimiento",
    name: "Mantenimiento Preventivo",
    price: 5000,
    category: "Servicios",
    subcategory: "Mantenimiento",
    // image: "/modern-house-exterior.png", // Comentado - imagen generada por IA
    description: "Servicio de mantenimiento preventivo para tu vivienda.",
    features: ["Inspección técnica", "Mantenimiento preventivo", "Reporte detallado", "Garantía de servicio"],
    deliveryTime: "1 semana",
    type: "servicio" as const,
    longDescription: "Nuestro servicio de mantenimiento preventivo incluye una inspección técnica completa de tu vivienda, mantenimiento preventivo para evitar problemas futuros, y un reporte detallado del estado de la misma. Con este servicio, puedes mantener tu vivienda en perfectas condiciones y evitar costos de reparación inesperados.",
    specifications: {
      "Duración": "1 semana",
      "Inspección": "Técnica completa",
      "Mantenimiento": "Preventivo",
      "Reporte": "Detallado",
      "Garantía": "De servicio",
      "Soporte": "Técnico"
    },
    included: [
      "Inspección técnica completa",
      "Mantenimiento preventivo",
      "Reporte detallado",
      "Garantía de servicio",
      "Soporte técnico",
      "Certificado de mantenimiento"
    ],
    // images: [ // Comentado - imágenes generadas por IA
    //   "/modern-house-exterior.png",
    //   "/modern-house-interior.png",
    //   "/modern-house-bedroom.png",
    //   "/modern-house-kitchen.png"
    // ]
  }
]

// Tipos TypeScript
export type Product = typeof products[0]
export type ProductType = Product['type']

// Funciones de utilidad
export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category)
}

export const getProductsByType = (type: ProductType): Product[] => {
  return products.filter(p => p.type === type)
}

export const getRelatedProducts = (currentId: string, category: string, limit: number = 3): Product[] => {
  return products
    .filter(p => p.category === category && p.id !== currentId)
    .slice(0, limit)
}

export const getAllCategories = (): string[] => {
  return Array.from(new Set(products.map(p => p.category)))
}

export const getAllSubcategories = (): string[] => {
  return Array.from(new Set(products.map(p => p.subcategory)))
}

// Validación de IDs
export const validateProductIds = (): boolean => {
  const ids = products.map(p => p.id)
  const uniqueIds = new Set(ids)
  
  if (ids.length !== uniqueIds.size) {
    console.error("Error: Hay IDs duplicados en los productos")
    return false
  }
  
  // Verificar que no haya caracteres problemáticos
  const invalidIds = ids.filter(id => /[^a-zA-Z0-9-]/.test(id))
  if (invalidIds.length > 0) {
    console.error("Error: IDs con caracteres inválidos:", invalidIds)
    return false
  }
  
  return true
}
