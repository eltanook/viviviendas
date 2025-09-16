"use client"
import { useParams, useRouter } from "next/navigation"
import { useState, useRef } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Eye, Clock, Home, Settings, ArrowLeft, CheckCircle, Star, MapPin, Truck, Shield, Users, Zap } from "lucide-react"
import { useCart } from "@/components/cart-provider"

import { products, getProductById, getRelatedProducts } from "@/lib/products"

export default function ProductPage() {

  // Estado para la imagen principal
  const [mainImageIdx, setMainImageIdx] = useState(0)
  const thumbsContainerRef = useRef<HTMLDivElement>(null)
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([])
  const params = useParams()
  const router = useRouter()
  const cart = useCart()

  // Buscar el producto usando la función centralizada
  const product = getProductById(params.id as string)

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header cartItemsCount={cart.itemsCount} onCartOpen={cart.openCart} />
        <main className="pt-16">
          <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
            <p className="text-muted-foreground mb-6">
              El producto que buscas no existe o ha sido removido.
            </p>
            <Button onClick={() => router.push('/catalogo')}>
              Volver al catálogo
            </Button>
          </div>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    )
  }

  const handleAddToCart = () => {
    cart.addItem(product)
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "croquis":
        return "bg-blue-500"
      case "vivienda":
        return "bg-green-500"
      case "servicio":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "croquis":
        return "Croquis"
      case "vivienda":
        return "Vivienda"
      case "servicio":
        return "Servicio"
      default:
        return "Producto"
    }
  }

  return (
    <div className="min-h-screen">
      <Header cartItemsCount={cart.itemsCount} onCartOpen={cart.openCart} />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Button
              variant="ghost"
              onClick={() => router.push('/catalogo')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al catálogo
            </Button>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Images */}
            <div className="space-y-4 min-w-0">
              {/* Imagen principal */}
              <div className="relative">
                <div
                  className={
                    [
                      "w-full bg-muted rounded-lg shadow-lg flex items-center justify-center overflow-hidden",
                      mainImageIdx === 2 ? "max-w-full max-h-[90vh]" : "h-96"
                    ].join(' ')
                  }
                >
                  {product.images && product.images.length > 0 ? (
                    <img
                      src={product.images[mainImageIdx]}
                      alt={`Imagen ${mainImageIdx + 1} de ${product.name}`}
                      className={
                        mainImageIdx === 2
                          ? "object-contain w-auto h-auto max-w-full max-h-[90vh]"
                          : "object-cover w-full h-full"
                      }
                      style={
                        mainImageIdx === 2
                          ? { maxHeight: '90vh', maxWidth: '100%' }
                          : { height: '100%', width: '100%' }
                      }
                    />
                  ) : (
                    <Home className="h-16 w-16 text-muted-foreground" />
                  )}
                </div>
                <div className="absolute top-2 left-2 flex gap-2">
                  <Badge className={`${getTypeColor(product.type)} text-white`}>
                    {getTypeLabel(product.type)}
                  </Badge>
                  <Badge className="bg-secondary text-white">
                    {product.subcategory}
                  </Badge>
                </div>
              </div>
              {/* Miniaturas clickeables */}
              {product.images && product.images.length > 1 && (
                <div
                  ref={thumbsContainerRef}
                  className="flex w-full min-w-0 flex-shrink gap-2 overflow-x-auto overflow-y-hidden p-1 scrollbar-hide mb-6"
                  style={{ WebkitOverflowScrolling: 'touch' }}
                >
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      ref={el => { thumbRefs.current[idx] = el }}
                      onClick={() => setMainImageIdx(idx)}
                      aria-pressed={mainImageIdx === idx}
                      className={`relative h-auto min-w-[6rem] sm:min-w-[8rem] shrink-0 aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF4444]
                        ${mainImageIdx === idx
                          ? "border-[#FF4444] shadow-lg scale-105"
                          : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"}
                      `}
                    >
                      <Image
                        src={img}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            {/* Right Column - Product Info */}
            <div className="space-y-6">
              {/* Title and Price */}
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
                <p className="text-lg text-muted-foreground mb-4">{product.description && product.type === 'croquis' ? null : product.description}</p>
                <div className="text-3xl font-bold text-primary">${product.price.toLocaleString()}</div>
              </div>
              {/* Features (solo si existen) */}
              {product.features && product.features.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Características principales</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {/* Delivery Time */}
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5" />
                <span>Tiempo de entrega: {product.deliveryTime}</span>
              </div>
              {/* Add to Cart */}
              <div className="space-y-4">
                <Button onClick={handleAddToCart} size="lg" className="w-full">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Agregar al carrito
                </Button>
              </div>
              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Garantía</p>
                  <p className="text-xs text-muted-foreground">100% garantizado</p>
                </div>
                <div className="text-center">
                  <Truck className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Envío</p>
                  <p className="text-xs text-muted-foreground">A todo el país</p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Soporte</p>
                  <p className="text-xs text-muted-foreground">24/7 disponible</p>
                </div>
              </div>
            </div>
          </div>
          {/* Product Details */}
          <div className="mt-16 space-y-12">
            {/* Descripción detallada o info croquis */}
            <div>
              {product.type === 'croquis' ? (
                <>
                  <h2 className="text-2xl font-bold mb-6">Viviendas Tu Nuevo Hogar: Tu casa, en menos tiempo</h2>
                  <CroquisDescription description={product.description} />
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6">Descripción detallada</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{product.longDescription}</p>
                </>
              )}
            </div>
            {/* Specifications (solo si existen) */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Especificaciones técnicas</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b">
                      <span className="font-medium">{key}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* What's Included (solo si existen) */}
            {product.included && product.included.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">¿Qué incluye?</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.included.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Related Products */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Productos relacionados</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {getRelatedProducts(product.id, product.category, 3).map((relatedProduct) => (
                  <Card key={relatedProduct.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => router.push(`/catalogo/${relatedProduct.id}`)}>
                    <CardContent className="p-4">
                      <div className="w-full h-44 bg-muted rounded-md mb-3 flex items-center justify-center overflow-hidden">
                        {relatedProduct.images && relatedProduct.images.length > 0 ? (
                          <img
                            src={relatedProduct.images[0]}
                            alt={relatedProduct.name}
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <Home className="h-8 w-8 text-muted-foreground" />
                        )}
                      </div>
                      <h3 className="font-semibold mb-2 line-clamp-2">{relatedProduct.name}</h3>
                      <p className="text-primary font-bold">${relatedProduct.price.toLocaleString()}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )

}

// Componente para mostrar la descripción de croquis de forma visual


function CroquisDescription({ description }: { description: string }) {
  // Separar en tres bloques principales usando divisores
  let blocks = description.split(/_{10,}|\n_{6,}/g).map(b => b.trim()).filter(Boolean);
  // Eliminar el título duplicado si está presente
  if (blocks[0]?.startsWith('Viviendas Tu Nuevo Hogar: Tu casa, en menos tiempo')) {
    blocks[0] = blocks[0].replace(/^Viviendas Tu Nuevo Hogar: Tu casa, en menos tiempo\.?\n?/, '').trim();
  }
  // Primer bloque: presentación
  const presentacion = blocks[0] || "";
  // Segundo bloque: sistema y diseño personalizado
  const sistemaYDiseno = blocks[1] || "";
  // Tercer bloque: ventajas y materiales
  const ventajasYMateriales = blocks.slice(2).join("\n");

  // Utilidad para sublistas (o. ...)
  function renderListWithSublist(lines: string[]) {
    // Agrupar por título principal y subitems, manteniendo los bullets originales
    const blocks: { title: string, items: string[] }[] = [];
    let currentBlock: { title: string, items: string[] } | null = null;
    lines.forEach((line) => {
      // Título principal: termina en ':' y no empieza con 'o ' ni '•'
      if (/^[A-ZÁÉÍÓÚÜÑ][^:]+:$/u.test(line)) {
        if (currentBlock) blocks.push(currentBlock);
        currentBlock = { title: line.replace(/:$/, ''), items: [] };
      } else if (line.trim() === '') {
        // Ignorar líneas vacías
      } else {
        // Mantener el bullet (•/o) en el item
        if (currentBlock) {
          currentBlock.items.push(line);
        } else {
          blocks.push({ title: '', items: [line] });
        }
      }
    });
    if (currentBlock) blocks.push(currentBlock);
    return (
      <div className="space-y-4">
        {blocks.map((block, idx) =>
          block.title ? (
            <div key={block.title + idx}>
              <span className="font-bold text-base">{block.title}:</span>
              <div className="mt-1">
                {block.items.map((item, i) => {
                  // Si empieza con •
                  if (/^\s*•/.test(item)) {
                    return <p key={i} className="text-base font-normal ml-2">{item.replace(/^\s*•\s*/, '')}</p>;
                  }
                  // Si empieza con o (con cualquier cantidad de espacios/tabs antes o después)
                  if (/^\s*o\s+/.test(item)) {
                    return <p key={i} className="text-base font-normal ml-6">{item.replace(/^\s*o\s+/, '')}</p>;
                  }
                  // Si es un título de sección (sin dos puntos y sin viñeta), mostrarlo grande y bold
                  if (/^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]+( [A-ZÁÉÍÓÚÜÑa-záéíóúüñ]+)*$/.test(item.trim())) {
                    return <p key={i} className="mt-4 mb-1 font-bold text-lg">{item}</p>;
                  }
                  // Si es un item normal, mostrarlo como texto regular
                  return <p key={i} className="text-base font-normal ml-2">{item}</p>;
                })}
              </div>
            </div>
          ) : (
            block.items.map((item, i) => {
              // Si el item es un título de sección (sin dos puntos y sin viñeta), mostrarlo grande y bold
              if (/^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]+( [A-ZÁÉÍÓÚÜÑa-záéíóúüñ]+)*$/.test(item.trim())) {
                return <p key={i} className="mt-4 mb-1 font-bold text-lg">{item}</p>;
              }
              // Si empieza con •
              if (/^\s*•/.test(item)) {
                return <p key={i} className="text-base font-normal ml-2">{item}</p>;
              }
              // Si empieza con o
              if (/^\s*o\s+/.test(item)) {
                return <p key={i} className="text-base font-normal ml-6">{item.replace(/^\s*o\s+/, '')}</p>;
              }
              // Si es un item normal, mostrarlo como texto regular
              return <p key={i} className="text-base font-normal ml-2">{item}</p>;
            })
          )
        )}
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {/* Bloque 1: Presentación */}
      <div>
        {presentacion.split("\n").map((p, i) => (
          <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-2">{p}</p>
        ))}
      </div>
      <Separator className="my-6" />
      {/* Bloque 2: Sistema y diseño personalizado */}
      <div>
        {sistemaYDiseno.split(/\n(?=¿Cómo lo logramos\?|Diseño Personalizado)/g).map((section, i) => {
          if (section.startsWith('¿Cómo lo logramos?')) {
            return <div key={i}><h3 className="text-xl font-semibold mb-2">¿Cómo lo logramos? El sistema de Construcción en Seco</h3><p className="text-lg text-muted-foreground leading-relaxed">{section.replace('¿Cómo lo logramos? El sistema de Construcción en Seco', '').replace('¿Cómo lo logramos?', '')}</p></div>;
          }
          if (section.startsWith('Diseño Personalizado')) {
            return <div key={i} className="mt-8"><h3 className="text-xl font-semibold mb-4">Diseño Personalizado: Tu hogar, a tu medida</h3><p className="text-lg text-muted-foreground leading-relaxed">{section.replace('Diseño Personalizado: Tu hogar, a tu medida', '').replace('Diseño Personalizado', '')}</p></div>;
          }
          return <p key={i} className="text-lg text-muted-foreground leading-relaxed">{section}</p>;
        })}
      </div>
      <Separator className="my-6" />
      {/* Bloque 3: Ventajas y materiales */}
      <div className="space-y-8">
        {/* Ventajas */}
        {ventajasYMateriales.includes('Otras ventajas de nuestro sistema:') && (
          (() => {
            const lines = ventajasYMateriales.split('Otras ventajas de nuestro sistema:')[1].split('Estructura y Materiales')[0].split('\n').filter(l => l.trim());
            return (
              <div>
                <h3 className="text-xl font-semibold mb-2">Otras ventajas de nuestro sistema</h3>
                {renderListWithSublist(lines)}
              </div>
            );
          })()
        )}
        {/* Materiales */}
        {ventajasYMateriales.includes('Estructura y Materiales') && (
          (() => {
            const lines = ventajasYMateriales.split('Estructura y Materiales')[1].split('\n').filter(l => l.trim());
            return (
              <div>
                <h3 className="text-xl font-semibold mb-2">Estructura y Materiales</h3>
                {renderListWithSublist(lines)}
              </div>
            );
          })()
        )}
      </div>
    </div>
  );
}
