import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/components/cart-provider"
import { CartWrapper } from "@/components/cart-wrapper"
import { Toaster } from "sonner"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Viviendas Tu Nuevo Hogar - Construcción en Seco | Casas Permanentes y de Inversión",
  description:
    "Especialistas en construcción en seco. Viviendas permanentes, casas quintas, casas de playa y complejos turísticos. Calidad y diseño para tu nuevo hogar en Argentina.",
  keywords:
    "construcción en seco, viviendas permanentes, casas quintas, casas de playa, inversión inmobiliaria, Argentina, construcción, hogar",
  authors: [{ name: "Nexium Solutions y Ditiero" }],
  creator: "Nexium Solutions y Ditiero",
  openGraph: {
    title: "Viviendas Tu Nuevo Hogar",
    description: "Construcción en seco de calidad. Tu nuevo hogar te espera.",
    type: "website",
    locale: "es_AR",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${roboto.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CartProvider>
            {children}
            <CartWrapper />
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  background: "var(--background)",
                  color: "var(--foreground)",
                  border: "1px solid var(--border)",
                },
              }}
            />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
