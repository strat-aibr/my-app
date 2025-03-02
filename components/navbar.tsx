import Link from "next/link"
import { Button } from "@/components/ui/button"
import { links } from "@/config/links"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">Strat Ai</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href={links.pricing} className="transition-colors hover:text-primary">
            Soluções
          </Link>
          <Link href={links.features} className="transition-colors hover:text-primary">
            Implementação
          </Link>
          <Link href={links.community} className="transition-colors hover:text-primary">
            Sobre nós
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <Link href={links.contactSales}>Contato</Link>
          </Button>
          <Button size="sm">
            <Link href={links.getStarted}>Testar</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

