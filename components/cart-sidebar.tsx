"use client"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trash2, ShoppingCart } from "lucide-react"
import { toast } from "sonner"
import { CartItem } from "@/components/cart-provider"

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onRemoveItem: (id: string) => void
}

export function CartSidebar({ isOpen, onClose, items, onRemoveItem }: CartSidebarProps) {
  const total = items.reduce((sum, item) => sum + item.price, 0)

  const handleCheckout = () => {
    if (items.length === 0) {
      return
    }

    const message = `¡Hola! Me interesa realizar una consulta sobre los siguientes productos:

${items
  .map(
    (item) =>
      `• ${item.name} (${item.category})
  Precio: $${item.price.toLocaleString()}`,
  )
  .join("\n\n")}

*Total: $${total.toLocaleString()}*

¡Espero su respuesta!`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.link/send?phone=5491234567890&text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")
    
    toast.success("Redirigiendo a WhatsApp", {
      description: "Te conectamos con nuestro equipo de ventas",
      style: {
        background: "oklch(0.55 0.22 25)",
        color: "white",
        border: "1px solid oklch(0.85 0.12 85)",
      },
    })
  }

  const handleRemoveItem = (id: string, name: string) => {
    onRemoveItem(id)
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Carrito de Compras
            {items.length > 0 && (
              <Badge variant="secondary" className="text-white">{items.length}</Badge>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full px-4">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingCart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Tu carrito está vacío</p>
                <p className="text-sm text-muted-foreground mt-2">Agrega productos para comenzar tu compra</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-4">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg bg-card">
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                        <p className="font-semibold text-primary">${item.price.toLocaleString()}</p>
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive"
                        onClick={() => handleRemoveItem(item.id, item.name)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4 space-y-4 pb-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-xl font-bold text-primary">${total.toLocaleString()}</span>
                </div>

                <Button onClick={handleCheckout} className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Finalizar Compra por WhatsApp
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Al finalizar serás redirigido a WhatsApp para completar tu consulta
                </p>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
