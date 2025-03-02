import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"
import WhatsAppButton from "@/components/WhatsAppButton"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Strat Ai -  Inteligência artificial que move negócios",
  description: "A Strat Ai oferece soluções de inteligência artificial e automações para as empresas do futuro.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <MouseMoveEffect />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}

