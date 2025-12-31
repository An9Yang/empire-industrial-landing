import Link from 'next/link'

const quickLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#industries', label: 'Industries' },
  { href: '#products', label: 'Products' },
  { href: '#services', label: 'Services' },
  { href: '#sustainability', label: 'Sustainability' },
  { href: '#contact', label: 'Contact' },
]

const productLinks = [
  { href: '#products', label: 'Fertilizers' },
  { href: '#products', label: 'Sulphur' },
  { href: '#products', label: 'Petroleum Products' },
  { href: '#products', label: 'Industrial Inorganics' },
]

export function Footer() {
  return (
    <footer className="bg-dark text-white py-12 md:py-16">
      <div className="container-main">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-lg">E</span>
              </div>
              <span className="font-semibold text-lg">Empire Industrial Corp.</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-md">
              Engineering-backed supply chain solutions for industrial chemicals and materials across North America and Asia.
            </p>
            <a
              href="#"
              className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-sm text-white/90 uppercase tracking-wide mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-medium text-sm text-white/90 uppercase tracking-wide mb-4">Products</h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Empire Industrial Corp. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/40 hover:text-white/70 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/40 hover:text-white/70 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
