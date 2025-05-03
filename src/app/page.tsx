import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/landing/Hero'
import Differentiator from '@/components/landing/Differentiator'
import ProductDefinition from '@/components/landing/ProductDefinition'
import Tech from '@/components/landing/Tech'
import WhyItMatters from '@/components/landing/WhyItMatters'
import WaitlistSection from '@/components/landing/WaitlistSection'
import CtaSection from '@/components/landing/CtaSection'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Header />
      <main>
        <Hero />
        <section id="features" className="...">
          <Differentiator />
        </section>
        <section id="how-it-works" className="...">
          <ProductDefinition />
        </section>
        <section id="technology" className="...">
          <Tech />
        </section>
        <WhyItMatters />
        <section id="waitlist" className="...">
          <WaitlistSection />
        </section>
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
