import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black dark:bg-white text-white dark:text-gray-900 py-12 border-t border-gray-800 dark:border-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-6">
              <span className="text-pink-500">C</span>
              <span className="dark:text-gray-900">DY</span>
            </div>
            <p className="text-gray-400 dark:text-gray-600 mb-6">
              Connecting brands with audiences through innovative digital strategies and creator partnerships.
            </p>
            <p className="text-gray-500">© {new Date().getFullYear()} CDY. All rights reserved.</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 dark:text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 dark:text-gray-600 hover:text-pink-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 dark:text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/talent" className="text-gray-400 dark:text-gray-600 hover:text-pink-500 transition-colors">
                  Talent
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 dark:text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 dark:text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 dark:text-gray-900">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/influencer-marketing"
                  className="text-gray-400 dark:text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Influencer Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/social-media"
                  className="text-gray-400 dark:text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Social Media Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-tools"
                  className="text-gray-400 dark:text-gray-600 hover:text-pink-500 transition-colors"
                >
                  AI Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/services/talent-management"
                  className="text-gray-400 dark:text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Talent Management
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 dark:text-gray-900">Newsletter</h3>
            <p className="text-gray-400 dark:text-gray-600 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-gray-700 dark:border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-500 flex-grow dark:text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
