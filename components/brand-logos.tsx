"use client"

import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export default function BrandLogos() {
  const brands = [
    { name: "Lomemo", logo: "Lomemo Tours and Transport" },
    { name: "Longtai", logo: "Longtai" },
    { name: "Tech", logo: "CYUBAHIRO Tech" },
    { name: "Academy", logo: "Future Focus Academy" },
  ]

  // Calculate the total width needed for seamless scrolling
  const logoWidth = 160 // w-40 = 160px
  const gap = 32 // gap-8 = 32px
  const totalWidth = (logoWidth + gap) * brands.length
  const containerWidth = totalWidth * 2 // Double the width for seamless loop
  
  return (
    <section className="py-16 bg-black/50 dark:bg-gray-100/50 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-medium text-gray-400 dark:text-gray-600 mb-12">
          Trusted by numerous companies in Rwanda
        </h2>
        <div className="relative">
          <motion.div
            className="flex gap-8"
            style={{ width: containerWidth }}
            animate={{
              x: [0, -totalWidth],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15, // Slightly faster to ensure elements are hidden
                ease: "linear",
              },
            }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-16 bg-gray-800/50 dark:bg-gray-200/50 rounded-lg flex items-center justify-center text-3xl font-bold text-white/80 dark:text-gray-900/80 mx-25 px-5"
              >
                {brand.logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
