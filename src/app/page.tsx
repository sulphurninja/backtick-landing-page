'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/landing/Hero'
import Differentiator from '@/components/landing/Differentiator'
import ProductDefinition from '@/components/landing/ProductDefinition'
import Tech from '@/components/landing/Tech'
import WhyItMatters from '@/components/landing/WhyItMatters'
import WaitlistSection from '@/components/landing/WaitlistSection'
import CtaSection from '@/components/landing/CtaSection'
import { FuturisticLoader } from '@/components/ui/loader'
import { AnimatePresence } from 'framer-motion'

export default function LandingPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Keep the loader visible for 5 seconds
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <AnimatePresence>
        {loading && <FuturisticLoader />}
      </AnimatePresence>

      <Header />
      <main>
        <Hero />
        <section id="features">
          <Differentiator />
        </section>
        <section id="how-it-works">
          <ProductDefinition />
        </section>
        <section id="technology">
          <Tech />
        </section>
        <WhyItMatters />
        <section id="waitlist">
          <WaitlistSection />
        </section>
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
