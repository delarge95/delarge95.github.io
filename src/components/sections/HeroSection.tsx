import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      const offset = 72
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  const scrollToCases = () => {
    const element = document.getElementById('cases')
    if (element) {
      const offset = 72
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border-subtle rounded-full"
          >
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm text-text-secondary">Creative Technology Director</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-hero text-text-primary leading-tight"
          >
            Traducimos IA compleja en{' '}
            <span className="text-primary">experiencias medibles</span> y escalables
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body text-text-secondary max-w-2xl mx-auto"
          >
            La única intersección de IA + 3D + desarrollo Full-Stack. Convertimos tecnología
            compleja en sistemas de marca que aceleran pipeline y conversiones enterprise.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-12 pt-4"
          >
            <div>
              <div className="text-2xl font-semibold text-text-primary">$2.1-4.5M</div>
              <div className="text-sm text-text-muted">ROI empresarial</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-2xl font-semibold text-text-primary">4 semanas</div>
              <div className="text-sm text-text-muted">PoC medible</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-2xl font-semibold text-text-primary">70%</div>
              <div className="text-sm text-text-muted">Reducción tiempo</div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-white text-black rounded-linear text-nav font-medium hover:bg-neutral-100 transition-colors duration-linear inline-flex items-center gap-2"
            >
              Agenda diagnóstico de 5 días
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={scrollToCases}
              className="px-8 py-4 bg-transparent text-text-primary border border-white/20 rounded-linear text-nav font-medium hover:bg-white/5 transition-colors duration-linear"
            >
              Ver casos de estudio
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
