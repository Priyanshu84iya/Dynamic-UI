import { Hero } from '../components/Hero'

export const Overview = () => {
  return (
    <>
      <section className="grid gap-[var(--space-4)]">
        <div>
          <p className="text-[var(--font-size-xs)] uppercase tracking-[0.3em] text-[var(--color-muted)]">
            Overview
          </p>
          <h2 className="mt-[var(--space-2)] text-[var(--font-size-2xl)] font-semibold text-[var(--color-text)]">
            A live playground for design systems
          </h2>
          <p className="mt-[var(--space-3)] max-w-[760px] text-[var(--font-size-md)] text-[var(--color-muted)]">
            Explore 20 curated design styles and see how tokens reshape the same
            component set in real time. Switch instantly between aesthetics
            without reloading the page.
          </p>
        </div>
      </section>
      <Hero />
    </>
  )
}
