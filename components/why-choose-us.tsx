import { CheckCircle, Zap, Globe, Award } from "lucide-react"

export default function WhyChooseUs() {
  const benefits = [
    {
      title: "Data-Driven Approach",
      description: "We leverage analytics and insights to create strategies that deliver measurable results.",
      icon: <CheckCircle className="h-8 w-8 text-pink-500" />,
    },
    {
      title: "Global Network",
      description: "Access to a worldwide network of creators and brands across various industries.",
      icon: <Globe className="h-8 w-8 text-pink-500" />,
    },
    {
      title: "Rapid Execution",
      description: "Quick turnaround times without compromising on quality or creativity.",
      icon: <Zap className="h-8 w-8 text-pink-500" />,
    },
    {
      title: "Award-Winning Team",
      description: "Our team of experts has been recognized for excellence in digital marketing.",
      icon: <Award className="h-8 w-8 text-pink-500" />,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 dark:from-gray-100 dark:to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-900">Why Choose Us</h2>
          <p className="text-xl text-gray-400 dark:text-gray-600 max-w-3xl mx-auto">
            We combine creativity, technology, and strategy to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 dark:from-white/50 dark:to-gray-100/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 dark:border-gray-300 transition-all duration-300 hover:border-pink-500/30"
            >
              <div className="mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-4 dark:text-gray-900">{benefit.title}</h3>
              <p className="text-gray-400 dark:text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
