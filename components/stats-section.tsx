"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Users, BarChart, Award, Globe } from "lucide-react"

interface StatItemProps {
  icon: React.ReactNode
  value: number
  label: string
  duration?: number
  delay?: number
}

const StatItem = ({ icon, value, label, duration = 2, delay = 0 }: StatItemProps) => {
  const [count, setCount] = useState(0)
  const nodeRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (nodeRef.current) {
      observer.observe(nodeRef.current)
    }

    return () => {
      if (nodeRef.current) {
        observer.unobserve(nodeRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value
    const totalDuration = duration * 1000
    const incrementTime = totalDuration / end
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        start += 1
        setCount(start)
        if (start >= end) clearInterval(interval)
      }, incrementTime)

      return () => clearInterval(interval)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [value, duration, delay, isInView])

  return (
    <div ref={nodeRef} className="text-center p-6">
      <div className="flex justify-center mb-4">{icon}</div>
      <div className="text-4xl md:text-5xl font-bold mb-2">{count.toLocaleString()}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  )
}

export default function StatsSection() {
  const stats = [
    {
      icon: <Users className="h-10 w-10 text-pink-500" />,
      value: 5000,
      label: "Influencers",
      delay: 0,
    },
    {
      icon: <BarChart className="h-10 w-10 text-pink-500" />,
      value: 250,
      label: "Brands Served",
      delay: 0.2,
    },
    {
      icon: <Award className="h-10 w-10 text-pink-500" />,
      value: 1200,
      label: "Campaigns Completed",
      delay: 0.4,
    },
    {
      icon: <Globe className="h-10 w-10 text-pink-500" />,
      value: 30,
      label: "Countries Reached",
      delay: 0.6,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black dark:from-gray-100 dark:to-white dark:text-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-900">Our Impact</h2>
          <p className="text-xl text-gray-400 dark:text-gray-600 max-w-3xl mx-auto">
            Driving results that matter for brands and creators worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: stat.delay }}
              viewport={{ once: true }}
              className="bg-gray-800/30 dark:bg-gray-100/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 dark:border-gray-300"
            >
              <StatItem icon={stat.icon} value={stat.value} label={stat.label} duration={2} delay={stat.delay} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
