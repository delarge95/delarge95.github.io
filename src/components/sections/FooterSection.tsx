import { Linkedin, Twitter, Mail } from 'lucide-react'

export function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">AW</span>
              </div>
              <span className="text-text-primary font-semibold text-lg tracking-tight">
                AW Studios
              </span>
            </div>
            <p className="text-sm text-text-muted text-center md:text-left">
              Creative Technology Director | IA + 3D + Full-Stack
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-border-subtle flex items-center justify-center hover:border-border transition-colors duration-linear"
            >
              <Linkedin className="w-5 h-5 text-text-secondary" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-border-subtle flex items-center justify-center hover:border-border transition-colors duration-linear"
            >
              <Twitter className="w-5 h-5 text-text-secondary" />
            </a>
            <a
              href="mailto:contact@awstudios.com"
              className="w-10 h-10 rounded-full bg-card border border-border-subtle flex items-center justify-center hover:border-border transition-colors duration-linear"
            >
              <Mail className="w-5 h-5 text-text-secondary" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-text-muted">
            © {currentYear} AW Studios. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}
