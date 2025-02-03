import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">StreamLine</h3>
          <p className="text-gray-400">Otimizando seu fluxo de trabalho, uma tarefa de cada vez.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Produto</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#features" className="text-gray-400 hover:text-white">
                Recursos
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="text-gray-400 hover:text-white">
                Preços
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Integrações
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Empresa</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Carreiras
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Contato
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Conecte-se</h4>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2025 StreamLine. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

