import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Star,
  Target,
  Users,
  Trophy,
  Rocket,
  Settings,
  Search,
  Calendar,
  MessageCircle,
  Compass,
  Clock,
  Mail,
  Phone,
  Globe,
  Linkedin,
  Instagram,
  Facebook,
  Building,
  Network,
  Award,
  MapPin,
  Briefcase,
  Check,
  Download,
  MessageSquare,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PersonalLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-teal-50">
      {/* 1. INTRODUCCIÓN VISUAL DESTACADA - Estructura en Z para guiar atención */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Lado izquierdo: Foto personal (punto de inicio visual) */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1 items-start">
              <div className="relative mt-4">
                <div className="w-96 h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-gradient-to-br from-violet-100 to-teal-100">
                  {/* (PERSONALIZAR: Reemplazar con tu foto profesional) */}
                  <Image
                    src="/images/federico-profile.jpg"
                    alt="Federico Lenci - Foto profesional"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                  {/* (PERSONALIZAR: Logo de tu empresa) */}
                  <Image
                    src="/images/fonder-logo.png"
                    alt="Logo Fonder"
                    width={100}
                    height={50}
                    className="w-auto h-12 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Lado derecho: Información principal (flujo visual Z) */}
            <div className="text-center lg:text-left order-1 lg:order-2 space-y-6">
              {/* (PERSONALIZAR: Tu nombre completo) */}
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600 bg-clip-text bg-[rgba(255,0,0,1)] text-[rgba(255,82,82,1)]">
                Federico Lenci
              </h1>

              {/* (PERSONALIZAR: Tu profesión o cargo principal) */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <Badge variant="secondary" className="text-lg px-4 py-2 bg-gradient-to-r from-violet-100 to-blue-100">
                  COO & Cofundador en Fonder
                </Badge>
                <Badge variant="outline" className="text-lg px-4 py-2">
                  Especialista en UX, producto y crecimiento
                </Badge>
              </div>

              {/* (PERSONALIZAR: Texto introductorio sobre tu trayectoria) */}
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                Con más de 8 años de experiencia en startups B2B SaaS en LatAm, me especializo en crear experiencias de
                producto centradas en el usuario, optimizar procesos financieros y facilitar decisiones estratégicas
                basadas en métricas reales. Mi pasión es transformar datos financieros complejos en decisiones simples y
                efectivas.
              </p>

              {/* Tarjeta Personal con Glassmorphism */}
              <div className="mt-8 p-6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl shadow-lg">
                <div className="grid grid-cols-4 md:grid-cols-7 gap-4 items-center justify-items-center">
                  {[
                    { icon: Heart, label: "Cónyuge", tooltip: "Casado con María" },
                    { icon: Users, label: "Hijos", tooltip: "2 hijos: Ana (8) y Luis (5)" },
                    { icon: Heart, label: "Mascotas", tooltip: "Luna, golden retriever" },
                    { icon: Star, label: "Pasatiempos", tooltip: "Ilustración digital" },
                    { icon: Globe, label: "Intereses", tooltip: "Web3 y literatura" },
                    { icon: MapPin, label: "Ciudad", tooltip: "Buenos Aires, Argentina" },
                    { icon: Briefcase, label: "Experiencia", tooltip: "8+ años en SaaS" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group flex flex-col items-center space-y-2 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="relative p-3 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 transition-all duration-300 hover:scale-110 hover:bg-violet-100/50 hover:border-violet-300/50">
                        <item.icon className="h-5 w-5 text-violet-600 transition-colors duration-300 group-hover:text-violet-700" />
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                          {item.tooltip}
                        </div>
                      </div>
                      <span className="text-xs text-gray-600 font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-violet-300 text-violet-700 hover:bg-violet-50 bg-transparent relative overflow-hidden group transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 border-2 border-violet-400 rounded-md animate-pulse opacity-0 group-hover:opacity-100"></div>
                  <Calendar className="mr-2 h-5 w-5" />
                  Agenda una cita
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ACERCA DE MÍ - Narrativa personal con storytelling */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(/images/gradient-background.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Un poco sobre mí</h2>
              <p className="text-xl text-gray-600">Más allá de lo profesional</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* (PERSONALIZAR: Tu descripción personal, familia, intereses) */}
              <Card
                className="p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 bg-gradient-to-br from-violet-50 to-white animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                <Heart className="h-12 w-12 text-violet-500 mx-auto mb-4 transition-transform duration-300 hover:scale-110" />
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Mi gran sueño es...</h3>
                <p className="text-gray-600">
                  Ayudar a las empresas en LatAm a crecer ordenadamente, haciendo que la gestión financiera deje de ser
                  un dolor de cabeza y se transforme en una ventaja competitiva real.
                </p>
              </Card>

              <Card
                className="p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:-rotate-1 bg-gradient-to-br from-blue-50 to-white animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <Star className="h-12 w-12 text-blue-500 mx-auto mb-4 transition-transform duration-300 hover:scale-110" />
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Algo que pocos saben...</h3>
                <p className="text-gray-600">
                  Soy ilustrador y tengo una profunda conexión con el arte visual, lo que potencia mi creatividad y
                  enfoque innovador en todos mis proyectos.
                </p>
              </Card>

              <Card
                className="p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 bg-gradient-to-br from-teal-50 to-white animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <Trophy className="h-12 w-12 text-teal-500 mx-auto mb-4 transition-transform duration-300 hover:scale-110" />
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Mi secreto para el éxito...</h3>
                <p className="text-gray-600">
                  Enfocarme en escuchar atentamente antes de proponer soluciones, asegurando que cada decisión se basa
                  en necesidades reales, no en suposiciones.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MIS FORTALEZAS - Bloque visual HORLI */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Mis Fortalezas</h2>
            <p className="text-xl text-gray-600">Lo que me define profesionalmente</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* (PERSONALIZAR: Tus habilidades específicas) */}
            <Card
              className="p-6 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-violet-50 to-violet-100 cursor-pointer group animate-slide-up border-2 border-transparent hover:border-violet-300"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="relative">
                <Settings className="h-10 w-10 text-violet-600 mx-auto mb-4 transition-all duration-300 group-hover:scale-110" />
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-green-500 rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 text-violet-800 group-hover:text-violet-900 transition-colors duration-300">
                Habilidades
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                Comunicación efectiva, diseño centrado en el usuario, estrategia de producto, liderazgo de equipos,
                generación de propuestas de valor.
              </p>
            </Card>

            {/* (PERSONALIZAR: Tus objetivos profesionales y personales) */}
            <Card
              className="p-6 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-blue-50 to-blue-100 cursor-pointer group animate-slide-up border-2 border-transparent hover:border-blue-300"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative">
                <Target className="h-10 w-10 text-blue-600 mx-auto mb-4 transition-all duration-300 group-hover:scale-110" />
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-green-500 rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 text-blue-800 group-hover:text-blue-900 transition-colors duration-300">
                Objetivos
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                Liderar el crecimiento escalable de productos digitales que generen un impacto tangible en la vida
                diaria de los usuarios y en la eficiencia financiera de las empresas.
              </p>
            </Card>

            {/* (PERSONALIZAR: Tus redes y organizaciones clave) */}
            <Card
              className="p-6 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-teal-50 to-teal-100 cursor-pointer group animate-slide-up border-2 border-transparent hover:border-teal-300"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative">
                <Users className="h-10 w-10 text-teal-600 mx-auto mb-4 transition-all duration-300 group-hover:scale-110" />
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-green-500 rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 text-teal-800 group-hover:text-teal-900 transition-colors duration-300">
                Redes
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                Fuerte vínculo con comunidades de startups SaaS en LatAm, consultoras de ERP y profesionales
                financieros.
              </p>
            </Card>

            {/* (PERSONALIZAR: Tus logros más destacados) */}
            <Card
              className="p-6 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-purple-50 to-purple-100 cursor-pointer group animate-slide-up border-2 border-transparent hover:border-purple-300"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="relative">
                <Trophy className="h-10 w-10 text-purple-600 mx-auto mb-4 transition-all duration-300 group-hover:scale-110" />
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-green-500 rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 text-purple-800 group-hover:text-purple-900 transition-colors duration-300">
                Logros
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                Lanzamiento exitoso de colecciones NFT con sold out, creación y escalamiento de Fonder hasta conseguir
                clientes activos y alianzas estratégicas con Odoo y Mercado Pago.
              </p>
            </Card>

            {/* (PERSONALIZAR: Tus intereses y hobbies) */}
            <Card
              className="p-6 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-pink-50 to-pink-100 cursor-pointer group animate-slide-up border-2 border-transparent hover:border-pink-300"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="relative">
                <Rocket className="h-10 w-10 text-pink-600 mx-auto mb-4 transition-all duration-300 group-hover:scale-110" />
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-green-500 rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 text-pink-800 group-hover:text-pink-900 transition-colors duration-300">
                Intereses
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                Arte visual, Web3, literatura introspectiva, entrenamiento personal y Boca Juniors.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. CLIENTES Y REDES ESTRATÉGICAS - Social proof visual */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Mi Ecosistema Profesional</h2>
            <p className="text-xl text-gray-600">Conexiones que generan valor mutuo</p>
          </div>

          {/* Carrusel de logos de clientes */}
          <div className="mb-12 overflow-hidden">
            <div className="flex animate-scroll space-x-8">
              {["VOLF", "AITIC", "Loyalz", "Odoo", "Mercado Pago", "VOLF", "AITIC"].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md"
                >
                  <span className="text-gray-700 font-medium whitespace-nowrap">{client}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* (PERSONALIZAR: Empresas que buscas activamente) */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <Search className="h-8 w-8 text-violet-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Clientes Más Buscados</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center mb-2">
                  <Badge variant="secondary" className="mr-2 bg-violet-100 text-violet-700">
                    <Building className="h-3 w-3 mr-1" />
                    SaaS
                  </Badge>
                  <span>Startups SaaS medianas en crecimiento</span>
                </li>
                <li className="flex items-center mb-2">
                  <Badge variant="secondary" className="mr-2 bg-violet-100 text-violet-700">
                    <Building className="h-3 w-3 mr-1" />
                    Odoo
                  </Badge>
                  <span>Empresas con ERP Odoo</span>
                </li>
                <li className="flex items-center mb-2">
                  <Badge variant="secondary" className="mr-2 bg-violet-100 text-violet-700">
                    <Building className="h-3 w-3 mr-1" />
                    Finanzas
                  </Badge>
                  <span>PyMEs con alta complejidad financiera</span>
                </li>
              </ul>
            </Card>

            {/* (PERSONALIZAR: Tipos de contactos que aportan valor) */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <Network className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Mi Círculo Estratégico</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center mb-2">
                  <Badge variant="secondary" className="mr-2 bg-blue-100 text-blue-700">
                    <Users className="h-3 w-3 mr-1" />
                    Fundadores
                  </Badge>
                  <span>Fundadores de SaaS y Fintech</span>
                </li>
                <li className="flex items-center mb-2">
                  <Badge variant="secondary" className="mr-2 bg-blue-100 text-blue-700">
                    <Users className="h-3 w-3 mr-1" />
                    CFOs
                  </Badge>
                  <span>CFOs y líderes financieros</span>
                </li>
                <li className="flex items-center mb-2">
                  <Badge variant="secondary" className="mr-2 bg-blue-100 text-blue-700">
                    <Users className="h-3 w-3 mr-1" />
                    Implementadores
                  </Badge>
                  <span>Implementadores certificados de ERP</span>
                </li>
              </ul>
            </Card>

            {/* (PERSONALIZAR: Clientes destacados recientes) */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Clientes Destacados</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  <span>VOLF (PyME argentina con más de 70 años de trayectoria)</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  <span>AITIC (Implementador Gold de Odoo)</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  <span>Loyalz (Startup SaaS en expansión)</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. AGENDA CONMIGO - CTAs visuales y claros */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Conectemos</h2>
            <p className="text-xl text-gray-600">Elige la opción que mejor se adapte a tus necesidades</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* (PERSONALIZAR: Enlaces a tu sistema de citas) */}
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 bg-gradient-to-br from-violet-50 to-violet-100 border-2 border-violet-200 group">
              <div className="relative mb-6">
                <MessageCircle className="h-20 w-20 text-violet-600 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:text-violet-700" />
                <div className="absolute inset-0 bg-violet-200 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-violet-800">Chat Rápido</h3>
              <p className="text-sm text-violet-600 mb-4 font-medium">Ideal para consultas puntuales</p>
              <p className="text-gray-600 mb-6">15 minutos para una consulta express</p>
              <Button className="w-full bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 transition-all duration-300 hover:scale-105">
                <Clock className="mr-2 h-4 w-4" />
                Reservar 15 min
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 group">
              <div className="relative mb-6">
                <Compass className="h-20 w-20 text-blue-600 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:text-blue-700" />
                <div className="absolute inset-0 bg-blue-200 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-800">Sesión Exploratoria</h3>
              <p className="text-sm text-blue-600 mb-4 font-medium">Descubre cómo puedo ayudarte</p>
              <p className="text-gray-600 mb-6">30 minutos para conocer oportunidades</p>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105">
                <Clock className="mr-2 h-4 w-4" />
                Reservar 30 min
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-200 group">
              <div className="relative mb-6">
                <Search className="h-20 w-20 text-teal-600 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:text-teal-700" />
                <div className="absolute inset-0 bg-teal-200 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-teal-800">Asesoría One to One</h3>
              <p className="text-sm text-teal-600 mb-4 font-medium">Para desafíos específicos</p>
              <p className="text-gray-600 mb-6">60 minutos de consultoría personalizada</p>
              <Button className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 transition-all duration-300 hover:scale-105">
                <Clock className="mr-2 h-4 w-4" />
                Reservar 60 min
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. CONTACTO E INFORMACIÓN ADICIONAL */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Mantengamos el Contacto</h2>
            <p className="text-xl text-gray-600">Todas las formas de conectar conmigo</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Información de contacto directo */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contacto Directo</h3>

              {/* (PERSONALIZAR: Tu correo electrónico) */}
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <Mail className="h-6 w-6 text-violet-600" />
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">federico@fonderlatam.com</p>
                </div>
              </div>

              {/* (PERSONALIZAR: Tu número de teléfono internacional) */}
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <Phone className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-800">Teléfono</p>
                  <p className="text-gray-600">+54 9 11 XXXX XXXX</p>
                </div>
              </div>

              {/* (PERSONALIZAR: Tu dominio web profesional) */}
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <Globe className="h-6 w-6 text-teal-600" />
                <div>
                  <p className="font-semibold text-gray-800">Website</p>
                  <p className="text-gray-600">www.fonderlatam.com</p>
                </div>
              </div>

              {/* Agregar después de los datos de contacto */}
              <div className="mt-8 space-y-4">
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition-all duration-300 hover:scale-105">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar CV
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-green-300 text-green-700 hover:bg-green-50 transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  WhatsApp Directo
                </Button>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Sígueme en Redes</h3>

              <div className="grid gap-4">
                {/* (PERSONALIZAR: Tu perfil de LinkedIn) */}
                <Link
                  href="#"
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <Linkedin className="h-6 w-6 text-blue-600 transition-all duration-300 hover:scale-125 hover:text-blue-700 hover:drop-shadow-lg" />
                  <div>
                    <p className="font-semibold text-gray-800">LinkedIn</p>
                    <p className="text-gray-600">Federico Lenci</p>
                  </div>
                </Link>

                {/* (PERSONALIZAR: Tu perfil de Instagram) */}
                <Link
                  href="#"
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <Instagram className="h-6 w-6 text-pink-600 transition-all duration-300 hover:scale-125 hover:text-pink-700 hover:drop-shadow-lg" />
                  <div>
                    <p className="font-semibold text-gray-800">Instagram</p>
                    <p className="text-gray-600">@federicolenci</p>
                  </div>
                </Link>

                {/* (PERSONALIZAR: Tu perfil de Facebook) */}
                <Link
                  href="#"
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <Facebook className="h-6 w-6 text-blue-700 transition-all duration-300 hover:scale-125 hover:text-blue-800 hover:drop-shadow-lg" />
                  <div>
                    <p className="font-semibold text-gray-800">Facebook</p>
                    <p className="text-gray-600">Federico Lenci</p>
                  </div>
                </Link>
              </div>

              {/* (PERSONALIZAR: Referencias profesionales opcionales) */}
              <div className="mt-8 p-4 bg-gradient-to-r from-violet-50 to-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Referencias Profesionales</h4>
                <p className="text-sm text-gray-600">
                  Disponibles bajo solicitud. Más de [X] profesionales pueden dar testimonio de mi trabajo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer simple */}
      <footer className="py-8 px-4 bg-gray-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Federico Lenci. Transformando ideas en resultados.
          </p>
        </div>
      </footer>
    </div>
  )
}
