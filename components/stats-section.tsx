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
    <div ref={nodeRef} className="flex flex-col items-center justify-between h-full min-h-[180px] p-6">
      <div className="flex items-center justify-center h-16">
        {icon}
      </div>
      <div className="flex items-center justify-center h-20">
        <div className="text-4xl md:text-5xl font-bold text-black">
          {count.toLocaleString()}
          <span className="text-pink-500">{" "}+</span>
        </div>
      </div>
      <div className="flex items-center justify-center h-12">
        <span className="text-gray-600 text-center">{label}</span>
      </div>
    </div>
  )
}

export default function StatsSection() {
  const stats = [
    {
      icon: <Users className="h-10 w-10 text-pink-500" />,
      value: 50,
      label: "Influencers",
      delay: 0,
    },
    {
      icon: <BarChart className="h-10 w-10 text-pink-500" />,
      value: 10,
      label: "Brands Served",
      delay: 0.2,
    },
    {
      icon: <Award className="h-10 w-10 text-pink-500" />,
      value: 100,
      label: "Campaigns Completed",
      delay: 0.4,
    },
    {
      icon: <Globe className="h-10 w-10 text-pink-500" />,
      value: 12,
      label: "Districts Reached",
      delay: 0.6,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Our Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              className="bg-white shadow-lg rounded-xl border border-gray-200 h-full"
            >
              <StatItem icon={stat.icon} value={stat.value} label={stat.label} duration={2} delay={stat.delay} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
