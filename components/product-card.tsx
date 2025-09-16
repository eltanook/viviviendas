"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Eye, Clock, Home, Settings } from "lucide-react"

import { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
  onAddToCart: () => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "croquis":
        return <Home className="h-4 w-4" />
      case "vivienda":
        return <Home className="h-4 w-4" />
      case "servicio":
        return <Settings className="h-4 w-4" />
      default:
        return <Home className="h-4 w-4" />
    }
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
    <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      <div className="relative overflow-hidden">
        <Image
          src={
            product.images?.[0] || "/placeholder.svg?height=300&width=400"
          }
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 flex gap-2">
          <Badge className={`${getTypeColor(product.type)} text-white`}>
            {getTypeLabel(product.type)}
          </Badge>
          <Badge className="bg-secondary text-white">
            {product.subcategory}
          </Badge>
        </div>
      </div>

      <CardContent className="px-4 pb-4 flex-1">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
        {/* Descripción eliminada para croquis */}
        {product.type !== "croquis" && (
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
        )}
        
        {/* Features */}
        <div className="mb-3">
          <div className="flex flex-wrap gap-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
            {product.features.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{product.features.length - 3} más
              </Badge>
            )}
          </div>
        </div>

        {/* Delivery Time */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Clock className="h-4 w-4" />
          <span>Entrega: {product.deliveryTime}</span>
        </div>

        <p className="text-2xl font-bold text-primary">${product.price.toLocaleString()}</p>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2 mt-auto">
        <Button onClick={onAddToCart} className="flex-1">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Agregar
        </Button>
        <Button variant="outline" className="border-input social-button" asChild>
          <Link href={`/catalogo/${product.id}`}>
            <Eye className="h-4 w-4 mr-2" />
            <span>Ver</span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
