import { Lightbulb, BarChart3, Cpu, Users, PenTool, BookOpen, Megaphone, Settings, Target, Globe } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      title: "Influencer Marketing",
      description: "Strategic partnerships with top creators to amplify your brand's reach and engagement across social platforms.",
      icon: <Users className="h-10 w-10 text-pink-500" />,
    },
    {
      title: "Campaign Strategy",
      description: "Data-driven campaign planning and execution to maximize ROI and achieve your marketing objectives.",
      icon: <BarChart3 className="h-10 w-10 text-pink-500" />,
    },
    {
      title: "Software Development",
      description: "Custom software solutions and digital tools to streamline operations and enhance business efficiency.",
      icon: <Cpu className="h-10 w-10 text-pink-500" />,
    },
    {
      title: "Social Media Management",
      description: "Comprehensive social media strategy and management to build brand presence and engage your audience.",
      icon: <Megaphone className="h-10 w-10 text-pink-500" />,
    },
    {
      title: "Marketing Tools",
      description: "Advanced marketing automation and analytics tools to optimize campaigns and track performance metrics.",
      icon: <Settings className="h-10 w-10 text-pink-500" />,
    },
    {
      title: "Content Creation",
      description: "Professional content development including copywriting, design, and multimedia production for all platforms.",
      icon: <PenTool className="h-10 w-10 text-pink-500" />,
    },
    {
      title: "Training and Consulting",
      description: "Expert guidance and training programs to enhance your team's digital marketing capabilities and knowledge.",
      icon: <BookOpen className="h-10 w-10 text-pink-500" />,
    },
    // {
    //   title: "Brand Strategy",
    //   description: "Comprehensive brand development and positioning strategies to establish a strong market presence.",
    //   icon: <Target className="h-10 w-10 text-pink-500" />,
    // },
    // {
    //   title: "Digital Transformation",
    //   description: "End-to-end digital transformation services to modernize your business operations and customer experience.",
    //   icon: <Globe className="h-10 w-10 text-pink-500" />,
    // },
    // {
    //   title: "Market Research",
    //   description: "In-depth market analysis and consumer insights to inform strategic business decisions.",
    //   icon: <Lightbulb className="h-10 w-10 text-pink-500" />,
    // },
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

        <div className="flex flex-col items-center gap-8">
          {/* First row - 4 services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {services.slice(0, 4).map((service, index) => (
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

          {/* Second row - 3 services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full lg:w-3/4">
            {services.slice(4, 7).map((service, index) => (
              <div
                key={index + 4}
                className="bg-gray-800/50 dark:bg-white/50 backdrop-blur-sm rounded-xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:bg-gray-800/80 dark:hover:bg-white/80"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 dark:text-gray-900">{service.title}</h3>
                <p className="text-gray-400 dark:text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
