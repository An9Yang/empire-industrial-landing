'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button, Icon } from '@/components/ui'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#industries', label: 'Industries' },
  { href: '#products', label: 'Products' },
  { href: '#services', label: 'Services' },
  { href: '#sustainability', label: 'Sustainability' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-fixed transition-all duration-300',
        isScrolled ? 'bg-[var(--color-bg-dark)]/95 backdrop-blur-sm shadow-sm' : ''
      )}
    >
      <div className="container-main">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
              <span className="text-primary font-semibold text-lg">E</span>
            </div>
            <span className="text-white font-semibold text-lg hidden sm:block">
              Empire Industrial
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-white/80 hover:text-white transition-colors rounded-md hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <Link href="#contact" className="ml-3">
              <Button className="bg-white text-primary hover:bg-white/90" size="sm">
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={isMobileMenuOpen ? 'x' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden bg-[var(--color-bg-dark)] border-t border-white/10 overflow-hidden transition-all duration-300',
          isMobileMenuOpen ? 'max-h-80' : 'max-h-0'
        )}
      >
        <div className="container-main py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-3 py-2.5 text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="#contact"
              className="block w-full text-center bg-white text-primary py-2.5 rounded-md font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
