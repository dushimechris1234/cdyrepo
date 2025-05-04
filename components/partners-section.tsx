"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export default function PartnersSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  // Partner logos - in a real scenario, these would be actual images
  const partners = [
    { name: "Amazon", logo: "A" },
    { name: "Microsoft", logo: "M" },
    { name: "Google", logo: "G" },
    { name: "Apple", logo: "A" },
    { name: "Facebook", logo: "F" },
    { name: "Netflix", logo: "N" },
    { name: "Spotify", logo: "S" },
    { name: "Adobe", logo: "A" },
    { name: "Twitter", logo: "T" },
    { name: "Salesforce", logo: "S" },
    { name: "Oracle", logo: "O" },
    { name: "IBM", logo: "I" },
  ]

  return (
    <section
      id="partners"
      className="py-20 bg-gradient-to-b from-gray-900 to-black dark:from-white dark:to-gray-100 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-900">Our Affliate Brands</h2>
          <p className="text-xl text-gray-400 dark:text-gray-600 max-w-3xl mx-auto">
            Collaborating with industry leaders to deliver exceptional results
          </p>
        </div>

        <div ref={ref} className="relative">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5 }}
            className="w-full overflow-hidden"
          >
            {/* First marquee row */}
            <div className="flex items-center mb-8">
              <div className="animate-marquee flex">
                {partners.slice(0, 6).map((partner, index) => (
                  <div
                    key={`row1-${index}`}
                    className="flex-shrink-0 mx-6 w-40 h-24 bg-gray-800/50 dark:bg-gray-200/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-3xl font-bold text-white/80 dark:text-gray-900/80 border border-gray-700/50 dark:border-gray-300/50 hover:border-pink-500/50 transition-colors duration-300"
                  >
                    {partner.logo}
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {partners.slice(0, 6).map((partner, index) => (
                  <div
                    key={`row1-dup-${index}`}
                    className="flex-shrink-0 mx-6 w-40 h-24 bg-gray-800/50 dark:bg-gray-200/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-3xl font-bold text-white/80 dark:text-gray-900/80 border border-gray-700/50 dark:border-gray-300/50 hover:border-pink-500/50 transition-colors duration-300"
                  >
                    {partner.logo}
                  </div>
                ))}
              </div>
            </div>

            {/* Second marquee row (reverse direction) */}
            <div className="flex items-center">
              <div className="animate-marquee-reverse flex">
                {partners.slice(6).map((partner, index) => (
                  <div
                    key={`row2-${index}`}
                    className="flex-shrink-0 mx-6 w-40 h-24 bg-gray-800/50 dark:bg-gray-200/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-3xl font-bold text-white/80 dark:text-gray-900/80 border border-gray-700/50 dark:border-gray-300/50 hover:border-pink-500/50 transition-colors duration-300"
                  >
                    {partner.logo}
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {partners.slice(6).map((partner, index) => (
                  <div
                    key={`row2-dup-${index}`}
                    className="flex-shrink-0 mx-6 w-40 h-24 bg-gray-800/50 dark:bg-gray-200/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-3xl font-bold text-white/80 dark:text-gray-900/80 border border-gray-700/50 dark:border-gray-300/50 hover:border-pink-500/50 transition-colors duration-300"
                  >
                    {partner.logo}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 dark:text-gray-600">
            Interested in becoming a partner?{" "}
            <a href="#contact" className="text-pink-500 hover:text-pink-600">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
