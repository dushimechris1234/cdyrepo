"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react"
import SearchPanel from "./search-panel"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const navbarBg = mounted
    ? scrolled
      ? "bg-black/90 backdrop-blur-md"
      : "bg-black/80 backdrop-blur-md"
    : "bg-transparent"

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
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

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-gray-200 transition-all duration-300 text-white`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button onClick={() => scrollToSection("hero")} className="flex items-center">
              <div className="relative h-10 w-40">
                <div className="text-2xl font-bold flex items-center">
                  <span className="text-pink-500">C</span>
                  <span className="text-black">DY</span>
                </div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("services")} className="text-black hover:text-pink-500 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection("influencers")} className="text-black hover:text-pink-500 transition-colors">
                Influencers
              </button>
              <button onClick={() => scrollToSection("partners")} className="text-black hover:text-pink-500 transition-colors">
                Partners
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-black hover:text-pink-500 transition-colors">
                FAQ
              </button>
            </div>

            {/* Search and CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleSearch}
                aria-label="Search"
                className="text-black hover:text-pink-500 transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <Search size={20} />
              </button>
              <Button onClick={() => scrollToSection("contact")} className="bg-pink-600 hover:bg-pink-700 text-white">
                Get In Touch
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleSearch}
                aria-label="Search"
                className="text-black hover:text-pink-500 transition-colors"
              >
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pt-4 pb-6 space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left py-2 text-white hover:text-pink-500"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("influencers")}
                className="block w-full text-left py-2 text-white hover:text-pink-500"
              >
                Influencers
              </button>
              <button
                onClick={() => scrollToSection("partners")}
                className="block w-full text-left py-2 text-white hover:text-pink-500"
              >
                Partners
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left py-2 text-white hover:text-pink-500"
              >
                FAQ
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full mt-4 bg-pink-600 hover:bg-pink-700 text-white"
              >
                Get In Touch
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Search Panel */}
      <SearchPanel isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
