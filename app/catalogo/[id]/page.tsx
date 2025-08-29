"use client"
import { useParams, useRouter } from "next/navigation"
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
            <div className="space-y-4">
              {/* Main Image Placeholder */}
              <div className="relative">
                <div className="w-full h-96 bg-muted rounded-lg shadow-lg flex items-center justify-center">
                  <Home className="h-16 w-16 text-muted-foreground" />
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

              {/* Thumbnail Placeholders */}
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className="w-full h-20 bg-muted rounded-lg border-2 border-transparent flex items-center justify-center"
                  >
                    <Home className="h-6 w-6 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div className="space-y-6">
              {/* Title and Price */}
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
                <p className="text-lg text-muted-foreground mb-4">{product.description}</p>
                <div className="text-3xl font-bold text-primary">${product.price.toLocaleString()}</div>
              </div>

              {/* Features */}
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
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Descripción detallada</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{product.longDescription}</p>
            </div>

            {/* Specifications */}
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

            {/* What's Included */}
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

            {/* Related Products */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Productos relacionados</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {getRelatedProducts(product.id, product.category, 3).map((relatedProduct) => (
                  <Card key={relatedProduct.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => router.push(`/catalogo/${relatedProduct.id}`)}>
                    <CardContent className="p-4">
                      <div className="w-full h-32 bg-muted rounded-md mb-3 flex items-center justify-center">
                        <Home className="h-8 w-8 text-muted-foreground" />
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
