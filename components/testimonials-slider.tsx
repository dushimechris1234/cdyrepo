"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function TestimonialsSlider() {
  const testimonials = [
    {
      quote:
        "Working with this agency transformed our social media presence. Our engagement increased by 300% in just three months.",
      name: "Sarah Johnson",
      position: "Marketing Director, TechCorp",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Their influencer marketing strategy helped us reach new audiences we never thought possible. The ROI has been incredible.",
      name: "Michael Chen",
      position: "CEO, Fashion Brand",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The team's creativity and attention to detail is unmatched. They truly understand our brand voice and audience.",
      name: "Jessica Williams",
      position: "Brand Manager, Lifestyle Co.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black dark:from-white dark:to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-900">Client Testimonials</h2>
          <p className="text-xl text-gray-400 dark:text-gray-600 max-w-3xl mx-auto">
            Hear what our clients have to say about working with us
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 left-0 opacity-20">
            <Quote size={80} className="text-pink-500" />
          </div>

          <div className="relative overflow-hidden rounded-xl bg-gray-800/30 dark:bg-gray-200/30 backdrop-blur-sm p-8 md:p-12 border border-gray-700 dark:border-gray-300">
            <div className={`transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
              <p className="text-xl md:text-2xl italic mb-8 text-gray-200 dark:text-gray-800">
                "{testimonials[currentIndex].quote}"
              </p>

              <div className="flex items-center">
                <div className="mr-4 rounded-full overflow-hidden w-16 h-16 border-2 border-pink-500">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg dark:text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-400 dark:text-gray-600">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="dark:text-gray-900" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-pink-500"
                      : "bg-gray-600 dark:bg-gray-400 hover:bg-gray-500 dark:hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="dark:text-gray-900" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
