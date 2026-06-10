import './landing/styles/index.css'
import { useReveal } from './landing/hooks/useReveal'
import Nav from './landing/components/Nav'
import Hero from './landing/components/Hero'
import Ticker from './landing/components/Ticker'
import Stats from './landing/components/Stats'
import Manifesto from './landing/components/Manifesto'
import Features from './landing/components/Features'
import LogDemo from './landing/components/LogDemo'
import CtaSection from './landing/components/CtaSection'
import Footer from './landing/components/Footer'

export default function FluxLanding() {
  useReveal()

  return (
    <div className="fl-root">
      <Nav />
      <Hero />
      <Ticker />
      <Stats />
      <Manifesto />
      <Features />
      <LogDemo />
      <CtaSection />
      <Footer />
    </div>
  )
}
