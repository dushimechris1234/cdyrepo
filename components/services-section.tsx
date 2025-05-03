import { Lightbulb, BarChart3, Cpu, Users } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      title: "Influencer Marketing",
      description: "Connect with the right creators to amplify your brand message and reach new audiences.",
      icon: <Users className="h-10 w-10 text-pink-500" />,
    },
    {
      title: "Social Media Strategy",
      description: "Data-driven strategies to boost engagement and build meaningful connections with your audience.",
      icon: <BarChart3 className="h-10 w-10 text-pink-500" />,
    },
    {
      title: "AI Tools",
      description: "Leverage cutting-edge AI technology to optimize campaigns and predict market trends.",
      icon: <Cpu className="h-10 w-10 text-pink-500" />,
    },
    {
      title: "Talent Management",
      description: "End-to-end management for creators, from content strategy to brand partnerships.",
      icon: <Lightbulb className="h-10 w-10 text-pink-500" />,
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-black dark:from-white dark:to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-900">Our Services</h2>
          <p className="text-xl text-gray-400 dark:text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to elevate your brand in the digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800/50 dark:bg-white/50 backdrop-blur-sm rounded-xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:bg-gray-800/80 dark:hover:bg-white/80"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 dark:text-gray-900">{service.title}</h3>
              <p className="text-gray-400 dark:text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
