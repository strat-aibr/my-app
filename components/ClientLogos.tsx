"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

type Client = {
  id: string
  name: string
  logo: string
}

type ClientLogosProps = {
  clients: Client[]
}

export default function ClientLogos({ clients }: ClientLogosProps) {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  return (
    <div className="mt-12 w-full">
      <h3 className="text-2xl font-semibold text-center mb-6">Empresas que confiam em nosso trabalho</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-inner">
        <motion.div ref={carousel} className="cursor-grab overflow-hidden">
          <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="flex space-x-8">
            {clients.map((client) => (
              <motion.div key={client.id} className="flex-shrink-0">
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 w-40 h-40 flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

