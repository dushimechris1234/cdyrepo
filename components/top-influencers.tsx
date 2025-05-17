"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Instagram, Twitter, TwitterIcon as TikTok, Youtube, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Influencer {
  id: number
  name: string
  handle: string
  category: string
  followers: string
  image: string
  platform: "instagram" | "tiktok" | "youtube" | "twitter"
}

export default function TopInfluencers() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const influencers: Influencer[] = [
    {
      id: 1,
      name: "Fuin Boi",
      handle: "@fuinbwoy",
      category: "Lifestyle",
      followers: "50.9k",
      image: "/influencers/fuin_boi.jpg",
      platform: "instagram",
    },
    {
      id: 2,
      name: "Mideli Rwanda",
      handle: "@mideli_rwanda",
      category: "Technology",
      followers: "101k",
      image: "/influencers/mideli_rwanda.jpg",
      platform: "instagram",
    },
    {
      id: 3,
      name: "Ntakwasa",
      handle: "@ntakwasa_",
      category: "Fitness",
      followers: "47.8k",
      image: "/influencers/ntakwasa.jpg",
      platform: "instagram",
    },
    {
      id: 4,
      name: "Sasog",
      handle: "@sasog_official",
      category: "Gaming",
      followers: "14.7k",
      image: "/influencers/sasog.jpg",
      platform: "tiktok",
    },
    {
      id: 5,
      name: "Chris DY",
      handle: "@chris.dy1",
      category: "Food",
      followers: "31.5k",
      image: "/influencers/chrisdy.jpg",
      platform: "instagram",
    },
    // {
    //   id: 6,
    //   name: "Tyler Johnson",
    //   handle: "@tylertravels",
    //   category: "Travel",
    //   followers: "1.9M",
    //   image: "/placeholder.svg?height=400&width=400&text=TJ",
    //   platform: "instagram",
    // },
    // {
    //   id: 7,
    //   name: "Olivia Kim",
    //   handle: "@oliviafashion",
    //   category: "Fashion",
    //   followers: "3.7M",
    //   image: "/placeholder.svg?height=400&width=400&text=OK",
    //   platform: "tiktok",
    // },
    // {
    //   id: 8,
    //   name: "David Patel",
    //   handle: "@davidfinance",
    //   category: "Finance",
    //   followers: "1.2M",
    //   image: "/placeholder.svg?height=400&width=400&text=DP",
    //   platform: "twitter",
    // },
    // {
    //   id: 9,
    //   name: "Zoe Thompson",
    //   handle: "@zoebeauty",
    //   category: "Beauty",
    //   followers: "4.8M",
    //   image: "/placeholder.svg?height=400&width=400&text=ZT",
    //   platform: "instagram",
    // },
    // {
    //   id: 10,
    //   name: "Ryan Garcia",
    //   handle: "@ryanmusic",
    //   category: "Music",
    //   followers: "6.3M",
    //   image: "/placeholder.svg?height=400&width=400&text=RG",
    //   platform: "youtube",
    // },
  ]

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return <Instagram className="h-5 w-5" />
      case "tiktok":
        return <TikTok className="h-5 w-5" />
      case "youtube":
        return <Youtube className="h-5 w-5" />
      case "twitter":
        return <Twitter className="h-5 w-5" />
      default:
        return <Instagram className="h-5 w-5" />
    }
  }

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "instagram":
        return "bg-gradient-to-r from-purple-500 to-pink-500"
      case "tiktok":
        return "bg-black dark:bg-gray-800"
      case "youtube":
        return "bg-red-600"
      case "twitter":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <section
      id="influencers"
      className="py-20 bg-gradient-to-b from-black to-gray-900 dark:from-white dark:to-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-900">Our Top Influencers</h2>
          <p className="text-xl text-gray-400 dark:text-gray-600 max-w-3xl mx-auto">
            Partnering with the most engaging creators across all platforms
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {influencers.map((influencer) => (
            <motion.div
              key={influencer.id}
              className="group relative rounded-xl overflow-hidden bg-gray-800/30 dark:bg-gray-200/30 backdrop-blur-sm border border-gray-700 dark:border-gray-300"
              onMouseEnter={() => setHoveredId(influencer.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: influencer.id * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square relative">
                <img
                  src={influencer.image || "/placeholder.svg"}
                  alt={influencer.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute top-3 right-3 ${getPlatformColor(
                    influencer.platform,
                  )} rounded-full p-2 text-white shadow-lg`}
                >
                  {getPlatformIcon(influencer.platform)}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1 dark:text-gray-900">{influencer.name}</h3>
                <p className="text-gray-400 dark:text-gray-600 text-sm mb-2">{influencer.handle}</p>
                <div className="flex justify-between items-center">
                  <span className="bg-gray-700/50 dark:bg-gray-300/50 text-xs rounded-full px-2 py-1 text-gray-300 dark:text-gray-700">
                    {influencer.category}
                  </span>
                  <span className="text-pink-500 font-semibold text-sm">{influencer.followers} followers</span>
                </div>
              </div>
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent dark:from-gray-900/80 flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              >
                <Button className="bg-pink-600 hover:bg-pink-700 text-white">View Profile</Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10 dark:border-gray-900 dark:text-gray-900 dark:hover:bg-gray-900/10 px-6 py-2"
          >
            View All Influencers <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
