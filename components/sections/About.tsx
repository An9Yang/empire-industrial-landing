import Image from 'next/image'
import { SectionHeader } from '@/components/ui'

const stats = [
  { value: '5', label: 'Industries' },
  { value: '4', label: 'Product Lines' },
  { value: '2', label: 'Continents' },
]

export function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeader
              label="About Us"
              title="Engineering Expertise Meets Supply Chain Excellence"
              align="left"
              className="mb-6"
            />
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Empire Industrial Corp. specializes in industrial chemicals and materials,
                bridging North American and Asian markets with engineering and chemical-technical expertise.
              </p>
              <p>
                Unlike standard trading companies, our operations are underpinned by rigorous
                specification review, quality control, and safety protocols.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-100">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold text-primary">{stat.value}</p>
                  <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Industrial operations"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
