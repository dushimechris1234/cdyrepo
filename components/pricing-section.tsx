"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PricingFeature {
  name: string
  included: boolean | string
}

interface PricingTier {
  name: string
  description: string
  price: {
    monthly: string
    annually: string
  }
  features: PricingFeature[]
  cta: string
  popular?: boolean
}

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly")

  const pricingTiers: PricingTier[] = [
    {
      name: "Starter",
      description: "Perfect for small brands and individual creators",
      price: {
        monthly: "$999",
        annually: "$899",
      },
      features: [
        { name: "Social Media Management", included: true },
        { name: "Content Creation", included: "5 posts/month" },
        { name: "Influencer Connections", included: "3 micro-influencers" },
        { name: "Analytics Dashboard", included: true },
        { name: "Campaign Strategy", included: false },
        { name: "Dedicated Account Manager", included: false },
        { name: "AI-Powered Insights", included: false },
        { name: "24/7 Priority Support", included: false },
      ],
      cta: "Get Started",
    },
    {
      name: "Growth",
      description: "Ideal for growing brands looking to scale",
      price: {
        monthly: "$2,499",
        annually: "$2,249",
      },
      features: [
        { name: "Social Media Management", included: true },
        { name: "Content Creation", included: "15 posts/month" },
        { name: "Influencer Connections", included: "10 influencers" },
        { name: "Analytics Dashboard", included: true },
        { name: "Campaign Strategy", included: true },
        { name: "Dedicated Account Manager", included: true },
        { name: "AI-Powered Insights", included: false },
        { name: "24/7 Priority Support", included: false },
      ],
      cta: "Choose Growth",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For established brands with complex needs",
      price: {
        monthly: "$4,999",
        annually: "$4,499",
      },
      features: [
        { name: "Social Media Management", included: true },
        { name: "Content Creation", included: "Unlimited" },
        { name: "Influencer Connections", included: "Unlimited" },
        { name: "Analytics Dashboard", included: true },
        { name: "Campaign Strategy", included: true },
        { name: "Dedicated Account Manager", included: true },
        { name: "AI-Powered Insights", included: true },
        { name: "24/7 Priority Support", included: true },
      ],
      cta: "Contact Sales",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black dark:from-white dark:to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-900">Transparent Pricing</h2>
          <p className="text-xl text-gray-400 dark:text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan to elevate your brand in the creator economy
          </p>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center bg-gray-800/50 dark:bg-gray-200/50 p-1 rounded-lg">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === "monthly"
                  ? "bg-pink-600 text-white"
                  : "text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annually")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === "annually"
                  ? "bg-pink-600 text-white"
                  : "text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-gray-900"
              }`}
            >
              Annually <span className="text-xs ml-1 opacity-75">Save 10%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative rounded-xl overflow-hidden ${
                tier.popular
                  ? "border-2 border-pink-500 bg-gray-800/50 dark:bg-white/50"
                  : "border border-gray-700 dark:border-gray-300 bg-gray-800/30 dark:bg-gray-200/30"
              } backdrop-blur-sm p-6 md:p-8`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2 dark:text-gray-900">{tier.name}</h3>
              <p className="text-gray-400 dark:text-gray-600 mb-6 h-12">{tier.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold dark:text-gray-900">
                  {billingCycle === "monthly" ? tier.price.monthly : tier.price.annually}
                </span>
                <span className="text-gray-400 dark:text-gray-600">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                    )}
                    <span className="dark:text-gray-900">
                      {feature.name}
                      {typeof feature.included === "string" && (
                        <span className="text-gray-400 dark:text-gray-600 ml-1">({feature.included})</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  tier.popular
                    ? "bg-pink-600 hover:bg-pink-700 text-white"
                    : "bg-gray-700 dark:bg-gray-300 hover:bg-gray-600 dark:hover:bg-gray-400 text-white dark:text-gray-900"
                }`}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 dark:text-gray-600 mb-4">
            Need a custom solution for your specific requirements?
          </p>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10 dark:border-gray-900 dark:text-gray-900 dark:hover:bg-gray-900/10"
          >
            Contact Our Sales Team
          </Button>
        </div>
      </div>
    </section>
  )
}
