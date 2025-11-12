import { motion } from 'framer-motion'
import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { CheckCircle2, Loader2 } from 'lucide-react'

export function CTASection() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    company: '',
    job_title: '',
    message: '',
    interest_area: '',
    budget_range: '',
    timeline: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const { data, error } = await supabase.functions.invoke('aw-studios-contact', {
        body: formData
      })

      if (error) {
        throw error
      }

      // Handle nested response structure
      const result = data?.data || data

      if (result?.success) {
        setStatus('success')
        setFormData({
          full_name: '',
          email: '',
          company: '',
          job_title: '',
          message: '',
          interest_area: '',
          budget_range: '',
          timeline: ''
        })
      } else {
        throw new Error(result?.error?.message || 'Error al enviar el formulario')
      }
    } catch (error: any) {
      console.error('Form submission error:', error)
      setStatus('error')
      setErrorMessage(error.message || 'Error al enviar el formulario. Por favor, inténtelo de nuevo.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <span className="text-sm text-primary font-medium">Inicie su transformación</span>
            </div>
            <h2 className="text-h1 text-text-primary mb-4">
              Agende su diagnóstico de impacto
            </h2>
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              Consultoría estratégica de 5 días: evaluamos su contexto, proponemos soluciones medibles y
              definimos roadmap con KPIs claros.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card border border-border-subtle rounded-linear p-8"
          >
            {status === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-text-primary mb-2">
                  ¡Formulario enviado exitosamente!
                </h3>
                <p className="text-text-secondary">
                  Nos pondremos en contacto en las próximas 24-48 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="full_name" className="block text-sm font-medium text-text-primary mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      required
                      value={formData.full_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-linear text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Carlos Martínez"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Email corporativo *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-linear text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="carlos@empresa.com"
                    />
                  </div>
                </div>

                {/* Company & Job Title */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-linear text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="TechCorp SA"
                    />
                  </div>
                  <div>
                    <label htmlFor="job_title" className="block text-sm font-medium text-text-primary mb-2">
                      Cargo
                    </label>
                    <input
                      type="text"
                      id="job_title"
                      name="job_title"
                      value={formData.job_title}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-linear text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="CTO / CMO / COO"
                    />
                  </div>
                </div>

                {/* Interest Area & Budget */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="interest_area" className="block text-sm font-medium text-text-primary mb-2">
                      Área de interés
                    </label>
                    <select
                      id="interest_area"
                      name="interest_area"
                      value={formData.interest_area}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-linear text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    >
                      <option value="">Seleccionar...</option>
                      <option value="Innovación en IA">Innovación en IA</option>
                      <option value="Transformación Digital">Transformación Digital</option>
                      <option value="Liderazgo y Gobernanza">Liderazgo y Gobernanza</option>
                      <option value="Consultoría estratégica">Consultoría estratégica</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget_range" className="block text-sm font-medium text-text-primary mb-2">
                      Rango de presupuesto
                    </label>
                    <select
                      id="budget_range"
                      name="budget_range"
                      value={formData.budget_range}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-linear text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    >
                      <option value="">Seleccionar...</option>
                      <option value="<$50k">&lt; $50k</option>
                      <option value="$50k-$100k">$50k - $100k</option>
                      <option value="$100k-$250k">$100k - $250k</option>
                      <option value=">$250k">&gt; $250k</option>
                    </select>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-text-primary mb-2">
                    Timeline esperado
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-linear text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  >
                    <option value="">Seleccionar...</option>
                    <option value="Inmediato">Inmediato (0-2 semanas)</option>
                    <option value="Q1 2025">Q1 2025</option>
                    <option value="Q2 2025">Q2 2025</option>
                    <option value="H2 2025">H2 2025</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-linear text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Describa brevemente su desafío y objetivos..."
                  />
                </div>

                {/* Error Message */}
                {status === 'error' && (
                  <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-linear">
                    <p className="text-sm text-destructive">{errorMessage}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-8 py-4 bg-white text-black rounded-linear text-nav font-medium hover:bg-neutral-100 transition-colors duration-linear disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar solicitud'
                  )}
                </button>

                <p className="text-xs text-text-muted text-center">
                  Al enviar este formulario, acepta que nos pongamos en contacto para discutir su proyecto.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
