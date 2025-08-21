"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import { useCart } from "@/components/cart-provider"

export default function ContactoPage() {
  const cart = useCart()

  return (
    <div className="min-h-screen">
      <Header cartItemsCount={cart.itemsCount} onCartOpen={cart.openCart} />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Contactanos</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Estamos aquí para ayudarte a encontrar la vivienda perfecta. Contáctanos y te asesoraremos en todo el proceso.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contact Form - Col-8 */}
            <div className="lg:col-span-8">
              <ContactForm />
              
              {/* Google Maps - Below Form */}
              <div className="mt-8">
                <Card>
                  <CardContent className="p-0">
                    <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                      <MapPin className="h-12 w-12 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Info - Col-4 */}
            <div className="lg:col-span-4">
              <ContactInfo />
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
