'use client'

import { useState } from 'react'
import { SectionHeader, Card, Button, Icon } from '@/components/ui'

const offices = [
  { label: 'HQ', country: 'Canada', city: 'Calgary', phone: '+1 368 399 3191' },
  { label: 'Sales', country: 'United States', city: 'Brooklyn, NY', phone: '+1 650 680 9055' },
  { label: 'Asia', country: 'China', city: 'Nanjing', phone: '+86-180 3059 1340' },
]

const productOptions = [
  { value: '', label: 'Select product' },
  { value: 'fertilizers', label: 'Fertilizers' },
  { value: 'sulphur', label: 'Sulphur' },
  { value: 'petroleum', label: 'Petroleum Products' },
  { value: 'inorganics', label: 'Industrial Inorganics' },
  { value: 'other', label: 'Other' },
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    const form = e.target as HTMLFormElement
    form.reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const inputClass = 'w-full h-11 px-4 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors'

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-main">
        <SectionHeader
          label="Contact"
          title="Get in Touch"
          description="Request quotes or discuss your requirements."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <Card className="lg:col-span-3 p-6">
            {isSubmitted && (
              <div className="mb-4 p-3 bg-primary-light rounded-lg text-primary text-sm">
                Thank you! We&apos;ll respond within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Name *" required className={inputClass} />
                <input type="text" name="company" placeholder="Company *" required className={inputClass} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="email" name="email" placeholder="Email *" required className={inputClass} />
                <input type="tel" name="phone" placeholder="Phone" className={inputClass} />
              </div>
              <select name="product" required className={inputClass}>
                {productOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" name="quantity" placeholder="Quantity (MT)" className={inputClass} />
                <input type="text" name="port" placeholder="Destination Port" className={inputClass} />
              </div>
              <textarea
                name="message"
                rows={3}
                placeholder="Additional details..."
                className={`${inputClass} h-auto py-3 resize-none`}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
              </Button>
            </form>
          </Card>

          {/* Offices */}
          <div className="lg:col-span-2 space-y-4">
            {offices.map((office) => (
              <Card key={office.country} className="p-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                  <Icon name="map-pin" size={18} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-400 uppercase">{office.label}</span>
                    <span className="font-medium text-gray-900">{office.country}</span>
                  </div>
                  <p className="text-sm text-gray-500">{office.city}</p>
                </div>
                <a href={`tel:${office.phone.replace(/[\s-]/g, '')}`} className="text-sm text-primary font-medium whitespace-nowrap">
                  {office.phone}
                </a>
              </Card>
            ))}

            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Icon name="mail" size={18} className="text-gray-400" />
                <a href="mailto:info@empireindustrial.com" className="text-sm text-primary font-medium">
                  info@empireindustrial.com
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
