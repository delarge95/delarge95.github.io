import { useState, useEffect } from 'react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 72 // Nav height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-linear ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
      style={{ height: '72px' }}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">AW</span>
          </div>
          <span className="text-text-primary font-semibold text-lg tracking-tight">
            AW Studios
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-12">
          <button
            onClick={() => scrollToSection('capabilities')}
            className="text-nav text-text-secondary hover:text-text-primary transition-colors duration-linear"
          >
            Capacidades
          </button>
          <button
            onClick={() => scrollToSection('cases')}
            className="text-nav text-text-secondary hover:text-text-primary transition-colors duration-linear"
          >
            Casos
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 bg-white text-black rounded-linear text-nav font-medium hover:bg-neutral-100 transition-colors duration-linear"
          >
            Contactar
          </button>
        </div>
      </div>
    </nav>
  )
}
