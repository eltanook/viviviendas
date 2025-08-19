// Datos centralizados de productos
export const products = [
  // Croquis de Viviendas por Tamaño
  {
    id: "croquis-22",
    name: "Croquis 22m² - Vivienda Compacta",
    price: 45000,
    category: "Croquis por Tamaño",
    subcategory: "22m²",
    image: "/modern-house-exterior.png",
    description: "Vivienda compacta ideal para una persona o pareja. Incluye living comedor, cocina, baño y dormitorio.",
    features: ["1 dormitorio", "Living comedor integrado", "Cocina funcional", "Baño completo"],
    deliveryTime: "4-6 semanas",
    type: "croquis" as const,
    longDescription: "Esta vivienda compacta de 22m² está diseñada para maximizar el espacio disponible. Perfecta para una persona o pareja que busca una solución práctica y funcional. El diseño incluye un living comedor integrado que se conecta perfectamente con la cocina, un dormitorio acogedor y un baño completo. La distribución optimizada permite aprovechar cada metro cuadrado de manera eficiente.",
    specifications: {
      "Área total": "22m²",
      "Dormitorios": "1",
      "Baños": "1",
      "Altura": "2.40m",
      "Material principal": "Construcción en seco",
      "Aislamiento": "Térmico y acústico"
    },
    included: [
      "Planos arquitectónicos completos",
      "Especificaciones técnicas",
      "Lista de materiales",
      "Instrucciones de montaje",
      "Garantía de diseño"
    ],
    images: [
      "/modern-house-exterior.png",
      "/modern-house-interior.png",
      "/modern-house-bedroom.png",
      "/modern-house-kitchen.png"
    ]
  },
  {
    id: "croquis-25",
    name: "Croquis 25m² - Espacio Funcional",
    price: 52000,
    category: "Croquis por Tamaño",
    subcategory: "25m²",
    image: "/modern-house-interior.png",
    description: "Espacio funcional para pequeñas familias con distribución optimizada.",
    features: ["1 dormitorio", "Living comedor amplio", "Cocina equipada", "Baño completo"],
    deliveryTime: "4-6 semanas",
    type: "croquis" as const,
    longDescription: "Con 25m² de espacio bien distribuido, esta vivienda ofrece una solución ideal para pequeñas familias. El living comedor amplio se conecta con una cocina equipada, mientras que el dormitorio principal proporciona privacidad y confort. El baño completo incluye todas las comodidades necesarias. La distribución permite una circulación fluida entre los espacios.",
    specifications: {
      "Área total": "25m²",
      "Dormitorios": "1",
      "Baños": "1",
      "Altura": "2.40m",
      "Material principal": "Construcción en seco",
      "Aislamiento": "Térmico y acústico"
    },
    included: [
      "Planos arquitectónicos completos",
      "Especificaciones técnicas",
      "Lista de materiales",
      "Instrucciones de montaje",
      "Garantía de diseño"
    ],
    images: [
      "/modern-house-interior.png",
      "/modern-house-exterior.png",
      "/modern-house-bedroom.png",
      "/modern-house-kitchen.png"
    ]
  },
  {
    id: "croquis-29",
    name: "Croquis 29m² - Un Dormitorio",
    price: 58000,
    category: "Croquis por Tamaño",
    subcategory: "29m²",
    image: "/modern-house-bedroom.png",
    description: "Vivienda con un dormitorio y living comedor espacioso.",
    features: ["1 dormitorio amplio", "Living comedor", "Cocina", "Baño completo"],
    deliveryTime: "4-6 semanas",
    type: "croquis" as const,
    longDescription: "Esta vivienda de 29m² ofrece un dormitorio amplio y un living comedor espacioso que se adapta perfectamente a las necesidades de una pareja o una pequeña familia. La cocina está diseñada para ser funcional y práctica, mientras que el baño completo incluye todas las comodidades. La distribución permite aprovechar al máximo el espacio disponible.",
    specifications: {
      "Área total": "29m²",
      "Dormitorios": "1",
      "Baños": "1",
      "Altura": "2.40m",
      "Material principal": "Construcción en seco",
      "Aislamiento": "Térmico y acústico"
    },
    included: [
      "Planos arquitectónicos completos",
      "Especificaciones técnicas",
      "Lista de materiales",
      "Instrucciones de montaje",
      "Garantía de diseño"
    ],
    images: [
      "/modern-house-bedroom.png",
      "/modern-house-interior.png",
      "/modern-house-exterior.png",
      "/modern-house-kitchen.png"
    ]
  },
  {
    id: "croquis-36",
    name: "Croquis 36m² - Dos Dormitorios",
    price: 72000,
    category: "Croquis por Tamaño",
    subcategory: "36m²",
    image: "/modern-house-kitchen.png",
    description: "Casa con dos dormitorios y espacios amplios para familias pequeñas.",
    features: ["2 dormitorios", "Living comedor", "Cocina", "Baño completo"],
    deliveryTime: "5-7 semanas",
    type: "croquis" as const,
    longDescription: "Con 36m² de espacio, esta vivienda incluye dos dormitorios perfectos para familias pequeñas. El living comedor amplio se conecta con una cocina funcional, mientras que los dormitorios proporcionan privacidad y confort. El baño completo incluye todas las comodidades necesarias. La distribución permite una circulación fluida entre todos los espacios.",
    specifications: {
      "Área total": "36m²",
      "Dormitorios": "2",
      "Baños": "1",
      "Altura": "2.40m",
      "Material principal": "Construcción en seco",
      "Aislamiento": "Térmico y acústico"
    },
    included: [
      "Planos arquitectónicos completos",
      "Especificaciones técnicas",
      "Lista de materiales",
      "Instrucciones de montaje",
      "Garantía de diseño"
    ],
    images: [
      "/modern-house-kitchen.png",
      "/modern-house-bedroom.png",
      "/modern-house-interior.png",
      "/modern-house-exterior.png"
    ]
  },
  {
    id: "croquis-47",
    name: "Croquis 47m² - Tres Dormitorios",
    price: 85000,
    category: "Croquis por Tamaño",
    subcategory: "47m²",
    image: "/traditional-family-house.png",
    description: "Vivienda familiar con tres dormitorios y espacios de convivencia.",
    features: ["3 dormitorios", "Living comedor", "Cocina", "2 baños"],
    deliveryTime: "6-8 semanas",
    type: "croquis" as const,
    longDescription: "Esta vivienda de 47m² está diseñada para familias numerosas, con tres dormitorios espaciosos y dos baños completos. El living comedor amplio se conecta con una cocina equipada, mientras que los dormitorios proporcionan privacidad y confort. La distribución permite aprovechar al máximo el espacio disponible y crear un ambiente familiar acogedor.",
    specifications: {
      "Área total": "47m²",
      "Dormitorios": "3",
      "Baños": "2",
      "Altura": "2.40m",
      "Material principal": "Construcción en seco",
      "Aislamiento": "Térmico y acústico"
    },
    included: [
      "Planos arquitectónicos completos",
      "Especificaciones técnicas",
      "Lista de materiales",
      "Instrucciones de montaje",
      "Garantía de diseño"
    ],
    images: [
      "/traditional-family-house.png",
      "/modern-house-bedroom.png",
      "/modern-house-interior.png",
      "/modern-house-kitchen.png"
    ]
  },
  {
    id: "croquis-66",
    name: "Croquis 66m² - Casa Familiar",
    price: 110000,
    category: "Croquis por Tamaño",
    subcategory: "66m²",
    image: "/traditional-house-interior.png",
    description: "Casa grande para familias numerosas con amplios espacios.",
    features: ["3-4 dormitorios", "Living comedor", "Cocina", "2 baños", "Galería"],
    deliveryTime: "7-9 semanas",
    type: "croquis" as const,
    longDescription: "Con 66m² de espacio, esta casa familiar incluye de 3 a 4 dormitorios espaciosos, un living comedor amplio, una cocina equipada, dos baños completos y una galería. Perfecta para familias numerosas que buscan espacio y confort. La distribución permite crear un ambiente familiar acogedor y funcional.",
    specifications: {
      "Área total": "66m²",
      "Dormitorios": "3-4",
      "Baños": "2",
      "Altura": "2.40m",
      "Material principal": "Construcción en seco",
      "Aislamiento": "Térmico y acústico"
    },
    included: [
      "Planos arquitectónicos completos",
      "Especificaciones técnicas",
      "Lista de materiales",
      "Instrucciones de montaje",
      "Garantía de diseño"
    ],
    images: [
      "/traditional-house-interior.png",
      "/traditional-family-house.png",
      "/modern-house-bedroom.png",
      "/modern-house-kitchen.png"
    ]
  },

  // Viviendas por Tipo de Uso
  {
    id: "vivienda-permanente",
    name: "Vivienda Permanente",
    price: 85000,
    category: "Viviendas por Tipo",
    subcategory: "Vivienda Permanente",
    image: "/modern-house-exterior.png",
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
    images: [
      "/modern-house-exterior.png",
      "/modern-house-interior.png",
      "/modern-house-bedroom.png",
      "/modern-house-kitchen.png"
    ]
  },
  {
    id: "casa-quinta",
    name: "Casa Quinta",
    price: 95000,
    category: "Viviendas por Tipo",
    subcategory: "Casa Quinta",
    image: "/country-house-garden.png",
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
    images: [
      "/country-house-garden.png",
      "/country-house-interior.png",
      "/country-house-bedroom.png",
      "/country-house-porch.png"
    ]
  },
  {
    id: "casa-playa",
    name: "Casa de Playa",
    price: 105000,
    category: "Viviendas por Tipo",
    subcategory: "Casa de Playa",
    image: "/mediterranean-beach-house.png",
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
    images: [
      "/mediterranean-beach-house.png",
      "/coastal-villa-interior.png",
      "/coastal-villa-bedroom.png",
      "/coastal-villa-pool.png"
    ]
  },
  {
    id: "complejo-turistico",
    name: "Complejo Turístico",
    price: 75000,
    category: "Viviendas por Tipo",
    subcategory: "Complejo Turístico",
    image: "/modern-tourist-cabin.png",
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
    images: [
      "/modern-tourist-cabin.png",
      "/tourist-cabin-interior.png",
      "/tourist-cabin-bedroom.png",
      "/tourist-cabin-deck.png"
    ]
  },
  {
    id: "cabana-rustica",
    name: "Cabaña Rústica",
    price: 65000,
    category: "Viviendas por Tipo",
    subcategory: "Cabaña Rústica",
    image: "/rustic-premium-cabin.png",
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
    images: [
      "/rustic-premium-cabin.png",
      "/rustic-cabin-interior.png",
      "/rustic-cabin-bedroom.png",
      "/rustic-cabin-fireplace.png"
    ]
  },
  {
    id: "vivienda-alquiler",
    name: "Vivienda de Alquiler",
    price: 70000,
    category: "Viviendas por Tipo",
    subcategory: "Vivienda de Alquiler",
    image: "/investment-property-house.png",
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
    images: [
      "/investment-property-house.png",
      "/investment-house-interior.png",
      "/investment-house-bedroom.png",
      "/investment-house-kitchen.png"
    ]
  },

  // Servicios Adicionales
  {
    id: "instalacion",
    name: "Servicio de Instalación",
    price: 15000,
    category: "Servicios",
    subcategory: "Instalación",
    image: "/modern-house-construction.png",
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
    images: [
      "/modern-house-construction.png",
      "/modern-house-exterior.png",
      "/modern-house-interior.png",
      "/modern-house-bedroom.png"
    ]
  },
  {
    id: "personalizacion",
    name: "Personalización de Diseño",
    price: 8000,
    category: "Servicios",
    subcategory: "Personalización",
    image: "/modern-house-interior.png",
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
    images: [
      "/modern-house-interior.png",
      "/modern-house-exterior.png",
      "/modern-house-bedroom.png",
      "/modern-house-kitchen.png"
    ]
  },
  {
    id: "mantenimiento",
    name: "Mantenimiento Preventivo",
    price: 5000,
    category: "Servicios",
    subcategory: "Mantenimiento",
    image: "/modern-house-exterior.png",
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
    images: [
      "/modern-house-exterior.png",
      "/modern-house-interior.png",
      "/modern-house-bedroom.png",
      "/modern-house-kitchen.png"
    ]
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
