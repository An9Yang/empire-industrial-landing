import { Icon, type IconName } from '@/components/ui'

interface ValueItem {
  icon: IconName
  title: string
  description: string
}

const values: ValueItem[] = [
  {
    icon: 'shield',
    title: 'Engineering Foundation',
    description: 'Spec review, QC & Safety',
  },
  {
    icon: 'document',
    title: 'Regulatory Compliance',
    description: 'SDS, COA certified',
  },
  {
    icon: 'bolt',
    title: 'End-to-End Execution',
    description: 'Sourcing to delivery',
  },
]

export function ValueBar() {
  return (
    <section className="bg-[var(--color-bg-dark)] border-t border-white/5">
      <div className="container-main py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {values.map((item) => (
            <div key={item.title} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <Icon name={item.icon} size={18} className="text-white/70" />
              </div>
              <div>
                <h3 className="text-white text-sm font-medium">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
