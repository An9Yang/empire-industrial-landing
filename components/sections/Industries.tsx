import Image from 'next/image'
import { SectionHeader, Card, Icon, type IconName } from '@/components/ui'

interface Industry {
  icon: IconName
  title: string
  description: string
  image: string
}

const industries: Industry[] = [
  {
    icon: 'leaf',
    title: 'Fertilizers',
    description: 'Nitrogen and phosphate supply with seasonal demand support.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: 'beaker',
    title: 'Mining & Mineral Processing',
    description: 'Reagents for extraction and flotation processes.',
    image: 'https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: 'fire',
    title: 'Metallurgy & Metals',
    description: 'Smelting and refining chemicals for metal processing.',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: 'beaker',
    title: 'Water Treatment',
    description: 'Municipal and industrial system chemicals.',
    image: 'https://images.unsplash.com/photo-1584843333345-ec66bdeb9df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: 'building',
    title: 'Manufacturing',
    description: 'Process chemicals with strict quality controls.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
]

export function Industries() {
  return (
    <section id="industries" className="section-padding bg-gray-50">
      <div className="container-main">
        <SectionHeader
          label="Industries"
          title="Powering Five Key Sectors"
          description="Our products support critical operations across diverse industries."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry) => (
            <Card key={industry.title} className="group overflow-hidden">
              <div className="h-40 relative">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name={industry.icon} size={16} className="text-white/80" />
                    <h3 className="text-white font-medium">{industry.title}</h3>
                  </div>
                  <p className="text-white/70 text-sm">{industry.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
