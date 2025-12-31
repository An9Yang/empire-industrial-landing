import { SectionHeader, Card, Icon, type IconName } from '@/components/ui'

interface Service {
  icon: IconName
  title: string
  description: string
}

const services: Service[] = [
  { icon: 'truck', title: 'Truck', description: 'Regional & last-mile delivery' },
  { icon: 'train', title: 'Rail', description: 'Long-haul bulk transport' },
  { icon: 'anchor', title: 'Port & Terminal', description: 'Loading & staging operations' },
  { icon: 'globe', title: 'Ocean Freight', description: 'Cross-border coordination' },
]

export function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-main">
        <SectionHeader
          label="Services"
          title="End-to-End Logistics"
          description="Coordinated shipping across North America and Asia."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <Card key={service.title} className="p-5 text-center">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name={service.icon} size={22} className="text-primary" />
              </div>
              <h3 className="font-medium text-gray-900">{service.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{service.description}</p>
            </Card>
          ))}
        </div>

        {/* Documentation */}
        <Card className="mt-8 p-5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
              <Icon name="document" size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Documentation Ready</h3>
              <p className="text-sm text-gray-600">Complete SDS/COA preparation for smooth customs clearance.</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
