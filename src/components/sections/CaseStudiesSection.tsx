import { motion } from 'framer-motion'
import { Bot, Boxes, Newspaper, Sparkles, ArrowUpRight } from 'lucide-react'

const caseStudies = [
  {
    icon: Bot,
    title: 'ARA: Sistema Multi-Agente',
    category: 'Automatización de Investigación',
    challenge: 'Investigación académica compleja consume tiempo y se fragmenta entre fuentes',
    solution: 'Sistema multi-agente con 4 roles especializados (NicheAnalyst, LiteratureResearcher, TechnicalArchitect, ContentSynthesizer)',
    stack: ['Python', 'CrewAI', 'FastAPI', 'Next.js', 'Supabase', 'LLMs'],
    results: '70% reducción en tiempo de investigación',
    kpis: 'Time-to-Value, % tareas automatizadas, calidad de síntesis'
  },
  {
    icon: Boxes,
    title: 'Portafolio 3D Interactivo',
    category: 'Experiencias Visuales',
    challenge: 'Mostrar calidad 3D y versatilidad que movilice decisiones comerciales',
    solution: 'Pipelines PBR profesionales y demos interactivas optimizadas para tiempo real',
    stack: ['Unity (C#)', 'Blender', 'Maya', '3ds Max', 'WebGL'],
    results: 'Pipeline consistente, 50+ proyectos 3D',
    kpis: 'Engagement, tiempo de carga, FPS en tiempo real'
  },
  {
    icon: Newspaper,
    title: 'AI News Aggregator',
    category: 'Curación Inteligente',
    challenge: 'Curación y resumen de noticias de IA lenta y dispersa',
    solution: 'Pipeline de ingestión automatizada + LLMs + dashboard analítico',
    stack: ['Python', 'FastAPI', 'React', 'APIs LLM'],
    results: 'En desarrollo activo',
    kpis: 'Latencia p95, CTR, adherencia a fuentes validadas'
  },
  {
    icon: Sparkles,
    title: 'Automatización Creativa',
    category: 'Productividad',
    challenge: 'Productividad del equipo diluida por tareas repetitivas',
    solution: 'Scripts + agentes de desarrollo (Copilot/Cursor) integrados a flujos clave',
    stack: ['Python', 'APIs IA', 'Playwright', 'MCP'],
    results: 'Mejora significativa en throughput',
    kpis: 'Ahorro de tiempo, errores evitados, throughput de tareas'
  }
]

export function CaseStudiesSection() {
  return (
    <section id="cases" className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full mb-6">
            <span className="text-sm text-secondary font-medium">Casos de Estudio</span>
          </div>
          <h2 className="text-h1 text-text-primary mb-4">
            Proyectos con impacto empresarial
          </h2>
          <p className="text-body text-text-secondary">
            Casos orientados a ROI y resultados medibles: Desafío → Estrategia → Solución → Resultados
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card border border-border-subtle rounded-linear p-8 hover:border-border hover:-translate-y-2 transition-all duration-linear"
            >
              {/* Icon & Category */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-linear flex items-center justify-center">
                    <caseStudy.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">
                      {caseStudy.title}
                    </h3>
                    <p className="text-sm text-text-muted">{caseStudy.category}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors" />
              </div>

              {/* Challenge */}
              <div className="mb-4">
                <div className="text-sm font-medium text-text-primary mb-2">Desafío</div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <div className="text-sm font-medium text-text-primary mb-2">Solución</div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>

              {/* Stack */}
              <div className="mb-4">
                <div className="text-sm font-medium text-text-primary mb-2">Stack</div>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-background border border-border-subtle rounded-full text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results & KPIs */}
              <div className="pt-4 border-t border-border-subtle space-y-2">
                <div>
                  <span className="text-sm font-medium text-primary">Resultados: </span>
                  <span className="text-sm text-text-secondary">{caseStudy.results}</span>
                </div>
                <div>
                  <span className="text-xs text-text-muted">KPIs: {caseStudy.kpis}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
