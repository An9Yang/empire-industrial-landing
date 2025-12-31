import Link from 'next/link'
import { SectionHeader, Card, Icon, Button, type IconName } from '@/components/ui'

interface ProductCategory {
  id: string
  title: string
  icon: IconName
  color: string
  items: string[]
}

const categories: ProductCategory[] = [
  {
    id: 'fertilizers',
    title: 'Fertilizers',
    icon: 'leaf',
    color: 'bg-primary',
    items: ['Urea (46-0-0)', 'DAP / MAP', 'MOP / SOP', 'Custom NPK Blends'],
  },
  {
    id: 'sulphur',
    title: 'Sulphur',
    icon: 'cube',
    color: 'bg-accent-yellow',
    items: ['Granular', 'Pastille', 'Prilled', 'Lump'],
  },
  {
    id: 'petroleum',
    title: 'Petroleum Products',
    icon: 'fire',
    color: 'bg-accent-gray',
    items: ['Petroleum Coke', 'NGL/LPG', 'Refinery By-products'],
  },
  {
    id: 'inorganics',
    title: 'Industrial Inorganics',
    icon: 'beaker',
    color: 'bg-accent-blue',
    items: ['HCl / H2SO4', 'NaOH', 'Sodium Hypochlorite', 'Zinc Compounds'],
  },
]

export function Products() {
  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-main">
        <SectionHeader
          label="Products"
          title="Four Product Categories"
          description="Complete documentation and quality assurance for all products."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Card key={category.id} variant="outline" className="p-5 hover:border-primary/30 transition-colors flex flex-col h-full">
              <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                <Icon name={category.icon} size={20} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">{category.title}</h3>
              <ul className="space-y-1.5 flex-grow">
                {category.items.map((item) => (
                  <li key={item} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1 mt-4"
              >
                Get Quote
                <Icon name="arrow-right" size={14} />
              </Link>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-primary rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white">Need a custom solution?</h3>
            <p className="text-white/70 mt-1">Our team can help source specific products and arrange logistics.</p>
          </div>
          <Link href="#contact">
            <Button className="bg-white text-primary hover:bg-white/90 whitespace-nowrap">
              Contact Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
