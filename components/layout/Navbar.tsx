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
        isScrolled
          ? 'bg-white shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container-main">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2.5">
            <div className={cn(
              'w-8 h-8 rounded-md flex items-center justify-center transition-colors',
              isScrolled ? 'bg-primary' : 'bg-white'
            )}>
              <span className={cn(
                'font-semibold text-lg',
                isScrolled ? 'text-white' : 'text-primary'
              )}>E</span>
            </div>
            <span className={cn(
              'font-semibold text-lg hidden sm:block transition-colors',
              isScrolled ? 'text-gray-900' : 'text-white'
            )}>
              Empire Industrial
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 text-sm rounded-md transition-colors',
                  isScrolled
                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="#contact" className="ml-3">
              <Button
                className={cn(
                  isScrolled
                    ? 'bg-primary text-white hover:bg-primary-hover'
                    : 'bg-white text-primary hover:bg-white/90'
                )}
                size="sm"
              >
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              'md:hidden p-2 rounded-md transition-colors',
              isScrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            )}
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
          'md:hidden overflow-hidden transition-all duration-300',
          isScrolled
            ? 'bg-white border-t border-gray-100'
            : 'bg-dark border-t border-white/10',
          isMobileMenuOpen ? 'max-h-80' : 'max-h-0'
        )}
      >
        <div className="container-main py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'block px-3 py-2.5 rounded-md transition-colors',
                isScrolled
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="#contact"
              className={cn(
                'block w-full text-center py-2.5 rounded-md font-medium transition-colors',
                isScrolled
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary'
              )}
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
