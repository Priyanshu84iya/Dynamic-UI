import { Card } from '../components/Card'

const cardData = [
  {
    eyebrow: 'Primary Metrics',
    title: 'Consistency across 20 themes',
    description:
      'Tokenized typography, spacing, radius, and shadows keep UI predictable while each theme feels distinct.',
  },
  {
    eyebrow: 'Component Coverage',
    title: 'Buttons, cards, and form inputs',
    description:
      'Reusable primitives adapt to each visual system without changing component markup.',
  },
  {
    eyebrow: 'System Intelligence',
    title: 'Light & dark mode awareness',
    description:
      'The Dark/Light theme automatically responds to system settings using CSS variables.',
  },
]

export const ComponentsPage = () => {
  return (
    <>
      <section className="grid gap-[var(--space-4)]">
        <div>
          <p className="text-[var(--font-size-xs)] uppercase tracking-[0.3em] text-[var(--color-muted)]">
            Components
          </p>
          <h2 className="mt-[var(--space-2)] text-[var(--font-size-2xl)] font-semibold text-[var(--color-text)]">
            System-ready building blocks
          </h2>
          <p className="mt-[var(--space-3)] max-w-[760px] text-[var(--font-size-md)] text-[var(--color-muted)]">
            Each component inherits design tokens automatically, proving the UI
            adapts across visual languages without redesigning markup.
          </p>
        </div>
      </section>

      <section className="grid gap-[var(--space-5)] md:grid-cols-3">
        {cardData.map((card) => (
          <Card
            key={card.title}
            eyebrow={card.eyebrow}
            title={card.title}
            footer={
              <span className="text-[var(--font-size-xs)] text-[var(--color-muted)]">
                Updated live
              </span>
            }
          >
            {card.description}
          </Card>
        ))}
      </section>
    </>
  )
}
