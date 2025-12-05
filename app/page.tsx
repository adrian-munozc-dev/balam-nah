import { Hero } from "@/components/hero"
import { Activities } from "@/components/activities"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { UpcomingEvents } from "@/components/upcoming-events"
import { LocationMap } from "@/components/location-map"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { ChristmasBanner } from "@/components/christmas-banner"
import { Snowfall } from "@/components/snowfall"
import { ChristmasFlyers } from "@/components/christmas-flyers"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Snowfall />
      <Hero />
      <Activities />
      <Gallery />
      <Testimonials />
      <ChristmasBanner />
      <ChristmasFlyers />
      <LocationMap />
      <Contact />
      <Footer />
    </main>
  )
}
