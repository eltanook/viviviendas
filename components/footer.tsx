import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/catalogo", label: "Catálogo" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo y Slogan */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">VH</span>
              </div>
              <span className="font-bold text-lg">Viviendas Tu Nuevo Hogar</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Construimos tu hogar ideal con calidad, diseño y compromiso. Más de 15 años creando espacios únicos para
              vivir y disfrutar.
            </p>
          </div>

          {/* Enlaces de Navegación */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Navegación</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de Contacto */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+54 11 2345-6789</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">viviendastunuevohogar@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Síguenos</h3>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-xs text-muted-foreground mt-4">Próximamente en Instagram y Facebook</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Viviendas Tu Nuevo Hogar. Desarrollado y diseñado por{" "}
            <span className="text-primary font-medium">Nexium Solutions y Ditiero</span>.
          </p>
        </div>
      </div>
    </footer>
  )
}
