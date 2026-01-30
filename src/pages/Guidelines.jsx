export const Guidelines = () => {
  return (
    <section className="grid gap-[var(--space-4)]">
      <div>
        <p className="text-[var(--font-size-xs)] uppercase tracking-[0.3em] text-[var(--color-muted)]">
          Guidelines
        </p>
        <h2 className="mt-[var(--space-2)] text-[var(--font-size-2xl)] font-semibold text-[var(--color-text)]">
          Typography and layout guidance
        </h2>
        <p className="mt-[var(--space-3)] max-w-[760px] text-[var(--font-size-md)] text-[var(--color-muted)]">
          Typography scales, spacing rhythms, and contrast ratios are adapted per
          theme to ensure legibility across expressive design languages.
        </p>
      </div>
      <div className="grid gap-[var(--space-4)] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-6)] shadow-sm">
        <div>
          <p className="text-[var(--font-size-xs)] uppercase tracking-[0.3em] text-[var(--color-muted)]">
            Typography Hierarchy
          </p>
          <h3 className="mt-[var(--space-2)] text-[var(--font-size-xl)] font-semibold text-[var(--color-text)]">
            A system-ready type scale
          </h3>
          <p className="mt-[var(--space-3)] text-[var(--font-size-md)] text-[var(--color-muted)]">
            Themes can amplify readability, density, and accessibility without
            rewriting component layouts.
          </p>
        </div>
        <div className="grid gap-[var(--space-2)]">
          <p className="text-[var(--font-size-xs)] text-[var(--color-muted)]">
            Caption — font-size-xs
          </p>
          <p className="text-[var(--font-size-sm)] text-[var(--color-text)]">
            Body Small — font-size-sm
          </p>
          <p className="text-[var(--font-size-md)] text-[var(--color-text)]">
            Body — font-size-md
          </p>
          <p className="text-[var(--font-size-lg)] font-medium text-[var(--color-text)]">
            Title — font-size-lg
          </p>
          <p className="text-[var(--font-size-xl)] font-semibold text-[var(--color-text)]">
            Section — font-size-xl
          </p>
          <p className="text-[var(--font-size-2xl)] font-semibold text-[var(--color-text)]">
            Display — font-size-2xl
          </p>
        </div>
      </div>
    </section>
  )
}
