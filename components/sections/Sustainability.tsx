import { SectionHeader, Card, Icon, type IconName } from '@/components/ui'

interface SustainabilityCard {
  icon: IconName
  title: string
  description: string
}

const cards: SustainabilityCard[] = [
  {
    icon: 'shield',
    title: 'Responsible Supply',
    description: 'Rigorous supplier qualification and document verification.',
  },
  {
    icon: 'clipboard',
    title: 'Quality & Traceability',
    description: 'Lot-based tracking with complete COA/SDS integrity.',
  },
  {
    icon: 'cube',
    title: 'HSE Practices',
    description: 'Compliant packaging aligned with transport regulations.',
  },
]

export function Sustainability() {
  return (
    <section id="sustainability" className="section-padding bg-dark">
      <div className="container-main">
        <SectionHeader
          label="Sustainability"
          title="An Operational Requirement"
          description="Sustainable practices embedded in every aspect of our operations."
          dark
        />

        <div className="grid md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <Card key={card.title} variant="ghost" className="p-6">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name={card.icon} size={20} className="text-white/70" />
              </div>
              <h3 className="font-medium text-white mb-2">{card.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{card.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
