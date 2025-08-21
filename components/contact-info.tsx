import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card className="py-6">
        <CardHeader>
          <CardTitle>Información de Contacto</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium">Teléfono</p>
              <p className="text-sm text-muted-foreground">+54 9 11 1234-5678</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-muted-foreground">viviendastunuevohogar@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium">Ubicación</p>
              <p className="text-sm text-muted-foreground">Argentina</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium">Horarios de Atención</p>
              <p className="text-sm text-muted-foreground">A confirmar</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="py-6">
        <CardHeader>
          <CardTitle>Síguenos en Redes Sociales</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">Mantente al día con nuestros últimos proyectos y novedades</p>

          <div className="space-y-2">
            <Button variant="outline" className="border-input social-button w-full justify-start" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-4 w-4 mr-2" />
                <span>Facebook</span>
              </a>
            </Button>

            <Button variant="outline" className="border-input social-button w-full justify-start" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4 mr-2" />
                <span>Instagram</span>
              </a>
            </Button>
          </div>

          <Separator />

          <div className="text-center">
            <p className="text-sm font-medium mb-2">¿Necesitas ayuda inmediata?</p>
            <Button className="w-full" asChild>
              <a
                href="https://wa.link/send?phone=5491234567890&text=Hola, me interesa obtener información sobre sus viviendas"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactar por WhatsApp
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="text-center">
            <h4 className="font-semibold mb-2">¿Tienes un proyecto en mente?</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Nuestro equipo de expertos está listo para asesorarte en cada paso del proceso.
            </p>
            <Button variant="outline" className="border-input social-button w-full">
              <span>Solicitar Presupuesto</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
