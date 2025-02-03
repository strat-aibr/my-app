import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="py-4 px-6 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          StreamLine
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#features" className="text-gray-600 hover:text-primary">
            Recursos
          </Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-primary">
            Depoimentos
          </Link>
          <Link href="#pricing" className="text-gray-600 hover:text-primary">
            Preços
          </Link>
        </nav>
        <Button>Começar</Button>
      </div>
    </header>
  )
}

