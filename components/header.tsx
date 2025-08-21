"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Menu, Sun, Moon, ShoppingCart } from "lucide-react"
import { useTheme } from "next-themes"
import { Badge } from "@/components/ui/badge"

interface HeaderProps {
  cartItemsCount?: number
  onCartOpen?: () => void
}

export function Header({ cartItemsCount = 0, onCartOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/catalogo", label: "Catálogo" },
    { href: "/contacto", label: "Contacto" },
  ]

  if (!mounted) return null

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-background/80"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="relative grid grid-cols-3 items-center h-16">
          {/* Left Section */}
          <div className="flex items-center justify-start">
            {/* Mobile Menu - Left side (only visible below lg) */}
            <div className="lg:hidden flex items-center z-10">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  {/* Título oculto para accesibilidad */}
                  <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
                  
                  {/* Espacio para el botón de cerrar */}
                  <div className="h-16"></div>
                  
                  {/* Contenido del menú */}
                  <div className="px-4">
                    <h2 className="text-xl font-semibold mb-6">Menú de Navegación</h2>
                    <nav className="flex flex-col space-y-4">
                      {navItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="text-foreground font-medium text-lg py-2 px-3 rounded-md hover:bg-accent/50 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Logo - Left side (lg and above) */}
            <div className="hidden lg:flex items-center space-x-2 z-10">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">VH</span>
                </div>
                <span className="font-bold text-xl text-foreground hidden xl:block">Viviendas Tu Nuevo Hogar</span>
              </Link>
            </div>
          </div>

          {/* Center Section */}
          <div className="flex items-center justify-center">
            {/* Logo - Center (below lg) */}
            <div className="lg:hidden flex items-center space-x-2 z-10">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">VH</span>
                </div>
                <span className="font-bold text-xl text-foreground hidden xl:block">Viviendas Tu Nuevo Hogar</span>
              </Link>
            </div>

            {/* Desktop Navigation - Centered (only visible lg and above) */}
            <nav className="hidden lg:flex items-center space-x-8 z-20">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground font-medium px-3 py-2 rounded-md hover:bg-accent/50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-end">
            {/* Cart Button */}
            <Button variant="ghost" size="icon" onClick={onCartOpen} className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cartItemsCount}
                </Badge>
              )}
            </Button>

            {/* Theme Toggle */}
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
