import { Hero } from "@/components/hero"
import { LimitedSpots } from "@/components/limited-spots"
import { About } from "@/components/about"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { Transformations } from "@/components/transformations"
import { InstagramSection } from "@/components/instagram"
import { Booking } from "@/components/booking"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <LimitedSpots />
      <About />
      <Pricing />
      <Testimonials />
      <Transformations />
      <InstagramSection />
      <Booking />
      <Footer />
    </main>
  )
}
