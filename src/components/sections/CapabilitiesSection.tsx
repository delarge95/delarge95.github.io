import { motion } from 'framer-motion'
import { Lightbulb, Zap, Shield } from 'lucide-react'

const capabilities = [
  {
    icon: Lightbulb,
    title: 'Innovación en IA Creativa',
    description: 'PoCs de IA generativa aplicada a creatividad, prototipado rápido y frameworks de medición. De demo a sistema de valor en semanas.',
    deliverables: ['PoCs instrumentados', 'MVPs medibles', 'Frameworks de KPIs'],
    metrics: 'Time-to-Value, % hipótesis validadas, adopción de features'
  },
  {
    icon: Zap,
    title: 'Transformación Digital',
    description: 'Integración de plataformas, datos, CMS/CRM/ERP y optimización runtime 3D/AR para tiempo real con arquitectura componible.',
    deliverables: ['Integración APIs', 'Pipelines de datos', 'Optimización 3D/AR'],
    metrics: 'Latencia p95/p99, uptime, lead time, FPS/tiempo de carga'
  },
  {
    icon: Shield,
    title: 'Liderazgo y Gobernanza',
    description: 'Sistemas sostenibles con gobernanza de IA, escalabilidad organizacional, UX accesible y seguridad/compliance.',
    deliverables: ['Playbooks', 'Políticas QA', 'Auditorías'],
    metrics: 'Defectos/KLOC, auditorías superadas, MTTR, SLOs'
  }
]

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 relative">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-h1 text-text-primary mb-4">
            Capacidades estratégicas
          </h2>
          <p className="text-body text-text-secondary">
            Tres pilares que sostienen la ejecución enterprise: innovación medible,
            integración escalable y gobernanza robusta.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card border border-border-subtle rounded-linear p-8 hover:border-border hover:-translate-y-2 transition-all duration-linear"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-linear flex items-center justify-center mb-6">
                <capability.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-h3 text-text-primary mb-4">
                {capability.title}
              </h3>

              <p className="text-base text-text-secondary mb-6 leading-relaxed">
                {capability.description}
              </p>

              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-text-primary mb-2">
                    Entregables clave
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {capability.deliverables.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-3 py-1 bg-background border border-border-subtle rounded-full text-text-secondary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium text-text-primary mb-2">
                    KPIs sugeridos
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {capability.metrics}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Methodology Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 bg-card border border-secondary/30 rounded-linear">
            <span className="text-secondary font-medium text-sm">
              Metodología propietaria: Creative-AI Integration Framework
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
