"use client"
import { CartSidebar } from "@/components/cart-sidebar"
import { useCart } from "@/components/cart-provider"

export function CartWrapper() {
  const cart = useCart()

  return (
    <CartSidebar
      isOpen={cart.isOpen}
      onClose={cart.closeCart}
      items={cart.items}
      onRemoveItem={cart.removeItem}
    />
  )
}
