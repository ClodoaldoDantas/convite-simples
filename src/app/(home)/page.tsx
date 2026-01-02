import { CallToActionSection } from './_partials/call-to-action-section'
import { FeaturesSection } from './_partials/features-section'
import { Footer } from './_partials/footer'
import { Header } from './_partials/header'
import { HeroSection } from './_partials/hero-section'
import { HowItWorksSection } from './_partials/how-it-works-section'

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CallToActionSection />
      <Footer />
    </div>
  )
}
