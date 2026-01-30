import { Button } from './Button'

export const Form = () => {
  return (
    <section className="theme-card grid gap-[var(--space-6)] p-[var(--space-7)]">
      <div>
        <p className="text-[var(--font-size-xs)] uppercase tracking-[0.3em] text-[var(--color-muted)]">
          Form & Inputs
        </p>
        <h3 className="mt-[var(--space-2)] text-[var(--font-size-xl)] font-semibold text-[var(--color-text)]">
          Accessible and consistent controls
        </h3>
      </div>
      <form className="grid gap-[var(--space-4)] md:grid-cols-2">
        <label className="grid gap-[var(--space-2)] text-[var(--font-size-sm)] text-[var(--color-muted)]">
          Full name
          <input
            className="theme-input"
            placeholder="Enter your name"
            type="text"
          />
        </label>
        <label className="grid gap-[var(--space-2)] text-[var(--font-size-sm)] text-[var(--color-muted)]">
          Email address
          <input
            className="theme-input"
            placeholder="you@example.com"
            type="email"
          />
        </label>
        <label className="grid gap-[var(--space-2)] text-[var(--font-size-sm)] text-[var(--color-muted)]">
          Design role
          <select className="theme-input">
            <option>Product Designer</option>
            <option>UI Engineer</option>
            <option>Design Systems</option>
          </select>
        </label>
        <label className="grid gap-[var(--space-2)] text-[var(--font-size-sm)] text-[var(--color-muted)]">
          Team size
          <select className="theme-input">
            <option>1 - 5</option>
            <option>6 - 25</option>
            <option>26 - 100</option>
          </select>
        </label>
        <label className="md:col-span-2 grid gap-[var(--space-2)] text-[var(--font-size-sm)] text-[var(--color-muted)]">
          Notes
          <textarea className="theme-input min-h-[120px]" placeholder="Add context" />
        </label>
        <div className="md:col-span-2 flex flex-wrap items-center gap-[var(--space-3)]">
          <Button variant="primary" type="submit">
            Submit request
          </Button>
          <Button variant="secondary" type="button">
            Save draft
          </Button>
        </div>
      </form>
    </section>
  )
}
