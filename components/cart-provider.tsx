"use client"
import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from "react"
import { toast } from "sonner"

export interface CartItem {
  id: string
  name: string
  price: number
  category: string
  image?: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  itemsCount: number
  total: number
  isOpen: boolean
  addItem: (product: Omit<CartItem, "quantity">) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  clearLocalStorage: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

// LocalStorage keys
const CART_STORAGE_KEY = "viviendas-cart"
const CART_OPEN_STORAGE_KEY = "viviendas-cart-open"

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      // Load cart items
      const savedItems = localStorage.getItem(CART_STORAGE_KEY)
      if (savedItems) {
        const parsedItems = JSON.parse(savedItems)
        if (Array.isArray(parsedItems)) {
          setItems(parsedItems)
        }
      }

      // Load cart open state
      const savedCartOpen = localStorage.getItem(CART_OPEN_STORAGE_KEY)
      if (savedCartOpen) {
        setIsOpen(JSON.parse(savedCartOpen))
      }

      setIsInitialized(true)
    } catch (error) {
      console.error("Error loading cart from localStorage:", error)
      setIsInitialized(true)
    }
  }, [])

  // Helper function to save cart to localStorage
  const saveCartToStorage = useCallback((newItems: CartItem[]) => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newItems))
    } catch (error) {
      console.error("Error saving cart to localStorage:", error)
    }
  }, [])

  // Helper function to save cart open state to localStorage
  const saveCartOpenState = useCallback((open: boolean) => {
    try {
      localStorage.setItem(CART_OPEN_STORAGE_KEY, JSON.stringify(open))
    } catch (error) {
      console.error("Error saving cart open state to localStorage:", error)
    }
  }, [])

  // Auto-save cart items when they change (as a backup)
  useEffect(() => {
    if (isInitialized) {
      saveCartToStorage(items)
    }
  }, [items, isInitialized, saveCartToStorage])

  // Listen for storage changes from other tabs
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === CART_STORAGE_KEY && e.newValue) {
        try {
          const newItems = JSON.parse(e.newValue)
          if (Array.isArray(newItems)) {
            setItems(newItems)
          }
        } catch (error) {
          console.error("Error parsing cart data from storage event:", error)
        }
      }
    }

    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  const addItem = useCallback((product: Omit<CartItem, "quantity">) => {
    if (isProcessing) {
      console.log("Already processing, skipping addItem for:", product.name)
      return
    }
    
    console.log("addItem called for:", product.name)
    setIsProcessing(true)
    
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id)
      let newItems: CartItem[]

      if (existingItem) {
        console.log("Adding existing item:", product.name)
        toast.success(`Se agregó una unidad más de ${product.name}`, {
          id: `add-${product.id}-${Date.now()}`,
          style: {
            background: "oklch(0.55 0.22 25)",
            color: "white",
            border: "1px solid oklch(0.85 0.12 85)",
          },
        })
        newItems = currentItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      } else {
        console.log("Adding new item:", product.name)
        toast.success(`${product.name} fue agregado al carrito`, {
          id: `add-${product.id}-${Date.now()}`,
          style: {
            background: "oklch(0.55 0.22 25)",
            color: "white",
            border: "1px solid oklch(0.85 0.12 85)",
          },
        })
        newItems = [...currentItems, { ...product, quantity: 1 }]
      }

      // Save to localStorage
      saveCartToStorage(newItems)
      return newItems
    })
    
    // Reset processing flag after a short delay
    setTimeout(() => setIsProcessing(false), 100)
  }, [isProcessing, saveCartToStorage])

  const removeItem = useCallback(
    (id: string) => {
      if (isProcessing) {
        console.log("Already processing, skipping removeItem for id:", id)
        return
      }
      
      console.log("removeItem called for id:", id)
      setIsProcessing(true)
      
      const itemToRemove = items.find((item) => item.id === id)
      setItems((currentItems) => {
        const newItems = currentItems.filter((item) => item.id !== id)
        // Save to localStorage
        saveCartToStorage(newItems)
        return newItems
      })

      if (itemToRemove) {
        console.log("Removing item:", itemToRemove.name)
        toast.error(`${itemToRemove.name} fue eliminado del carrito`, {
          id: `remove-${id}-${Date.now()}`,
          style: {
            background: "oklch(0.6 0.2 15)",
            color: "white",
            border: "1px solid oklch(0.85 0.12 85)",
          },
        })
      }
      
      // Reset processing flag after a short delay
      setTimeout(() => setIsProcessing(false), 100)
    },
    [items, isProcessing, saveCartToStorage],
  )

  const updateQuantity = useCallback(
    (id: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(id)
        return
      }

      setItems((currentItems) => {
        const newItems = currentItems.map((item) => (item.id === id ? { ...item, quantity } : item))
        // Save to localStorage
        saveCartToStorage(newItems)
        return newItems
      })
    },
    [removeItem, saveCartToStorage],
  )

  const clearCart = useCallback(() => {
    setItems([])
    // Clear from localStorage
    saveCartToStorage([])
  }, [saveCartToStorage])

  const openCart = useCallback(() => {
    setIsOpen(true)
    saveCartOpenState(true)
  }, [saveCartOpenState])
  
  const closeCart = useCallback(() => {
    setIsOpen(false)
    saveCartOpenState(false)
  }, [saveCartOpenState])

  const clearLocalStorage = useCallback(() => {
    try {
      localStorage.removeItem(CART_STORAGE_KEY)
      localStorage.removeItem(CART_OPEN_STORAGE_KEY)
      console.log("LocalStorage cleared successfully")
    } catch (error) {
      console.error("Error clearing localStorage:", error)
    }
  }, [])

  const itemsCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const value: CartContextType = {
    items,
    itemsCount,
    total,
    isOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
    clearLocalStorage,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(): CartContextType {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
