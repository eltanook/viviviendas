"use client"
import { useState, useMemo, useCallback, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ProductCard } from "@/components/product-card"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ChevronLeft, ChevronRight, Filter, ChevronDown, ChevronUp, Home, Building2, Waves, TreePine, Users, Target, Zap } from "lucide-react"
import { useCart } from "@/components/cart-provider"

import { products } from "@/lib/products"

// Datos reales basados en la información de la empresa
const mockProducts = products

const ITEMS_PER_PAGE = 12

export default function CatalogoPage() {
  const cart = useCart()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todas")
  const [selectedSubcategory, setSelectedSubcategory] = useState("Todas")
  const [sortBy, setSortBy] = useState("name")
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilters, setShowFilters] = useState(false)

  // Resetear subcategoría cuando cambie la categoría
  useEffect(() => {
    setSelectedSubcategory("Todas")
    setCurrentPage(1)
  }, [selectedCategory])

  const categories = ["Todas", ...Array.from(new Set(mockProducts.map((p) => p.category)))]
  
  // Filtrar subcategorías según la categoría seleccionada
  const subcategories = useMemo(() => {
    if (selectedCategory === "Todas") {
      return ["Todas"]
    }
    const filteredSubcats = mockProducts
      .filter((p) => p.category === selectedCategory)
      .map((p) => p.subcategory)
    return ["Todas", ...Array.from(new Set(filteredSubcats))]
  }, [selectedCategory, mockProducts])

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = mockProducts.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "Todas" || product.category === selectedCategory
      const matchesSubcategory = selectedSubcategory === "Todas" || product.subcategory === selectedSubcategory
      return matchesSearch && matchesCategory && matchesSubcategory
    })

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        case "name":
          return a.name.localeCompare(b.name)
        case "delivery":
          return a.deliveryTime.localeCompare(b.deliveryTime)
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, selectedSubcategory, sortBy])

  const totalPages = Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedProducts = filteredAndSortedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleAddToCart = useCallback((product: any) => {
    cart.addItem(product)
  }, [cart])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setSelectedSubcategory("Todas")
    setCurrentPage(1)
  }

  const handleSubcategoryChange = (subcategory: string) => {
    setSelectedSubcategory(subcategory)
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen">
      <Header cartItemsCount={cart.itemsCount} onCartOpen={cart.openCart} />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Nuestro Catálogo</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Descubre nuestra amplia gama de croquis, viviendas premoldeadas y servicios especializados
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          {/* Mobile Filters Button */}
          <div className="lg:hidden mb-6">
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="w-full flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filtros
              </span>
              {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
            
            {/* Mobile Filters Dropdown */}
            {showFilters && (
              <div className="mt-4 p-4 bg-card border rounded-lg">
                <div className="space-y-4">
                  {/* Categories */}
                  <div>
                    <h3 className="font-semibold mb-2">Categorías</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "default" : "ghost"}
                          className="w-full justify-start"
                          onClick={() => handleCategoryChange(category)}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Subcategories */}
                  {selectedCategory !== "Todas" && (
                    <div>
                      <h3 className="font-semibold mb-2">Subcategorías</h3>
                      <div className="space-y-2">
                        {subcategories.map((subcategory) => (
                          <Button
                            key={subcategory}
                            variant={selectedSubcategory === subcategory ? "default" : "ghost"}
                            className="w-full justify-start"
                            onClick={() => handleSubcategoryChange(subcategory)}
                          >
                            {subcategory}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Sort */}
                  <div>
                    <h3 className="font-semibold mb-2">Ordenar por</h3>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="name">Nombre A-Z</option>
                      <option value="price-asc">Precio: Menor a Mayor</option>
                      <option value="price-desc">Precio: Mayor a Menor</option>
                      <option value="delivery">Tiempo de Entrega</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Sidebar Filters */}
            <aside className="hidden lg:block lg:w-64 space-y-6">
              <div className="space-y-6">
                {/* Categories */}
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="font-semibold mb-3">Categorías</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => handleCategoryChange(category)}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Subcategories */}
                {selectedCategory !== "Todas" && (
                  <div className="bg-card p-4 rounded-lg border">
                    <h3 className="font-semibold mb-3">Subcategorías</h3>
                    <div className="space-y-2">
                      {subcategories.map((subcategory) => (
                        <Button
                          key={subcategory}
                          variant={selectedSubcategory === subcategory ? "default" : "ghost"}
                          className="w-full justify-start"
                          onClick={() => handleSubcategoryChange(subcategory)}
                        >
                          {subcategory}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sort */}
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="font-semibold mb-3">Ordenar por</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="name">Nombre A-Z</option>
                    <option value="price-asc">Precio: Menor a Mayor</option>
                    <option value="price-desc">Precio: Mayor a Menor</option>
                    <option value="delivery">Tiempo de Entrega</option>
                  </select>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Buscar croquis, viviendas o servicios..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Results Info */}
              <div className="mb-6 flex justify-between items-center">
                <p className="text-muted-foreground">
                  Mostrando {paginatedProducts.length} de {filteredAndSortedProducts.length} productos
                </p>
              </div>

              {/* Products Grid */}
              {paginatedProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} onAddToCart={() => handleAddToCart(product)} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    No se encontraron productos que coincidan con tu búsqueda
                  </p>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Anterior
                  </Button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      onClick={() => handlePageChange(page)}
                      className="w-10"
                    >
                      {page}
                    </Button>
                  ))}

                  <Button
                    variant="outline"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Siguiente
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
