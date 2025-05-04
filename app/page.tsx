import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import BrandLogos from "@/components/brand-logos"
import ServicesSection from "@/components/services-section"
import StatsSection from "@/components/stats-section"
import TopInfluencers from "@/components/top-influencers"
import WhyChooseUs from "@/components/why-choose-us"
import FAQSection from "@/components/faq-section"
import PartnersSection from "@/components/partners-section"
import TestimonialsSlider from "@/components/testimonials-slider"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 dark:from-gray-100 dark:to-white text-white dark:text-gray-900">
      <Navbar />
      <div id="hero">
        <HeroSection /> 
      </div>
      <BrandLogos />
      <div id="services">
        <ServicesSection />
      </div>
      <StatsSection />
      <div id="influencers">
        <TopInfluencers />
      </div>
      <WhyChooseUs />
      <PartnersSection />
      <div id="faq">
        <FAQSection />
      </div>
      <TestimonialsSlider />
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </main>
  )
}
