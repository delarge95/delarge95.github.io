import { HeroSection } from './components/sections/HeroSection'
import { CapabilitiesSection } from './components/sections/CapabilitiesSection'
import { CaseStudiesSection } from './components/sections/CaseStudiesSection'
import { CTASection } from './components/sections/CTASection'
import { FooterSection } from './components/sections/FooterSection'
import { Navigation } from './components/Navigation'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-[72px]"> {/* Offset for fixed nav */}
        <HeroSection />
        <CapabilitiesSection />
        <CaseStudiesSection />
        <CTASection />
      </main>
      
      <FooterSection />
    </div>
  )
}

export default App
