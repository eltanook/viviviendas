import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/catalogo", label: "Catálogo" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo y Slogan */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 793.5 685.5" className="w-12 h-12">
                  <g>
                    <polygon fill="#fefefe" points=".75 0 .75 684.75 793.5 684.75 793.5 685.5 0 685.5 0 0 .75 0"/>
                    <path fill="#f6e500" d="M390.19,106.51c1.05-.22,1.87.13,2.71.72l176.92,146.01.39,153.94c-1.9,10.46-10.72,17.64-21.32,17.64H231.88c-9.39-.75-16.49-5.92-19.63-14.84-2.2-50.71-.29-101.82-.98-152.67,0-5.59,6.15-7.92,9.42-11.56l169.51-139.23ZM460.81,224.75h-140.12v139.35h140.12v-139.35Z"/>
                    <path fill="#f6e500" d="M490.04,46.45c-.11-.1-2.02.03-2.99-.36-10.13-4.1-9.68-16.03-.23-20.46,11.44-.38,22.9-.05,34.34-.13,15.92-.1,38.56-1.9,53.94-.05,14.02,1.69,10.22,24.74-4.89,20.99l.02,115.74,1.08,1.91,64.85,53.53c5.25,4.44,7.53,8.78,4.07,15.33-2.09,3.95-14.3,17.98-17.93,21.78-4.44,4.65-7.6,7.28-14.41,4.64l-213.41-177.69-3.74-2.28-215.63,179.22c-4.47,2.73-9.41,2.28-13.3-1.24-3.26-2.95-17.56-20.02-19.77-23.69-3.13-5.22-2.8-10.36,1.8-14.57L363.8,35.98c12.23-11.82,31.57-14.21,46.29-5.87,27.34,20.99,52.84,44.43,79.95,65.78v-49.45Z"/>
                    <polygon fill="#f6e500" points="412.11 477.23 414.8 482.41 448.83 534.91 448.83 477.23 470.56 477.23 470.56 571.62 449.2 571.62 411.36 513.19 411.36 571.62 389.63 571.62 389.63 477.23 412.11 477.23"/>
                    <path fill="#f6e500" d="M493.78,571.62v-94.4h35.59c2.88,0,11.62,3.47,14.52,4.96,33.48,17.19,33.91,65.92.86,83.83-3.24,1.75-12.8,5.61-16.12,5.61h-34.84ZM515.51,552.15c40.08,3.31,39.95-59.04,0-55.44v55.44Z"/>
                    <path fill="#f6e500" d="M579.2,571.62l37.57-94.3,19.78-.15,38.56,94.45h-23.23l-6.87-18.6c-4.38.37-34.82-1.09-35.92.34l-6.67,18.27h-23.23ZM616.67,534.17h20.98c-3.05-8.19-5.69-17.62-9.41-25.47-.39-.83.07-1.9-1.45-1.51-1.4.36-8.7,23.74-10.12,26.97Z"/>
                    <path fill="#f6e500" d="M742.51,501.17c-5.3-1.55-10.36-5.23-16.15-5.88-6.16-.69-15.27.47-14.59,8.54.32,3.82,4.58,5.8,7.54,7.5,13.92,8.04,35.43,12.65,34.48,33.68-1.47,32.55-43,33.67-64.94,20.75-2.82-1.66-7.1-3.28-5.84-6.83.47-1.32,8.92-15.47,9.81-15.74,3.86,1.32,7.34,4.77,11.24,6.61,6.41,3.03,19.61,5.98,24.26-1.03,7.34-11.05-14.95-17.06-21.75-20.97-33.07-18.99-11.93-58.25,24.16-51.88,6.9,1.22,14.55,3.97,20,8.49l-8.21,16.75Z"/>
                    <polygon fill="#f6e500" points="46.46 477.23 69.32 537.92 92.91 477.23 117.64 477.23 78.57 571.52 61.79 571.68 21.73 477.23 46.46 477.23"/>
                    <polygon fill="#f6e500" points="182.08 477.23 204.94 537.92 228.53 477.23 253.26 477.23 214.2 571.52 197.41 571.68 157.35 477.23 182.08 477.23"/>
                    <path fill="#f6e500" d="M367.15,477.23v18.73h-32.97v18.73h31.47v18.35c0,.08-1.04,1.12-1.12,1.12h-30.35v18.73h32.97v18.73h-54.7v-94.4h54.7Z"/>
                    <rect fill="#f6e500" x="131.88" y="477.23" width="21.73" height="94.4"/>
                    <rect fill="#f6e500" x="267.5" y="477.23" width="21.73" height="94.4"/>
                    <path fill="#f6e500" d="M204.56,641.3v-29.59c0-.08,1.04-1.12,1.12-1.12h11.61v52.44h-12.36c-1.85,0-16.66-28.18-20.61-30.72v30.72h-11.99v-52.44h11.61c1.85,0,17,27.82,20.61,30.72Z"/>
                    <path fill="#f6e500" d="M536.31,610.03c37.39-5.06,40.94,53.35,5.02,54.51-34.31,1.1-36.78-50.2-5.02-54.51ZM548.97,649.28c7.76-7.13,5.34-26.23-6.86-27.46s-16.99,10.62-14.28,21.02c2.36,9.04,14.2,12.81,21.13,6.44Z"/>
                    <path fill="#f6e500" d="M399.19,610.03c37.39-5.06,40.94,53.35,5.02,54.51-34.31,1.1-36.78-50.2-5.02-54.51ZM411.85,649.28c7.76-7.13,5.34-26.23-6.86-27.46s-16.99,10.62-14.28,21.02c2.36,9.04,14.2,12.81,21.13,6.44Z"/>
                    <path fill="#f6e500" d="M611.42,643.55h-11.24v-9.74h23.98v13.11c0,.26-1.6,4.1-1.94,4.8-4.91,10.12-18.27,14.63-28.79,11.7-30.02-8.37-22.9-58.81,12.04-53.24,2.81.45,15.45,5.79,14.89,8.93-.13.71-6.72,7.48-7.81,8.7-11.8-14.69-26.99-3.06-24.17,13.7,2.18,13,21.06,15.99,23.05,2.05Z"/>
                    <path fill="#f6e500" d="M711.45,610.58c17.54,2.19,20.29,24.93,4.12,31.09l17.23,21.36h-15.36c-1.24,0-12.41-17.83-15.36-19.48v19.48h-11.99v-52.44c6.74.6,14.79-.82,21.35,0ZM702.09,621.07v12.74c14.92,2.58,15.3-15.56,0-12.74Z"/>
                    <path fill="#f6e500" d="M108.27,610.58c.98.3,1.06,1.71,1.16,2.58,1.19,10.16-1.61,23.73.14,33.58,1.11,6.26,11.46,6.92,14.38,1.99s.24-27.84,1.14-35.57c.09-.75.34-2.58,1.16-2.58h11.61v38.58c0,.52-1.9,5.84-2.36,6.63-6.75,11.66-30.59,11.67-36.74-.5-.35-.69-2.11-5.09-2.11-5.38v-39.33c3.02.57,9.08-.78,11.61,0Z"/>
                    <path fill="#f6e500" d="M240.9,610.58c.98.3,1.06,1.71,1.16,2.58,1.19,10.16-1.61,23.73.14,33.58,1.11,6.26,11.46,6.92,14.38,1.99s.24-27.84,1.14-35.57c.09-.75.34-2.58,1.16-2.58h11.61v38.58c0,.52-1.9,5.84-2.36,6.63-6.75,11.66-30.59,11.67-36.74-.5-.35-.69-2.11-5.09-2.11-5.38v-39.33c3.02.57,9.08-.78,11.61,0Z"/>
                    <polygon fill="#f6e500" points="475.05 610.58 475.05 631.56 491.54 631.56 491.54 610.58 503.52 610.58 503.52 663.02 491.54 663.02 491.54 642.8 475.05 642.8 475.05 663.02 463.06 663.02 463.06 610.58 475.05 610.58"/>
                    <path fill="#f6e500" d="M629.41,663.02l20.31-51.24c1.92-2.45,7.81-.65,10.82-1.25l22.07,52.49h-13.11c-2.02-1.92-2.25-7.19-3.74-8.99-1.42-1.71-16.17-.35-19.38-.64-1.87.64-2.89,9.64-4.6,9.64h-12.36ZM660.88,642.05l-4.5-14.23c-3.06,3.79-4.49,9.55-5.99,14.23h10.49Z"/>
                    <path fill="#f6e500" d="M332.69,610.58l13.48,32.96,12-32.96h14.24c-3.19,5.81-19.98,52.15-22.82,52.5-1.39.17-8.93.19-9.47-.52l-20.9-51.98h13.49Z"/>
                    <polygon fill="#f6e500" points="312.45 610.58 312.45 621.82 294.47 621.82 294.47 631.56 311.71 631.56 311.71 642.8 294.47 642.8 294.47 652.54 312.45 652.54 312.45 663.02 282.48 663.02 282.48 610.58 312.45 610.58"/>
                    <path fill="#f6e500" d="M88.42,610.58v11.24h-11.99v41.2h-12.74v-41.2h-11.61c-1.69,0-1.69-11.24,0-11.24h36.34Z"/>
                  </g>
                </svg>
              </div>
              {/* Eliminado el texto "Viviendas Tu Nuevo Hogar" */}
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
                <span className="text-muted-foreground">Argentina</span>
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
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Viviendas Tu Nuevo Hogar. Desarrollado y diseñado por{" "}
            <a 
              href="https://nexiumsolutions.online/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline transition-colors"
            >
              Nexium Solutions y DiTiero
            </a>.
          </p>
        </div>
      </div>
    </footer>
  )
}
