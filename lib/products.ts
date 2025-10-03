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
