export const Footer = () => {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto flex max-w-[var(--layout-max)] flex-col items-start justify-between gap-[var(--space-4)] px-[var(--space-6)] py-[var(--space-6)] md:flex-row md:items-center">
        <div className="space-y-[var(--space-2)]">
          <p className="text-[var(--font-size-sm)] text-[var(--color-text)]">
            Design System Lab
          </p>
          <p className="text-[var(--font-size-xs)] text-[var(--color-muted)]">
            Built for theme experimentation and scalable UI foundations.
          </p>
          <div className="space-y-[var(--space-1)] text-[var(--font-size-xs)] text-[var(--color-muted)]">
            <p>© 2026 Pry Uchiha. All rights reserved.</p>
            <p>© 2026 Pry Uchiha. Design system implementation.</p>
          </div>
          <div className="flex flex-wrap gap-[var(--space-3)]">
            <a
              href="https://github.com/Priyanshu84iya"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center rounded-[var(--radius-pill)] border border-[var(--color-border)] p-[var(--space-2)] text-[var(--color-accent)] transition-colors hover:text-[var(--color-primary)]"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.2-1.11-1.52-1.11-1.52-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.33.1-2.77 0 0 .84-.27 2.75 1.05.8-.23 1.66-.35 2.51-.35.85 0 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.44.2 2.51.1 2.77.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .27.18.6.69.49C19.14 20.56 22 16.76 22 12.26 22 6.58 17.52 2 12 2z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/priyansh.u26/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center rounded-[var(--radius-pill)] border border-[var(--color-border)] p-[var(--space-2)] text-[var(--color-accent)] transition-colors hover:text-[var(--color-primary)]"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 1.6a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4zm4.5-2.4a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-[var(--space-3)] text-[var(--font-size-xs)] text-[var(--color-muted)]">
          <span>Tokens</span>
          <span>Components</span>
          <span>Accessibility</span>
          <span>Patterns</span>
        </div>
      </div>
    </footer>
  )
}
