"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: "What services does CDY offer?",
      answer:
        "CDY offers a comprehensive suite of services including influencer marketing, social media strategy, content creation, AI-powered analytics, and talent management. We connect brands with the right creators, develop data-driven social strategies, leverage AI technology for campaign optimization, and provide end-to-end management for creators. Our services are tailored to meet the specific needs of each client, whether you're a small brand or a large enterprise.",
    },
    {
      question: "How do you measure the success of influencer campaigns?",
      answer:
        "We use a combination of quantitative and qualitative metrics to measure campaign success. This includes engagement rates, conversion tracking, ROI analysis, brand sentiment, and audience growth. Our analytics dashboard provides real-time insights into campaign performance, allowing for agile adjustments to maximize results.",
    },
    {
      question: "How do you select influencers for brand partnerships?",
      answer:
        "Our influencer selection process is data-driven and strategic. We analyze audience demographics, engagement quality, content authenticity, and brand alignment. We also conduct thorough vetting to ensure influencers align with your brand values and can deliver authentic content that resonates with their audience.",
    },
    {
      question: "What platforms do you specialize in?",
      answer:
        "We specialize in all major social media platforms including Instagram, TikTok, YouTube, Twitter, LinkedIn, and emerging platforms. Our team stays ahead of platform trends and algorithm changes to ensure your content strategy remains effective across all relevant channels.",
    },
    {
      question: "How long does it typically take to see results?",
      answer:
        "While some metrics like engagement and reach can show immediate results, building a strong brand presence is a long-term investment. Most clients begin seeing meaningful results within 3-6 months. Our Growth and Enterprise plans include quarterly strategy reviews to continuously optimize performance and accelerate results.",
    },
    {
      question: "Can you work with limited budgets or small businesses?",
      answer:
        "Yes! Our Starter plan is specifically designed for small businesses and creators with limited budgets. We believe in the power of strategic marketing regardless of budget size and can help you maximize your investment with targeted approaches that deliver the best ROI for your specific situation.",
    },
    {
      question: "Do you offer custom packages beyond what's listed?",
      answer:
        "Absolutely. While our standard packages cover most needs, we understand that some brands have unique requirements. Our team can create custom solutions tailored to your specific goals, industry, and budget. Contact our sales team to discuss your particular needs.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-black to-gray-900 dark:from-gray-100 dark:to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-900">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-400 dark:text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our services and approach
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`mb-4 rounded-lg overflow-hidden border ${
                openIndex === index
                  ? "border-pink-500/50 bg-gray-800/50 dark:bg-white/50"
                  : "border-gray-700 dark:border-gray-300 bg-gray-800/30 dark:bg-gray-200/30"
              } backdrop-blur-sm transition-colors`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-lg dark:text-gray-900 flex-grow text-left">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-pink-500 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-400 dark:text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 dark:text-gray-600 mb-4">Still have questions?</p>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact")
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="text-pink-500 font-medium hover:text-pink-600 transition-colors"
          >
            Contact our team for more information
          </button>
        </div>
      </div>
    </section>
  )
}
