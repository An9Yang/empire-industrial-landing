import Image from 'next/image'
import Link from 'next/link'
import { Button, Icon } from '@/components/ui'

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Industrial port"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative container-main py-32">
        <div className="max-w-2xl">
          <p className="text-white/60 text-sm font-medium tracking-wide uppercase mb-4">
            Engineering-Backed Supply Chain
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight">
            Beyond Logistics:
            <span className="block mt-1 text-white/80">
              Delivering Industrial Solutions
            </span>
          </h1>
          <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl">
            Bridging raw material supply and industrial application with engineering precision across North America and Asia.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="#products">
              <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90">
                View Products
                <Icon name="arrow-right" size={18} className="ml-2" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              >
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
