"use client"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80 // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 dark:from-gray-100 dark:to-white z-0"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-pink-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-purple-500/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight mb-6 text-white dark:text-gray-900">
              Connecting Brands{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                with Influencers
              </span>
            </h1>
            <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold leading-tight mb-6 text-white dark:text-green-700">Explore our Affliate platform</h1>
            <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-700 mb-8 max-w-2xl">
              Our Affliate marketing Platform allows influencers to promote products of companies of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://cdy-affliate-front-end.vercel.app" target="_blank" rel="noopener noreferrer">
                <Button
                  onClick={() => scrollToSection("services")}
                  className="bg-pink-600 hover:cursor-pointer hover:bg-pink-700 text-white px-12 py-9 text-lg"
                >
                  Explore our platform
                </Button>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[500px] w-full">
              {/* Phone mockups */}
              <div className="absolute top-0 right-0 transform -rotate-6 shadow-xl rounded-2xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=300"
                  alt="Social media content"
                  className="w-[300px] h-auto object-cover"
                />
              </div>
              <div className="absolute top-20 right-32 transform rotate-3 shadow-xl rounded-2xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=300"
                  alt="Creator content"
                  className="w-[300px] h-auto object-cover"
                />
              </div>
              <div className="absolute top-40 right-64 transform -rotate-3 shadow-xl rounded-2xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=300"
                  alt="Marketing campaign"
                  className="w-[300px] h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
