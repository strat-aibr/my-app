import Link from "next/link"
import { Instagram, Linkedin, Youtube } from "lucide-react"
import { links } from "@/config/links"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold">Strat Ai</h2>
          <p className="text-sm text-muted-foreground">Inteligência artificial que move negócios.</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Soluções</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href={links.aiAnalytics} className="text-muted-foreground transition-colors hover:text-primary">
                  Análises de IA
                </Link>
              </li>
              <li>
                <Link href={links.cloudServices} className="text-muted-foreground transition-colors hover:text-primary">
                  Serviços em Nuvem
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Empresa</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="https://n8nwebhook.strat.tec.br/form/vagas" className="text-muted-foreground transition-colors hover:text-primary">
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Conecte-se</h3>
            <div className="flex space-x-4">
              <Link href={links.instagram} className="text-muted-foreground transition-colors hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href={links.linkedin} className="text-muted-foreground transition-colors hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href={links.youtube} className="text-muted-foreground transition-colors hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Strat Ai. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

