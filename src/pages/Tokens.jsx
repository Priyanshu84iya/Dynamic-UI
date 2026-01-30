import { Form } from '../components/Form'

export const Tokens = () => {
  return (
    <>
      <section className="grid gap-[var(--space-4)]">
        <div>
          <p className="text-[var(--font-size-xs)] uppercase tracking-[0.3em] text-[var(--color-muted)]">
            Tokens
          </p>
          <h2 className="mt-[var(--space-2)] text-[var(--font-size-2xl)] font-semibold text-[var(--color-text)]">
            Design token handoff
          </h2>
          <p className="mt-[var(--space-3)] max-w-[760px] text-[var(--font-size-md)] text-[var(--color-muted)]">
            Explore token-driven form controls and consistent spacing. Each
            input inherits the selected theme’s radius, shadow, and typography.
          </p>
        </div>
      </section>
      <Form />
    </>
  )
}
