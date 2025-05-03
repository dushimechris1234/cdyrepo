export default function BrandLogos() {
  const brands = [
    { name: "Meta", logo: "M" },
    { name: "Coca-Cola", logo: "C" },
    { name: "Disney", logo: "D" },
    { name: "Uber", logo: "U" },
    { name: "Amazon", logo: "A" },
    { name: "Netflix", logo: "N" },
  ]

  return (
    <section className="py-16 bg-black/50 dark:bg-gray-100/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-medium text-gray-400 dark:text-gray-600 mb-12">
          Trusted by world-class brands
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="h-16 w-40 bg-gray-800/50 dark:bg-gray-200/50 rounded-lg flex items-center justify-center text-3xl font-bold text-white/80 dark:text-gray-900/80">
                {brand.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
