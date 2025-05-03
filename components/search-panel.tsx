"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, Users, BarChart3, Cpu, Lightbulb, ArrowRight, Hash } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

interface SearchResult {
  id: string
  type: "service" | "influencer" | "category" | "faq"
  title: string
  description: string
  icon?: React.ReactNode
  image?: string
  category?: string
  platform?: string
}

interface SearchPanelProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchPanel({ isOpen, onClose }: SearchPanelProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState<"all" | "service" | "influencer" | "category">("all")
  const inputRef = useRef<HTMLInputElement>(null)
  const { resolvedTheme } = useTheme()

  // Sample data for search
  const searchData: SearchResult[] = [
    {
      id: "service-1",
      type: "service",
      title: "Influencer Marketing",
      description: "Connect with the right creators to amplify your brand message and reach new audiences.",
      icon: <Users className="h-5 w-5 text-pink-500" />,
    },
    {
      id: "service-2",
      type: "service",
      title: "Social Media Strategy",
      description: "Data-driven strategies to boost engagement and build meaningful connections with your audience.",
      icon: <BarChart3 className="h-5 w-5 text-pink-500" />,
    },
    {
      id: "service-3",
      type: "service",
      title: "AI Tools",
      description: "Leverage cutting-edge AI technology to optimize campaigns and predict market trends.",
      icon: <Cpu className="h-5 w-5 text-pink-500" />,
    },
    {
      id: "service-4",
      type: "service",
      title: "Talent Management",
      description: "End-to-end management for creators, from content strategy to brand partnerships.",
      icon: <Lightbulb className="h-5 w-5 text-pink-500" />,
    },
    {
      id: "influencer-1",
      type: "influencer",
      title: "Alex Morgan",
      description: "@alexcreates · 3.2M followers",
      image: "/placeholder.svg?height=400&width=400&text=AM",
      category: "Lifestyle",
      platform: "instagram",
    },
    {
      id: "influencer-2",
      type: "influencer",
      title: "Jordan Lee",
      description: "@jordantech · 2.8M followers",
      image: "/placeholder.svg?height=400&width=400&text=JL",
      category: "Technology",
      platform: "youtube",
    },
    {
      id: "influencer-3",
      type: "influencer",
      title: "Sophia Chen",
      description: "@sophiafitness · 4.5M followers",
      image: "/placeholder.svg?height=400&width=400&text=SC",
      category: "Fitness",
      platform: "instagram",
    },
    {
      id: "influencer-4",
      type: "influencer",
      title: "Marcus Williams",
      description: "@marcusgaming · 5.1M followers",
      image: "/placeholder.svg?height=400&width=400&text=MW",
      category: "Gaming",
      platform: "tiktok",
    },
    {
      id: "influencer-5",
      type: "influencer",
      title: "Emma Rodriguez",
      description: "@emmacooks · 2.4M followers",
      image: "/placeholder.svg?height=400&width=400&text=ER",
      category: "Food",
      platform: "youtube",
    },
    {
      id: "category-1",
      type: "category",
      title: "Lifestyle",
      description: "Fashion, beauty, and daily life content",
      icon: <Hash className="h-5 w-5 text-pink-500" />,
    },
    {
      id: "category-2",
      type: "category",
      title: "Technology",
      description: "Tech reviews, gadgets, and digital trends",
      icon: <Hash className="h-5 w-5 text-pink-500" />,
    },
    {
      id: "category-3",
      type: "category",
      title: "Gaming",
      description: "Game reviews, streaming, and esports",
      icon: <Hash className="h-5 w-5 text-pink-500" />,
    },
    {
      id: "faq-1",
      type: "faq",
      title: "How do you measure campaign success?",
      description: "Learn about our analytics and reporting methods",
      icon: <Hash className="h-5 w-5 text-pink-500" />,
    },
    {
      id: "faq-2",
      type: "faq",
      title: "What platforms do you specialize in?",
      description: "Instagram, TikTok, YouTube, and more",
      icon: <Hash className="h-5 w-5 text-pink-500" />,
    },
  ]

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  // Handle search
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setResults([])
      return
    }

    const filtered = searchData.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.category && item.category.toLowerCase().includes(searchTerm.toLowerCase()))

      if (activeTab === "all") return matchesSearch
      return matchesSearch && item.type === activeTab
    })

    setResults(filtered)
  }, [searchTerm, activeTab])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  // Handle click outside
  const panelRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  // Scroll to section when clicking on a result
  const handleResultClick = (result: SearchResult) => {
    // Save to recent searches
    if (!recentSearches.includes(result.title)) {
      setRecentSearches((prev) => [result.title, ...prev].slice(0, 5))
    }

    onClose()
    setSearchTerm("")

    if (result.type === "service") {
      const servicesSection = document.getElementById("services")
      if (servicesSection) {
        const navbarHeight = 80
        const elementPosition = servicesSection.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - navbarHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    } else if (result.type === "influencer") {
      const influencersSection = document.getElementById("influencers")
      if (influencersSection) {
        const navbarHeight = 80
        const elementPosition = influencersSection.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - navbarHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    } else if (result.type === "faq") {
      const faqSection = document.getElementById("faq")
      if (faqSection) {
        const navbarHeight = 80
        const elementPosition = faqSection.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - navbarHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 dark:bg-gray-900/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-3xl z-50 ${
              resolvedTheme === "dark" ? "bg-white" : "bg-gray-900"
            } rounded-xl shadow-2xl overflow-hidden`}
          >
            <div className="p-4 border-b border-gray-700 dark:border-gray-300 flex items-center">
              <Search className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-2" />
              <Input
                ref={inputRef}
                type="text"
                placeholder="Search services, influencers, categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`border-none focus-visible:ring-0 flex-grow ${
                  resolvedTheme === "dark" ? "bg-white text-gray-900" : "bg-gray-900 text-white"
                }`}
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="ml-2 hover:bg-gray-800 dark:hover:bg-gray-200"
              >
                <X className="h-5 w-5 text-gray-400 dark:text-gray-600" />
              </Button>
            </div>

            {/* Tabs for filtering */}
            <div className="flex border-b border-gray-700 dark:border-gray-300">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 text-sm font-medium flex-1 ${
                  activeTab === "all"
                    ? "border-b-2 border-pink-500 text-pink-500"
                    : "text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-gray-900"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab("service")}
                className={`px-4 py-2 text-sm font-medium flex-1 ${
                  activeTab === "service"
                    ? "border-b-2 border-pink-500 text-pink-500"
                    : "text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-gray-900"
                }`}
              >
                Services
              </button>
              <button
                onClick={() => setActiveTab("influencer")}
                className={`px-4 py-2 text-sm font-medium flex-1 ${
                  activeTab === "influencer"
                    ? "border-b-2 border-pink-500 text-pink-500"
                    : "text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-gray-900"
                }`}
              >
                Influencers
              </button>
              <button
                onClick={() => setActiveTab("category")}
                className={`px-4 py-2 text-sm font-medium flex-1 ${
                  activeTab === "category"
                    ? "border-b-2 border-pink-500 text-pink-500"
                    : "text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-gray-900"
                }`}
              >
                Categories
              </button>
            </div>

            <div className={`max-h-[60vh] overflow-y-auto ${results.length === 0 && searchTerm !== "" ? "p-4" : ""}`}>
              {searchTerm === "" && recentSearches.length > 0 && (
                <div className="p-4">
                  <h3
                    className={`text-sm font-medium mb-2 ${
                      resolvedTheme === "dark" ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    Recent Searches
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((term, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchTerm(term)}
                        className={`px-3 py-1 text-sm rounded-full ${
                          resolvedTheme === "dark"
                            ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                            : "bg-gray-800 text-gray-200 hover:bg-gray-700"
                        }`}
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {searchTerm !== "" && results.length === 0 ? (
                <div className="text-center py-12">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gray-800/50 dark:bg-gray-200/50 flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-gray-400 dark:text-gray-600" />
                  </div>
                  <p className="text-gray-400 dark:text-gray-600 mb-2">No results found for "{searchTerm}"</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 max-w-md mx-auto">
                    Try searching for services, influencers, or categories with different keywords
                  </p>
                </div>
              ) : (
                <>
                  {results.length > 0 && (
                    <div className="p-2">
                      {/* Group results by type */}
                      {["service", "influencer", "category", "faq"].map((type) => {
                        const typeResults = results.filter((result) => result.type === type)
                        if (typeResults.length === 0) return null

                        return (
                          <div key={type} className="mb-4">
                            <h3
                              className={`text-sm font-medium px-2 py-1 ${
                                resolvedTheme === "dark" ? "text-gray-600" : "text-gray-400"
                              }`}
                            >
                              {type === "service"
                                ? "Services"
                                : type === "influencer"
                                  ? "Influencers"
                                  : type === "category"
                                    ? "Categories"
                                    : "FAQs"}
                            </h3>
                            <div className="space-y-1">
                              {typeResults.map((result) => (
                                <button
                                  key={result.id}
                                  className={`w-full text-left p-2 rounded-lg flex items-center hover:bg-gray-800/50 dark:hover:bg-gray-200/50 transition-colors ${
                                    resolvedTheme === "dark" ? "text-gray-900" : "text-white"
                                  }`}
                                  onClick={() => handleResultClick(result)}
                                >
                                  {result.type === "influencer" ? (
                                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                                      <img
                                        src={result.image || "/placeholder.svg"}
                                        alt={result.title}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                  ) : (
                                    <div className="mr-3">{result.icon}</div>
                                  )}
                                  <div>
                                    <div className="font-medium">{result.title}</div>
                                    <div
                                      className={`text-sm ${
                                        resolvedTheme === "dark" ? "text-gray-600" : "text-gray-400"
                                      }`}
                                    >
                                      {result.description}
                                    </div>
                                  </div>
                                  {result.type === "influencer" && result.category && (
                                    <span
                                      className={`ml-auto text-xs px-2 py-1 rounded-full ${
                                        resolvedTheme === "dark"
                                          ? "bg-gray-200 text-gray-800"
                                          : "bg-gray-800 text-gray-300"
                                      }`}
                                    >
                                      {result.category}
                                    </span>
                                  )}
                                </button>
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </>
              )}
            </div>

            {searchTerm !== "" && results.length > 0 && (
              <div className="p-3 border-t border-gray-700 dark:border-gray-300 flex justify-between items-center">
                <p className="text-sm text-gray-400 dark:text-gray-600">
                  Found {results.length} results for "{searchTerm}"
                </p>
                <div className="flex items-center">
                  <p className="text-sm text-gray-400 dark:text-gray-600 mr-2">
                    Press <kbd className="px-2 py-1 rounded bg-gray-800 dark:bg-gray-200">ESC</kbd> to close
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-pink-500 border-pink-500 hover:bg-pink-500/10"
                    onClick={() => {
                      // This would typically go to a search results page
                      onClose()
                    }}
                  >
                    View All <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
