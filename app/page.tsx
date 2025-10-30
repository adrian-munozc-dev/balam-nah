import { Hero } from "@/components/hero"
import { Activities } from "@/components/activities"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { UpcomingEvents } from "@/components/upcoming-events"
import { LocationMap } from "@/components/location-map"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Activities />
      <Gallery />
      <Testimonials />
      <UpcomingEvents />
      <LocationMap />
      <Contact />
      <Footer />
    </main>
  )
}
